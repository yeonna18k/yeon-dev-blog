export const categoryOptions = [
  { value: '', label: '모두' },
  { value: 'react', label: '리액트' },
  { value: 'nextjs', label: '넥스트' },
  { value: 'sample', label: '샘플' },
  { value: 'package-manager', label: '패키지 매니저' },
]

export const categoryMap = Object.fromEntries(
  categoryOptions.map(({ value, label }) => [value, label]),
)
