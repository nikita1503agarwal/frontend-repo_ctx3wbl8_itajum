import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[560px] py-16">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-gray-700 shadow-sm backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Live AI voice agent
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Automate lead capture with an AI agent that talks
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl">
              AuraLead answers calls, qualifies prospects, books meetings, and syncs to your CRM — 24/7. Give every lead a world-class first touch without adding headcount.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-black/90">
                Get started
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium shadow-sm ring-1 ring-black/10 hover:bg-gray-50">
                See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-gray-500">
              <span>Works with HubSpot, Salesforce, Pipedrive</span>
              <span>GDPR & SOC2 ready</span>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.2)_0%,rgba(59,130,246,0.15)_35%,rgba(251,146,60,0.1)_70%,transparent_80%)]" />
          </div>
        </div>
      </div>
    </section>
  )
}
