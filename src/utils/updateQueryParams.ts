import { useRouter, useSearchParams } from 'next/navigation'

export const useUpdateQueryParams = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString())

  const updateQueryParams = (key: string, value: string) => {
    if (value) {
      params.set(key, value)
    } else {
      params.set(key, '')
    }

    router.replace(`/?${params.toString()}`)
  }

  return { updateQueryParams }
}
