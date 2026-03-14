import { useState } from 'react';
import paperTemplates, { templateCategories } from '../styles/paperTemplates';
import './PaperTemplateSelector.css';

function PaperTemplateSelector({ value, onChange }) {
    const [open, setOpen] = useState(false);
    const current = paperTemplates[value] || paperTemplates['none'];

    return (
        <div className="paper-template-selector">
            <button
                className="pts-trigger"
                onClick={() => setOpen(o => !o)}
                title={current.description}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className="pts-emoji">{current.emoji}</span>
                <span className="pts-name">{current.name}</span>
                <span className="pts-chevron">{open ? '▲' : '▼'}</span>
            </button>

            {open && (
                <div className="pts-dropdown" role="listbox" aria-label="Select Paper Template">
                    {templateCategories.map(cat => {
                        const items = Object.entries(paperTemplates).filter(
                            ([, t]) => t.category === cat
                        );
                        if (!items.length) return null;
                        return (
                            <div key={cat} className="pts-group">
                                <div className="pts-group-label">{cat}</div>
                                {items.map(([key, tmpl]) => (
                                    <button
                                        key={key}
                                        role="option"
                                        aria-selected={value === key}
                                        className={`pts-item ${value === key ? 'active' : ''}`}
                                        onClick={() => { onChange(key); setOpen(false); }}
                                        title={tmpl.description}
                                    >
                                        <span className="pts-item-emoji">{tmpl.emoji}</span>
                                        <span className="pts-item-name">{tmpl.name}</span>
                                        {value === key && <span className="pts-check">✓</span>}
                                    </button>
                                ))}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default PaperTemplateSelector;
