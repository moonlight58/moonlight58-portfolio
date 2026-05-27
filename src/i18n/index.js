import { createI18n } from 'vue-i18n'
import en from './en.json'
import fr from './fr.json'

// Get saved language from localStorage or default to 'fr'
const savedLocale = localStorage.getItem('preferred-language') || 'fr'

export default createI18n({
  locale: savedLocale,
  fallbackLocale: 'fr',
  messages: {
    en,
    fr
  }
})
