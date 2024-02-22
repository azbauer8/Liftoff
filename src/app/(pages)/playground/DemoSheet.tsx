import { Sheet, SheetBody, SheetContent, SheetHeader } from "@/components/Sheet"
import { Button, ModalFooter, useDisclosure } from "@nextui-org/react"

export default function DemoSheet() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button onPress={onOpen}>Open Sheet</Button>
      <Sheet side="left" isOpen={isOpen} onOpenChange={onOpenChange}>
        <SheetContent>
          <SheetHeader className="flex flex-col gap-1">Modal Title</SheetHeader>
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
          <ModalFooter>Footer</ModalFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}
