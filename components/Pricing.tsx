import { pricing, site } from '@/lib/data'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Pricing</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
            Simple Pricing. No Hidden Fees.
          </h2>
          <p className="text-text-gray max-w-[600px] mx-auto leading-relaxed">
            We believe great coaching should be accessible. Preferred rates for those who serve our community.
          </p>
        </div>

        {/* Pricing table — scrollable on small screens with fade hint */}
        <div className="relative">
          <div className="overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0">
          <table className="w-full border-collapse min-w-[500px]">
            <thead>
              <tr className="bg-charcoal text-white">
                <th className="font-display text-xs sm:text-sm tracking-[2px] uppercase p-3 sm:p-4 text-left">Plan</th>
                {pricing.terms.map((term) => (
                  <th key={term.label} className="font-display text-xs sm:text-sm tracking-[2px] uppercase p-3 sm:p-4 text-center">
                    {term.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricing.tiers.map((tier, i) => (
                <tr
                  key={tier.name}
                  className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-maroon/[0.03] transition-colors`}
                >
                  <td className="p-3 sm:p-4">
                    <div className="font-display text-sm sm:text-base tracking-wider uppercase text-charcoal">{tier.name}</div>
                  </td>
                  {pricing.terms.map((term) => {
                    const price = pricing.prices[tier.name]?.[String(term.months)]
                    return (
                      <td key={term.label} className="p-3 sm:p-4 text-center">
                        <span className="font-display text-xl sm:text-2xl text-maroon">${price}</span>
                        <span className="text-xs text-mid-gray">/mo</span>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          {/* Fade hint for horizontal scroll on mobile */}
          <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none sm:hidden" />
        </div>

        <p className="text-center text-text-gray text-sm mt-6 sm:mt-8">
          All memberships include{' '}
          {pricing.includes.map((item, i) => (
            <span key={item}>
              <strong>{item}</strong>
              {i < pricing.includes.length - 1 ? ', ' : '.'}
            </span>
          ))}
        </p>

        {/* Price anchoring */}
        <p className="text-center text-mid-gray text-sm mt-3">
          That&rsquo;s less than <strong className="text-charcoal">$5 per class</strong> with unlimited access.
          Personal training in College Station runs $60-80 per session.
        </p>

        <div className="text-center mt-8">
          <a
            href={site.pikeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display text-lg tracking-widest uppercase bg-maroon text-white border-2 border-maroon px-10 py-4 hover:bg-maroon-dark hover:border-maroon-dark hover:-translate-y-0.5 transition-all"
          >
            Start Your Free Week
          </a>
        </div>
      </div>
    </section>
  )
}
