<template>
  <div class="pluto-page">

    <!-- ── HERO ─────────────────────────────────────────────────────────── -->
    <header class="pluto-hero">
      <div class="pluto-hero__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>

        <div class="pluto-hero__grid">
          <div class="pluto-hero__text">
            <p class="pluto-hero__eyebrow">{{ $t('projectsPage.pluto.hero.eyebrow') }}</p>
            <h1 class="pluto-hero__title">Pluto</h1>
            <p class="pluto-hero__subtitle">
              <span v-if="$i18n.locale === 'fr'">
                Clavier mécanique split ergonomique, conçu et fabriqué de zéro.
              </span>
              <span v-else>
                A split ergonomic mechanical keyboard, designed and built from scratch.
              </span>
            </p>
          </div>

          <aside class="pluto-hero__meta">
            <dl class="meta-list">
              <div class="meta-row">
                <dt>{{ $t('projectsPage.pluto.hero.statusLabel') }}</dt>
                <dd>
                  <span class="status-badge status-badge--done">
                    {{ $t('projectsPage.pluto.hero.status') }}
                  </span>
                </dd>
              </div>
              <div class="meta-row">
                <dt>{{ $t('projectsPage.pluto.hero.typeLabel') }}</dt>
                <dd>{{ $t('projectsPage.pluto.hero.type') }}</dd>
              </div>
              <div class="meta-row">
                <dt>{{ $t('projectsPage.pluto.hero.keysLabel') }}</dt>
                <dd>30 {{ $t('projectsPage.pluto.hero.keys') }}</dd>
              </div>
              <div class="meta-row">
                <dt>Stack</dt>
                <dd class="meta-stack">
                  <span v-for="tool in tools" :key="tool" class="meta-tag">{{ tool }}</span>
                </dd>
              </div>
            </dl>
          </aside>
        </div>

        <!-- Hero image - final result -->
        <div class="pluto-hero__image-wrap">
          <img
            src="../assets/projects/pluto/pluto-final-1.jpeg"
            alt="Pluto keyboard final result"
            class="pluto-hero__image"
            loading="eager"
          />
          <div class="pluto-hero__image-caption">
            <span aria-hidden="true">Fig. 00:</span>
            <span v-if="$i18n.locale === 'fr'">Résultat final, les deux moitiés assemblées</span>
            <span v-else>Final result, both halves assembled</span>
          </div>
        </div>
      </div>
    </header>

    <main>

      <!-- ── 01 · GENÈSE ──────────────────────────────────────────────── -->
      <section id="genesis" class="pluto-section" aria-labelledby="h-genesis">
        <div class="pluto-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">01</span>
            <h2 class="section-header__title" id="h-genesis">
              <span v-if="$i18n.locale === 'fr'">Genèse</span>
              <span v-else>Genesis</span>
            </h2>
          </header>

          <div class="genesis-layout">
            <div class="genesis-text">
              <p v-if="$i18n.locale === 'fr'">
                Après des mois à taper sur un clavier standard, mes poignets ont commencé à tirer. Ce n'était pas une douleur bloquante, mais elle revenait assez souvent pour que je cherche une vraie solution. Acheter un clavier ergonomique tout fait ne m'attirait pas : c'était cher, et aucun modèle ne correspondait vraiment à ce que je voulais.
              </p>
              <p v-else>
                After months of typing on a standard keyboard, my wrists started hurting. It wasn't serious pain, but it came back often enough that I wanted a real fix. Buying an off-the-shelf ergonomic keyboard didn't appeal to me: it was expensive, and none of the models matched what I had in mind.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                Je voulais un clavier <strong>split</strong> pour placer mes poignets plus naturellement, un profil <strong>fin</strong> pour ne pas lever les mains, du <strong>bluetooth</strong> pour éviter les câbles sur le bureau, et un format <strong>facile à transporter</strong>. J'ai retenu 30 touches en disposition colonnaire, pour chaque moitié, avec chaque colonne alignée sur la longueur naturelle d'un doigt.
              </p>
              <p v-else>
                I wanted a <strong>split</strong> layout so my wrists could sit more naturally, a <strong>slim</strong> profile so my hands would stay low, <strong>bluetooth</strong> to keep cables off the desk, and a <strong>portable</strong> shape. I settled on 30 keys, for each half, in a column-staggered layout, with each column aligned to the natural reach of a finger.
              </p>
            </div>

            <div class="genesis-specs">
              <h3 class="specs-title">
                <span v-if="$i18n.locale === 'fr'">Spécifications</span>
                <span v-else>Specs</span>
              </h3>
              <ul class="specs-list">
                <li>
                  <span v-if="$i18n.locale === 'fr'" class="specs-list__key">Configuration</span>
                  <span v-else class="specs-list__key">Layout</span>
                  <span class="specs-list__val">30 keys · 6×5 col-stagger</span>
                </li>
                <li>
                  <span class="specs-list__key">Wireless</span>
                  <span class="specs-list__val">Bluetooth 5.0 (ZMK)</span>
                </li>
                <li>
                  <span class="specs-list__key">MCU</span>
                  <span class="specs-list__val">nice!nano v2</span>
                </li>
                <li>
                  <span class="specs-list__key">Material</span>
                  <span class="specs-list__val">PETG (heat-resistant)</span>
                </li>
                <li>
                  <span class="specs-list__key">PCB</span>
                  <span class="specs-list__val">Custom · KiCAD</span>
                </li>
                <li>
                  <span class="specs-list__key">Chassis</span>
                  <span class="specs-list__val">FreeCAD → FDM print</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 02 · DESIGN DU LAYOUT ────────────────────────────────────── -->
      <section id="layout" class="pluto-section pluto-section--tinted" aria-labelledby="h-layout">
        <div class="pluto-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">02</span>
            <h2 class="section-header__title" id="h-layout">
              <span v-if="$i18n.locale === 'fr'">Design du layout</span>
              <span v-else>Layout design</span>
            </h2>
          </header>

          <div class="two-col">
            <div class="text-block">
              <p v-if="$i18n.locale === 'fr'">
                J'ai commencé avec <strong>Ergogen</strong>, un outil qui décrit un clavier en YAML puis génère les footprints KiCAD, les points de placement et une prévisualisation 2D. Au lieu de placer les touches une par une, j'écris la géométrie du clavier dans un fichier.
              </p>
              <p v-else>
                I started with <strong>Ergogen</strong>, a tool that describes a keyboard in YAML and generates KiCAD footprints, placement points, and a 2D preview. Instead of placing every key by hand, I write the keyboard geometry in a file.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                Le layout colonnaire (<em>column stagger</em>) décale chaque colonne verticalement selon la longueur des doigts. L'annulaire et l'auriculaire sont plus courts, donc leurs colonnes descendent un peu. Sur le dessin, la différence semble légère. À l'usage, elle se sent tout de suite.
              </p>
              <p v-else>
                The column stagger offsets each column vertically to match finger length. The ring and pinky fingers are shorter, so those columns sit a little lower. On paper it looks subtle. In use, it is immediately noticeable.
              </p>
            </div>

            <figure class="project-figure">
              <img
                src="../assets/projects/pluto/pluto-ergogen.png"
                alt="Ergogen layout preview"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 01:</span>
                <span v-if="$i18n.locale === 'fr'">Preview du layout généré par Ergogen</span>
                <span v-else>Layout preview generated by Ergogen</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- ── 03 · PCB ─────────────────────────────────────────────────── -->
      <section id="pcb" class="pluto-section" aria-labelledby="h-pcb">
        <div class="pluto-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">03</span>
            <h2 class="section-header__title" id="h-pcb">PCB</h2>
          </header>

          <p class="section-lead" v-if="$i18n.locale === 'fr'">
            Ergogen génère les footprints, puis KiCAD prend la suite. Le fichier exporté contient déjà les empreintes des switches et des diodes, placées selon le layout. Il reste à tracer les pistes qui connectent les composants et à lancer le DRC avant l'envoi en fabrication.
          </p>
          <p class="section-lead" v-else>
            Ergogen generates the footprints, then KiCAD takes over. The exported file already contains switch and diode footprints placed according to the layout. From there, I route the traces between components and run the design rule check before sending the PCB to fabrication.
          </p>

          <div class="image-pair">
            <figure class="project-figure">
              <img
                src="../assets/projects/pluto/pluto-kicad-schematic.png"
                alt="KiCAD schematic"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 02:</span>
                <span v-if="$i18n.locale === 'fr'">Schéma électrique KiCAD</span>
                <span v-else>KiCAD electrical schematic</span>
              </figcaption>
            </figure>

            <figure class="project-figure">
              <img
                src="../assets/projects/pluto/pluto-kicad-pcb.png"
                alt="KiCAD PCB layout"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 03:</span>
                <span v-if="$i18n.locale === 'fr'">Layout PCB final dans KiCAD</span>
                <span v-else>Final PCB layout in KiCAD</span>
              </figcaption>
            </figure>
          </div>

          <blockquote class="callout callout--success">
            <span class="callout__label">
              <span v-if="$i18n.locale === 'fr'">Première soudure</span>
              <span v-else>First soldering pass</span>
            </span>
            <span v-if="$i18n.locale === 'fr'">
              C'était ma première soudure sur PCB. Les diodes SMD demandent de la précision, mais le geste vient assez vite. Le clavier a fonctionné du premier coup : chaque connexion a été testée au multimètre, puis confirmée en tapant.
            </span>
            <span v-else>
              This was my first time soldering a PCB. SMD diodes need precision, but the motion comes quickly. The keyboard worked on the first try: I checked every connection with a multimeter, then confirmed it by typing.
            </span>
          </blockquote>

          <figure class="project-figure" style="margin-top: 32px;">
            <img
              src="../assets/projects/pluto/pluto-soldering.png"
              alt="PCB soldering process"
              class="project-figure__img"
              style="height: 600px; object-fit: cover; object-position: top;"
              loading="lazy"
            />
            <figcaption>
              <span aria-hidden="true">Fig. 04:</span>
              <span v-if="$i18n.locale === 'fr'">Soudure des diodes SMD sur le PCB</span>
              <span v-else>Soldering SMD diodes on the PCB</span>
            </figcaption>
          </figure>
          
        </div>
      </section>

      <!-- ── 04 · CHASSIS ─────────────────────────────────────────────── -->
      <section id="chassis" class="pluto-section pluto-section--tinted" aria-labelledby="h-chassis">
        <div class="pluto-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">04</span>
            <h2 class="section-header__title" id="h-chassis">
              <span v-if="$i18n.locale === 'fr'">Chassis</span>
              <span v-else>Case</span>
            </h2>
          </header>

          <div class="two-col">
            <div class="text-block">
              <p v-if="$i18n.locale === 'fr'">
                Ergogen génère aussi une base pour le chassis. J'ai ensuite finalisé le modèle dans FreeCAD : tolérances des switches, fixations du PCB, espace pour la batterie et le microcontrôleur.
              </p>
              <p v-else>
                Ergogen also generates a base for the case. I finished the model in FreeCAD: switch tolerances, PCB mounts, and space for the battery and microcontroller.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                J'ai choisi le <strong>PETG</strong> plutôt que le PLA parce que le nice!nano peut chauffer sous charge, et le PLA ramollit autour de 60°C. Le PETG tient jusqu'à environ 80°C et reste assez rigide. En échange, il est plus difficile à imprimer : l'adhérence au plateau est moins simple et les réglages doivent être précis.
              </p>
              <p v-else>
                I chose <strong>PETG</strong> instead of PLA because the nice!nano can heat up under load, and PLA softens around 60°C. PETG holds up to about 80°C and stays rigid enough. The downside is print difficulty: bed adhesion is less forgiving, and the settings need to be dialed in.
              </p>
            </div>

            <figure class="project-figure">
              <img
                src="../assets/projects/pluto/pluto-freecad.png"
                alt="FreeCAD chassis model"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 05:</span>
                <span v-if="$i18n.locale === 'fr'">Modèle 3D du chassis dans FreeCAD</span>
                <span v-else>3D chassis model in FreeCAD</span>
              </figcaption>
            </figure>
          </div>

          <!-- Print attempts -->
          <div class="print-attempts">
            <h3 class="subsection-title">
              <span v-if="$i18n.locale === 'fr'">Tentatives d'impression</span>
              <span v-else>Print attempts</span>
            </h3>

            <blockquote class="callout callout--warning">
              <span class="callout__label">
                <span v-if="$i18n.locale === 'fr'">4–5 tentatives avant le bon résultat</span>
                <span v-else>4–5 attempts before the right result</span>
              </span>
              <span v-if="$i18n.locale === 'fr'">
                Les imprimantes disponibles avaient des buses usées et des profils de température mal réglés pour le PETG. À chaque essai, j'ai ajusté la température du lit, la vitesse d'impression et la rétractation. Le PETG demande plus de patience que le PLA.
              </span>
              <span v-else>
                The available printers had worn nozzles and temperature profiles that were not tuned for PETG. After each attempt, I adjusted bed temperature, print speed, and retraction. PETG takes more patience than PLA.
              </span>
            </blockquote>

            <div class="print-gallery">
              <figure class="project-figure">
                <img
                  src="../assets/projects/pluto/pluto-first-print.jpg"
                  alt="First print attempt"
                  class="project-figure__img"
                  loading="lazy"
                />
                <figcaption>
                  <span aria-hidden="true">Fig. 06:</span>
                  <span v-if="$i18n.locale === 'fr'">Première tentative d'impression</span>
                  <span v-else>First print attempt</span>
                </figcaption>
              </figure>

              <figure class="project-figure">
                <img
                  src="../assets/projects/pluto/pluto-last-print.jpg"
                  alt="Last print attempt"
                  class="project-figure__img"
                  loading="lazy"
                />
                <figcaption>
                  <span aria-hidden="true">Fig. 07:</span>
                  <span v-if="$i18n.locale === 'fr'">Dernière tentative d'impression</span>
                  <span v-else>Last print attempt</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 05 · FIRMWARE ────────────────────────────────────────────── -->
      <section id="firmware" class="pluto-section" aria-labelledby="h-firmware">
        <div class="pluto-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">05</span>
            <h2 class="section-header__title" id="h-firmware">Firmware · ZMK</h2>
          </header>

          <div class="two-col">
            <div class="text-block">
              <p v-if="$i18n.locale === 'fr'">
                <strong>ZMK</strong> est un firmware open-source très utilisé pour les claviers sans fil. Il fonctionne sur le nice!nano (nRF52840) et gère le bluetooth, la batterie et la détection des touches via une matrice de diodes.
              </p>
              <p v-else>
                <strong>ZMK</strong> is a widely used open-source firmware for wireless keyboards. It runs on the nice!nano (nRF52840) and handles bluetooth, battery management, and key detection through a diode matrix.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                La config repose sur un fichier <code>.keymap</code> et un fichier de définition de la carte. J'ai gardé un layout simple : une couche principale de 30 touches, avec les caractères spéciaux accessibles par combos ou par layers maintenus. Moins de couches, moins de charge mentale.
              </p>
              <p v-else>
                The config lives in a <code>.keymap</code> file and a board definition file. I kept the layout simple: one main 30-key layer, with special characters reached through combos or hold layers. Fewer layers, less mental overhead.
              </p>
            </div>

            <figure class="project-figure">
              <img
                src="../assets/projects/pluto/pluto-zmk.png"
                alt="ZMK keymap layout"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 08:</span>
                <span v-if="$i18n.locale === 'fr'">Visualisation du layout ZMK</span>
                <span v-else>ZMK keymap visualization</span>
              </figcaption>
            </figure>
          </div>

          <!-- ZMK stack details -->
          <div class="firmware-detail">
            <div class="firmware-chip" v-for="item in firmwareItems" :key="item.name">
              <span class="firmware-chip__name">{{ item.name }}</span>
              <span class="firmware-chip__desc">{{ $i18n.locale === 'fr' ? item.fr : item.en }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 06 · RÉSULTAT FINAL ──────────────────────────────────────── -->
      <section id="result" class="pluto-section pluto-section--tinted" aria-labelledby="h-result">
        <div class="pluto-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">06</span>
            <h2 class="section-header__title" id="h-result">
              <span v-if="$i18n.locale === 'fr'">Résultat final</span>
              <span v-else>Final result</span>
            </h2>
          </header>

          <div class="final-gallery">
            <figure class="project-figure project-figure--large">
              <img
                src="../assets/projects/pluto/pluto-final-1.jpeg"
                alt="Pluto keyboard final top view"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 09:</span>
                <span v-if="$i18n.locale === 'fr'">Vue de dessus, les deux moitiés</span>
                <span v-else>Top view, both halves</span>
              </figcaption>
            </figure>
            <figure class="project-figure project-figure--large">
              <img
                src="../assets/projects/pluto/pluto-final-2.jpg"
                alt="Pluto keyboard final detail"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 10:</span>
                <span v-if="$i18n.locale === 'fr'">Détail du chassis imprimé en PETG</span>
                <span v-else>Detail of the PETG-printed case</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- ── 07 · CE QUE J'AI APPRIS ─────────────────────────────────── -->
      <section id="learning" class="pluto-section" aria-labelledby="h-learning">
        <div class="pluto-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">07</span>
            <h2 class="section-header__title" id="h-learning">
              <span v-if="$i18n.locale === 'fr'">Ce que j'ai appris</span>
              <span v-else>What I learned</span>
            </h2>
          </header>

          <div class="learning-grid">
            <div class="learning-card" v-for="item in learningItems" :key="item.domain">
              <span class="learning-card__domain">{{ item.domain }}</span>
              <p class="learning-card__text">
                {{ $i18n.locale === 'fr' ? item.fr : item.en }}
              </p>
            </div>
          </div>

          <blockquote class="callout callout--accent" style="margin-top: 40px;">
            <span class="callout__label">
              <span v-if="$i18n.locale === 'fr'">Recul critique</span>
              <span v-else>Looking back</span>
            </span>
            <span v-if="$i18n.locale === 'fr'">
              Ce projet m'a rappelé que le hardware pardonne peu. Contrairement au software, on ne peut pas annuler une soudure ratée ou une pièce mal imprimée. Chaque décision finit par exister quelque part sur la table. C'est aussi ce qui rend le résultat satisfaisant : le clavier existe, il fonctionne, et je l'utilise tous les jours.
            </span>
            <span v-else>
              This project reminded me that hardware does not forgive much. Unlike software, you cannot undo a bad solder joint or a failed print. Every decision ends up somewhere on the table. That is also what makes the result satisfying: the keyboard exists, it works, and I use it every day.
            </span>
          </blockquote>
        </div>
      </section>

      <section id="improvement" class="pluto-section" aria-labelledby="h-improvement">
        <div class="pluto-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">08</span>
            <h2 class="section-header__title" id="h-improvement">
              <span v-if="$i18n.locale === 'fr'">Améliorations possibles</span>
              <span v-else>Possible improvements</span>
            </h2>
          </header>

          <div class="improvement-grid">
            <div class="improvement-card" v-for="item in improvementItems" :key="item.id">
              <span class="improvement-card__domain">
                {{ $t(`projectsPage.pluto.improvement.${item.id}.title`) }}
              </span>
              <p class="improvement-card__text">
                {{ $t(`projectsPage.pluto.improvement.${item.id}.desc`) }}
              </p>
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
const tools = ['Ergogen', 'KiCAD', 'FreeCAD', 'ZMK', 'PETG']

const firmwareItems = [
  {
    name: 'ZMK',
    fr: 'Firmware open-source pour claviers sans fil (nRF52840)',
    en: 'Open-source firmware for wireless keyboards (nRF52840)',
  },
  {
    name: 'nice!nano v2',
    fr: 'Microcontrôleur nRF52840, BT 5.0 et gestion batterie intégrée',
    en: 'nRF52840 microcontroller, BT 5.0 and built-in battery management',
  },
  {
    name: 'Keymap',
    fr: '30 touches · layout colonnaire · layers via hold',
    en: '30 keys · column-stagger layout · layers via hold',
  },
  {
    name: 'Split comms',
    fr: 'Communication sans fil entre les deux moitiés via BT',
    en: 'Wireless communication between halves via BT',
  },
]

const learningItems = [
  {
    domain: 'PCB Design',
    fr: 'KiCAD depuis zéro : schémas, routage, DRC, et matrices de diodes pour éviter le ghosting.',
    en: 'KiCAD from scratch: schematics, routing, DRC, and diode matrices to prevent ghosting.',
  },
  {
    domain: 'Soldering',
    fr: 'Première expérience de soudure SMD. La précision prime sur la vitesse. Résultat parfait au premier essai.',
    en: 'First SMD soldering experience. Precision over speed. Perfect result on the first try.',
  },
  {
    domain: '3D Printing',
    fr: 'Le PETG est capricieux. Chaque imprimante demande sa propre calibration, et la patience compte autant que les réglages.',
    en: 'PETG is finicky. Every printer needs its own calibration, and patience matters as much as the settings.',
  },
  {
    domain: 'Firmware',
    fr: 'ZMK est déclaratif et bien documenté. Configurer un clavier split sans fil demande de comprendre comment les deux moitiés communiquent.',
    en: 'ZMK is declarative and well-documented. Configuring a wireless split requires understanding how both halves communicate.',
  },
]

const improvementItems = [
  { id: '1' },
  { id: '2' },
]
</script>

<style scoped>
/* ── Page wrapper ── */
.pluto-page {
  /* Inherits all design tokens from .portfolio in App.vue */
}

/* ── Hero ── */
.pluto-hero {
  padding: 100px 40px 0;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.pluto-hero__inner {
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

.pluto-hero__grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px 60px;
  align-items: start;
  margin-bottom: 56px;
}

.pluto-hero__eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.pluto-hero__title {
  font-family: var(--font-serif);
  font-size: clamp(4rem, 9vw, 7rem);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: var(--text);
  margin: 0 0 20px;
}

.pluto-hero__subtitle {
  font-size: 17px;
  color: var(--text-2);
  line-height: 1.6;
  max-width: 480px;
}

/* Meta panel */
.pluto-hero__meta {
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

.status-badge--done {
  background: #edf7f0;
  color: #2e7d52;
}
.status-badge--done::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2e7d52;
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

/* Hero image */
.pluto-hero__image-wrap {
  position: relative;
  width: 100%;
  margin: 0 -40px;
  width: calc(100% + 80px);
  overflow: hidden;
}

.pluto-hero__image {
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: grayscale(10%);
  transition: filter 0.4s;
}
.pluto-hero__image:hover {
  filter: grayscale(0%);
}

.pluto-hero__image-caption {
  position: absolute;
  bottom: 16px;
  right: 40px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.04em;
  background: rgba(28, 25, 23, 0.45);
  padding: 4px 10px;
  border-radius: 2px;
  backdrop-filter: blur(4px);
}

/* ── Sections ── */
.pluto-section {
  padding: 96px 40px;
}

.pluto-section--tinted {
  background: var(--bg-tint);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.pluto-section__inner {
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

.subsection-title {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text);
  margin: 48px 0 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.section-lead {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-2);
  margin: 0 0 40px;
  max-width: 720px;
  text-align: justify;
}

/* ── Two-col ── */
.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.text-block {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.text-block p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-2);
  margin: 0;
  text-align: justify;
}

.text-block strong {
  color: var(--text);
  font-weight: 600;
}

.text-block code {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: var(--bg-inset);
  border: 1px solid var(--border);
  padding: 2px 6px;
  border-radius: 3px;
  color: var(--text-2);
}

/* ── Genesis layout ── */
.genesis-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 60px;
  align-items: start;
}

.genesis-text {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.genesis-text p {
  font-size: 15px;
  line-height: 1.8;
  color: var(--text-2);
  margin: 0;
  text-align: justify;
}

.genesis-text strong {
  color: var(--text);
  font-weight: 600;
}

/* Specs */
.specs-title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
  margin: 0 0 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
}

.specs-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.specs-list li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  font-size: 13px;
}
.specs-list li:last-child { border-bottom: none; }

.specs-list__key {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.04em;
  flex-shrink: 0;
}

.specs-list__val {
  font-size: 13px;
  color: var(--text);
  font-weight: 500;
  text-align: right;
}

/* ── Figures ── */
.project-figure {
  margin: 0;
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

.project-figure--large .project-figure__img {
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

/* Image pair */
.image-pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 32px;
}

/* Print gallery */
.print-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 24px;
}

/* Final gallery */
.final-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

/* ── Callouts ── */
.callout {
  border-left: 2px solid var(--border-mid);
  padding: 16px 20px;
  margin: 0;
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.75;
  text-align: justify;
}

.callout--accent {
  border-left-color: var(--accent);
  background: var(--accent-light);
  border-radius: 0 4px 4px 0;
}

.callout--success {
  border-left-color: #2e7d52;
  background: #edf7f0;
  border-radius: 0 4px 4px 0;
  color: #1a4d32;
}

.callout--warning {
  border-left-color: #b45309;
  background: #fef3e2;
  border-radius: 0 4px 4px 0;
  color: #7c3d0e;
}

.callout__label {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.callout--accent .callout__label { color: var(--accent); }
.callout--success .callout__label { color: #2e7d52; }
.callout--warning .callout__label { color: #b45309; }

/* ── Firmware ── */
.firmware-detail {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  margin-top: 40px;
}

.firmware-chip {
  background: var(--bg);
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: background 0.2s;
}
.firmware-chip:hover { background: var(--bg-tint); }

.firmware-chip__name {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: 0.04em;
}

.firmware-chip__desc {
  font-size: 12px;
  color: var(--text-3);
  line-height: 1.55;
}

/* ── Learning ── */
.learning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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

.improvement-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  margin-top: 24px;
}

.improvement-card {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 28px 24px;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
}

.improvement-card:hover {
  border-color: var(--border-mid);
  background: var(--bg-tint);
  transform: translateY(-2px);
}

.improvement-card__domain {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
}

.improvement-card__text {
  font-size: 14px;
  line-height: 1.8;
  color: var(--text-2);
  margin: 0;
  text-align: justify;
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

.improvement-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.improvement-list li {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.improvement-list strong {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
}

.improvement-list p {
  font-size: 13px;
  line-height: 1.65;
  color: var(--text-2);
  margin: 0;
  text-align: justify;
}

/* ══════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════ */
@media (max-width: 900px) {
  .pluto-hero__grid { grid-template-columns: 1fr; }
  .genesis-layout { grid-template-columns: 1fr; gap: 32px; }
  .two-col { grid-template-columns: 1fr; gap: 32px; }
  .image-pair { grid-template-columns: 1fr; }
  .print-gallery { grid-template-columns: 1fr; }
  .final-gallery { grid-template-columns: 1fr; }
  .improvement-grid { grid-template-columns: 1fr; }
}

@media (max-width: 680px) {
  .pluto-hero { padding: 80px 20px 0; }
  .pluto-section { padding: 64px 20px; }
  .back-footer { padding: 24px 20px 48px; }

  .pluto-hero__image-wrap {
    margin: 0 -20px;
    width: calc(100% + 40px);
  }

  .pluto-hero__title { font-size: clamp(3rem, 12vw, 5rem); }

  .firmware-detail { grid-template-columns: 1fr 1fr; }
  .learning-grid { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
