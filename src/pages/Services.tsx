import { TrendingUp, Award, FileText, Shield } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { HeroSection, ServiceCards } from '../components/sections';

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('services.financial.title'),
      features: t('services.financial.serviceFeatures'),
      icon: TrendingUp,
      link: '/services/financial',
      buttonText: t('services.seeDetails')
    },
    {
      title: t('services.accounting.title'),
      features: t('services.accounting.serviceFeatures'),
      icon: Award,
      link: '/services/accounting',
      buttonText: t('services.seeDetails')
    },
    {
      title: t('services.notary.title'),
      features: t('services.notary.serviceFeatures'),
      icon: FileText,
      link: '/services/notary',
      buttonText: t('services.seeDetails')
    },
    {
      title: t('services.insurance.title'),
      features: t('services.insurance.serviceFeatures'),
      icon: Shield,
      link: '/services/insurance',
      buttonText: t('services.seeDetails')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('services.title')}
        description={t('services.subtitle')}
        variant="about"
      />

      {/* Services Cards */}
      <ServiceCards
        title={t('services.title')}
        services={services}
        variant="services"
        columns={2}
      />
    </div>
  );
};

export default Services;