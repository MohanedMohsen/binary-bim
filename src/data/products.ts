import type { Product, Solution } from '@/types';

type ScreenshotProduct = Omit<Product, 'id' | 'platform' | 'status' | 'features' | 'howItWorks' | 'compatibility' | 'faqs'>;

const workflowSteps = [
  { number: 1, title: 'Open the workspace', description: 'Open the supplied Revit-based workspace for the task at hand.' },
  { number: 2, title: 'Select and configure', description: 'Choose the rooms, styles, or finish layers displayed in the interface.' },
  { number: 3, title: 'Apply changes', description: 'Apply the configured update from the workspace.' },
];

const compatibility = { software: [{ label: 'Autodesk Revit', versions: [] }], os: [] };

function createScreenshotProduct(product: ScreenshotProduct): Product {
  return {
    ...product,
    id: product.slug,
    platform: 'revit',
    status: 'available',
    features: [
      { icon: 'LayoutGrid', title: product.category, description: product.description },
      { icon: 'Settings', title: 'Focused workspace', description: 'A dedicated interface for the room finish task shown in the supplied product image.' },
      { icon: 'CheckCircle', title: 'Apply controls', description: 'The interface provides controls for applying the configured room finish operation.' },
    ],
    howItWorks: workflowSteps,
    compatibility,
    faqs: [],
  };
}

export const products: Product[] = [
  createScreenshotProduct({ slug: 'room-style-library', name: 'Binary Style Library', category: 'Room Finish Styles', tagline: 'Save and organize room finish styles from one focused workspace.', description: 'A Revit-based interface for saving room finish styles and mapping rooms to the styles you define.', image: { src: '/images/products/room-style-library.jpg', alt: 'Binary Style Library interface for saving and mapping room finish styles' } }),
  createScreenshotProduct({ slug: 'room-style-library-dark', name: 'Binary Style Library Dark', category: 'Room Finish Styles', tagline: 'A dark workspace for managing saved room finish styles.', description: 'A dark interface for working with saved room styles, style selection, and room-to-style mapping.', image: { src: '/images/products/room-style-library-dark.jpg', alt: 'Binary Style Library Dark interface for room finish style management' } }),
  createScreenshotProduct({ slug: 'room-style-mapping', name: 'Binary Room Mapper', category: 'Room Style Mapping', tagline: 'Review rooms and assign the finish style that fits each space.', description: 'A room list workspace for searching rooms and assigning a selected finish style to them.', image: { src: '/images/products/room-style-mapping.jpg', alt: 'Binary Room Mapper interface for assigning styles to listed rooms' } }),
  createScreenshotProduct({ slug: 'room-style-mapping-dark', name: 'Binary Room Mapper Dark', category: 'Room Style Mapping', tagline: 'Map rooms to finish styles in a dark Revit workspace.', description: 'A dark room mapping interface with search, room selection, and style application controls.', image: { src: '/images/products/room-style-mapping-dark.jpg', alt: 'Binary Room Mapper Dark interface for applying finish styles to rooms' } }),
  createScreenshotProduct({ slug: 'finish-layer-setup', name: 'Binary Finish Layers', category: 'Finish Layer Setup', tagline: 'Configure wall, floor, and ceiling finish layers for selected rooms.', description: 'A room finish interface with controls for defining finish layers and their displayed settings.', image: { src: '/images/products/finish-layer-setup.jpg', alt: 'Binary Finish Layers interface for configuring room finish layers' } }),
  createScreenshotProduct({ slug: 'revit-finish-workspace', name: 'Binary Finish Workspace', category: 'Revit Finish Management', tagline: 'Manage room finish settings alongside an active Revit model.', description: 'A Revit-integrated room finish workspace shown beside the model view and project controls.', image: { src: '/images/products/revit-finish-workspace.jpg', alt: 'Binary Finish Workspace displayed alongside an Autodesk Revit model' } }),
  createScreenshotProduct({ slug: 'room-finish-settings', name: 'Binary Finish Settings', category: 'Room Finish Settings', tagline: 'Configure room finish options before applying them to the model.', description: 'A room finish management panel with saved styles, layer settings, and room selection controls.', image: { src: '/images/products/room-finish-settings.jpg', alt: 'Binary Finish Settings interface for room finish management' } }),
  createScreenshotProduct({ slug: 'room-finish-panel', name: 'Binary Finish Panel', category: 'Room Finish Management', tagline: 'Work with room finish layers in a dedicated Revit panel.', description: 'A room finish management panel for selecting rooms, managing styles, and adding finish layers.', image: { src: '/images/products/room-finish-panel.jpg', alt: 'Binary Finish Panel for managing room finish layers in Revit' } }),
  createScreenshotProduct({ slug: 'room-style-assignment', name: 'Binary Style Assignment', category: 'Room Style Assignment', tagline: 'Assign saved finish styles to rooms from a localized workspace.', description: 'A room style assignment interface that displays saved styles and room finish layer controls.', image: { src: '/images/products/room-style-assignment.jpg', alt: 'Binary Style Assignment interface for localized room finish style controls' } }),
  createScreenshotProduct({ slug: 'revit-room-finish', name: 'Binary Revit Finish', category: 'Revit Finish Management', tagline: 'Keep room finish controls accessible inside your Revit workspace.', description: 'A room finish management panel displayed within the Revit application alongside the active project view.', image: { src: '/images/products/revit-room-finish.jpg', alt: 'Binary Revit Finish panel shown inside Autodesk Revit' } }),
  createScreenshotProduct({ slug: 'finish-layer-workflow', name: 'Binary Finish Workflow', category: 'Finish Layer Workflow', tagline: 'Set up room finish layers with localized controls and clear actions.', description: 'A localized workspace for mapping rooms to styles and configuring wall, floor, and ceiling finish layers.', image: { src: '/images/products/finish-layer-workflow.jpg', alt: 'Binary Finish Workflow interface for room finish layer configuration' } }),
  createScreenshotProduct({ slug: 'revit-finish-dark', name: 'Binary Revit Finish Dark', category: 'Revit Finish Management', tagline: 'Manage room finish layers from a dark panel inside Revit.', description: 'A dark room finish management workspace displayed alongside an Autodesk Revit project view.', image: { src: '/images/products/revit-finish-dark.jpg', alt: 'Binary Revit Finish Dark panel shown in Autodesk Revit' } }),
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export const solutions: Solution[] = [
  { id: 'architects', title: 'For Architects', description: 'Speed up documentation, sheet management, and room scheduling so you can focus on design.', audience: 'Architects', icon: 'Building2' },
  { id: 'engineers', title: 'For Engineers', description: 'Automate element numbering, layer management, and data extraction across complex engineering models.', audience: 'Engineers', icon: 'Wrench' },
  { id: 'bim-managers', title: 'For BIM Managers', description: 'Enforce project standards, audit model data, and streamline team workflows with automation tools built for BIM coordination.', audience: 'BIM Managers', icon: 'Shield' },
  { id: 'aec-companies', title: 'For AEC Companies', description: 'Deploy Binary BIM tools across your project teams to establish consistent standards and measurable productivity improvements.', audience: 'AEC Companies', icon: 'Building' },
];
