"use client"

import * as React from "react"
import { 
  Sheet, 
  SheetClose, 
  SheetContent, 
  SheetDescription, 
  SheetFooter, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/atoms/sheet"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export default function SheetShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Sheet</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Extends the Dialog component to display content that complements the main content of the screen.
        </p>
      </div>

      <ShowcaseSection title="Basic" description="A basic sheet component triggered by a button.">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you&apos;re done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-name">Name</Label>
                <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">Username</Label>
                <Input id="sheet-demo-username" defaultValue="@peduarte" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </ShowcaseSection>

      <ShowcaseSection title="Side" description="Use the side prop to set the edge of the screen where the sheet appears.">
        <div className="flex flex-wrap gap-2">
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" className="capitalize">
                  {side}
                </Button>
              </SheetTrigger>
              <SheetContent
                side={side}
                className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
              >
                <SheetHeader>
                  <SheetTitle>Edit profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you&apos;re
                    done.
                  </SheetDescription>
                </SheetHeader>
                <div className="no-scrollbar overflow-y-auto px-4">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <p key={index} className="mb-2 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum.
                    </p>
                  ))}
                </div>
                <SheetFooter>
                  <Button type="submit">Save changes</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="No Close Button" description="Use showCloseButton={false} on SheetContent to hide the close button.">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">No Close Button</Button>
          </SheetTrigger>
          <SheetContent showCloseButton={false}>
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
            <SheetFooter className="mt-4">
              <SheetClose asChild>
                <Button variant="outline">Cancel</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </ShowcaseSection>
    </div>
  )
}
