import { Inter } from "next/font/google"

export type SiteConfig = typeof siteConfig
const inter = Inter({ subsets: ["latin"] })

export const siteConfig = {
  name: "Liftoff",
  title: "A Starter Kit for Next.js with NextUI",
  description:
    "Get a well-structured and beautifully designed site up and running in mintues.",
  creator: "Zach Bauer",
  font: inter,
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
