import { getDataHome, getModels } from '@/utils/actions/get-data'
import { HomeProps } from '@/utils/types/home.type'
import { ModelsProps } from '@/utils/types/models.type'

import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Models } from '@/components/models'
import { Services } from '@/components/services'
import { MobileServices } from '@/components/services/mobile'

export default async function Home() {
  const { object }: HomeProps = await getDataHome()
  const model: ModelsProps = await getModels()

  return (
    <main>
      <Hero object={object} />

      <div className="mx-auto w-full max-w-[1040px] px-6 py-8 md:py-16 lg:pt-32">
        <About object={object} />
        <Models model={model} />
        <Services object={object} />
        <MobileServices object={object} />
        <Footer object={object} />
      </div>
      <span className="flex justify-center pb-4 text-center text-xs tracking-widest opacity-80 md:text-sm">
        © 2024 Tokyo Wave. All rights reserved.
      </span>
    </main>
  )
}
