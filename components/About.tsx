import { site } from '@/lib/data'

const values = [
  {
    title: 'Coaching That Feels Personal',
    text: 'We correct form, scale workouts, and keep you progressing.',
  },
  {
    title: 'Fitness for Life',
    text: 'Built for the next 40 years, not just the next 40 minutes.',
  },
  {
    title: 'Your People',
    text: 'Students, parents, professionals, and grandparents. Everyone is welcome, and everyone is coached.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-28 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Visual */}
          <div className="relative bg-charcoal rounded-lg h-[400px] lg:h-[500px] flex flex-col items-center justify-center overflow-hidden">
            <div className="font-display text-7xl text-white/10 uppercase tracking-wider leading-none text-center">
              More<br />Than<br />A Gym
            </div>
            <div className="absolute bottom-6 left-6">
              <div className="font-display text-white text-lg tracking-wider">Since {site.established}</div>
              <div className="text-white/50 text-sm">{site.address.city}, {site.address.state}</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">About Us</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
              The Hour That Changes Your Day
            </h2>
            <p className="text-text-gray leading-relaxed mb-4">
              Since {site.established}, {site.name} has been where people come to get stronger, healthier, and more confident. It&rsquo;s the hour of your day that makes the rest of your day better. No fluff. Just great coaching and real progress.
            </p>
            <p className="text-text-gray leading-relaxed mb-4">
              We&rsquo;ve been voted &ldquo;Best CrossFit&rdquo; for {site.awardsCount} consecutive years. We didn&rsquo;t earn that by cutting corners. We earned it by coaching people into results.
            </p>
            <p className="text-text-gray leading-relaxed mb-8">
              Whether you&rsquo;re a D1 athlete or brand new, the standard is the same: show up, be coachable, and do the work. We&rsquo;ll handle the rest.
            </p>

            <div className="space-y-5">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-maroon mt-2 shrink-0" />
                  <p className="text-text-gray leading-relaxed">
                    <strong className="text-charcoal">{v.title}:</strong> {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
