import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useFilter } from '../context/FilterContext'

const SearchBox = () => {
  const { query, setQuery } = useFilter()
  return (
    <div className="relative w-full max-w-xs mx-auto">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search destination..."
        className="w-full rounded-full border px-4 py-1.5 pl-9 text-sm shadow-sm dark:border-slate-600 bg-white/80 dark:bg-slate-800"
      />
      <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-2 text-slate-500" />
    </div>
  )
}

export default SearchBox 