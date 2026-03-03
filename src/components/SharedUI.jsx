import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight, ExternalLink, Phone, Menu, X, Target, ChevronDown
} from 'lucide-react';

// ─── LOGO ────────────────────────────────────────────────────────────
export const DLLogoImage = ({ variant = 'white', className = '' }) => (
  <img
    src="https://www.demandlocal.com/wp-content/uploads/2024/11/White-Full-Demand-Local-big.png"
    alt="Demand Local"
    className={`h-8 ${className}`}
    style={variant === 'dark' ? { filter: 'brightness(0) saturate(100%)' } : {}}
  />
);

// ─── ANIMATED COUNTER ────────────────────────────────────────────────
export function useCountUp(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnView) { setStarted(true); return; }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return [count, ref];
}

// ─── SECTION WRAPPER ─────────────────────────────────────────────────
export const Section = ({ children, className = '', id, dark = false }) => (
  <section id={id} className={`py-20 md:py-28 ${dark ? 'bg-dash-bg text-white' : 'bg-white text-slate-900'} ${className}`}>
    <div className="max-w-7xl mx-auto px-5 md:px-8">{children}</div>
  </section>
);

export const SectionLabel = ({ children }) => (
  <span className="inline-block text-sm font-semibold text-brand uppercase tracking-widest mb-3">{children}</span>
);

export const SectionTitle = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${className}`}>{children}</h2>
);

// ─── DEMO MODAL (only on homepage) ──────────────────────────────────
export const DemoModal = ({ open, onClose }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 md:p-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
            <X size={20} />
          </button>
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
            <Target className="text-brand" size={24} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">This is where the form goes.</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Every interactive element on this page — the dashboard, the GEO scanner, the co-op calculator — all drive here. One conversion point, no dead ends.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            The current site buries the form at the bottom with no reason to fill it out. This version gives dealers a reason to <em>want</em> the demo first.
          </p>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-6">
            <p className="text-sm text-slate-500 font-medium">
              Note for Mike: In production, this would be a HubSpot/Salesforce form capture with fields for dealership name, OEM brands, monthly ad spend, and contact info.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-gradient-to-r from-brand to-brand-dark text-white font-semibold rounded-xl hover:from-brand-dark hover:to-brand-darker transition-all duration-200"
          >
            Got It
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ─── NAVBAR ──────────────────────────────────────────────────────────
export const Navbar = ({ onDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  const navLinks = [
    { label: 'Platform', to: '/platform' },
    { label: 'AI Discovery', to: '/ai-discovery' },
    { label: 'Industries', to: '/industries' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-100' : 'bg-white/70 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://www.demandlocal.com/wp-content/uploads/2024/11/White-Full-Demand-Local-big.png"
            alt="Demand Local"
            className="h-7 md:h-8"
            style={{ filter: 'brightness(0) saturate(100%)' }}
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link
              key={l.label}
              to={l.to}
              className={`text-sm font-medium transition-colors ${isActive(l.to) ? 'text-brand' : 'text-slate-600 hover:text-slate-900'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="https://app.link1data.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-500 hover:text-brand transition-colors flex items-center gap-1">
            LinkOne Login <ExternalLink size={13} />
          </a>
          <Link
            to="/contact"
            className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-brand to-brand-dark hover:from-brand-dark hover:to-brand-darker shadow-md shadow-blue-500/20 transition-all duration-200"
          >
            Request a Demo
          </Link>
        </div>
        <button className="md:hidden text-slate-700" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="p-5 space-y-4">
              {navLinks.map(l => (
                <Link key={l.label} to={l.to} className={`block text-base font-medium ${isActive(l.to) ? 'text-brand' : 'text-slate-700'}`}>{l.label}</Link>
              ))}
              <a href="https://app.link1data.com" target="_blank" rel="noopener noreferrer" className="block text-base font-medium text-slate-500">LinkOne Login</a>
              <Link to="/contact" className="block w-full py-3 bg-gradient-to-r from-brand to-brand-dark text-white font-semibold rounded-lg text-center">Request a Demo</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// ─── FOOTER ──────────────────────────────────────────────────────────
export const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <div className="lg:col-span-2">
          <img
            src="https://www.demandlocal.com/wp-content/uploads/2024/11/White-Full-Demand-Local-big.png"
            alt="Demand Local"
            className="h-8 mb-4"
          />
          <p className="text-sm leading-relaxed mb-3 max-w-sm">
            AI-powered data analytics and advertising platform for automotive dealerships and their agencies. Serving nearly 1,000 dealerships across North America since 2008.
          </p>
          <p className="text-sm">1300 1st Street, Suite 368<br />Napa, CA 94559</p>
          <p className="text-sm mt-1">1-888-315-9759</p>
          <div className="flex gap-3 mt-4">
            {[
              { href: 'https://www.linkedin.com/company/demand-local', label: 'LinkedIn' },
              { href: 'https://www.instagram.com/demand_local/', label: 'Instagram' },
              { href: 'https://www.facebook.com/demandlocal', label: 'Facebook' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand transition-colors flex items-center justify-center text-xs font-bold text-slate-400 hover:text-white"
              >
                {s.label[0] + s.label[1]}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { label: 'LinkOne Data', to: '/platform' },
              { label: 'Inventory Marketing', to: '/platform' },
              { label: 'Facebook Ads', to: '/platform' },
              { label: 'Google Ads', to: '/platform' },
              { label: 'Connected TV', to: '/platform' },
              { label: 'Digital OOH', to: '/platform' },
              { label: 'AI-First Discovery', to: '/ai-discovery' },
            ].map(l => (
              <li key={l.label}><Link to={l.to} className="hover:text-white transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Industries</h4>
          <ul className="space-y-2.5 text-sm">
            {['Automotive', 'Multicultural', 'CPG', 'Finance', 'Healthcare'].map(l => (
              <li key={l}><Link to="/industries" className="hover:text-white transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Team</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs">&copy; 2026 Demand Local, Inc. All rights reserved.</p>
        <a href="https://app.link1data.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors flex items-center gap-1">
          LinkOne Login <ExternalLink size={11} />
        </a>
      </div>
    </div>
  </footer>
);

// ─── CREDIT BANNER ───────────────────────────────────────────────────
export const CreditBanner = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand py-2.5 px-4 text-center">
    <p className="text-xs font-medium text-white/90">
      REDESIGN CONCEPT — Prepared by Brian Machado using AI tools | For discussion with Mike Machado
    </p>
  </div>
);

// ─── SCROLL TO TOP ON ROUTE CHANGE ──────────────────────────────────
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
