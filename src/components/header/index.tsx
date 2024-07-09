import Link from 'next/link'

import { ThemeToggle } from '../theme-config/ThemeToggle'
import { MobileMenu } from './mobileMenu'

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#models', label: 'Models' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-neutral-50/80 px-6 py-4 backdrop-blur-xl dark:bg-neutral-950/40"
      id="top"
    >
      <div className="mx-auto flex max-w-[1024px] items-center justify-between">
        <Link href="/#top">
          <h1 className="text-2xl font-light duration-300 ease-in-out hover:text-amber-600 lg:text-4xl">T.W</h1>
        </Link>

        <nav className="hidden items-center justify-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="duration-300 ease-in-out hover:text-amber-600">
              {link.label}
            </Link>
          ))}

          <ThemeToggle />
        </nav>
        <MobileMenu />
      </div>
    </header>
  )
}
