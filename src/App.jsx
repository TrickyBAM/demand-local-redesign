import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer, CreditBanner, ScrollToTop } from './components/SharedUI';
import HomePage from './pages/HomePage';
import PlatformPage from './pages/PlatformPage';
import AIDiscoveryPage from './pages/AIDiscoveryPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white pb-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/ai-discovery" element={<AIDiscoveryPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <CreditBanner />
      </div>
    </Router>
  );
}
