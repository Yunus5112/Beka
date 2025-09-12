import { Link } from 'react-router-dom';
import { Award, Calculator, FileText, Users, Calendar, CheckCircle } from 'lucide-react';

const AccountingServices = () => {
  const services = [
    {
      title: 'Personal Tax Return',
      subtitle: 'Kişisel Vergi Beyannamesi',
      description: 'Kişisel gelir vergisi beyannamelerinizi profesyonel şekilde hazırlıyoruz',
      features: [
        'Federal vergi beyannamesi',
        'Eyalet vergi beyannamesi',
        'Vergi iadesi optimizasyonu',
        'Vergi planlaması'
      ],
      icon: FileText
    },
    {
      title: 'Business Tax Return',
      subtitle: 'Şirket Vergi Beyannamesi',
      description: 'İşletmenizin vergi beyannamelerini eksiksiz ve zamanında hazırlıyoruz',
      features: [
        'Kurumlar vergisi beyannamesi',
        'Bordro vergisi hesaplamaları',
        'Çeyreklik vergi ödemeleri',
        'Vergi danışmanlığı'
      ],
      icon: Calculator
    }
  ];

  const additionalServices = [
    'Genel muhasebe hizmetleri',
    'Mali müşavirlik',
    'Finansal raporlama',
    'Bütçe planlama',
    'Nakit akış yönetimi',
    'Maliyet analizi'
  ];

  const benefits = [
    {
      title: 'CPA Sertifikalı Uzmanlar',
      description: 'Sertifikalı mali müşavirlerle profesyonel hizmet',
      icon: Award
    },
    {
      title: 'Zamanında Teslimat',
      description: 'Vergi beyannamelerinizi süresinde teslim ediyoruz',
      icon: CheckCircle
    },
    {
      title: 'Vergi Tasarrufu',
      description: 'Maksimum vergi avantajları için optimizasyon',
      icon: Calculator
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Muhasebe Servisi</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Kişisel ve kurumsal vergi beyannameleri ile kapsamlı muhasebe hizmetleri. 
                CPA sertifikalı uzmanlarımızla güvenle çalışın.
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
                    <span className="text-lg">Personal Tax Return</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Business Tax Return</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Mali Müşavirlik</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Finansal Raporlama</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Muhasebe Hizmetleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kişisel ve kurumsal muhasebe ihtiyaçlarınız için kapsamlı çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-blue-600 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
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

          {/* Additional Services */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ek Muhasebe Hizmetleri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Muhasebe hizmetlerinde sahip olduğumuz avantajlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow border border-gray-100"
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

      {/* Tax Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vergi Takvimi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Önemli vergi tarihleri ve süreçleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { month: 'Ocak 31', task: 'W-2 ve 1099 formları', type: 'Kişisel' },
              { month: 'Mart 15', task: 'S-Corp vergi beyannamesi', type: 'Kurumsal' },
              { month: 'Nisan 15', task: 'Kişisel vergi beyannamesi', type: 'Kişisel' },
              { month: 'Ekim 15', task: 'Uzatılmış beyannameler', type: 'Genel' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">{item.month}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.task}</h4>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  item.type === 'Kişisel' ? 'bg-green-100 text-green-800' :
                  item.type === 'Kurumsal' ? 'bg-blue-100 text-blue-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Muhasebe İşlemlerinizi Profesyonellere Bırakın
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            CPA sertifikalı uzmanlarımızla vergi ve muhasebe işlemlerinizi güvenle yönetin.
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

export default AccountingServices;
