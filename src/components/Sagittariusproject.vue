<template>
  <div class="sagittarius-page">

    <!-- ── HERO ─────────────────────────────────────────────────────────── -->
    <header class="sag-hero">
      <div class="sag-hero__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>

        <div class="sag-hero__grid">
          <div class="sag-hero__text">
            <p class="sag-hero__eyebrow">{{ $t('projectsPage.sagittarius.hero.eyebrow') }}</p>
            <h1 class="sag-hero__title">Sagittarius</h1>
            <p class="sag-hero__subtitle">
              {{ $t('projectsPage.sagittarius.hero.subtitle') }}
            </p>
          </div>

          <aside class="sag-hero__meta">
            <dl class="meta-list">
              <div class="meta-row">
                <dt>{{ $t('projectsPage.sagittarius.hero.statusLabel') }}</dt>
                <dd>
                  <span class="status-badge status-badge--active">
                    {{ $t('projectsPage.sagittarius.hero.status') }}
                  </span>
                </dd>
              </div>
              <div class="meta-row">
                <dt>{{ $t('projectsPage.sagittarius.hero.typeLabel') }}</dt>
                <dd>{{ $t('projectsPage.sagittarius.hero.type') }}</dd>
              </div>
              <div class="meta-row">
                <dt>{{ $t('projectsPage.sagittarius.hero.stackLabel') }}</dt>
                <dd class="meta-stack">
                  <span v-for="tool in tools" :key="tool" class="meta-tag">{{ tool }}</span>
                </dd>
              </div>
              <div class="meta-row">
                <dt>{{ $t('projectsPage.sagittarius.hero.previewLabel') }}</dt>
                <dd>
                  <a
                    href="https://sagittarius.grothlin.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="meta-link"
                  >
                    {{ $t('projectsPage.sagittarius.hero.preview') }} ↗
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <!-- Hero preview image -->
        <div class="sag-hero__image-wrap">
          <img
            src="@/assets/projects/sagittarius/sagittarius-cover.png"
            alt="Sagittarius interface preview"
            class="sag-hero__image"
            loading="eager"
          />
          <div class="sag-hero__image-caption">
            <span aria-hidden="true">Fig. 00:</span>
            <span v-if="$i18n.locale === 'fr'">Aperçu de l'interface Sagittarius</span>
            <span v-else>Sagittarius interface preview</span>
          </div>
        </div>
      </div>
    </header>

    <main>

      <!-- ── 01 · GENESIS ─────────────────────────────────────────────── -->
      <section id="genesis" class="sag-section" aria-labelledby="h-genesis">
        <div class="sag-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">01</span>
            <h2 class="section-header__title" id="h-genesis">
              {{ $t('projectsPage.sagittarius.genesis.title') }}
            </h2>
          </header>

          <div class="prose-column">
            <p>{{ $t('projectsPage.sagittarius.genesis.p1') }}</p>
            <p>{{ $t('projectsPage.sagittarius.genesis.p2') }}</p>
            <p>{{ $t('projectsPage.sagittarius.genesis.p3') }}</p>
          </div>
        </div>
      </section>

      <!-- ── 02 · WORKSPACES ──────────────────────────────────────────── -->
      <section id="workspaces" class="sag-section sag-section--tinted" aria-labelledby="h-workspaces">
        <div class="sag-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">02</span>
            <h2 class="section-header__title" id="h-workspaces">
              {{ $t('projectsPage.sagittarius.workspaces.title') }}
            </h2>
          </header>

          <p class="section-lead">{{ $t('projectsPage.sagittarius.workspaces.intro') }}</p>

          <div class="workspace-grid">
            <div
              v-for="ws in workspaces"
              :key="ws.key"
              class="workspace-card"
              :class="{ 'workspace-card--planned': ws.planned }"
            >
              <div class="workspace-card__header">
                <span class="workspace-card__icon" aria-hidden="true">{{ ws.icon }}</span>
                <h3 class="workspace-card__name">{{ $t(`projectsPage.sagittarius.workspaces.${ws.key}.name`) }}</h3>
                <span v-if="ws.planned" class="workspace-badge">
                  {{ $t(`projectsPage.sagittarius.workspaces.${ws.key}.badge`) }}
                </span>
              </div>
              <p class="workspace-card__desc">{{ $t(`projectsPage.sagittarius.workspaces.${ws.key}.desc`) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 03 · KEY HIGHLIGHTS ──────────────────────────────────────── -->
      <section id="highlights" class="sag-section" aria-labelledby="h-highlights">
        <div class="sag-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">03</span>
            <h2 class="section-header__title" id="h-highlights">
              {{ $t('projectsPage.sagittarius.highlights.title') }}
            </h2>
          </header>

          <div class="highlights-grid">
            <div v-for="h in highlights" :key="h.key" class="highlight-card">
              <span class="highlight-card__label">{{ $t(`projectsPage.sagittarius.highlights.${h.key}.name`) }}</span>
              <p class="highlight-card__desc">{{ $t(`projectsPage.sagittarius.highlights.${h.key}.desc`) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 04 · ARCHITECTURE ────────────────────────────────────────── -->
      <section id="architecture" class="sag-section sag-section--tinted" aria-labelledby="h-architecture">
        <div class="sag-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">04</span>
            <h2 class="section-header__title" id="h-architecture">
              {{ $t('projectsPage.sagittarius.architecture.title') }}
            </h2>
          </header>

          <p class="section-lead">{{ $t('projectsPage.sagittarius.architecture.intro') }}</p>

          <div class="arch-blocks">
            <div v-for="block in archBlocks" :key="block.key" class="arch-block">
              <div class="arch-block__header">
                <span class="arch-block__num">{{ block.num }}</span>
                <h3 class="arch-block__title">{{ $t(`projectsPage.sagittarius.architecture.${block.key}.title`) }}</h3>
              </div>
              <p class="arch-block__desc">{{ $t(`projectsPage.sagittarius.architecture.${block.key}.desc`) }}</p>
            </div>
          </div> 
                                                                  
          <figure class="project-figure" style="margin-top: 32px; width: fit-content;">
            <img                                              
              src="@/assets/projects/sagittarius/sagittarius-code.png"
              alt="Sagittarius code workspace"                
              class="project-figure__img"                    
              loading="lazy"                                  
            />                                                
            <figcaption>                                      
              <span aria-hidden="true">Fig. 02:</span>        
              <span v-if="$i18n.locale === 'fr'">             
                Workspace Code avec coloration syntaxique     
              </span>                                         
              <span v-else>                                   
                Code workspace with syntax-highlighted output 
              </span>                                         
            </figcaption>                                     
          </figure>

          <blockquote class="callout callout--accent" style="margin-top: 40px;">
            <span class="callout__label">
              <span v-if="$i18n.locale === 'fr'">Choix d'architecture</span>
              <span v-else>Architecture decision</span>
            </span>
            {{ $t('projectsPage.sagittarius.architecture.note') }}
          </blockquote>
        </div>
      </section>

      <!-- ── 05 · STACK ───────────────────────────────────────────────── -->
      <section id="stack" class="sag-section" aria-labelledby="h-stack">
        <div class="sag-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">05</span>
            <h2 class="section-header__title" id="h-stack">
              {{ $t('projectsPage.sagittarius.stack.title') }}
            </h2>
          </header>

          <div class="stack-table">
            <div class="stack-table__header">
              <span>
                <span v-if="$i18n.locale === 'fr'">Technologie</span>
                <span v-else>Technology</span>
              </span>
              <span>
                <span v-if="$i18n.locale === 'fr'">Rôle</span>
                <span v-else>Role</span>
              </span>
            </div>
            <div v-for="item in stackItems" :key="item.key" class="stack-row">
              <span class="stack-row__name">{{ $t(`projectsPage.sagittarius.stack.${item.key}.name`) }}</span>
              <span class="stack-row__desc">{{ $t(`projectsPage.sagittarius.stack.${item.key}.desc`) }}</span>
            </div>
          </div>

          <figure class="project-figure" style="margin-top: 40px; width: fit-content;">
            <img                                              
              src="@/assets/projects/sagittarius/sagittarius-models.png"
              alt="Sagittarius model selector"               
              class="project-figure__img"                    
              loading="lazy"                                  
            />                                                
            <figcaption>                                      
              <span aria-hidden="true">Fig. 03:</span>        
              <span v-if="$i18n.locale === 'fr'">             
                Sélection du modèle — Mistral, LLaMA, Gemma  
              </span>                                         
              <span v-else>                                   
                Model selector — Mistral, LLaMA, Gemma        
              </span>                                         
            </figcaption>                                     
          </figure>                                           

        </div>
      </section>

      <!-- ── 06 · WHAT I LEARNED ──────────────────────────────────────── -->
      <section id="learning" class="sag-section sag-section--tinted" aria-labelledby="h-learning">
        <div class="sag-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">06</span>
            <h2 class="section-header__title" id="h-learning">
              {{ $t('projectsPage.sagittarius.learning.title') }}
            </h2>
          </header>

          <div class="learning-grid">
            <div v-for="item in learningItems" :key="item.key" class="learning-card">
              <span class="learning-card__domain">{{ $t(`projectsPage.sagittarius.learning.${item.key}.domain`) }}</span>
              <p class="learning-card__text">{{ $t(`projectsPage.sagittarius.learning.${item.key}.text`) }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 07 · STATUS & NEXT STEPS ─────────────────────────────────── -->
      <section id="status" class="sag-section" aria-labelledby="h-status">
        <div class="sag-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">07</span>
            <h2 class="section-header__title" id="h-status">
              {{ $t('projectsPage.sagittarius.status.title') }}
            </h2>
          </header>

          <p class="section-lead">{{ $t('projectsPage.sagittarius.status.current') }}</p>

          <div class="next-grid">
            <div v-for="item in nextItems" :key="item.key" class="next-card">
              <span class="next-card__title">{{ $t(`projectsPage.sagittarius.status.${item.key}.title`) }}</span>
              <p class="next-card__desc">{{ $t(`projectsPage.sagittarius.status.${item.key}.desc`) }}</p>
            </div>
          </div>

          <blockquote class="callout callout--accent" style="margin-top: 40px;">
            <span class="callout__label">
              <span v-if="$i18n.locale === 'fr'">Recul</span>
              <span v-else>Looking back</span>
            </span>
            {{ $t('projectsPage.sagittarius.status.reflection') }}
          </blockquote>
        </div>
      </section>

      <!-- ── 08 · GITHUB ──────────────────────────────────────────────── -->
      <section id="source" class="sag-section sag-section--tinted" aria-labelledby="h-source">
        <div class="sag-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">08</span>
            <h2 class="section-header__title" id="h-source">
              <span v-if="$i18n.locale === 'fr'">Code source</span>
              <span v-else>Source code</span>
            </h2>
          </header>

          <div class="source-row">
            <div class="source-card">
              <h3 class="source-card__title">GitHub</h3>
              <p class="source-card__desc">
                <span v-if="$i18n.locale === 'fr'">Code source disponible sur GitHub.</span>
                <span v-else>Full source code available on GitHub.</span>
              </p>
              <a
                href="https://github.com/moonlight58/sagittarius"
                target="_blank"
                rel="noopener noreferrer"
                class="source-link"
              >
                github.com/moonlight58/sagittarius ↗
              </a>
            </div>
            <div class="source-card">
              <h3 class="source-card__title">
                <span v-if="$i18n.locale === 'fr'">Démo en ligne</span>
                <span v-else>Live preview</span>
              </h3>
              <p class="source-card__desc">
                <span v-if="$i18n.locale === 'fr'">Interface consultable en ligne. Les fonctionnalités IA nécessitent une installation Ollama locale.</span>
                <span v-else>Interface accessible online. AI features require a local Ollama installation to function.</span>
              </p>
              <a
                href="https://sagittarius.grothlin.fr"
                target="_blank"
                rel="noopener noreferrer"
                class="source-link"
              >
                sagittarius.grothlin.fr ↗
              </a>
            </div>
          </div>
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
const tools = ['Vue 3', 'Ollama', 'CSS', 'Vue Router']

const workspaces = [
  { key: 'code',     icon: '{}',  planned: false },
  { key: 'mail',     icon: '@',   planned: false },
  { key: 'calendar', icon: '🗓',   planned: false },
  { key: 'notes',    icon: '✎',   planned: true },
]

const highlights = [
  { key: 'privacy'   },
  { key: 'model'     },
  { key: 'streaming' },
  { key: 'markdown'  },
  { key: 'history'   },
  { key: 'theme'     },
]

const archBlocks = [
  { key: 'frontend',  num: '01' },
  { key: 'ollama',    num: '02' },
  { key: 'streaming', num: '03' },
]

const stackItems = [
  { key: 'vue'      },
  { key: 'css'      },
  { key: 'ollama'   },
  { key: 'markdown' },
  { key: 'router'   },
]

const learningItems = [
  { key: 'streaming' },
  { key: 'state'     },
  { key: 'product'   },
  { key: 'css'       },
]

const nextItems = [
  { key: 'next1' },
  { key: 'next2' },
  { key: 'next3' },
]
</script>

<style scoped>
/* ── Page wrapper ── */
.sagittarius-page {
  /* Inherits all design tokens from .portfolio in App.vue */
}

/* ── Hero ── */
.sag-hero {
  padding: 100px 40px 0;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.sag-hero__inner {
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

.sag-hero__grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px 60px;
  align-items: start;
  margin-bottom: 56px;
}

.sag-hero__eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.sag-hero__title {
  font-family: var(--font-serif);
  font-size: clamp(4rem, 9vw, 7rem);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: var(--text);
  margin: 0 0 20px;
}

.sag-hero__subtitle {
  font-size: 17px;
  color: var(--text-2);
  line-height: 1.6;
  max-width: 480px;
}

/* Meta panel */
.sag-hero__meta {
  background: var(--bg-tint);
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 24px 28px;
  align-self: start;
}

.meta-list {
  display: flex;
  flex-direction: column;
}

.meta-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 0;
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

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  padding: 4px 10px;
  border-radius: 2px;
}

.status-badge--active {
  background: #fdf3e3;
  color: #92580a;
}
.status-badge--active::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #92580a;
  animation: pulse-dot 2.4s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.35; }
}

.meta-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.meta-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-3);
  background: var(--bg-inset);
  border: 1px solid var(--border);
  padding: 2px 8px;
  border-radius: 2px;
}

.meta-link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: opacity 0.2s;
}
.meta-link:hover { opacity: 0.75; }

