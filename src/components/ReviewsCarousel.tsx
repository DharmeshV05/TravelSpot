import { userReviews } from '../data/reviews'
import { useEffect, useRef } from 'react'

const ReviewsCarousel = () => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const id = setInterval(() => {
      el.scrollBy({ left: 260, behavior: 'smooth' })
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) el.scrollTo({ left: 0 })
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="reviews" className="bg-brand/5 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">What Travelers Say</h2>
        <div
          ref={ref}
          className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
        >
          {userReviews.map((r) => (
            <div
              key={r.name}
              className="min-w-[260px] bg-white dark:bg-slate-800 rounded-xl shadow p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <img src={r.avatar} alt={r.name} className="w-10 h-10 rounded-full" />
                <span className="font-semibold text-brand">{r.name}</span>
              </div>
              <p className="text-sm">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsCarousel 