import React from 'react';
import { Section, SectionLabel, SectionTitle } from '../components/SharedUI';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Car,
  Globe,
  ShoppingCart,
  CreditCard,
  Building2,
  ArrowRight,
  CheckCircle2,
  Users,
  Target,
  BarChart3,
  MapPin,
  Tv,
  Shield,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <Section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-transparent to-cyan-600/20" />
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Built for Automotive.{' '}
              <span className="bg-gradient-to-r from-brand-400 to-cyan-400 bg-clip-text text-transparent">
                Expanding Smart.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Industry-specific ad infrastructure purpose-built for vertical growth
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Automotive Hero Section */}
      <Section className="py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel>
            <Car className="w-4 h-4" />
            Primary Industry
          </SectionLabel>
          <SectionTitle>The Automotive Ad Infrastructure</SectionTitle>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Nearly 1,000 dealerships trust Demand Local
            </h3>
            <p className="text-slate-300 text-lg mb-8">
              We've built the most comprehensive ad stack purpose-designed for automotive
              retailers and networks. From search to showroom, we deliver measurable results
              across every channel.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Full Ad Stack Coverage</h4>
                  <p className="text-slate-400">
                    SEM, social, CTV, DOOH, and inventory marketing all coordinated
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Co-op Compliance Certified</h4>
                  <p className="text-slate-400">
                    Approved for Toyota, Honda, Ford, Chevrolet, Hyundai, BMW, and more
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Walk-in Attribution</h4>
                  <p className="text-slate-400">
                    Prove that digital ads drive showroom visits with precision tracking
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Agency White-Label</h4>
                  <p className="text-slate-400">
                    Seamless integration into your existing agency services
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-brand-600/10 to-brand-600/5 border border-brand-600/20 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-brand-400 mb-2">
                1,000+
              </div>
              <p className="text-slate-300">Dealerships</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-cyan-600/10 to-cyan-600/5 border border-cyan-600/20 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                100%
              </div>
              <p className="text-slate-300">Co-op Compliant</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-brand-600/10 to-brand-600/5 border border-brand-600/20 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-brand-400 mb-2">
                17+
              </div>
              <p className="text-slate-300">Years Experience</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-gradient-to-br from-cyan-600/10 to-cyan-600/5 border border-cyan-600/20 rounded-lg p-6 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                9
              </div>
              <p className="text-slate-300">Channels</p>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Multicultural Marketing Section */}
      <Section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900/50 to-slate-950/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel>
            <Globe className="w-4 h-4" />
            Growth Opportunity
          </SectionLabel>
          <SectionTitle>Multicultural Marketing</SectionTitle>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-orange-600/10 to-orange-600/5 border border-orange-600/20 rounded-lg p-6 backdrop-blur-sm"
              >
                <Tv className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="font-semibold mb-2">CTV & Social</h4>
                <p className="text-slate-400 text-sm">Spanish-language streaming and social</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-orange-600/10 to-orange-600/5 border border-orange-600/20 rounded-lg p-6 backdrop-blur-sm"
              >
                <MapPin className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="font-semibold mb-2">Local Targeting</h4>
                <p className="text-slate-400 text-sm">Out-of-home and geo-targeted campaigns</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-orange-600/10 to-orange-600/5 border border-orange-600/20 rounded-lg p-6 backdrop-blur-sm"
              >
                <Users className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="font-semibold mb-2">Cultural Expertise</h4>
                <p className="text-slate-400 text-sm">Native creative and media insights</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-orange-600/10 to-orange-600/5 border border-orange-600/20 rounded-lg p-6 backdrop-blur-sm"
              >
                <BarChart3 className="w-8 h-8 text-orange-400 mb-3" />
                <h4 className="font-semibold mb-2">Fastest Growing</h4>
                <p className="text-slate-400 text-sm">Hispanic consumer segments booming</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl font-bold mb-6">
              Reach the fastest-growing automotive consumer segments
            </h3>
            <p className="text-slate-300 text-lg mb-6">
              Hispanic and multicultural consumers represent the fastest-growing automotive
              market. We deliver culturally-targeted creative and media buying across all
              channels—CTV, social, digital, and out-of-home—all in Spanish.
            </p>
            <p className="text-slate-400 mb-8">
              From production to placement, we understand the nuances of reaching these
              audiences effectively and authentically.
            </p>

            <div className="flex items-center gap-2 text-brand-400 font-semibold hover:text-brand-300 transition">
              <span>Learn more about multicultural marketing</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Expansion Verticals Section */}
      <Section className="py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <SectionLabel>
            <Target className="w-4 h-4" />
            Beyond Automotive
          </SectionLabel>
          <SectionTitle>Expanding Verticals</SectionTitle>
          <p className="text-slate-300 text-lg max-w-3xl">
            We're applying our proven ad infrastructure to adjacent verticals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* CPG Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-brand-600/50 rounded-xl p-8 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-brand-600/20 to-brand-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:from-brand-600/30 group-hover:to-brand-600/20 transition-all">
              <ShoppingCart className="w-7 h-7 text-brand-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Consumer Packaged Goods</h3>
            <p className="text-slate-300 mb-6">
              The same infrastructure that drives dealership sales now powers national and
              regional brands. Proven at scale for retail activation and consumer reach.
            </p>
            <div className="flex items-center gap-2 text-brand-400 font-semibold group-hover:text-brand-300 transition">
              <span>Explore CPG Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Finance Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-cyan-600/50 rounded-xl p-8 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-600/20 to-cyan-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:from-cyan-600/30 group-hover:to-cyan-600/20 transition-all">
              <CreditCard className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Financial Services</h3>
            <p className="text-slate-300 mb-6">
              Precision targeting for banks, credit unions, and fintech. Regulatory-compliant
              campaigns that reach high-intent audiences with personalized messaging.
            </p>
            <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:text-cyan-300 transition">
              <span>Finance Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          {/* Healthcare Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-emerald-600/50 rounded-xl p-8 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-600/20 to-emerald-600/10 rounded-lg flex items-center justify-center mb-6 group-hover:from-emerald-600/30 group-hover:to-emerald-600/20 transition-all">
              <Shield className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Healthcare</h3>
            <p className="text-slate-300 mb-6">
              HIPAA-aware marketing for providers, health plans, and medical services. Reach
              patients with compliant, privacy-first campaigns across all channels.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold group-hover:text-emerald-300 transition">
              <span>Healthcare Marketing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 lg:py-24 bg-gradient-to-r from-brand-600/10 via-slate-950 to-cyan-600/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            See How We Can Help Your Industry
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're in automotive, CPG, finance, or healthcare, we have the
            infrastructure and expertise to scale your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/50"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </Section>
    </div>
  );
}
