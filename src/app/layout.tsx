import { Toaster } from "@/components/Toast"
import Footer from "@/app/_layout/Footer"
import Navbar from "@/app/_layout/Navbar"
import { Providers } from "@/app/_layout/Providers"

import "@/styles.css"

import { Metadata } from "next"
import { siteConfig } from "@/config"
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
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl flex-1 px-5 py-10">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster closeButton />
        </Providers>
      </body>
    </html>
  )
}
