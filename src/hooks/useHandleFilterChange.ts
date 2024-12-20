import { useUpdateQueryParams } from '../utils/updateQueryParams'

export const useHandleFilterChange = () => {
  const { updateQueryParams } = useUpdateQueryParams()

  const handleFilterChange = (key: string) => (value: string) => {
    updateQueryParams(key, value)
  }

  return { handleFilterChange }
}
