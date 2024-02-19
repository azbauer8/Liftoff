import Link from "next/link"
import { siteConfig } from "@/config"

import { Button } from "@/components/ui/button"
import {
  LandingActions,
  LandingDescription,
  LandingTitle,
  MotionLandingHeader,
} from "@/components/LandingHeader"

export default function Home() {
  return (
    <div>
      <MotionLandingHeader>
        <LandingTitle>{siteConfig.description}</LandingTitle>
        <LandingDescription>
          Get a well-structured and beautifully designed site up and running in
          mintues.
        </LandingDescription>
        <LandingActions>
          <Button asChild>
            <Link href="/playground">Playground</Link>
          </Button>
          <Button variant="secondary" asChild>
            <a href={siteConfig.links.github} target="_blank">
              Source Code
            </a>
          </Button>
        </LandingActions>
      </MotionLandingHeader>
    </div>
  )
}
