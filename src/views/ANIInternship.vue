<template>
  <div>

    <!-- ── HERO ─────────────────────────────────────────────────────────── -->
    <header class="intern-hero">
      <div class="intern-hero__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>

        <div class="intern-hero__grid">
          <div class="intern-hero__text">
            <p class="intern-hero__eyebrow">{{ $t('internshipPage.ani.hero.eyebrow') }}</p>
            <h1 class="intern-hero__title">{{ $t('internshipPage.ani.hero.title') }}</h1>
            <p class="intern-hero__subtitle">{{ $t('internshipPage.ani.hero.jobTitle') }}</p>
          </div>

          <aside class="intern-hero__meta" aria-label="Internship details">
            <dl class="meta-list">
              <div class="meta-row">
                <dt>{{ $t('internshipPage.ani.hero.locationLabel') }}</dt>
                <dd>{{ $t('internshipPage.ani.hero.location') }}</dd>
              </div>
              <div class="meta-row">
                <dt>{{ $t('internshipPage.ani.hero.durationLabel') }}</dt>
                <dd>{{ $t('internshipPage.ani.hero.duration') }}</dd>
              </div>
              <div class="meta-row">
                <dt>{{ $t('internshipPage.ani.hero.statusLabel') }}</dt>
                <dd class="meta-row__status">
                  <span class="status-dot" aria-hidden="true"></span>
                  {{ $t('internshipPage.ani.hero.status') }}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </header>

    <!-- ── MAIN ─────────────────────────────────────────────────────────── -->
    <main>

      <!-- 01 · CONTEXT & MISSION -->
      <section id="context" class="page-section" aria-labelledby="h-context">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">01</span>
            <h2 class="section-header__title" id="h-context">
              {{ $t('internshipPage.ani.context.title') }}
            </h2>
          </header>

          <div class="prose-block">
            <p>{{ $t('internshipPage.ani.context.description1') }}</p>
            <p>{{ $t('internshipPage.ani.context.description2') }}</p>
          </div>

          <!-- Three pillars -->
          <div class="card-row">
            <div class="info-card" v-for="n in 3" :key="`ctx-${n}`">
              <span class="info-card__num">0{{ n }}</span>
              <h3 class="info-card__title">{{ $t(`internshipPage.ani.context.pillar${n}Title`) }}</h3>
              <p class="info-card__desc">{{ $t(`internshipPage.ani.context.pillar${n}Desc`) }}</p>
            </div>
          </div>

          <blockquote class="callout">
            <span class="callout__label">{{ $t('internshipPage.ani.context.missionLabel') }}</span>
            {{ $t('internshipPage.ani.context.missionText') }}
          </blockquote>
        </div>
      </section>

      <!-- 02 · ORGANISATION -->
      <section id="org" class="page-section page-section--tinted" aria-labelledby="h-org">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">02</span>
            <h2 class="section-header__title" id="h-org">
              {{ $t('internshipPage.ani.org.title') }}
            </h2>
          </header>

          <p class="prose-lead">{{ $t('internshipPage.ani.org.description') }}</p>

          <div class="card-row">
            <div class="info-card" v-for="n in 3" :key="`org-${n}`">
              <span class="info-card__num">0{{ n }}</span>
              <h3 class="info-card__title">{{ $t(`internshipPage.ani.org.entity${n}Title`) }}</h3>
              <p class="info-card__desc">{{ $t(`internshipPage.ani.org.entity${n}Desc`) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 03 · OPEN3D-VIEWER -->
      <section id="open3d" class="page-section" aria-labelledby="h-open3d">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">03</span>
            <h2 class="section-header__title" id="h-open3d">
              {{ $t('internshipPage.ani.open3d.title') }}
            </h2>
          </header>

          <p class="prose-lead">{{ $t('internshipPage.ani.open3d.description') }}</p>

          <!-- Tech choices -->
          <h3 class="subsection-title">{{ $t('internshipPage.ani.open3d.techTitle') }}</h3>
          <div class="two-col">
            <div class="highlight-box">
              <h4 class="highlight-box__title">{{ $t('internshipPage.ani.open3d.tech1Title') }}</h4>
              <p class="highlight-box__desc">{{ $t('internshipPage.ani.open3d.tech1Desc') }}</p>
            </div>
            <div class="highlight-box">
              <h4 class="highlight-box__title">{{ $t('internshipPage.ani.open3d.tech2Title') }}</h4>
              <p class="highlight-box__desc">{{ $t('internshipPage.ani.open3d.tech2Desc') }}</p>
            </div>
          </div>

          <!-- Challenges -->
          <h3 class="subsection-title" style="margin-top:48px;">{{ $t('internshipPage.ani.open3d.challengesTitle') }}</h3>
          <div class="two-col">
            <div class="security-method">
              <div class="security-method__header">
                <span class="security-method__num">01</span>
                <h4>{{ $t('internshipPage.ani.open3d.challenge1Title') }}</h4>
              </div>
              <p>{{ $t('internshipPage.ani.open3d.challenge1Desc') }}</p>
            </div>
            <div class="security-method">
              <div class="security-method__header">
                <span class="security-method__num">02</span>
                <h4>{{ $t('internshipPage.ani.open3d.challenge2Title') }}</h4>
              </div>
              <p>{{ $t('internshipPage.ani.open3d.challenge2Desc') }}</p>
            </div>
          </div>

          <!-- Deliverables -->
          <h3 class="subsection-title" style="margin-top:48px;">{{ $t('internshipPage.ani.open3d.deliverablesTitle') }}</h3>
          <div class="feature-grid">
            <div class="feature-card" v-for="n in 4" :key="`del-${n}`">
              <h4 class="feature-card__title">{{ $t(`internshipPage.ani.open3d.deliverable${n}Title`) }}</h4>
              <p class="feature-card__desc">{{ $t(`internshipPage.ani.open3d.deliverable${n}Desc`) }}</p>
            </div>
          </div>

          <div class="highlight-box callout--accent-box">
            <h4 class="highlight-box__title">{{ $t('internshipPage.ani.open3d.repoTitle') }}</h4>
            <p class="highlight-box__desc">
              {{ $t('internshipPage.ani.open3d.repoDesc') }}
              <a href="https://github.com/moonlight58/open3D-viewer" target="_blank" rel="noopener noreferrer" class="inline-link">
                github.com/moonlight58/open3D-viewer ↗
              </a>
            </p>
          </div>
        </div>
      </section>

      <!-- 04 · IA ANNIE -->
      <section id="annie" class="page-section page-section--tinted" aria-labelledby="h-annie">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">04</span>
            <h2 class="section-header__title" id="h-annie">
              {{ $t('internshipPage.ani.annie.title') }}
            </h2>
          </header>

          <p class="prose-lead">{{ $t('internshipPage.ani.annie.description') }}</p>

          <!-- Stack -->
          <h3 class="subsection-title">{{ $t('internshipPage.ani.annie.stackTitle') }}</h3>
          <div class="tech-columns">
            <div class="tech-group">
              <h4 class="tech-group__title">{{ $t('internshipPage.ani.annie.infraTitle') }}</h4>
              <ul class="tech-list">
                <li v-for="n in 4" :key="`infra-${n}`" class="tech-item">
                  <strong>{{ $t(`internshipPage.ani.annie.infra${n}Name`) }}</strong>
                  <span>{{ $t(`internshipPage.ani.annie.infra${n}Desc`) }}</span>
                </li>
              </ul>
            </div>
            <div class="tech-group">
              <h4 class="tech-group__title">{{ $t('internshipPage.ani.annie.contribTitle') }}</h4>
              <ul class="tech-list">
                <li v-for="n in 4" :key="`contrib-${n}`" class="tech-item">
                  <strong>{{ $t(`internshipPage.ani.annie.contrib${n}Name`) }}</strong>
                  <span>{{ $t(`internshipPage.ani.annie.contrib${n}Desc`) }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Performance -->
          <h3 class="subsection-title" style="margin-top:48px;">{{ $t('internshipPage.ani.annie.perfTitle') }}</h3>
          <p class="prose-lead">{{ $t('internshipPage.ani.annie.perfDesc') }}</p>

          <div class="perf-grid">
            <div class="perf-stat" v-for="n in 4" :key="`perf-${n}`">
              <span class="perf-stat__value">{{ $t(`internshipPage.ani.annie.perf${n}Value`) }}</span>
              <span class="perf-stat__label">{{ $t(`internshipPage.ani.annie.perf${n}Label`) }}</span>
            </div>
          </div>

          <!-- Mascot -->
          <h3 class="subsection-title" style="margin-top:48px;">{{ $t('internshipPage.ani.annie.mascotTitle') }}</h3>
          <div class="highlight-box">
            <h4 class="highlight-box__title">{{ $t('internshipPage.ani.annie.mascotDesignTitle') }}</h4>
            <p class="highlight-box__desc">{{ $t('internshipPage.ani.annie.mascotDesignDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- 05 · CRUNCH TIME -->
      <section id="crunchtime" class="page-section" aria-labelledby="h-crunch">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">05</span>
            <h2 class="section-header__title" id="h-crunch">
              {{ $t('internshipPage.ani.crunch.title') }}
            </h2>
          </header>

          <p class="prose-lead">{{ $t('internshipPage.ani.crunch.description') }}</p>

          <div class="two-col">
            <div class="highlight-box">
              <h4 class="highlight-box__title">{{ $t('internshipPage.ani.crunch.obj1Title') }}</h4>
              <p class="highlight-box__desc">{{ $t('internshipPage.ani.crunch.obj1Desc') }}</p>
            </div>
            <div class="highlight-box">
              <h4 class="highlight-box__title">{{ $t('internshipPage.ani.crunch.obj2Title') }}</h4>
              <p class="highlight-box__desc">{{ $t('internshipPage.ani.crunch.obj2Desc') }}</p>
            </div>
          </div>

          <blockquote class="callout callout--accent" style="margin-top:32px;">
            <span class="callout__label">{{ $t('internshipPage.ani.crunch.outcomeLabel') }}</span>
            {{ $t('internshipPage.ani.crunch.outcomeText') }}
          </blockquote>
        </div>
      </section>

      <!-- 06 · LEARNING -->
      <section id="learning" class="page-section page-section--tinted" aria-labelledby="h-learning">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">06</span>
            <h2 class="section-header__title" id="h-learning">
              {{ $t('internshipPage.ani.learning.title') }}
            </h2>
          </header>

          <div class="two-col">
            <div class="learning-group">
              <h3 class="learning-group__title">{{ $t('internshipPage.ani.learning.technicalTitle') }}</h3>
              <ul class="arrow-list">
                <li v-for="n in 5" :key="`tech-${n}`">{{ $t(`internshipPage.ani.learning.technical${n}`) }}</li>
              </ul>
            </div>
            <div class="learning-group">
              <h3 class="learning-group__title">{{ $t('internshipPage.ani.learning.softTitle') }}</h3>
              <ul class="arrow-list">
                <li v-for="n in 4" :key="`soft-${n}`">{{ $t(`internshipPage.ani.learning.soft${n}`) }}</li>
              </ul>
            </div>
          </div>

          <blockquote class="callout callout--accent" style="margin-top:40px;">
            <span class="callout__label">{{ $t('internshipPage.ani.learning.reflectionTitle') }}</span>
            {{ $t('internshipPage.ani.learning.reflectionDesc') }}
          </blockquote>
        </div>
      </section>

    </main>

    <ProjectNav :prev="prev" :next="next" />

    <!-- ── FOOTER BACK ───────────────────────────────────────────────────── -->
    <div class="back-footer">
      <div class="back-footer__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue' 
import { useHead } from '@unhead/vue'
import ProjectNav from '@/components/ProjectNav.vue'
import { getPrevNext } from '@/data/projectOrder.js'

useHead({
  title: 'Innov Crous (ANI) · Gaël Röthlin',
  meta: [{ name: 'description', content: 'Stage de 3ème année de BUT Informatique.' }],
})

// Uniquement pour les pages projet (pas les stages) :
const { prev, next } = getPrevNext('ani')
</script>

<style scoped>
/* Inherit design tokens from App.vue (.portfolio scope) */

/* ── Hero ── */
.intern-hero {
  padding: 100px 40px 80px;
  border-bottom: 1px solid var(--border);
}

.intern-hero__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  margin-bottom: 40px;
  transition: color 0.2s, transform 0.2s;
  text-decoration: none;
}
.back-link:hover {
  color: var(--accent);
  transform: translateX(-3px);
}

.intern-hero__grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 32px 60px;
  align-items: start;
}

.intern-hero__eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.intern-hero__title {
  font-family: var(--font-serif);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 600;
  line-height: 1.0;
  letter-spacing: -0.025em;
  color: var(--text);
  margin: 0 0 16px;
}

.intern-hero__subtitle {
  font-size: 16px;
  color: var(--text-2);
  line-height: 1.5;
  margin: 0;
}

/* Meta panel */
.intern-hero__meta {
  background: var(--bg-tint);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 24px 28px;
  align-self: start;
}

.meta-list { display: flex; flex-direction: column; gap: 0; }

.meta-row {
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}
.meta-row:last-child { border-bottom: none; }

.meta-row dt {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
}

.meta-row dd {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
  margin: 0;
}

.meta-row__status { display: flex; align-items: center; gap: 7px; }

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--text-3);
  flex-shrink: 0;
}

/* ── Sections ── */
.page-section { padding: 96px 40px; }
.page-section--tinted {
  background: var(--bg-tint);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}
.page-section__inner { max-width: var(--max-w); margin: 0 auto; }

.section-header {
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 48px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.section-header__num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-3);
  letter-spacing: 0.06em;
  flex-shrink: 0;
}

.section-header__title {
  font-family: var(--font-serif);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 500;
  color: var(--text);
  letter-spacing: -0.01em;
  margin: 0;
}

.subsection-title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 28px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.prose-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
}

