import { Shield, Building, Users, CheckCircle, TrendingUp } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';
import { HeroSection, ServiceCards, BenefitsSection, ProcessSteps, CTASection } from '../../components/sections';

const InsuranceServices = () => {
  const { t } = useTranslation();
  
  const services = t('services.insurance.detailPage.services');
  const benefits = t('services.insurance.detailPage.benefits'); 
  const processSteps = t('services.insurance.detailPage.process');

  // Convert services data to component format
  const serviceCards = Array.isArray(services) ? services.map((service, index) => ({
    title: service.title,
    description: service.description,
    features: service.features,
    icon: index === 0 ? Building : Shield
  })) : [];

  // Convert benefits to component format with icons
  const benefitIcons = [Shield, CheckCircle, TrendingUp, Users];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('services.insurance.detailPage.hero.title')}
        description={t('services.insurance.detailPage.hero.description')}
        primaryButton={{
          text: t('common.appointment'),
          href: '/appointment'
        }}
        secondaryButton={{
          text: t('common.contactUs'),
          href: '/contact'
        }}
        variant="home"
      />

      {/* Services Section */}
      <ServiceCards
        title={t('services.title')}
        services={serviceCards}
        variant="detail"
        columns={2}
      />

      {/* Benefits Section */}
      <BenefitsSection
        title={t('services.whyChooseUs')}
        benefits={Array.isArray(benefits) ? benefits : []}
        icons={benefitIcons}
        variant="benefits"
        columns={4}
      />

      {/* Process Section */}
      <ProcessSteps
        title={t('services.ourProcess')}
        steps={Array.isArray(processSteps) ? processSteps : []}
      />

      {/* CTA Section */}
      <CTASection
        title={t('services.insurance.detailPage.cta.title')}
        description={t('services.insurance.detailPage.cta.description')}
        buttonText={t('services.insurance.detailPage.cta.button')}
        buttonHref="/appointment"
      />
    </div>
  );
};

export default InsuranceServices;