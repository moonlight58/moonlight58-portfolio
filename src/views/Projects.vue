<template>
  <div>
    <section class="page-hero">
      <div class="page-hero__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>
        <h1 class="page-hero__title">{{ $t('projects.hero.title') }}</h1>
        <p class="page-hero__sub">{{ $t('projects.hero.subtitle') }}</p>
      </div>
    </section>

    <section class="projects-section">
      <div class="projects-section__inner">

        <!-- Toolbar -->
        <div class="toolbar">
          <div class="toolbar__stats">
            <span class="toolbar__stat">
              <span class="toolbar__stat-label">{{ $t('projects.hero.stats.total') }}</span>
              <span class="toolbar__stat-value">{{ projects.length }}</span>
            </span>
            <span class="toolbar__stat">
              <span class="toolbar__stat-label">{{ $t('projects.hero.stats.stars') }}</span>
              <span class="toolbar__stat-value">{{ totalStars }}</span>
            </span>
          </div>
          <div class="toolbar__actions">
            <div class="search-wrap">
              <input
                v-model="techSearch"
                type="text"
                :placeholder="$t('projects.filter.searchPlaceholder')"
                class="search-input"
                aria-label="Search by technology"
              />
            </div>
            <button
              class="btn btn--ghost btn--sm"
              @click="refresh"
              :disabled="loading"
              aria-label="Refresh project data"
            >
              {{ loading ? $t('projects.hero.actions.syncing') : $t('projects.hero.actions.refresh') }}
            </button>
          </div>
        </div>

        <!-- Filter chips -->
        <div v-if="availableStatuses.length > 1" class="filter-chips">
          <button
            v-for="s in availableStatuses"
            :key="s"
            class="chip"
            :class="{ 'chip--active': selectedStatuses.includes(s) }"
            @click="toggleStatus(s)"
            :aria-pressed="selectedStatuses.includes(s)"
          >{{ s }}</button>
          <button
            v-if="hasActiveFilters"
            class="chip chip--reset"
            @click="resetFilters"
          >{{ $t('projects.filter.reset') }}</button>
        </div>

        <!-- Loading skeleton -->
        <div v-if="loading && projects.length === 0" class="repo-grid">
          <div v-for="i in 9" :key="i" class="repo-card repo-card--skeleton">
            <div class="skel skel--title"></div>
            <div class="skel skel--body"></div>
            <div class="skel skel--body short"></div>
            <div class="skel skel--tags"></div>
          </div>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="state-box">
          <p class="state-box__msg">{{ error }}</p>
          <button class="btn btn--ghost btn--sm" @click="refresh">{{ $t('projects.section.retry') }}</button>
        </div>

        <!-- Empty -->
        <div v-else-if="filteredProjects.length === 0" class="state-box">
          <p class="state-box__msg">{{ $t('projects.section.empty') }}</p>
        </div>

        <!-- Grid -->
        <div v-else class="repo-grid">
          <a
            v-for="(project, i) in filteredProjects"
            :key="project.id"
            :href="project.url"
            target="_blank"
            rel="noopener noreferrer"
            class="repo-card"
            :aria-label="`View ${project.name} on GitHub`"
          >
            <div class="repo-card__top">
              <span class="repo-card__index">{{ String(i + 1).padStart(2, '0') }}</span>
              <span v-if="project.language" class="repo-card__lang">{{ project.language }}</span>
            </div>
            <h3 class="repo-card__name">{{ project.name }}</h3>
            <p class="repo-card__desc">{{ project.description }}</p>
            <div class="repo-card__bottom">
              <div class="repo-card__topics">
                <span
                  v-for="topic in project.topics.slice(0, 4)"
                  :key="topic"
                  class="repo-card__topic"
                >{{ topic }}</span>
              </div>
              <div class="repo-card__stats">
                <span v-if="project.stars > 0">★ {{ project.stars }}</span>
                <span v-if="project.forks > 0">⑂ {{ project.forks }}</span>
              </div>
            </div>
          </a>
        </div>

        <p class="sync-note">{{ $t('projects.footer.synced') }}</p>
      </div>
    </section>

    <footer class="footer">
      <div class="footer__inner">
        <span class="footer__copy">© {{ new Date().getFullYear() }} Gaël Röthlin</span>
        <nav class="footer__nav" aria-label="Footer navigation">
          <RouterLink to="/" class="footer__link">{{ $t('common.back') }}</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }" class="footer__link">{{ $t('nav.contact') }}</RouterLink>
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

const rawProjects   = ref([])
const projects      = ref([])
const loading       = ref(false)
const error         = ref(null)
const techSearch    = ref('')
const selectedStatuses = ref([])

const totalStars = computed(() => projects.value.reduce((s, p) => s + (p.stars || 0), 0))

const availableStatuses = computed(() => {
  const set = new Set(projects.value.map(p => p.status).filter(Boolean))
  return [...set].sort()
})

const hasActiveFilters = computed(() => selectedStatuses.value.length > 0 || techSearch.value)

const filteredProjects = computed(() => {
  return projects.value.filter(p => {
    if (selectedStatuses.value.length && !selectedStatuses.value.includes(p.status)) return false
    if (techSearch.value) {
      const q = techSearch.value.toLowerCase()
      const inTopics = p.topics?.some(t => t.toLowerCase().includes(q))
      const inLang   = p.language?.toLowerCase().includes(q)
      if (!inTopics && !inLang) return false
    }
    return true
  })
})

