<template>
  <div>
    <template v-if="note">
      <header class="note-hero">
        <div class="note-hero__inner">
          <RouterLink to="/notes" class="back-link">{{ $t('notes.backToNotes') }}</RouterLink>
          <span class="note-hero__date">{{ formatDate(note.date) }}</span>
          <h1 class="note-hero__title">{{ localized(note.title) }}</h1>
          <ul class="note-hero__tags" aria-label="Tags">
            <li v-for="tag in note.tags" :key="tag" class="note-hero__tag">{{ tag }}</li>
          </ul>
        </div>
      </header>

      <main class="note-body">
        <div class="note-body__inner">
          <p v-for="(paragraph, i) in localized(note.content)" :key="i">{{ paragraph }}</p>
        </div>
      </main>
    </template>

    <div v-else class="note-missing">
      <p>{{ $t('notes.empty') }}</p>
      <RouterLink to="/notes" class="btn btn--ghost">{{ $t('notes.backToNotes') }}</RouterLink>
    </div>

    <div class="back-footer">
      <div class="back-footer__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@unhead/vue'
import { getNoteBySlug } from '@/data/notes.js'

const props = defineProps({
  slug: { type: String, required: true },
})

const { locale, t } = useI18n()

const note = computed(() => getNoteBySlug(props.slug))
const localized = (field) => (locale.value === 'fr' ? field.fr : field.en)

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

useHead({
  title: computed(() =>
    note.value ? `${localized(note.value.title)} · Gaël Röthlin` : `${t('notes.empty')} · Gaël Röthlin`
  ),
  meta: [
    {
      name: 'description',
      content: computed(() => (note.value ? localized(note.value.excerpt) : t('notes.hero.subtitle'))),
    },
  ],
})
</script>

<style scoped>
.note-hero {
  padding: 100px 40px 48px;
  border-bottom: 1px solid var(--border);
}
.note-hero__inner {
  max-width: 720px;
  margin: 0 auto;
}
.back-link {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  margin-bottom: 32px;
  transition: color 0.2s;
  text-decoration: none;
}
.back-link:hover { color: var(--accent); }

.note-hero__date {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  margin-bottom: 14px;
}
.note-hero__title {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 600;
  letter-spacing: -0.015em;
  color: var(--text);
  line-height: 1.25;
  margin: 0 0 20px;
}
.note-hero__tags {
  list-style: none;
  display: flex;
  gap: 8px;
  padding: 0;
  margin: 0;
}
.note-hero__tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  background: var(--accent-light);
  padding: 3px 10px;
  border-radius: 2px;
}

.note-body {
  padding: 48px 40px 80px;
}
.note-body__inner {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.note-body__inner p {
  font-size: 15px;
  line-height: 1.85;
  color: var(--text-2);
  margin: 0;
}

.note-missing {
  padding: 120px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: var(--text-2);
}

.back-footer {
  padding: 32px 40px 64px;
  border-top: 1px solid var(--border);
}
.back-footer__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

@media (max-width: 680px) {
  .note-hero { padding: 80px 20px 40px; }
  .note-body { padding: 40px 20px 60px; }
}
</style>
