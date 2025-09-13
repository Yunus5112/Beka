import { TrendingUp, DollarSign, FileText, Users, Calculator, Award } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';
import { HeroSection, ServiceCards, BenefitsSection, ProcessSteps, CTASection } from '../../components/sections';

const FinancialServices = () => {
  const { t } = useTranslation();
  
  const services = t('services.financial.detailPage.services');
  const benefits = t('services.financial.detailPage.benefits'); 
  const processSteps = t('services.financial.detailPage.process');

  // Convert services data to component format
  const serviceCards = Array.isArray(services) ? services.map((service, index) => ({
    title: service.title,
    description: service.description,
    features: service.features,
    icon: index === 0 ? DollarSign : FileText
  })) : [];

  // Convert benefits to component format with icons
  const benefitIcons = [Calculator, TrendingUp, Users, Award];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('services.financial.detailPage.hero.title')}
        description={t('services.financial.detailPage.hero.description')}
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
        title={t('services.financial.detailPage.cta.title')}
        description={t('services.financial.detailPage.cta.description')}
        buttonText={t('services.financial.detailPage.cta.button')}
        buttonHref="/appointment"
      />
    </div>
  );
};

export default FinancialServices;