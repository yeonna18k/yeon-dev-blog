import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-background leading-8">
      <main className="max-w-[768px] mx-auto">{children}</main>
    </section>
  )
}
