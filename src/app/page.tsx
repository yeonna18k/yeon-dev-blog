import { SearchParams } from 'next/dist/server/request/search-params'
import Category from '../components/Category'
import PostsList from '../components/PostsList'
import Sort from '../components/Sort'
import { getPostsList } from '../lib/mdx'
import { getFilteredPostsList } from './api/route'

export interface PostsListProps {
  slug: string
  metadata: {
    [key: string]: any
  }
  content: string
  hasThumbnail: boolean
}
;[]

export default async function Home(props: { searchParams: SearchParams }) {
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
    <section className=" bg-slate-200 w-full lg:max-w-[900px] lg:mx-auto">
      <h1 className="text-4xl">글 목록</h1>
      <Category />
      <Sort />
      <PostsList postsList={filteredPostsList} />
    </section>
  )
}
