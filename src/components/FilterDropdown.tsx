'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function FilterDropdown({
  setFilter,
}: {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}) {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value
    setFilter(filter)
  }

  return (
    <select onChange={handleFilterChange}>
      <option value="">모두</option>
      <option value="React">리액트</option>
      <option value="Nextjs">넥스트</option>
      <option value="Sample">샘플</option>
      <option value="Package Manager">패키지 매니저</option>
    </select>
  )
}

export function SortDropdown({
  setSort,
}: {
  setSort: React.Dispatch<React.SetStateAction<string>>
}) {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = e.target.value
    setSort(sort)
  }

  return (
    <select onChange={handleFilterChange}>
      <option value="latest">최신순</option>
      <option value="oldest">오래된순</option>
    </select>
  )
}

export default function FilteringPostsList() {
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('latest')

  const router = useRouter()
  useEffect(() => {
    // redirect(`/?filter=${filter}&sort=${sort}`)
    router.push(`/?filter=${filter}&sort=${sort}`) // URL에 쿼리 파라미터 추가
  }, [filter, sort])

  return (
    <>
      <FilterDropdown setFilter={setFilter} />
      <SortDropdown setSort={setSort} />
    </>
  )
}
