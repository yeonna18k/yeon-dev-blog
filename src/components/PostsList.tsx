import Image from 'next/image'
import Link from 'next/link'
import { getPostsList } from '../lib/mdx'

export default async function PostsList() {
  const postsList = await getPostsList()
  return (
    <div>
      {postsList.map((post) => {
        return (
          <Link
            href={`/posts/${post.slug}`}
            key={post.slug}
            className="block p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div>
              <Image
                src={post.metadata.coverImage}
                alt={post.slug}
                width={24}
                height={24}
              />
              <div>{post.metadata.title}</div>
              <div>{post.metadata.date}</div>
              <div>{post.metadata.description}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
