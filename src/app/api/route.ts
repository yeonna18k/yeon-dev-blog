import { PostsListProps } from '../page'

interface FilteredListProps {
  category: string | string[] | null
  sortBy: string | string[] | null
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
  category,
  sortBy,
  postsList,
}: FilteredListProps) {
  let filtered = category
    ? postsList.filter((post) => post.metadata.category === category)
    : postsList

  if (sortBy === 'latest') {
    filtered.sort(
      (a, b) =>
        new Date(b.metadata.date).getTime() -
        new Date(a.metadata.date).getTime(),
    )
  } else if (sortBy === 'oldest') {
    filtered.sort(
      (a, b) =>
        new Date(a.metadata.date).getTime() -
        new Date(b.metadata.date).getTime(),
    )
  } else {
    filtered
  }

  return filtered
}
