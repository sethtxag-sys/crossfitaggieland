import { coaches } from '@/lib/data'

export default function Coaches() {
  return (
    <section id="coaches" className="py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Your Coaches</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
            The People in Your Corner.
          </h2>
          <p className="text-text-gray max-w-[600px] mx-auto leading-relaxed">
            You won&rsquo;t be left guessing. Our coaches learn your name, correct your movement, and push you to be better than yesterday.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className={`group relative rounded-lg overflow-hidden text-center p-8 transition-all hover:-translate-y-1 hover:shadow-xl ${
                coach.isOwner
                  ? 'bg-maroon text-white col-span-2 md:col-span-1 lg:col-span-2'
                  : 'bg-gray-50 hover:bg-white border border-gray-100'
              }`}
            >
              {/* Avatar */}
              <div
                className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-display tracking-wider ${
                  coach.isOwner
                    ? 'bg-white/20 text-white'
                    : 'bg-maroon/10 text-maroon'
                }`}
              >
                {coach.initials}
              </div>
              <h3 className={`font-display text-lg tracking-wider uppercase ${coach.isOwner ? 'text-white' : 'text-charcoal'}`}>
                {coach.name}
              </h3>
              <div className={`text-xs tracking-[2px] uppercase mt-1 ${coach.isOwner ? 'text-white/60' : 'text-mid-gray'}`}>
                {coach.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
