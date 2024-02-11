"use client"
import { link as linkStyles } from "@nextui-org/theme"

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
  return (
    <NextUINavbar maxWidth="xl" position="sticky" isBordered>
      <NavbarContent
        as="div"
        className="basis-1/5 sm:basis-full"
        justify="start"
      >
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src="/favicon.png" width={20} height={20} alt="Site logo" />
            <p className="font-bold text-inherit">{siteConfig.name}</p>
          </NextLink>
        </NavbarBrand>

        <div className="hidden md:flex gap-1 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <Button
              key={item.href}
              href={item.href}
              as={Link}
              variant={path === item.href ? "flat" : "light"}
              className="px-0 mx-0"
            >
              {item.label}
            </Button>
          ))}
        </div>
        <MobileNav />
      </NavbarContent>

      <NavbarContent as="div" className="basis-1 pl-4" justify="end">
        <ThemeToggle />
      </NavbarContent>
    </NextUINavbar>
  )

  function MobileNav() {
    return (
      <Dropdown>
        <DropdownTrigger className="flex md:hidden">
          <Button isIconOnly variant="light">
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
