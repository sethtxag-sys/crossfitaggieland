'use client'

import { useState } from 'react'
import { site } from '@/lib/data'

const faqs = [
  {
    question: 'Do I need to be in shape to start?',
    answer:
      'No. Most of our members started exactly where you are. Every workout is scaled to your fitness level. You show up willing and our coaches handle the rest.',
  },
  {
    question: "What if I can\'t do the movements?",
    answer:
      'Every movement has a scaled version. If you can\'t do a pull-up, we give you a modification that builds you toward one. Our coaches are trained to meet you where you are and progress you safely.',
  },
  {
    question: 'Is there a contract?',
    answer:
      'No long-term contracts required. We offer month-to-month memberships along with 3, 6, and 12 month options at lower rates. You can cancel anytime.',
  },
  {
    question: 'What should I bring to my first class?',
    answer:
      "Water, athletic shoes, and clothes you can move in. That\'s it. We provide everything else. Just show up 10 minutes early so we can meet you and walk you through the basics.",
  },
  {
    question: 'What does a typical class look like?',
    answer:
      'Every class is one hour: a warm-up, skill or strength work, the workout of the day (WOD), and a cool-down. Your coach leads the entire session, corrects your form, and keeps you on track. Nobody is left guessing.',
  },
  {
    question: 'How is this different from a regular gym?',
    answer:
      'You get a coach every single class. Not a personal trainer you pay extra for. Not a group fitness instructor reading off a card. A real coach who knows your name, watches your movement, and pushes you to be better than yesterday.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="font-display text-sm tracking-[4px] uppercase text-maroon mb-3">FAQ</div>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] leading-[1.05] uppercase tracking-wide mb-5">
            Questions? We Have Answers.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-display text-base tracking-wider uppercase text-charcoal pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-maroon shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 text-text-gray leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-gray text-sm mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block font-display text-sm tracking-widest uppercase text-maroon border-2 border-maroon px-8 py-3 hover:bg-maroon hover:text-white transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
