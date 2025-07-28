import { Link } from 'react-router-dom'

const Hero = () => (
  <section className="relative min-h-[60vh] flex items-center justify-center text-center">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
      alt="Hero"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50" />
    <div className="relative z-10 p-8">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
        Find the best places to travel & connect with nature
      </h2>
      <Link
        to="#destinations"
        className="inline-block bg-brand px-6 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition"
      >
        Start Exploring
      </Link>
    </div>
  </section>
)

export default Hero 