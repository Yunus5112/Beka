import { Link } from 'react-router-dom';
import { TrendingUp, Award, FileText, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      id: 'financial',
      title: t('services.financial.title'),
      icon: TrendingUp,
      features: t('services.financial.serviceFeatures'),
      link: '/services/financial'
    },
    {
      id: 'accounting',
      title: t('services.accounting.title'),
      icon: Award,
      features: t('services.accounting.serviceFeatures'),
      link: '/services/accounting'
    },
    {
      id: 'notary',
      title: t('services.notary.title'),
      icon: FileText,
      features: t('services.notary.serviceFeatures'),
      link: '/services/notary'
    },
    {
      id: 'insurance',
      title: t('services.insurance.title'),
      icon: Shield,
      features: t('services.insurance.serviceFeatures'),
      link: '/services/insurance'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E272D] to-[#6B7473] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>


                  <div className="space-y-3 mb-8">
                    {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center bg-gradient-to-r from-[#1E272D] to-[#6B7473] text-white px-6 py-3 rounded-lg hover:from-[#2A363E] hover:to-[#7A8588] transition-all group"
                  >
                    <span>{t('services.seeDetails')}</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hangi Hizmeti Arıyorsunuz?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            İhtiyacınıza en uygun çözümü bulmak için uzman ekibimizle görüşün
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-gradient-to-r from-[#1E272D] to-[#6B7473] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#2A363E] hover:to-[#7A8588] transition-colors"
            >
              Ücretsiz Danışmanlık Al
            </Link>
            <Link
              to="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
