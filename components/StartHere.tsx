import { site } from '@/lib/data'

export default function StartHere() {
  return (
    <section id="start" className="py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">You Belong Here</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
              You Don&rsquo;t Need to Be Fit to Start.
            </h2>
            <p className="text-text-gray leading-relaxed mb-4">
              Maybe you&rsquo;ve thought about it. Maybe you&rsquo;ve driven past the gym and kept going. Maybe you tried a gym before and it didn&rsquo;t stick.
            </p>
            <p className="text-text-gray leading-relaxed mb-4">
              We hear this every single week. Here&rsquo;s the truth: <strong>nobody walks in &ldquo;ready.&rdquo;</strong> You walk in willing. We handle the rest.
            </p>
            <p className="text-text-gray leading-relaxed mb-6">
              For <strong>{site.awardsCount} straight years</strong>, we&rsquo;ve taken people who were nervous, out of shape, or completely new and coached them into athletes who don&rsquo;t want to miss a day.
            </p>
            <div className="font-display text-xl tracking-[2px] uppercase text-charcoal border-l-4 border-maroon pl-4 mb-8">
              You bring the effort. We coach the plan.
            </div>
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-lg tracking-widest uppercase bg-maroon text-white border-2 border-maroon px-10 py-4 hover:bg-maroon-dark hover:border-maroon-dark hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg"
            >
              Start My Free Week
            </a>
            <br />
            <span className="inline-block mt-4 text-xs tracking-[2px] uppercase text-mid-gray bg-gray-100 px-4 py-2">
              New to CrossFit? Perfect. We Scale Everything.
            </span>
          </div>

          {/* Visual placeholder for gym photo */}
          <div className="bg-gradient-to-br from-maroon/10 to-gray-100 rounded-lg h-[400px] lg:h-[500px] flex items-center justify-center">
            <div className="text-center text-mid-gray">
              <div className="font-display text-5xl tracking-wider uppercase opacity-20">CFA</div>
              <p className="text-sm mt-2 opacity-40">Add your gym photo here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
