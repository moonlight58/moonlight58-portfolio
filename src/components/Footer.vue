<template>
    <!--  FOOTER  -->
    <footer class="footer">
      <div class="footer__inner">
        <span class="footer__copy">© {{ new Date().getFullYear() }} Gaël Röthlin</span>
        <nav class="footer__nav" aria-label="Footer navigation">
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
        <span class="footer__credit">{{ $t('footer.credit') }}</span>
      </div>
    </footer>
</template>
<style>
    /* 
   FOOTER
 */
.footer {
  padding: 32px 40px;
  border-top: 1px solid var(--border);
  background: var(--bg);
}

.footer__inner {
  max-width: var(--max-w);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.footer__copy,
.footer__credit {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
}

.footer__nav {
  display: flex;
  gap: 24px;
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

@media (max-width: 680px) {
    .footer {
        padding: 24px 20px;
    }

    .footer__inner {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
    
    .footer__nav {
        flex-wrap: wrap;
        gap: 16px;
    }
}
</style>