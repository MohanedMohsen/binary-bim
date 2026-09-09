# Binary BIM — Production Website Implementation Walkthrough

The production website for **Binary BIM** (*Where BIM meets AUTOMATION*) has been built and verified with zero build or linting errors.

---

## 1. Project Architecture & Standards

Built using Next.js (App Router), TypeScript, and Tailwind CSS adhering strictly to the engineering startup tone and MVP scope:

```
e:/BIM/
├── src/
│   ├── app/
│   │   ├── layout.tsx                     # RootLayout (Inter + Cairo, I18nProvider, SEO metadata)
│   │   ├── globals.css                    # Design tokens & color system
│   │   ├── page.tsx                       # Home page (Hero, FeaturedProducts, Platforms, CTA)
│   │   ├── not-found.tsx                  # Accessible 404 page
│   │   ├── sitemap.ts                     # XML Sitemap generator
│   │   ├── robots.ts                      # Robots.txt configuration
│   │   ├── products/
│   │   │   ├── page.tsx                   # Products catalog (SSR)
│   │   │   ├── ProductsClient.tsx         # Platform filtering tabs (All / Revit / AutoCAD)
│   │   │   ├── revit/page.tsx             # Autodesk Revit Add-ins page
│   │   │   ├── autocad/page.tsx           # Autodesk AutoCAD Plugins page
│   │   │   └── [slug]/page.tsx            # Reusable dynamic product detail template (SSG)
│   │   ├── solutions/page.tsx             # Role & workflow-based AEC solutions
│   │   ├── about/page.tsx                 # Engineering story, purpose & principles
│   │   └── contact/page.tsx               # Licensing inquiry & contact page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                 # Responsive header with i18n & theme toggles
│   │   │   ├── Footer.tsx                 # Comprehensive footer with copyright & trademark notices
│   │   │   └── PageContainer.tsx          # Consistent spacing container
│   │   ├── ui/
│   │   │   ├── Button.tsx                 # Primary, secondary, outline, ghost variants
│   │   │   ├── Badge.tsx                  # Platform badges (Revit, AutoCAD, Multi)
│   │   │   ├── Input.tsx                  # Accessible input with error and hint states
│   │   │   ├── Select.tsx                 # Accessible select with styled chevron
│   │   │   ├── Textarea.tsx               # Accessible multiline textarea
│   │   │   ├── SectionHeader.tsx          # Standardized section headings
│   │   │   ├── ThemeToggle.tsx            # Light/Dark mode switcher (useSyncExternalStore)
│   │   │   └── LanguageToggle.tsx         # English / Arabic switcher
│   │   ├── products/
│   │   │   ├── ProductCard.tsx            # Data-driven product card
│   │   │   ├── ProductGrid.tsx            # Responsive grid with empty state handling
│   │   │   ├── ProductHero.tsx            # Breadcrumbs, platform badge, headline, CTAs
│   │   │   ├── ProductFeatures.tsx        # Features grid with Lucide icons
│   │   │   ├── HowItWorks.tsx             # Step-by-step numbered workflow
│   │   │   ├── CompatibilitySection.tsx   # Software version & OS support matrix
│   │   │   ├── RequestLicenseSection.tsx  # Pre-populated license request form
│   │   │   └── FAQSection.tsx             # Accessible accordion FAQ
│   │   ├── solutions/
│   │   │   └── SolutionCard.tsx           # Discipline-tailored cards
│   │   └── sections/
│   │       ├── Hero.tsx                   # Visual hero with brand statement & platform pills
│   │       ├── FeaturedProducts.tsx       # Curated available products
│   │       ├── PlatformsSection.tsx       # Revit vs AutoCAD platform comparisons
│   │       ├── CTASection.tsx             # Consistent call-to-action banner
│   │       └── ContactForm.tsx            # React Hook Form + Zod validated form
│   ├── data/
│   │   └── products.ts                    # Centralized product data source
│   ├── lib/
│   │   ├── utils.ts                       # Class merger & platform helpers
│   │   ├── validations.ts                 # Zod contact & license schemas
│   │   └── i18n.tsx                       # Locale context supporting English and Arabic RTL
│   └── types/
│       └── index.ts                       # Domain types (Product, Solution, Form values)
```

---

## 2. Design System Tokens

The color palette matches the provided specification:
* **Dark Background**: `#0B1120`
* **Secondary Background**: `#111827`
* **Card Background**: `#172033`
* **Primary Blue**: `#2563EB`
* **Cyan Accent**: `#06B6D4`
* **Success Green**: `#10B981`
* **Primary Text**: `#F8FAFC`
* **Secondary Text**: `#94A3B8`
* **Border**: `#263449`
* **Typography**: Inter for Latin / English, Cairo for Arabic.

---

## 3. Data-Driven Products Implemented

All product pages render from the centralized definition in `src/data/products.ts`:
1. **Binary Sheets** (`/products/binary-sheets`): Revit sheet creation, numbering, and schedule automation.
2. **Binary Rooms** (`/products/binary-rooms`): Revit room parameter and finish schedule management.
3. **Binary Renumber** (`/products/binary-renumber`): Revit sequential element numbering and coordination.
4. **Binary Layers** (`/products/binary-layers`): AutoCAD layer standards and batch operations.

---

## 4. Quality & Compliance Audit

| Requirement | Status | Evidence |
|---|---|---|
| Real AEC software positioning | Verified | No AI tropes, no glowing neon, no fake metrics or fake logos. |
| Clean code architecture | Verified | Modular components under `layout/`, `ui/`, `products/`, `solutions/`, `sections/`. |
| Centralized product data | Verified | `src/data/products.ts` used across catalog and detail pages. |
| Reusable detail template | Verified | `src/app/products/[slug]/page.tsx` with `generateStaticParams`. |
| Forms & Validation | Verified | React Hook Form + Zod (`name`, `email`, `company`, `phone`, `country`, `product`, `message`). |
| Responsive design | Verified | Mobile drawer navigation, responsive grids (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`). |
| Accessibility | Verified | Semantic tags, `aria-expanded`, `role="list"`, `label` bindings, `:focus-visible` styling. |
| Dark / Light mode | Verified | Persistent toggle via `useSyncExternalStore` and `localStorage`. |
| Internationalization | Verified | English + Arabic with true `dir="rtl"` layout and Cairo font support. |
| SEO Foundation | Verified | OpenGraph, Twitter cards, metadata title templates, `robots.ts`, `sitemap.ts`. |
| TypeScript & Lint | Verified | `npm run lint` = 0 errors, 0 warnings; `npm run build` = 0 errors. |
