import { HomeProps } from '@/utils/types/home.type'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaTwitter as FaXTwitter } from 'react-icons/fa6'

export function Hero({ object }: HomeProps) {
  return (
    <section className="relative h-[320px] w-full text-white lg:h-[480px]">
      <video autoPlay loop muted className="absolute left-0 top-0 h-full w-full object-cover object-top">
        <source src={object.metadata.banner.url} type="video/mp4" />
        Your browser does not support the video element.
      </video>

      <div className="absolute z-40 flex h-full w-full flex-col items-center justify-center gap-1 text-center">
        <h1 className="text-4xl uppercase lg:text-7xl">{object.metadata.heading}</h1>
        <p className="md:text-xl lg:text-2xl">{object.metadata.subheading}</p>
      </div>

      <div className="absolute bottom-0 z-40 flex w-full items-center justify-center gap-8 py-6">
        <a href={object.metadata.cta_button.twitter_url} target="_blank" rel="noopener noreferrer" title="Twitter">
          <FaXTwitter className="size-6 text-white/80 duration-300 ease-in-out hover:scale-125 hover:text-white md:size-8" />
        </a>

        <a href={object.metadata.cta_button.instagram_url} target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram className="size-6 text-white/80 duration-300 ease-in-out hover:scale-125 hover:text-white md:size-8" />
        </a>

        <a href={object.metadata.cta_button.tiktok_url} target="_blank" rel="noopener noreferrer" title="Tiktok">
          <FaTiktok className="size-6 text-white/80 duration-300 ease-in-out hover:scale-125 hover:text-white md:size-8" />
        </a>

        <a href={object.metadata.cta_button.facebook_url} target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaFacebook className="size-6 text-white/80 duration-300 ease-in-out hover:scale-125 hover:text-white md:size-8" />
        </a>
      </div>

      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/90 to-transparent" />
    </section>
  )
}
