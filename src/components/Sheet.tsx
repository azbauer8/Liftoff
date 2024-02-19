import React from "react"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react"

const Sheet = React.forwardRef<
  React.ElementRef<typeof Modal>,
  React.ComponentPropsWithoutRef<typeof Modal>
>(({ className, children, side, ...props }, ref) => (
  <Modal
    className={className}
    classNames={{
      base: `${side === "left" ? "left-0 -translate-x-6" : "right-0 translate-x-6"} fixed h-screen rounded-none`,
    }}
    motionProps={{
      variants: {
        enter: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        },
        exit: {
          x: side === "left" ? -20 : 20,
          opacity: 0,
          transition: {
            duration: 0.2,
            ease: "easeIn",
          },
        },
      },
    }}
    {...props}
    ref={ref}
  >
    {children}
  </Modal>
))
Sheet.displayName = Modal.displayName

const SheetContent = ModalContent

const SheetHeader = ModalHeader

const SheetBody = ModalBody

const SheetFooter = ModalFooter

export { Sheet, SheetContent, SheetHeader, SheetBody, SheetFooter }
