'use client'

import React, { useEffect } from 'react'

import { AlignJustify } from 'lucide-react'
import { useHandleFilterChange } from '../hooks/useHandleFilterChange'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

interface DropdownFilterProps {
  queryKey: string
  options: { value: string; label: string }[]
}

export default function DropdownFilter({
  queryKey,
  options,
}: DropdownFilterProps) {
  const [position, setPosition] = React.useState('')
  const { handleFilterChange } = useHandleFilterChange()

  useEffect(() => {
    handleFilterChange('category')('')
    handleFilterChange('sortBy')('latest')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    ...(queryKey === 'sortBy' ? (
      <select onChange={(e) => handleFilterChange(queryKey)(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <AlignJustify />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            value={position}
            onValueChange={(value) => {
              setPosition(value)
              handleFilterChange('category')(value)
            }}
          >
            {options.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )),
  }
}
