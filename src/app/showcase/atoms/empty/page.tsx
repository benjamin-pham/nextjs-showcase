"use client"
import {
  FileIcon,
  InboxIcon,
  SearchIcon,
  FolderOpenIcon,
  BellOffIcon,
  PackageIcon,
  PlusIcon,
  UploadIcon,
  RefreshCcwIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/atoms/avatar"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/atoms/input-group"
import { Kbd } from "@/components/atoms/kbd"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/atoms/empty"
import { Button } from "@/components/atoms/button"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function EmptyShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Empty</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Displays an empty state with optional media, title, description, and actions.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="Minimal empty state with title and description."
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyTitle>No items found</EmptyTitle>
            <EmptyDescription>There are no items to display yet.</EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ShowcaseSection>

      {/* With icon variant */}
      <ShowcaseSection
        title="Icon Variant"
        description='Use variant="icon" on EmptyMedia to display an icon in a muted rounded background.'
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <InboxIcon />
            </EmptyMedia>
            <EmptyTitle>Your inbox is empty</EmptyTitle>
            <EmptyDescription>
              When you receive messages, they will appear here.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ShowcaseSection>

      {/* Default media variant (illustration / image) */}
      <ShowcaseSection
        title="Default Media Variant"
        description='Use variant="default" (or omit) on EmptyMedia to render an illustration or larger graphic.'
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.43 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.34 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                <path d="m15 5 5 5" />
                <path d="m20 5-5 5" />
              </svg>
            </EmptyMedia>
            <EmptyTitle>No contacts yet</EmptyTitle>
            <EmptyDescription>
              Add your first contact to get started with your address book.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ShowcaseSection>

      {/* With action */}
      <ShowcaseSection
        title="With Action"
        description="Combine with EmptyContent to render action buttons below the header."
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FolderOpenIcon />
            </EmptyMedia>
            <EmptyTitle>No files uploaded</EmptyTitle>
            <EmptyDescription>
              Upload your first file to start organizing your documents.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>
              <UploadIcon />
              Upload File
            </Button>
          </EmptyContent>
        </Empty>
      </ShowcaseSection>

      {/* With multiple actions */}
      <ShowcaseSection
        title="With Multiple Actions"
        description="Use EmptyContent to stack or group several call-to-action buttons."
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <PackageIcon />
            </EmptyMedia>
            <EmptyTitle>No projects yet</EmptyTitle>
            <EmptyDescription>
              Create a new project or import an existing one to get started.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <div className="flex gap-2">
              <Button>
                <PlusIcon />
                New Project
              </Button>
              <Button variant="outline">Import</Button>
            </div>
          </EmptyContent>
        </Empty>
      </ShowcaseSection>

      {/* Real-world examples */}
      <ShowcaseSection
        title="Search Results"
        description="Empty state for when a search returns no matches."
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <SearchIcon />
            </EmptyMedia>
            <EmptyTitle>No results for &quot;design tokens&quot;</EmptyTitle>
            <EmptyDescription>
              Try adjusting your search terms or browse all available items.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline">Clear Search</Button>
          </EmptyContent>
        </Empty>
      </ShowcaseSection>

      <ShowcaseSection
        title="Notifications"
        description="Empty state for a notifications panel."
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <BellOffIcon />
            </EmptyMedia>
            <EmptyTitle>All caught up</EmptyTitle>
            <EmptyDescription>
              You have no new notifications. Check back later.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </ShowcaseSection>

      <ShowcaseSection
        title="Empty Folder"
        description="Empty state for a file manager or document list."
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <FileIcon />
            </EmptyMedia>
            <EmptyTitle>This folder is empty</EmptyTitle>
            <EmptyDescription>
              Drag and drop files here, or click the button below to upload.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline">
              <UploadIcon />
              Upload Files
            </Button>
          </EmptyContent>
        </Empty>
      </ShowcaseSection>

      {/* Avatar */}
      <ShowcaseSection
        title="Avatar"
        description="Use EmptyMedia with variant default to display an avatar in the empty state."
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="default">
              <Avatar className="size-12">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  className="grayscale"
                />
                <AvatarFallback>LR</AvatarFallback>
              </Avatar>
            </EmptyMedia>
            <EmptyTitle>User Offline</EmptyTitle>
            <EmptyDescription>
              This user is currently offline. You can leave a message to notify them
              or try again later.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">Leave Message</Button>
          </EmptyContent>
        </Empty>
      </ShowcaseSection>

      {/* Avatar Group */}
      <ShowcaseSection
        title="Avatar Group"
        description="Use EmptyMedia with an avatar group to represent team or user presence."
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia>
              <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
              </div>
            </EmptyMedia>
            <EmptyTitle>No Team Members</EmptyTitle>
            <EmptyDescription>
              Invite your team to collaborate on this project.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button size="sm">
              <PlusIcon />
              Invite Members
            </Button>
          </EmptyContent>
        </Empty>
      </ShowcaseSection>

      {/* Input Group */}
      <ShowcaseSection
        title="Input Group"
        description="Embed an input inside EmptyContent for search or lookup empty states."
        childrenClassName="max-w-md"
      >
        <Empty>
          <EmptyHeader>
            <EmptyTitle>404 - Not Found</EmptyTitle>
            <EmptyDescription>
              The page you&apos;re looking for doesn&apos;t exist. Try searching for
              what you need below.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <InputGroup className="sm:w-3/4">
              <InputGroupInput placeholder="Try searching for pages..." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Kbd>/</Kbd>
              </InputGroupAddon>
            </InputGroup>
            <EmptyDescription>
              Need help? <a href="#">Contact support</a>
            </EmptyDescription>
          </EmptyContent>
        </Empty>
      </ShowcaseSection>

      {/* Background */}
      <ShowcaseSection
        title="Background"
        description="Apply a background color via className to give the empty state a muted fill."
        childrenClassName="max-w-md"
      >
        <Empty className="bg-muted/30">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <BellOffIcon />
            </EmptyMedia>
            <EmptyTitle>No Notifications</EmptyTitle>
            <EmptyDescription className="max-w-xs text-pretty">
              You&apos;re all caught up. New notifications will appear here.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline">
              <RefreshCcwIcon />
              Refresh
            </Button>
          </EmptyContent>
        </Empty>
      </ShowcaseSection>
    </div>
  )
}
