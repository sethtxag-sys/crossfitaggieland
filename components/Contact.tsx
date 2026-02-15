import { site, schedule } from '@/lib/data'
import ContactForm from './ContactForm'

export default function Contact() {
  const weekdayHours = schedule.days.find((d) => d.name === 'Mon')?.hours || '5a – 6:30p'
  const satHours = schedule.days.find((d) => d.name === 'Sat')?.hours || '9a – 10a'

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">Contact</div>
        <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-12">
          Questions? We&rsquo;re Here.
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact form + info */}
          <div>
            <ContactForm />

            <div className="mt-10 space-y-6">
              <ContactItem
                icon={<LocationIcon />}
                label="Address"
                value={`${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`}
              />
              <ContactItem
                icon={<PhoneIcon />}
                label="Phone"
                value={site.phone}
                href={`tel:${site.phone.replace(/-/g, '')}`}
              />
              <ContactItem
                icon={<ClockIcon />}
                label="Class Hours"
                value={`Mon–Fri: ${weekdayHours} | Sat: ${satHours}`}
              />
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-lg overflow-hidden h-[350px] lg:h-full min-h-[350px] bg-gray-200">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent('CrossFit Aggieland, 3815 General Pkwy, College Station, TX 77845')}&output=embed`}
              title="CrossFit Aggieland location on Google Maps - 3815 General Parkway, College Station, TX"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
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
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[0.7rem] font-semibold tracking-[2px] uppercase text-mid-gray mb-0.5">{label}</div>
        {href ? (
          <a href={href} className="text-maroon hover:opacity-70 transition-opacity font-medium">
            {value}
          </a>
        ) : (
          <div className="text-charcoal font-medium">{value}</div>
        )}
      </div>
    </div>
  )
}

function LocationIcon() {
  return (
    <svg className="w-[18px] h-[18px] fill-maroon" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-[18px] h-[18px] fill-maroon" viewBox="0 0 24 24">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-[18px] h-[18px] fill-maroon" viewBox="0 0 24 24">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
    </svg>
  )
}
