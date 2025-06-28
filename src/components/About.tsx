'use client'

import { motion } from 'framer-motion'
import { DollarSign, Palette, Zap, Heart } from 'lucide-react'

export function About() {
  const skills = [
    {
      icon: DollarSign,
      title: 'Business Development',
      description: 'Revenue growth, client portfolio expansion, project management',
      items: [
        'Consulting',
        'Strategic Partnerships',
        'Sales Development',
        'Account Management',
        'RFP/RFI',
        'Market Research',
        'Monetization Strategy'
      ]
    },
    {
      icon: Zap,
      title: 'Skills & Expertise',
      description: 'Generative AI, conversational AI, cloud computing, website building, prompt engineering',
      items: [
        'Google Cloud',
        'AWS',
        'Microsoft Azure',
        'ServiceNow',
        'Website Building',
        'Prompt Engineering',
        'Generative AI'
      ]
    },
    {
      icon: Palette,
      title: 'Digital Marketing & Analytics',
      description: 'Campaigns, analytics, digital tools',
      items: [
        'HubSpot',
        'Salesforce',
        'LinkedIn',
        'ZoomInfo',
        'Google Analytics',
        'ASA',
        'Adapty',
        'Video Editing'
      ]
    },
    {
      icon: Heart,
      title: 'Professional Growth',
      description: 'Leadership, communication, continuous learning',
      items: [
        'Team Collaboration',
        'Growth Mindset',
        'Continuous Learning',
        'Giving back initiatives',
        'Attending Industry Conferences',
        'Workshops & Seminars',
        'Networking Events',
        'Public Speaking'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#bfa14a' }}>
            About Me
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#6b5b2e' }}>
            I’m Eleonora Berylo, a Growth & Revenue Consultant specializing in digital strategy, business development, and market expansion. I help companies unlock new opportunities, drive revenue, and build innovative solutions across industries.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 bg-[#f6ecd9] rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-2" style={{ color: '#bfa14a' }}>
              My Journey
            </h3>
            <div className="space-y-4 leading-relaxed" style={{ color: '#6b5b2e' }}>
              <p>
                My career is dedicated to consulting, digital strategy, and project management, with a focus on driving revenue growth and expanding client portfolios. I have helped companies leverage technology, enter new markets, and build high-performing teams.
              </p>
              <p>
                I hold an Associate of Science in Business Technology Management from Seattle Central College, with expertise in Cloud Computing, Microsoft business productivity apps, and digital marketing tools. My certifications from Apple, Google, AWS, and ServiceNow reflect my commitment to professional growth in AI, DevOps, Data & Analytics, and Digital Marketing.
              </p>
              <p>
                I approach every challenge with a growth mindset and a passion for exploring new markets. My goal is to deliver value to clients, guiding them through their product and business development journey.
              </p>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-2xl p-0 flex items-center justify-center"
            style={{ minHeight: '20rem' }}
          >
            <img
              src="/headshot.jpg"
              alt="Eleonora Berylo headshot"
              className="w-full h-full"
              style={{
                objectFit: 'contain',
                borderRadius: '0',
                border: 'none',
                boxShadow: 'none',
                background: 'none'
              }}
            />
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-[#fffbe6] border border-[#f6ecd9] rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-[#bfa14a] mb-4">
                  <Icon size={32} />
                </div>
                <h4 className="text-lg font-semibold mb-2" style={{ color: '#bfa14a' }}>
                  {skill.title}
                </h4>
                <p className="text-sm mb-4" style={{ color: '#6b5b2e' }}>
                  {skill.description}
                </p>
                <div className="space-y-2">
                  {skill.items.map((item) => (
                    <div
                      key={item}
                      className="text-xs px-2 py-1 rounded-md border border-[#bfa14a] bg-white"
                      style={{ color: '#bfa14a' }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '5+', label: 'Years Experience' },
            { number: '20+', label: 'Happy Clients' },
            { number: '100%', label: 'Code Quality' },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-3xl font-bold" style={{ color: '#bfa14a' }}>{stat.number}</div>
              <div className="text-sm" style={{ color: '#6b5b2e' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
