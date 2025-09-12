import { Link } from 'react-router-dom';
import { Shield, Building, Users, FileText, Calendar, CheckCircle } from 'lucide-react';

const InsuranceServices = () => {
  const services = [
    {
      title: 'Şirket Kurulumu',
      subtitle: 'Şirket Kurulumu',
      description: 'ABD\'de şirket kurulumu ve yasal süreçlerin yönetimi',
      features: [
        'Eyalet Başvuruları, IRS Başvuruları',
        'İşletme Lisanslarının başvuruları',
        'Ortaklık anlaşmaları',
        'Alım satım anlaşmaları'
      ],
      icon: Building
    },
    {
      title: 'Sigorta Hizmetleri',
      subtitle: 'Sigorta - Insurance',
      description: 'İş yerleri için kapsamlı sigorta çözümleri',
      features: [
        'Worker Comps (İşçi Tazminatı)',
        'Business Sigortası',
        'Genel Sorumluluk Sigortası',
        'Mesleki Sorumluluk Sigortası'
      ],
      icon: Shield
    }
  ];

  const businessTypes = [
    { type: 'LLC', description: 'Limited Liability Company - Sınırlı Sorumlu Şirket' },
    { type: 'Corporation', description: 'C-Corp ve S-Corp seçenekleri' },
    { type: 'Partnership', description: 'Ortaklık şirketleri' },
    { type: 'Sole Proprietorship', description: 'Şahıs işletmesi' }
  ];

  const insuranceTypes = [
    {
      name: 'Workers\' Compensation',
      description: 'İşçi tazminat sigortası - yasal zorunluluk',
      icon: Users
    },
    {
      name: 'General Liability',
      description: 'Genel sorumluluk sigortası - üçüncü şahıs koruması',
      icon: Shield
    },
    {
      name: 'Professional Liability',
      description: 'Mesleki sorumluluk sigortası - hizmet hataları koruması',
      icon: FileText
    },
    {
      name: 'Commercial Property',
      description: 'Ticari mülk sigortası - ekipman ve envanter koruması',
      icon: Building
    }
  ];

  const benefits = [
    {
      title: 'Deneyimli Kadro',
      description: 'ABD şirket hukuku ve sigorta sektöründe uzman ekip',
      icon: Users
    },
    {
      title: 'Hızlı Süreç',
      description: 'Şirket kurulumu ve sigorta başvurularında hızlı işlem',
      icon: CheckCircle
    },
    {
      title: 'Tam Hizmet',
      description: 'Kuruluştan sigortaya kadar tüm süreçlerde destek',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Sigorta Hizmetleri</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Şirket kurulumu ve sigorta çözümleri. ABD\'de işletmenizi kurarken 
                ve korurken ihtiyacınız olan tüm hizmetler tek çatı altında.
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
                    <span className="text-lg">Şirket Kurulumu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Worker Comps Sigortası</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Business Sigortası</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Yasal Danışmanlık</span>
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
              Şirket kurulumu ve sigorta konularında sunduğumuz kapsamlı hizmetler
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
        </div>
      </section>

      {/* Business Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Şirket Türleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kurabileceğiniz farklı şirket türleri ve özellikleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessTypes.map((business, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{business.type}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{business.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sigorta Türleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İşletmeniz için sunduğumuz sigorta çeşitleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insuranceTypes.map((insurance, index) => {
              const Icon = insurance.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {insurance.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {insurance.description}
                  </p>
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
              Şirket kurulumu ve sigorta hizmetlerinde sahip olduğumuz avantajlar
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Şirket Kurulum Süreci</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Şirket kurulumunda izlediğimiz adımlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: 1, title: 'Danışmanlık', description: 'İhtiyaç analizi ve şirket türü seçimi' },
              { step: 2, title: 'Başvurular', description: 'Eyalet ve IRS başvuruları' },
              { step: 3, title: 'Lisanslar', description: 'İşletme lisansları başvuruları' },
              { step: 4, title: 'Anlaşmalar', description: 'Ortaklık ve sözleşme düzenleme' },
              { step: 5, title: 'Sigorta', description: 'Gerekli sigorta poliçeleri' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Requirements */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Yasal Gereklilikler</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Massachusetts eyaletinde işletme sahibi olarak bilmeniz gerekenler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Zorunlu Sigortalar</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Workers\' Compensation (3+ çalışan için)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Unemployment Insurance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Disability Insurance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Önerilen Sigortalar</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>General Liability Insurance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Professional Liability Insurance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                  <span>Commercial Property Insurance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            İşletmenizi Kurmaya ve Korumaya Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Şirket kurulumundan sigortaya kadar tüm süreçlerde uzman desteği alın.
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

export default InsuranceServices;
