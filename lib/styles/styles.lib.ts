import { ClassValue, clsx } from 'clsx'
import t from 'cntl'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const handleStyledTags = (text: string) => {
  let newTextWithLinks = ''
  newTextWithLinks = text.replace(/(^|\s)([#@][a-z\d-]+)/gi, (tag) => {
    const account = tag.trim().substring(1)
    return `<a href="/${account}" class="text-primary-purple text-sm md:text-2xl md:font-normal text-start">${tag}</a>`
  })
  return newTextWithLinks
}

export { t }
