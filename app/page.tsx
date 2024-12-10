import { getAllPostSlugs } from './lib/mdx'

export default function Home() {
  const posts = getAllPostSlugs()
  console.log(posts)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500 bg-blue-200 p-4 rounded-lg">
        글 목록
      </h1>
      {/* {posts.map((post) => {
        <li key={post.params.slug}>
          <Link href={`/posts/${post.params.slug}`}></Link>
        </li>
      })} */}
    </main>
  )
}
