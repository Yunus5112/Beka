import { Calculator, FileText, Users, TrendingUp, Award } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';
import { HeroSection, ServiceCards, BenefitsSection, ProcessSteps, CTASection } from '../../components/sections';

const AccountingServices = () => {
  const { t } = useTranslation();
  
  const services = t('services.accounting.detailPage.services');
  const benefits = t('services.accounting.detailPage.benefits'); 
  const processSteps = t('services.accounting.detailPage.process');

  // Convert services data to component format
  const serviceCards = Array.isArray(services) ? services.map((service, index) => ({
    title: service.title,
    description: service.description,
    features: service.features,
    icon: index === 0 ? FileText : Award
  })) : [];

  // Convert benefits to component format with icons
  const benefitIcons = [Calculator, TrendingUp, Users, Award];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('services.accounting.detailPage.hero.title')}
        description={t('services.accounting.detailPage.hero.description')}
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
        title={t('services.accounting.detailPage.cta.title')}
        description={t('services.accounting.detailPage.cta.description')}
        buttonText={t('services.accounting.detailPage.cta.button')}
        buttonHref="/appointment"
      />
    </div>
  );
};

export default AccountingServices;