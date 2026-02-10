import { pricing } from '@/lib/data'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Pricing</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
            Simple Pricing. No Hidden Fees.
          </h2>
          <p className="text-text-gray max-w-[600px] mx-auto leading-relaxed">
            We believe great coaching should be accessible. Preferred rates for those who serve our community.
          </p>
        </div>

        {/* Pricing table */}
        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-charcoal text-white">
                <th className="font-display text-sm tracking-[2px] uppercase p-4 text-left">Plan</th>
                {pricing.terms.map((term) => (
                  <th key={term.label} className="font-display text-sm tracking-[2px] uppercase p-4 text-center">
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
                  <td className="p-4">
                    <div className="font-display text-base tracking-wider uppercase text-charcoal">{tier.name}</div>
                  </td>
                  {pricing.terms.map((term) => {
                    const price = pricing.prices[tier.name]?.[String(term.months)]
                    return (
                      <td key={term.label} className="p-4 text-center">
                        <span className="font-display text-2xl text-maroon">${price}</span>
                        <span className="text-xs text-mid-gray">/mo</span>
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-text-gray text-sm mt-8">
          All memberships include{' '}
          {pricing.includes.map((item, i) => (
            <span key={item}>
              <strong>{item}</strong>
              {i < pricing.includes.length - 1 ? ', ' : '.'}
            </span>
          ))}
        </p>

        <div className="text-center mt-8">
          <a
            href="#free"
            className="inline-block font-display text-lg tracking-widest uppercase bg-maroon text-white border-2 border-maroon px-10 py-4 hover:bg-maroon-dark hover:border-maroon-dark hover:-translate-y-0.5 transition-all"
          >
            Start Your Free Week
          </a>
        </div>
      </div>
    </section>
  )
}
