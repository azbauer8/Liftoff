import { FindUser } from "@/utils/querySupabase"
import { Avatar, Chip } from "@nextui-org/react"
import { GithubIcon } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function Home({
  params,
}: {
  params: { user: string }
}) {
  console.log(params.user)
  const user = await FindUser({ username: params.user })
  if (!user) {
    notFound()
  }
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Avatar
          classNames={{ base: "h-28 w-28" }}
          src={user.avatar as string}
          alt={user.name as string}
          showFallback
        />
        <div className="flex flex-col gap-2.5">
          <h1 className="text-4xl font-bold">{user.name}</h1>
          <Link href={`https://github.com/${user.user_name}`}>
            <Chip
              startContent={<GithubIcon className="size-4" />}
              variant="faded"
              className="pl-2"
            >
              {user.user_name}
            </Chip>
          </Link>
        </div>
      </div>
      {/* <StackCardGrid user={user.id} /> */}
    </div>
  )
}
