<template>
  <div>
    <!-- HEADER -->
    <section class="page-header">
      <div class="page-header__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>
        <div class="page-header__text">
          <p class="page-header__eyebrow">{{ $t('projects.hero.subtitle') }}</p>
          <h1 class="page-header__title">{{ $t('projects.hero.title') }}</h1>
        </div>
        <div class="page-header__meta">
          <div class="meta-stat">
            <span class="meta-stat__label">{{ $t('projects.hero.stats.total') }}</span>
            <span class="meta-stat__value">{{ projects.length }}</span>
          </div>
          <div class="meta-stat">
            <span class="meta-stat__label">{{ $t('projects.hero.stats.stars') }}</span>
            <span class="meta-stat__value">{{ totalStars }}</span>
          </div>
          <button
            class="refresh-btn"
            @click="refresh"
            :disabled="loading"
            :aria-label="loading ? $t('projects.hero.actions.syncing') : $t('projects.hero.actions.refresh')"
          >
            <span class="refresh-btn__icon" :class="{ spinning: loading }">↻</span>
            {{ loading ? $t('projects.hero.actions.syncing') : $t('projects.hero.actions.refresh') }}
          </button>
        </div>
      </div>
    </section>

    <!-- MAIN -->
    <section class="projects-section">
      <div class="projects-section__inner">

        <!-- TOOLBAR -->
        <div class="toolbar">
          <div class="toolbar__search">
            <input
              v-model="techSearch"
              type="text"
              :placeholder="$t('projects.filter.searchPlaceholder')"
              class="search-input"
              aria-label="Search by technology"
            />
          </div>

          <div v-if="availableStatuses.length > 1" class="toolbar__filters">
            <button
              v-for="s in availableStatuses"
              :key="s"
              class="filter-chip"
              :class="{ 'filter-chip--active': selectedStatuses.includes(s) }"
              @click="toggleStatus(s)"
              :aria-pressed="selectedStatuses.includes(s)"
            >{{ s }}</button>
            <button
              v-if="hasActiveFilters"
              class="filter-chip filter-chip--reset"
              @click="resetFilters"
            >{{ $t('projects.filter.reset') }}</button>
          </div>

          <p v-if="hasActiveFilters && !loading" class="toolbar__count">
            {{ filteredProjects.length }} / {{ projects.length }}
          </p>
        </div>

        <!-- SKELETON -->
        <div v-if="loading && projects.length === 0" class="repo-list">
          <div v-for="i in 8" :key="i" class="repo-row repo-row--skeleton">
            <div class="skeleton skeleton--index"></div>
            <div class="skeleton skeleton--name"></div>
            <div class="skeleton skeleton--desc"></div>
            <div class="skeleton skeleton--lang"></div>
          </div>
        </div>

        <!-- ERROR -->
        <div v-else-if="error" class="state-empty">
          <p class="state-empty__msg">{{ error }}</p>
          <button class="btn btn--ghost btn--sm" @click="refresh">
            {{ $t('projects.section.retry') }}
          </button>
        </div>

        <!-- EMPTY -->
        <div v-else-if="filteredProjects.length === 0" class="state-empty">
          <p class="state-empty__msg">{{ $t('projects.section.empty') }}</p>
        </div>

        <!-- REPO LIST -->
        <ol v-else class="repo-list" aria-label="GitHub repositories">
          <li
            v-for="(project, i) in filteredProjects"
            :key="project.id"
            class="repo-row"
          >
            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="repo-row__link"
              :aria-label="`View ${project.name} on GitHub`"
            >
              <!-- Index -->
              <span class="repo-row__index">{{ String(i + 1).padStart(2, '0') }}</span>

              <!-- Name + description -->
              <div class="repo-row__body">
                <span class="repo-row__name">{{ project.name }}</span>
                <span class="repo-row__desc">{{ project.description }}</span>
              </div>

              <!-- Topics -->
              <ul class="repo-row__topics" aria-label="Topics">
                <li
                  v-for="topic in project.topics.slice(0, 3)"
                  :key="topic"
                  class="repo-row__topic"
                >{{ topic }}</li>
              </ul>

              <!-- Language + stats -->
              <div class="repo-row__right">
                <span v-if="project.language" class="repo-row__lang">{{ project.language }}</span>
                <span v-if="project.stars > 0" class="repo-row__stars">★ {{ project.stars }}</span>
              </div>

              <!-- Arrow -->
              <span class="repo-row__arrow" aria-hidden="true">→</span>
            </a>
          </li>
        </ol>

        <p class="sync-note">{{ $t('projects.footer.synced') }}</p>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer__inner">
        <span class="footer__copy">© {{ new Date().getFullYear() }} Gaël Röthlin</span>
        <nav class="footer__nav" aria-label="Footer navigation">
          <RouterLink to="/" class="footer__link">{{ $t('common.back') }}</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }" class="footer__link">
            {{ $t('nav.contact') }}
          </RouterLink>
        </nav>
        <span class="footer__credit">{{ $t('footer.credit') }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getPublicProjectsWithDescription, clearProjectsCache } from '@/services/githubService.js'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const rawProjects      = ref([])
