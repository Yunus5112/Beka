import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import enTranslations from '../data/translations/en.json';
import trTranslations from '../data/translations/tr.json';

export type Language = 'en' | 'tr';

export type Translations = typeof enTranslations;

interface LanguageContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  en: enTranslations,
  tr: trTranslations
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Get language from localStorage or default to Turkish
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
      return (saved as Language) || 'tr';
    } catch (error) {
      console.warn('Error accessing localStorage:', error);
      return 'tr';
    }
  });

  // Save language preference to localStorage
  const setLanguage = (lang: Language) => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang);
      }
      setLanguageState(lang);
    } catch (error) {
      console.warn('Error saving to localStorage:', error);
      setLanguageState(lang);
    }
  };

  // Get current translations
  const currentTranslations = translations[language];

  // Translation function with dot notation support
  const t = (key: string): any => {
    try {
      if (!key || !currentTranslations) {
        return key || '';
      }
      
      const keys = key.split('.');
      let value: any = currentTranslations;
      
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) {
          console.warn(`Translation key not found: ${key}`);
          return key; // Return the key itself if translation not found
        }
      }
      
      return value !== undefined ? value : key;
    } catch (error) {
      console.error('Translation error:', error, 'for key:', key);
      return key || '';
    }
  };

  // Update document language attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value: LanguageContextType = {
    language,
    translations: currentTranslations,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Utility hook for easy translation access
export const useTranslation = () => {
  const { t } = useLanguage();
  return { t };
};
