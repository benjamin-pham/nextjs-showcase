"use client"
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/atoms/alert"
import { Button } from "@/components/atoms/button"
import { AlertCircle, Info, Terminal, TriangleAlert } from "lucide-react"
import { toast } from "sonner"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function AlertShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Alert</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Displays a callout for user attention.
        </p>
      </div>

      {/* Default */}
      <ShowcaseSection
        childrenClassName="max-w-xl flex flex-col gap-3"
        title="Default"
        description="Standard alert with an icon, title, and description."
      >
        <Alert>
          <Terminal />
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the CLI.
          </AlertDescription>
        </Alert>
      </ShowcaseSection>

      {/* Destructive */}
      <ShowcaseSection
        childrenClassName="max-w-xl flex flex-col gap-3"
        title="Destructive"
        description='Use variant="destructive" for error or critical states.'
      >
        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </Alert>
      </ShowcaseSection>

      {/* With Action */}
      <ShowcaseSection
        childrenClassName="max-w-xl flex flex-col gap-3"
        title="With Action"
        description="Include AlertAction to render a button in the top-right corner."
      >
        <Alert>
          <Info />
          <AlertTitle>New feature available</AlertTitle>
          <AlertDescription>
            Enable the new dashboard to get access to advanced analytics.
          </AlertDescription>
          <AlertAction >
            <Button variant="outline" size="sm" onClick={() => toast.info('Click!')}>
              Enable
            </Button>
          </AlertAction>
        </Alert>

        <Alert variant="destructive">
          <AlertCircle />
          <AlertTitle>Subscription expired</AlertTitle>
          <AlertDescription>
            Your plan has expired. Renew now to restore access.
          </AlertDescription>
          <AlertAction>
            <Button size="sm" variant="outline" onClick={() => toast.info('Click!')}>
              Renew
            </Button>
          </AlertAction>
        </Alert>
      </ShowcaseSection>

      {/* Custom Colors */}
      <ShowcaseSection
        childrenClassName="max-w-xl flex flex-col gap-3"
        title="Custom Colors"
        description="Apply custom background/text classes for semantic colors like warning."
      >
        <Alert className="bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950 dark:text-amber-200 dark:border-amber-800">
          <TriangleAlert className="text-amber-500" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            This action may affect other users in your workspace.
          </AlertDescription>
        </Alert>

        <Alert className="bg-green-50 text-green-900 border-green-200 dark:bg-green-950 dark:text-green-200 dark:border-green-800">
          <Info className="text-green-500" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription className="text-green-800 dark:text-green-300">
            Your changes have been saved successfully.
          </AlertDescription>
        </Alert>
      </ShowcaseSection>

      {/* No Icon */}
      <ShowcaseSection
        childrenClassName="max-w-xl flex flex-col gap-3"
        title="No Icon"
        description="Omit the icon for a simpler, text-only layout."
      >
        <Alert>
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            This alert does not include an icon. Content spans the full width.
          </AlertDescription>
        </Alert>

        <Alert variant="destructive">
          <AlertTitle>Permission denied</AlertTitle>
          <AlertDescription>
            You do not have permission to perform this action.
          </AlertDescription>
        </Alert>
      </ShowcaseSection>
    </div>
  )
}
