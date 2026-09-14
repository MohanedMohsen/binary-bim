export const product = {
  slug: 'binary-bim',
  name: 'Binary BIM',
  image: '/images/products/revit-finish-workspace.jpg',
  screenshots: [
    '/images/products/revit-finish-workspace.jpg',
    '/images/products/room-style-library.jpg',
    '/images/products/room-style-mapping.jpg',
    '/images/products/room-style-library-dark.jpg',
    '/images/products/room-style-mapping-dark.jpg',
    '/images/products/finish-layer-setup.jpg',
    '/images/products/finish-layer-workflow.jpg',
    '/images/products/room-finish-panel.jpg',
    '/images/products/room-finish-settings.jpg',
    '/images/products/room-style-assignment.jpg',
    '/images/products/revit-room-finish.jpg',
    '/images/products/revit-finish-dark.jpg',
  ],
} as const;

// Legacy component compatibility. Public UI intentionally presents only `product`.
export const products: any[] = [];
export const solutions: any[] = [];