/* Hero image */
.sag-hero__image-wrap {
  position: relative;
  margin: 0 -40px;
  width: calc(100% + 80px);
  overflow: hidden;
}

.sag-hero__image {
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  object-position: top;
  display: block;
  filter: grayscale(10%);
  transition: filter 0.4s;
}
.sag-hero__image:hover {
  filter: grayscale(0%);
}

.sag-hero__image-caption {
  position: absolute;
  bottom: 16px;
  right: 40px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.04em;
  background: rgba(28, 25, 23, 0.45);
  padding: 4px 10px;
  border-radius: 2px;
  backdrop-filter: blur(4px);
}

/* ── Sections ── */
.sag-section {
  padding: 96px 40px;
}

.sag-section--tinted {
  background: var(--bg-tint);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.sag-section__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

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

.section-lead {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-2);
  margin: 0 0 40px;
  max-width: 720px;
  text-align: justify;
}

/* ── Prose column (genesis) ── */
.prose-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 680px;
}

.prose-column p {
  font-size: 15px;
  line-height: 1.85;
  color: var(--text-2);
  margin: 0;
  text-align: justify;
}

/* ── Workspaces ── */
.workspace-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}

.workspace-card {
  background: var(--bg-tint);
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: background 0.2s;
}

.workspace-card:hover {
  background: var(--bg-inset);
}

