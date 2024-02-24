import { signIn } from "@/app/auth/actions"
import { ThemeToggle } from "@/components/ThemeToggle"
import { GetAuthUser } from "@/utils/querySupabase"
import { Button } from "@nextui-org/react"
import { PlusCircleIcon } from "lucide-react"
import { Route } from "next"
import Link from "next/link"
import NavMenu from "./NavMenu"
import { SignInButton } from "./SignInButton"

export default async function NavUserActions() {
  const user = await GetAuthUser()
  if (user) {
    return (
      <>
        <Button
          as={Link}
          isIconOnly
          variant="light"
          aria-label="Theme toggle placeholder"
          href={"/new" as Route}
        >
          <PlusCircleIcon className="size-6" />
        </Button>
        <NavMenu user={user} />
      </>
    )
  }
  return (
    <div className="flex items-center gap-2">
      <form action={signIn}>
        <SignInButton />
      </form>
      <ThemeToggle />
    </div>
  )
}
