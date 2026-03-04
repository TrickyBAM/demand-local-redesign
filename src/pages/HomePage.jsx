import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart3,
  TrendingUp,
  MapPin,
  Calculator,
  Radio,
  Users,
  Target,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Play,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Section,
  SectionLabel,
  SectionTitle,
  useCountUp,
  DemoModal,
  DLLogoImage,
} from '../components/SharedUI';

// Mock data for dashboard
const dashboardData = {
  overview: [
    { month: 'Jan', spend: 4000, roi: 120 },
    { month: 'Feb', spend: 3500, roi: 130 },
    { month: 'Mar', spend: 5200, roi: 125 },
    { month: 'Apr', spend: 4800, roi: 140 },
  ],
  campaigns: [
    { name: 'SEM', status: 'Active', spend: 8500, leads: 245 },
    { name: 'Meta', status: 'Active', spend: 6200, leads: 189 },
    { name: 'CTV', status: 'Active', spend: 4300, leads: 67 },
  ],
};

// Stat Counter Component
function StatCounter({ target, label, suffix = '' }) {
  const [count, ref] = useCountUp(target);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-mono text-3xl font-bold text-brand mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </motion.div>
  );
}

// Hero Section
function HeroSection() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <Section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <SectionLabel>The Future of Automotive Marketing</SectionLabel>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mt-4 mb-6">
          The AI-Powered Ad Infrastructure Auto Dealers Are{' '}
          <span className="text-brand">Built On</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          17+ years of expertise. 1,000+ dealerships. $25M in annual co-op recovered.
          100% OEM compliant.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12 py-12 border-y border-gray-200">
          <StatCounter target={17} label="Years of Expertise" suffix="+" />
          <StatCounter target={1000} label="Active Dealerships" />
          <StatCounter target={25} label="Annual Co-Op Recovered" suffix="M" />
          <StatCounter target={100} label="OEM Compliant" suffix="%" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={() => setShowDemo(true)}
            className="px-8 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition transform hover:scale-105"
          >
            Request a Demo
          </button>
          <Link
            to="/platform"
            className="px-8 py-3 border-2 border-brand text-brand hover:bg-brand hover:text-white font-semibold rounded-lg transition"
          >
            See the Platform <ArrowRight className="inline ml-2" size={18} />
          </Link>
        </div>

        {/* Demo Modal */}
        {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
      </motion.div>
    </Section>
  );
}

