import { getAllPostSlugs, getPostBySlug } from '@/app/lib/mdx'
import { components } from '@/src/app/ui/components'
import { MDXRemote } from 'next-mdx-remote/rsc'

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { content, metadata } = await getPostBySlug(params.slug)

  return (
    <main className="prose mx-auto">
      <h1>{metadata.title}</h1>
      <MDXRemote source={content} components={components()} />
    </main>
  )
}
