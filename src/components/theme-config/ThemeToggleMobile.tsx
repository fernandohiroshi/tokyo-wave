'use client'

import classNames from 'classnames'
import { useTheme } from 'next-themes'
import { TbMoon, TbSunFilled } from 'react-icons/tb'

export function ThemeToggleMobile() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      className={classNames(
        'relative flex w-full items-center justify-between rounded-b-lg bg-transparent p-4 text-white hover:bg-neutral-700 dark:text-black dark:hover:bg-neutral-100',
        'duration-200 ease-in-out hover:px-7',
      )}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <TbMoon size="16" className="rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <TbSunFilled size="16" className="absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
    </button>
  )
}
