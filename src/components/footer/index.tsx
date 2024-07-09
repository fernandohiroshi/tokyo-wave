import { HomeProps } from '@/utils/types/home.type'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import animation from '../../../public/animation.gif'

export function Footer({ object }: HomeProps) {
  return (
    <footer className="mt-16 md:mt-16 md:block lg:mt-32">
      <h2
        className="flex items-center justify-start gap-4 text-3xl uppercase text-amber-600 md:animate-none md:justify-around md:gap-0 md:text-6xl md:font-light lg:justify-between lg:text-8xl"
        id="contact"
      >
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
      </h2>
      <div className="flex flex-col items-center justify-between gap-8 py-6 md:flex-row md:gap-0 lg:justify-between">
        {/* 3 */}

        <div className="text-md flex w-full flex-col items-start justify-center gap-2 md:w-auto md:items-start md:text-lg lg:text-xl">
          <p className="text-xl">Tokyo Wave</p>
          <Link href="/#top" className="cursor-pointer opacity-70 hover:text-amber-600">
            {object.metadata.contact.email}
          </Link>
          <Link href="/#top" className="cursor-pointer opacity-70 hover:text-amber-600">
            {object.metadata.contact.phone}
          </Link>
          <Link href="/#top" className="cursor-pointer opacity-70 hover:text-amber-600">
            {object.metadata.contact.address}
          </Link>
        </div>
        {/* 2 */}

        <div className="flex gap-6 md:flex-col">
          <a
            className="opacity-70 duration-300 ease-in-out hover:text-amber-600"
            href={object.metadata.cta_button.twitter_url}
            target="_blank"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            className="opacity-70 duration-300 ease-in-out hover:text-amber-600"
            href={object.metadata.cta_button.instagram_url}
            target="_blank"
          >
            <FaInstagram size={24} />
          </a>
          <a
            className="opacity-70 duration-300 ease-in-out hover:text-amber-600"
            href={object.metadata.cta_button.tiktok_url}
            target="_blank"
          >
            <FaTiktok size={24} />
          </a>
          <a
            className="opacity-70 duration-300 ease-in-out hover:text-amber-600"
            href={object.metadata.cta_button.facebook_url}
            target="_blank"
          >
            <FaFacebook size={24} />
          </a>
        </div>
        {/* 1 */}
        <Image
          src={animation}
          alt="Animation"
          priority={true}
          quality={100}
          unoptimized
          width={400}
          height={400}
          className="hidden animate-pulse rounded-full md:block md:w-[240px] lg:w-[360px]"
        />
      </div>
    </footer>
  )
}
