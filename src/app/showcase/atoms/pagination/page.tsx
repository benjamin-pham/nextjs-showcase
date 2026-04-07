"use client"

import * as React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/atoms/pagination"
import { ShowcaseSection } from "@/app/showcase/showcase-section"
import { Field, FieldLabel } from "@/components/atoms/field"

export default function PaginationShowcasePage() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Pagination</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Pagination with page navigation, next and previous links.
        </p>
      </div>

      {/* Default */}
      <ShowcaseSection
        title="Default"
        description="Standard pagination with previous, page numbers, ellipsis, and next buttons."
        childrenClassName="w-full"
      >
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ShowcaseSection>

      {/* Simple */}
      <ShowcaseSection
        title="Simple"
        description="A simple pagination with only page numbers, without previous/next buttons or ellipsis."
        childrenClassName="w-full"
      >
        <Pagination>
          <PaginationContent>
            {[1, 2, 3, 4, 5].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink href="#" isActive={page === 3}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </ShowcaseSection>

      {/* Icons Only */}
      <ShowcaseSection
        title="Icons Only"
        description="Use just the previous and next buttons without page numbers. Useful for data tables with a rows per page selector."
        childrenClassName="w-full"
      >
        <div className="flex flex-col items-center gap-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </ShowcaseSection>

      {/* With Ellipsis */}
      <ShowcaseSection
        title="With Ellipsis"
        description="Pagination with ellipsis indicators for large page ranges."
        childrenClassName="w-full"
      >
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                5
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">6</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ShowcaseSection>

    </div>
  )
}
