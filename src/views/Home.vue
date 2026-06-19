<template>
  <div>
    <!--  HERO  -->
    <section class="hero" aria-labelledby="hero-name">
      <div class="hero__inner">
        <div class="hero__text">
          <p class="hero__eyebrow">{{ $t('home.panel.role') }}</p>
          <h1 class="hero__name" id="hero-name">Gaël<br />Röthlin</h1>
          <p class="hero__bio">{{ $t('home.body.student') }}</p>
          <div class="hero__actions">
            <a href="#work" class="btn btn--primary">{{ $t('nav.work') }}</a>
            <a
              :href="cvFile"
              :download="cvDownloadName"
              class="btn btn--ghost"
              aria-label="Download CV as PDF"
              >{{ $t('home.body.downloadCV') }}
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Interface / Download">
                <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
              </a
            >
          </div>
        </div>

        <figure class="hero__portrait" aria-hidden="true">
          <img src="../assets/profile_img.jpg" alt="Gaël Röthlin" />
        </figure>
      </div>

      <div class="hero__meta">
        <span>Besançon, France</span>
        <span class="hero__meta-sep" aria-hidden="true">—</span>
        <span>{{ $t('home.panel.focus') }}</span>
        <span class="hero__meta-sep" aria-hidden="true">—</span>
        <span class="hero__status">
          <span class="hero__status-dot" aria-hidden="true"></span>
          {{ $t('home.panel.status') }}
        </span>
      </div>
    </section>

    <!--  WORK  -->
    <section id="work" class="section" aria-labelledby="work-heading">
      <div class="section__inner">
        <header class="section__header">
          <h2 class="section__title" id="work-heading">{{ $t('nav.work') }}</h2>
          <RouterLink to="/projects" class="section__more">
            {{ $t('home.body.viewAllProjects') }} →
          </RouterLink>
        </header>

        <!-- Featured projects -->
        <div class="projects">
          <article v-for="(project, i) in projects" :key="project.name" class="project">
            <div class="project__image-wrap">
              <img :src="project.image" :alt="project.name" class="project__image" loading="lazy" />
            </div>
            <div class="project__body">
              <div class="project__meta">
                <span class="project__index">0{{ i + 1 }}</span>
                <span class="project__status">{{ project.status }}</span>
              </div>
              <h3 class="project__name">{{ project.name }}</h3>
              <p class="project__desc">{{ project.description }}</p>
              <ul class="project__tech" aria-label="Technologies used">
                <li v-for="t in project.tech" :key="t">{{ t }}</li>
              </ul>
              <!-- redirect to project page and not modal because deprecated -->
              <RouterLink :to="`/${project.name.toLowerCase()}`" class="project__cta">
                {{ $t('home.body.viewProject') }} →
              </RouterLink>
            </div>
          </article>
        </div>

        <!-- Internships -->
        <div class="internships">
          <h3 class="subsection-title">{{ $t('home.body.internship.title') }}</h3>
          <div class="internship-list">
            <RouterLink
              v-for="internship in internships"
              :key="internship.name"
              :to="internship.link"
              class="internship-card"
            >
              <div class="internship-card__left">
                <span class="internship-card__date">{{ internship.date }}</span>
                <h4 class="internship-card__name">{{ internship.name }}</h4>
                <p class="internship-card__mission">{{ internship.mission }}</p>
              </div>
              <div class="internship-card__right">
                <ul class="internship-card__tech" aria-label="Technologies">
                  <li v-for="t in internship.tech" :key="t">{{ t }}</li>
                </ul>
                <span class="internship-card__arrow" aria-hidden="true">→</span>
              </div>
            </RouterLink>
          </div>
        </div>

        <!-- Education -->
        <div class="education">
          <h3 class="subsection-title">{{ $t('home.body.school.title') }}</h3>
          <div class="education-list">
            <div v-for="school in schools" :key="school.name" class="education-item">
              <div class="education-item__left">
                <span class="education-item__date">{{ school.date }}</span>
                <span class="education-item__status">{{ school.status }}</span>
              </div>
              <div class="education-item__right">
                <h4 class="education-item__name">{{ school.name }}</h4>
                <p class="education-item__desc">{{ school.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--  SKILLS  -->
    <section id="skills" class="section section--tinted" aria-labelledby="skills-heading">
      <div class="section__inner">
        <header class="section__header">
          <h2 class="section__title" id="skills-heading">{{ $t('nav.skills') }}</h2>
        </header>

        <div class="skills-grid">
          <div v-for="cat in skillCategories" :key="cat.id" class="skill-group">
            <h3 class="skill-group__title">{{ cat.label }}</h3>
            <ul class="skill-group__list">
              <li
                v-for="skill in cat.skills"
                :key="skill.name"
                class="skill-item"
                :data-tier="skill.tier"
              >
                <img :src="skill.icon" :alt="skill.name" class="skill-item__icon" />
                <span class="skill-item__name">{{ skill.name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!--  CONTACT  -->
    <section id="contact" class="section" aria-labelledby="contact-heading">
      <div class="section__inner section__inner--narrow">
        <h2 class="section__title" id="contact-heading">{{ $t('home.contact.title') }}</h2>
        <p class="contact-lead">{{ $t('home.contact.description') }}</p>

        <div class="contact-layout">
          <div class="contact-info">
            <a href="mailto:gael.rothlin@edu.univ-fcomte.fr" class="contact-email">
              gael.rothlin@edu.univ-fcomte.fr
            </a>
            <div class="contact-social">
              <a
                href="https://github.com/moonlight58"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-social__link"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.instagram.com/osiris._25"
                target="_blank"
                rel="noopener noreferrer"
                class="contact-social__link"
              >
                Instagram ↗
              </a>
            </div>
          </div>

          <form
            v-if="showForm"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-recaptcha="true"
            class="contact-form"
            @submit.prevent="handleSubmit"
            novalidate
          >
            <input type="hidden" name="form-name" value="contact" />

            <div class="form-row">
              <div class="form-field">
                <label for="name">{{ $t('home.contact.form.name') }}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  v-model="formData.name"
                  :placeholder="$t('home.contact.form.namePlaceholder')"
                  required
                  autocomplete="name"
                />
              </div>
              <div class="form-field">
                <label for="email">{{ $t('home.contact.form.email') }}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  v-model="formData.email"
                  :placeholder="$t('home.contact.form.emailPlaceholder')"
                  required
                  autocomplete="email"
                />
              </div>
            </div>

            <div class="form-field">
              <label for="message">{{ $t('home.contact.form.message') }}</label>
              <textarea
                id="message"
                name="message"
                v-model="formData.message"
                :placeholder="$t('home.contact.form.messagePlaceholder')"
                rows="5"
                required
              ></textarea>
            </div>

            <div data-netlify-recaptcha="true"></div>

            <button
              type="submit"
              class="btn btn--primary"
              :disabled="isSubmitting || cooldownRemaining > 0"
            >
              <span v-if="!isSubmitting && cooldownRemaining === 0">{{
                $t('home.contact.form.submit')
              }}</span>
              <span v-else-if="isSubmitting">{{ $t('home.contact.form.submitting') }}</span>
              <span v-else
                >{{ $t('home.contact.form.preventSpam') }}
                {{ Math.ceil(cooldownRemaining / 1000) }}s</span
              >
            </button>

            <p
              v-if="statusMessage"
              class="form-status"
              :class="statusClass"
              role="status"
              aria-live="polite"
            >
              {{ statusMessage }}
            </p>
          </form>

          <button v-else class="btn btn--primary" @click="showForm = true">
            {{ $t('home.contact.toggleButton') }}
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'
import plutoProjectImage from '@/assets/projects/pluto/pluto-final-2.jpg'
import sagittariusProjectImage from '@/assets/projects/sagittarius/sagittarius-cover.png'

const { t, locale } = useI18n()

// ── CV download ─────────────────────────────────────────────────────────────
// Serve the CV in the portfolio's current language at download time.
const cvFile = computed(() => `/Gael_ROTHLIN_CV_${locale.value.toUpperCase()}.pdf`)
const cvDownloadName = computed(() => `Gael_Rothlin_CV_${locale.value.toUpperCase()}.pdf`)

// ── Contact form ───────────────────────────────────────────────────────────
const showForm = ref(false)
const formData = ref({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const statusMessage = ref('')
const statusClass = ref('')
const cooldownRemaining = ref(0)
const cooldownDuration = 60000
let cooldownInterval = null

const startCooldown = () => {
  const start = Date.now()
  cooldownRemaining.value = cooldownDuration
  if (cooldownInterval) clearInterval(cooldownInterval)
  cooldownInterval = setInterval(() => {
    cooldownRemaining.value = Math.max(0, cooldownDuration - (Date.now() - start))
    if (cooldownRemaining.value === 0) clearInterval(cooldownInterval)
  }, 100)
}

const handleSubmit = async (event) => {
  if (cooldownRemaining.value > 0) return
  isSubmitting.value = true
  statusMessage.value = ''
  const payload = new URLSearchParams(new FormData(event.currentTarget)).toString()
  try {
    const res = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: payload,
    })
    if (res.ok) {
      statusMessage.value = t('home.contact.form.success')
      statusClass.value = 'success'
      formData.value = { name: '', email: '', message: '' }
      startCooldown()
    } else {
      throw new Error(`${res.status}`)
    }
  } catch {
    statusMessage.value = t('home.contact.form.error')
    statusClass.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}

onBeforeUnmount(() => {
  if (cooldownInterval) clearInterval(cooldownInterval)
})

// ── Data ───────────────────────────────────────────────────────────────────
const projects = computed(() => [
  {
    name: 'Pluto',
    image: plutoProjectImage,
    description: t('home.projects.pluto.description'),
    tech: ['Ergogen', 'ZMK', 'KiCAD', '3D Printing'],
    status: t('home.projects.pluto.status'),
  },
  {
    name: 'Sagittarius',
    image: sagittariusProjectImage,
    description: t('home.projects.sagittarius.description'),
    tech: ['Ollama', 'Vue 3'],
    status: t('home.projects.sagittarius.status'),
  },
  {
    name: 'SpotCLI',
    image:
      'https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/projects/personal/spotcli.png',
    description: t('home.projects.spotcli.description'),
    tech: ['C', 'libcurl', 'Spotify API'],
    status: t('home.projects.spotcli.status'),
  },
  
])

const internships = computed(() => [
  {
    name: 'ANI & Low-Tech',
    mission: t('home.internship.ani.mission'),
    tech: ['AI', 'VR', '3D', 'Help-Desk'],
    date: t('home.internship.ani.date'),
    link: '/internship/ani',
  },
  {
    name: 'Euphron',
    mission: t('home.internship.euphron.mission'),
    tech: ['Quasar', 'Vue 3', 'MySQL'],
    date: t('home.internship.euphron.date'),
    link: '/internship/euphron',
  },
])

const schools = computed(() => [
  {
    name: t('home.school.univ.name'),
    description: t('home.school.univ.description'),
    date: '2023 – 2026',
    status: t('home.school.univ.status'),
  },
  {
    name: t('home.school.lycee.name'),
    description: t('home.school.lycee.description'),
    date: '2020 – 2023',
    status: t('home.school.lycee.status'),
  },
])

const skillCategories = computed(() => [
  {
    id: 'frontend',
    label: t('home.skills.frontend'),
    skills: [
      {
        name: 'Vue.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      },
      {
        name: 'CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'Quasar',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quasar/quasar-plain.svg',
      },
      {
        name: 'Babylon.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babylonjs/babylonjs-original.svg',
      },
    ],
  },
  {
    id: 'backend',
    label: t('home.skills.backend'),
    skills: [
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'C',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
      },
      {
        name: 'Java',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'PHP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      },
    ],
  },
  {
    id: 'devops',
    label: t('home.skills.devops'),
    skills: [
      {
        name: 'Linux',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        tier: 'expert',
      },
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        tier: 'expert',
      },
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg',
        tier: 'proficient',
      },
      {
        name: 'Bash',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',
      },
      {
        name: 'Kubernetes',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      },
    ],
  },
  {
    id: 'tools',
    label: t('home.skills.tools'),
    skills: [
      {
        name: 'MySQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      },
      {
        name: 'Netlify',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg',
      },
    ],
  },
])
</script>

<style scoped>
/* 
   HERO
 */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 40px 60px;
  max-width: var(--max-w);
  margin: 0 auto;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 80px;
  align-items: center;
}

.hero__eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 400;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero__name {
  font-family: var(--font-serif);
  font-size: clamp(3.2rem, 7vw, 5.5rem);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 24px;
}

.hero__bio {
  font-size: 17px;
  line-height: 1.75;
  color: var(--text-2);
  max-width: 440px;
  margin-bottom: 36px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero__portrait {
  margin: 0;
}
.hero__portrait img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 6px;
  filter: grayscale(20%);
  transition: filter 0.4s;
}
.hero__portrait img:hover {
  filter: grayscale(0%);
}

.hero__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 0;
  align-items: center;
  margin-top: 64px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-3);
  letter-spacing: 0.03em;
}

.hero__meta-sep {
  margin: 0 16px;
  color: var(--border-mid);
}

.hero__status {
  display: flex;
  align-items: center;
  gap: 7px;
}

.hero__status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3d8f5f;
  animation: pulse-dot 2.4s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

/* 
   SECTION SHARED
 */
.section {
  padding: var(--section-gap) 40px;
}

.section--tinted {
  background: var(--bg-tint);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.section__inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

.section__inner--narrow {
  max-width: 760px;
}

.section__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 56px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}

.section__title {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--text);
  margin: 0;
}

.section__more {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  transition: color 0.2s;
  flex-shrink: 0;
}
.section__more:hover {
  color: var(--accent);
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

/* 
   PROJECTS
 */
.projects {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 80px;
}

.project {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 56px;
  padding: 48px 0;
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}

.project__image-wrap {
  overflow: hidden;
  border-radius: 4px;
  background: var(--bg-inset);
}

.project__image {
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition:
    transform 0.5s ease,
    filter 0.4s;
  filter: grayscale(15%);
}
.project:hover .project__image {
  transform: scale(1.025);
  filter: grayscale(0%);
}

.project__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
}

.project__meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.project__index {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.06em;
}

.project__status {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  background: var(--accent-light);
  padding: 3px 8px;
  border-radius: 2px;
  letter-spacing: 0.04em;
}

.project__name {
  font-family: var(--font-serif);
  font-size: 1.8rem;
  font-weight: 500;
  color: var(--text);
  letter-spacing: -0.01em;
  margin: 0 0 14px;
  line-height: 1.2;
}

.project__desc {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-2);
  margin-bottom: 20px;
}

