import Footer from "@/app/_global/Footer"
import Navbar from "@/app/_global/Navbar"
import { Providers } from "@/app/_global/Providers"
import "@/app/_global/styles.css"
import { siteConfig } from "@/config/site"
import clsx from "clsx"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.favicon,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={clsx(
          "bg-background text-foreground antialiased",
          siteConfig.font.className,
        )}
      >
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl flex-1 py-10 px-5">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
