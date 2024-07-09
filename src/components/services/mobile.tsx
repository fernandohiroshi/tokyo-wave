'use client'

import { HomeProps } from '@/utils/types/home.type'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export function MobileServices({ object }: HomeProps) {
  return (
    <section className="mt-8 scroll-mt-24 md:mt-16 md:hidden lg:mt-32" id="services">
      <h2 className="text-xl md:text-4xl">Our Services</h2>
      <Carousel
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
        autoPlay={true}
        transitionTime={500}
      >
        {object.metadata.services.map((service) => (
          <div
            key={service.description}
            className="flex h-full w-full flex-col items-start gap-2 bg-gradient-to-t from-neutral-950 to-transparent px-4 pb-16 pt-8 text-white dark:from-neutral-900 dark:to-transparent dark:text-white"
          >
            <Image
              src={service.image.url}
              alt="Service Image"
              priority={true}
              quality={100}
              width={320}
              height={320}
              className="h-[240px] w-full rounded-xl object-cover"
            />

            <h3 className="text-md font-medium">{service.title}</h3>
            <p className="text-justify text-xs">{service.description}</p>
          </div>
        ))}
      </Carousel>
    </section>
  )
}
