import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, TrendingUp, Calendar } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Finansal Danışmanlık',
      description: 'SBA Loans ve Grants-Hibeler konularında uzman danışmanlık',
      icon: TrendingUp,
      link: '/services/financial'
    },
    {
      title: 'Muhasebe Servisi',
      description: 'Personal Tax Return, Business Tax Return ve genel muhasebe hizmetleri',
      icon: Award,
      link: '/services/accounting'
    },
    {
      title: 'Noterlik ve Tercümanlık',
      description: 'Noterlik işlemleri ve profesyonel tercüme hizmetleri',
      icon: CheckCircle,
      link: '/services/notary'
    },
    {
      title: 'Sigorta Hizmetleri',
      description: 'Şirket kurulumu, Sigorta ve Worker Comps & Business Sigortası',
      icon: Users,
      link: '/services/insurance'
    }
  ];

  const features = [
    'Uzman kadro ile profesyonel hizmet',
    'Türkçe ve İngilizce dillerinde destek',
    'Boston bölgesinde güvenilir partner',
    '7/24 müşteri desteği'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  BEKA SOLUTIONS
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-blue-100 mb-4">
                  Boston Consulting Hub
                </h2>
                <p className="text-xl text-blue-100 leading-relaxed">
                  İşletmenizin başarısı için kapsamlı danışmanlık hizmetleri. 
                  Finansal danışmanlık, muhasebe, noterlik ve sigorta alanlarında 
                  uzman ekibimizle yanınızdayız.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointment"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Randevu Al</span>
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Hizmetlerimiz</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-center">Hızlı İletişim</h3>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-blue-100">Telefon</p>
                    <p className="text-xl font-semibold">+1-857-343-3120</p>
                  </div>
                  <div>
                    <p className="text-blue-100">E-posta</p>
                    <p className="text-lg">bostonconsultinghub@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-blue-100">Adres</p>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servislerimiz için bizimle iletişime geçebilirsiniz
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
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center mb-4">
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
                    Detayları Gör
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
                Neden Beka Solutions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Boston bölgesinde güvenilir danışmanlık hizmetleri sunarak 
                işletmenizin büyümesine katkıda bulunuyoruz.
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
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Memnun Müşteri</div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-gray-600">Yıl Deneyim</div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600">Destek</div>
                  </div>
                  <div className="bg-white rounded-lg p-6">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600">Memnuniyet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            İşletmenizi Büyütmek İçin Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Uzman ekibimizle tanışın ve işletmeniz için en uygun çözümleri keşfedin.
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

export default Home;
