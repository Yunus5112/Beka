import { FileText, Globe, Users, TrendingUp, CheckCircle, Shield } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';
import { HeroSection, ServiceCards, BenefitsSection, ProcessSteps, CTASection } from '../../components/sections';

const NotaryServices = () => {
  const { t } = useTranslation();
  
  const services = t('services.notary.detailPage.services');
  const benefits = t('services.notary.detailPage.benefits'); 
  const processSteps = t('services.notary.detailPage.process');

  // Convert services data to component format
  const serviceCards = Array.isArray(services) ? services.map((service, index) => ({
    title: service.title,
    description: service.description,
    features: service.features,
    icon: index === 0 ? FileText : Globe
  })) : [];

  // Convert benefits to component format with icons
  const benefitIcons = [Shield, TrendingUp, CheckCircle, Globe];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('services.notary.detailPage.hero.title')}
        description={t('services.notary.detailPage.hero.description')}
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
        title={t('services.notary.detailPage.cta.title')}
        description={t('services.notary.detailPage.cta.description')}
        buttonText={t('services.notary.detailPage.cta.button')}
        buttonHref="/appointment"
      />
    </div>
  );
};

export default NotaryServices;