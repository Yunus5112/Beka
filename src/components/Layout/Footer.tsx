import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">BEKA SOLUTIONS</h3>
                <p className="text-gray-300 text-sm">Boston Consulting Hub</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Profesyonel danışmanlık hizmetleri ile işletmenizin büyümesine katkıda bulunuyoruz.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/financial" className="text-gray-300 hover:text-white transition-colors">
                  Finansal Danışmanlık
                </Link>
              </li>
              <li>
                <Link to="/services/accounting" className="text-gray-300 hover:text-white transition-colors">
                  Muhasebe Servisi
                </Link>
              </li>
              <li>
                <Link to="/services/notary" className="text-gray-300 hover:text-white transition-colors">
                  Noterlik ve Tercümanlık
                </Link>
              </li>
              <li>
                <Link to="/services/insurance" className="text-gray-300 hover:text-white transition-colors">
                  Sigorta Hizmetleri
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim Bilgileri</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1-857-343-3120</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">bostonconsultinghub@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">420 Lincoln Ave Saugus MA 01906</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">www.bostonconsultinghub.com</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Çalışma Saatleri</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Pazartesi - Cuma</p>
                  <p className="text-sm text-gray-400">09:00 - 18:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-gray-300">Cumartesi</p>
                  <p className="text-sm text-gray-400">10:00 - 16:00</p>
                </div>
              </div>
              <div className="text-gray-300">
                <p>Pazar: Kapalı</p>
              </div>
            </div>
            <Link
              to="/appointment"
              className="inline-block bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-green-600 transition-all"
            >
              Randevu Al
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Beka Solutions. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Gizlilik Politikası
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
