import { Section, SectionLabel, SectionTitle } from '../components/SharedUI'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import team from '../data/team'
import { ArrowRight, Users, Building2, Target, Globe, Clock, Award, MapPin } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const timelineEvents = [
  { year: 2008, title: 'Founded in San Francisco', description: 'First dealer clients.' },
  { year: 2010, title: 'First geo-fencing technology', description: 'For auto dealers.' },
  { year: 2012, title: 'Geo-fencing & walk-in attribution', description: 'Launched.' },
  { year: 2014, title: 'Agency partner model', description: 'Introduced.' },
  { year: 2016, title: 'Scaled to 500+ dealerships', description: '' },
  { year: 2018, title: 'Multicultural marketing division', description: 'Launched.' },
  { year: 2020, title: 'Expanded beyond auto', description: 'CPG, Finance, Healthcare.' },
  { year: 2022, title: 'Connected TV and Digital OOH', description: 'Added.' },
  { year: 2024, title: 'LinkOne Data platform', description: 'Launched.' },
  { year: 2025, title: 'AI-First Discovery (GEO)', description: 'Goes live.' },
]

const stats = [
  { label: '17+ Years', icon: Clock, value: 'in Business' },
  { label: '~1,000 Dealerships', icon: Building2, value: 'on Platform' },
  { label: '$25M+ Annual Volume', icon: Target, value: 'Processed' },
  { label: '100% Co-Op Recovery', icon: Award, value: 'Achieved' },
]

export default function AboutPage() {
  const executives = team.filter((member) => member.tier === 'executive')
  const otherTeam = team.filter((member) => member.tier !== 'executive')

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900/20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Building the infrastructure for automotive advertising
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Story Section */}
      <Section>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <SectionLabel>Founded 2008</SectionLabel>
          <SectionTitle>The Beginning</SectionTitle>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-700 leading-relaxed mb-6"
          >
            In 2008, Ray Bhatia and Mike Machado saw a gap in automotive advertising. Nobody was building the infrastructure underneath it — the data pipelines, attribution models, compliance engines. So they built it from the ground up in San Francisco.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-700 leading-relaxed mb-6"
          >
            Not off-the-shelf tools repackaged, but proprietary technology purpose-built for the automotive dealer-OEM ecosystem. The result is LinkOne Data.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-700 leading-relaxed"
          >
            Today, nearly 1,000 dealerships across North America run on the platform.
          </motion.p>
        </motion.div>
      </Section>

      {/* Timeline Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Our Journey</SectionLabel>
          <SectionTitle>Timeline</SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Timeline Visual */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-slate-300"></div>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="space-y-8"
              >
                {timelineEvents.map((event, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative pl-24"
                  >
                    <div className="absolute left-0 top-2 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {event.year}
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {event.title}
                      </h3>
                      {event.description && (
                        <p className="text-sm text-slate-600">{event.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6">
                {stats.map((stat, idx) => {
                  const IconComponent = stat.icon
                  return (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-slate-900">
                          {stat.label}
                        </p>
                        <p className="text-sm text-slate-600 mt-1">{stat.value}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Team Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Our People</SectionLabel>
          <SectionTitle>Meet the Team</SectionTitle>

          {/* Executives */}
          {executives.length > 0 && (
            <div className="mb-16">
              <h3 className="text-xl font-semibold text-slate-900 mb-8">
                Leadership
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {executives.map((member) => (
                  <motion.div
                    key={member.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="relative mb-4 overflow-hidden rounded-lg border-2 border-slate-200 group-hover:border-blue-400 transition-colors">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-slate-500">{member.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Rest of Team */}
          {otherTeam.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-8">
                Team
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {otherTeam.map((member) => (
                  <motion.div
                    key={member.name}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="relative mb-3 overflow-hidden rounded-lg border border-slate-200 group-hover:border-blue-400 transition-colors">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-0.5 text-sm">
                      {member.name}
                    </h4>
                    <p className="text-xs text-slate-500">{member.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-blue-50 to-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            We're always looking for talented people who want to build the future of automotive advertising.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Work With Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </Section>
    </div>
  )
}
