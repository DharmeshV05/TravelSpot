import { travelTips } from '../data/tips'

const TravelTips = () => (
  <section id="tips" className="container mx-auto px-4 py-12">
    <h2 className="text-3xl font-bold mb-8">Travel Tips & Blog</h2>
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {travelTips.map((tip) => (
        <article
          key={tip.title}
          className="bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-xl transition"
        >
          <h3 className="text-xl font-semibold text-brand mb-2">{tip.title}</h3>
          <p>{tip.content}</p>
        </article>
      ))}
    </div>
  </section>
)

export default TravelTips 