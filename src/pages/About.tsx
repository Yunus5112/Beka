import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Profesyonellik',
      description: 'Her projede en yüksek kalite standartlarını uyguluyoruz.'
    },
    {
      icon: Heart,
      title: 'Güvenilirlik',
      description: 'Müşterilerimizle uzun vadeli güven ilişkileri kuruyoruz.'
    },
    {
      icon: Users,
      title: 'Müşteri Odaklılık',
      description: 'Müşteri memnuniyeti bizim en önemli önceliğimizdir.'
    },
    {
      icon: Award,
      title: 'Uzmanlık',
      description: 'Alanında uzman kadromuzla en iyi hizmeti sunuyoruz.'
    }
  ];

  const team = [
    {
      name: 'Ahmet Beka',
      position: 'Kurucu & CEO',
      description: 'Finansal danışmanlık alanında 10+ yıl deneyim'
    },
    {
      name: 'Ayşe Demir',
      position: 'Muhasebe Uzmanı',
      description: 'CPA sertifikalı muhasebe uzmanı'
    },
    {
      name: 'Mehmet Yılmaz',
      position: 'Sigorta Uzmanı',
      description: 'Sigorta ve risk yönetimi uzmanı'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Beka Solutions olarak, Boston bölgesinde işletmelere kapsamlı danışmanlık 
            hizmetleri sunarak onların başarısına katkıda bulunuyoruz.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Kim Olduğumuz</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Beka Solutions Boston Consulting Hub, 2019 yılında kurulmuş olup, 
                  Boston ve çevresindeki işletmelere finansal danışmanlık, muhasebe, 
                  noterlik ve sigorta hizmetleri sunmaktadır.
                </p>
                <p>
                  Türk ve Amerikan işletme kültürlerini harmanlayan yaklaşımımızla, 
                  müşterilerimize hem yerel hem de uluslararası perspektiften 
                  çözümler sunuyoruz.
                </p>
                <p>
                  Uzman kadromuz sayesinde, işletmenizin ihtiyaçlarına özel çözümler 
                  geliştiriyor ve sürdürülebilir büyüme için stratejiler oluşturuyoruz.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Başarılarımız
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Başarılı Proje</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-gray-600">Kurumsal Müşteri</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-gray-600">Yıl Deneyim</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-gray-600">Müşteri Desteği</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İş yaparken benimsediğimiz temel ilkeler ve değerler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alanında uzman ve deneyimli ekibimizle hizmetinizdeyiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">Misyonumuz</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                İşletmelerin finansal ve operasyonel süreçlerini optimize ederek, 
                sürdürülebilir büyüme ve başarı elde etmelerine yardımcı olmak. 
                Müşterilerimize değer katacak çözümler sunarak, onların güvenilir 
                iş ortağı olmak.
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">Vizyonumuz</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Boston bölgesinde danışmanlık sektöründe lider konuma gelmek ve 
                müşterilerimizin ilk tercihi olmak. Yenilikçi yaklaşımlarımızla 
                sektöre öncülük etmek ve sürekli gelişen hizmet kalitemizle 
                fark yaratmak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