.project__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.project__tech li {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  background: var(--bg-inset);
  border: 1px solid var(--border);
  padding: 4px 10px;
  border-radius: 2px;
  letter-spacing: 0.03em;
  transition:
    border-color 0.2s,
    color 0.2s;
}
.project:hover .project__tech li {
  border-color: var(--border-mid);
  color: var(--text-2);
}

.project__cta {
  background: none;
  border: none;
  padding: 0;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-3);
  letter-spacing: 0.05em;
  align-self: flex-start;
  transition: color 0.2s;
}
.project__cta:hover {
  color: var(--accent);
}

/* 
   INTERNSHIPS
 */
.internships {
  margin-bottom: 72px;
}

.internship-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.internship-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}

.internship-card:hover {
  color: inherit;
}

.internship-card__left {
  flex: 1;
}
.internship-card__right {
  display: flex;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
}

.internship-card__date {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  margin-bottom: 6px;
}

.internship-card__name {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 8px;
}

.internship-card__mission {
  font-size: 13px;
  color: var(--text-3);
  line-height: 1.6;
}

.internship-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: flex-end;
}

.internship-card__tech li {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-3);
  background: var(--bg-inset);
  border: 1px solid var(--border);
  padding: 3px 8px;
  border-radius: 2px;
}

.internship-card__arrow {
  font-size: 16px;
  color: var(--text-3);
  transition:
    transform 0.2s,
    color 0.2s;
}
.internship-card:hover .internship-card__arrow {
  color: var(--accent);
  transform: translateX(4px);
}

