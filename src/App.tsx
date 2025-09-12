import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

// Service Pages
import FinancialServices from './pages/services/FinancialServices';
import AccountingServices from './pages/services/AccountingServices';
import NotaryServices from './pages/services/NotaryServices';
import InsuranceServices from './pages/services/InsuranceServices';

// Simple placeholder components for additional routes
const Privacy = () => (
  <div className="min-h-screen bg-gray-50 py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Gizlilik Politikası</h1>
      <div className="bg-white rounded-lg p-8 shadow-md">
        <p className="text-gray-600 mb-4">
          Bu sayfa yakında güncellenecek. Gizlilik politikamız hakkında bilgi almak için bizimle iletişime geçin.
        </p>
      </div>
    </div>
  </div>
);

const Terms = () => (
  <div className="min-h-screen bg-gray-50 py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Kullanım Şartları</h1>
      <div className="bg-white rounded-lg p-8 shadow-md">
        <p className="text-gray-600 mb-4">
          Bu sayfa yakında güncellenecek. Kullanım şartlarımız hakkında bilgi almak için bizimle iletişime geçin.
        </p>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          
          {/* Service Pages */}
          <Route path="/services/financial" element={<FinancialServices />} />
          <Route path="/services/accounting" element={<AccountingServices />} />
          <Route path="/services/notary" element={<NotaryServices />} />
          <Route path="/services/insurance" element={<InsuranceServices />} />
          
          {/* Legal Pages */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* 404 Page */}
          <Route path="*" element={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-8">Sayfa bulunamadı</p>
                <a 
                  href="/" 
                  className="bg-gradient-to-r from-[#1E272D] to-[#6B7473] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#2A363E] hover:to-[#7A8588] transition-all"
                >
                  Ana Sayfaya Dön
                </a>
              </div>
            </div>
          } />
        </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

export default App;