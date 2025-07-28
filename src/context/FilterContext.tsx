import { createContext, useContext, useState } from 'react'

export type Category = 'all' | 'mountain' | 'beach' | 'forest' | 'desert' | 'history' | 'fun'

interface FilterState {
  category: Category
  setCategory: (c: Category) => void
  query: string
  setQuery: (q: string) => void
}

const FilterCtx = createContext<FilterState | null>(null)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<Category>('all')
  const [query, setQuery] = useState('')
  return (
    <FilterCtx.Provider value={{ category, setCategory, query, setQuery }}>
      {children}
    </FilterCtx.Provider>
  )
}

export const useFilter = () => {
  const ctx = useContext(FilterCtx)
  if (!ctx) throw new Error('useFilter must be inside FilterProvider')
  return ctx
} 