export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "ACME",
  title: "Next.js + NextUI Template",
  description: "Get started with a beautifully designed site in mintues.",
  creator: "Zach Bauer",
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
