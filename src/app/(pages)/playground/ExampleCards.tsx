"use client"

import { cn } from "@/lib/utils"

import { BadgeDemo } from "./cards/badges"
import { ButtonsDemo } from "./cards/buttons"
import { Chat } from "./cards/chat"
import { CommandDemo } from "./cards/command-menu"
import { CookieSettings } from "./cards/cookie-settings"
import { CreateAccount } from "./cards/create-account"
import { CreateProject } from "./cards/create-project"
import { DeleteAccount } from "./cards/delete-account"
import { Invoices } from "./cards/invoices"
import { Notifications } from "./cards/notifications"
import { PaymentMethod } from "./cards/payment-method"
import { PopoverDemo } from "./cards/popover-menu"
import { ReportIssue } from "./cards/report-issue"
import { ShareDocument } from "./cards/share-document"
import { TabsDemo } from "./cards/tabbed-cards"

export default function ExampleCards() {
  return (
    <div>
      <div className="mx-auto flex max-w-screen-md flex-col gap-2 pb-8 text-center text-sm"></div>
      <div className="items-start gap-6 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col gap-6">
          <DemoContainer>
            <Notifications />
          </DemoContainer>
          <DemoContainer>
            <ButtonsDemo />
          </DemoContainer>
          <DemoContainer>
            <CookieSettings />
          </DemoContainer>
          <DemoContainer>
            <DeleteAccount />
          </DemoContainer>
          <DemoContainer>
            <CreateAccount />
          </DemoContainer>
        </div>

        <div className="flex flex-col gap-6">
          <DemoContainer>
            <ShareDocument />
          </DemoContainer>
          <DemoContainer>
            <CommandDemo />
          </DemoContainer>
          <DemoContainer>
            <ReportIssue />
          </DemoContainer>
          <DemoContainer>
            <CreateProject />
          </DemoContainer>
          <DemoContainer className="py-12">
            <PopoverDemo />
          </DemoContainer>
        </div>
        <div className="flex flex-col gap-6">
          <DemoContainer>
            <Chat />
          </DemoContainer>
          <DemoContainer>
            <BadgeDemo />
          </DemoContainer>
          <DemoContainer>
            <TabsDemo />
          </DemoContainer>
          <DemoContainer>
            <PaymentMethod />
          </DemoContainer>
          <DemoContainer>
            <Invoices />
          </DemoContainer>
        </div>
      </div>
    </div>
  )
}

function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  )
}
