"use client"

import * as React from "react"
import { Separator } from "@/components/atoms/separator"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function SeparatorShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Separator</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Visually or semantically separates content.
        </p>
      </div>

      <ShowcaseSection title="Basic" description="A basic horizontal separator with vertical separators inline.">
        <div className="w-full max-w-sm">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div>Blog</div>
            <Separator orientation="vertical" />
            <div>Docs</div>
            <Separator orientation="vertical" />
            <div>Source</div>
          </div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Vertical" description="Use orientation='vertical' for a vertical separator.">
        <div className="flex h-20 items-center justify-center space-x-4 text-sm w-full max-w-sm p-4">
          <div>Home</div>
          <Separator orientation="vertical" />
          <div>About</div>
          <Separator orientation="vertical" />
          <div>Contact</div>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="List" description="Horizontal separators between list items.">
        <div className="w-full max-w-sm">
          <div className="p-4 ">
            <h4 className="text-sm font-medium">Settings</h4>
            <p className="text-xs text-muted-foreground mt-1">Manage your app settings.</p>
          </div>
          <Separator />
          <div className="p-4 ">
            <h4 className="text-sm font-medium">Account</h4>
            <p className="text-xs text-muted-foreground mt-1">Update your profile information.</p>
          </div>
          <Separator />
          <div className="p-4 ">
            <h4 className="text-sm font-medium">Notifications</h4>
            <p className="text-xs text-muted-foreground mt-1">Choose what alerts you receive.</p>
          </div>
        </div>
      </ShowcaseSection>
    </div>
  )
}
