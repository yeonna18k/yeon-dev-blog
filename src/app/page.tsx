import PostsList from '../components/PostsList'

export default function Home() {
  return (
    <section className=" bg-slate-200 w-full lg:max-w-[900px] lg:mx-auto">
      <h1 className="text-4xl">글 목록</h1>
      <PostsList />
    </section>
  )
}
