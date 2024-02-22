# 🚀Liftoff

A template for creating sites with Next.js 14 (app directory) and NextUI (v2).

## Features

- Global layout with navbar and footer
- Theme toggle (light, dark, and system)
- Several reusable components (mostly "borrowed" from shadcn/ui) including:

  - Landing and general page headers
  - Drawer (using [Vaul](https://vaul.emilkowal.ski/))
  - Sheet
  - Command Menu (using [cmdk](https://cmdk.paco.me/))
  - Toast (using [Sonner](https://sonner.emilkowal.ski/))
  - Carousel (using [Embla Carousel](https://www.embla-carousel.com/))
  - Resizeable (using [react-resizable-panels](https://github.com/bvaughn/react-resizable-panels))
  - Tailwind styles for typography
- Linting and formatting with [Biome.js](https://biomejs.dev/)
- Statically typed links with Next.js `experimental.typedRoutes` feature

  - Next.js Link href's will have route autocomplete
  - In any other context where you may be linking to a route, you can get the same functionality by typing the string as a Route (imported from 'next')
    - ```typescript
      import { Route } from "next"

      const example = "/example" as Route
      ```

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)

## How to Use

### Clone this project

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```
