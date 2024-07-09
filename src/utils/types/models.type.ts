export interface ModelsProps {
  objects: {
    slug: string
    title: string
    metadata: {
      profile: {
        banner: {
          url: string
        }
      }
    }
  }[]
}
