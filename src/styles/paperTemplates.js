// Paper Background Templates for Cheatsheet Builder
// Each template defines a CSS background, name, category, and description.

export const paperTemplates = {

    // ─── BLANK ───────────────────────────────────────────────────────────────
    'blank-white': {
        name: 'Blank White',
        category: 'Blank',
        icon: '⬜',
        description: 'Clean white page — no background',
        css: {
            background: '#ffffff',
        },
    },
    'blank-cream': {
        name: 'Cream Paper',
        category: 'Blank',
        icon: '📄',
        description: 'Warm off-white cream paper, easy on eyes',
        css: {
            background: '#fdf8f0',
        },
    },
    'blank-yellow': {
        name: 'Legal Yellow',
        category: 'Blank',
        icon: '📒',
        description: 'Classic legal pad yellow',
        css: {
            background: '#fefde0',
        },
    },
    'blank-mint': {
        name: 'Mint Paper',
        category: 'Blank',
        icon: '🟩',
        description: 'Light mint — reduces eye strain during long study sessions',
        css: {
            background: '#f0faf4',
        },
    },
    'blank-blue': {
        name: 'Sky Blue',
        category: 'Blank',
        icon: '🔵',
        description: 'Soft blue tint — calming for study',
        css: {
            background: '#f0f6ff',
        },
    },

    // ─── LINED PAPER ──────────────────────────────────────────────────────────
    'lined-wide': {
        name: 'Wide Ruled',
        category: 'Lined',
        icon: '📋',
        description: 'Wide ruled lines (8.7mm) — for younger students K-6',
        css: {
            background: `#ffffff
                repeating-linear-gradient(
                    to bottom,
                    transparent,
                    transparent 8.6mm,
                    #bdd7ee 8.6mm,
                    #bdd7ee 8.7mm
                )`,
            backgroundSize: '100% 8.7mm',
        },
    },
    'lined-college': {
        name: 'College Ruled',
        category: 'Lined',
        icon: '📓',
        description: 'College ruled lines (7.1mm) — standard notebook paper',
        css: {
            background: `#ffffff
                repeating-linear-gradient(
                    to bottom,
                    transparent,
                    transparent 7.0mm,
                    #bdd7ee 7.0mm,
                    #bdd7ee 7.1mm
                )`,
            backgroundSize: '100% 7.1mm',
        },
    },
    'lined-narrow': {
        name: 'Narrow Ruled',
        category: 'Lined',
        icon: '📝',
        description: 'Narrow ruled lines (6.35mm) — for dense note-taking',
        css: {
            background: `#ffffff
                repeating-linear-gradient(
                    to bottom,
                    transparent,
                    transparent 6.25mm,
                    #bdd7ee 6.25mm,
                    #bdd7ee 6.35mm
                )`,
            backgroundSize: '100% 6.35mm',
        },
    },
    'lined-gregg': {
        name: 'Gregg Ruled',
        category: 'Lined',
        icon: '✏️',
        description: 'Gregg ruled — lines at 11/32" for shorthand writing',
        css: {
            background: `#fffef5
                repeating-linear-gradient(
                    to bottom,
                    transparent,
                    transparent 8.7mm,
                    #d4e8c2 8.7mm,
                    #d4e8c2 8.8mm
                )`,
            backgroundSize: '100% 8.8mm',
        },
    },
    'lined-yellow': {
        name: 'Legal Pad Lined',
        category: 'Lined',
        icon: '📒',
        description: 'Yellow legal pad with blue lines and red margin',
        css: {
            background: `#fefde0
                repeating-linear-gradient(
                    to bottom,
                    transparent,
                    transparent 7.0mm,
                    #aac8e8 7.0mm,
                    #aac8e8 7.1mm
                ),
                linear-gradient(
                    to right,
                    transparent 24mm,
                    #f08080 24mm,
                    #f08080 24.5mm,
                    transparent 24.5mm
                )`,
            backgroundSize: '100% 7.1mm, 100% 100%',
        },
    },
    'lined-red-margin': {
        name: 'Margin Ruled',
        category: 'Lined',
        icon: '📔',
        description: 'White paper with blue lines and red left margin — classic school notebook',
        css: {
            background: `#ffffff
                repeating-linear-gradient(
                    to bottom,
                    transparent,
                    transparent 7.0mm,
                    #bdd7ee 7.0mm,
                    #bdd7ee 7.1mm
                ),
                linear-gradient(
                    to right,
                    transparent 20mm,
                    #e06060 20mm,
                    #e06060 20.5mm,
                    transparent 20.5mm
                )`,
            backgroundSize: '100% 7.1mm, 100% 100%',
        },
    },

    // ─── GRAPH / GRID PAPER ───────────────────────────────────────────────────
    'graph-1mm': {
        name: 'Graph 1mm',
        category: 'Graph',
        icon: '🔲',
        description: '1mm grid — ultra fine, for detailed diagrams',
        css: {
            background: `#ffffff
                repeating-linear-gradient(#d0e8ff 0, #d0e8ff 0.3px, transparent 0.3px, transparent 1mm),
                repeating-linear-gradient(90deg, #d0e8ff 0, #d0e8ff 0.3px, transparent 0.3px, transparent 1mm)`,
            backgroundSize: '1mm 1mm',
        },
    },
    'graph-2mm': {
        name: 'Graph 2mm',
        category: 'Graph',
        icon: '🔲',
        description: '2mm grid — fine grid for math and science',
        css: {
            background: `#ffffff
                repeating-linear-gradient(#c8dff5 0, #c8dff5 0.4px, transparent 0.4px, transparent 2mm),
                repeating-linear-gradient(90deg, #c8dff5 0, #c8dff5 0.4px, transparent 0.4px, transparent 2mm)`,
            backgroundSize: '2mm 2mm',
        },
    },
    'graph-5mm': {
        name: 'Graph 5mm',
        category: 'Graph',
        icon: '📐',
        description: '5mm grid — standard graph paper for geometry and plots',
        css: {
            background: `#ffffff
                repeating-linear-gradient(#b8d4f0 0, #b8d4f0 0.5px, transparent 0.5px, transparent 5mm),
                repeating-linear-gradient(90deg, #b8d4f0 0, #b8d4f0 0.5px, transparent 0.5px, transparent 5mm)`,
            backgroundSize: '5mm 5mm',
        },
    },
    'graph-5mm-bold': {
        name: 'Graph 5mm Bold',
        category: 'Graph',
        icon: '📏',
        description: '5mm grid with 25mm major lines — engineering graph paper',
        css: {
            background: `#ffffff
                repeating-linear-gradient(#d6e9f8 0, #d6e9f8 0.4px, transparent 0.4px, transparent 5mm),
                repeating-linear-gradient(90deg, #d6e9f8 0, #d6e9f8 0.4px, transparent 0.4px, transparent 5mm),
                repeating-linear-gradient(#7fb3d9 0, #7fb3d9 0.8px, transparent 0.8px, transparent 25mm),
                repeating-linear-gradient(90deg, #7fb3d9 0, #7fb3d9 0.8px, transparent 0.8px, transparent 25mm)`,
            backgroundSize: '5mm 5mm, 5mm 5mm, 25mm 25mm, 25mm 25mm',
        },
    },
    'graph-10mm': {
        name: 'Graph 10mm',
        category: 'Graph',
        icon: '🔳',
        description: '10mm (1cm) large grid — for younger students or large diagrams',
        css: {
            background: `#ffffff
                repeating-linear-gradient(#b0ccee 0, #b0ccee 0.6px, transparent 0.6px, transparent 10mm),
                repeating-linear-gradient(90deg, #b0ccee 0, #b0ccee 0.6px, transparent 0.6px, transparent 10mm)`,
            backgroundSize: '10mm 10mm',
        },
    },
    'graph-isometric': {
        name: 'Isometric Grid',
        category: 'Graph',
        icon: '🔷',
        description: 'Isometric triangular grid — for 3D sketching and geometry',
        css: {
            background: `#ffffff
                repeating-linear-gradient(60deg, #c0d8f0 0, #c0d8f0 0.5px, transparent 0.5px, transparent 5mm),
                repeating-linear-gradient(120deg, #c0d8f0 0, #c0d8f0 0.5px, transparent 0.5px, transparent 5mm),
                repeating-linear-gradient(0deg, #c0d8f0 0, #c0d8f0 0.5px, transparent 0.5px, transparent 8.66mm)`,
            backgroundSize: '5mm 8.66mm',
        },
    },

    // ─── DOTTED PAPER ─────────────────────────────────────────────────────────
    'dot-5mm': {
        name: 'Dot Grid 5mm',
        category: 'Dotted',
        icon: '🟦',
        description: '5mm dot grid — popular for bullet journals and neat notes',
        css: {
            background: `#ffffff
                radial-gradient(circle, #9bbcd8 0.8px, transparent 0.8px)`,
            backgroundSize: '5mm 5mm',
        },
    },
    'dot-7mm': {
        name: 'Dot Grid 7mm',
        category: 'Dotted',
        icon: '🟦',
        description: '7mm dot grid — larger spacing for comfortable handwriting',
        css: {
            background: `#ffffff
                radial-gradient(circle, #9bbcd8 0.8px, transparent 0.8px)`,
            backgroundSize: '7mm 7mm',
        },
    },
    'dot-5mm-cream': {
        name: 'Dot Grid Cream',
        category: 'Dotted',
        icon: '📒',
        description: 'Cream dot grid — mimics Leuchtturm1917/Moleskine notebook',
        css: {
            background: `#fdf8f0
                radial-gradient(circle, #c8a882 0.8px, transparent 0.8px)`,
            backgroundSize: '5mm 5mm',
        },
    },

    // ─── SPECIALTY PAPERS ─────────────────────────────────────────────────────
    'music-staff': {
        name: 'Music Staff',
        category: 'Specialty',
        icon: '🎵',
        description: '5-line music staff — for music theory cheatsheets',
        css: {
            background: `#ffffff
                repeating-linear-gradient(
                    to bottom,
                    transparent 0mm,
                    transparent 1.4mm,
                    #999 1.4mm, #999 1.7mm,
                    transparent 1.7mm,
                    transparent 3.1mm,
                    #999 3.1mm, #999 3.4mm,
                    transparent 3.4mm,
                    transparent 4.8mm,
                    #999 4.8mm, #999 5.1mm,
                    transparent 5.1mm,
                    transparent 6.5mm,
                    #999 6.5mm, #999 6.8mm,
                    transparent 6.8mm,
                    transparent 8.2mm,
                    #999 8.2mm, #999 8.5mm,
                    transparent 8.5mm,
                    transparent 15mm
                )`,
            backgroundSize: '100% 15mm',
        },
    },
    'cornell-notes': {
        name: 'Cornell Notes',
        category: 'Specialty',
        icon: '📑',
        description: 'Cornell method — left cue column, main notes area, summary strip at bottom',
        css: {
            background: `#ffffff
                repeating-linear-gradient(
                    to bottom,
                    transparent,
                    transparent 7.0mm,
                    #bdd7ee 7.0mm,
                    #bdd7ee 7.1mm
                ),
                linear-gradient(
                    to right,
                    transparent 45mm,
                    #e06060 45mm,
                    #e06060 45.5mm,
                    transparent 45.5mm
                ),
                linear-gradient(
                    to top,
                    transparent 25mm,
                    #e06060 25mm,
                    #e06060 25.5mm,
                    transparent 25.5mm
                )`,
            backgroundSize: '100% 7.1mm, 100% 100%, 100% 100%',
        },
    },
    'handwriting-practice': {
        name: 'Handwriting Practice',
        category: 'Specialty',
        icon: '✏️',
        description: 'Triple-line ruling for handwriting practice (baseline, midline, topline)',
        css: {
            background: `#ffffff
                repeating-linear-gradient(
                    to bottom,
                    transparent 0mm,
                    transparent 4.9mm,
                    #aac8e8 4.9mm, #aac8e8 5.0mm,
                    transparent 5.0mm,
                    transparent 9.9mm,
                    #ffb3b3 9.9mm, #ffb3b3 10.0mm,
                    transparent 10.0mm,
                    transparent 14.9mm,
                    #aac8e8 14.9mm, #aac8e8 15.0mm,
                    transparent 15.0mm,
                    transparent 20mm
                )`,
            backgroundSize: '100% 20mm',
        },
    },
    'math-quad': {
        name: 'Math Quad Paper',
        category: 'Specialty',
        icon: '➕',
        description: '4×4 quad ruled (6.35mm) — standard US math class grid paper',
        css: {
            background: `#fffef8
                repeating-linear-gradient(#c8dce8 0, #c8dce8 0.5px, transparent 0.5px, transparent 6.35mm),
                repeating-linear-gradient(90deg, #c8dce8 0, #c8dce8 0.5px, transparent 0.5px, transparent 6.35mm)`,
            backgroundSize: '6.35mm 6.35mm',
        },
    },
    'chemistry-lab': {
        name: 'Lab Notebook',
        category: 'Specialty',
        icon: '🧪',
        description: 'Green-tinted grid — mimics classic chemistry/science lab notebooks',
        css: {
            background: `#f4faf4
                repeating-linear-gradient(#a8d5a2 0, #a8d5a2 0.5px, transparent 0.5px, transparent 5mm),
                repeating-linear-gradient(90deg, #a8d5a2 0, #a8d5a2 0.5px, transparent 0.5px, transparent 5mm)`,
            backgroundSize: '5mm 5mm',
        },
    },
    'cross-section': {
        name: 'Cross Section Paper',
        category: 'Specialty',
        icon: '🧱',
        description: 'Architectural cross-section paper — bold 10mm grid with 2mm subdivisions',
        css: {
            background: `#fff8f0
                repeating-linear-gradient(#e8d0b8 0, #e8d0b8 0.4px, transparent 0.4px, transparent 2mm),
                repeating-linear-gradient(90deg, #e8d0b8 0, #e8d0b8 0.4px, transparent 0.4px, transparent 2mm),
                repeating-linear-gradient(#c8a070 0, #c8a070 0.8px, transparent 0.8px, transparent 10mm),
                repeating-linear-gradient(90deg, #c8a070 0, #c8a070 0.8px, transparent 0.8px, transparent 10mm)`,
            backgroundSize: '2mm 2mm, 2mm 2mm, 10mm 10mm, 10mm 10mm',
        },
    },
    'steno-pad': {
        name: 'Steno Pad',
        category: 'Specialty',
        icon: '📋',
        description: 'Steno pad with center vertical line and horizontal rules — for two-column notes',
        css: {
            background: `#fffef5
                repeating-linear-gradient(
                    to bottom,
                    transparent,
                    transparent 7.0mm,
                    #b8d4e8 7.0mm,
                    #b8d4e8 7.1mm
                ),
                linear-gradient(
                    to right,
                    transparent 49.5%,
                    #e06060 49.5%,
                    #e06060 50.5%,
                    transparent 50.5%
                )`,
            backgroundSize: '100% 7.1mm, 100% 100%',
        },
    },
    'polar-graph': {
        name: 'Polar Graph',
        category: 'Specialty',
        icon: '🎯',
        description: 'Polar coordinate grid — for trigonometry and physics',
        css: {
            background: `#ffffff
                radial-gradient(circle at 50% 50%, transparent 10%, #c8dff0 10%, #c8dff0 10.3%, transparent 10.3%),
                radial-gradient(circle at 50% 50%, transparent 20%, #c8dff0 20%, #c8dff0 20.3%, transparent 20.3%),
                radial-gradient(circle at 50% 50%, transparent 30%, #c8dff0 30%, #c8dff0 30.3%, transparent 30.3%),
                radial-gradient(circle at 50% 50%, transparent 40%, #c8dff0 40%, #c8dff0 40.3%, transparent 40.3%),
                repeating-linear-gradient(
                    30deg,
                    transparent,
                    transparent 49.7%,
                    #c8dff0 49.7%,
                    #c8dff0 50.3%,
                    transparent 50.3%,
                    transparent 100%
                ),
                repeating-linear-gradient(
                    60deg,
                    transparent,
                    transparent 49.7%,
                    #c8dff0 49.7%,
                    #c8dff0 50.3%,
                    transparent 50.3%,
                    transparent 100%
                ),
                repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 49.7%,
                    #c8dff0 49.7%,
                    #c8dff0 50.3%,
                    transparent 50.3%,
                    transparent 100%
                )`,
        },
    },
};

// Group templates by category for the UI
export const templateCategories = {
    'Blank': ['blank-white', 'blank-cream', 'blank-yellow', 'blank-mint', 'blank-blue'],
    'Lined': ['lined-wide', 'lined-college', 'lined-narrow', 'lined-gregg', 'lined-yellow', 'lined-red-margin'],
    'Graph': ['graph-1mm', 'graph-2mm', 'graph-5mm', 'graph-5mm-bold', 'graph-10mm', 'graph-isometric'],
    'Dotted': ['dot-5mm', 'dot-7mm', 'dot-5mm-cream'],
    'Specialty': ['music-staff', 'cornell-notes', 'handwriting-practice', 'math-quad', 'chemistry-lab', 'cross-section', 'steno-pad', 'polar-graph'],
};

export default paperTemplates;
