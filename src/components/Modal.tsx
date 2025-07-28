import { Destination } from '../data/destinations'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface Props {
  destination: Destination
  onClose: () => void
}

const Modal = ({ destination, onClose }: Props) => {
  // lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return ReactDOM.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-800 max-w-lg w-full rounded-xl overflow-hidden shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img src={destination.imageUrl} alt={destination.title} className="h-56 w-full object-cover" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-full bg-black/60 text-white"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-bold text-brand">{destination.title}</h3>
          <p>{destination.description}</p>
          <ul className="list-disc list-inside text-sm grid grid-cols-2 gap-x-4">
            {destination.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <div className="text-sm flex flex-wrap gap-4">
            <span>
              <b>Location:</b> {destination.location}
            </span>
            <span>
              <b>Duration:</b> {destination.duration}
            </span>
            <span>
              <b>Best Time:</b> {destination.bestTime}
            </span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal 