import { getPostBySlug, getPostsList } from '@/src/lib/mdx'
import dayjs from 'dayjs'
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

  const isoDate = metadata.date
  const formattedDate = dayjs(isoDate).format('YYYY년 MM월 DD일')
  return (
    <main className="prose mx-auto">
      <h1 className="text-4xl leading-10">{metadata.title}</h1>
      <span>{formattedDate}</span>
      <div className="my-8">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </main>
  )
}
