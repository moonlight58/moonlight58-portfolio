import { createApp, watch } from 'vue'
import { createHead } from '@unhead/vue/client'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { initSystemThemeSync } from './composables/useTheme'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(i18n)
app.use(head)

// Keep <html lang> in sync with the active locale (accessibility + SEO).
// Covers both the initial locale and every later switch (e.g. the NavBar toggle).
const applyHtmlLang = (locale) => {
  document.documentElement.lang = locale
}
applyHtmlLang(i18n.global.locale.value)
watch(i18n.global.locale, applyHtmlLang)

// Follow OS theme changes when the user hasn't set an explicit preference.
initSystemThemeSync()

// ── Privacy-friendly analytics (Plausible) ─────────────────────────────────
// Only loaded in production builds, no cookies, no personal data collected.
// Replace `data-domain` with your own domain if it ever changes.
if (import.meta.env.PROD) {
  const script = document.createElement('script')
  script.defer = true
  script.dataset.domain = 'portfolio.grothlin.fr'
  script.src = 'https://plausible.io/js/script.js'
  document.head.appendChild(script)
}

app.mount('#app')
