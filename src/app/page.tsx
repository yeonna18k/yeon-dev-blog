import PostsList from '../components/PostsList'
import Sort from '../components/Sort'
import { categoryMap } from '../lib/categoryOptions'
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

type Category = keyof typeof categoryMap

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
    <section className=" w-full lg:w-[768px] lg:mx-auto">
      <h1 className="text-4xl">
        {category === '' ? '글 전체' : categoryMap[category as Category]}
      </h1>
      <Sort />
      <PostsList postsList={filteredPostsList} />
    </section>
  )
}
