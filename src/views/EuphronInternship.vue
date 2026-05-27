<template>
  <div>

    <!-- ── HERO ─────────────────────────────────────────────────────────── -->
    <header class="intern-hero">
      <div class="intern-hero__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>

        <div class="intern-hero__grid">
          <div class="intern-hero__text">
            <p class="intern-hero__eyebrow">{{ $t('internshipPage.euphron.hero.eyebrow') }}</p>
            <h1 class="intern-hero__title">{{ $t('internshipPage.euphron.hero.title') }}</h1>
            <p class="intern-hero__subtitle">{{ $t('internshipPage.euphron.hero.jobTitle') }}</p>
          </div>

          <aside class="intern-hero__meta" aria-label="Internship details">
            <dl class="meta-list">
              <div class="meta-row">
                <dt>{{ $t('internshipPage.euphron.hero.locationLabel') }}</dt>
                <dd>{{ $t('internshipPage.euphron.hero.location') }}</dd>
              </div>
              <div class="meta-row">
                <dt>{{ $t('internshipPage.euphron.hero.durationLabel') }}</dt>
                <dd>{{ $t('internshipPage.euphron.hero.duration') }}</dd>
              </div>
              <div class="meta-row">
                <dt>{{ $t('internshipPage.euphron.hero.statusLabel') }}</dt>
                <dd class="meta-row__status">
                  <span class="status-dot" aria-hidden="true"></span>
                  {{ $t('internshipPage.euphron.hero.status') }}
                </dd>
              </div>
            </dl>
          </aside>

          <div class="intern-hero__logo" aria-hidden="true">
            <img src="@/assets/Euphron-black.svg" alt="" />
          </div>
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
              {{ $t('internshipPage.euphron.context.title') }}
            </h2>
          </header>

          <div class="prose-block">
            <p>{{ $t('internshipPage.euphron.context.description1') }}</p>
            <p>{{ $t('internshipPage.euphron.context.description2') }}</p>
          </div>

          <div class="card-row">
            <div class="info-card" v-for="n in 3" :key="`ctx-${n}`">
              <span class="info-card__num">0{{ n }}</span>
              <h3 class="info-card__title">{{ $t(`internshipPage.euphron.context.objective${n}Title`) }}</h3>
              <p class="info-card__desc">{{ $t(`internshipPage.euphron.context.objective${n}Desc`) }}</p>
            </div>
          </div>

          <blockquote class="callout">
            <span class="callout__label">{{ $t('internshipPage.euphron.context.constraintLabel') }}</span>
            {{ $t('internshipPage.euphron.context.constraintText') }}
          </blockquote>
        </div>
      </section>

      <!-- 02 · MY ROLE -->
      <section id="role" class="page-section page-section--tinted" aria-labelledby="h-role">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">02</span>
            <h2 class="section-header__title" id="h-role">
              {{ $t('internshipPage.euphron.role.title') }}
            </h2>
          </header>

          <p class="prose-lead">{{ $t('internshipPage.euphron.role.description') }}</p>

          <div class="card-row">
            <div class="info-card" v-for="n in 4" :key="`role-${n}`">
              <span class="info-card__num">0{{ n }}</span>
              <h3 class="info-card__title">{{ $t(`internshipPage.euphron.role.responsibility${n}Title`) }}</h3>
              <p class="info-card__desc">{{ $t(`internshipPage.euphron.role.responsibility${n}Desc`) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 03 · WHAT I BUILT (Features + Tech Stack) -->
      <section id="built" class="page-section" aria-labelledby="h-built">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">03</span>
            <h2 class="section-header__title" id="h-built">
              {{ $i18n.locale === 'fr' ? 'Ce que j\'ai construit' : 'What I Built' }}
            </h2>
          </header>

          <!-- Features -->
          <h3 class="subsection-title">{{ $t('internshipPage.euphron.features.title') }}</h3>
          <div class="feature-grid">
            <div class="feature-card" v-for="n in 4" :key="`feat-${n}`">
              <h4 class="feature-card__title">{{ $t(`internshipPage.euphron.features.category${n}Title`) }}</h4>
              <ul class="feature-card__list">
                <li v-for="m in (n < 4 ? 3 : 3)" :key="m">
                  {{ $t(`internshipPage.euphron.features.category${n}Item${m}`, '') }}
                </li>
              </ul>
            </div>
          </div>

          <div class="highlight-box">
            <h4 class="highlight-box__title">{{ $t('internshipPage.euphron.features.highlightTitle') }}</h4>
            <p class="highlight-box__desc">{{ $t('internshipPage.euphron.features.highlightDesc') }}</p>
          </div>

          <div class="progress-block">
            <div class="progress-block__header">
              <span class="progress-block__label">{{ $t('internshipPage.euphron.features.progressTitle') }}</span>
              <span class="progress-block__pct">{{ $t('internshipPage.euphron.features.progressPercentage') }}</span>
            </div>
            <div
              class="progress-track"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-fill" style="width: 70%"></div>
            </div>
            <p class="progress-block__desc">{{ $t('internshipPage.euphron.features.progressDesc') }}</p>
          </div>

          <!-- Tech Stack -->
          <h3 class="subsection-title" style="margin-top: 64px;">{{ $t('internshipPage.euphron.techStack.title') }}</h3>
          <div class="tech-columns">
            <div class="tech-group">
              <h4 class="tech-group__title">{{ $t('internshipPage.euphron.techStack.frontendTitle') }}</h4>
              <ul class="tech-list">
                <li v-for="n in 4" :key="`fe-${n}`" class="tech-item">
                  <strong>{{ $t(`internshipPage.euphron.techStack.frontend${n}Name`) }}</strong>
                  <span>{{ $t(`internshipPage.euphron.techStack.frontend${n}Desc`) }}</span>
                </li>
              </ul>
            </div>
            <div class="tech-group">
              <h4 class="tech-group__title">{{ $t('internshipPage.euphron.techStack.backendTitle') }}</h4>
              <ul class="tech-list">
                <li v-for="n in 4" :key="`be-${n}`" class="tech-item">
                  <strong>{{ $t(`internshipPage.euphron.techStack.backend${n}Name`) }}</strong>
                  <span>{{ $t(`internshipPage.euphron.techStack.backend${n}Desc`) }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="highlight-box">
            <h4 class="highlight-box__title">{{ $t('internshipPage.euphron.techStack.justificationTitle') }}</h4>
            <p class="highlight-box__desc">{{ $t('internshipPage.euphron.techStack.justificationDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- 04 · HOW I BUILT IT (Architecture + Security) -->
      <section id="how" class="page-section page-section--tinted" aria-labelledby="h-how">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">04</span>
            <h2 class="section-header__title" id="h-how">
              {{ $i18n.locale === 'fr' ? 'Comment je l\'ai construit' : 'How I Built It' }}
            </h2>
          </header>

          <!-- Architecture -->
          <h3 class="subsection-title">{{ $t('internshipPage.euphron.architecture.title') }}</h3>
          <p class="prose-lead">{{ $t('internshipPage.euphron.architecture.description') }}</p>

          <figure class="diagram-figure">
            <img
              src="@/assets/stage/Diagram.png"
              :alt="$t('internshipPage.euphron.architecture.diagramAlt')"
              class="diagram-img"
              loading="lazy"
            />
            <figcaption>
              <span aria-hidden="true">Fig. 01 — </span>
              {{ $t('internshipPage.euphron.architecture.diagramCaption') }}
            </figcaption>
          </figure>

          <div class="two-col">
            <div class="highlight-box">
              <h4 class="highlight-box__title">{{ $t('internshipPage.euphron.architecture.section1Title') }}</h4>
              <p class="highlight-box__desc">{{ $t('internshipPage.euphron.architecture.section1Desc') }}</p>
            </div>
            <div class="highlight-box">
              <h4 class="highlight-box__title">{{ $t('internshipPage.euphron.architecture.section2Title') }}</h4>
              <p class="highlight-box__desc">{{ $t('internshipPage.euphron.architecture.section2Desc') }}</p>
            </div>
          </div>

          <!-- Security -->
          <h3 class="subsection-title" style="margin-top: 64px;">{{ $t('internshipPage.euphron.security.title') }}</h3>
          <p class="prose-lead">{{ $t('internshipPage.euphron.security.intro') }}</p>

          <div class="two-col">
            <div class="security-method">
              <div class="security-method__header">
                <span class="security-method__num">01</span>
                <h4>{{ $t('internshipPage.euphron.security.method1Title') }}</h4>
              </div>
              <p>{{ $t('internshipPage.euphron.security.method1Desc') }}</p>
              <div class="code-img-wrap">
                <img
                  src="@/assets/stage/RegexCheck.png"
                  :alt="$t('internshipPage.euphron.security.method1Alt')"
                  loading="lazy"
                />
              </div>
            </div>

            <div class="security-method">
              <div class="security-method__header">
                <span class="security-method__num">02</span>
                <h4>{{ $t('internshipPage.euphron.security.method2Title') }}</h4>
              </div>
              <p>{{ $t('internshipPage.euphron.security.method2Desc') }}</p>
              <ul class="check-list">
                <li>{{ $t('internshipPage.euphron.security.method2Item1') }}</li>
                <li>{{ $t('internshipPage.euphron.security.method2Item2') }}</li>
                <li>{{ $t('internshipPage.euphron.security.method2Item3') }}</li>
              </ul>
              <div class="code-img-wrap">
                <img
                  src="@/assets/stage/PreparedQuery.png"
                  :alt="$t('internshipPage.euphron.security.method2Alt')"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 05 · ORGANIZATION -->
      <section id="organization" class="page-section" aria-labelledby="h-org">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">05</span>
            <h2 class="section-header__title" id="h-org">
              {{ $t('internshipPage.euphron.organization.title') }}
            </h2>
          </header>

          <ol class="timeline" aria-label="Project timeline">
            <li class="timeline-item">
              <div class="timeline-item__marker">
                <span class="tl-period">{{ $i18n.locale === 'fr' ? 'Semaines' : 'Weeks' }}</span>
                <span class="tl-value">1–2</span>
              </div>
              <div class="timeline-item__content">
                <h3>{{ $t('internshipPage.euphron.organization.week12Title') }}</h3>
                <p>{{ $t('internshipPage.euphron.organization.week12Desc') }}</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-item__marker">
                <span class="tl-period">{{ $i18n.locale === 'fr' ? 'Semaine' : 'Week' }}</span>
                <span class="tl-value">3</span>
              </div>
              <div class="timeline-item__content">
                <h3>{{ $t('internshipPage.euphron.organization.week3Title') }}</h3>
                <p>{{ $t('internshipPage.euphron.organization.week3Desc') }}</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-item__marker">
                <span class="tl-period">{{ $i18n.locale === 'fr' ? 'Semaines' : 'Weeks' }}</span>
                <span class="tl-value">4–8</span>
              </div>
              <div class="timeline-item__content">
                <h3>{{ $t('internshipPage.euphron.organization.week48Title') }}</h3>
                <p>{{ $t('internshipPage.euphron.organization.week48Desc') }}</p>
              </div>
            </li>
          </ol>

          <div class="highlight-box" style="margin-top: 40px;">
            <h4 class="highlight-box__title">{{ $t('internshipPage.euphron.organization.methodologyTitle') }}</h4>
            <p class="highlight-box__desc">{{ $t('internshipPage.euphron.organization.methodologyDesc') }}</p>
          </div>
        </div>
      </section>

      <!-- 06 · LEARNING -->
      <section id="learning" class="page-section page-section--tinted" aria-labelledby="h-learning">
        <div class="page-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">06</span>
            <h2 class="section-header__title" id="h-learning">
              {{ $t('internshipPage.euphron.learning.title') }}
            </h2>
          </header>

          <div class="two-col">
            <div class="learning-group">
              <h3 class="learning-group__title">{{ $t('internshipPage.euphron.learning.technicalTitle') }}</h3>
              <ul class="arrow-list">
                <li>{{ $t('internshipPage.euphron.learning.technical1') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.technical2') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.technical3') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.technical4') }}</li>
              </ul>
            </div>
            <div class="learning-group">
              <h3 class="learning-group__title">{{ $t('internshipPage.euphron.learning.softTitle') }}</h3>
              <ul class="arrow-list">
                <li>{{ $t('internshipPage.euphron.learning.soft1') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.soft2') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.soft3') }}</li>
                <li>{{ $t('internshipPage.euphron.learning.soft4') }}</li>
              </ul>
            </div>
          </div>

          <blockquote class="callout callout--accent" style="margin-top: 40px;">
            <span class="callout__label">{{ $t('internshipPage.euphron.learning.reflectionTitle') }}</span>
            {{ $t('internshipPage.euphron.learning.reflectionDesc') }}
          </blockquote>
        </div>
      </section>

    </main>

    <!-- ── FOOTER BACK ───────────────────────────────────────────────────── -->
    <div class="back-footer">
      <div class="back-footer__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>
      </div>
    </div>

  </div>
</template>

<script setup>
// No local state needed — purely presentational with i18n
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════
   Inherit the portfolio's design tokens from App.vue
   (.portfolio sets --bg, --text, --accent, --font-serif, etc.)
   We only define page-specific overrides here.
═══════════════════════════════════════════════════════ */

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
  grid-template-rows: auto auto;
  grid-template-areas:
    "text  meta"
    "logo  meta";
  gap: 32px 60px;
  align-items: start;
}

.intern-hero__text  { grid-area: text; }
.intern-hero__meta  { grid-area: meta; }
.intern-hero__logo  { grid-area: logo; }

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

.meta-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

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

.meta-row__status {
  display: flex;
  align-items: center;
  gap: 7px;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--text-3);
  flex-shrink: 0;
}

/* Logo */
.intern-hero__logo {
  display: flex;
  align-items: center;
  padding: 8px 0;
}

.intern-hero__logo img {
  width: clamp(60px, 10vw, 120px);
  height: auto;
}

/* ── Sections ── */
.page-section {
  padding: 96px 40px;
}

.page-section--tinted {
  background: var(--bg-tint);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.page-section__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

/* Section header */
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

/* Subsection title */
.subsection-title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 28px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

/* Prose */
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

.page-section--tinted .info-card {
  background: var(--bg-tint);
}

.info-card:hover {
  background: var(--bg-inset);
}

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

/* ── Callout / blockquote ── */
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

/* ── Feature grid ── */
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 32px;
}

.feature-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 20px;
  background: var(--bg);
  transition: border-color 0.2s, background 0.2s;
}

.feature-card:hover {
  border-color: var(--border-mid);
  background: var(--bg-tint);
}

.feature-card__title {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.feature-card__list {
  display: flex;
  flex-direction: column;
  gap: 7px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-card__list li {
  font-size: 13px;
  color: var(--text-2);
  padding-left: 14px;
  position: relative;
  line-height: 1.5;
}

.feature-card__list li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: var(--text-3);
}

/* Empty translation strings — hide empty items */
.feature-card__list li:empty { display: none; }

/* ── Progress ── */
.progress-block {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px;
  background: var(--bg-tint);
  margin-bottom: 0;
}

.progress-block__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
}

.progress-block__label {
  font-family: var(--font-serif);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
}

.progress-block__pct {
  font-family: var(--font-mono);
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--accent);
}

.progress-track {
  width: 100%;
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
  transition: width 0.6s ease;
}

.progress-block__desc {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  margin: 0;
  letter-spacing: 0.03em;
}

/* ── Highlight box ── */
.highlight-box {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px 28px;
  background: var(--bg);
  margin-bottom: 20px;
}

.page-section--tinted .highlight-box {
  background: var(--bg-tint);
}

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

.tech-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tech-item strong {
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
}

.tech-item span {
  font-size: 12px;
  color: var(--text-3);
  line-height: 1.5;
}

/* ── Two-column ── */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* ── Architecture diagram ── */
.diagram-figure {
  background: var(--bg-tint);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 28px;
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.diagram-img {
  width: 100%;
  max-width: 560px;
  height: auto;
  display: block;
  border-radius: 2px;
}

.diagram-figure figcaption {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  text-align: center;
  line-height: 1.5;
}

/* ── Security ── */
.security-method {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.page-section--tinted .security-method {
  background: var(--bg-tint);
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

.check-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.check-list li {
  font-size: 13px;
  color: var(--text-2);
  padding-left: 18px;
  position: relative;
  line-height: 1.55;
}

.check-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-size: 11px;
}

.code-img-wrap {
  border: 1px solid var(--border);
  border-radius: 3px;
  background: var(--bg-inset);
  padding: 10px;
  overflow-x: auto;
}

.code-img-wrap img {
  width: 100%;
  min-width: 180px;
  height: auto;
  display: block;
}

/* ── Timeline ── */
.timeline {
  list-style: none;
  padding: 0 0 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--border);
  padding-left: 32px;
}

.timeline-item {
  display: flex;
  gap: 28px;
  padding-bottom: 40px;
  position: relative;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -37px;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  border: 2px solid var(--bg);
  box-shadow: 0 0 0 1px var(--accent);
}

.timeline-item:last-child { padding-bottom: 0; }

.timeline-item__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 52px;
  flex-shrink: 0;
  padding-top: 1px;
}

.tl-period {
  font-family: var(--font-mono);
  font-size: 8px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
}

.tl-value {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text);
  line-height: 1.1;
}

.timeline-item__content h3 {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 6px;
}

.timeline-item__content p {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-3);
  margin: 0;
}

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

.back-footer__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

/* ═══════════════════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════════════════ */
@media (max-width: 900px) {
  .intern-hero__grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      "text"
      "meta"
      "logo";
    gap: 24px;
  }

  .tech-columns,
  .two-col {
    grid-template-columns: 1fr;
  }

  .card-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 680px) {
  .intern-hero  { padding: 80px 20px 56px; }
  .page-section { padding: 64px 20px; }
  .back-footer  { padding: 24px 20px 48px; }

  .intern-hero__title {
    font-size: clamp(2.4rem, 10vw, 3.5rem);
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    gap: 16px;
  }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
