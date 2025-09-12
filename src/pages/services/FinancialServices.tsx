import { Link } from 'react-router-dom';
import { TrendingUp, DollarSign, FileText, Users, ArrowRight, CheckCircle, Calendar } from 'lucide-react';

const FinancialServices = () => {
  const services = [
    {
      title: 'SBA LOANS',
      description: 'Small Business Administration kredileri ile işletmenizi büyütün',
      features: [
        'Düşük faiz oranları',
        'Uzun vade seçenekleri',
        'Başvuru sürecinde rehberlik',
        'Kredi onay desteği'
      ],
      icon: DollarSign
    },
    {
      title: 'GRANTS-HIBELER',
      description: 'Devlet hibeleri ve özel sektör hibelerinden yararlanın',
      features: [
        'Hibe araştırması ve bulma',
        'Başvuru belgelerinin hazırlanması',
        'Süreç takibi',
        'Geri ödemesiz finansman'
      ],
      icon: FileText
    }
  ];

  const benefits = [
    {
      title: 'Uzman Danışmanlık',
      description: 'Finansal konularda uzman ekibimizle profesyonel danışmanlık',
      icon: Users
    },
    {
      title: 'Hızlı Süreç',
      description: 'Etkin çalışma yöntemlerimizle hızlı sonuç alma',
      icon: TrendingUp
    },
    {
      title: 'Güvenilir Hizmet',
      description: 'Yıllardır sürdürdüğümüz güvenilir hizmet anlayışı',
      icon: CheckCircle
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'İlk Görüşme',
      description: 'İhtiyaçlarınızı analiz ederiz'
    },
    {
      step: 2,
      title: 'Strateji Geliştirme',
      description: 'Size özel finansal strateji oluştururuz'
    },
    {
      step: 3,
      title: 'Başvuru Süreci',
      description: 'Gerekli başvuruları birlikte yaparız'
    },
    {
      step: 4,
      title: 'Takip ve Destek',
      description: 'Süreç boyunca yanınızda oluruz'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Finansal Danışmanlık</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                İşletmenizin finansal büyümesi için kapsamlı danışmanlık hizmetleri. 
                SBA kredileri ve hibeler konusunda uzman desteği alın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointment"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Randevu Al</span>
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center"
                >
                  Bilgi Al
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Hizmet Alanlarımız</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">SBA Loans</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Grants-Hibeler</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Finansal Planlama</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Yatırım Danışmanlığı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmet Detayları</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Finansal danışmanlık alanında sunduğumuz temel hizmetler
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
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

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Finansal danışmanlık konusunda sahip olduğumuz avantajlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Çalışma Sürecimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Finansal danışmanlık sürecinde izlediğimiz adımlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-gray-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Finansal Hedeflerinize Ulaşmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Uzman ekibimizle finansal danışmanlık alın ve işletmenizi büyütün.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Ücretsiz Danışmanlık Al</span>
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancialServices;
