import { site, schedule } from '@/lib/data'
import ContactForm from './ContactForm'
import FadeIn from './FadeIn'
import { IconMapPin, IconPhone, IconEmail, IconClock } from './Icons'

export default function Contact() {
  const mthHours = schedule.days.find((d) => d.name === 'Mon')?.hours || '5a – 7:30p'
  const friHours = schedule.days.find((d) => d.name === 'Fri')?.hours || '5a – 6:30p'
  const satHours = schedule.days.find((d) => d.name === 'Sat')?.hours || '9a – 10a'

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50 section-divider">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Contact CrossFit Aggieland</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-10 sm:mb-12">
            Get in Touch. College Station, TX.
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left: Contact info + form */}
          <div>
            {/* Contact info shown first for quick scanning */}
            <FadeIn>
              <div className="mb-8 space-y-5">
                <ContactItem
                  icon={<IconMapPin className="w-[18px] h-[18px] text-maroon" />}
                  label="Address"
                  value={`${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`}
                  href={site.googleMapsUrl}
                  external
                />
                <ContactItem
                  icon={<IconPhone className="w-[18px] h-[18px] text-maroon" />}
                  label="Phone"
                  value={site.phone}
                  href={`tel:${site.phone.replace(/-/g, '')}`}
                />
                <ContactItem
                  icon={<IconEmail className="w-[18px] h-[18px] text-maroon" />}
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />
                <ContactItem
                  icon={<IconClock className="w-[18px] h-[18px] text-maroon" />}
                  label="Class Hours"
                  value={`Mon–Thu: ${mthHours} | Fri: ${friHours} | Sat: ${satHours}`}
                />
              </div>

              {/* Quick-action CTA — on-site backup conversion for mobile */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={`tel:${site.phone.replace(/-/g, '')}`}
                  className="inline-flex items-center gap-2 font-display text-sm tracking-widest uppercase bg-maroon text-white px-6 py-3 hover:bg-maroon-dark transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  Call Now
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <ContactForm />
            </FadeIn>
          </div>

          {/* Right: Map — tighter zoom so the pin is prominent on mobile */}
          <FadeIn delay={200}>
            <div className="rounded-xl overflow-hidden h-[250px] sm:h-[300px] lg:h-full min-h-[300px] bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4074.66!2d-96.3209333!3d30.5758699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864684a0fb34e9c7%3A0x56cf6177a9bba493!2sCrossFit%20Aggieland!5e0!3m2!1sen!2sus!4v1"
                title="CrossFit Aggieland on Google Maps - 3815 General Parkway, College Station, TX 77845"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function ContactItem({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[0.7rem] font-semibold tracking-[2px] uppercase text-mid-gray mb-0.5">{label}</div>
        {href ? (
          <a
            href={href}
            className="text-maroon hover:opacity-70 transition-opacity font-medium"
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {value}
          </a>
        ) : (
          <div className="text-charcoal font-medium">{value}</div>
        )}
      </div>
    </div>
  )
}

