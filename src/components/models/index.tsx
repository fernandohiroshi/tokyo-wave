import { ModelsProps } from '@/utils/types/models.type'
import Image from 'next/image'
import Link from 'next/link'

interface ModelsListProps {
  model: ModelsProps
}

export function Models({ model }: ModelsListProps) {
  return (
    <div className="mt-8 scroll-mt-24 md:mt-16 lg:mt-32" id="models">
      <h2 className="text-xl md:text-4xl">Featured Models</h2>
      <section className="mt-4 grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {model.objects.map((m) => (
          <Link href={`profile/${m.slug}`} key={m.slug}>
            <div className="group relative">
              <Image
                src={m.metadata.profile.banner.url}
                alt={`Banner of ${m.title}`}
                title={m.title}
                priority={true}
                quality={100}
                width={300}
                height={300}
                className="h-[200px] w-full rounded-2xl object-cover object-top lg:h-[320px]"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-60">
                <span className="text-lg font-semibold text-white">{m.title}</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
