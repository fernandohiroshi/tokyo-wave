'use client'

import Link from 'next/link'
import { TbFaceIdError } from 'react-icons/tb'

export default function Error() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6 px-4 md:flex-row">
      <TbFaceIdError size={160} />
      <div className="flex w-auto flex-col gap-8">
        <h1 className="text-center text-4xl">This page does not exist</h1>
        <Link
          href="/"
          className="rounded-2xl bg-pink-500 p-4 text-center text-sm duration-300 ease-in-out hover:bg-pink-400"
        >
          Click here to return to the home
        </Link>
      </div>
    </div>
  )
}
