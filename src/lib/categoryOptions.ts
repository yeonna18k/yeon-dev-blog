import { getPostsList } from './mdx'

export async function generateCategoryOptions() {
  const postsList = await getPostsList()

  const categoriesSet = new Set<string>()

  categoriesSet.add(JSON.stringify({ value: '', label: '모두' }))

  postsList.forEach((post) => {
    if (post.metadata.category) {
      const categoryObj = {
        value: post.metadata.category,
        label: post.metadata.label,
      }
      categoriesSet.add(JSON.stringify(categoryObj))
    }
  })

  const categoryOptions = Array.from(categoriesSet).map((item) =>
    JSON.parse(item),
  )
  return categoryOptions
}

export async function categoryMap() {
  const categoryOptions = await generateCategoryOptions()

  const categoryMap = Object.fromEntries(
    categoryOptions.map(({ value, label }) => [value, label]),
  )
  return categoryMap
}
