import { Users, Target, Award, Heart } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { HeroSection, BenefitsSection, CTASection } from '../components/sections';

const About = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      title: t('about.values.professionalism.title'),
      description: t('about.values.professionalism.description'),
      icon: Target
    },
    {
      title: t('about.values.reliability.title'),
      description: t('about.values.reliability.description'),
      icon: Heart
    },
    {
      title: t('about.values.customerFocus.title'),
      description: t('about.values.customerFocus.description'),
      icon: Users
    },
    {
      title: t('about.values.expertise.title'),
      description: t('about.values.expertise.description'),
      icon: Award
    }
  ];


  const team = t('about.team.members');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('about.hero.title')}
        description={t('about.hero.description')}
        variant="about"
      />

      {/* Who We Are */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('about.whoWeAre.title')}</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>{t('about.whoWeAre.paragraph1')}</p>
              <p>{t('about.whoWeAre.paragraph2')}</p>
              <p>{t('about.whoWeAre.paragraph3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <BenefitsSection
        title={t('about.values.title')}
        subtitle={t('about.values.subtitle')}
        benefits={values}
        variant="values"
        columns={4}
      />

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
      <CTASection
        title="" // Not used in mission-vision variant
        description="" // Not used in mission-vision variant
        buttonText="" // Not used in mission-vision variant
        variant="mission-vision"
        leftContent={{
          title: t('about.mission.title'),
          description: t('about.mission.description')
        }}
        rightContent={{
          title: t('about.vision.title'),
          description: t('about.vision.description')
        }}
      />
    </div>
  );
};

export default About;