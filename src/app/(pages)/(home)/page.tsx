import {
  LandingDescription,
  LandingTitle,
  MotionLandingHeader,
} from "@/components/LandingHeader"

export default function Home() {
  return (
    <div>
      <MotionLandingHeader>
        <LandingTitle>
          A repository of web dev stacks for you to catalog and discover.
        </LandingTitle>
        <LandingDescription>
          Sign in with GitHub to create your own!
        </LandingDescription>
      </MotionLandingHeader>
    </div>
  )
}
