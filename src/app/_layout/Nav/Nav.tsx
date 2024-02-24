import { siteConfig } from "@/config"
import { NavbarBrand, NavbarContent } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"
import NavWrapper from "./NavWrapper"

import { Suspense } from "react"
import NavUserActions from "./NavUserActions"

export default function Nav() {
  return (
    <NavWrapper>
      <NavbarContent as="div" justify="start">
        <NavbarBrand>
          <NextLink className="flex items-center justify-start gap-1" href="/">
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
      </NavbarContent>

      <NavbarContent justify="end">
        <Suspense fallback={<div />}>
          <NavUserActions />
        </Suspense>
      </NavbarContent>
    </NavWrapper>
  )
}
