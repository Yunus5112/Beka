import { Link } from 'react-router-dom';
import { FileText, Globe, Stamp, Users, Calendar, CheckCircle } from 'lucide-react';

const NotaryServices = () => {
  const services = [
    {
      title: 'Noterlik İşlemleri',
      subtitle: 'Noterlik işlemleri',
      description: 'Resmi belgelerin noterlik işlemleri ve onaylanması hizmetleri',
      features: [
        'Belge onaylama ve tasdik',
        'İmza onaylama',
        'Sözleşme düzenleme',
        'Vekaletname hazırlama'
      ],
      icon: Stamp
    },
    {
      title: 'Tercüme İşlemleri',
      subtitle: 'Tercüme işlemleri - Translation',
      description: 'Profesyonel tercüme hizmetleri ve resmi belge çevirileri',
      features: [
        'Resmi belge çevirisi',
        'Yeminli tercüman hizmeti',
        'Mahkeme tercümanlığı',
        'İş belgesi çevirileri'
      ],
      icon: Globe
    }
  ];

  const documentTypes = [
    'Pasaport ve kimlik belgeleri',
    'Doğum, evlilik, ölüm sertifikaları',
    'Diploma ve transkript belgeleri',
    'İş sözleşmeleri',
    'Mahkeme belgeleri',
    'Tıbbi raporlar',
    'Mali belgeler',
    'Göçmenlik belgeleri'
  ];

  const benefits = [
    {
      title: 'Yeminli Tercüman',
      description: 'Mahkeme onaylı yeminli tercüman hizmetleri',
      icon: Users
    },
    {
      title: 'Hızlı Teslimat',
      description: 'Acil durumlar için hızlı çeviri ve onaylama',
      icon: CheckCircle
    },
    {
      title: 'Resmi Geçerlilik',
      description: 'Tüm resmi kurumlarda geçerli belgeler',
      icon: FileText
    }
  ];

  const languages = [
    'Türkçe - İngilizce',
    'İngilizce - Türkçe',
    'Fransızca - İngilizce',
    'İspanyolca - İngilizce',
    'Almanca - İngilizce',
    'İtalyanca - İngilizce'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Noterlik ve Tercümanlık</h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Resmi evrak işlemleri ve profesyonel tercüme hizmetleri. 
                Yeminli tercüman ve noterlik onayları ile güvenilir hizmet.
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
                    <span className="text-lg">Noterlik İşlemleri</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Tercüme İşlemleri</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Yeminli Tercümanlık</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-lg">Belge Onaylama</span>
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
              NOTERLIK VE TERCUMANLIK IŞLEMLERI konusunda sunduğumuz hizmetler
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

      {/* Document Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Çevirdiğimiz Belge Türleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesyonel tercüme hizmeti verdiğimiz belge kategorileri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documentTypes.map((docType, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900">{docType}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dil Çiftleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tercüme hizmeti verdiğimiz dil kombinasyonları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-6 text-center">
                <Globe className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 text-lg">{language}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Noterlik ve tercüme hizmetlerinde sahip olduğumuz avantajlar
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmet Süreci</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Noterlik ve tercüme işlemlerinde izlediğimiz adımlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Belge Teslimi', description: 'Belgelerinizi bize teslim edin' },
              { step: 2, title: 'İnceleme', description: 'Belgeleri inceleyip fiyat veriyoruz' },
              { step: 3, title: 'Çeviri/Onaylama', description: 'Profesyonel işlem yapıyoruz' },
              { step: 4, title: 'Teslimat', description: 'Hazır belgeleri teslim ediyoruz' }
            ].map((step, index) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Belgelerinizi Profesyonellere Teslim Edin
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Yeminli tercüman ve noterlik hizmetleri ile belgelerinizi güvenle işleme alıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/appointment"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Randevu Al</span>
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

export default NotaryServices;
