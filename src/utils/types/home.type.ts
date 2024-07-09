export interface HomeProps {
  object: {
    slug: string
    title: string
    metadata: {
      banner: {
        url: string
      }
      heading: string
      subheading: string
      cta_button: {
        twitter_url: string
        instagram_url: string
        tiktok_url: string
        facebook_url: string
      }
      about: {
        description: string
        banner: {
          url: string
        }
      }
      services: ServiceProps[]
      contact: {
        email: string
        phone: string
        address: string
      }
    }
  }
}

interface ServiceProps {
  image: {
    url: string
  }
  title: string
  description: string
}
