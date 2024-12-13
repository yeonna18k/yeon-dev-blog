import { getPostBySlug } from '@/src/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Post({ params }: { params: { slug: string } }) {
  const { content, metadata } = await getPostBySlug(params.slug)

  return (
    <main className="prose mx-auto">
      <h1>{metadata.title}</h1>
      <MDXRemote
        source={content}
        // components={components()}
      />
    </main>
  )
}
