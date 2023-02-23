import { Transition } from '@headlessui/react'

export function HomeWizardPageTransition({ children, id }: React.ComponentProps<'div'>) {
  return (
    <Transition
      as="div"
      className="flex flex-col"
      enter="transition-all duration-300"
      enterFrom="transform opacity-10 translate-x-[-400px]"
      enterTo="transform opacity-100 translate-x-0"
      leave="transition-all duration-300"
      leaveFrom="transform opacity-100 translate-x-0"
      leaveTo="transform opacity-10 translate-x-[400px]"
      show
      appear
      id={id}
    >
      {children}
    </Transition>
  )
}
