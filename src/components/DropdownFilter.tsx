'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

interface DropdownFilterProps {
  queryKey: string
  options: { value: string; label: string }[]
}

export default function DropdownFilter({
  queryKey,
  options,
}: DropdownFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  const updateQueryParams = (key: string, value: string) => {
    if (value) {
      params.set(key, value)
    }

    router.replace(`/?${params.toString()}`)
  }
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateQueryParams(queryKey, e.target.value)
  }

  useEffect(() => {
    router.replace('/?category=&sortBy=latest')
  }, [])

  return (
    <select onChange={handleFilterChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
