import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WhatsAppIcon from './components/WhatsAppIcon';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './styles/GradientHeaders.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ProductsPage from './pages/ProductsPage';
import VideosPage from './pages/VideosPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import ResidentialVastuPage from './pages/ResidentialVastuPage';
import CommercialVastuPage from './pages/CommercialVastuPage';
import HealthRelationshipPage from './pages/HealthRelationshipPage';
import NumerologyPage from './pages/NumerologyPage';
import PersonalNumerologyPage from './pages/PersonalNumerologyPage';
import AstrologyPage from './pages/AstrologyPage';
import AdvanceEnergyVastuPage from './pages/AdvanceEnergyVastuPage';
import VastuRitualsPage from './pages/VastuRitualsPage';
import BrahmNabhiPage from './pages/BrahmNabhiPage';
import EnergyBoosterPage from './pages/EnergyBoosterPage';
import NewConstructionVastuPage from './pages/NewConstructionVastuPage';
import ApartmentSelectionPage from './pages/ApartmentSelectionPage';
import NameCorrectionPage from './pages/NameCorrectionPage';
import MobileNumerologyPage from './pages/MobileNumerologyPage';
import HoroscopeAnalysisPage from './pages/HoroscopeAnalysisPage';
import CareerBusinessGuidancePage from './pages/CareerBusinessGuidancePage';
import MarriageCompatibilityPage from './pages/MarriageCompatibilityPage';
import NamankaranSanskarPage from './pages/NamankaranSanskarPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <WhatsAppIcon />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/services/residential-vastu" element={<ResidentialVastuPage />} />
            <Route path="/services/commercial-vastu" element={<CommercialVastuPage />} />
            <Route path="/services/new-construction-vastu" element={<NewConstructionVastuPage />} />
            <Route path="/services/apartment-selection" element={<ApartmentSelectionPage />} />
            <Route path="/services/advance-energy-enhancement" element={<AdvanceEnergyVastuPage />} />
            <Route path="/services/health-relationship" element={<HealthRelationshipPage />} />
            <Route path="/services/numerology-pronology" element={<NumerologyPage />} />
            <Route path="/services/personal-numerology" element={<PersonalNumerologyPage />} />
            <Route path="/services/name-correction" element={<NameCorrectionPage />} />
            <Route path="/services/mobile-numerology" element={<MobileNumerologyPage />} />
            <Route path="/services/horoscope-analysis" element={<HoroscopeAnalysisPage />} />
            <Route path="/services/career-business-guidance" element={<CareerBusinessGuidancePage />} />
            <Route path="/services/marriage-compatibility" element={<MarriageCompatibilityPage />} />
            <Route path="/services/namankaran-sanskar" element={<NamankaranSanskarPage />} />
            <Route path="/services/astrology" element={<AstrologyPage />} />
            <Route path="/services/advance-energy-vastu" element={<AdvanceEnergyVastuPage />} />
            <Route path="/services/vastu-rituals" element={<VastuRitualsPage />} />
            <Route path="/services/brahm-nabhi" element={<BrahmNabhiPage />} />
            <Route path="/services/energy-booster" element={<EnergyBoosterPage />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
