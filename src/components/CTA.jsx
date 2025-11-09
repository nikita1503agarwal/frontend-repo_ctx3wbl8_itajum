export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-8 sm:p-12 text-center text-white shadow-lg ring-1 ring-white/10">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Give every lead a world-class first conversation</h3>
          <p className="mt-3 text-white/70">See the agent qualify a live lead and book a meeting in seconds.</p>
          <form className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Work email"
              className="flex-1 rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm placeholder-white/50 outline-none backdrop-blur focus:border-white/30"
            />
            <button
              type="submit"
              className="rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 shadow-sm hover:bg-white/90"
            >
              Book a demo
            </button>
          </form>
          <p className="mt-3 text-xs text-white/50">No spam. No credit card required.</p>
        </div>
      </div>
    </section>
  )
}