const projects         = ref([])
const loading          = ref(false)
const error            = ref(null)
const techSearch       = ref('')
const selectedStatuses = ref([])

const totalStars = computed(() =>
  projects.value.reduce((s, p) => s + (p.stars || 0), 0)
)

const availableStatuses = computed(() => {
  const set = new Set(projects.value.map(p => p.status).filter(Boolean))
  return [...set].sort()
})

const hasActiveFilters = computed(() =>
  selectedStatuses.value.length > 0 || techSearch.value.trim().length > 0
)

const filteredProjects = computed(() =>
  projects.value.filter(p => {
    if (selectedStatuses.value.length && !selectedStatuses.value.includes(p.status)) return false
    if (techSearch.value.trim()) {
      const q = techSearch.value.toLowerCase()
      const inTopics = p.topics?.some(t => t.toLowerCase().includes(q))
      const inLang   = p.language?.toLowerCase().includes(q)
      if (!inTopics && !inLang) return false
    }
    return true
  })
)

const toggleStatus = (s) => {
  const i = selectedStatuses.value.indexOf(s)
  i > -1
    ? selectedStatuses.value.splice(i, 1)
    : selectedStatuses.value.push(s)
}

const resetFilters = () => {
  selectedStatuses.value = []
  techSearch.value = ''
}

const parseProjects = () => {
  projects.value = rawProjects.value.map(p => {
    let desc   = p.description || ''
    let status = null

    const statusMatch = desc.match(/\[STATUS:\s*(.+?)\]/)
    if (statusMatch) {
      status = statusMatch[1].trim()
      desc   = desc.replace(/\s*\[STATUS:.+?\]/, '')
    }

    const frMatch = desc.match(/FR:\s*(.+?)\s*EN:/)
    const enMatch = desc.match(/EN:\s*(.+)$/)

    return {
      ...p,
      description:
        locale.value === 'fr' && frMatch
          ? frMatch[1].trim()
          : enMatch
          ? enMatch[1].trim()
          : desc,
      status: status || 'Active',
    }
  })
}

const load = async (force = false) => {
  loading.value = true
  error.value   = null
  try {
    rawProjects.value = await getPublicProjectsWithDescription(force)
    parseProjects()
  } catch {
    error.value = 'Could not fetch repositories. Please retry.'
  } finally {
    loading.value = false
  }
}

const refresh = () => {
  clearProjectsCache()
  load(true)
}

onMounted(() => load())
</script>

<style scoped>
/* ─────────────────────────────────────────
   PAGE HEADER
───────────────────────────────────────── */
.page-header {
  padding: 100px 40px 64px;
  border-bottom: 1px solid var(--border);
}

.page-header__inner {
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

.page-header__eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 12px;
}

