import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Calendar } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Home = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('services.financial.title'),
      description: t('services.financial.description'),
      icon: TrendingUp,
      link: '/services/financial'
    },
    {
      title: t('services.accounting.title'),
      description: t('services.accounting.description'),
      icon: Award,
      link: '/services/accounting'
    },
    {
      title: t('services.notary.title'),
      description: t('services.notary.description'),
      icon: CheckCircle,
      link: '/services/notary'
    },
    {
      title: t('services.insurance.title'),
      description: t('services.insurance.description'),
      icon: Users,
      link: '/services/insurance'
    }
  ];

  const features = [
    t('services.features.0') || 'Uzman kadro ile profesyonel hizmet',
    t('services.features.1') || 'Türkçe ve İngilizce dillerinde destek',
    t('services.features.2') || 'Boston bölgesinde güvenilir partner',
    t('services.features.3') || '7/24 müşteri desteği'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E272D] via-[#2A363E] to-[#6B7473] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {t('hero.title')}
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100 mb-4">
                  {t('hero.subtitle')}
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointment"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>{t('common.appointment')}</span>
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>{t('common.services')}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-center">{t('hero.quickContact')}</h3>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-blue-100">{t('hero.phoneLabel')}</p>
                    <p className="text-xl font-semibold">+1-857-343-3120</p>
                  </div>
                  <div>
                    <p className="text-blue-100">{t('hero.emailLabel')}</p>
                    <p className="text-lg">bostonconsultinghub@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-blue-100">{t('hero.addressLabel')}</p>
                    <p className="text-lg">420 Lincoln Ave Saugus MA 01906</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    {t('services.seeDetails')}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('services.whyChooseUs')}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t('services.whyChooseUsDesc')}
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">{t('services.stats.happyClients')}</div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-gray-600">{t('services.stats.experience')}</div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600">{t('services.stats.support')}</div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600">{t('services.stats.satisfaction')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E272D] to-[#6B7473] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('services.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>{t('hero.freeConsultation')}</span>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {t('common.contactUs')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
