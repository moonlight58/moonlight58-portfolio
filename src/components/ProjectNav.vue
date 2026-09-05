<template>
  <nav class="project-nav" aria-label="Project navigation">
    <RouterLink v-if="prev" :to="prev.link" class="project-nav__link project-nav__link--prev">
      <span class="project-nav__arrow" aria-hidden="true">←</span>
      <span class="project-nav__text">
        <span class="project-nav__label">{{ $t('common.prevProject') }}</span>
        <span class="project-nav__name">{{ $i18n.locale === 'fr' ? prev.nameFr : prev.nameEn }}</span>
      </span>
    </RouterLink>
    <span v-else class="project-nav__spacer"></span>

    <RouterLink v-if="next" :to="next.link" class="project-nav__link project-nav__link--next">
      <span class="project-nav__text">
        <span class="project-nav__label">{{ $t('common.nextProject') }}</span>
        <span class="project-nav__name">{{ $i18n.locale === 'fr' ? next.nameFr : next.nameEn }}</span>
      </span>
      <span class="project-nav__arrow" aria-hidden="true">→</span>
    </RouterLink>
    <span v-else class="project-nav__spacer"></span>
  </nav>
</template>

<script setup>
defineProps({
  prev: { type: Object, default: null },
  next: { type: Object, default: null },
})
</script>

<style scoped>
.project-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 40px 0;
  border-top: 1px solid var(--border);
  margin-top: 40px;
}

.project-nav__link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 20px 24px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg);
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
}

.project-nav__link:hover {
  border-color: var(--accent);
  background: var(--bg-tint);
  transform: translateY(-1px);
}

.project-nav__link--next {
  justify-content: flex-end;
  text-align: right;
  grid-column: 2;
}

.project-nav__spacer {
  grid-column: auto;
}

.project-nav__arrow {
  font-size: 16px;
  color: var(--accent);
  flex-shrink: 0;
}

.project-nav__text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.project-nav__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
}

.project-nav__name {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 680px) {
  .project-nav {
    grid-template-columns: 1fr;
  }
  .project-nav__link--next {
    grid-column: auto;
  }
}
</style>