.page-header__title {
  font-family: var(--font-serif);
  font-size: clamp(2.6rem, 5vw, 4rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.08;
  color: var(--text);
  margin: 0 0 48px;
}

.page-header__meta {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.meta-stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.meta-stat__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
}

.meta-stat__value {
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 500;
  color: var(--text);
}

.refresh-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  padding: 9px 18px;
  background: transparent;
  border: 1px solid var(--border-mid);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--text-3);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.refresh-btn:hover:not(:disabled) {
  border-color: var(--text);
  color: var(--text);
}
.refresh-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.refresh-btn__icon {
  display: inline-block;
  transition: transform 0.6s ease;
}
.refresh-btn__icon.spinning {
  animation: spin 0.8s linear infinite;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ─────────────────────────────────────────
   SECTION WRAPPER
───────────────────────────────────────── */
.projects-section {
  padding: 56px 40px 80px;
}

.projects-section__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

/* ─────────────────────────────────────────
   TOOLBAR
───────────────────────────────────────── */
.toolbar {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.toolbar__search {
  flex: 1;
  min-width: 180px;
}

.search-input {
  width: 100%;
  padding: 9px 14px;
  border: 1px solid var(--border-mid);
  border-radius: 4px;
  background: var(--bg-tint);
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--text);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.search-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}
.search-input::placeholder { color: var(--text-3); opacity: 0.7; }

.toolbar__filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-chip {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 5px 12px;
  border: 1px solid var(--border-mid);
  border-radius: 20px;
  background: transparent;
  color: var(--text-3);
  cursor: pointer;
  letter-spacing: 0.03em;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}
.filter-chip:hover { border-color: var(--text-2); color: var(--text-2); }
.filter-chip--active {
  background: var(--text);
  border-color: var(--text);
  color: var(--bg);
}
.filter-chip--reset {
  border-color: transparent;
  color: var(--accent);
}
.filter-chip--reset:hover { text-decoration: underline; }

.toolbar__count {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  white-space: nowrap;
  margin-left: auto;
}

/* ─────────────────────────────────────────
   REPO LIST
───────────────────────────────────────── */
.repo-list {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
  display: flex;
  flex-direction: column;
}

/* Each row */
.repo-row {
  border-bottom: 1px solid var(--border);
}
.repo-row:first-child {
  border-top: 1px solid var(--border);
}

.repo-row__link {
  display: grid;
  grid-template-columns: 40px 1fr auto auto 24px;
  align-items: center;
  gap: 20px;
  padding: 20px 8px;
  text-decoration: none;
  color: inherit;
  transition: background 0.15s;
}
.repo-row__link:hover { background: var(--bg-tint); }

/* Index */
.repo-row__index {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  flex-shrink: 0;
}

/* Name + desc */
.repo-row__body {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.repo-row__name {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.2s;
}
.repo-row__link:hover .repo-row__name { color: var(--accent); }

.repo-row__desc {
  font-size: 13px;
  color: var(--text-3);
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Topics */
.repo-row__topics {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: flex-end;
}

.repo-row__topic {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-3);
  background: var(--bg-inset);
  border: 1px solid var(--border);
  padding: 2px 8px;
  border-radius: 2px;
  letter-spacing: 0.02em;
  transition: border-color 0.2s, color 0.2s;
}
.repo-row__link:hover .repo-row__topic {
  border-color: var(--border-mid);
  color: var(--text-2);
}

/* Language + stars */
.repo-row__right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  flex-shrink: 0;
}

.repo-row__lang {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--accent);
  background: var(--accent-light);
  padding: 2px 8px;
  border-radius: 2px;
  letter-spacing: 0.03em;
  white-space: nowrap;
}

.repo-row__stars {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-3);
}

/* Arrow */
.repo-row__arrow {
  font-size: 14px;
  color: var(--text-3);
  transition: transform 0.2s, color 0.2s;
  flex-shrink: 0;
}
.repo-row__link:hover .repo-row__arrow {
  color: var(--accent);
  transform: translateX(3px);
}

/* ─────────────────────────────────────────
   SKELETON
───────────────────────────────────────── */
.repo-row--skeleton .repo-row__link {
  pointer-events: none;
}

.skeleton {
  border-radius: 3px;
  background: var(--bg-inset);
  animation: shimmer 1.4s ease-in-out infinite;
}
@keyframes shimmer {
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
}

.skeleton--index  { width: 24px;  height: 12px; }
.skeleton--name   { width: 180px; height: 16px; }
.skeleton--desc   { width: 300px; height: 12px; }
.skeleton--lang   { width: 56px;  height: 18px; border-radius: 2px; }

/* ─────────────────────────────────────────
   STATES
───────────────────────────────────────── */
.state-empty {
  padding: 80px 0;
  text-align: center;
}

.state-empty__msg {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-3);
  margin-bottom: 20px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 4px;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  border: 1.5px solid transparent;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  text-decoration: none;
}
.btn--ghost {
  background: transparent;
  color: var(--text);
  border-color: var(--border-mid);
}
.btn--ghost:hover { border-color: var(--text); }
.btn--sm { padding: 8px 16px; font-size: 12px; }

/* ─────────────────────────────────────────
   SYNC NOTE
───────────────────────────────────────── */
.sync-note {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  text-align: right;
  margin-top: 8px;
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
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
  text-decoration: none;
  transition: color 0.2s;
}
.footer__link:hover { color: var(--text); }

/* ─────────────────────────────────────────
   RESPONSIVE
───────────────────────────────────────── */
@media (max-width: 900px) {
  /* Collapse topics column on tablet */
  .repo-row__link {
    grid-template-columns: 36px 1fr auto 20px;
  }
  .repo-row__topics { display: none; }
}

@media (max-width: 680px) {
  .page-header  { padding: 80px 20px 48px; }
  .projects-section { padding: 40px 20px 60px; }
  .footer { padding: 24px 20px; }

  .page-header__meta { gap: 24px; }
  .refresh-btn { margin-left: 0; }

  /* Stack name + desc, hide desc on mobile */
  .repo-row__link {
    grid-template-columns: 32px 1fr auto 20px;
    gap: 12px;
    padding: 16px 4px;
  }
  .repo-row__desc { display: none; }
  .repo-row__right { display: none; }

  .footer__inner { flex-direction: column; align-items: flex-start; gap: 12px; }
  .footer__nav   { flex-wrap: wrap; gap: 16px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
