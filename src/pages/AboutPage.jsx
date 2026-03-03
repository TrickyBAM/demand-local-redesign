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