.prose-block p,
.prose-lead {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-2);
  margin: 0 0 32px;
}

/* ── Info cards ── */
.card-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 32px;
}

.info-card {
  background: var(--bg);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: background 0.2s;
}

.page-section--tinted .info-card { background: var(--bg-tint); }
.info-card:hover { background: var(--bg-inset); }

.info-card__num {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  color: var(--accent);
}

.info-card__title {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  margin: 0;
  line-height: 1.3;
}

.info-card__desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-3);
  margin: 0;
}

/* ── Callout ── */
.callout {
  border-left: 2px solid var(--border-mid);
  padding: 16px 20px;
  margin: 0;
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.7;
}

.callout--accent {
  border-left-color: var(--accent);
  background: var(--accent-light);
  border-radius: 0 4px 4px 0;
}

.callout__label {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 6px;
}

/* ── Two-col ── */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

/* ── Highlight box ── */
.highlight-box {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px 28px;
  background: var(--bg);
  margin-bottom: 20px;
}

.page-section--tinted .highlight-box { background: var(--bg-tint); }

.highlight-box__title {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 8px;
}

.highlight-box__desc {
  font-size: 13px;
  line-height: 1.7;
  color: var(--text-2);
  margin: 0;
}

/* ── Feature grid ── */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}

.feature-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 20px;
  background: var(--bg);
  transition: border-color 0.2s, background 0.2s;
}