const toggleStatus = (s) => {
  const i = selectedStatuses.value.indexOf(s)
  i > -1 ? selectedStatuses.value.splice(i, 1) : selectedStatuses.value.push(s)
}

const resetFilters = () => {
  selectedStatuses.value = []
  techSearch.value = ''
}

const parseProjects = () => {
  projects.value = rawProjects.value.map(p => {
    let desc = p.description || ''
    let status = null
    const statusMatch = desc.match(/\[STATUS:\s*(.+?)\]/)
    if (statusMatch) { status = statusMatch[1].trim(); desc = desc.replace(/\s*\[STATUS:.+?\]/, '') }
    const frMatch = desc.match(/FR:\s*(.+?)\s*EN:/)
    const enMatch = desc.match(/EN:\s*(.+)$/)
    return {
      ...p,
      description: locale.value === 'fr' && frMatch ? frMatch[1].trim() : enMatch ? enMatch[1].trim() : desc,
      status: status || 'Active',
    }
  })
}

const load = async (force = false) => {
  loading.value = true
  error.value = null
  try {
    rawProjects.value = await getPublicProjectsWithDescription(force)
    parseProjects()
  } catch (e) {
    error.value = 'Could not fetch repositories. Please retry.'
  } finally {
    loading.value = false
  }
}

const refresh = () => { clearProjectsCache(); load(true) }

onMounted(() => load())
</script>

<style scoped>
/* Page hero */
.page-hero {
  padding: 100px 40px 60px;
  border-bottom: 1px solid var(--border);
}
.page-hero__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}
.back-link {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  margin-bottom: 28px;
  transition: color 0.2s;
}
.back-link:hover { color: var(--accent); }

.page-hero__title {
  font-family: var(--font-serif);
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 600;
  color: var(--text);
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 12px;
}
.page-hero__sub {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* Section */
.projects-section {
  padding: 60px 40px 80px;
}
.projects-section__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

/* Toolbar */
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.toolbar__stats {
  display: flex;
  gap: 32px;
}
.toolbar__stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.toolbar__stat-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.toolbar__stat-value {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
}
.toolbar__actions {
  display: flex;
  gap: 12px;
  align-items: center;
}

.search-input {
  padding: 8px 14px;
  border: 1px solid var(--border-mid);
  border-radius: 4px;
  background: var(--bg-tint);
  font-family: var(--font-sans);
  font-size: 13px;
  color: var(--text);
  width: 220px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.search-input:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}
.search-input::placeholder { color: var(--text-3); opacity: 0.6; }

.btn--sm { padding: 8px 16px; font-size: 12px; }

/* Filter chips */
.filter-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}
.chip {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 5px 12px;
  border: 1px solid var(--border-mid);
  border-radius: 20px;
  background: transparent;
  color: var(--text-3);
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
  letter-spacing: 0.03em;
}
.chip:hover { border-color: var(--text-2); color: var(--text-2); }
.chip--active {
  background: var(--text);
  border-color: var(--text);
  color: var(--bg);
}
.chip--reset {
  border-color: transparent;
  color: var(--accent);
}
.chip--reset:hover { text-decoration: underline; }

/* Repo grid */
.repo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 24px;
  background: var(--border);
}

.repo-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  background: var(--bg);
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;
}
.repo-card:hover { background: var(--bg-tint); }

.repo-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.repo-card__index {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-3);
  letter-spacing: 0.06em;
}
.repo-card__lang {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--accent);
  background: var(--accent-light);
  padding: 2px 7px;
  border-radius: 2px;
  letter-spacing: 0.03em;
}

.repo-card__name {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  margin: 0;
  line-height: 1.3;
}

.repo-card__desc {
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-3);
  flex: 1;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.repo-card__bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  margin-top: auto;
}
.repo-card__topics {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.repo-card__topic {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-3);
  background: var(--bg-inset);
  border: 1px solid var(--border);
  padding: 2px 7px;
  border-radius: 2px;
}
.repo-card__stats {
  display: flex;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  flex-shrink: 0;
}

/* Skeleton */
.repo-card--skeleton { pointer-events: none; }
.skel {
  border-radius: 3px;
  background: var(--bg-inset);
  animation: shimmer 1.4s infinite;
}
.skel--title  { height: 16px; width: 60%; }
.skel--body   { height: 12px; width: 100%; }
.skel--body.short { width: 75%; }
.skel--tags   { height: 20px; width: 40%; }

@keyframes shimmer {
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
}

/* State */
.state-box {
  padding: 60px;
  text-align: center;
  border: 1px solid var(--border);
  border-radius: 6px;
  margin-bottom: 24px;
}
.state-box__msg {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-3);
  margin-bottom: 16px;
}

.sync-note {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  text-align: right;
}

/* Footer */
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
.footer__copy, .footer__credit {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
}
.footer__nav { display: flex; gap: 24px; }
.footer__link {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  transition: color 0.2s;
}
.footer__link:hover { color: var(--text); }

/* Responsive */
@media (max-width: 1024px) {
  .repo-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 680px) {
  .page-hero  { padding: 80px 20px 40px; }
  .projects-section { padding: 40px 20px 60px; }
  .repo-grid  { grid-template-columns: 1fr; }
  .toolbar    { flex-direction: column; align-items: flex-start; }
  .search-input { width: 100%; }
  .footer     { padding: 24px 20px; }
  .footer__inner { flex-direction: column; align-items: flex-start; }
}
</style>