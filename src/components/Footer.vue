<template>
  <!--  FOOTER  -->
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <span class="footer__name">Gaël Röthlin</span>
          <span class="footer__desc">{{ $t('footer.description') }}</span>
        </div>

        <nav class="footer__col" aria-label="Footer navigation">
          <RouterLink :to="{ path: '/', hash: '#work' }" class="footer__link">{{
            $t('nav.work')
          }}</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#skills' }" class="footer__link">{{
            $t('nav.skills')
          }}</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }" class="footer__link">{{
            $t('nav.contact')
          }}</RouterLink>
          <RouterLink to="/projects" class="footer__link">{{
            $t('footer.projectsLink')
          }}</RouterLink>
        </nav>

        <div class="footer__col">
          <span class="footer__col-heading">{{ $t('footer.connectHeading') }}</span>
          <a
            href="https://github.com/moonlight58"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__link"
          >{{ $t('footer.github') }} ↗</a>
          <a
            href="https://www.instagram.com/osiris._25"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__link"
          >{{ $t('footer.instagram') }} ↗</a>
          <a href="mailto:gael.rothlin@edu.univ-fcomte.fr" class="footer__link">{{
            $t('footer.email')
          }}</a>
        </div>
      </div>

      <div class="footer__bottom">
        <span class="footer__copy"
          >© {{ new Date().getFullYear() }} Gaël Röthlin · {{ $t('footer.allRightsReserved') }}</span
        >
        <span class="footer__credit">{{ $t('footer.credit') }}</span>
        <button type="button" class="footer__top-btn" @click="scrollToTop">
          ↑ {{ $t('footer.backToTop') }}
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
/*
   FOOTER
 */
.footer {
  padding: 48px 40px 32px;
  border-top: 1px solid var(--border);
  background: var(--bg);
}

.footer__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

.footer__top {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
  padding-bottom: 32px;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 300px;
}

.footer__name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
  letter-spacing: 0.02em;
}

.footer__desc {
  font-size: 12px;
  line-height: 1.6;
  color: var(--text-3);
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer__col-heading {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-2);
}

.footer__link {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  transition: color 0.2s;
}
.footer__link:hover {
  color: var(--text);
}

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.footer__copy,
.footer__credit {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
}

.footer__top-btn {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}
.footer__top-btn:hover {
  color: var(--text);
}

@media (max-width: 680px) {
  .footer {
    padding: 32px 20px 24px;
  }

  .footer__top {
    flex-direction: column;
    gap: 28px;
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