.feature-card:hover { border-color: var(--border-mid); background: var(--bg-tint); }

.feature-card__title {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.feature-card__desc {
  font-size: 13px;
  color: var(--text-2);
  line-height: 1.6;
  margin: 0;
}

/* ── Tech stack ── */
.tech-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.tech-group {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px;
  background: var(--bg);
}

.page-section--tinted .tech-group { background: var(--bg-inset); }

.tech-group__title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
  margin: 0 0 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.tech-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.tech-item { display: flex; flex-direction: column; gap: 2px; }
.tech-item strong { font-size: 14px; font-weight: 500; color: var(--text); }
.tech-item span { font-size: 12px; color: var(--text-3); line-height: 1.5; }

/* ── Security method (reused for challenges) ── */
.security-method {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.security-method__header {
  display: flex;
  align-items: center;
  gap: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border);
}

.security-method__num {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--accent);
  background: var(--accent-light);
  padding: 4px 10px;
  border-radius: 2px;
  flex-shrink: 0;
}

.security-method__header h4 {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  margin: 0;
}

.security-method p {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-2);
  margin: 0;
}

/* ── Perf stats ── */
.perf-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 20px;
}

.perf-stat {
  background: var(--bg);
  padding: 28px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  text-align: center;
  transition: background 0.2s;
}

