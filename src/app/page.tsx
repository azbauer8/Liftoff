import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/LandingHeader"
import { siteConfig } from "@/config/site"
import { Button, Link } from "@nextui-org/react"

export default function Home() {
  return (
    <div>
      <PageHeader>
        <PageHeaderHeading>{siteConfig.title}</PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
        <PageActions>
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
        </PageActions>
      </PageHeader>
    </div>
  )
}
