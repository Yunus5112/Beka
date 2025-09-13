import { TrendingUp, Award, CheckCircle, Users, Calendar, ArrowRight, Target, Heart } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { HeroSection, ServiceCards, BenefitsSection } from '../components/sections';

const Home = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('services.financial.title'),
      description: t('services.financial.description'),
      icon: TrendingUp,
      link: '/services/financial',
      buttonText: t('services.seeDetails')
    },
    {
      title: t('services.accounting.title'),
      description: t('services.accounting.description'),
      icon: Award,
      link: '/services/accounting',
      buttonText: t('services.seeDetails')
    },
    {
      title: t('services.notary.title'),
      description: t('services.notary.description'),
      icon: CheckCircle,
      link: '/services/notary',
      buttonText: t('services.seeDetails')
    },
    {
      title: t('services.insurance.title'),
      description: t('services.insurance.description'),
      icon: Users,
      link: '/services/insurance',
      buttonText: t('services.seeDetails')
    }
  ];

  const benefits = [
    {
      title: t('services.features.0') || 'Uzman kadro ile profesyonel hizmet',
      icon: Target
    },
    {
      title: t('services.features.1') || 'Türkçe ve İngilizce dillerinde destek',
      icon: Heart
    },
    {
      title: t('services.features.2') || 'Boston bölgesinde güvenilir partner',
      icon: Users
    },
    {
      title: t('services.features.3') || '7/24 müşteri desteği',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        description={t('hero.description')}
        primaryButton={{
          text: t('common.appointment'),
          href: '/appointment',
          icon: Calendar
        }}
        secondaryButton={{
          text: t('common.services'),
          href: '/services',
          icon: ArrowRight
        }}
        variant="home"
      />

      {/* Services Section */}
      <ServiceCards
        title={t('services.title')}
        services={services}
        variant="home"
        columns={2}
      />

      {/* Why Choose Us Section */}
      <BenefitsSection
        title={t('services.whyChooseUs')}
        subtitle={t('services.whyChooseUsDesc')}
        benefits={benefits}
        variant="benefits"
        columns={4}
      />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1E272D] to-[#6B7473] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex justify-center">
            <a
              href="/appointment"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {t('common.freeConsultation')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;