// About/Timeline Section
function AboutSection() {
  const milestones = [
    { year: '2008', label: 'Founded by Ray Bhatia & Mike Machado in San Francisco' },
    { year: '2012', label: 'Expanded to 100+ dealerships' },
    { year: '2016', label: 'Introduced AI-powered attribution' },
    { year: '2020', label: 'Co-Op Platform launched' },
    { year: '2024', label: 'Recovered $100M in co-op funds' },
    { year: '2025', label: 'Enterprise AI Suite released' },
  ];

  return (
    <Section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Our Story</SectionLabel>
            <SectionTitle>Why Demand Local</SectionTitle>
            <p className="text-lg text-gray-600 mt-4 mb-6">
              Founded in 2008 by Ray Bhatia and Mike Machado, Demand Local was born
              from a simple insight: automotive dealers were leaving millions of dollars
              in co-op funds on the table.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Over 17 years, we've built the most trusted ad infrastructure for the
              automotive industry, helping dealerships unlock their full potential.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-brand font-semibold hover:text-brand-dark transition"
            >
              Learn More <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>

          {/* Right side - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-brand text-white font-mono font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono font-bold text-brand text-sm">
                      {milestone.year}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{milestone.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

// Dashboard Preview Section
function DashboardSection() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'campaigns', label: 'Campaigns', icon: Target },
    { id: 'attribution', label: 'Walk-In Attribution', icon: MapPin },
    { id: 'coop', label: 'Co-Op Tracker', icon: TrendingUp },
  ];

  return (
    <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Interactive Preview</SectionLabel>
          <SectionTitle>Your Dashboard Awaits</SectionTitle>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl">
            Real-time insights into your campaigns, co-op recovery, and dealer
            performance across all channels.
          </p>
        </motion.div>

        {/* Dashboard Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
        >
          {/* Browser Chrome */}
          <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs text-gray-600 font-mono flex-1 text-center">
              demand-local.com/dashboard
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8 bg-dash-bg text-white">
            {/* Header */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Bay Area Toyota Group</h3>
              <p className="text-gray-400 text-sm">4 Locations</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-dash-border">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold transition border-b-2 -mb-[2px] ${
                      isActive
                        ? 'text-cyan border-cyan'
                        : 'text-gray-400 border-transparent hover:text-gray-300'
                    }`}
                  >
                    <Icon size={16} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-dash-card rounded-lg p-4 border border-dash-border">
                    <p className="text-gray-400 text-sm mb-2">Total Ad Spend</p>
                    <p className="text-2xl font-mono font-bold text-cyan">
                      $17,500
                    </p>
                  </div>
                  <div className="bg-dash-card rounded-lg p-4 border border-dash-border">
                    <p className="text-gray-400 text-sm mb-2">ROI</p>
                    <p className="text-2xl font-mono font-bold text-green-400">
                      128%
                    </p>
                  </div>
                  <div className="bg-dash-card rounded-lg p-4 border border-dash-border">
                    <p className="text-gray-400 text-sm mb-2">Leads Generated</p>
                    <p className="text-2xl font-mono font-bold text-cyan">501</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-dash-card rounded-lg p-6 border border-dash-border">
                  <p className="text-gray-400 text-sm mb-4">Spend vs ROI Trend</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={dashboardData.overview}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#334155"
                      />
                      <XAxis dataKey="month" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          border: '1px solid #334155',
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="roi"
                        stroke="#06b6d4"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}

            {activeTab === 'campaigns' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  {dashboardData.campaigns.map((campaign, idx) => (
                    <div
                      key={idx}
                      className="bg-dash-card rounded-lg p-4 border border-dash-border"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-white">
                            {campaign.name}
                          </p>
                          <p className="text-sm text-green-400">
                            {campaign.status}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono text-cyan">
                            ${campaign.spend.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-400">
                            {campaign.leads} leads
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'attribution' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-dash-card rounded-lg p-6 border border-dash-border">
                  <p className="text-gray-400 text-sm mb-4">Walk-In Attribution</p>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={dashboardData.overview}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#334155"
                      />
                      <XAxis dataKey="month" stroke="#94a3b8" />
                      <YAxis stroke="#94a3b8" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1e293b',
                          border: '1px solid #334155',
                        }}
                      />
                      <Bar dataKey="spend" fill="#06b6d4" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            )}

            {activeTab === 'coop' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <div className="bg-dash-card rounded-lg p-4 border border-dash-border">
                    <p className="text-gray-400 text-sm mb-2">
                      Available Co-Op Funds
                    </p>
                    <p className="text-3xl font-mono font-bold text-cyan">
                      $8,500
                    </p>
                  </div>
                  <div className="bg-dash-card rounded-lg p-4 border border-dash-border">
                    <p className="text-gray-400 text-sm mb-2">Co-Op Claimed</p>
                    <p className="text-3xl font-mono font-bold text-green-400">
                      $4,200
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// Co-Op Calculator Section
function CoOpCalculatorSection() {
  const [monthlySpend, setMonthlySpend] = useState(25000);
  const [selectedOEM, setSelectedOEM] = useState('toyota');

  const oems = {
    toyota: { name: 'Toyota', rate: 0.35 },
    honda: { name: 'Honda', rate: 0.3 },
    ford: { name: 'Ford', rate: 0.28 },
    chevrolet: { name: 'Chevrolet', rate: 0.32 },
  };

  const oemData = oems[selectedOEM];
  const annualCoOp = monthlySpend * 12 * oemData.rate;
  const industryUnclaimed = annualCoOp * 0.4;
  const dlRecovery = industryUnclaimed * 0.75;

  return (
    <Section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Interactive Tool</SectionLabel>
          <SectionTitle>Co-Op Calculator</SectionTitle>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover how much co-op funding you could recover with Demand Local.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200"
        >
          {/* OEM Selector */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Select OEM
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(oems).map(([key, oem]) => (
                <button
                  key={key}
                  onClick={() => setSelectedOEM(key)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedOEM === key
                      ? 'bg-brand text-white'
                      : 'bg-white border border-gray-200 text-gray-700 hover:border-brand'
                  }`}
                >
                  {oem.name}
                </button>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-900 mb-4">
              Monthly Ad Spend
            </label>
            <div className="space-y-4">
              <input
                type="range"
                min="5000"
                max="100000"
                step="1000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand"
              />
              <div className="flex justify-between text-sm text-gray-600">
                <span>$5,000</span>
                <span className="font-mono font-bold text-brand text-lg">
                  ${monthlySpend.toLocaleString()}
                </span>
                <span>$100,000</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-center"
            >
              <p className="text-gray-600 text-sm mb-2">Annual Co-Op Available</p>
              <p className="font-mono font-bold text-2xl text-brand">
                ${annualCoOp.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-center"
            >
              <p className="text-gray-600 text-sm mb-2">Industry Unclaimed (40%)</p>
              <p className="font-mono font-bold text-2xl text-orange-600">
                ${industryUnclaimed.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-center"
            >
              <p className="text-gray-600 text-sm mb-2">DL Can Recover (75%)</p>
              <p className="font-mono font-bold text-2xl text-cyan-600">
                ${dlRecovery.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

// GEO Scanner Section
function GEOScannerSection() {
  const [dealershipName, setDealershipName] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const handleScan = () => {
    if (!dealershipName.trim()) return;

    setIsScanning(true);
    setScanProgress(0);
    setScanComplete(false);

    // Simulate scan progress
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanComplete(true);
          return 100;
        }
        return prev + 25;
      });
    }, 500);
  };

  const scanSteps = [
    'Analyzing Digital Footprint',
    'Scanning Ad Performance',
    'Comparing Competitors',
    'Identifying Optimization Opportunities',
  ];

  return (
    <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Digital Audit Tool</SectionLabel>
          <SectionTitle>GEO Scanner</SectionTitle>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Get a comprehensive scan of your dealership's digital marketing health in
            seconds.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl p-8 border border-gray-200"
        >
          {/* Input */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <input
              type="text"
              placeholder="Enter dealership name..."
              value={dealershipName}
              onChange={(e) => setDealershipName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleScan()}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
            />
            <button
              onClick={handleScan}
              disabled={isScanning || !dealershipName.trim()}
              className="px-6 py-3 bg-brand hover:bg-brand-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition"
            >
              {isScanning ? 'Scanning...' : 'Start Scan'}
            </button>
          </div>

          {/* Scanning Progress */}
          {isScanning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 mb-8"
            >
              {scanSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      scanProgress > idx * 25
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {scanProgress > idx * 25 ? '✓' : idx + 1}
                  </div>
                  <span className="text-gray-700 font-medium">{step}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Results */}
          {scanComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Score */}
              <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <div>
                  <p className="text-gray-600 text-sm mb-1">Overall Score</p>
                  <p className="font-mono font-bold text-4xl text-brand">23</p>
                </div>
                <div className="text-3xl">⚠️</div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700 font-medium">
                    Significant optimization opportunities identified
                  </p>
                </div>
              </div>

              {/* Findings */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-3">Issues Found</h4>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>✓ SEM campaign underperforming</li>
                    <li>✓ Meta ads not geo-targeted</li>
                    <li>✓ Missing walk-in attribution tracking</li>
                    <li>✓ Co-Op funds unclaimed</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-3">
                    What We Can Help With
                  </h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>✓ Recover $12,500 annual co-op</li>
                    <li>✓ Optimize paid search performance</li>
                    <li>✓ Enable precise geo-targeting</li>
                    <li>✓ Track dealer walk-in attribution</li>
                  </ul>
                </div>
              </div>

              {/* Competitors */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Competitor Comparison</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Your Score</span>
                    <span className="font-mono font-bold text-brand">23/100</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Local Competitor Avg</span>
                    <span className="font-mono font-bold text-orange-600">
                      31/100
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Top Performers</span>
                    <span className="font-mono font-bold text-green-600">
                      58/100
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </Section>
  );
}

// Channel Stack Section
function ChannelStackSection() {
  const channels = [
    { name: 'SEM', icon: BarChart3, color: 'from-blue-500 to-blue-600' },
    { name: 'Connected TV', icon: Radio, color: 'from-purple-500 to-purple-600' },
    { name: 'Meta Dynamic Ads', icon: Target, color: 'from-pink-500 to-pink-600' },
    { name: 'Amazon Ads', icon: TrendingUp, color: 'from-orange-500 to-orange-600' },
    { name: 'Digital OOH', icon: MapPin, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Walk-In Attribution', icon: Users, color: 'from-green-500 to-green-600' },
    { name: 'Multicultural Marketing', icon: Users, color: 'from-indigo-500 to-indigo-600' },
    { name: 'LinkOne Data Platform', icon: ShieldCheck, color: 'from-red-500 to-red-600' },
    { name: 'AI-First Discovery', icon: BarChart3, color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <Section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Comprehensive Suite</SectionLabel>
          <SectionTitle>Channel Stack</SectionTitle>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            All the channels your dealership needs, integrated into one unified
            platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {channels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                className={`bg-gradient-to-br ${channel.color} rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition transform hover:scale-105`}
              >
                <Icon size={32} className="mb-4" />
                <h3 className="font-semibold text-lg">{channel.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

// Industries Section
function IndustriesSection() {
  const industries = [
    {
      name: 'Automotive',
      description: 'Our core expertise',
      gradient: 'from-blue-500 to-blue-600',
      featured: true,
    },
    {
      name: 'Multicultural Marketing',
      description: 'Reach diverse communities',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      name: 'CPG',
      description: 'Drive retail performance',
      gradient: 'from-green-500 to-green-600',
    },
    {
      name: 'Finance',
      description: 'Lead generation at scale',
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      name: 'Healthcare',
      description: 'Patient acquisition',
      gradient: 'from-red-500 to-red-600',
    },
  ];

  return (
    <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Vertical Solutions</SectionLabel>
          <SectionTitle>Industries We Serve</SectionTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className={`bg-gradient-to-br ${industry.gradient} rounded-lg p-6 text-white shadow-lg ${
                industry.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
              <p className="text-white/80">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Dual Path Section
function DualPathSection() {
  const paths = [
    {
      title: 'For Agencies',
      description: 'White-label solutions for your clients',
      points: [
        'Unified dashboard across all clients',
        'Co-Op recovery & optimization',
        'Real-time attribution tracking',
        'Custom reporting & analytics',
        'Dedicated account management',
      ],
      cta: 'Become a Partner',
      ctaLink: '/contact',
    },
    {
      title: 'For Dealer Groups',
      description: 'Enterprise platform for multi-location dealers',
      points: [
        'Centralized budget management',
        'Performance across all locations',
        'Consistent brand messaging',
        'Advanced targeting & attribution',
        '24/7 support & optimization',
      ],
      cta: 'Request Demo',
      ctaLink: '/contact',
    },
  ];

  return (
    <Section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Solutions</SectionLabel>
          <SectionTitle>We Serve Everyone</SectionTitle>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {paths.map((path, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {path.title}
              </h3>
              <p className="text-gray-600 mb-6">{path.description}</p>

              <ul className="space-y-3 mb-8">
                {path.points.map((point, pidx) => (
                  <li key={pidx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={path.ctaLink}
                className="inline-flex items-center px-6 py-3 bg-brand hover:bg-brand-dark text-white font-semibold rounded-lg transition"
              >
                {path.cta}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Trust Section
function TrustSection() {
  const partners = [
    'Tier10',
    'Force Marketing',
    'PCG Digital',
    'Stream Companies',
    'Drive Auto',
    'Digital Velocity',
    'Accel Marketing',
    'Prime Media Group',
    'Automotive Digital',
  ];

  return (
    <Section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <SectionLabel>Industry Leaders Trust Us</SectionLabel>
          <SectionTitle>Our Partners</SectionTitle>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition"
            >
              <span className="text-gray-600 font-semibold text-center text-sm">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Final CTA Section
function FinalCTASection() {
  return (
    <Section className="py-20 bg-gradient-to-r from-brand-darker via-brand-dark to-brand-darker text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to See Your Data in the Real Platform?
          </h2>

          <p className="text-lg text-cyan-100 mb-8">
            Join 1,000+ dealerships already using Demand Local to grow their
            business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-brand-dark hover:bg-gray-100 font-semibold rounded-lg transition transform hover:scale-105"
            >
              Request a Demo
            </Link>
          </div>

          <p className="text-cyan-200 text-lg font-semibold">
            Call us: <span className="text-white font-mono">1-888-315-9759</span>
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

// Main HomePage Component
export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <AboutSection />
      <DashboardSection />
      <CoOpCalculatorSection />
      <GEOScannerSection />
      <ChannelStackSection />
      <IndustriesSection />
      <DualPathSection />
      <TrustSection />
      <FinalCTASection />
    </main>
  );
}
