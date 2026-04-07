"use client"

import { Trash2, LogOut, AlertTriangle } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/atoms/alert-dialog"
import { Button } from "@/components/atoms/button"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function AlertDialogShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Alert Dialog</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A modal dialog that interrupts the user with important content and expects a response.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap gap-3"
        title="Basic"
        description="A simple confirmation dialog with cancel and continue actions."
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ShowcaseSection>

      {/* Small size */}
      <ShowcaseSection
        title='Size: sm'
        description='size="sm" — a compact dialog with a 2-column footer.'
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Small Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogTitle>Delete item?</AlertDialogTitle>
              <AlertDialogDescription>
                This item will be permanently removed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ShowcaseSection>

      {/* Destructive action */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap gap-3"
        title="Destructive Action"
        description="Use variant='destructive' on AlertDialogAction for irreversible operations."
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 />
              Delete Account
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete your account?</AlertDialogTitle>
              <AlertDialogDescription>
                All of your data, settings, and history will be permanently
                erased. This action is irreversible.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">
                Yes, delete account
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ShowcaseSection>

      {/* With media icon — default size */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap gap-3"
        title="With Media (default size)"
        description="AlertDialogMedia renders an icon/image in the header. On sm screens it spans rows."
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">
              <LogOut />
              Sign Out
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogMedia>
                <LogOut className="size-8" />
              </AlertDialogMedia>
              <AlertDialogTitle>Sign out of your account?</AlertDialogTitle>
              <AlertDialogDescription>
                You will be redirected to the login page. Any unsaved changes
                will be lost.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Stay signed in</AlertDialogCancel>
              <AlertDialogAction>Sign out</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ShowcaseSection>

      {/* With media icon — sm size + destructive */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap gap-3"
        title="With Media (sm size, destructive)"
        description="Compact dialog with a warning icon and a destructive action."
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">
              <AlertTriangle />
              Dangerous Action
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia className="bg-destructive/10 text-destructive">
                <AlertTriangle className="size-8" />
              </AlertDialogMedia>
              <AlertDialogTitle>Irreversible action</AlertDialogTitle>
              <AlertDialogDescription>
                Proceeding will permanently remove all selected records.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction variant="destructive">Proceed</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ShowcaseSection>

      {/* Custom action variants */}
      <ShowcaseSection
        childrenClassName="flex flex-wrap gap-3"
        title="Action Variants"
        description="AlertDialogAction and AlertDialogCancel accept the same variant/size props as Button."
      >
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="secondary">Secondary action</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Publish changes?</AlertDialogTitle>
              <AlertDialogDescription>
                Your changes will be made public immediately.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel variant="ghost">Discard</AlertDialogCancel>
              <AlertDialogAction variant="secondary">
                Save draft
              </AlertDialogAction>
              <AlertDialogAction>Publish</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ShowcaseSection>
    </div>
  )
}
