import { ref } from 'vue'

const STORAGE_KEY = 'theme'

// The initial value is set by the inline script in index.html (before paint),
// so we read it back from <html data-theme> to stay in sync and avoid a flash.
const theme = ref(document.documentElement.dataset.theme || 'light')

function apply(value) {
  theme.value = value
  document.documentElement.dataset.theme = value
  // Keep the browser UI chrome (mobile address bar) in tune with the theme.
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', value === 'dark' ? '#1a1816' : '#fafaf8')
}

export function useTheme() {
  const setTheme = (value) => {
    apply(value)
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
  }

  const toggleTheme = () => setTheme(theme.value === 'dark' ? 'light' : 'dark')

  return { theme, setTheme, toggleTheme }
}

// Follow OS theme changes, but only while the user hasn't made an explicit choice.
export function initSystemThemeSync() {
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.addEventListener('change', (e) => {
    let stored = null
    try {
      stored = localStorage.getItem(STORAGE_KEY)
    } catch {
      /* ignore */
    }
    if (!stored) apply(e.matches ? 'dark' : 'light')
  })
}
