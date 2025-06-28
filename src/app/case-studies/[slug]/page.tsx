'use client'

import { notFound } from 'next/navigation'
import { projects } from '../../../components/projectsData'
import Image from 'next/image'

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6" style={{ color: '#bfa14a' }}>{project.title}</h1>
        <div className="prose prose-lg mb-8" style={{ color: '#6b5b2e' }}>
          {project.description.split('\n').map((line, i) =>
            line.trim().startsWith('**') ? (
              <strong key={i}>{line.replace(/\*\*/g, '')}</strong>
            ) : (
              <p key={i}>{line}</p>
            )
          )}
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full border border-[#bfa14a] bg-white"
              style={{ color: '#bfa14a' }}
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Images Section */}
        {project.images && project.images.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#bfa14a' }}>Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, idx) => (
                <Image
                  key={idx}
                  src={`/Photos/${img}`}
                  alt={`${project.title} photo ${idx + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg w-full object-cover"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}