import { getProfile } from '@/utils/actions/get-data'
import { ProfileProps } from '@/utils/types/profile.type'
import Image from 'next/image'
import Link from 'next/link'

export default async function ModelProfile({ params: { slug } }: { params: { slug: string } }) {
  const { objects }: ProfileProps = await getProfile(slug)

  return (
    <main className="mx-auto w-full max-w-[1040px] scroll-mt-12 px-6 py-8 md:py-16 lg:pt-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h1 className="mb-4 text-3xl md:hidden">{objects[0].metadata.profile.name}</h1>

          <div className="overflow-hidden rounded-xl shadow-xl shadow-black/40">
            <Image
              src={objects[0].metadata.profile.banner.url}
              alt={objects[0].title}
              title={objects[0].title}
              priority={true}
              quality={100}
              width={300}
              height={300}
              className="h-[480px] w-full rounded-xl object-cover duration-700 ease-in-out hover:scale-125 lg:h-[500px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-evenly lg:p-8">
          <h1 className="mb-4 hidden text-3xl md:block md:text-5xl">{objects[0].metadata.profile.name}</h1>
          <div>
            <h2 className="mb-4 text-2xl">Profile :</h2>
            <div className="mb-4 flex flex-wrap gap-4 opacity-70">
              <p>Height: {objects[0].metadata.info.height}</p>
              <p>Bust: {objects[0].metadata.info.bust}</p>
              <p>Waist: {objects[0].metadata.info.waist}</p>
              <p>Hips: {objects[0].metadata.info.hips}</p>
              <p>Shoes: {objects[0].metadata.info.shoes}</p>
              <p>Hair: {objects[0].metadata.info.hair}</p>
              <p>Eyes: {objects[0].metadata.info.eyes}</p>
              <p>Ethnicity: {objects[0].metadata.info.ethnicity}</p>
            </div>
          </div>

          <Link
            href="/"
            className="mt-4 flex w-32 items-center justify-center rounded-lg bg-neutral-200 px-3 py-2 text-sm font-medium text-black shadow-md shadow-black/80 duration-300 ease-in-out hover:bg-neutral-300 hover:shadow-black/40 dark:hover:bg-amber-200"
          >
            Book Model
          </Link>
        </div>
      </div>

      <div className="mt-8 grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2">
        {objects[0].metadata.images.map((m) => (
          <div key={m.model_img.url} className="overflow-hidden rounded-xl shadow-xl shadow-black/40">
            <Image
              src={m.model_img.url}
              alt={objects[0].title}
              title={objects[0].title}
              priority={true}
              quality={100}
              width={300}
              height={300}
              className="h-[480px] w-full rounded-xl object-cover object-top duration-700 ease-in-out hover:scale-125 md:h-[600px]"
            />
          </div>
        ))}
      </div>
    </main>
  )
}
