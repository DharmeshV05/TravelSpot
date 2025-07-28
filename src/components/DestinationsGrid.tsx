import { destinations } from '../data/destinations'
import DestinationCard from './DestinationCard'
import Filters from './Filters'
import SearchBox from './SearchBox'
import { useFilter } from '../context/FilterContext'
import Fuse from 'fuse.js'

const options = { keys: ['title', 'description', 'location'], threshold: 0.35 }
const fuse = new Fuse(destinations, options)

const DestinationsGrid = () => {
  const { category, query } = useFilter()

  // filter by category first
  let list =
    category === 'all' ? destinations : destinations.filter((d) => d.category === category)

  // fuzzy search
  if (query.trim()) {
    list = fuse.search(query).map((r) => r.item)
  }

  return (
    <section id="destinations" className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-2 text-center">Featured Destinations</h2>
      <p className="text-center text-slate-500 mb-6 text-sm">Browse by category or search for your next adventure</p>
      <div className="flex flex-col gap-2 items-center mb-6">
        <Filters />
        <SearchBox />
      </div>
      {list.length === 0 && <p className="text-center">No destinations found.</p>}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {list.map((d) => (
          <DestinationCard key={d.id} d={d} />
        ))}
      </div>
    </section>
  )
}

export default DestinationsGrid 