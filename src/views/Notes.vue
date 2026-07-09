<template>
  <div>
    <header class="notes-header">
      <div class="notes-header__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>
        <p class="notes-header__eyebrow">{{ $t('notes.hero.eyebrow') }}</p>
        <h1 class="notes-header__title">{{ $t('notes.hero.title') }}</h1>
        <p class="notes-header__subtitle">{{ $t('notes.hero.subtitle') }}</p>
      </div>
    </header>

    <section class="notes-section">
      <div class="notes-section__inner">
        <ol v-if="sortedNotes.length" class="note-list">
          <li v-for="note in sortedNotes" :key="note.slug" class="note-row">
            <RouterLink :to="`/notes/${note.slug}`" class="note-row__link">
              <span class="note-row__date">{{ formatDate(note.date) }}</span>
              <div class="note-row__body">
                <span class="note-row__title">{{ localized(note.title) }}</span>
                <span class="note-row__excerpt">{{ localized(note.excerpt) }}</span>
              </div>
              <ul class="note-row__tags" aria-label="Tags">
                <li v-for="tag in note.tags" :key="tag" class="note-row__tag">{{ tag }}</li>
              </ul>
              <span class="note-row__arrow" aria-hidden="true">→</span>
            </RouterLink>
          </li>
        </ol>
        <p v-else class="notes-empty">{{ $t('notes.empty') }}</p>
      </div>
    </section>

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
import { notes } from '@/data/notes.js'

const { locale, t } = useI18n()

const localized = (field) => (locale.value === 'fr' ? field.fr : field.en)

const sortedNotes = computed(() =>
  [...notes].sort((a, b) => new Date(b.date) - new Date(a.date))
)

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString(locale.value === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

useHead({
  title: computed(() => `${t('notes.hero.title')} · Gaël Röthlin`),
  meta: [{ name: 'description', content: computed(() => t('notes.hero.subtitle')) }],
})
</script>

<style scoped>
.notes-header {
  padding: 100px 40px 56px;
  border-bottom: 1px solid var(--border);
}
.notes-header__inner {
  max-width: var(--max-w);
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

.notes-header__eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}
.notes-header__title {
  font-family: var(--font-serif);
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text);
  margin: 0 0 16px;
}
.notes-header__subtitle {
  font-size: 15px;
  color: var(--text-2);
  line-height: 1.7;
  max-width: 560px;
}

.notes-section {
  padding: 48px 40px 80px;
}
.notes-section__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

.note-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.note-row { border-bottom: 1px solid var(--border); }
.note-row:first-child { border-top: 1px solid var(--border); }

.note-row__link {
  display: grid;
  grid-template-columns: 100px 1fr auto 20px;
  align-items: center;
  gap: 20px;
  padding: 22px 8px;
  text-decoration: none;
  color: inherit;
  transition: background 0.15s;
}
.note-row__link:hover { background: var(--bg-tint); }

.note-row__date {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.03em;
}

.note-row__body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}
.note-row__title {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text);
  transition: color 0.2s;
}
.note-row__link:hover .note-row__title { color: var(--accent); }
.note-row__excerpt {
  font-size: 13px;
  color: var(--text-3);
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.note-row__tags {
  list-style: none;
  display: flex;
  gap: 6px;
  padding: 0;
  margin: 0;
}
.note-row__tag {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-3);
  background: var(--bg-inset);
  border: 1px solid var(--border);
  padding: 2px 8px;
  border-radius: 2px;
}

.note-row__arrow {
  font-size: 14px;
  color: var(--text-3);
  transition: transform 0.2s, color 0.2s;
}
.note-row__link:hover .note-row__arrow {
  color: var(--accent);
  transform: translateX(3px);
}

.notes-empty {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-3);
  padding: 60px 0;
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
  .notes-header { padding: 80px 20px 48px; }
  .notes-section { padding: 32px 20px 60px; }
  .note-row__link {
    grid-template-columns: 1fr 20px;
    grid-template-areas: "body arrow" "tags tags";
    gap: 8px 12px;
  }
  .note-row__date { display: none; }
  .note-row__tags { grid-area: tags; }
}
</style>
