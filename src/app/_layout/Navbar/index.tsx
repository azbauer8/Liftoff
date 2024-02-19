"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { siteConfig } from "@/config"
import clsx from "clsx"

import { ThemeToggle } from "./ThemeToggle"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

function MainNav() {
  const pathname = usePathname()
  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          src="/favicon.ico"
          alt="Logo"
          className="size-6"
          width={32}
          height={32}
        />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.title}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        {siteConfig.navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "transition-colors hover:text-foreground/80",
              pathname === item.href
                ? "text-foreground"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
