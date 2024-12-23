import { getPostBySlug, getPostsList } from '@/src/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from '../../ui/mdx-components'

export async function generateStaticParams() {
  const posts = await getPostsList()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
export default async function Post(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const { content, metadata } = await getPostBySlug(params.slug)

  return (
    <main className="prose mx-auto">
      <h1>{metadata.title}</h1>
      <MDXRemote source={content} components={mdxComponents} />
    </main>
  )
}
