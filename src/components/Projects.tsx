'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export function Projects() {
  const projects = [
    {
      title: 'VDR Company Demand Generation',
      description:
        'Led personalized outreach and demand generation for a Virtual Data Room (VDR) company competing with Intralinks and Datasite. Generated 3–5 qualified meetings per week through targeted campaigns and strategic prospecting.',
      image: '/api/placeholder/600/400',
      technologies: ['Outbound Sales', 'Personalized Outreach', 'B2B SaaS', 'CRM'],
      liveUrl: 'https://example-vdr.com',
      featured: true
    },
    {
      title: 'Synthology.de Launch & Digital Marketing',
      description:
        'Launched synthology.de, managed Facebook Ads campaigns, created engaging Instagram content, and contributed to product mockups. Drove brand awareness and user engagement for a new digital platform.',
      image: '/api/placeholder/600/400',
      technologies: ['Facebook Ads', 'Instagram', 'Content Creation', 'UI/UX'],
      liveUrl: 'https://synthology.de',
      featured: true
    },
    {
      title: 'Sales Development Consulting',
      description:
        'Consulted a website development company on optimizing their sales development processes, including lead generation, pipeline management, and outreach strategies to accelerate growth.',
      image: '/api/placeholder/600/400',
      technologies: ['Sales Consulting', 'Lead Generation', 'Process Optimization'],
      liveUrl: 'https://example-webdev.com',
      featured: true
    },
    {
      title: 'Global Stone Export Company Leadership',
      description:
        'Managed a global stone export company, responsible for new market development in Taiwan, the USA, India, and EU countries. Oversaw international sales, partnerships, and expansion strategies.',
      image: '/api/placeholder/600/400',
      technologies: ['International Business', 'Market Development', 'Export', 'Sales Leadership'],
      liveUrl: '',
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-20" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center" style={{ color: "#bfa14a" }}>
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="bg-[#f6ecd9] rounded-2xl shadow-lg p-8 flex flex-col"
            >
              <div className="mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "#bfa14a" }}>
                  {project.title}
                </h3>
                <p className="mb-4" style={{ color: "#6b5b2e" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: "#fff",
                        color: "#bfa14a",
                        border: "1px solid #bfa14a"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 mt-auto text-[#bfa14a] hover:underline"
                >
                  <ExternalLink size={18} />
                  <span>View Project</span>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
