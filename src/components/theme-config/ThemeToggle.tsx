'use client'

import { useTheme } from 'next-themes'
import { TbMoon, TbSunFilled } from 'react-icons/tb'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className="relative inline-flex rounded-lg bg-transparent text-black dark:text-white"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <TbSunFilled size="24" className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <TbMoon size="24" className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  )
}
