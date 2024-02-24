"use client"

import { Button } from "@nextui-org/react"
import { GithubIcon } from "lucide-react"
import Image from "next/image"
// @ts-expect-error
import { useFormStatus } from "react-dom"

export function SignInButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      size="sm"
      variant="ghost"
      startContent={
        pending ? (
          <Image src={"/loader.svg"} alt="Loading" width={20} height={20} />
        ) : (
          <GithubIcon className="size-5" />
        )
      }
    >
      Sign In
    </Button>
  )
}
