'use client'

import { useState } from 'react'

export function Projects() {
  const caseStudies = [
    {
      title: "Demand Generation Strategy for Website Design Company",
      problem: "A website building company was struggling with low inbound leads and limited brand visibility in a competitive market.",
      challenge: "Developing a scalable demand generation strategy that would increase qualified traffic and conversions without inflating acquisition costs.",
      outcome: "Designed and executed a multi-channel demand generation plan, including targeted content marketing, SEO, and paid campaigns. Result: 180% increase in qualified inbound leads and a 35% reduction in cost per acquisition within 6 months."
    },
    {
      title: "Public Sector Partnership for Seattle IT Consulting Firm",
      problem: "A Seattle-based IT consulting firm lacked access to public sector contracts and needed to establish credibility with government clients.",
      challenge: "Navigating complex procurement processes and building trust with public sector stakeholders.",
      outcome: "Led partnership development efforts, resulting in a formal collaboration with the State of Oregon. This partnership opened a new revenue stream and contributed to a 27% increase in annual contract value."
    },
    {
      title: "Synthology.de: CMO & Co-Founder",
      problem: "Synthology.de, a new e-commerce venture, needed to build brand awareness and drive user acquisition in the German market from scratch.",
      challenge: "Establishing a digital presence, creating compelling content, and optimizing paid and organic channels for growth.",
      outcome: "Oversaw end-to-end digital marketing: Meta and Pinterest ads, content creation, SMM, and influencer partnerships. Achieved 1,200+ first-month users, 8% conversion rate, and a 40% lower CAC than industry average."
    },
    {
      title: "What I Do Now: Funnel Fox & Adapty",
      problem: "App publishers face challenges in scaling revenue and optimizing digital funnels.",
      challenge: "Delivering actionable growth strategies and hands-on execution for B2B and B2C clients by providing a SaaS solution for in-app revenue management and purchase infrastructure. Helping growth marketers discover the power of Web2App.",
      outcome: (
        <>
          Currently, I consult and execute growth, revenue, and digital marketing strategies for{" "}
          <a
            href="https://funnelfox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#bfa14a]"
          >
            Funnel Fox
          </a>{" "}
          and{" "}
          <a
            href="https://adapty.io/docs/quickstart"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#bfa14a]"
          >
            Adapty
          </a>
          , helping clients achieve measurable improvements in acquisition, retention, and conversion.
        </>
      )
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 bg-[#fffbe6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8" style={{ color: "#bfa14a" }}>Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((cs, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={typeof cs.title === 'string' ? cs.title : 'current'}
                className="bg-white rounded-xl p-6 shadow border border-[#f6ecd9] transition-all"
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#bfa14a" }}>{cs.title}</h3>
                <p className="mb-2"><strong>Problem:</strong> {cs.problem}</p>
                {isOpen && (
                  <>
                    <p className="mb-2"><strong>Challenge:</strong> {cs.challenge}</p>
                    <p className="mb-2"><strong>Outcome:</strong> {cs.outcome}</p>
                  </>
                )}
                <button
                  className="mt-2 text-[#bfa14a] underline font-medium focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`case-study-${idx}`}
                >
                  {isOpen ? 'Show less' : 'Read more'}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
