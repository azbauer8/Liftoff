import { GeistSans } from "geist/font/sans"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  title: "Liftoff",
  description: "A starter kit for Next.js with NextUI",
  creator: "Zach Bauer",
  favicon: "/favicon.ico",
  font: GeistSans,
  links: {
    github: "https://github.com/azbauer8/next-starter",
  },
}
