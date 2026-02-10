import siteJson from '@/data/site.json'
import coachesJson from '@/data/coaches.json'
import pricingJson from '@/data/pricing.json'
import scheduleJson from '@/data/schedule.json'
import testimonialsJson from '@/data/testimonials.json'
import type { SiteData, Coach, PricingData, ScheduleData, Testimonial } from './types'

export const site: SiteData = siteJson
export const coaches: Coach[] = coachesJson
export const pricing: PricingData = pricingJson
export const schedule: ScheduleData = scheduleJson
export const testimonials: Testimonial[] = testimonialsJson
