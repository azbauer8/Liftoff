import { Metadata } from "next"
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react"

import { PageDescription, PageHeader, PageTitle } from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "Example",
}
export default function ExamplePage() {
  return (
    <div>
      <PageHeader>
        <PageTitle>Example Page</PageTitle>
        <PageDescription>
          Enim voluptate aute do pariatur proident esse enim dolor mollit. Lorem
          Lorem sunt deserunt elit nulla et laboris cupidatat consectetur non.
          Dolore reprehenderit tempor qui in aliqua irure in sit.
        </PageDescription>
      </PageHeader>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
        <ExampleCard />
      </div>
    </div>
  )
}

function ExampleCard() {
  return (
    <Card>
      <CardHeader className="justify-between">
        <h1 className="text-lg font-semibold leading-none text-default-600">
          Et occaecat cillum.
        </h1>
        <Button color="primary" radius="full" size="sm" variant={"solid"}>
          Follow
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-500">
        <p>
          Voluptate in labore incididunt deserunt deserunt aliquip pariatur
          dolore cupidatat reprehenderit.
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="text-small font-semibold text-default-600">4</p>
          <p className=" text-small text-default-500">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="text-small font-semibold text-default-600">97.1K</p>
          <p className="text-small text-default-500">Followers</p>
        </div>
      </CardFooter>
    </Card>
  )
}
