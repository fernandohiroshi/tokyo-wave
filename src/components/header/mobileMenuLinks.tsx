import Link from 'next/link'
import { FaLayerGroup } from 'react-icons/fa'
import { IoMailOutline } from 'react-icons/io5'
import { MdWork } from 'react-icons/md'
import { RiWomenLine } from 'react-icons/ri'

import { ThemeToggleMobile } from '../theme-config/ThemeToggleMobile'

const navLinks = [
  { href: '/#about', label: 'About', icon: FaLayerGroup },
  { href: '/#models', label: 'Models', icon: RiWomenLine },
  { href: '/#services', label: 'Services', icon: MdWork },
  { href: '/#contact', label: 'Contact', icon: IoMailOutline },
]

export function MobileMenuLinks() {
  return (
    <nav className="absolute -right-2 -top-2 flex w-[152px] flex-col items-start justify-center rounded-lg bg-neutral-900/90 pt-14 text-sm font-medium tracking-wider text-white shadow-2xl backdrop-blur-xl dark:bg-neutral-200/90 dark:text-black">
      {navLinks.map((link, index) => (
        <Link
          key={link.label}
          href={link.href}
          className={`flex w-full items-center justify-between p-4 duration-300 ease-in-out hover:bg-neutral-700 hover:px-7 dark:hover:bg-neutral-50 ${index === 0 ? 'rounded-t-lg' : ''}`}
        >
          <link.icon size={16} />
          {link.label}
        </Link>
      ))}
      <ThemeToggleMobile />
    </nav>
  )
}
