"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { Calendar, CalendarDayButton } from "@/components/atoms/calendar"
import { Button } from "@/components/atoms/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/popover"
import { addDays } from "date-fns"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/atoms/card"
import { Field, FieldGroup, FieldLabel } from "@/components/atoms/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/atoms/input-group"
import { Clock2Icon } from "lucide-react"
import { ShowcaseSection } from "@/app/showcase/showcase-section"

export default function CalendarShowcasePage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  })
  const [multiDates, setMultiDates] = React.useState<Date[] | undefined>([
    new Date(),
  ])
  const [pickerDate, setPickerDate] = React.useState<Date | undefined>()
  const [open, setOpen] = React.useState(false)
  const [presetDate, setPresetDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 12)
  )
  const [presetMonth, setPresetMonth] = React.useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )
  const [dateTimeDate, setDateTimeDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  )
  const [bookedDate, setBookedDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 3)
  )
  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 1, 12 + i)
  )
  const [customRange, setCustomRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 11, 8),
    to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
  })

  return (
    <div className="flex flex-col gap-12 py-4">
      <div>
        <h1 className="text-2xl font-bold">Calendar</h1>
        <p className="text-muted-foreground text-sm mt-1">
          A date field component that allows users to enter and edit date.
        </p>
      </div>

      {/* Default */}
      <ShowcaseSection
        title="Default"
        description="Single date selection with outside days shown."
        childrenClassName=""
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
        />
      </ShowcaseSection>

      {/* Range Selection */}
      <ShowcaseSection
        title="Range Selection"
        description='mode="range" — select a start and end date.'
        childrenClassName=""
      >
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
        />
      </ShowcaseSection>

      {/* Multiple Selection */}
      <ShowcaseSection
        title="Multiple Selection"
        description='mode="multiple" — select several individual dates.'
        childrenClassName=""
      >
        <Calendar
          mode="multiple"
          selected={multiDates}
          onSelect={setMultiDates}
        />
      </ShowcaseSection>

      {/* Dropdown Caption Layout */}
      <ShowcaseSection
        title="Dropdown Navigation"
        description='captionLayout="dropdown" — navigate month and year via dropdowns.'
        childrenClassName=""
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          captionLayout="dropdown"
          startMonth={new Date(2000, 0)}
          endMonth={new Date(2030, 11)}
        />
      </ShowcaseSection>

      {/* Week Numbers */}
      <ShowcaseSection
        title="Week Numbers"
        description="showWeekNumber — display the ISO week number for each row."
        childrenClassName=""
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          showWeekNumber
        />
      </ShowcaseSection>

      {/* No Outside Days */}
      <ShowcaseSection
        title="No Outside Days"
        description="showOutsideDays={false} — hide days from adjacent months."
        childrenClassName=""
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          showOutsideDays={false}
        />
      </ShowcaseSection>

      {/* With Presets */}
      <ShowcaseSection
        title="With Presets"
        description="Quick-select buttons to jump to common relative dates."
      >
        <Card className="w-fit max-w-75" size="sm">
          <CardContent>
            <Calendar
              mode="single"
              selected={presetDate}
              onSelect={setPresetDate}
              month={presetMonth}
              onMonthChange={setPresetMonth}
              fixedWeeks
              className="p-0 [--cell-size:--spacing(9.5)]"
            />
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2 border-t">
            {[
              { label: "Today", value: 0 },
              { label: "Tomorrow", value: 1 },
              { label: "In 3 days", value: 3 },
              { label: "In a week", value: 7 },
              { label: "In 2 weeks", value: 14 },
            ].map((preset) => (
              <Button
                key={preset.value}
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => {
                  const newDate = addDays(new Date(), preset.value)
                  setPresetDate(newDate)
                  setPresetMonth(
                    new Date(newDate.getFullYear(), newDate.getMonth(), 1)
                  )
                }}
              >
                {preset.label}
              </Button>
            ))}
          </CardFooter>
        </Card>
      </ShowcaseSection>

      {/* Date and Time Picker */}
      <ShowcaseSection
        title="Date and Time Picker"
        description="Combine a Calendar with time inputs to select both date and time."
      >
        <Card size="sm" className="w-fit">
          <CardContent>
            <Calendar
              mode="single"
              selected={dateTimeDate}
              onSelect={setDateTimeDate}
              className="p-0"
            />
          </CardContent>
          <CardFooter className="border-t bg-card">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="time-from">Start Time</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="time-from"
                    type="time"
                    step="1"
                    defaultValue="10:30:00"
                    className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  <InputGroupAddon>
                    <Clock2Icon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <Field>
                <FieldLabel htmlFor="time-to">End Time</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="time-to"
                    type="time"
                    step="1"
                    defaultValue="12:30:00"
                    className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                  <InputGroupAddon>
                    <Clock2Icon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </FieldGroup>
          </CardFooter>
        </Card>
      </ShowcaseSection>

      {/* Booked Dates */}
      <ShowcaseSection
        title="Booked Dates"
        description="Use modifiers to visually mark unavailable dates with a strikethrough."
        childrenClassName=""
      >
        <Card className="w-fit p-0">
          <CardContent className="p-0">
            <Calendar
              mode="single"
              defaultMonth={bookedDate}
              selected={bookedDate}
              onSelect={setBookedDate}
              disabled={bookedDates}
              modifiers={{ booked: bookedDates }}
              modifiersClassNames={{
                booked: "[&>button]:line-through opacity-100",
              }}
            />
          </CardContent>
        </Card>
      </ShowcaseSection>

      {/* Custom Cell Size */}
      <ShowcaseSection
        title="Custom Cell Size"
        description="Override --cell-size to resize cells, and use a custom DayButton to render extra content."
        childrenClassName=""
      >
        <Card className="w-fit p-0">
          <CardContent className="p-0">
            <Calendar
              mode="range"
              defaultMonth={customRange?.from}
              selected={customRange}
              onSelect={setCustomRange}
              numberOfMonths={1}
              captionLayout="dropdown"
              className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
              formatters={{
                formatMonthDropdown: (date) =>
                  date.toLocaleString("default", { month: "long" }),
              }}
              components={{
                DayButton: ({ children, modifiers, day, ...props }) => {
                  const isWeekend =
                    day.date.getDay() === 0 || day.date.getDay() === 6
                  return (
                    <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                      {children}
                      {!modifiers.outside && (
                        <span>{isWeekend ? "$120" : "$100"}</span>
                      )}
                    </CalendarDayButton>
                  )
                },
              }}
            />
          </CardContent>
        </Card>
      </ShowcaseSection>

      {/* Date Picker (Popover) */}
      <ShowcaseSection
        title="Date Picker"
        description="Combine Calendar with a Popover and Button for a compact date input."
      >
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-60 justify-start text-left font-normal",
                !pickerDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 size-4" />
              {pickerDate ? format(pickerDate, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={pickerDate}
              onSelect={(d) => {
                setPickerDate(d)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </ShowcaseSection>
    </div>
  )
}
