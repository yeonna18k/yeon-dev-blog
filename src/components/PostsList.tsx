import Image from 'next/image'
import Link from 'next/link'
import { PostsListProps } from '../app/page'

export default async function PostsList({
  postsList,
}: {
  postsList: PostsListProps[]
}) {
  return (
    <div>
      {postsList.map((post) => {
        return (
          <Link
            href={`/posts/${post.slug}`}
            key={post.slug}
            className="block h-[200px] py-6 border-b border-b-gray-200"
          >
            <div className="flex justify-between">
              <div className="">
                <h2>{post.metadata.title}</h2>
                <div>{post.metadata.date}</div>
                <div>{post.metadata.description}</div>
              </div>
              {post.hasThumbnail ? (
                <Image
                  src={`/images/posts/${post.slug}/thumbnail.png`}
                  alt={post.slug || `base-img`}
                  width={200}
                  height={150}
                />
              ) : (
                <>{}</>
              )}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
