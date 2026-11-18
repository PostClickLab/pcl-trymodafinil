import { useId, useState, type ReactNode } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '../lib/cn'

export type AccordionItem = { title: string; content: ReactNode }

export function Accordion({
  items,
  defaultOpen = 0,
  className,
  variant = 'card',
}: {
  items: AccordionItem[]
  defaultOpen?: number | null
  className?: string
  variant?: 'card' | 'plain'
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  const uid = useId()

  return (
    <div className={cn(variant === 'card' ? 'space-y-3' : 'divide-y divide-navy/10 border-y border-navy/10', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${uid}-panel-${i}`
        return (
          <div
            key={item.title}
            className={cn(
              variant === 'card' &&
                'rounded-2xl border bg-white transition-shadow duration-300',
              variant === 'card' && (isOpen ? 'border-navy/10 shadow-card' : 'border-navy/[0.07]'),
            )}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : i)}
              className={cn(
                'flex w-full items-center justify-between gap-6 text-left font-semibold text-navy',
                variant === 'card' ? 'px-6 py-5 text-base sm:text-[17px]' : 'py-5 text-base',
              )}
            >
              {item.title}
              <span
                className={cn(
                  'grid size-8 shrink-0 place-items-center rounded-full transition-all duration-300',
                  isOpen ? 'rotate-45 bg-navy text-white' : 'bg-mist text-navy',
                )}
              >
                <Plus className="size-4" />
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <div className={cn('text-[15px] leading-relaxed text-muted', variant === 'card' ? 'px-6 pb-6' : 'pb-5')}>
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
