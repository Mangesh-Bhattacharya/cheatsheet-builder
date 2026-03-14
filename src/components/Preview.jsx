import { forwardRef, useEffect, useRef, useMemo, useDeferredValue, useCallback, memo } from 'react';
import { ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MermaidDiagram from './MermaidDiagram';
import ImageRenderer from './ImageRenderer';
import LazyKatex from './LazyKatex';
import fonts from '../styles/fonts';
import paperTemplates from '../styles/paperTemplates';
import 'katex/dist/katex.min.css';
import './Preview.css';

const preprocessMarkdown = (markdown) => {
    return markdown.replace(/\*\*([^*]+?)([\uff1a:;,!?\u3002\uff0c\uff1b\uff01\uff1f\)\]\}"'\u300b>\-\u2013\u2014\/\\|@#$%^&*+=~`])\*\*/g, '**$1$2** ');
};

const Preview = forwardRef(({ markdown, columns, fontSize, padding, gap, lineHeight, scale, setScale, orientation, theme, themes, fontFamily, paperTemplate, onLineClick, liveUpdate, setLiveUpdate }, ref) => {
    const measureRef = useRef(null);
    const pagesContainerRef = useRef(null);
    const layoutTimeoutRef = useRef(null);

    const deferredMarkdown = useDeferredValue(markdown);
    const preprocessedMarkdown = useMemo(() => preprocessMarkdown(deferredMarkdown), [deferredMarkdown]);

    const pxPerMmRef = useRef(null);
    const mmToPx = (mm) => {
        if (pxPerMmRef.current == null) {
            const div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.left = '-9999px';
            div.style.top = '-9999px';
            div.style.width = '1mm';
            document.body.appendChild(div);
            pxPerMmRef.current = div.getBoundingClientRect().width;
            document.body.removeChild(div);
        }
        return mm * pxPerMmRef.current;
    };

    const handlePageClick = useCallback((e) => {
        if (!onLineClick) return;
        const target = e.target.closest('[data-line]');
        if (target) {
            const line = parseInt(target.getAttribute('data-line'), 10);
            if (!isNaN(line)) onLineClick(line);
        }
    }, [onLineClick]);

    useEffect(() => {
        const selectedFont = fonts[fontFamily];
        if (selectedFont?.googleFont) {
            const linkId = `google-font-${fontFamily}`;
            if (!document.getElementById(linkId)) {
                const link = document.createElement('link');
                link.id = linkId;
                link.rel = 'stylesheet';
                link.href = `https://fonts.googleapis.com/css2?family=${selectedFont.googleFont}&display=swap`;
                document.head.appendChild(link);
            }
        }
    }, [fontFamily]);

    // Helper: build a page DOM element with all styles applied
    const buildPage = (widthMm, heightMm, safeFontSize, safeLineHeight, safePadding, safeGap, safeColumns, columnHeightPx) => {
        const page = document.createElement('div');
        page.className = 'preview-page';
        page.setAttribute('data-paper', paperTemplate || 'blank-white');
        page.style.width = `${widthMm}mm`;
        page.style.height = `${heightMm}mm`;
        page.style.fontSize = `${safeFontSize}pt`;
        page.style.lineHeight = safeLineHeight;
        page.style.padding = `${safePadding}mm`;
        page.style.position = 'relative';

        // Apply paper template background
        const tpl = paperTemplates[paperTemplate] || paperTemplates['blank-white'];
        if (tpl && tpl.css) {
            Object.entries(tpl.css).forEach(([prop, val]) => {
                // Convert camelCase to kebab-case for style assignment
                const kebab = prop.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`);
                page.style[prop] = val;
            });
        }

        // Apply theme (theme overrides paper bg only if theme has explicit --theme-bg)
        const currentTheme = (themes && themes[theme]) || {};
        if (currentTheme.cssVars) {
            Object.entries(currentTheme.cssVars).forEach(([key, value]) => {
                page.style.setProperty(key, value);
            });
            // Only override background if theme explicitly defines one AND no paper template is active
            if (currentTheme.cssVars['--theme-bg'] && (!paperTemplate || paperTemplate === 'blank-white')) {
                page.style.background = currentTheme.cssVars['--theme-bg'];
            }
            if (currentTheme.cssVars['--theme-text']) {
                page.style.color = currentTheme.cssVars['--theme-text'];
            }
        }

        // Apply font family
        const selectedFont = fonts[fontFamily] || fonts['times-new-roman'];
        page.style.fontFamily = selectedFont.family;

        const grid = document.createElement('div');
        grid.className = 'page-columns';
        grid.style.gridTemplateColumns = `repeat(${safeColumns}, 1fr)`;
        grid.style.gap = '0mm';
        // Make grid content sit above paper background
        grid.style.position = 'relative';
        grid.style.zIndex = '1';

        const cols = [];
        for (let i = 0; i < safeColumns; i++) {
            const col = document.createElement('div');
            col.className = 'page-column';
            col.style.height = `${columnHeightPx}px`;
            col.style.paddingLeft = `${safeGap / 2}mm`;
            col.style.paddingRight = `${safeGap / 2}mm`;
            grid.appendChild(col);
            cols.push(col);
        }
        page.appendChild(grid);
        return { page, cols };
    };

    const runLayout = (forceLive = false) => {
        if (!forceLive && !liveUpdate) return;
        const measureEl = measureRef.current;
        if (!measureEl) return;

        const isLandscape = orientation === 'landscape';
        const widthMm = isLandscape ? 297 : 210;
        const heightMm = isLandscape ? 210 : 297;
        const safeColumns = Math.max(1, Number(columns) || 1);
        const safePadding = Math.max(0, Number(padding) || 0);
        const safeGap = Math.max(0, Number(gap) || 0);
        const safeFontSize = Math.max(1, Number(fontSize) || 1);
        const safeLineHeight = Math.max(0.1, Number(lineHeight) || 1);

        const pageWidthPx = mmToPx(widthMm);
        const pageHeightPx = mmToPx(heightMm);
        const paddingPx = mmToPx(safePadding);
        const gapPx = mmToPx(safeGap);
        const contentWidthPx = pageWidthPx - paddingPx * 2;
        const totalPaddingPx = gapPx * safeColumns;
        const columnWidthPx = (contentWidthPx - totalPaddingPx) / safeColumns;
        const columnHeightPx = pageHeightPx - paddingPx * 2;

        measureEl.style.width = `${columnWidthPx - gapPx}px`;
        measureEl.style.fontSize = `${safeFontSize}pt`;
        measureEl.style.lineHeight = safeLineHeight;
        measureEl.style.paddingLeft = `${safeGap / 2}mm`;
        measureEl.style.paddingRight = `${safeGap / 2}mm`;

        const container = pagesContainerRef.current;
        if (!container) return;
        container.innerHTML = '';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '12mm';

        const children = Array.from(measureEl.children);

        const createPage = () => {
            const { page, cols } = buildPage(widthMm, heightMm, safeFontSize, safeLineHeight, safePadding, safeGap, safeColumns, columnHeightPx);
            container.appendChild(page);
            return cols;
        };

        let cols = createPage();
        let colIndex = 0;

        children.forEach((child) => {
            const node = child.cloneNode(true);
            cols[colIndex].appendChild(node);
            const overflow = cols[colIndex].scrollHeight > cols[colIndex].clientHeight;
            if (overflow) {
                cols[colIndex].removeChild(node);
                colIndex += 1;
                if (colIndex >= safeColumns) {
                    cols = createPage();
                    colIndex = 0;
                }
                cols[colIndex].appendChild(node);
                if (cols[colIndex].scrollHeight > cols[colIndex].clientHeight) {
                    cols[colIndex].style.overflow = 'visible';
                }
            }
        });
    };

    useEffect(() => {
        const timer = setTimeout(() => runLayout(), 300);
        return () => clearTimeout(timer);
    }, [deferredMarkdown, columns, fontSize, padding, gap, lineHeight, orientation, theme, fontFamily, paperTemplate, liveUpdate]);

    const updateLayoutRef = useRef(runLayout);
    useEffect(() => { updateLayoutRef.current = runLayout; });

    const handleResourceLoad = useCallback(() => {
        if (layoutTimeoutRef.current) clearTimeout(layoutTimeoutRef.current);
        layoutTimeoutRef.current = setTimeout(() => updateLayoutRef.current(), 100);
    }, []);

    const handleManualUpdate = () => runLayout(true);

    const currentTheme = (themes && themes[theme]) || {};
    const themeStyles = currentTheme.styles || {};

    const components = useMemo(() => ({
        h1: (props) => <h1 className="md-h1" style={themeStyles.h1} data-line={props.node?.position?.start?.line} {...props} />,
        h2: (props) => <h2 className="md-h2" style={themeStyles.h2} data-line={props.node?.position?.start?.line} {...props} />,
        h3: (props) => <h3 className="md-h3" style={themeStyles.h3} data-line={props.node?.position?.start?.line} {...props} />,
        h4: (props) => <h4 className="md-h4" style={themeStyles.h4 || themeStyles.h3} data-line={props.node?.position?.start?.line} {...props} />,
        h5: (props) => <h5 className="md-h5" style={themeStyles.h5 || themeStyles.h3} data-line={props.node?.position?.start?.line} {...props} />,
        h6: (props) => <h6 className="md-h6" style={themeStyles.h6 || themeStyles.h3} data-line={props.node?.position?.start?.line} {...props} />,
        p: (props) => <p className="md-p" style={themeStyles.paragraph || {}} data-line={props.node?.position?.start?.line} {...props} />,
        ul: (props) => <ul className="md-ul" {...props} />,
        ol: (props) => <ol className="md-ol" {...props} />,
        li: (props) => <li className="md-li" data-line={props.node?.position?.start?.line} {...props} />,
        code: ({ inline, className, children, node, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            const language = match ? match[1] : '';
            const isBlock = match || String(children).includes('\n');
            if (!inline && language === 'mermaid') {
                return <MermaidDiagram chart={String(children).replace(/\n$/, '')} dataLine={node?.position?.start?.line} onRender={handleResourceLoad} />;
            }
            return isBlock ? (
                <SyntaxHighlighter
                    style={prism} language={language || 'text'} PreTag="div" className="md-code-block" wrapLongLines={true}
                    customStyle={{ margin: '0.4em 0', padding: '0.6em', fontSize: '0.75em', borderRadius: '4px', lineHeight: '1.4', ...(themeStyles.codeBlock || {}) }}
                    codeTagProps={{ style: { fontFamily: "'JetBrains Mono', 'Courier New', monospace", whiteSpace: 'pre-wrap', wordBreak: 'break-all' } }}
                    {...props}
                >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
            ) : (
                <code className="md-code-inline" style={themeStyles.codeInline} {...props}>{children}</code>
            );
        },
        pre: (props) => <div className="md-pre" data-line={props.node?.position?.start?.line} {...props} />,
        blockquote: (props) => <blockquote className="md-blockquote" style={themeStyles.blockquote || {}} data-line={props.node?.position?.start?.line} {...props} />,
        table: (props) => <table className="md-table" style={themeStyles.table?.boxShadow ? { boxShadow: themeStyles.table.boxShadow } : {}} data-line={props.node?.position?.start?.line} {...props} />,
        thead: (props) => <thead className="md-thead" {...props} />,
        tbody: (props) => <tbody className="md-tbody" {...props} />,
        tr: (props) => <tr className="md-tr" {...props} />,
        th: (props) => {
            const style = {};
            if (themeStyles.table) {
                if (themeStyles.table.headerBg) style.background = themeStyles.table.headerBg;
                if (themeStyles.table.headerColor) style.color = themeStyles.table.headerColor;
                if (themeStyles.table.headerFontWeight) style.fontWeight = themeStyles.table.headerFontWeight;
                if (themeStyles.table.headerTextShadow) style.textShadow = themeStyles.table.headerTextShadow;
                if (themeStyles.table.cellBorder) style.border = themeStyles.table.cellBorder;
            }
            return <th className="md-th" style={style} {...props} />;
        },
        td: (props) => {
            const style = {};
            if (themeStyles.table?.cellBorder) style.border = themeStyles.table.cellBorder;
            if (themeStyles.table?.cellColor) style.color = themeStyles.table.cellColor;
            return <td className="md-td" style={style} {...props} />;
        },
        a: (props) => <a className="md-link" style={themeStyles.link} {...props} />,
        strong: (props) => <strong className="md-strong" style={themeStyles.strong || {}} {...props} />,
        em: (props) => <em className="md-em" {...props} />,
        hr: (props) => <hr className="md-hr" {...props} />,
        img: (props) => <ImageRenderer className="md-img" data-line={props.node?.position?.start?.line} onLoad={handleResourceLoad} onError={handleResourceLoad} {...props} />,
        div: ({ node, className, ...props }) => {
            if (className === 'math-display') return <LazyKatex block={true} math={props['data-math']} strategy="async" onRender={handleResourceLoad} />;
            return <div className={className} {...props} />;
        },
        span: ({ node, className, ...props }) => {
            if (className === 'math-inline') return <LazyKatex block={false} math={props['data-math']} strategy="async" onRender={handleResourceLoad} />;
            return <span className={className} {...props} />;
        },
    }), [themeStyles]);

    const remarkRehypeOptions = useMemo(() => ({
        handlers: {
            math: (state, node) => ({ type: 'element', tagName: 'div', properties: { className: 'math-display', 'data-math': node.value }, children: [] }),
            inlineMath: (state, node) => ({ type: 'element', tagName: 'span', properties: { className: 'math-inline', 'data-math': node.value }, children: [] }),
        }
    }), []);

    const currentPaperTemplate = paperTemplates[paperTemplate] || paperTemplates['blank-white'];

    return (
        <div className="preview">
            <div className="preview-header">
                <div className="preview-header-left">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="preview-title">PDF Preview</span>
                        <button
                            className={`icon-btn ${liveUpdate ? 'active' : ''}`}
                            onClick={() => setLiveUpdate(!liveUpdate)}
                            title={liveUpdate ? 'Disable live update' : 'Enable live update'}
                            style={{
                                backgroundColor: liveUpdate ? 'var(--color-accent-primary)' : '#e0e0e0',
                                color: liveUpdate ? 'white' : '#666',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                width: 'auto', padding: '2px 8px', borderRadius: '12px',
                                border: 'none', fontSize: '10px', fontWeight: 'bold',
                                cursor: 'pointer', transition: 'all 0.3s ease'
                            }}
                        >
                            {liveUpdate ? 'ON' : 'OFF'}
                        </button>
                        {currentPaperTemplate && currentPaperTemplate.name !== 'Blank White' && (
                            <span style={{ fontSize: '10px', color: 'var(--color-text-tertiary)', fontStyle: 'italic' }}>
                                {currentPaperTemplate.icon} {currentPaperTemplate.name}
                            </span>
                        )}
                    </div>
                    <span className="preview-info">
                        {columns} cols · {fontSize}pt · {padding}mm pad · {gap}mm gap
                    </span>
                </div>
                <div className="preview-controls">
                    <button className="icon-btn" onClick={() => setScale(s => Math.max(s - 0.1, 0.5))} title="Zoom Out"><ZoomOut size={16} /></button>
                    <span className="zoom-label">{Math.round(scale * 100)}%</span>
                    <button className="icon-btn" onClick={() => setScale(s => Math.min(s + 0.1, 3))} title="Zoom In"><ZoomIn size={16} /></button>
                    <button className="icon-btn" onClick={handleManualUpdate} title="Manual Update"><RefreshCw size={14} /></button>
                </div>
            </div>
            <div className="preview-content">
                <style>{`
                    @media print {
                        @page { size: A4 ${orientation}; margin: 0; }
                        .preview-page {
                            width: ${orientation === 'landscape' ? 297 : 210}mm !important;
                            height: ${orientation === 'landscape' ? 210 : 297}mm !important;
                        }
                    }
                `}</style>
                <div
                    className="preview-scaler"
                    style={{
                        display: 'flex', justifyContent: 'center',
                        zoom: scale,
                        minWidth: `${orientation === 'landscape' ? 297 : 210}mm`,
                        minHeight: `${orientation === 'landscape' ? 210 : 297}mm`,
                        margin: 'auto'
                    }}
                    onClick={handlePageClick}
                >
                    <div
                        className="pages-container"
                        ref={(el) => {
                            pagesContainerRef.current = el;
                            if (typeof ref === 'function') ref(el);
                            else if (ref) ref.current = el;
                        }}
                    />
                </div>
                <div ref={measureRef} style={{ position: 'absolute', left: '-9999px', top: '-9999px', visibility: 'hidden' }} className="md-measurer">
                    <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeRaw]} remarkRehypeOptions={remarkRehypeOptions} components={components}>
                        {preprocessedMarkdown}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
});

Preview.displayName = 'Preview';
export default memo(Preview);
