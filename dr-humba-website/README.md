# Dr. Humba Restaurant Website

## 1. Project Introduction
Welcome to the Dr. Humba restaurant website! Dr. Humba is a premium Filipino restaurant brand specializing in authentic, slow-cooked pork humba. This website is designed to reflect the warmth, tradition, and rich culinary heritage of the Philippines while offering a modern, responsive, and elegant digital experience for its customers. The platform allows users to explore the brand's story, view signature dishes, find branch locations (including 24/7 spots), and read customer testimonials.

## 2. Technology Stack
This project is built using modern web development tools to ensure performance, scalability, and maintainability:
* **React** (via Vite) - For building the user interface
* **Vite** - Next-generation frontend tooling for rapid development
* **TypeScript** - For type safety and better developer experience
* **Tailwind CSS** - For utility-first, highly customizable styling
* **shadcn/ui** - For beautifully designed, accessible, and customizable React components
* **Radix Icons & Lucide React** - For sharp, elegant iconography

## 3. Installation Guide

Follow these steps to set up the project locally:

1. Clone or navigate to the repository:
   ```bash
   cd dr-humba-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 4. Project Structure Explanation

The project follows a clean, scalable architecture:

* `public/` - Contains static assets like images (`hero.jpg`, `humba.jpg`) that are directly served.
* `src/assets/` - Contains brand assets like logos and custom icons.
* `src/components/layout/` - Global structural components like the `Navbar` and `Footer`.
* `src/components/sections/` - The core building blocks of the homepage (`Hero`, `About`, `SignatureDish`, `Features`, `Branches`, `Testimonials`, `CTA`).
* `src/components/ui/` - Contains reusable `shadcn/ui` components (`button`, `card`, `sheet`).
* `src/data/` - Static data models for branches, testimonials, and menu items to separate business logic from UI.
* `src/pages/` - Page-level components; currently containing the `Home` page that aggregates all sections.
* `src/lib/` - Utility functions, such as `utils.ts` for Tailwind class merging.
* `src/index.css` - Global stylesheet containing Tailwind directives and custom design system variables.

## 5. Design System

### Color Palette
The brand colors are inspired by the warmth of Filipino hospitality and the aesthetics of a premium dining experience:
* **Primary Pink** (`#FF69B4`): Represents the pork, warmth, and friendliness of the brand.
* **White/Light** (`#FDFBF7`): Represents cleanliness, freshness, and simplicity.
* **Black/Dark** (`#111827`): Represents elegance, contrast, and provides a premium feel.

### Typography
The project utilizes modern, sans-serif typography built into Tailwind, with careful attention to letter-spacing (`tracking-tight` for headings, `tracking-wider` for subheadings) and leading (`leading-relaxed`) to ensure high readability and a premium look.

### Component Style Guidelines
* **Shapes**: Soft rounded corners (`rounded-2xl`, `rounded-full`) create a friendly, approachable vibe.
* **Shadows**: Soft, expansive drop shadows (`shadow-xl`, `shadow-2xl`) create depth and an elegant, floating feel.
* **Interactions**: Smooth micro-animations on hover (scaling, translating, color transitions) make the interface feel dynamic and alive.

### Responsive Breakpoints
* Mobile First approach
* `md` (768px): Tablet layouts, switching from hamburger menus to inline navigation.
* `lg` (1024px): Desktop layouts, fully expanding grids and side-by-side content sections.

## 6. Deployment Guide

### Vercel
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into Vercel.
3. Vercel will automatically detect that it's a Vite project.
4. Leave the default Build Command (`npm run build`) and Output Directory (`dist`).
5. Click **Deploy**.

### Netlify
1. Connect your repository to Netlify.
2. Set the Build Command to `npm run build`.
3. Set the Publish directory to `dist`.
4. Click **Deploy Site**.

_This project is production-ready. Enjoy the Taste of Celebration with Dr. Humba!_
