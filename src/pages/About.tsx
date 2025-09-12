import { Users, Target, Award, Heart } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Target,
      title: t('about.values.professionalism.title'),
      description: t('about.values.professionalism.description')
    },
    {
      icon: Heart,
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description')
    },
    {
      icon: Users,
      title: t('about.values.customerFocus.title'),
      description: t('about.values.customerFocus.description')
    },
    {
      icon: Award,
      title: t('about.values.expertise.title'),
      description: t('about.values.expertise.description')
    }
  ];

  const team = t('about.team.members');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E272D] to-[#6B7473] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('about.hero.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t('about.hero.description')}
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.whoWeAre.title')}</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  {t('about.whoWeAre.paragraph1')}
                </p>
                <p>
                  {t('about.whoWeAre.paragraph2')}
                </p>
                <p>
                  {t('about.whoWeAre.paragraph3')}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {t('about.achievements.title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">{t('about.achievements.successfulProjects')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-gray-600">{t('about.achievements.corporateClients')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-gray-600">{t('about.achievements.yearsExperience')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-gray-600">{t('about.achievements.customerSupport')}</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.values.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
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
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-full flex items-center justify-center mx-auto mb-4">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array.isArray(team) && team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center group hover:shadow-xl transition-shadow"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#1E272D] to-[#6B7473] rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gradient-to-r from-[#1E272D] to-[#6B7473]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-white">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">{t('about.mission.title')}</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">{t('about.vision.title')}</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;