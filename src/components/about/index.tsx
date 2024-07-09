import { HomeProps } from '@/utils/types/home.type'
import Image from 'next/image'
import { BsArrowUpRightCircleFill } from 'react-icons/bs'

export function About({ object }: HomeProps) {
  return (
    <section
      className="flex h-full scroll-mt-24 flex-col items-center justify-between gap-8 md:flex-row md:gap-16 lg:gap-24"
      id="about"
    >
      <aside className="max-w-2xl">
        <h2 className="text-xl md:text-4xl">About Us</h2>
        <p className="mt-2 text-justify text-sm opacity-80 lg:text-lg">{object.metadata.about.description}</p>

        <a
          href="#"
          className="mt-4 flex w-32 items-center justify-between gap-2 rounded-lg bg-neutral-200 px-3 py-2 text-sm font-medium text-black shadow-md shadow-black/80 duration-300 ease-in-out hover:bg-neutral-300 hover:shadow-black/40 dark:hover:bg-amber-200"
        >
          Be a Model <BsArrowUpRightCircleFill size={16} />
        </a>
      </aside>

      <Image
        src={object.metadata.about.banner.url}
        alt="About US"
        title="Tokyo Wave Studio"
        priority={true}
        quality={100}
        width={300}
        height={300}
        className="h-[320px] w-full object-cover md:h-[400px]"
      />
    </section>
  )
}
