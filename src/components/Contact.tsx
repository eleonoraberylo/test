'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@ella.berylo',
      href: 'mailto:eleonoraberylo@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (401) 594-8443',
      href: 'tel:+14015948443'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Seattle, WA',
      href: null
    }
  ]

  return (
    <section id="contact" className="py-20" style={{ background: "#fff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#bfa14a" }}>
            Let's Work Together
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#6b5b2e" }}>
            Have a project in mind or just want to chat? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: "#bfa14a" }}>
                Get in Touch
              </h3>
              <p className="leading-relaxed mb-8" style={{ color: "#6b5b2e" }}>
                I'm always interested in hearing about new opportunities, interesting projects, 
                or just having a conversation about technology, demand generation needs or promt engineering. Whether you're a company 
                looking to hire, a demand generation consultant, or someone with a 
                project idea, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#f6ecd9] transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ background: "#f6ecd9" }}>
                      <Icon size={24} style={{ color: "#bfa14a" }} />
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: "#bfa14a" }}>{item.label}</p>
                      <p style={{ color: "#6b5b2e" }}>{item.value}</p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.label}
                    whileHover={{ scale: 1.02 }}
                  >
                    {content}
                  </motion.div>
                )
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-lg" style={{ background: "#f6ecd9", border: "1px solid #bfa14a" }}>
              <h4 className="font-semibold mb-3" style={{ color: "#bfa14a" }}>
                Response Time
              </h4>
              <p className="text-sm" style={{ color: "#6b5b2e" }}>
                I typically respond to emails within 24 hours during business days. 
                For urgent matters, please indicate so in your subject line.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-xl p-8"
            style={{ background: "#fff", border: "1px solid #bfa14a" }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} style={{ color: "#bfa14a" }} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#bfa14a" }}>
                  Message Sent Successfully!
                </h3>
                <p style={{ color: "#6b5b2e" }}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#bfa14a" }}>
                      Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border rounded-lg bg-white"
                      style={{ borderColor: "#bfa14a", color: "#6b5b2e" }}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm" style={{ color: "#d97706" }}>{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#bfa14a" }}>
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border rounded-lg bg-white"
                      style={{ borderColor: "#bfa14a", color: "#6b5b2e" }}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm" style={{ color: "#d97706" }}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: "#bfa14a" }}>
                    Subject *
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border rounded-lg bg-white"
                    style={{ borderColor: "#bfa14a", color: "#6b5b2e" }}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm" style={{ color: "#d97706" }}>{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#bfa14a" }}>
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border rounded-lg bg-white resize-vertical"
                    style={{ borderColor: "#bfa14a", color: "#6b5b2e" }}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm" style={{ color: "#d97706" }}>{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all"
                  style={{
                    background: "#bfa14a",
                    color: "#fff",
                    border: "none"
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
