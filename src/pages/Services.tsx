import { Link } from 'react-router-dom';
import { TrendingUp, Award, FileText, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'financial',
      title: 'Finansal Danışmanlık',
      subtitle: 'FINANSAL DANIŞMANLIK',
      description: 'İşletmenizin finansal büyümesi için kapsamlı danışmanlık hizmetleri',
      icon: TrendingUp,
      features: [
        'SBA LOANS - İşletme kredileri',
        'GRANTS-HIBELER - Hibe başvuruları',
        'Finansal planlama ve strateji geliştirme',
        'Yatırım danışmanlığı'
      ],
      link: '/services/financial'
    },
    {
      id: 'accounting',
      title: 'Muhasebe Servisi',
      subtitle: 'Accounting - Muhasebe Servisi',
      description: 'Kişisel ve kurumsal vergi beyannameleri ile muhasebe hizmetleri',
      icon: Award,
      features: [
        'Personal Tax Return - Kişisel Vergi Beyannamesi',
        'Business Tax Return - Şirket Vergi Beyannamesi',
        'Genel muhasebe hizmetleri',
        'Mali müşavirlik'
      ],
      link: '/services/accounting'
    },
    {
      id: 'notary',
      title: 'Noterlik ve Tercümanlık',
      subtitle: 'NOTERLIK VE TERCUMANLIK IŞLEMLERI',
      description: 'Resmi evrak işlemleri ve profesyonel tercüme hizmetleri',
      icon: FileText,
      features: [
        'Noterlik işlemleri',
        'Tercüme işlemleri - Translation',
        'Belge onaylama ve tasdik',
        'Resmi evrak düzenleme'
      ],
      link: '/services/notary'
    },
    {
      id: 'insurance',
      title: 'Sigorta Hizmetleri',
      subtitle: 'Şirket Kurulumu',
      description: 'Şirket kurulumu ve sigorta çözümleri',
      icon: Shield,
      features: [
        'Eyalet Başvuruları, IRS Başvuruları',
        'İşletme Lisanslarının başvuruları',
        'Ortaklık anlaşmaları, Alım satım anlaşmaları',
        'İş yerleri için Worker Comps and Business Sigortası'
      ],
      link: '/services/insurance'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Hizmetlerimiz</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            İşletmenizin her alanında uzman danışmanlık hizmetleri ile yanınızdayız. 
            Servislerimiz için bizimle iletişime geçebilirsiniz.
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
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm uppercase tracking-wide">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-green-600 transition-all group"
                  >
                    <span>Detayları Görüntüle</span>
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
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-colors"
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

      {/* Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6">
              Servislerimiz için bizimle iletişime geçebilirsiniz
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold mb-2">Telefon</p>
                <p className="text-lg">+1-857-343-3120</p>
              </div>
              <div>
                <p className="font-semibold mb-2">E-posta</p>
                <p className="text-lg">bostonconsultinghub@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold mb-2">Web Sitesi</p>
                <p className="text-lg">www.bostonconsultinghub.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
