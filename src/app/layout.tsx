import Footer from "@/app/_layout/Footer"
import Navbar from "@/app/_layout/Navbar"
import { Providers } from "@/app/_layout/Providers"

import "@/styles.css"

import { Metadata } from "next"
import { siteConfig } from "@/config"
import { HydrationOverlay } from "@builder.io/react-hydration-overlay"
import clsx from "clsx"

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
          siteConfig.font.className
        )}
      >
        <HydrationOverlay>
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="container mx-auto max-w-[1400px] flex-1 px-5 py-10">
                {children}
              </main>
              <Footer />
            </div>
          </Providers>
        </HydrationOverlay>
      </body>
    </html>
  )
}
