"use client"

import * as React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/atoms/drawer"
import { Button } from "@/components/atoms/button"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"
import { MinusIcon, PlusIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export default function DrawerShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Drawer</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A drawer component built on top of Vaul. Slides in from any edge of the screen.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple drawer sliding up from the bottom (default direction)."
        childrenClassName="flex flex-wrap gap-3"
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Open Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ShowcaseSection>

      {/* Directions */}
      <ShowcaseSection
        title="Directions"
        description="Use the direction prop to slide the drawer in from any edge: bottom (default), top, left, or right."
        childrenClassName="flex flex-wrap gap-3"
      >
        {(["bottom", "top", "left", "right"] as const).map((dir) => (
          <Drawer key={dir} direction={dir}>
            <DrawerTrigger asChild>
              <Button variant="outline" className="capitalize">
                From {dir}
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle className="capitalize">{dir} Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides in from the {dir}.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </ShowcaseSection>

      {/* With Form */}
      <ShowcaseSection
        title="With Form"
        description="Use a drawer to collect user input with a form inside."
        childrenClassName="flex flex-wrap gap-3"
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DrawerDescription>
            </DrawerHeader>
            <div className="grid gap-4 px-4">
              <div className="grid gap-1.5">
                <Label htmlFor="drawer-name">Name</Label>
                <Input id="drawer-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="drawer-username">Username</Label>
                <Input id="drawer-username" defaultValue="@peduarte" />
              </div>
            </div>
            <DrawerFooter>
              <Button>Save changes</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ShowcaseSection>

      {/* Scrollable Content */}
      <ShowcaseSection
        title="Scrollable Content"
        description="Long content inside the drawer scrolls independently while action buttons remain visible."
        childrenClassName="flex flex-wrap gap-3"
      >
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">Scrollable Drawer</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Terms of Service</DrawerTitle>
              <DrawerDescription>
                Please read our terms carefully before accepting.
              </DrawerDescription>
            </DrawerHeader>
            <div className="overflow-y-auto px-4 no-scrollbar">
              {Array.from({ length: 8 }).map((_, i) => (
                <p key={i} className="mb-4 text-sm text-muted-foreground leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
              ))}
            </div>
            <DrawerFooter>
              <Button>Accept</Button>
              <DrawerClose asChild>
                <Button variant="outline">Decline</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection
        title="Controlled"
        description="Control open state externally using open and onOpenChange props."
        childrenClassName="flex flex-wrap gap-3"
      >
        <ControlledDrawer />
      </ShowcaseSection>

      {/* Counter */}
      <ShowcaseSection
        title="Interactive Content"
        description="Drawers can contain any interactive content, such as a counter."
        childrenClassName="flex flex-wrap gap-3"
      >
        <CounterDrawer />
      </ShowcaseSection>

      {/* Responsive Dialog */}
      <ShowcaseSection
        title="Responsive Dialog"
        description="Renders as a Dialog on desktop (≥768px) and as a Drawer on mobile. Resize the window to see it switch."
        childrenClassName="flex flex-wrap gap-3"
      >
        <ResponsiveDialog />
      </ShowcaseSection>
    </div>
  )
}

function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="resp-email">Email</Label>
        <Input type="email" id="resp-email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="resp-username">Username</Label>
        <Input id="resp-username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}

function ControlledDrawer() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open controlled
      </Button>
      <span className="text-sm text-muted-foreground">
        State: <span className="font-mono">{open ? "open" : "closed"}</span>
      </span>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Controlled Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer&apos;s open state is controlled externally via React state.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

function CounterDrawer() {
  const [count, setCount] = React.useState(1)

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Move Goal</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Move Goal</DrawerTitle>
          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
        </DrawerHeader>
        <div className="flex items-center justify-center gap-6 p-8">
          <Button
            variant="outline"
            size="icon"
            className="size-10 shrink-0 rounded-full"
            onClick={() => setCount(Math.max(0, count - 1))}
          >
            <MinusIcon />
          </Button>
          <div className="flex flex-col items-center gap-1">
            <span className="text-6xl font-bold tabular-nums">{count}</span>
            <span className="text-sm text-muted-foreground">goals / day</span>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="size-10 shrink-0 rounded-full"
            onClick={() => setCount(count + 1)}
          >
            <PlusIcon />
          </Button>
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