/* 
   EDUCATION
 */
.education-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.education-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 32px;
  padding: 24px 0;
  border-bottom: 1px solid var(--border);
}

.education-item__left {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 2px;
}

.education-item__date {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
}

.education-item__status {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.04em;
}

.education-item__name {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 6px;
}

.education-item__desc {
  font-size: 13px;
  color: var(--text-3);
  line-height: 1.65;
}

/* 
   SKILLS
 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.skill-group__title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  color: var(--text-3);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 20px;
}

.skill-group__list {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 4px;
  transition: background 0.18s;
}
.skill-item:hover {
  background: var(--bg-inset);
}

.skill-item__icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  flex-shrink: 0;
  opacity: 0.85;
}

.skill-item__name {
  font-size: 14px;
  color: var(--text-2);
}

.skill-item[data-tier='expert'] .skill-item__name {
  color: var(--text);
}
.skill-item[data-tier='learning'] .skill-item__name {
  color: var(--text-3);
}

/* 
   CONTACT
 */
.contact-lead {
  font-size: 17px;
  color: var(--text-2);
  line-height: 1.7;
  margin-bottom: 48px;
}

.contact-layout {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-email {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.3rem;
  color: var(--text);
  margin-bottom: 20px;
  transition: color 0.2s;
  border-bottom: 1px solid transparent;
}
.contact-email:hover {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.contact-social {
  display: flex;
  gap: 24px;
}

.contact-social__link {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  transition: color 0.2s;
}
.contact-social__link:hover {
  color: var(--accent);
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.form-field label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.form-field input,
.form-field textarea {
  background: var(--bg-tint);
  border: 1px solid var(--border-mid);
  border-radius: 4px;
  padding: 11px 14px;
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--text);
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
  resize: vertical;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-light);
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: var(--text-3);
  opacity: 0.6;
}

.form-status {
  font-size: 13px;
  padding: 10px 14px;
  border-radius: 4px;
}
.form-status.success {
  background: #edf7f0;
  color: #2e7d52;
}
.form-status.error {
  background: #fdecea;
  color: #b91c1c;
}

/* 
   RESPONSIVE
 */
@media (max-width: 1024px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (max-width: 900px) {
  .project {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .hero__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero__portrait {
    order: -1;
    max-width: 240px;
  }

  .hero__name {
    font-size: clamp(2.8rem, 10vw, 4.5rem);
  }

  .nav__links {
    display: none;
  }
  .nav__burger {
    display: flex;
  }
}

@media (max-width: 680px) {
  .nav {
    padding: 0 20px;
  }
  .hero {
    padding: 80px 20px 48px;
  }
  .section {
    padding: 80px 20px;
  }

  .hero__meta {
    flex-direction: column;
    gap: 8px;
  }
  .hero__meta-sep {
    display: none;
  }

  .education-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .internship-card {
    flex-direction: column;
    gap: 16px;
  }
  .internship-card__right {
    flex-direction: row-reverse;
    justify-content: flex-start;
  }

  .skills-grid {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}

/*  Reduced motion  */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
