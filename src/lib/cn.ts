import { twMerge } from 'tailwind-merge'

/** Joins class names and resolves Tailwind conflicts (later classes win). */
export function cn(...classes: Array<string | false | null | undefined>) {
  return twMerge(classes.filter(Boolean).join(' '))
}
