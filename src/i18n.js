import { createI18n } from 'vue-i18n'
import fr from './i18n/fr.json'
import en from './i18n/en.json'

const messages = {
  fr,
  en,
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('preferred-language') || 'fr',
  fallbackLocale: 'en',
  messages,
})

export default i18n
