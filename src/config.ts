import { Route } from "next"
import { GeistSans } from "geist/font/sans"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: "Liftoff",
  description: "A starter kit for Next.js with NextUI",
  creator: "Zach Bauer",
  favicon: "/favicon.ico",
  font: GeistSans,
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Example",
      href: "/example" as Route,
    },
  ],
  links: {
    github: "https://github.com/azbauer8/next-starter",
  },
}
