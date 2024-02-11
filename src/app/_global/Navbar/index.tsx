"use client"
import { link as linkStyles } from "@nextui-org/react"

import { siteConfig } from "@/config/site"
import clsx from "clsx"
import NextLink from "next/link"

import { ThemeToggle } from "./ThemeToggle"

import {
  Link,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@nextui-org/react"
import { usePathname } from "next/navigation"

import { useScrollPosition } from "@/hooks"
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react"
import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const path = usePathname()
  const scrollPosition = useScrollPosition()
  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      isBlurred={false}
      classNames={{
        base: "bg-transparent",
        wrapper: `transition-all ease-in-out duration-300 rounded-3xl ${
          scrollPosition <= 50
            ? "bg-transparent"
            : "mt-1 mx-2.5 bg-default/40 dark:bg-default/20 backdrop-blur-2xl shadow-lg"
        }`,
      }}
    >
      <NavbarContent as="div" justify="start">
        <DesktopNavLinks />
        <MobileNavLinks />
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <ThemeToggle />
      </NavbarContent>
    </NextUINavbar>
  )

  function DesktopNavLinks() {
    return (
      <div className="hidden md:flex gap-2.5">
        <NavbarBrand>
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src={siteConfig.favicon}
              priority
              width={20}
              height={20}
              alt="Site logo"
            />
            <p className="font-bold">{siteConfig.title}</p>
          </NextLink>
        </NavbarBrand>

        <div className="space-x-1">
          {siteConfig.navItems.map((item) => (
            <Button
              key={item.href}
              href={item.href}
              as={Link}
              variant={path === item.href ? "flat" : "light"}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    )
  }

  function MobileNavLinks() {
    return (
      <Dropdown>
        <DropdownTrigger className="flex md:hidden -translate-x-3">
          <Button variant="light">
            <NavbarBrand>
              <div className="flex justify-start items-center gap-1">
                <Image
                  src={siteConfig.favicon}
                  priority
                  width={20}
                  height={20}
                  alt="Site logo"
                />
                <p className="font-bold">{siteConfig.title}</p>
              </div>
            </NavbarBrand>
            <ChevronDownIcon size={20} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          {siteConfig.navItems.map((item) => (
            <DropdownItem
              key={item.href}
              as={Link}
              href={item.href}
              className={clsx(
                "w-full",
                path === item.href && "bg-default",
                linkStyles({ color: "foreground" }),
              )}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    )
  }
}
