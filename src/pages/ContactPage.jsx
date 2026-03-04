import { Section, SectionLabel, SectionTitle } from '../components/SharedUI';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Building2,
  Users,
  Send,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    companyType: '',
    numLocations: '',
    adSpendRange: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          companyName: '',
          companyType: '',
          numLocations: '',
          adSpendRange: '',
          message: '',
        });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const steps = [
    {
      number: '1',
      title: "We'll reach out within 24 hours",
      description: 'Our team will contact you to discuss your specific needs and goals.',
    },
    {
      number: '2',
      title: 'Schedule a personalized demo',
      description: "We'll arrange a time that works best for your team.",
    },
    {
      number: '3',
      title: 'See your data in the platform',
      description: 'Experience how Demand Local can transform your business.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <Section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-brand-dark/10 opacity-40" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center max-w-3xl mx-auto"
        >
          <SectionLabel>GET IN TOUCH</SectionLabel>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-4 mb-6">
            Let's Talk
          </h1>
          <p className="text-xl text-gray-600">
            Ready to transform your automotive advertising? Request a demo today and see how
            Demand Local can help your dealership grow.
          </p>
        </motion.div>
      </Section>

      {/* Contact Form + Company Info Section */}
      <Section className="py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Request Your Demo</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-2xl font-bold text-green-900 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  We'll be in touch within 24 hours. We're excited to show you what Demand Local
                  can do for your business.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Your Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                  />
                </div>

                {/* Company Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    I am a...*
                  </label>
                  <select
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="Dealership">Dealership</option>
                    <option value="Agency">Agency</option>
                    <option value="Dealer Group">Dealer Group</option>
                    <option value="OEM">OEM</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Number of Locations */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Locations
                  </label>
                  <input
                    type="text"
                    name="numLocations"
                    value={formData.numLocations}
                    onChange={handleChange}
                    placeholder="e.g., 3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition"
                  />
                </div>

                {/* Monthly Ad Spend Range */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Ad Spend Range
                  </label>
                  <select
                    name="adSpendRange"
                    value={formData.adSpendRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition bg-white"
                  >
                    <option value="">Select a range</option>
                    <option value="Under $10,000">Under $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000+">$100,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals..."
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      Request a Demo
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Address */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                      <p className="text-gray-600">1300 1st Street, Suite 368</p>
                      <p className="text-gray-600">Napa, CA 94559</p>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:1-888-315-9759" className="text-brand hover:text-brand-dark font-medium">
                        1-888-315-9759
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-brand" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday</p>
                      <p className="text-gray-600">9:00 AM - 6:00 PM PST</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              whileHover={{ y: -4 }}
              className="w-full h-64 bg-gray-100 border border-gray-300 rounded-lg flex flex-col items-center justify-center gap-3 hover:shadow-lg transition"
            >
              <MapPin className="w-8 h-8 text-gray-400" />
              <p className="text-gray-600 text-sm font-medium">
                1300 1st Street, Suite 368, Napa, CA 94559
              </p>
              <a
                href="https://maps.google.com/?q=1300+1st+Street+Suite+368+Napa+CA+94559"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:text-brand-dark text-sm font-medium mt-2"
              >
                View on Google Maps
              </a>
            </motion.div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 bg-gradient-to-br from-brand/5 to-brand-dark/5 rounded-lg p-6 border border-brand/10">
              <div className="text-center">
                <p className="text-2xl font-bold text-brand mb-1">17+</p>
                <p className="text-xs text-gray-600">Years in Business</p>
              </div>
              <div className="text-center border-l border-r border-gray-300">
                <p className="text-2xl font-bold text-brand mb-1">1,000+</p>
                <p className="text-xs text-gray-600">Dealerships Served</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-brand mb-1">100%</p>
                <p className="text-xs text-gray-600">Co-Op Compliant</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* What to Expect Section */}
      <Section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <SectionLabel>OUR PROCESS</SectionLabel>
            <SectionTitle>What to Expect</SectionTitle>
            <p className="text-gray-600 mt-4">
              We've streamlined our demo process to get you answers fast.
            </p>
          </motion.div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-brand to-transparent" />
                )}

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-2 pb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">
              Have questions before you demo? Give us a call or use the form above.
            </p>
            <a
              href="tel:1-888-315-9759"
              className="inline-flex items-center gap-2 text-brand hover:text-brand-dark font-semibold transition"
            >
              Call us: 1-888-315-9759
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
