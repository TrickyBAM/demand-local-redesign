import { Section, SectionLabel, SectionTitle } from '../components/SharedUI'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Eye,
  Shield,
  Layers,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Search,
  Globe,
  Zap,
  Target
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

const scanSteps = [
  'Querying AI platforms',
  'Analyzing entity signals',
  'Benchmarking competitors',
  'Generating report'
]

const platformData = [
  { name: 'ChatGPT', mentions: 2, color: 'bg-green-500' },
  { name: 'Perplexity', mentions: 0, color: 'bg-blue-500' },
  { name: 'Gemini', mentions: 1, color: 'bg-yellow-500' },
  { name: 'Claude', mentions: 0, color: 'bg-purple-500' }
]

const issuesFound = [
  'Missing structured data markup (Schema.org)',
  'Inconsistent NAP (Name, Address, Phone)',
  'No AI-optimized content strategy',
  'Missing entity authority signals'
]

const frameworkPillars = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'GEO Scan',
    description: 'Audit brand visibility across AI platforms'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Entity Authority',
    description: 'Structure brand data for AI trust'
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Content Intelligence',
    description: 'Create AI-optimized content'
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Discovery Dashboard',
    description: 'Real-time AI mention tracking'
  }
]

const statsData = [
  { metric: '+120%', description: 'AI Visibility Lift' },
  { metric: '+35%', description: 'Lead Conversions' },
  { metric: '98%', description: 'Data Accuracy' }
]

const howItWorks = [
  { step: 'Scan', description: 'Discover how AI platforms see your brand' },
  { step: 'Analyze', description: 'Understand entity signals and gaps' },
  { step: 'Optimize', description: 'Implement AI-first strategies' },
  { step: 'Monitor', description: 'Track mentions and visibility in real-time' }
]

export default function AIDiscoveryPage() {
  const [dealershipName, setDealershipName] = useState('')
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [scanResults, setScanResults] = useState(null)

  const handleRunScan = () => {
    if (!dealershipName.trim()) return

    setIsScanning(true)
    setScanProgress(0)
    setScanResults(null)

    const progressInterval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setIsScanning(false)
          setScanResults({
            dealership: dealershipName,
            score: 23,
            platforms: platformData,
            issues: issuesFound
          })
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 400)
  }

  return (
    <div className="w-full min-h-screen bg-dash-bg overflow-hidden">
      {/* Hero Section */}
      <Section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-transparent to-purple-900/20" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
              AI-First Discovery
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            AI-First Discovery
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            People Don't Search Anymore. They Ask AI.
          </p>

          {/* GEO Scanner */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur border border-cyan-500/30 rounded-2xl p-8 md:p-12"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Enter your dealership name
              </label>
              <input
                type="text"
                value={dealershipName}
                onChange={(e) => setDealershipName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleRunScan()}
                placeholder="e.g., Downtown Auto Group"
                className="w-full px-6 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"
              />
            </div>

            <button
              onClick={handleRunScan}
              disabled={isScanning || !dealershipName.trim()}
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 mx-auto"
            >
              {isScanning ? 'Running Scan...' : 'Run GEO Scan'}
              <Search className="w-5 h-5" />
            </button>

            {/* Scan Progress */}
            <AnimatePresence>
              {isScanning && (
                <motion.div
                  className="mt-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <div className="space-y-4">
                    {scanSteps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            scanProgress / 25 > idx ? 'bg-cyan-400' : 'bg-slate-600'
                          }`}
                        />
                        <span className="text-slate-300 text-sm">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 bg-slate-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(scanProgress, 100)}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scan Results */}
            <AnimatePresence>
              {scanResults && (
                <motion.div
                  className="mt-12 space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* Score */}
                  <div className="text-center">
                    <p className="text-slate-400 text-sm mb-4">Your GEO Score</p>
                    <div className="flex justify-center mb-4">
                      <motion.div
                        className="relative w-32 h-32 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/20 border-4 border-red-500 flex items-center justify-center"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6, type: 'spring' }}
                      >
                        <div className="text-center">
                          <div className="text-4xl font-bold text-red-500">
                            {scanResults.score}
                          </div>
                          <div className="text-xs text-slate-400">/100</div>
                        </div>
                      </motion.div>
                    </div>
                    <p className="text-slate-300 text-sm">
                      Below industry average. Optimization needed.
                    </p>
                  </div>

                  {/* Platform Breakdown */}
                  <div>
                    <h4 className="text-white font-semibold mb-4 text-center">
                      AI Platform Mentions
                    </h4>
                    <div className="space-y-3">
                      {scanResults.platforms.map((platform, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-slate-300">
                              {platform.name}
                            </span>
                            <span className="text-sm font-semibold text-cyan-400">
                              {platform.mentions} mentions
                            </span>
                          </div>
                          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${platform.color}`}
                              initial={{ width: 0 }}
                              animate={{
                                width: `${(platform.mentions / 2) * 100}%`
                              }}
                              transition={{ duration: 0.6, delay: idx * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Issues Found */}
                  <div>
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      Issues Found
                    </h4>
                    <div className="space-y-2">
                      {scanResults.issues.map((issue, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex gap-3 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg"
                        >
                          <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-300 text-sm">{issue}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="block w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all text-center"
                  >
                    Want the full report? Request a GEO Audit
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </Section>

      {/* Framework Section */}
      <Section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>How It Works</SectionLabel>
            <SectionTitle>The Entity Authority Framework</SectionTitle>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-4">
              A comprehensive approach to making your brand visible and trustworthy
              to AI systems.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {frameworkPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative p-6 bg-slate-800/50 border border-slate-700 hover:border-cyan-400/50 rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="mb-4 text-cyan-400 group-hover:text-cyan-300 transition">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm">{pillar.description}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-transparent to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-xl transition pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="py-20 md:py-32 bg-gradient-to-r from-slate-900/50 via-cyan-900/20 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>Results That Matter</SectionLabel>
            <SectionTitle>The Impact of AI-First Discovery</SectionTitle>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center p-8 bg-slate-800/30 border border-slate-700 rounded-xl hover:border-cyan-400/50 transition"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.metric}
                </motion.div>
                <p className="text-slate-300 font-medium">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* How It Works Steps */}
      <Section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SectionLabel>The Process</SectionLabel>
            <SectionTitle>Your Path to AI Visibility</SectionTitle>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {howItWorks.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="relative">
                <div className="p-8 bg-slate-800/50 border border-slate-700 rounded-xl">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.step}
                  </h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>

                {/* Connecting Arrow */}
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-cyan-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-20 md:py-32 bg-gradient-to-r from-purple-900/30 via-transparent to-cyan-900/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Dominate AI Search?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get your free GEO audit and discover how visible your dealership is
              to AI platforms. No credit card required.
            </p>

            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-cyan-500/30 flex items-center gap-2"
            >
              Get Your Free GEO Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  )
}
