import { Route } from "next"
import { GeistSans } from "geist/font/sans"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: "Liftoff",
  description: "A starter kit for Next.js with shadcn/ui",
  creator: "Zach Bauer",
  favicon: "/favicon.ico",
  font: GeistSans,
  navItems: [
    {
      label: "Home",
      href: "/" as Route,
    },
    {
      label: "Playground",
      href: "/playground" as Route,
    },
  ],
  links: {
    github: "https://github.com/azbauer8/Liftoff",
  },
}
