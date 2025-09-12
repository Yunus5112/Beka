import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';
import BekaLogo from '../../assets/BekaLogo.jpeg';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={BekaLogo} 
                alt="Beka Solutions Logo" 
                className="w-10 h-10 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">BEKA SOLUTIONS</h3>
                <p className="text-gray-300 text-sm">Boston Consulting Hub</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.companyInfo')}
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/financial" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.financialServices')}
                </Link>
              </li>
              <li>
                <Link to="/services/accounting" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.accountingServices')}
                </Link>
              </li>
              <li>
                <Link to="/services/notary" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.notaryServices')}
                </Link>
              </li>
              <li>
                <Link to="/services/insurance" className="text-gray-300 hover:text-white transition-colors">
                  {t('navigation.insuranceServices')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.contactInfo')}</h3>
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
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.workingHours')}</h3>
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
              className="inline-block bg-gradient-to-r from-[#1E272D] to-[#6B7473] text-white px-6 py-2 rounded-lg hover:from-[#2A363E] hover:to-[#7A8588] transition-all"
            >
              {t('common.appointment')}
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Beka Solutions. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
