"use client"

import * as React from "react"
import { Checkbox } from "@/components/atoms/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function CheckboxShowcasePage() {
  const [checked, setChecked] = React.useState<boolean | "indeterminate">(false)
  const [allItems, setAllItems] = React.useState([
    { id: "recents",   label: "Recents",   checked: true  },
    { id: "home",      label: "Home",      checked: false },
    { id: "apps",      label: "Apps",      checked: true  },
    { id: "desktop",   label: "Desktop",   checked: false },
    { id: "downloads", label: "Downloads", checked: false },
  ])

  const checkedCount = allItems.filter((i) => i.checked).length
  const parentState: boolean | "indeterminate" =
    checkedCount === 0 ? false
    : checkedCount === allItems.length ? true
    : "indeterminate"

  function toggleAll() {
    const next = parentState !== true
    setAllItems((prev) => prev.map((i) => ({ ...i, checked: next })))
  }

  function toggleItem(id: string) {
    setAllItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i))
    )
  }

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Checkbox</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A control that allows the user to toggle between checked and unchecked states.
        </p>
      </div>

      {/* Basic */}
      <ShowcaseSection
        title="Basic"
        description="A standalone checkbox with no label."
      >
        <Checkbox />
      </ShowcaseSection>

      {/* With Label */}
      <ShowcaseSection
        title="With Label"
        description="Pair a checkbox with a <label> element linked via htmlFor."
      >
        <div className="flex items-center gap-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
            Accept terms and conditions
          </label>
        </div>
      </ShowcaseSection>

      {/* Default Checked */}
      <ShowcaseSection
        title="Default Checked"
        description="Use defaultChecked to render the checkbox in a checked state on mount."
      >
        <div className="flex items-center gap-2">
          <Checkbox id="default-checked" defaultChecked />
          <label
            htmlFor="default-checked"
            className="text-sm font-medium leading-none cursor-pointer"
          >
            Newsletter subscription
          </label>
        </div>
      </ShowcaseSection>

      {/* Controlled */}
      <ShowcaseSection
        title="Controlled"
        description="Manage checked state externally via the checked and onCheckedChange props."
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Checkbox
              id="controlled"
              checked={checked === true}
              onCheckedChange={(val) => setChecked(val)}
            />
            <label
              htmlFor="controlled"
              className="text-sm font-medium leading-none cursor-pointer"
            >
              Controlled checkbox
            </label>
          </div>
          <p className="text-xs text-muted-foreground">
            State: <span className="font-mono">{String(checked)}</span>
          </p>
        </div>
      </ShowcaseSection>

      {/* Disabled states */}
      <ShowcaseSection
        title="Disabled"
        description="Pass the disabled prop to prevent interaction. Works in both checked and unchecked states."
      >
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-unchecked" disabled />
            <label
              htmlFor="disabled-unchecked"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Disabled (unchecked)
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="disabled-checked" disabled defaultChecked />
            <label
              htmlFor="disabled-checked"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Disabled (checked)
            </label>
          </div>
        </div>
      </ShowcaseSection>

      {/* Indeterminate — Select All */}
      <ShowcaseSection
        title="Indeterminate — Select All"
        description='When only some items are selected, the parent checkbox shows an indeterminate state (checked="indeterminate").'
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="select-all"
              checked={parentState}
              onCheckedChange={toggleAll}
            />
            <label
              htmlFor="select-all"
              className="text-sm font-semibold leading-none cursor-pointer"
            >
              Select all
            </label>
          </div>
          <div className="ml-6 flex flex-col gap-2">
            {allItems.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <Checkbox
                  id={item.id}
                  checked={item.checked}
                  onCheckedChange={() => toggleItem(item.id)}
                />
                <label
                  htmlFor={item.id}
                  className="text-sm leading-none cursor-pointer"
                >
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </ShowcaseSection>

      {/* With Description */}
      <ShowcaseSection
        title="With Description"
        description="Combine a checkbox with a label and a helper description below it."
      >
        <div className="flex items-start gap-3">
          <Checkbox id="marketing" className="mt-0.5" />
          <div className="flex flex-col gap-1">
            <label
              htmlFor="marketing"
              className="text-sm font-medium leading-none cursor-pointer"
            >
              Marketing emails
            </label>
            <p className="text-sm text-muted-foreground">
              Receive emails about new products, features, and more.
            </p>
          </div>
        </div>
      </ShowcaseSection>

      {/* Checkbox group */}
      <ShowcaseSection
        title="Checkbox Group"
        description="A list of independent checkboxes for multi-select scenarios."
      >
        <div className="flex flex-col gap-3">
          {[
            { id: "comments",   label: "Comments",   desc: "Get notified when someone comments on your post." },
            { id: "candidates", label: "Candidates",  desc: "Get notified when a candidate applies for a job." },
            { id: "offers",     label: "Offers",      desc: "Get notified when a candidate accepts or rejects an offer." },
          ].map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <Checkbox id={item.id} className="mt-0.5" />
              <div className="flex flex-col gap-1">
                <label
                  htmlFor={item.id}
                  className="text-sm font-medium leading-none cursor-pointer"
                >
                  {item.label}
                </label>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseSection>

      {/* Table */}
      <ShowcaseSection
        title="In a Table"
        description="Checkboxes in a table header and rows for row-selection. The header checkbox goes indeterminate when only some rows are selected."
        childrenClassName="w-full max-w-2xl"
      >
        <CheckboxTable />
      </ShowcaseSection>
    </div>
  )
}

const tableData = [
  { id: "1", name: "Sarah Chen",        email: "sarah.chen@example.com",        role: "Admin"  },
  { id: "2", name: "Marcus Rodriguez",  email: "marcus.rodriguez@example.com",  role: "User"   },
  { id: "3", name: "Priya Patel",       email: "priya.patel@example.com",       role: "User"   },
  { id: "4", name: "David Kim",         email: "david.kim@example.com",         role: "Editor" },
]

function CheckboxTable() {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set(["1"]))

  const selectedCount = selectedRows.size
  const headerState: boolean | "indeterminate" =
    selectedCount === 0 ? false
    : selectedCount === tableData.length ? true
    : "indeterminate"

  function handleSelectAll() {
    setSelectedRows(
      headerState === true ? new Set() : new Set(tableData.map((r) => r.id))
    )
  }

  function handleSelectRow(id: string, checked: boolean) {
    const next = new Set(selectedRows)
    checked ? next.add(id) : next.delete(id)
    setSelectedRows(next)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">
            <Checkbox
              checked={headerState}
              onCheckedChange={handleSelectAll}
              aria-label="Select all rows"
            />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row) => (
          <TableRow
            key={row.id}
            data-state={selectedRows.has(row.id) ? "selected" : undefined}
          >
            <TableCell>
              <Checkbox
                checked={selectedRows.has(row.id)}
                onCheckedChange={(checked) => handleSelectRow(row.id, checked === true)}
                aria-label={`Select ${row.name}`}
              />
            </TableCell>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
