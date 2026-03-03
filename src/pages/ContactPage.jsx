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