.workspace-card--planned {
  opacity: 0.65;
}

.workspace-card__header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.workspace-card__icon {
  font-family: var(--font-mono);
  font-size: 20px;
  font-weight: 500;
  color: var(--accent);
  width: 28px;
  flex-shrink: 0;
}

.workspace-card__name {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  margin: 0;
}

.workspace-badge {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--text-3);
  border: 1px solid var(--border-mid);
  padding: 2px 7px;
  border-radius: 2px;
}

.workspace-card__desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-3);
  margin: 0;
  text-align: justify;
}

/* ── Highlights ── */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.highlight-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.2s, background 0.2s;
}

.highlight-card:hover {
  border-color: var(--border-mid);
  background: var(--bg-tint);
}

.highlight-card__label {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.highlight-card__desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-2);
  margin: 0;
  text-align: justify;
}

/* ── Architecture ── */
.arch-blocks {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}

.arch-block {
  background: var(--bg-tint);
  padding: 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: background 0.2s;
}

.arch-block:hover {
  background: var(--bg-inset);
}

.arch-block__header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.arch-block__num {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--accent);
  background: var(--accent-light);
  padding: 4px 10px;
  border-radius: 2px;
  flex-shrink: 0;
}

.arch-block__title {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  margin: 0;
}

.arch-block__desc {
  font-size: 14px;
  line-height: 1.75;
  color: var(--text-2);
  margin: 0;
  padding-left: calc(11px + 16px + 20px); /* align with title */
  text-align: justify;
}

