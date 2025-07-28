import { Destination } from '../data/destinations'
import { useState } from 'react'
import Modal from './Modal'
import {
  SunIcon, // beach
  FireIcon, // desert
  BuildingLibraryIcon, // history
  SparklesIcon, // fun
  UserIcon, // mountain (as closest available)
  GlobeAltIcon // forest (as closest available)
} from '@heroicons/react/24/solid'

// Map category to icon (using closest available Heroicons)
const categoryIcon = (cat: string) => {
  switch (cat) {
    case 'mountain':
      return <UserIcon className="w-5 h-5 inline-block mr-1 text-emerald-700 align-text-bottom" />
    case 'beach':
      return <SunIcon className="w-5 h-5 inline-block mr-1 text-yellow-400 align-text-bottom" />
    case 'forest':
      return <GlobeAltIcon className="w-5 h-5 inline-block mr-1 text-green-600 align-text-bottom" />
    case 'desert':
      return <FireIcon className="w-5 h-5 inline-block mr-1 text-orange-500 align-text-bottom" />
    case 'history':
      return <BuildingLibraryIcon className="w-5 h-5 inline-block mr-1 text-slate-500 align-text-bottom" />
    case 'fun':
      return <SparklesIcon className="w-5 h-5 inline-block mr-1 text-pink-400 align-text-bottom" />
    default:
      return null
  }
}

const DestinationCard = ({ d }: { d: Destination }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <article
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-2xl transition bg-white dark:bg-slate-800"
      >
        <div className="relative">
          <img src={d.imageUrl} alt={d.title} className="h-48 w-full object-cover" />
          <span className="absolute top-3 right-3 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            ${d.price}
          </span>
        </div>
        <div className="p-4 space-y-1">
          <h3 className="text-lg font-semibold text-brand flex items-center">
            {categoryIcon(d.category)}
            {d.title}
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 line-clamp-2">{d.description}</p>
        </div>
      </article>
      {open && <Modal destination={d} onClose={() => setOpen(false)} />}
    </>
  )
}

export default DestinationCard 