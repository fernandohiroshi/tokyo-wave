import { redirect } from 'next/navigation'

export async function getDataHome() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects/6677ba2b864193998e15e5ef?read_key=${process.env.READ_KEY}&props=slug,title,metadata`,
      { next: { revalidate: 120 } },
    )
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  } catch (err) {
    throw new Error('Failed to fetch data')
  }
}

export async function getModels() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&read_key=${process.env.READ_KEY}&props=slug,title,metadata`,
      { next: { revalidate: 120 } },
    )
    if (!res.ok) {
      throw new Error('Failed to fetch models data')
    }
    return res.json()
  } catch (err) {
    throw new Error('Failed to fetch models data')
  }
}

export async function getProfile(itemSlug: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/objects`

  const queryParams = new URLSearchParams({
    query: JSON.stringify({
      slug: itemSlug,
    }),
    props: 'slug,title,metadata',
    read_key: process.env.READ_KEY as string,
  })

  const url = `${baseUrl}?${queryParams.toString()}`

  try {
    const res = await fetch(url, { next: { revalidate: 120 } })

    if (!res.ok) {
      throw new Error('Failed get item by slug')
    }
    return res.json()
  } catch (err) {
    redirect('/')
  }
}