/* ── Callout ── */
.callout {
  border-left: 2px solid var(--border-mid);
  padding: 16px 20px;
  margin: 0;
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.75;
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
  margin-bottom: 8px;
}

/* ── Stack table ── */
.stack-table {
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}

.stack-table__header {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0;
  background: var(--bg-inset);
  padding: 12px 24px;
  border-bottom: 1px solid var(--border);
}

.stack-table__header span {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
}

.stack-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 0;
  padding: 16px 24px;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  transition: background 0.15s;
}

.stack-row:last-child { border-bottom: none; }
.stack-row:hover { background: var(--bg-tint); }

.stack-row__name {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
  align-self: center;
}

.stack-row__desc {
  font-size: 13px;
  color: var(--text-2);
  line-height: 1.55;
  align-self: center;
}

/* ── Learning ── */
.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.learning-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.2s, background 0.2s;
}

.learning-card:hover {
  border-color: var(--border-mid);
  background: var(--bg-tint);
}

.learning-card__domain {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.learning-card__text {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-2);
  margin: 0;
  text-align: justify;
}

/* ── Project figure (for screenshots) ── */
.project-figure {
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.project-figure__img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 4px;
  border: 1px solid var(--border);
  background: var(--bg-inset);
  transition: border-color 0.2s;
}
.project-figure__img:hover {
  border-color: var(--border-mid);
}

