import { HomeProps } from '@/utils/types/home.type'
import Image from 'next/image'

export function Services({ object }: HomeProps) {
  return (
    <section className="mt-8 hidden scroll-mt-24 md:mt-16 md:block lg:mt-32" id="services">
      <h2 className="text-xl md:text-4xl">Our Services</h2>
      <div className="mt-4 grid h-full w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {object.metadata.services.map((service) => (
          <article
            key={service.description}
            className="flex flex-col justify-between gap-2 overflow-hidden rounded-2xl bg-neutral-100 p-6 shadow-xl shadow-black/20 dark:bg-transparent dark:shadow-sm dark:shadow-white/40"
          >
            <div className="h-full w-full overflow-hidden rounded-xl">
              <Image
                src={service.image.url}
                alt="Service Image"
                priority={true}
                quality={100}
                width={300}
                height={300}
                className="h-[350px] w-full rounded-xl object-cover duration-700 ease-in-out hover:scale-125 md:h-[320px]"
              />
            </div>

            <h3 className="text-md font-medium">{service.title}</h3>
            <p className="text-justify text-xs font-medium opacity-70 md:text-sm">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
