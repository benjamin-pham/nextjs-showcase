"use client"

import * as React from "react"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/atoms/resizable"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function ResizableShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Resizable</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Accessible resizable panel groups and layouts with keyboard support.
        </p>
      </div>

      {/* Basic Layout */}
      <ShowcaseSection
        title="Basic Layout"
        description="A simple horizontal resizable panel group."
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6 bg-muted/40 font-medium">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-6 bg-muted/40 font-medium">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ShowcaseSection>

      {/* Vertical Layout */}
      <ShowcaseSection
        title="Vertical Layout"
        description='Use orientation="vertical" for vertical resizing.'
      >
        <ResizablePanelGroup
          orientation="vertical"
          className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6 bg-muted/40">
              <span className="font-semibold">Top</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6 bg-muted/40">
              <span className="font-semibold">Bottom</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ShowcaseSection>

      {/* With Handle */}
      <ShowcaseSection
        title="With Handle"
        description="Use the withHandle prop on ResizableHandle to show a visible handle."
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full items-center justify-center p-6 bg-muted/40">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-6 bg-muted/40">
              <span className="font-semibold">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ShowcaseSection>

      {/* Complex Layout */}
      <ShowcaseSection
        title="Complex Layout"
        description="A more complex dashboard layout using nested panel groups."
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="max-w-md rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={20}>
            <div className="flex h-[200px] items-center justify-center p-6 bg-muted/40">
              <span className="font-semibold">Sidebar</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80}>
            <ResizablePanelGroup orientation="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6 bg-muted/40">
                  <span className="font-semibold">Header</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6 bg-muted/40">
                  <span className="font-semibold">Content</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ShowcaseSection>
    </div>
  )
}
