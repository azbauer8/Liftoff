import {
  LandingActions,
  LandingDescription,
  LandingTitle,
  MotionLandingHeader,
} from "@/components/LandingHeader"
import { siteConfig } from "@/config/site"
import { Button, Link } from "@nextui-org/react"

export default function Home() {
  return (
    <div>
      <MotionLandingHeader>
        <LandingTitle>A starter kit for Next.js with NextUI</LandingTitle>
        <LandingDescription>
          Get a well-structured and beautifully designed site up and running in
          mintues.
        </LandingDescription>
        <LandingActions>
          <Button href="/example" as={Link} variant="flat">
            Example Page
          </Button>
          <Button
            href={siteConfig.links.github}
            as={Link}
            color="primary"
            showAnchorIcon
            variant="flat"
          >
            Source Code
          </Button>
        </LandingActions>
      </MotionLandingHeader>
    </div>
  )
}
