import { generateCategoryOptions } from './../lib/categoryOptions'
import DropdownFilter from './DropdownFilter'

export default async function Category() {
  const categoryOptions = await generateCategoryOptions()
  return <DropdownFilter queryKey="category" options={categoryOptions} />
}
