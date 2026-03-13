import { site } from '@/lib/data'
import Image from 'next/image'

export default function StartHere() {
  return (
    <section id="start" className="py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="max-w-prose">
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

              {/* Specificity details — reduces "what will it be like?" anxiety */}
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-5 mb-6 space-y-2.5">
                <div className="flex items-center gap-3 text-sm text-text-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-maroon shrink-0" />
                  <span><strong className="text-charcoal">A coach in every class,</strong> watching your form and learning your name</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-maroon shrink-0" />
                  <span><strong className="text-charcoal">Every workout scaled to you.</strong> Your coach adjusts weight, reps, and movements to your level.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-text-gray">
                  <span className="w-1.5 h-1.5 rounded-full bg-maroon shrink-0" />
                  <span><strong className="text-charcoal">After your free week,</strong> pick a membership that fits. No pressure, no surprises.</span>
                </div>
              </div>

              <a
                href={site.pikeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-maroon text-white pl-8 pr-6 py-4 hover:bg-maroon-dark transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span className="font-display text-lg tracking-widest uppercase">Start Your Free Week</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <p className="text-xs tracking-[2px] uppercase text-mid-gray mt-3">
                New to CrossFit? Perfect. We scale everything.
              </p>
            </div>
          </div>

          {/* Gym photo */}
          <div>
            <div className="relative rounded-xl overflow-hidden h-[400px] lg:h-[500px]">
              <Image
                src="/images/wallball-pair.jpg"
                alt="Two athletes doing wall balls at CrossFit Aggieland"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
