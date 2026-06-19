import { createApp, watch } from 'vue'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)

// Keep <html lang> in sync with the active locale (accessibility + SEO).
// Covers both the initial locale and every later switch (e.g. the NavBar toggle).
const applyHtmlLang = (locale) => {
  document.documentElement.lang = locale
}
applyHtmlLang(i18n.global.locale.value)
watch(i18n.global.locale, applyHtmlLang)

app.mount('#app')
