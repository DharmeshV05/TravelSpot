import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [subs, setSubs] = useLocalStorage<string[]>('subs', [])
  const [toast, setToast] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubs([...subs, email])
    setEmail('')
    setToast(true)
    setTimeout(() => setToast(false), 3000)
  }

  return (
    <section id="newsletter" className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Join our Travel Community</h2>
      <p className="max-w-xl mx-auto">
        Sign up for our newsletter to receive exclusive deals, travel inspiration, and tips.
      </p>
      <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="rounded-full px-5 py-2 w-80 border shadow-sm dark:border-slate-600 bg-white/80 dark:bg-slate-800"
        />
        <button className="rounded-full bg-brand px-6 py-2 font-medium text-white hover:bg-emerald-700">
          Subscribe
        </button>
      </form>

      {/* Toast */}
      {toast && (
        <div className="fixed left-1/2 -translate-x-1/2 bottom-10 bg-slate-900 text-white px-6 py-3 rounded-full shadow-lg animate-[toast-in_.4s]">
          Thanks for subscribing!
        </div>
      )}
    </section>
  )
}

export default Newsletter 