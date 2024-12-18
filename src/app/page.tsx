import { Params } from 'next/dist/server/request/params'
import { SearchParams } from 'next/dist/server/request/search-params'
import FilteringPostsList from '../components/FilterDropdown'
import PostsList from '../components/PostsList'
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

export default async function Home(props: {
  params: Params
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const postsList = await getPostsList()

  const filter = searchParams.filter || null
  const sort = searchParams.sort || 'latest'

  const filteredPostsList = await getFilteredPostsList({
    filter,
    sort,
    postsList,
  })

  return (
    <section className=" bg-slate-200 w-full lg:max-w-[900px] lg:mx-auto">
      <h1 className="text-4xl">글 목록</h1>
      <FilteringPostsList />
      <PostsList postsList={filteredPostsList} />
    </section>
  )
}
