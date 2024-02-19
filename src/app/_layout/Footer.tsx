import { siteConfig } from "@/config"

import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-muted py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Created by {siteConfig.creator}. The source code is available on{" "}
          <Button asChild variant="link" className="p-0 pr-0.5">
            <a title="Source code on GitHub" href={siteConfig.links.github}>
              GitHub
            </a>
          </Button>
          .
        </p>
      </div>
    </footer>
  )
}
