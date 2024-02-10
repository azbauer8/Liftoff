import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t-[1px] border-divider">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Created by {siteConfig.creator}. The source code is available on{" "}
          <Link
            title="Source code on GitHub"
            href={siteConfig.links.github}
            isExternal
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}