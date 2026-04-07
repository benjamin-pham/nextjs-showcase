export function ShowcaseSection({
  title,
  description,
  children,
  childrenClassName = "max-w-xl",
}: {
  title: string
  description?: string
  children: React.ReactNode
  childrenClassName?: string
}) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className={childrenClassName}>{children}</div>
    </div>
  )
}
