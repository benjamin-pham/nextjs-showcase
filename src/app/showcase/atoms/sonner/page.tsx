"use client"
import { toast } from "sonner"

import { Toaster } from "@/components/atoms/sonner"
import { Button } from "@/components/atoms/button"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function SonnerShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <Toaster richColors />

      <div>
        <h1 className="text-2xl font-bold">Sonner</h1>
        <p className="text-muted-foreground text-sm mt-1">
          An opinionated toast component for React.
        </p>
      </div>

      {/* Types */}
      <ShowcaseSection
        title="Types"
        description="All built-in toast types: default, success, error, warning, and info."
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => toast("Event has been created")}>
            Default
          </Button>
          <Button variant="outline" onClick={() => toast.success("Profile saved successfully")}>
            Success
          </Button>
          <Button variant="outline" onClick={() => toast.error("Something went wrong")}>
            Error
          </Button>
          <Button variant="outline" onClick={() => toast.warning("Your session is expiring soon")}>
            Warning
          </Button>
          <Button variant="outline" onClick={() => toast.info("A new version is available")}>
            Info
          </Button>
        </div>
      </ShowcaseSection>

      {/* With Description */}
      <ShowcaseSection
        title="With Description"
        description="Add a description to give more context below the title."
      >
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast("Event created", {
                description: "Monday, January 3rd at 6:00pm",
              })
            }
          >
            Default
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.success("Payment received", {
                description: "$49.00 was charged to your card ending in 4242.",
              })
            }
          >
            Success
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.error("Upload failed", {
                description: "The file exceeds the 10MB size limit.",
              })
            }
          >
            Error
          </Button>
        </div>
      </ShowcaseSection>

      {/* With Action */}
      <ShowcaseSection
        title="With Action"
        description="Include an action button to let users respond inline."
      >
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast("Message archived", {
                action: {
                  label: "Undo",
                  onClick: () => toast.success("Undo successful"),
                },
              })
            }
          >
            With Undo
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.error("File deleted", {
                description: "This action cannot be undone.",
                action: {
                  label: "Restore",
                  onClick: () => toast.success("File restored"),
                },
              })
            }
          >
            Error with Action
          </Button>
        </div>
      </ShowcaseSection>

      {/* With Cancel */}
      <ShowcaseSection
        title="With Cancel"
        description="Add a cancel button to dismiss the toast with a callback."
      >
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast("Deploy to production?", {
                description: "This will push changes to all users.",
                action: {
                  label: "Deploy",
                  onClick: () => toast.success("Deployed successfully"),
                },
                cancel: {
                  label: "Cancel",
                  onClick: () => {},
                },
              })
            }
          >
            Action + Cancel
          </Button>
        </div>
      </ShowcaseSection>

      {/* Promise */}
      <ShowcaseSection
        title="Promise"
        description="Track async operations with automatic loading, success, and error states."
      >
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(
                new Promise((resolve) => setTimeout(resolve, 2000)),
                {
                  loading: "Saving changes...",
                  success: "Changes saved!",
                  error: "Failed to save changes.",
                }
              )
            }
          >
            Promise (success)
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(
                new Promise((_, reject) => setTimeout(reject, 2000)),
                {
                  loading: "Deleting record...",
                  success: "Record deleted.",
                  error: "Could not delete record.",
                }
              )
            }
          >
            Promise (error)
          </Button>
        </div>
      </ShowcaseSection>

      {/* Loading */}
      <ShowcaseSection
        title="Loading"
        description="Show a persistent loading toast and dismiss it manually."
      >
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() => {
              const id = toast.loading("Uploading file...")
              setTimeout(() => {
                toast.success("Upload complete!", { id })
              }, 2500)
            }}
          >
            Loading → Success
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              const id = toast.loading("Processing...")
              setTimeout(() => {
                toast.error("Processing failed.", { id })
              }, 2500)
            }}
          >
            Loading → Error
          </Button>
        </div>
      </ShowcaseSection>

      {/* Position */}
      <ShowcaseSection
        title="Position"
        description="Control where the toast appears on screen."
      >
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => toast("Event has been created", { position: "top-left" })}>
            Top Left
          </Button>
          <Button variant="outline" onClick={() => toast("Event has been created", { position: "top-center" })}>
            Top Center
          </Button>
          <Button variant="outline" onClick={() => toast("Event has been created", { position: "top-right" })}>
            Top Right
          </Button>
          <Button variant="outline" onClick={() => toast("Event has been created", { position: "bottom-left" })}>
            Bottom Left
          </Button>
          <Button variant="outline" onClick={() => toast("Event has been created", { position: "bottom-center" })}>
            Bottom Center
          </Button>
          <Button variant="outline" onClick={() => toast("Event has been created", { position: "bottom-right" })}>
            Bottom Right
          </Button>
        </div>
      </ShowcaseSection>

      {/* Duration */}
      <ShowcaseSection
        title="Duration"
        description="Control how long a toast stays visible."
      >
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast("Quick toast", { duration: 1500 })
            }
          >
            1.5s
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Default duration toast")
            }
          >
            Default (4s)
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("Persistent toast", { duration: Infinity })
            }
          >
            Persistent
          </Button>
        </div>
      </ShowcaseSection>
    </div>
  )
}
