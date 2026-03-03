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
  { name: 'ChatGPT', mentions: 2, color: 'bg-green-50' },
  { name: 'Perplexity', mentions: 0, color: 'bg-blue-50' },
  { name: 'Gemini', mentions: 1, color: 'bg-yellow-50' },
  { name: 'Claude', mentions: 0, color: 'bg-purple-50' }
]

const issuesFound = [
  'Missing structured data markup (Schema.org)',
  'Inconsistent NAP (Name, Address, Phone)',
  'No AI-optimized content strategy',
  'Missing entity authority signals'
]

const frameworkPillars = [
  {
    icon: 'Search',
    title: 'GEO Scan',
    description: 'Audit brand visibility across AI platforms'
  },
  {
    icon: 'Shield',
    title: 'Entity Authority",
    description: 'Structure brand data for AI trust'
  },
  {
    icon: 'Layers',
    title: 'Content Intelligence',
    description: 'Create AI-optimized content'
  },
  {
    icon: 'BarChart3',
    title: 'Discovery Dashboard',
    description: 'Real-time AI mention tracking'
  }
]

export default function AIDiscoveryPage() {
  return <div><section>AI Discovery Page</section></div>
}
