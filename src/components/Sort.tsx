import DropdownFilter from './DropdownFilter'

export default function Sort() {
  const sortByOptions = [
    { value: 'latest', label: '최신순' },
    { value: 'oldest', label: '오래된순' },
  ]

  return <DropdownFilter queryKey="sortBy" options={sortByOptions} />
}
