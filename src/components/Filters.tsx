import { Category, useFilter } from '../context/FilterContext'

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'mountain', label: 'Mountains' },
  { key: 'beach', label: 'Beaches' },
  { key: 'forest', label: 'Forest' },
  { key: 'desert', label: 'Desert' },
  { key: 'history', label: 'History' },
  { key: 'fun', label: 'Fun' }
]

const Filters = () => {
  const { category, setCategory } = useFilter()
  return (
    <div className="flex flex-wrap gap-1 justify-center items-center">
      {categories.map((c) => (
        <button
          key={c.key}
          onClick={() => setCategory(c.key)}
          className={`px-3 py-1 text-xs rounded-full border font-medium transition-all ${
            category === c.key ? 'bg-brand text-white' : 'bg-slate-200 dark:bg-slate-700'
          } hover:shadow`}
        >
          {c.label}
        </button>
      ))}
    </div>
  )
}

export default Filters 