<template>
  <div class="notfound">
    <div class="notfound__inner">
      <span class="notfound__code" aria-hidden="true">404</span>
      <h1 class="notfound__title">{{ $t('notFound.title') }}</h1>
      <p class="notfound__desc">{{ $t('notFound.description') }}</p>

      <div class="notfound__actions">
        <RouterLink to="/" class="btn btn--primary">{{ $t('notFound.home') }}</RouterLink>
        <RouterLink to="/projects" class="btn btn--ghost">{{ $t('notFound.projects') }}</RouterLink>
      </div>

      <p class="notfound__meta">
        <span class="notfound__dot" aria-hidden="true"></span>
        {{ $t('notFound.meta') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()

useHead({
  title: computed(() => `${t('notFound.title')} · Gaël Röthlin`),
  meta: [
    { name: 'description', content: computed(() => t('notFound.description')) },
    { name: 'robots', content: 'noindex, follow' },
  ],
})
</script>

<style scoped>
.notfound {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 40px;
}

.notfound__inner {
  max-width: 520px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.notfound__code {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.12em;
  color: var(--accent);
  background: var(--accent-light);
  padding: 4px 12px;
  border-radius: 20px;
}

.notfound__title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 5vw, 3rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0;
}

.notfound__desc {
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-2);
  margin: 0;
}

.notfound__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 12px;
}

.notfound__meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  width: 100%;
  justify-content: center;
}

.notfound__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-3);
}

@media (max-width: 680px) {
  .notfound { padding: 80px 20px; }
}
</style>
