import { Link } from 'react-router-dom';
import { Shield, Building, Users, TrendingUp, CheckCircle, Calendar, FileText } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';

const InsuranceServices = () => {
  const { t } = useTranslation();
  
  const services = t('services.insurance.detailPage.services');
  const benefits = t('services.insurance.detailPage.benefits'); 
  const processSteps = t('services.insurance.detailPage.process');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E272D] to-[#6B7473] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                {t('services.insurance.detailPage.hero.title')}
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                {t('services.insurance.detailPage.hero.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointment"
                  className="bg-gradient-to-r from-[#1E272D] to-[#6B7473] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#2A363E] hover:to-[#7A8588] transition-all inline-flex items-center justify-center"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  {t('common.appointment')}
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all inline-flex items-center justify-center"
                >
                  {t('common.contactUs')}
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <Shield className="w-24 h-24 text-white mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-center mb-4">
                  {t('services.insurance.detailPage.hero.subtitle')}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('services.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Array.isArray(services) && services.map((service, index) => {
              const Icon = index === 0 ? Building : Shield;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('services.whyChooseUs')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.isArray(benefits) && benefits.map((benefit, index) => {
              const icons = [Shield, CheckCircle, TrendingUp, Users];
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('services.ourProcess')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.isArray(processSteps) && processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E272D] to-[#6B7473] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t('services.insurance.detailPage.cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('services.insurance.detailPage.cta.description')}
          </p>
          <Link
            to="/appointment"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            <Calendar className="w-5 h-5 mr-2" />
            {t('services.insurance.detailPage.cta.button')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default InsuranceServices;