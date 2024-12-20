import PostsList from '../components/PostsList'
import Sort from '../components/Sort'
import { getPostsList } from '../lib/mdx'
import { getFilteredPostsList } from '../utils/filterPosts'

export interface PostsListProps {
  slug: string
  metadata: {
    [key: string]: any
  }
  content: string
  hasThumbnail: boolean
}
;[]

export default async function Home(props: {
  searchParams: Promise<Record<string, string | string[]>>
}) {
  const searchParams = await props.searchParams
  const postsList = await getPostsList()

  const category = searchParams.category || ''
  const sortBy = searchParams.sortBy || 'latest'

  const filteredPostsList = await getFilteredPostsList({
    category,
    sortBy,
    postsList,
  })

  return (
    <section className=" w-full lg:max-w-[768px] lg:mx-auto">
      <h1 className="text-4xl">글 전체</h1>
      <Sort />
      <PostsList postsList={filteredPostsList} />
    </section>
  )
}
