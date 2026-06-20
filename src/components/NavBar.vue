<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'

const { locale } = useI18n()
const { theme, toggleTheme } = useTheme()
const isScrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

const changeLang = (lang) => {
  locale.value = lang
  localStorage.setItem('preferred-language', lang)
}

const closeMobileMenu = () => {
  mobileOpen.value = false
}
</script>

<template>
  <!--  NAV  -->
  <header class="nav" :class="{ 'nav--scrolled': isScrolled }">
    <RouterLink to="/" class="nav__logo">GR</RouterLink>

    <nav class="nav__links" aria-label="Primary navigation">
      <RouterLink :to="{ path: '/', hash: '#work' }" class="nav__link">
        {{ $t('nav.work') }}
      </RouterLink>
      <RouterLink :to="{ path: '/', hash: '#skills' }" class="nav__link">
        {{ $t('nav.skills') }}
      </RouterLink>
      <RouterLink :to="{ path: '/', hash: '#contact' }" class="nav__link">
        {{ $t('nav.contact') }}
      </RouterLink>
    </nav>

    <div class="nav__right">
      <button
        class="theme-toggle"
        @click="toggleTheme"
        :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
        :title="theme === 'dark' ? 'Light mode' : 'Dark mode'"
      >
        <span aria-hidden="true">{{ theme === 'dark' ? '☀' : '☾' }}</span>
      </button>
      <button
        class="lang-toggle"
        @click="changeLang($i18n.locale === 'fr' ? 'en' : 'fr')"
        :aria-label="`Switch to ${$i18n.locale === 'fr' ? 'English' : 'French'}`"
      >
        {{ $i18n.locale === 'fr' ? 'EN' : 'FR' }}
      </button>
      <button
        class="nav__burger"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-label="Toggle menu"
      >
        <span></span><span></span>
      </button>
    </div>

    <nav
      class="nav__mobile"
      :class="{ 'nav__mobile--open': mobileOpen }"
      aria-label="Mobile navigation"
    >
      <RouterLink :to="{ path: '/', hash: '#work' }" class="nav__mobile-link" @click="closeMobileMenu">
        {{ $t('nav.work') }}
      </RouterLink>
      <RouterLink :to="{ path: '/', hash: '#skills' }" class="nav__mobile-link" @click="closeMobileMenu">
        {{ $t('nav.skills') }}
      </RouterLink>
      <RouterLink :to="{ path: '/', hash: '#contact' }" class="nav__mobile-link" @click="closeMobileMenu">
        {{ $t('nav.contact') }}
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>
/* 
   NAV
 */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  background: var(--bg);
  border-bottom: 1px solid transparent;
  transition:
    border-color 0.3s,
    box-shadow 0.3s;
}

.nav--scrolled {
  border-bottom-color: var(--border);
  box-shadow: 0 1px 12px rgba(28, 25, 23, 0.05);
}

.nav__logo {
  font-family: var(--font-serif);
  font-size: 20px;
  font-weight: 600;
  color: var(--text);
  letter-spacing: 0.02em;
  margin-right: auto;
  transition: color 0.2s;
  text-decoration: none;
}
.nav__logo:hover {
  color: var(--accent);
}

.nav__links {
  display: flex;
  gap: 32px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__link {
  font-size: 14px;
  font-weight: 400;
  color: var(--text-3);
  transition: color 0.2s;
  position: relative;
  cursor: pointer;
}
.nav__link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent);
  transition: width 0.25s ease;
}
.nav__link:hover,
.nav__link.router-link-active {
  color: var(--text);
}
.nav__link:hover::after,
.nav__link.router-link-active::after {
  width: 100%;
}

.nav__right {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: 40px;
}

.lang-toggle {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  padding: 5px 10px;
  background: transparent;
  border: 1px solid var(--border-mid);
  color: var(--text-3);
  border-radius: 3px;
  transition:
    border-color 0.2s,
    color 0.2s;
  letter-spacing: 0.05em;
}
.lang-toggle:hover {
  border-color: var(--text);
  color: var(--text);
}

.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 28px;
  font-size: 15px;
  line-height: 1;
  background: transparent;
  border: 1px solid var(--border-mid);
  color: var(--text-3);
  border-radius: 3px;
  transition:
    border-color 0.2s,
    color 0.2s;
}
.theme-toggle:hover {
  border-color: var(--text);
  color: var(--text);
}

.nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
  cursor: pointer;
}
.nav__burger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--text);
  transition: transform 0.2s;
}

.nav__mobile {
  display: none;
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  padding: 24px 40px 32px;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 24px 40px 32px;
}
.nav__mobile--open {
  display: flex;
}

.nav__mobile-link {
  font-size: 18px;
  font-family: var(--font-serif);
  color: var(--text-2);
  transition: color 0.2s;
  cursor: pointer;
  text-decoration: none;
}
.nav__mobile-link:hover {
  color: var(--accent);
}

/* Responsive */
@media (max-width: 768px) {
  .nav__links {
    display: none;
  }

  .nav__burger {
    display: flex;
  }

  .nav {
    padding: 0 20px;
  }

  .nav__right {
    margin-left: auto;
  }

  .nav__mobile {
    padding: 24px 20px 32px;
  }
}
</style>
