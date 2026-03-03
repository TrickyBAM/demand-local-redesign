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
            <Car className="v-4 h-4" />
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
