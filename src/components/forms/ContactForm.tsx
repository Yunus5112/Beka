import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from '../../contexts/LanguageContext';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ 
  onSubmit,
  className = ''
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (onSubmit) {
      onSubmit(formData);
    } else {
      // Default behavior
      console.log('Form submitted:', formData);
      alert(t('contact.form.successMessage') || 'Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    }
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {t('contact.form.title')}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder={t('contact.form.namePlaceholder')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder={t('contact.form.emailPlaceholder')}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder={t('contact.form.phonePlaceholder')}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.form.subject')}
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            >
              <option value="">{t('contact.form.selectSubject')}</option>
              <option value="general">{t('contact.form.generalInfo')}</option>
              <option value="appointment">{t('contact.form.appointmentRequest')}</option>
              <option value="financial">{t('navigation.financialServices')}</option>
              <option value="accounting">{t('navigation.accountingServices')}</option>
              <option value="notary">{t('navigation.notaryServices')}</option>
              <option value="insurance">{t('navigation.insuranceServices')}</option>
            </select>
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
            placeholder={t('contact.form.messagePlaceholder')}
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#1E272D] to-[#6B7473] text-white px-8 py-4 rounded-lg font-semibold hover:from-[#2A363E] hover:to-[#7A8588] transition-all flex items-center justify-center space-x-2"
        >
          <Send className="w-5 h-5" />
          <span>{t('contact.form.send')}</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
