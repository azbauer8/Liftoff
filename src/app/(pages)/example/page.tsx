"use client"

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"
import { toast } from "sonner"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/Drawer"
import { PageDescription, PageHeader, PageTitle } from "@/components/PageHeader"
import { Sheet, SheetBody, SheetContent, SheetHeader } from "@/components/Sheet"

export default function ExamplePage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <title>Example</title>
      <div className="space-y-5">
        <PageHeader>
          <PageTitle>Example Page</PageTitle>
          <PageDescription>
            Enim voluptate aute do pariatur proident esse enim dolor mollit.
            Lorem Lorem sunt deserunt elit nulla et laboris cupidatat
            consectetur non. Dolore reprehenderit tempor qui in aliqua irure in
            sit.
          </PageDescription>
        </PageHeader>
        <Button
          onClick={() =>
            toast.success("Event has been created.", {
              description: "Event has been created.",
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          Toast me bro
        </Button>
        <Button onPress={onOpen}>Open Modal</Button>
        <Sheet side="left" isOpen={isOpen} onOpenChange={onOpenChange}>
          <SheetContent>
            <SheetHeader className="flex flex-col gap-1">
              Modal Title
            </SheetHeader>
            <SheetBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                pulvinar risus non risus hendrerit venenatis. Pellentesque sit
                amet hendrerit risus, sed porttitor quam.
              </p>
              <p>
                Magna exercitation reprehenderit magna aute tempor cupidatat
                consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi
                consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                et. Culpa deserunt nostrud ad veniam.
              </p>
            </SheetBody>
            <ModalFooter>asdasd</ModalFooter>
          </SheetContent>
        </Sheet>
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">asd asd asd asd</div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  )
}