.project-figure figcaption {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-3);
  letter-spacing: 0.03em;
  line-height: 1.4;
}

/* ── Next steps ── */
.next-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.next-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
}

.next-card:hover {
  border-color: var(--border-mid);
  background: var(--bg-tint);
  transform: translateY(-2px);
}

.next-card__title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.next-card__desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-2);
  margin: 0;
  text-align: justify;
}

/* ── Source ── */
.source-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.source-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 28px;
  background: var(--bg-tint);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: border-color 0.2s;
}

.source-card:hover { border-color: var(--border-mid); }

.source-card__title {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  margin: 0;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.source-card__desc {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-3);
  margin: 0;
  flex: 1;
}

.source-link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: opacity 0.2s;
  align-self: flex-start;
}

.source-link:hover { opacity: 0.75; }

/* ── Back footer ── */
.back-footer {
  padding: 32px 40px 64px;
  border-top: 1px solid var(--border);
}

.back-footer__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 900px) {
  .sag-hero__grid { grid-template-columns: 1fr; }
  .next-grid { grid-template-columns: 1fr; }
  .source-row { grid-template-columns: 1fr; }
}

@media (max-width: 680px) {
  .sag-hero { padding: 80px 20px 0; }
  .sag-section { padding: 64px 20px; }
  .back-footer { padding: 24px 20px 48px; }

  .sag-hero__image-wrap {
    margin: 0 -20px;
    width: calc(100% + 40px);
  }

  .sag-hero__title { font-size: clamp(3rem, 12vw, 5rem); }

  .workspace-grid { grid-template-columns: 1fr; }
  .highlights-grid { grid-template-columns: 1fr; }
  .learning-grid { grid-template-columns: 1fr; }

  .stack-table__header,
  .stack-row {
    grid-template-columns: 140px 1fr;
  }

  .arch-block__desc {
    padding-left: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
