import { GeistSans } from "geist/font/sans"
export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Liftoff",
  title: "A Starter Kit for Next.js with NextUI",
  description:
    "Get a well-structured and beautifully designed site up and running in mintues.",
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
      href: "/example",
    },
  ],
  links: {
    github: "https://github.com/azbauer8/next-starter",
  },
}
