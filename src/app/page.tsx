import PostsList from '../components/PostsList'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-red-500 bg-blue-200 p-4 rounded-lg">
        글 목록
      </h1>
      <PostsList />
    </main>
  )
}