.page-section--tinted .perf-stat { background: var(--bg-tint); }
.perf-stat:hover { background: var(--bg-inset); }

.perf-stat__value {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--accent);
  line-height: 1;
}

.perf-stat__label {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-3);
  line-height: 1.4;
}

/* ── Inline link ── */
.inline-link {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: opacity 0.2s;
}
.inline-link:hover { opacity: 0.75; }

/* ── Learning ── */
.learning-group {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px;
  background: var(--bg);
}

.learning-group__title {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.arrow-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.arrow-list li {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-2);
  padding-left: 18px;
  position: relative;
}

.arrow-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 11px;
  top: 1px;
}

/* ── Back footer ── */
.back-footer {
  padding: 32px 40px 64px;
  border-top: 1px solid var(--border);
}

.back-footer__inner { max-width: var(--max-w); margin: 0 auto; }

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 900px) {
  .intern-hero__grid { grid-template-columns: 1fr; }
  .tech-columns,
  .two-col { grid-template-columns: 1fr; }
  .card-row { grid-template-columns: 1fr; }
  .perf-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 680px) {
  .intern-hero { padding: 80px 20px 56px; }
  .page-section { padding: 64px 20px; }
  .back-footer { padding: 24px 20px 48px; }
  .intern-hero__title { font-size: clamp(2.4rem, 10vw, 3.5rem); }
  .feature-grid { grid-template-columns: 1fr; }
  .perf-grid { grid-template-columns: 1fr 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
