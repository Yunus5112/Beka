import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';
import { HeroSection, ContactCards } from '../components/sections';

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Phone,
      title: t('common.phone'),
      details: '+1-857-343-3120',
      description: t('contact.info.phoneDescription')
    },
    {
      icon: Mail,
      title: t('common.email'),
      details: 'bostonconsultinghub@gmail.com',
      description: t('contact.info.emailDescription')
    },
    {
      icon: MapPin,
      title: t('common.address'),
      details: '420 Lincoln Ave Saugus MA 01906',
      description: t('contact.info.addressDescription')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title={t('contact.title')}
        description={t('contact.subtitle')}
        variant="contact"
      />

      {/* Contact Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactCards contactInfo={contactInfo} />
        </div>
      </section>
    </div>
  );
};

export default Contact;