import PostsList from '../components/PostsList'

export default function Home() {
  return (
    <section className=" bg-slate-200">
      <h1 className="text-4xl">글 목록</h1>
      <PostsList />
    </section>
  )
}
