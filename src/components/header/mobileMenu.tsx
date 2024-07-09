'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoIosClose } from 'react-icons/io'

import { MobileMenuLinks } from './mobileMenuLinks'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <div ref={menuRef} className="relative flex w-[40px] flex-col items-center rounded-xl md:hidden">
      <button
        className="z-50 flex w-full items-center justify-center rounded-lg bg-neutral-50/80 font-light tracking-wider text-black shadow-2xl duration-300 ease-in-out hover:bg-neutral-50 dark:bg-neutral-950/80 dark:text-white dark:hover:bg-neutral-950"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!isOpen ? <HiOutlineMenuAlt3 size={28} /> : <IoIosClose size={28} />}
      </button>
      {isOpen && <MobileMenuLinks />}
    </div>
  )
}
