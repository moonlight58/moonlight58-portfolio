import { createI18n } from 'vue-i18n'

// Eagerly load every namespace file under i18n/locales/<locale>/<namespace>.json
// Each file is merged back under its namespace key, so translation keys in
// templates stay the same (e.g. $t('home.title'), $t('nav.about')).
const modules = import.meta.glob('./i18n/locales/*/*.json', { eager: true })

const messages = {}
for (const path in modules) {
  const [, locale, namespace] = path.match(/\.\/i18n\/locales\/([^/]+)\/([^/]+)\.json$/)
  messages[locale] ??= {}
  messages[locale][namespace] = modules[path].default
}

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('preferred-language') || 'fr',
  fallbackLocale: 'en',
  messages,
})

export default i18n
