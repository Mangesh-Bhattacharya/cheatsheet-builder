import { Download, Github, RectangleHorizontal, RectangleVertical, RotateCcw, File, Sun, Moon, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';
import defaultThemes from '../styles/themes';
import fonts, { fontCategories } from '../styles/fonts';
import ThemeEditor from './ThemeEditor';
import './Toolbar.css';

// Dynamically load a Google Font by key
function loadGoogleFont(fontKey) {
    const fontData = fonts[fontKey];
    if (!fontData || !fontData.googleFont) return;
    const id = `gfont-${fontKey}`;
    if (document.getElementById(id)) return;
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${fontData.googleFont}&display=swap`;
    document.head.appendChild(link);
}

function Toolbar({
    columns, setColumns,
    fontSize, setFontSize,
    padding, setPadding,
    gap, setGap,
    lineHeight, setLineHeight,
    orientation, setOrientation,
    theme, setTheme,
    fontFamily, setFontFamily,
    appTheme, setAppTheme,
    previewRef,
    onFileClick,
    currentFile,
    defaultColumns,
    defaultFontSize,
    defaultPadding,
    defaultGap,
    defaultLineHeight,
    defaultOrientation,
    defaultTheme,
    defaultFontFamily,
    defaultAppTheme,
    themes,
    onThemeUpdate
}) {
    const [isThemeEditorOpen, setIsThemeEditorOpen] = useState(false);

    // Load font on mount and whenever fontFamily changes
    useEffect(() => {
        loadGoogleFont(fontFamily);
    }, [fontFamily]);

    const handleExportPDF = () => {
        const originalTitle = document.title;
        if (currentFile && currentFile.name) {
            let fileName = currentFile.name;
            if (fileName.endsWith('.md')) fileName = fileName.slice(0, -3);
            document.title = fileName;
        }
        window.print();
        setTimeout(() => { document.title = originalTitle; }, 1000);
    };

    const handleReset = () => {
        setColumns(defaultColumns);
        setFontSize(defaultFontSize);
        setPadding(defaultPadding);
        setGap(defaultGap);
        setLineHeight(defaultLineHeight);
        setOrientation(defaultOrientation);
        setTheme(defaultTheme);
        setFontFamily(defaultFontFamily);
        if (setAppTheme && defaultAppTheme) setAppTheme(defaultAppTheme);
    };

    const currentFontData = fonts[fontFamily];
    const isHandwriting = currentFontData?.category === 'handwriting';

    return (
        <div className="toolbar">
            <div className="toolbar-left">
                <div className="toolbar-brand">
                    <a href="https://github.com/Mangesh-Bhattacharya/cheatsheet-builder" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                        <Github size={20} />
                    </a>
                    <h1>Cheatsheet Builder</h1>
                </div>
            </div>

            <div className="toolbar-center">
                <div className="toolbar-control">
                    <div className="label-with-icon">
                        <label htmlFor="theme-select" className="label">Theme</label>
                        <button
                            className="icon-btn-small"
                            onClick={() => setIsThemeEditorOpen(true)}
                            title="Edit Theme"
                            aria-label="Edit Theme"
                        >
                            <Settings size={12} />
                        </button>
                    </div>
                    <select
                        id="theme-select"
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="select"
                        aria-label="Select Theme"
                    >
                        {themes && Object.entries(themes).map(([key, themeData]) => (
                            <option key={key} value={key}>{themeData.name}</option>
                        ))}
                    </select>
                </div>

                {/* Grouped Font Selector with Handwriting section */}
                <div className="toolbar-control">
                    <label htmlFor="font-select" className="label">
                        {isHandwriting ? '✍️ Handwriting' : 'Font'}
                    </label>
                    <select
                        id="font-select"
                        value={fontFamily}
                        onChange={(e) => {
                            setFontFamily(e.target.value);
                            loadGoogleFont(e.target.value);
                        }}
                        className={`select ${isHandwriting ? 'select-handwriting' : ''}`}
                        aria-label="Select Font or Handwriting Style"
                        style={isHandwriting ? { fontFamily: currentFontData?.family } : {}}
                    >
                        {Object.entries(fontCategories).map(([category, keys]) => (
                            <optgroup key={category} label={category}>
                                {keys.map(key => (
                                    fonts[key] && (
                                        <option key={key} value={key}>
                                            {fonts[key].name}
                                        </option>
                                    )
                                ))}
                            </optgroup>
                        ))}
                    </select>
                    {isHandwriting && (
                        <span className="handwriting-badge" title={currentFontData?.description}>
                            ✍️ {currentFontData?.handwritingStyle}
                        </span>
                    )}
                </div>

                <div className="toolbar-control">
                    <label htmlFor="columns-input" className="label">Columns</label>
                    <input
                        id="columns-input" type="number" min="1" max="10"
                        value={columns} onChange={(e) => setColumns(Number(e.target.value))}
                        className="number-input" aria-label="Number of Columns"
                    />
                </div>

                <div className="toolbar-control">
                    <label htmlFor="fontsize-input" className="label">Font (pt)</label>
                    <input
                        id="fontsize-input" type="number" min="2" max="20"
                        value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))}
                        className="number-input" aria-label="Font Size in Points"
                    />
                </div>

                <div className="toolbar-control">
                    <label htmlFor="padding-input" className="label">Padding (mm)</label>
                    <input
                        id="padding-input" type="number" min="0" max="50"
                        value={padding} onChange={(e) => setPadding(Number(e.target.value))}
                        className="number-input" aria-label="Padding in Millimeters"
                    />
                </div>

                <div className="toolbar-control">
                    <label htmlFor="gap-input" className="label">Gap (mm)</label>
                    <input
                        id="gap-input" type="number" min="0" max="20"
                        value={gap} onChange={(e) => setGap(Number(e.target.value))}
                        className="number-input" aria-label="Gap in Millimeters"
                    />
                </div>

                <div className="toolbar-control">
                    <label htmlFor="lineheight-input" className="label">Line Height</label>
                    <input
                        id="lineheight-input" type="number" min="0.1" max="2.5" step="0.1"
                        value={lineHeight} onChange={(e) => setLineHeight(Number(e.target.value))}
                        className="number-input" aria-label="Line Height"
                    />
                </div>

                <div className="toolbar-control orientation-control">
                    <label className="label">Orientation</label>
                    <div className="orientation-toggle" role="group" aria-label="Page Orientation">
                        <button
                            className={`icon-btn ${orientation === 'landscape' ? 'active' : ''}`}
                            onClick={() => setOrientation('landscape')}
                            title="Landscape" aria-label="Landscape Orientation"
                            aria-pressed={orientation === 'landscape'}
                        >
                            <RectangleHorizontal size={18} />
                        </button>
                        <button
                            className={`icon-btn ${orientation === 'portrait' ? 'active' : ''}`}
                            onClick={() => setOrientation('portrait')}
                            title="Portrait" aria-label="Portrait Orientation"
                            aria-pressed={orientation === 'portrait'}
                        >
                            <RectangleVertical size={18} />
                        </button>
                    </div>
                </div>

                <button
                    className="btn btn-secondary btn-reset"
                    onClick={handleReset}
                    title="Reset to default settings"
                    aria-label="Reset to Default Settings"
                >
                    <RotateCcw size={16} />
                </button>
            </div>

            <div className="toolbar-right">
                {setAppTheme && (
                    <button
                        className="btn btn-secondary btn-icon"
                        onClick={() => setAppTheme(appTheme === 'dark' ? 'light' : 'dark')}
                        title={`Switch to ${appTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
                        aria-label={`Switch to ${appTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
                    >
                        {appTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                )}
                <button
                    className="btn btn-secondary"
                    onClick={onFileClick}
                    title="Manage files"
                    aria-label="Manage Files"
                >
                    <File size={16} />
                    Files
                </button>
                <button
                    className="btn btn-primary"
                    onClick={handleExportPDF}
                    aria-label="Export as PDF"
                >
                    <Download size={16} />
                    PDF
                </button>
            </div>

            <ThemeEditor
                isOpen={isThemeEditorOpen}
                onClose={() => setIsThemeEditorOpen(false)}
                theme={themes ? themes[theme] : null}
                themeKey={theme}
                onSave={onThemeUpdate}
                originalTheme={defaultThemes[theme]}
            />
        </div>
    );
}

export default Toolbar;
