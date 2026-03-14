// Paper Background Templates for Cheatsheet Builder
// Each template defines a CSS backgroundImage + backgroundSize for the preview page

export const paperTemplates = {

  // ─── NONE ──────────────────────────────────────────────────────────────────
  none: {
    name: 'Plain White',
    emoji: '⬜',
    category: 'Plain',
    description: 'Clean white page with no background pattern',
    backgroundImage: 'none',
    backgroundSize: 'auto',
    backgroundColor: '#ffffff',
  },

  // ─── LINED PAPER ───────────────────────────────────────────────────────────
  lined_narrow: {
    name: 'Narrow Ruled',
    emoji: '📝',
    category: 'Lined',
    description: '¼ inch lines — for small, compact handwriting',
    spacing: '6.35mm',
    backgroundColor: '#ffffff',
    backgroundImage: `repeating-linear-gradient(
      to bottom,
      transparent,
      transparent calc(6.35mm - 1px),
      #b3c8e8 calc(6.35mm - 1px),
      #b3c8e8 6.35mm
    )`,
    backgroundSize: '100% 6.35mm',
  },

  lined_college: {
    name: 'College Ruled',
    emoji: '📓',
    category: 'Lined',
    description: '9/32 inch lines — standard college notebook ruling',
    spacing: '7.1mm',
    backgroundColor: '#ffffff',
    backgroundImage: `repeating-linear-gradient(
      to bottom,
      transparent,
      transparent calc(7.1mm - 1px),
      #b3c8e8 calc(7.1mm - 1px),
      #b3c8e8 7.1mm
    )`,
    backgroundSize: '100% 7.1mm',
  },

  lined_wide: {
    name: 'Wide Ruled',
    emoji: '📒',
    category: 'Lined',
    description: '11/32 inch lines — for larger handwriting, younger students',
    spacing: '8.7mm',
    backgroundColor: '#ffffff',
    backgroundImage: `repeating-linear-gradient(
      to bottom,
      transparent,
      transparent calc(8.7mm - 1px),
      #b3c8e8 calc(8.7mm - 1px),
      #b3c8e8 8.7mm
    )`,
    backgroundSize: '100% 8.7mm',
  },

  lined_primary: {
    name: 'Primary Ruled (K–2)',
    emoji: '🧸',
    category: 'Lined',
    description: 'Wide dashed midline — for kindergarten to grade 2 printing practice',
    spacing: '15mm',
    backgroundColor: '#fff9f0',
    backgroundImage: `repeating-linear-gradient(
      to bottom,
      transparent,
      transparent calc(15mm - 1px),
      #f4a261 calc(15mm - 1px),
      #f4a261 15mm
    ),
    repeating-linear-gradient(
      to bottom,
      transparent,
      transparent calc(7.5mm - 1px),
      rgba(244,162,97,0.35) calc(7.5mm - 1px),
      rgba(244,162,97,0.35) 7.5mm
    )`,
    backgroundSize: '100% 15mm, 100% 7.5mm',
  },

  lined_red_margin: {
    name: 'College Ruled + Red Margin',
    emoji: '📔',
    category: 'Lined',
    description: 'Blue lines with red left margin — classic school notebook look',
    spacing: '7.1mm',
    backgroundColor: '#ffffff',
    backgroundImage: `repeating-linear-gradient(
      to bottom,
      transparent,
      transparent calc(7.1mm - 1px),
      #b3c8e8 calc(7.1mm - 1px),
      #b3c8e8 7.1mm
    ),
    linear-gradient(
      to right,
      transparent 24mm,
      #e63946 24mm,
      #e63946 calc(24mm + 1px),
      transparent calc(24mm + 1px)
    )`,
    backgroundSize: '100% 7.1mm, 100% 100%',
  },

  // ─── GRAPH / GRID PAPER ────────────────────────────────────────────────────
  graph_5mm: {
    name: 'Graph Paper 5mm',
    emoji: '📐',
    category: 'Graph',
    description: '5 mm grid — standard engineering/math graph paper',
    backgroundColor: '#ffffff',
    backgroundImage: `
      linear-gradient(to right,  #c5cae9 1px, transparent 1px),
      linear-gradient(to bottom, #c5cae9 1px, transparent 1px)
    `,
    backgroundSize: '5mm 5mm',
  },

  graph_5mm_major: {
    name: 'Graph Paper 5mm + Major',
    emoji: '📏',
    category: 'Graph',
    description: '5 mm minor + 25 mm major grid — standard lab/engineering paper',
    backgroundColor: '#ffffff',
    backgroundImage: `
      linear-gradient(to right,  #7986cb 1px, transparent 1px),
      linear-gradient(to bottom, #7986cb 1px, transparent 1px),
      linear-gradient(to right,  #c5cae9 1px, transparent 1px),
      linear-gradient(to bottom, #c5cae9 1px, transparent 1px)
    `,
    backgroundSize: '25mm 25mm, 25mm 25mm, 5mm 5mm, 5mm 5mm',
  },

  graph_4mm: {
    name: 'Graph Paper 4mm',
    emoji: '🔢',
    category: 'Graph',
    description: '4 mm grid — fine grid for detailed diagrams and calculations',
    backgroundColor: '#ffffff',
    backgroundImage: `
      linear-gradient(to right,  #c5cae9 1px, transparent 1px),
      linear-gradient(to bottom, #c5cae9 1px, transparent 1px)
    `,
    backgroundSize: '4mm 4mm',
  },

  graph_10mm: {
    name: 'Graph Paper 10mm',
    emoji: '🗃️',
    category: 'Graph',
    description: '10 mm grid — large squares for diagrams, maps, and elementary math',
    backgroundColor: '#ffffff',
    backgroundImage: `
      linear-gradient(to right,  #c5cae9 1.5px, transparent 1.5px),
      linear-gradient(to bottom, #c5cae9 1.5px, transparent 1.5px)
    `,
    backgroundSize: '10mm 10mm',
  },

  graph_green: {
    name: 'Green Graph (Lab Notebook)',
    emoji: '🧪',
    category: 'Graph',
    description: 'Green tinted graph paper — classic lab notebook / chemistry look',
    backgroundColor: '#f0fff4',
    backgroundImage: `
      linear-gradient(to right,  #68d391 1px, transparent 1px),
      linear-gradient(to bottom, #68d391 1px, transparent 1px)
    `,
    backgroundSize: '5mm 5mm',
  },

  graph_blue: {
    name: 'Blueprint Grid',
    emoji: '🏗️',
    category: 'Graph',
    description: 'White grid on deep blue — classic architecture/engineering blueprint',
    backgroundColor: '#1a2a4a',
    backgroundImage: `
      linear-gradient(to right,  rgba(255,255,255,0.25) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px),
      linear-gradient(to right,  rgba(255,255,255,0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)
    `,
    backgroundSize: '20mm 20mm, 20mm 20mm, 5mm 5mm, 5mm 5mm',
    textColor: '#ffffff',
  },

  // ─── DOT PAPER ─────────────────────────────────────────────────────────────
  dot_5mm: {
    name: 'Dot Grid 5mm',
    emoji: '🔵',
    category: 'Dotted',
    description: '5 mm dot grid — popular for bullet journals and structured note-taking',
    backgroundColor: '#ffffff',
    backgroundImage: `radial-gradient(circle, #9fa8da 1.2px, transparent 1.2px)`,
    backgroundSize: '5mm 5mm',
  },

  dot_5mm_large: {
    name: 'Dot Grid 5mm (Bold)',
    emoji: '⚫',
    category: 'Dotted',
    description: 'Larger, bolder dots — easier to see for planning layouts',
    backgroundColor: '#ffffff',
    backgroundImage: `radial-gradient(circle, #5c6bc0 2px, transparent 2px)`,
    backgroundSize: '5mm 5mm',
  },

  dot_7mm: {
    name: 'Dot Grid 7mm',
    emoji: '🟣',
    category: 'Dotted',
    description: '7 mm spacing — roomy dots for diagrams and larger handwriting',
    backgroundColor: '#ffffff',
    backgroundImage: `radial-gradient(circle, #9fa8da 1.5px, transparent 1.5px)`,
    backgroundSize: '7mm 7mm',
  },

  // ─── ISOMETRIC / TRIANGULAR ────────────────────────────────────────────────
  isometric: {
    name: 'Isometric Grid',
    emoji: '🔷',
    category: 'Isometric',
    description: '60° triangle grid — for 3D diagrams, perspective sketches, architecture',
    backgroundColor: '#ffffff',
    backgroundImage: `
      linear-gradient(60deg,  #c5cae9 1px, transparent 1px),
      linear-gradient(120deg, #c5cae9 1px, transparent 1px),
      linear-gradient(to right, transparent calc(5mm - 0.5px), #c5cae9 calc(5mm - 0.5px), #c5cae9 5mm, transparent 5mm)
    `,
    backgroundSize: '10mm 8.66mm, 10mm 8.66mm, 10mm 8.66mm',
  },

  // ─── SPECIALTY PAPER ───────────────────────────────────────────────────────
  music_staff: {
    name: 'Music Staff Paper',
    emoji: '🎵',
    category: 'Specialty',
    description: '5-line music stave groups — for music theory and composition',
    backgroundColor: '#fffef9',
    backgroundImage: `repeating-linear-gradient(
      to bottom,
      transparent 0mm,
      transparent 2mm,
      #333 2mm, #333 calc(2mm + 0.5px),
      transparent calc(2mm + 0.5px),
      transparent 4mm,
      #333 4mm, #333 calc(4mm + 0.5px),
      transparent calc(4mm + 0.5px),
      transparent 6mm,
      #333 6mm, #333 calc(6mm + 0.5px),
      transparent calc(6mm + 0.5px),
      transparent 8mm,
      #333 8mm, #333 calc(8mm + 0.5px),
      transparent calc(8mm + 0.5px),
      transparent 10mm,
      #333 10mm, #333 calc(10mm + 0.5px),
      transparent calc(10mm + 0.5px),
      transparent 16mm
    )`,
    backgroundSize: '100% 16mm',
  },

  cornell: {
    name: 'Cornell Notes',
    emoji: '🗒️',
    category: 'Specialty',
    description: 'Left cue column + ruled lines + summary bar — classic Cornell note-taking system',
    backgroundColor: '#ffffff',
    backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        transparent,
        transparent calc(7.1mm - 1px),
        #b3c8e8 calc(7.1mm - 1px),
        #b3c8e8 7.1mm
      ),
      linear-gradient(
        to right,
        transparent 58mm,
        #e63946 58mm,
        #e63946 calc(58mm + 1.5px),
        transparent calc(58mm + 1.5px)
      ),
      linear-gradient(
        to bottom,
        transparent calc(100% - 35mm),
        #e63946 calc(100% - 35mm),
        #e63946 calc(100% - 34.5mm),
        transparent calc(100% - 34.5mm)
      )
    `,
    backgroundSize: '100% 7.1mm, 100% 100%, 100% 100%',
  },

  legal_pad: {
    name: 'Legal Pad',
    emoji: '🟡',
    category: 'Specialty',
    description: 'Yellow tint with ruled lines and red margin — classic legal / professional notepad',
    backgroundColor: '#fefec8',
    backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        transparent,
        transparent calc(8.5mm - 1px),
        #b3c8e8 calc(8.5mm - 1px),
        #b3c8e8 8.5mm
      ),
      linear-gradient(
        to right,
        transparent 25mm,
        #e63946 25mm,
        #e63946 calc(25mm + 1px),
        transparent calc(25mm + 1px)
      )
    `,
    backgroundSize: '100% 8.5mm, 100% 100%',
  },

  sticky_note: {
    name: 'Sticky Note',
    emoji: '🟨',
    category: 'Specialty',
    description: 'Yellow sticky note style — informal reminders and quick cheatsheets',
    backgroundColor: '#fff176',
    backgroundImage: `repeating-linear-gradient(
      to bottom,
      transparent,
      transparent calc(8mm - 1px),
      rgba(0,0,0,0.08) calc(8mm - 1px),
      rgba(0,0,0,0.08) 8mm
    )`,
    backgroundSize: '100% 8mm',
  },

  engineering: {
    name: 'Engineering Paper',
    emoji: '⚙️',
    category: 'Specialty',
    description: 'Green tinted fine grid (back printed) — traditional engineering calculation pad',
    backgroundColor: '#f0fff4',
    backgroundImage: `
      linear-gradient(to right,  rgba(56,142,60,0.4) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(56,142,60,0.4) 1px, transparent 1px),
      linear-gradient(to right,  rgba(56,142,60,0.15) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(56,142,60,0.15) 1px, transparent 1px)
    `,
    backgroundSize: '5mm 5mm, 5mm 5mm, 1mm 1mm, 1mm 1mm',
  },

  hex_grid: {
    name: 'Hex Grid',
    emoji: '🐝',
    category: 'Specialty',
    description: 'Hexagonal pattern — for chemistry, biology, and map drawing',
    backgroundColor: '#ffffff',
    // Pure CSS hexagon grid approximation using overlapping diagonals
    backgroundImage: `
      linear-gradient(60deg,  #c5cae9 1px, transparent 1px),
      linear-gradient(120deg, #c5cae9 1px, transparent 1px),
      linear-gradient(60deg,  #c5cae9 1px, transparent 1px),
      linear-gradient(120deg, #c5cae9 1px, transparent 1px),
      linear-gradient(to right, transparent calc(7mm - 0.5px), #c5cae9 calc(7mm - 0.5px), #c5cae9 7mm, transparent 7mm)
    `,
    backgroundSize: '14mm 8mm, 14mm 8mm, 14mm 8mm, 14mm 8mm, 14mm 8mm',
    backgroundPosition: '0 0, 0 0, 7mm 4mm, 7mm 4mm, 0 0',
  },

  vintage_parchment: {
    name: 'Vintage Parchment',
    emoji: '📜',
    category: 'Specialty',
    description: 'Warm sepia tinted aged paper — for history, literature, and classic notes',
    backgroundColor: '#f5e6c8',
    backgroundImage: `
      repeating-linear-gradient(
        to bottom,
        transparent,
        transparent calc(8mm - 1px),
        rgba(139,90,43,0.2) calc(8mm - 1px),
        rgba(139,90,43,0.2) 8mm
      )
    `,
    backgroundSize: '100% 8mm',
  },

  cross_section: {
    name: 'Cross-Section Paper',
    emoji: '🧱',
    category: 'Graph',
    description: 'Bold 10mm grid with fine 2mm subdivisions — for technical cross-sections',
    backgroundColor: '#ffffff',
    backgroundImage: `
      linear-gradient(to right,  #7986cb 1.5px, transparent 1.5px),
      linear-gradient(to bottom, #7986cb 1.5px, transparent 1.5px),
      linear-gradient(to right,  #e8eaf6 1px, transparent 1px),
      linear-gradient(to bottom, #e8eaf6 1px, transparent 1px)
    `,
    backgroundSize: '10mm 10mm, 10mm 10mm, 2mm 2mm, 2mm 2mm',
  },
};

// Category order for the UI
export const templateCategories = [
  'Plain',
  'Lined',
  'Graph',
  'Dotted',
  'Isometric',
  'Specialty',
];

export default paperTemplates;
