import React from 'react';
import { Section, SectionLabel, SectionTitle } from '../components/SharedUI';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Tv,
  Smartphone,
  ShoppingCart,
  MapPin,
  BarChart3,
  Globe,
  Database,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Shield,
  Eye,
  Zap,
  Monitor,
  Target,
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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const channelData = [
  {
    id: 'sem',
    title: 'SEM (Search Engine Marketing)',
    icon: Search,
    description:
      'Geo-fenced precision targeting through Google Ads with real-time bid optimization and intelligent keyword management.',
    points: [
      'Geo-fenced Google Ads campaigns',
      'Real-time bid optimization engine',
      'Dynamic keyword management',
      'VDP conversion tracking',
    ],
  },
  {
    id: 'meta-inventory',
    title: 'Meta Dynamic Inventory',
    icon: Smartphone,
    description:
      'Live vehicle inventory feeds powering dynamic creative with lookalike audience expansion across Meta platforms.',
    points: [
      'Live vehicle inventory feed integration',
      'Dynamic creative optimization',
      'Lookalike audience expansion',
      'Conversion API tracking',
    ],
  },
  {
    id: 'meta-events',
    title: 'Meta Sales Events',
    icon: Smartphone,
    description:
      'Event-driven campaigns with seasonal promotions and co-op compliant creative for maximum dealership impact.',
    points: [
      'Event-driven campaign creation',
      'Seasonal promotion automation',
      'Co-op compliant creative generation',
      'Real-time performance optimization',
    ],
  },
  {
    id: 'google-vehicle',
    title: 'Google Vehicle Ads',
    icon: Search,
    description:
      'Leveraging Google\'s native vehicle listing ads with comprehensive inventory feed management and VDP click attribution.',
    points: [
      'Google vehicle listing ads',
      'Inventory feed management',
      'VDP click attribution',
      'Performance benchmarking',
    ],
  },
  {
    id: 'amazon',
    title: 'Amazon Ads',
    icon: ShoppingCart,
    description:
      'Dynamic vehicle acquisition campaigns with precision audience targeting and conquest marketing capabilities.',
    points: [
      'Dynamic vehicle acquisition campaigns',
      'Amazon audience targeting',
      'Conquest campaign strategies',
      'Shopping feed optimization',
    ],
  },
  {
    id: 'ctv',
    title: 'CTV/OTT (Connected & Over-The-Top TV)',
    icon: Tv,
    description:
      'Programmatic TV advertising by zip code with precise household demographics and completion rate tracking.',
    points: [
      'Programmatic TV by zip code',
      'Household demographic targeting',
      'Completion rate tracking',
      'Video creative optimization',
    ],
  },
  {
    id: 'dooh',
    title: 'Digital Out-of-Home (DOOH)',
    icon: MapPin,
    description:
      'Digital billboards and gas station screens with place-based media and geo-targeting for local impact.',
    points: [
      'Digital billboard placements',
      'Gas station screen networks',
      'Place-based media targeting',
      'Geo-fencing integration',
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory Marketing',
    icon: Database,
    description:
      'Real inventory in real ads with automated feed management and VIN-level tracking for precision marketing.',
    points: [
      'Real inventory ad placement',
      'Automated feed management',
      'VIN-level tracking',
      'Multi-feed orchestration',
    ],
  },
  {
    id: 'multicultural',
    title: 'Multicultural Marketing',
    icon: Globe,
    description:
      'Spanish-language campaigns with culturally-targeted creative and diverse media placements for broader reach.',
    points: [
      'Spanish-language campaign creation',
      'Culturally-targeted creative',
      'Diverse media placements',
      'Audience segmentation',
    ],
  },
];

const linkOneFeatures = [
  {
    icon: Database,
    title: 'Data Ingestion',
    description:
      'Seamlessly connect your CRM and DMS data into our proprietary platform for real-time insights.',
  },
  {
    icon: Target,
    title: 'Audience Activation',
    description:
      'Transform raw data into precision audiences across all advertising channels instantly.',
  },
  {
    icon: BarChart3,
    title: 'Attribution Engine',
    description:
      'Track every touchpoint from first click to sale with comprehensive cross-channel attribution.',
  },
  {
    icon: Shield,
    title: 'Compliance Automation',
    description:
      'Built-in compliance checks ensure all campaigns meet regulatory and co-op requirements automatically.',
  },
];

const ChannelCard = ({ channel, index }) => (
  <motion.div
    variants={itemVariants}
    className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 hover:border-cyan-500/50 transition-colors duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-lg transition-colors duration-300" />

    <div className="relative z-10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500/20 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
            <channel.icon className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">{channel.title}</h3>
        </div>
      </div>

      <p className="text-slate-300 text-sm mb-6">{channel.description}</p>

      <ul className="space-y-2">
        {channel.points.map((point, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const LinkOneCard = ({ feature, index }) => (
  <motion.div
    variants={itemVariants}
    className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors duration-300"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-500/20 rounded-lg">
        <feature.icon className="w-5 h-5 text-blue-400" />
      </div>
      <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
    </div>
    <p className="text-slate-400 text-sm">{feature.description}</p>
  </motion.div>
);

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <Section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <SectionLabel>OUR PLATFORM</SectionLabel>

          <h1 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
            The Platform Behind Nearly 1,000 Dealerships
          </h1>

          <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
            LinkOne Data is our proprietary first-party data platform that powers precision
            automotive advertising across every channel. From SEM to CTV, from inventory feeds to
            multicultural marketing—we orchestrate it all with real dealership data at the core.
          </p>
        </motion.div>
      </Section>

      {/* LinkOne Data Overview */}
      <Section className="py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <SectionLabel>LINKONE DATA</SectionLabel>
            <SectionTitle>Proprietary First-Party Data Platform</SectionTitle>
            <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
              Ingest your CRM and DMS data, activate precision audiences, track attribution, and
              automate compliance across all channels.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {linkOneFeatures.map((feature, index) => (
              <LinkOneCard key={feature.title} feature={feature} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* Channel Deep-Dives */}
      <Section className="py-20 md:py-28 bg-slate-900/50">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <SectionLabel>NINE CHANNELS</SectionLabel>
            <SectionTitle>Channel-Specific Solutions</SectionTitle>
            <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
              Each channel is powered by LinkOne Data with tailored strategies, real-time
              optimization, and dealership-first creative.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {channelData.map((channel, index) => (
              <ChannelCard key={channel.id} channel={channel} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-12">
            <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See How It All Works Together
            </h2>

            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Schedule a demo to see how LinkOne Data powers precision automotive advertising
              across all nine channels.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:gap-3"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
