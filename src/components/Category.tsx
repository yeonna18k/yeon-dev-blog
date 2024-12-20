import { categoryOptions } from '../lib/categoryOptions'
import DropdownFilter from './DropdownFilter'

export default function Category() {
  return <DropdownFilter queryKey="category" options={categoryOptions} />
}
