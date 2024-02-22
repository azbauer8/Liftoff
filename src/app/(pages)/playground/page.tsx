"use client"

import { PageDescription, PageHeader, PageTitle } from "@/components/PageHeader"

import {
  LandingActions,
  LandingDescription,
  LandingTitle,
  MotionLandingHeader,
} from "@/components/LandingHeader"
import DemoAlert from "./DemoAlert"
import DemoCarousel from "./DemoCarousel"
import { DemoCmdk } from "./DemoCmdk"
import DemoDrawer from "./DemoDrawer"
import { DemoResizeable } from "./DemoResizeable"
import DemoSheet from "./DemoSheet"
import DemoToast from "./DemoToast"
import DemoTypography from "./DemoTypography"

export default function Playground() {
  return (
    <>
      <title>Playground</title>
      <div className="space-y-5">
        <PageHeader>
          <PageTitle>Playground</PageTitle>
          <PageDescription>
            A demo of every custom component included in this project.
          </PageDescription>
        </PageHeader>

        <MotionLandingHeader>
          <LandingTitle>This is a landing title</LandingTitle>
          <LandingDescription>
            And this is a landing description. Imagine I have more to say here
            to fill the space.
          </LandingDescription>
          <LandingActions>
            <DemoToast />
            <DemoSheet />
            <DemoDrawer />
            <DemoCmdk />
          </LandingActions>
        </MotionLandingHeader>

        <DemoAlert />
        <DemoCarousel />
        <DemoResizeable />
        <DemoTypography />
      </div>
    </>
  )
}
