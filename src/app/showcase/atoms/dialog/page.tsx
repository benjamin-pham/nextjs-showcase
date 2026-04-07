"use client"

import * as React from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/atoms/dialog"
import { Button } from "@/components/atoms/button"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"
import { Settings2Icon, UserIcon, Trash2Icon } from "lucide-react"

export default function DialogShowcasePage() {
  const [name, setName] = React.useState("Pedro Duarte")
  const [username, setUsername] = React.useState("@peduarte")

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Dialog</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A simple dialog with a title, description, and close button."
        childrenClassName="flex flex-wrap gap-3"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      {/* With Footer */}
      <ShowcaseSection
        title="With Footer"
        description="Use DialogFooter to place action buttons at the bottom of the dialog."
        childrenClassName="flex flex-wrap gap-3"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter showCloseButton>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      {/* Without Close Button */}
      <ShowcaseSection
        title="Without Close Button"
        description="Pass showCloseButton={false} to hide the default top-right close button."
        childrenClassName="flex flex-wrap gap-3"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open</Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>No close button</DialogTitle>
              <DialogDescription>
                This dialog hides the default close button. Dismiss it using the
                footer action or pressing Escape.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      {/* Destructive Action */}
      <ShowcaseSection
        title="Destructive Action"
        description="Use a destructive button variant in the footer for irreversible operations."
        childrenClassName="flex flex-wrap gap-3"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">
              <Trash2Icon />
              Delete Account
            </Button>
          </DialogTrigger>
          <DialogContent showCloseButton={false}>
            <DialogHeader>
              <DialogTitle>Delete your account?</DialogTitle>
              <DialogDescription>
                All of your data, settings, and history will be permanently
                erased. This action is irreversible.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button variant="destructive">Yes, delete account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      {/* With Icon in Header */}
      <ShowcaseSection
        title="With Icon in Header"
        description="Combine an icon with the title inside DialogHeader for extra context."
        childrenClassName="flex flex-wrap gap-3"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Settings2Icon />
              Settings
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <Settings2Icon className="size-5 text-muted-foreground" />
                <DialogTitle>Preferences</DialogTitle>
              </div>
              <DialogDescription>
                Manage your account settings and notification preferences.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-3 text-sm text-muted-foreground">
              <div className="flex items-center justify-between rounded-xl border px-4 py-3">
                <span>Email notifications</span>
                <span className="font-medium text-foreground">Enabled</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border px-4 py-3">
                <span>Two-factor authentication</span>
                <span className="font-medium text-foreground">Disabled</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border px-4 py-3">
                <span>Theme</span>
                <span className="font-medium text-foreground">System</span>
              </div>
            </div>
            <DialogFooter showCloseButton>
              <Button>Save preferences</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <UserIcon />
              Invite User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <UserIcon className="size-5 text-muted-foreground" />
                <DialogTitle>Invite a team member</DialogTitle>
              </div>
              <DialogDescription>
                Enter an email address to send an invite link.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="colleague@example.com" />
            </div>
            <DialogFooter showCloseButton>
              <Button>Send invite</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      {/* Scrollable Content */}
      <ShowcaseSection
        title="Scrollable Content"
        description="A dialog with scrollable content when the body exceeds a max height."
        childrenClassName="flex flex-wrap gap-3"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Scrollable Content</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Scrollable Content</DialogTitle>
              <DialogDescription>
                This is a dialog with scrollable content.
              </DialogDescription>
            </DialogHeader>
            <div className="-mx-6 no-scrollbar max-h-[50vh] overflow-y-auto px-6">
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-4 leading-normal text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      {/* Sticky Footer */}
      <ShowcaseSection
        title="Sticky Footer"
        description="The footer stays visible while the content scrolls inside the dialog."
        childrenClassName="flex flex-wrap gap-3"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Sticky Footer</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sticky Footer</DialogTitle>
              <DialogDescription>
                This dialog has a sticky footer that stays visible while the content
                scrolls.
              </DialogDescription>
            </DialogHeader>
            <div className="-mx-6 no-scrollbar max-h-[50vh] overflow-y-auto px-6">
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-4 leading-normal text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection
        title="Controlled"
        description="Control open state externally using open and onOpenChange props."
        childrenClassName="flex flex-wrap gap-3"
      >
        <ControlledDialog />
      </ShowcaseSection>
    </div>
  )
}

function ControlledDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" onClick={() => setOpen(true)}>
        Open controlled
      </Button>
      <span className="text-sm text-muted-foreground">
        State: <span className="font-mono">{open ? "open" : "closed"}</span>
      </span>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled dialog</DialogTitle>
            <DialogDescription>
              This dialog&apos;s open state is controlled externally via React state.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
