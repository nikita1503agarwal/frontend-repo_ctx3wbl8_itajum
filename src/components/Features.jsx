import { Brain, Rocket, Headphones, CalendarDays } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Qualify instantly',
    desc: 'Dynamic conversation flows score intent, budget, and fit in real time.'
  },
  {
    icon: Headphones,
    title: 'Answers 24/7',
    desc: 'Never miss a call. Your agent greets, guides, and follows up automatically.'
  },
  {
    icon: CalendarDays,
    title: 'Books meetings',
    desc: 'Two-way calendar sync and conflict handling to lock in the next step.'
  },
  {
    icon: Rocket,
    title: 'Pipeline ready',
    desc: 'Pushes to your CRM with clean notes, transcripts, and outcomes.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything you need to turn interest into meetings</h2>
          <p className="mt-3 text-gray-600">Built for revenue teams that move fast and expect precision.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-amber-400 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
