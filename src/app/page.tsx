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
        <LandingTitle>{siteConfig.title}</LandingTitle>
        <LandingDescription>{siteConfig.description}</LandingDescription>
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
