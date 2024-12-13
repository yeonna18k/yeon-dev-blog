import Link from 'next/link'
import { getPostsList } from '../lib/mdx'

export default async function PostsList() {
  const postsList = await getPostsList()
  return (
    <div>
      {postsList.map((post) => {
        return (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.metadata.title}</Link>
          </li>
        )
      })}
    </div>
  )
}
