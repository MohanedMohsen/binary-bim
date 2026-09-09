import type { Product, Solution } from '@/types';

// ─── Products ─────────────────────────────────────────────────────────────────

export const products: Product[] = [
  {
    id: 'binary-sheets',
    slug: 'binary-sheets',
    name: 'Binary Sheets',
    platform: 'revit',
    category: 'Sheet Management',
    tagline: 'Automate sheet creation, numbering, and management in Revit.',
    description:
      'Binary Sheets eliminates repetitive sheet management tasks in Autodesk Revit. Create, rename, and organize sheets in bulk — following your project standards automatically.',
    badge: 'Revit',
    status: 'available',
    features: [
      {
        icon: 'LayoutGrid',
        title: 'Bulk Sheet Creation',
        description:
          'Generate multiple sheets at once from a template list, saving hours of manual work on large projects.',
      },
      {
        icon: 'SortAsc',
        title: 'Automatic Numbering',
        description:
          'Apply consistent numbering sequences across disciplines — structural, architectural, MEP — with a single action.',
      },
      {
        icon: 'FileText',
        title: 'Title Block Integration',
        description:
          'Automatically populate title block parameters from your project data during sheet creation.',
      },
      {
        icon: 'Filter',
        title: 'Smart Filtering',
        description:
          'Filter and sort sheets by discipline, level, or custom parameters to quickly find and manage what you need.',
      },
      {
        icon: 'RefreshCw',
        title: 'Batch Rename',
        description:
          'Rename sheets in bulk using flexible naming rules without manually editing each sheet individually.',
      },
      {
        icon: 'ClipboardList',
        title: 'Export Sheet List',
        description:
          'Export a complete sheet schedule to Excel for coordination, review, or client submission.',
      },
    ],
    howItWorks: [
      {
        number: 1,
        title: 'Define Your Sheet Template',
        description:
          'Set up your sheet naming conventions, numbering prefix, and title block parameters once.',
      },
      {
        number: 2,
        title: 'Select or Import Sheet List',
        description:
          'Enter sheets manually or import a list from Excel. Binary Sheets reads your project structure automatically.',
      },
      {
        number: 3,
        title: 'Apply in One Click',
        description:
          'Create, rename, or update all selected sheets simultaneously. Changes apply instantly in your Revit model.',
      },
    ],
    compatibility: {
      software: [
        {
          label: 'Autodesk Revit',
          versions: ['2022', '2023', '2024', '2025'],
        },
      ],
      os: ['Windows 10', 'Windows 11'],
    },
    faqs: [
      {
        question: 'Does Binary Sheets work with all Revit title blocks?',
        answer:
          'Yes. Binary Sheets is compatible with any Revit title block family. It reads and writes standard Revit parameters.',
      },
      {
        question: 'Can I import sheet lists from Excel?',
        answer:
          'Yes. You can import a structured sheet list from an Excel file and Binary Sheets will create all sheets automatically.',
      },
      {
        question: 'How do I get a license?',
        answer:
          'Contact Binary BIM through the Request License form on this page. Our team will respond within one business day.',
      },
    ],
  },
  {
    id: 'binary-rooms',
    slug: 'binary-rooms',
    name: 'Binary Rooms',
    platform: 'revit',
    category: 'Room Data Management',
    tagline: 'Manage room data, finishes, and schedules with precision.',
    description:
      'Binary Rooms provides a comprehensive interface for managing room parameters, finish schedules, and room data across large Revit models — all without manually editing room properties one by one.',
    badge: 'Revit',
    status: 'available',
    features: [
      {
        icon: 'Grid',
        title: 'Bulk Parameter Editing',
        description:
          'Edit room parameters — name, number, department, finish — across multiple rooms simultaneously.',
      },
      {
        icon: 'Table',
        title: 'Finish Schedule Automation',
        description:
          'Generate and update room finish schedules automatically based on room type classifications.',
      },
      {
        icon: 'Search',
        title: 'Room Finder',
        description:
          'Quickly locate rooms by name, number, level, or department in complex multi-level models.',
      },
      {
        icon: 'Copy',
        title: 'Parameter Copy',
        description:
          'Copy parameter values from one room to selected rooms, ensuring consistency across similar spaces.',
      },
      {
        icon: 'FileSpreadsheet',
        title: 'Data Export',
        description:
          'Export room data to Excel for coordination with interior designers, quantity surveyors, or clients.',
      },
      {
        icon: 'CheckCircle',
        title: 'Validation Tools',
        description:
          'Identify rooms with missing or inconsistent data before issuing drawings.',
      },
    ],
    howItWorks: [
      {
        number: 1,
        title: 'Open Room Manager',
        description:
          'Launch Binary Rooms from the Revit ribbon. All rooms in your project are loaded instantly.',
      },
      {
        number: 2,
        title: 'Filter and Select',
        description:
          'Filter rooms by level, department, or finish type, then select the rooms you need to update.',
      },
      {
        number: 3,
        title: 'Edit and Apply',
        description:
          'Make changes in the Binary Rooms panel and apply them to all selected rooms at once.',
      },
    ],
    compatibility: {
      software: [
        {
          label: 'Autodesk Revit',
          versions: ['2022', '2023', '2024', '2025'],
        },
      ],
      os: ['Windows 10', 'Windows 11'],
    },
    faqs: [
      {
        question: 'Can Binary Rooms handle large models with hundreds of rooms?',
        answer:
          'Yes. Binary Rooms is optimized for large models and can handle hundreds of rooms without performance issues.',
      },
      {
        question: 'Does it support custom Revit parameters?',
        answer:
          'Yes. Binary Rooms reads all shared parameters and project parameters defined in your model.',
      },
      {
        question: 'How do I request a license?',
        answer:
          'Use the Request License form below. Our team will contact you within one business day.',
      },
    ],
  },
  {
    id: 'binary-renumber',
    slug: 'binary-renumber',
    name: 'Binary Renumber',
    platform: 'revit',
    category: 'Element Numbering',
    tagline: 'Renumber Revit elements intelligently and consistently.',
    description:
      'Binary Renumber automates the numbering of Revit elements — doors, windows, rooms, spaces, and more — applying your project numbering logic automatically across entire models.',
    badge: 'Revit',
    status: 'available',
    features: [
      {
        icon: 'Hash',
        title: 'Multi-Element Support',
        description:
          'Number doors, windows, rooms, spaces, equipment, and more — all from a single tool.',
      },
      {
        icon: 'Layers',
        title: 'Level-Based Sequences',
        description:
          'Apply level-based numbering sequences that follow your project coordination conventions.',
      },
      {
        icon: 'Settings',
        title: 'Custom Prefix/Suffix',
        description:
          'Define custom prefixes and suffixes per element category to match your project standards.',
      },
      {
        icon: 'ArrowRight',
        title: 'Sequential Ordering',
        description:
          'Order elements by location — left to right, bottom to top — for logical and consistent numbering.',
      },
      {
        icon: 'RotateCcw',
        title: 'Re-sequence on Demand',
        description:
          'Renumber only selected elements or the entire model at any project stage without losing data.',
      },
      {
        icon: 'AlertCircle',
        title: 'Conflict Detection',
        description:
          'Identify duplicate or missing numbers before applying changes to avoid coordination errors.',
      },
    ],
    howItWorks: [
      {
        number: 1,
        title: 'Select Element Type',
        description:
          'Choose the Revit category you want to number: doors, windows, rooms, or any other element type.',
      },
      {
        number: 2,
        title: 'Configure Numbering Rules',
        description:
          'Set your prefix, start number, increment, and ordering direction.',
      },
      {
        number: 3,
        title: 'Apply to Model',
        description:
          'Binary Renumber applies the numbering sequence to all selected elements in seconds.',
      },
    ],
    compatibility: {
      software: [
        {
          label: 'Autodesk Revit',
          versions: ['2022', '2023', '2024', '2025'],
        },
      ],
      os: ['Windows 10', 'Windows 11'],
    },
    faqs: [
      {
        question: 'Does Binary Renumber support linked models?',
        answer:
          'Binary Renumber works on elements in the host model. Linked model support is on our development roadmap.',
      },
      {
        question: 'Can I undo changes after applying numbering?',
        answer:
          'Yes. Binary Renumber uses standard Revit transactions, so all changes can be undone using Revit\'s Undo function.',
      },
      {
        question: 'How do I get a license?',
        answer:
          'Contact Binary BIM through the Request License form on this page.',
      },
    ],
  },
  {
    id: 'binary-layers',
    slug: 'binary-layers',
    name: 'Binary Layers',
    platform: 'autocad',
    category: 'Layer Management',
    tagline: 'Manage AutoCAD layers with precision and efficiency.',
    description:
      'Binary Layers is a professional layer management tool for AutoCAD. Clean, organize, and apply layer standards across your drawings without the manual overhead.',
    badge: 'AutoCAD',
    status: 'available',
    features: [
      {
        icon: 'Layers',
        title: 'Layer Standards',
        description:
          'Apply your office or project layer standards to any drawing in seconds.',
      },
      {
        icon: 'RefreshCw',
        title: 'Batch Layer Operations',
        description:
          'Rename, recolor, freeze, lock, or delete multiple layers simultaneously.',
      },
      {
        icon: 'Filter',
        title: 'Smart Layer Filter',
        description:
          'Filter layers by name pattern, color, linetype, or status to quickly find what you need.',
      },
      {
        icon: 'Copy',
        title: 'Layer Cloning',
        description:
          'Duplicate layer settings from one drawing to another for consistent output across a project.',
      },
      {
        icon: 'Trash2',
        title: 'Purge Unused Layers',
        description:
          'Automatically identify and remove unused layers to keep drawings clean and lightweight.',
      },
      {
        icon: 'Download',
        title: 'Layer Export',
        description:
          'Export layer structures to Excel for documentation, review, or inter-discipline coordination.',
      },
    ],
    howItWorks: [
      {
        number: 1,
        title: 'Open Binary Layers',
        description:
          'Launch Binary Layers from the AutoCAD ribbon or command line. All drawing layers are displayed instantly.',
      },
      {
        number: 2,
        title: 'Select and Configure',
        description:
          'Filter, select the layers you need to work with, and apply your required operation.',
      },
      {
        number: 3,
        title: 'Apply Changes',
        description:
          'Binary Layers applies all selected changes to the drawing immediately.',
      },
    ],
    compatibility: {
      software: [
        {
          label: 'Autodesk AutoCAD',
          versions: ['2022', '2023', '2024', '2025'],
        },
        {
          label: 'AutoCAD Architecture',
          versions: ['2022', '2023', '2024', '2025'],
        },
      ],
      os: ['Windows 10', 'Windows 11'],
    },
    faqs: [
      {
        question: 'Does Binary Layers support AutoCAD LT?',
        answer:
          'Binary Layers currently supports full AutoCAD. AutoCAD LT compatibility is planned for a future release.',
      },
      {
        question: 'Can I save and reuse layer standards?',
        answer:
          'Yes. Binary Layers allows you to save named layer profiles that can be applied to any drawing.',
      },
      {
        question: 'How do I request a license?',
        answer:
          'Use the Request License form on this page. Our team will respond within one business day.',
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByPlatform(platform: 'revit' | 'autocad'): Product[] {
  return products.filter((p) => p.platform === platform || p.platform === 'multi');
}

// ─── Solutions ────────────────────────────────────────────────────────────────

export const solutions: Solution[] = [
  {
    id: 'architects',
    title: 'For Architects',
    description:
      'Speed up documentation, sheet management, and room scheduling so you can focus on design.',
    audience: 'Architects',
    icon: 'Building2',
  },
  {
    id: 'engineers',
    title: 'For Engineers',
    description:
      'Automate element numbering, layer management, and data extraction across complex engineering models.',
    audience: 'Engineers',
    icon: 'Wrench',
  },
  {
    id: 'bim-managers',
    title: 'For BIM Managers',
    description:
      'Enforce project standards, audit model data, and streamline team workflows with automation tools built for BIM coordination.',
    audience: 'BIM Managers',
    icon: 'Shield',
  },
  {
    id: 'aec-companies',
    title: 'For AEC Companies',
    description:
      'Deploy Binary BIM tools across your project teams to establish consistent standards and measurable productivity improvements.',
    audience: 'AEC Companies',
    icon: 'Building',
  },
];
