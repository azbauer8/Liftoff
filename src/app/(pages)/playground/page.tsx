import { Metadata } from "next"

import { PageDescription, PageHeader, PageTitle } from "@/components/PageHeader"

import ExampleCards from "./ExampleCards"

export const metadata: Metadata = {
  title: "Playground",
}
export default function Playground() {
  return (
    <div>
      <PageHeader>
        <PageTitle>Playground</PageTitle>
        <PageDescription>
          An overview of the components and styles available
        </PageDescription>
      </PageHeader>
      <ExampleCards />
    </div>
  )
}
