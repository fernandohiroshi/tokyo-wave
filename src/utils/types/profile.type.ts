export interface ProfileProps {
  objects: ObjectProfile[]
}

interface ObjectProfile {
  slug: string
  title: string
  metadata: {
    profile: {
      banner: {
        url: string
      }
      name: string
    }
    info: {
      height: string
      bust: string
      waist: string
      hips: string
      shoes: string
      hair: string
      eyes: string
      ethnicity: string
    }
    images: {
      model_img: {
        url: string
      }
    }[]
  }
}
