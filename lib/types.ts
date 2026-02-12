export interface SiteData {
  name: string
  tagline: string
  description: string
  established: number
  awardsCount: number
  awardName: string
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  phone: string
  email: string
  social: {
    facebook: string
    instagram: string
    twitter: string
    youtube: string
  }
  pikeUrl: string
  programming: string
  tracking: string
}

export interface Coach {
  name: string
  role: string
  initials: string
  isOwner: boolean
  image?: string
  bio?: string
}

export interface PricingData {
  tiers: { name: string; description: string }[]
  terms: { label: string; months: number }[]
  prices: Record<string, Record<string, number>>
  includes: string[]
}

export interface ClassTime {
  time: string
  label: string
}

export interface ScheduleDay {
  name: string
  hours: string
  open: boolean
  special?: string
}

export interface ScheduleData {
  classTimes: ClassTime[]
  days: ScheduleDay[]
}

export interface Testimonial {
  text: string
  author: string
}
