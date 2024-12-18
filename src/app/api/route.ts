import { PostsListProps } from '../page'

interface FilteredListProps {
  filter: string | string[] | null
  sort: string | string[] | null
  postsList: PostsListProps[]
}

export async function GET(request: Request) {
  return new Response(JSON.stringify({ message: 'Hello, World!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export async function getFilteredPostsList({
  filter,
  sort,
  postsList,
}: FilteredListProps) {
  const filtered = filter
    ? postsList.filter((post) => post.metadata.category === filter)
    : postsList

  const sorted = (() => {
    if (sort === 'latest') {
      return filtered.sort(
        (a, b) =>
          new Date(b.metadata.date).getTime() -
          new Date(a.metadata.date).getTime(),
      )
    } else if (sort === 'oldest') {
      return filtered.sort(
        (a, b) =>
          new Date(a.metadata.date).getTime() -
          new Date(b.metadata.date).getTime(),
      )
    } else {
      return filtered
    }
  })()

  return sorted
}
