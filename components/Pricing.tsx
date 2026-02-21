import { pricing, site } from '@/lib/data'
import FadeIn from './FadeIn'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-gray-50 section-divider">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Membership Pricing</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
              CrossFit Membership Rates. No Hidden Fees.
            </h2>
            <p className="text-text-gray max-w-[600px] mx-auto leading-relaxed">
              We believe great coaching should be accessible. Preferred rates for those who
              serve our community.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          {/* Desktop: table layout */}
          <div className="hidden md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-charcoal text-white">
                  <th className="font-display text-sm tracking-[2px] uppercase p-4 text-left">Plan</th>
                  {pricing.terms.map((term) => (
                    <th
                      key={term.label}
                      className="font-display text-sm tracking-[2px] uppercase p-4 text-center whitespace-nowrap"
                    >
                      {term.label}
                    </th>
                  ))}
                  <th className="p-4 w-[1%]"></th>
                </tr>
              </thead>
              <tbody>
                {pricing.tiers.map((tier, i) => (
                  <tr
                    key={tier.name}
                    className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-maroon/[0.03] transition-colors`}
                  >
                    <td className="p-4">
                      <div className="font-display text-base tracking-wider uppercase text-charcoal">
                        {tier.name}
                      </div>
                    </td>
                    {pricing.terms.map((term) => {
                      const price = pricing.prices[tier.name]?.[String(term.months)]
                      return (
                        <td key={term.label} className="p-4 text-center whitespace-nowrap">
                          <span className="font-display text-2xl text-maroon">${price}</span>
                          <span className="text-xs text-mid-gray">/mo</span>
                        </td>
                      )
                    })}
                    <td className="p-4 text-center whitespace-nowrap">
                      <a
                        href={site.pikeUrl}
                        className="inline-block font-display text-xs tracking-[2px] uppercase text-maroon border border-maroon px-5 py-2.5 hover:bg-maroon hover:text-white transition-all"
                      >
                        Start Free Week
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked card layout */}
          <div className="md:hidden space-y-4">
            {pricing.tiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <div className="bg-charcoal px-5 py-3">
                  <h3 className="font-display text-sm tracking-[2px] uppercase text-white">{tier.name}</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {pricing.terms.map((term) => {
                    const price = pricing.prices[tier.name]?.[String(term.months)]
                    return (
                      <div key={term.label} className="flex items-center justify-between px-5 py-3">
                        <span className="text-sm text-text-gray">{term.label}</span>
                        <div>
                          <span className="font-display text-xl text-maroon">${price}</span>
                          <span className="text-xs text-mid-gray">/mo</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="px-5 py-4 border-t border-gray-100">
                  <a
                    href={site.pikeUrl}
                    className="block text-center font-display text-xs tracking-[2px] uppercase text-maroon border border-maroon px-5 py-2.5 hover:bg-maroon hover:text-white transition-all"
                  >
                    Start Your Free Week
                  </a>
                </div>
              </div>
            ))}
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

          {/* Term clarification — eliminates contract confusion */}
          <p className="text-center text-text-gray text-sm mt-4 max-w-[600px] mx-auto leading-relaxed">
            <strong className="text-charcoal">No long-term contracts.</strong> Term options lock in a discounted rate. Month-to-month
            is always available. Cancel anytime with 30 days&rsquo; notice.
          </p>

          {/* Price anchoring */}
          <p className="text-center text-mid-gray text-sm mt-3">
            That&rsquo;s less than <strong className="text-charcoal">$5 per class</strong> with unlimited access. Personal training in College Station runs $60–80 per session.
          </p>

          <div className="text-center mt-8">
            <a
              href={site.pikeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-lg tracking-widest uppercase text-maroon border-2 border-maroon px-10 py-4 hover:bg-maroon hover:text-white hover:-translate-y-0.5 transition-all"
            >
              Start Your Free Week
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
