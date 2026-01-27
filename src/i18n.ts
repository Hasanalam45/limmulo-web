import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './locales/en/translation.json';
import nlTranslations from './locales/nl/translation.json';

i18n
  .use(LanguageDetector) // Detects user's browser language
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      nl: {
        translation: nlTranslations,
      },
    },
    fallbackLng: 'nl', // Default to Dutch
    interpolation: {
      escapeValue: false, // React already escapes
    },
  });

export default i18n;

