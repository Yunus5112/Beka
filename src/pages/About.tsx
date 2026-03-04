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


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('about.hero.title')}
        description={t('about.hero.description')}
        paragraph2={t('about.hero.paragraph2')}
        paragraph3={t('about.hero.paragraph3')}
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

      {/* Legal Disclaimer */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {t('about.legalDisclaimer.title')}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {t('about.legalDisclaimer.paragraph1')}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t('about.legalDisclaimer.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;