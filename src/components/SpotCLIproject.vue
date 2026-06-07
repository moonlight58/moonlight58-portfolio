<template>
  <div class="spotcli-page">

    <!-- ── HERO ─────────────────────────────────────────────────────────── -->
    <header class="spotcli-hero">
      <div class="spotcli-hero__inner">
        <RouterLink to="/" class="back-link">← {{ $t('common.back') }}</RouterLink>

        <div class="spotcli-hero__grid">
          <div class="spotcli-hero__text">
            <p class="spotcli-hero__eyebrow">{{ $t('projectsPage.spotcli.hero.eyebrow') }}</p>
            <h1 class="spotcli-hero__title">spotCLI</h1>
            <p class="spotcli-hero__subtitle">
              <span v-if="$i18n.locale === 'fr'">
                Un outil en ligne de commande pour contrôler Spotify depuis le terminal — sans ouvrir l'application.
              </span>
              <span v-else>
                A command-line tool to search Spotify and manage your library without ever opening the app.
              </span>
            </p>

            <blockquote class="hero-archive-notice">
              <span class="hero-archive-notice__label">
                <span v-if="$i18n.locale === 'fr'">Projet archivé</span>
                <span v-else>Archived project</span>
              </span>
              <span v-if="$i18n.locale === 'fr'">
                Ce projet n'est plus maintenu pour des raisons politiques liées aux activités de Spotify. Le code reste disponible sous licence MIT.
              </span>
              <span v-else>
                This project is no longer maintained for political reasons related to Spotify's activities. The code remains available under the MIT license.
              </span>
            </blockquote>
          </div>

          <aside class="spotcli-hero__meta">
            <dl class="meta-list">
              <div class="meta-row">
                <dt>{{ $t('projectsPage.spotcli.hero.statusLabel') }}</dt>
                <dd>
                  <span class="status-badge status-badge--archived">
                    {{ $t('projectsPage.spotcli.hero.status') }}
                  </span>
                </dd>
              </div>
              <div class="meta-row">
                <dt>{{ $t('projectsPage.spotcli.hero.typeLabel') }}</dt>
                <dd>
                  <span v-if="$i18n.locale === 'fr'">Outil CLI · C</span>
                  <span v-else>CLI Tool · C</span>
                </dd>
              </div>
              <div class="meta-row">
                <dt>Platform</dt>
                <dd>Linux · macOS</dd>
              </div>
              <div class="meta-row">
                <dt>Auth</dt>
                <dd>OAuth 2.0 · PKCE</dd>
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

        <!-- Hero image — terminal screenshot -->
        <div class="spotcli-hero__image-wrap">
          <img
            src="../assets/projects/spotcli/spotcli-hero.png"
            alt="spotCLI running in a terminal"
            class="spotcli-hero__image"
            loading="eager"
          />
          <div class="spotcli-hero__image-caption">
            <span aria-hidden="true">Fig. 00:</span>
            <span v-if="$i18n.locale === 'fr'">Mode interactif — menu principal avec 38 commandes</span>
            <span v-else>Interactive mode — main menu with 38 commands</span>
          </div>
        </div>
      </div>
    </header>

    <main>

      <!-- ── 01 · GENESIS ─────────────────────────────────────────────── -->
      <section id="genesis" class="spotcli-section" aria-labelledby="h-genesis">
        <div class="spotcli-section__inner">
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
                Le déclencheur était simple : j'écoutais de la musique en travaillant et je voulais sauvegarder un morceau dans ma bibliothèque. Ouvrir Spotify, chercher la chanson, cliquer sur le cœur — le rituel prenait trente secondes et cassait la concentration. J'avais déjà un terminal ouvert. Je voulais taper une commande.
              </p>
              <p v-else>
                The trigger was simple: I was listening to music while working and wanted to save a track to my library. Open Spotify, find the song, click the heart — the whole ritual took thirty seconds and broke focus. I already had a terminal open. I wanted to type a command.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                J'aurais pu écrire un script Python en une heure. J'ai choisi le <strong>C</strong> pour deux raisons : je voulais pratiquer la gestion mémoire manuelle sur un projet réel, et je voulais un binaire autonome sans dépendre d'un runtime. Le résultat est un exécutable de quelques kilooctets qui ne demande que <code>libcurl</code> et <code>json-c</code>.
              </p>
              <p v-else>
                I could have written a Python script in an hour. I chose <strong>C</strong> for two reasons: I wanted to practice manual memory management on a real project, and I wanted a standalone binary with no runtime dependency. The result is a few-kilobyte executable that only needs <code>libcurl</code> and <code>json-c</code>.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                Le projet a grandi au-delà de la sauvegarde de pistes : recherche par artiste, gestion de playlists, contrôle de la lecture, transfert entre appareils. Au final, <strong>38 commandes interactives</strong> couvrant presque l'intégralité de l'API publique de Spotify.
              </p>
              <p v-else>
                The project grew well beyond saving tracks: artist search, playlist management, playback control, device transfer. In the end, <strong>38 interactive commands</strong> covering nearly the full Spotify public API.
              </p>
            </div>

            <div class="genesis-specs">
              <h3 class="specs-title">Specs</h3>
              <ul class="specs-list">
                <li>
                  <span class="specs-list__key">Language</span>
                  <span class="specs-list__val">C (C11)</span>
                </li>
                <li>
                  <span class="specs-list__key">HTTP</span>
                  <span class="specs-list__val">libcurl</span>
                </li>
                <li>
                  <span class="specs-list__key">JSON</span>
                  <span class="specs-list__val">json-c</span>
                </li>
                <li>
                  <span class="specs-list__key">Auth</span>
                  <span class="specs-list__val">OAuth 2.0 · hand-rolled</span>
                </li>
                <li>
                  <span class="specs-list__key">Build</span>
                  <span class="specs-list__val">Make · GCC</span>
                </li>
                <li>
                  <span class="specs-list__key">Platform</span>
                  <span class="specs-list__val">Linux · macOS</span>
                </li>
                <li>
                  <span class="specs-list__key">Commands</span>
                  <span class="specs-list__val">38 interactive</span>
                </li>
                <li>
                  <span class="specs-list__key">License</span>
                  <span class="specs-list__val">MIT</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 02 · ARCHITECTURE ─────────────────────────────────────────── -->
      <section id="architecture" class="spotcli-section spotcli-section--tinted" aria-labelledby="h-architecture">
        <div class="spotcli-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">02</span>
            <h2 class="section-header__title" id="h-architecture">
              <span v-if="$i18n.locale === 'fr'">Architecture</span>
              <span v-else>Architecture</span>
            </h2>
          </header>

          <p class="section-lead" v-if="$i18n.locale === 'fr'">
            Le projet suit une séparation stricte entre couches. Chaque domaine de l'API Spotify a son propre header et son propre fichier source. La couche HTTP est complètement isolée dans <code>http.c</code> — le reste du code ne touche jamais à curl directement.
          </p>
          <p class="section-lead" v-else>
            The project enforces a strict layer separation. Each Spotify API domain has its own header and source file. The HTTP layer is fully contained in <code>http.c</code> — nothing else in the codebase touches curl directly.
          </p>

          <div class="arch-tree">
            <div class="arch-tree__group" v-for="group in archGroups" :key="group.label">
              <span class="arch-tree__group-label">{{ group.label }}</span>
              <div class="arch-tree__files">
                <div class="arch-tree__file" v-for="file in group.files" :key="file.name">
                  <span class="arch-tree__filename">{{ file.name }}</span>
                  <span class="arch-tree__filedesc">
                    {{ $i18n.locale === 'fr' ? file.fr : file.en }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="two-col" style="margin-top: 48px;">
            <div class="text-block">
              <p v-if="$i18n.locale === 'fr'">
                Chaque module expose un pattern identique : une fonction qui alloue et retourne une structure, et une fonction <code>spotify_free_*</code> correspondante qui libère la mémoire. C'est une convention simple, mais elle rend la gestion mémoire prévisible et facile à auditer.
              </p>
              <p v-else>
                Every module exposes the same pattern: a function that allocates and returns a struct, and a matching <code>spotify_free_*</code> function that releases the memory. It is a simple convention, but it makes memory management predictable and easy to audit.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                Les parsers JSON sont centralisés dans <code>parsers.c</code>. Quand Spotify change un champ dans sa réponse, un seul endroit dans le code est à modifier. Les fonctions <code>parse_track_json</code>, <code>parse_artist_json</code>, <code>parse_playlist_json</code> sont réutilisées partout dans le projet.
              </p>
              <p v-else>
                JSON parsers are centralized in <code>parsers.c</code>. When Spotify changes a field in its response, there is exactly one place to update. The <code>parse_track_json</code>, <code>parse_artist_json</code>, and <code>parse_playlist_json</code> functions are reused across the entire codebase.
              </p>
            </div>

            <figure class="project-figure">
              <img
                src="../assets/projects/spotcli/spotcli-architecture.png"
                alt="spotCLI header architecture diagram"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 01:</span>
                <span v-if="$i18n.locale === 'fr'">Structure des headers — séparation par domaine API</span>
                <span v-else>Header structure — separation by API domain</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- ── 03 · AUTH FLOW ────────────────────────────────────────────── -->
      <section id="auth" class="spotcli-section" aria-labelledby="h-auth">
        <div class="spotcli-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">03</span>
            <h2 class="section-header__title" id="h-auth">
              <span v-if="$i18n.locale === 'fr'">Authentification OAuth 2.0</span>
              <span v-else>OAuth 2.0 Authentication</span>
            </h2>
          </header>

          <div class="two-col">
            <div class="text-block">
              <p v-if="$i18n.locale === 'fr'">
                L'authentification OAuth sur une application CLI pose un problème concret : après que l'utilisateur autorise l'application dans son navigateur, Spotify redirige vers une URL de callback. Il faut quelque chose qui écoute à cette adresse.
              </p>
              <p v-else>
                OAuth authentication on a CLI application has a concrete problem: after the user authorizes the app in their browser, Spotify redirects to a callback URL. Something needs to be listening at that address.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                J'ai écrit un serveur HTTP minimaliste en C pur — une socket POSIX qui écoute sur <code>127.0.0.1:8888</code>, accepte une connexion, lit la requête GET, extrait le code d'autorisation depuis les paramètres d'URL, renvoie une page HTML de confirmation, puis se ferme. Environ 70 lignes de code réseau sans dépendance externe.
              </p>
              <p v-else>
                I wrote a minimal HTTP server in raw C — a POSIX socket that listens on <code>127.0.0.1:8888</code>, accepts one connection, reads the GET request, extracts the authorization code from the URL parameters, sends back an HTML confirmation page, then shuts down. About 70 lines of network code with no external dependency.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                Le token est ensuite stocké localement dans <code>~/.config/spotCLI/token.json</code> avec sa date d'obtention. À chaque démarrage, le programme vérifie si le token a expiré (marge de 5 minutes) et le rafraîchit automatiquement si nécessaire. L'utilisateur ne se reconnecte qu'une seule fois.
              </p>
              <p v-else>
                The token is then stored locally in <code>~/.config/spotCLI/token.json</code> with its acquisition timestamp. On every startup, the program checks if the token is expired (with a 5-minute margin) and refreshes it automatically. The user only authenticates once.
              </p>
            </div>

            <figure class="project-figure">
              <img
                src="../assets/projects/spotcli/spotcli-auth.png"
                alt="OAuth flow in the terminal"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 02:</span>
                <span v-if="$i18n.locale === 'fr'">Flux OAuth — affichage de l'URL, attente du callback, confirmation</span>
                <span v-else>OAuth flow — URL display, callback wait, confirmation</span>
              </figcaption>
            </figure>
          </div>

          <blockquote class="callout callout--success" style="margin-top: 40px;">
            <span class="callout__label">
              <span v-if="$i18n.locale === 'fr'">Serveur de callback en C pur</span>
              <span v-else>Raw C callback server</span>
            </span>
            <span v-if="$i18n.locale === 'fr'">
              Écrire un serveur TCP minimaliste m'a forcé à comprendre les sockets POSIX à un niveau que je n'avais pas eu l'occasion de pratiquer. <code>socket()</code>, <code>bind()</code>, <code>listen()</code>, <code>accept()</code>, <code>read()</code>, <code>write()</code> — la séquence complète, sans abstraction.
            </span>
            <span v-else>
              Writing a minimal TCP server forced me to understand POSIX sockets at a level I had not practiced before. <code>socket()</code>, <code>bind()</code>, <code>listen()</code>, <code>accept()</code>, <code>read()</code>, <code>write()</code> — the full sequence, with no abstraction layer.
            </span>
          </blockquote>

          <!-- Auth flow diagram -->
          <div class="auth-flow">
            <h3 class="subsection-title">
              <span v-if="$i18n.locale === 'fr'">Séquence d'authentification</span>
              <span v-else>Auth sequence</span>
            </h3>
            <ol class="auth-steps">
              <li class="auth-step" v-for="step in authSteps" :key="step.num">
                <span class="auth-step__num">{{ step.num }}</span>
                <div class="auth-step__content">
                  <span class="auth-step__title">{{ $i18n.locale === 'fr' ? step.titleFr : step.titleEn }}</span>
                  <span class="auth-step__desc">{{ $i18n.locale === 'fr' ? step.descFr : step.descEn }}</span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <!-- ── 04 · HTTP LAYER ───────────────────────────────────────────── -->
      <section id="http" class="spotcli-section spotcli-section--tinted" aria-labelledby="h-http">
        <div class="spotcli-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">04</span>
            <h2 class="section-header__title" id="h-http">
              <span v-if="$i18n.locale === 'fr'">Couche HTTP</span>
              <span v-else>HTTP Layer</span>
            </h2>
          </header>

          <p class="section-lead" v-if="$i18n.locale === 'fr'">
            L'API Spotify utilise GET, PUT, POST et DELETE avec des comportements différents selon les endpoints : certains retournent du JSON, d'autres retournent 204 No Content, d'autres encore retournent 200 avec un corps vide. Il a fallu écrire une variante pour chaque cas.
          </p>
          <p class="section-lead" v-else>
            The Spotify API uses GET, PUT, POST, and DELETE with different behaviors per endpoint: some return JSON, others return 204 No Content, others 200 with an empty body. A variant was needed for each case.
          </p>

          <div class="http-grid">
            <div class="http-chip" v-for="fn in httpFunctions" :key="fn.name">
              <span class="http-chip__method" :class="`http-chip__method--${fn.method.toLowerCase()}`">{{ fn.method }}</span>
              <span class="http-chip__name">{{ fn.name }}</span>
              <span class="http-chip__desc">{{ $i18n.locale === 'fr' ? fn.fr : fn.en }}</span>
            </div>
          </div>

          <div class="two-col" style="margin-top: 48px;">
            <figure class="project-figure">
              <img
                src="../assets/projects/spotcli/spotcli-http.png"
                alt="HTTP layer source code"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 03:</span>
                <span v-if="$i18n.locale === 'fr'">Extrait de <code>http.c</code> — pattern write_callback</span>
                <span v-else>Excerpt from <code>http.c</code> — write_callback pattern</span>
              </figcaption>
            </figure>

            <div class="text-block">
              <p v-if="$i18n.locale === 'fr'">
                Toutes les réponses passent par un <code>write_callback</code> qui accumule les chunks dans un buffer alloué dynamiquement. curl appelle cette fonction autant de fois que nécessaire jusqu'à ce que la réponse soit complète. Le buffer est ensuite parsé par json-c et libéré.
              </p>
              <p v-else>
                All responses go through a <code>write_callback</code> that accumulates chunks into a dynamically allocated buffer. curl calls this function as many times as needed until the response is complete. The buffer is then parsed by json-c and freed.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                Un point délicat : l'API Spotify impose des codes HTTP différents selon les opérations. Mettre en pause retourne 204, créer une playlist retourne 201, sauvegarder des albums retourne 200. Chaque wrapper vérifie le code exact plutôt que de se contenter de <code>2xx</code>.
              </p>
              <p v-else>
                One subtlety: the Spotify API enforces different HTTP codes per operation. Pausing playback returns 204, creating a playlist returns 201, saving albums returns 200. Each wrapper checks the exact code rather than accepting any <code>2xx</code>.
              </p>

              <blockquote class="callout callout--warning">
                <span class="callout__label">
                  <span v-if="$i18n.locale === 'fr'">Gestion mémoire</span>
                  <span v-else>Memory management</span>
                </span>
                <span v-if="$i18n.locale === 'fr'">
                  Chaque objet json-c doit être libéré manuellement avec <code>json_object_put()</code>. Oublier un seul appel crée une fuite. Travailler sans garbage collector a rendu chaque chemin de retour explicite.
                </span>
                <span v-else>
                  Every json-c object must be manually released with <code>json_object_put()</code>. Missing a single call creates a leak. Working without a garbage collector made every return path explicit.
                </span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <!-- ── 05 · INTERACTIVE MODE ─────────────────────────────────────── -->
      <section id="interactive" class="spotcli-section" aria-labelledby="h-interactive">
        <div class="spotcli-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">05</span>
            <h2 class="section-header__title" id="h-interactive">
              <span v-if="$i18n.locale === 'fr'">Mode interactif</span>
              <span v-else>Interactive mode</span>
            </h2>
          </header>

          <div class="two-col">
            <div class="text-block">
              <p v-if="$i18n.locale === 'fr'">
                Le mode interactif est le cœur de l'outil. Un menu numéroté de 38 options couvrant la bibliothèque, la recherche, les playlists et le player. Chaque option déclenche une séquence : l'utilisateur saisit une requête, le programme affiche les résultats, l'utilisateur choisit un numéro.
              </p>
              <p v-else>
                The interactive mode is the core of the tool. A numbered menu of 38 options covering the library, search, playlists, and the player. Each option triggers a sequence: the user types a query, the program displays results, the user picks a number.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                Le mode ligne de commande permet d'utiliser spotCLI sans passer par le menu. <code>spotCLI "Bohemian Rhapsody"</code> lance une recherche de piste directement. Des flags permettent de changer le type : <code>-a</code> pour les artistes, <code>-A</code> pour les albums, <code>-l</code> pour lister la bibliothèque sauvegardée.
              </p>
              <p v-else>
                The CLI mode lets you use spotCLI without going through the menu. <code>spotCLI "Bohemian Rhapsody"</code> runs a track search directly. Flags change the type: <code>-a</code> for artists, <code>-A</code> for albums, <code>-l</code> to list the saved library.
              </p>
            </div>

            <figure class="project-figure">
              <img
                src="../assets/projects/spotcli/spotcli-menu.png"
                alt="spotCLI interactive menu"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 04:</span>
                <span v-if="$i18n.locale === 'fr'">Menu interactif avec les 38 commandes disponibles</span>
                <span v-else>Interactive menu with all 38 available commands</span>
              </figcaption>
            </figure>
          </div>

          <!-- Commands breakdown -->
          <h3 class="subsection-title">
            <span v-if="$i18n.locale === 'fr'">Commandes disponibles</span>
            <span v-else>Available commands</span>
          </h3>
          <div class="commands-grid">
            <div class="commands-group" v-for="group in commandGroups" :key="group.label">
              <span class="commands-group__label">{{ group.label }}</span>
              <ul class="commands-list">
                <li v-for="cmd in group.commands" :key="cmd">{{ cmd }}</li>
              </ul>
            </div>
          </div>

          <div class="image-pair" style="margin-top: 40px;">
            <figure class="project-figure">
              <img
                src="../assets/projects/spotcli/spotcli-search.png"
                alt="Track search in spotCLI"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 05:</span>
                <span v-if="$i18n.locale === 'fr'">Résultats de recherche — sélection d'une piste</span>
                <span v-else>Search results — track selection</span>
              </figcaption>
            </figure>

            <figure class="project-figure">
              <img
                src="../assets/projects/spotcli/spotcli-player.png"
                alt="Player state in spotCLI"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 06:</span>
                <span v-if="$i18n.locale === 'fr'">État du player — barre de progression en ASCII</span>
                <span v-else>Player state — ASCII progress bar</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- ── 06 · RESULT ───────────────────────────────────────────────── -->
      <section id="result" class="spotcli-section spotcli-section--tinted" aria-labelledby="h-result">
        <div class="spotcli-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">06</span>
            <h2 class="section-header__title" id="h-result">
              <span v-if="$i18n.locale === 'fr'">Résultat</span>
              <span v-else>Result</span>
            </h2>
          </header>

          <div class="final-gallery">
            <figure class="project-figure project-figure--large">
              <img
                src="../assets/projects/spotcli/spotcli-final-1.png"
                alt="spotCLI full session — search, save, player"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 07:</span>
                <span v-if="$i18n.locale === 'fr'">Session complète — recherche, sauvegarde, état du player</span>
                <span v-else>Full session — search, save, player state</span>
              </figcaption>
            </figure>

            <figure class="project-figure project-figure--large">
              <img
                src="../assets/projects/spotcli/spotcli-final-2.png"
                alt="spotCLI playlist management"
                class="project-figure__img"
                loading="lazy"
              />
              <figcaption>
                <span aria-hidden="true">Fig. 08:</span>
                <span v-if="$i18n.locale === 'fr'">Gestion de playlist — ajout, suppression, reorder</span>
                <span v-else>Playlist management — add, remove, reorder</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <!-- ── 07 · WHAT I LEARNED ──────────────────────────────────────── -->
      <section id="learning" class="spotcli-section" aria-labelledby="h-learning">
        <div class="spotcli-section__inner">
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
              Ce projet m'a confirmé que choisir un langage plus difficile que nécessaire est parfois la bonne décision. Écrire ce wrapper en C plutôt qu'en Python ou TypeScript a rendu chaque partie du code plus consciente : l'allocation, les codes de retour, les pointeurs nuls. Ces contraintes sont inconfortables — elles sont aussi là où on apprend le plus.
            </span>
            <span v-else>
              This project confirmed that choosing a harder language than necessary is sometimes the right call. Writing this wrapper in C rather than Python or TypeScript made every part of the code more deliberate: allocation, return codes, null pointers. Those constraints are uncomfortable — they are also where the most learning happens.
            </span>
          </blockquote>
        </div>
      </section>

      <!-- ── 08 · ARCHIVAL & IMPROVEMENTS ─────────────────────────────── -->
      <section id="archival" class="spotcli-section spotcli-section--tinted" aria-labelledby="h-archival">
        <div class="spotcli-section__inner">
          <header class="section-header">
            <span class="section-header__num" aria-hidden="true">08</span>
            <h2 class="section-header__title" id="h-archival">
              <span v-if="$i18n.locale === 'fr'">Archivage &amp; améliorations</span>
              <span v-else>Archival &amp; improvements</span>
            </h2>
          </header>

          <div class="two-col">
            <div class="text-block">
              <p v-if="$i18n.locale === 'fr'">
                Le développement s'est arrêté en 2025 pour des raisons politiques : les investissements de Daniel Ek dans l'armement via Helsing, les publicités ICE diffusées sur la plateforme, et le partenariat avec Partner Communications, une entreprise listée dans la base de données des Nations Unies pour son implication dans les colonies illégales.
              </p>
              <p v-else>
                Development stopped in 2025 for political reasons: Daniel Ek's weapons investments through Helsing, ICE recruitment ads run on the platform, and a partnership with Partner Communications, a company listed in the UN database for involvement in illegal settlements.
              </p>

              <p v-if="$i18n.locale === 'fr'">
                La décision d'archiver explicitement plutôt que d'abandonner silencieusement était délibérée. Le README explique les raisons en français et en anglais, avec des sources. Le code reste disponible sous licence MIT pour quiconque voudrait le forker vers une autre plateforme de streaming.
              </p>
              <p v-else>
                The choice to archive explicitly rather than silently abandon was deliberate. The README explains the reasons in both French and English, with sources. The code remains available under the MIT license for anyone who wants to fork it toward a different streaming platform.
              </p>
            </div>

            <div class="improvement-list-block">
              <h3 class="specs-title">
                <span v-if="$i18n.locale === 'fr'">Si le projet continuait</span>
                <span v-else>If the project continued</span>
              </h3>
              <ul class="improvement-list">
                <li v-for="item in improvementItems" :key="item.id">
                  <strong>{{ $i18n.locale === 'fr' ? item.titleFr : item.titleEn }}</strong>
                  <p>{{ $i18n.locale === 'fr' ? item.descFr : item.descEn }}</p>
                </li>
              </ul>
            </div>
          </div>

          <blockquote class="callout callout--info" style="margin-top: 40px;">
            <span class="callout__label">
              <span v-if="$i18n.locale === 'fr'">MIT License</span>
              <span v-else>MIT License</span>
            </span>
            <span v-if="$i18n.locale === 'fr'">
              Toute l'architecture — la couche HTTP, le serveur OAuth, le système de parseurs — est réutilisable pour n'importe quelle API REST en C. Si vous voulez construire un client CLI pour une autre plateforme, la structure est prête.
            </span>
            <span v-else>
              The entire architecture — the HTTP layer, the OAuth server, the parser system — is reusable for any REST API in C. If you want to build a CLI client for another platform, the structure is ready.
            </span>
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
const tools = ['C', 'libcurl', 'json-c', 'Make', 'OAuth 2.0', 'POSIX']

const archGroups = [
  {
    label: 'src/core/',
    files: [
      { name: 'auth.c', fr: 'OAuth 2.0 — échange de tokens, refresh', en: 'OAuth 2.0 — token exchange, refresh' },
      { name: 'callback_server.c', fr: 'Serveur TCP POSIX pour le redirect OAuth', en: 'POSIX TCP server for OAuth redirect' },
      { name: 'dotenv.c', fr: 'Chargement des variables d\'environnement', en: 'Environment variable loader' },
    ],
  },
  {
    label: 'src/spotify/core/',
    files: [
      { name: 'http.c', fr: 'Toutes les requêtes curl — GET, PUT, POST, DELETE', en: 'All curl requests — GET, PUT, POST, DELETE' },
      { name: 'parsers.c', fr: 'Désérialisation JSON vers structs C', en: 'JSON deserialization into C structs' },
      { name: 'auth.c', fr: 'Récupération de l\'user ID courant', en: 'Current user ID retrieval' },
    ],
  },
  {
    label: 'src/spotify/api/',
    files: [
      { name: 'tracks.c', fr: 'Recherche, sauvegarde, suppression de pistes', en: 'Track search, save, remove' },
      { name: 'artists.c', fr: 'Recherche d\'artistes, top tracks, albums', en: 'Artist search, top tracks, albums' },
      { name: 'albums.c', fr: 'Albums détaillés, bibliothèque', en: 'Detailed albums, library' },
      { name: 'playlist.c', fr: 'CRUD complet sur les playlists', en: 'Full CRUD on playlists' },
      { name: 'player.c', fr: 'Lecture, pause, skip, volume, devices', en: 'Play, pause, skip, volume, devices' },
      { name: 'advanced.c', fr: 'Profil utilisateur, historique', en: 'User profile, play history' },
    ],
  },
]

const authSteps = [
  {
    num: '01',
    titleFr: 'Génération de l\'URL',
    titleEn: 'URL generation',
    descFr: 'Construction de l\'URL Spotify avec client_id, redirect_uri et les scopes demandés.',
    descEn: 'Building the Spotify URL with client_id, redirect_uri, and requested scopes.',
  },
  {
    num: '02',
    titleFr: 'Affichage dans le terminal',
    titleEn: 'Display in the terminal',
    descFr: 'L\'URL est imprimée. L\'utilisateur l\'ouvre dans son navigateur.',
    descEn: 'The URL is printed. The user opens it in their browser.',
  },
  {
    num: '03',
    titleFr: 'Serveur de callback',
    titleEn: 'Callback server',
    descFr: 'Un serveur TCP POSIX écoute sur 127.0.0.1:8888. Une seule connexion acceptée.',
    descEn: 'A POSIX TCP server listens on 127.0.0.1:8888. One connection accepted.',
  },
  {
    num: '04',
    titleFr: 'Extraction du code',
    titleEn: 'Code extraction',
    descFr: 'Le code d\'autorisation est parsé depuis les query params de la requête GET.',
    descEn: 'The authorization code is parsed from the GET request query parameters.',
  },
  {
    num: '05',
    titleFr: 'Échange de token',
    titleEn: 'Token exchange',
    descFr: 'POST vers accounts.spotify.com/api/token. Réponse : access_token + refresh_token.',
    descEn: 'POST to accounts.spotify.com/api/token. Response: access_token + refresh_token.',
  },
  {
    num: '06',
    titleFr: 'Persistance locale',
    titleEn: 'Local persistence',
    descFr: 'Token sauvegardé dans ~/.config/spotCLI/token.json avec timestamp.',
    descEn: 'Token saved to ~/.config/spotCLI/token.json with acquisition timestamp.',
  },
]

const httpFunctions = [
  {
    name: 'spotify_api_get()',
    method: 'GET',
    fr: 'Retourne un objet json_object parsé',
    en: 'Returns a parsed json_object',
  },
  {
    name: 'spotify_api_put()',
    method: 'PUT',
    fr: 'Corps JSON, vérifie 200',
    en: 'JSON body, checks for 200',
  },
  {
    name: 'spotify_api_put_empty()',
    method: 'PUT',
    fr: 'Sans corps, vérifie 204',
    en: 'No body, checks for 204',
  },
  {
    name: 'spotify_api_put_json()',
    method: 'PUT',
    fr: 'Corps JSON, retourne la réponse JSON',
    en: 'JSON body, returns JSON response',
  },
  {
    name: 'spotify_api_post()',
    method: 'POST',
    fr: 'Corps optionnel, vérifie 204',
    en: 'Optional body, checks for 204',
  },
  {
    name: 'spotify_api_post_empty()',
    method: 'POST',
    fr: 'Sans corps, vérifie 204',
    en: 'No body, checks for 204',
  },
  {
    name: 'spotify_api_post_json()',
    method: 'POST',
    fr: 'Corps JSON, retourne la réponse JSON',
    en: 'JSON body, returns JSON response',
  },
  {
    name: 'spotify_api_delete_json()',
    method: 'DELETE',
    fr: 'Corps JSON, retourne la réponse JSON',
    en: 'JSON body, returns JSON response',
  },
]

const commandGroups = [
  {
    label: 'Library',
    commands: [
      'View saved tracks',
      'Remove track from library',
      'Check if track is saved',
      'View saved albums',
      'Save album',
      'Remove album',
      'Check if album is saved',
    ],
  },
  {
    label: 'Search',
    commands: [
      'Search tracks',
      'Search artists',
      'Search albums',
      'View artist\'s albums',
      'View artist\'s top tracks',
      'View album details',
    ],
  },
  {
    label: 'Playlists',
    commands: [
      'View your playlists',
      'View playlist details',
      'Create playlist',
      'Edit playlist details',
      'Add track to playlist',
      'Remove track from playlist',
      'Reorder playlist tracks',
      'Unfollow playlist',
    ],
  },
  {
    label: 'Player',
    commands: [
      'View player state',
      'View currently playing',
      'View recently played',
      'Play / Pause',
      'Next track',
      'Previous track',
      'Toggle shuffle',
      'Cycle repeat mode',
      'Set volume',
      'Seek to position',
      'View devices',
      'Transfer playback',
      'View queue',
      'Add to queue',
      'Add artist track to queue',
    ],
  },
]

const learningItems = [
  {
    domain: 'C Memory Management',
    fr: 'Gérer manuellement l\'allocation et la libération de chaque structure. Chaque chemin d\'erreur doit libérer ce qui a déjà été alloué. Les fuites sont silencieuses.',
    en: 'Manually managing allocation and freeing of every struct. Every error path must release what has already been allocated. Leaks are silent.',
  },
  {
    domain: 'POSIX Networking',
    fr: 'Écrire un serveur TCP minimal en C. socket(), bind(), listen(), accept() — la séquence complète sans couche d\'abstraction. Une bonne base pour comprendre HTTP en profondeur.',
    en: 'Writing a minimal TCP server in C. socket(), bind(), listen(), accept() — the full sequence with no abstraction. A good foundation for understanding HTTP at depth.',
  },
  {
    domain: 'OAuth 2.0',
    fr: 'Implémenter le flux Authorization Code de zéro. Comprendre pourquoi le serveur de callback existe, ce que contient l\'échange de token, et comment le refresh token fonctionne réellement.',
    en: 'Implementing the Authorization Code flow from scratch. Understanding why the callback server exists, what the token exchange contains, and how refresh tokens actually work.',
  },
  {
    domain: 'REST API Design',
    fr: 'Les APIs REST ne sont pas uniformes. Un même type d\'opération peut retourner 200, 201 ou 204 selon l\'endpoint. Lire la documentation ne suffit pas — il faut tester chaque cas.',
    en: 'REST APIs are not uniform. The same type of operation can return 200, 201, or 204 depending on the endpoint. Reading docs is not enough — every case needs testing.',
  },
]

const improvementItems = [
  {
    id: '1',
    titleFr: 'Interface ncurses',
    titleEn: 'ncurses interface',
    descFr: 'Remplacer le menu numéroté par une navigation au clavier avec ncurses. La structure de menu existe déjà dans menu.c — c\'est une étape logique.',
    descEn: 'Replace the numbered menu with keyboard navigation using ncurses. The menu structure already exists in menu.c — it is a logical next step.',
  },
  {
    id: '2',
    titleFr: 'Support multi-plateforme',
    titleEn: 'Multi-platform support',
    descFr: 'Le code POSIX ne compile pas sur Windows. Une couche d\'abstraction sur les sockets permettrait un portage vers Win32.',
    descEn: 'The POSIX code does not compile on Windows. An abstraction layer over sockets would enable a Win32 port.',
  },
  {
    id: '3',
    titleFr: 'Adaptation à une autre plateforme',
    titleEn: 'Adaptation to another platform',
    descFr: 'L\'architecture HTTP + OAuth + parsers est indépendante de Spotify. Tidal, Deezer ou Bandcamp auraient pu être des cibles alternatives.',
    descEn: 'The HTTP + OAuth + parsers architecture is platform-agnostic. Tidal, Deezer, or Bandcamp could be alternative targets.',
  },
]
</script>

<style scoped>
/* ── Page wrapper ── */
.spotcli-page {
  /* Inherits all design tokens from .portfolio in App.vue */
}

/* ── Hero ── */
.spotcli-hero {
  padding: 100px 40px 0;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.spotcli-hero__inner {
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

.spotcli-hero__grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px 60px;
  align-items: start;
  margin-bottom: 56px;
}

.spotcli-hero__eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 16px;
}

.spotcli-hero__title {
  font-family: var(--font-serif);
  font-size: clamp(4rem, 9vw, 7rem);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: var(--text);
  margin: 0 0 20px;
}

.spotcli-hero__subtitle {
  font-size: 17px;
  color: var(--text-2);
  line-height: 1.6;
  max-width: 480px;
  margin-bottom: 28px;
}

/* Archive notice */
.hero-archive-notice {
  border-left: 2px solid #b45309;
  background: #fef3e2;
  border-radius: 0 4px 4px 0;
  padding: 14px 18px;
  margin: 0;
  font-size: 13px;
  color: #7c3d0e;
  line-height: 1.65;
}

.hero-archive-notice__label {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #b45309;
  margin-bottom: 6px;
}

/* Meta panel */
.spotcli-hero__meta {
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

.status-badge--archived {
  background: #fef3e2;
  color: #7c3d0e;
}
.status-badge--archived::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #b45309;
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
.spotcli-hero__image-wrap {
  position: relative;
  margin: 0 -40px;
  width: calc(100% + 80px);
  overflow: hidden;
}

.spotcli-hero__image {
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  object-position: top;
  display: block;
  filter: grayscale(10%);
  transition: filter 0.4s;
}
.spotcli-hero__image:hover {
  filter: grayscale(0%);
}

.spotcli-hero__image-caption {
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
.spotcli-section {
  padding: 96px 40px;
}

.spotcli-section--tinted {
  background: var(--bg-tint);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.spotcli-section__inner {
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

.genesis-text code {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: var(--bg-inset);
  border: 1px solid var(--border);
  padding: 2px 6px;
  border-radius: 3px;
  color: var(--text-2);
}

/* Specs */
.genesis-specs {
  /* inherits from pluto */
}

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

/* ── Architecture tree ── */
.arch-tree {
  display: flex;
  flex-direction: column;
  gap: 1px;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  background: var(--border);
}

.arch-tree__group {
  background: var(--bg);
  padding: 20px 24px;
}

.arch-tree__group-label {
  display: block;
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--accent);
  margin-bottom: 14px;
}

.arch-tree__files {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.arch-tree__file {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 16px;
  align-items: baseline;
}

.arch-tree__filename {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text);
  font-weight: 500;
}

.arch-tree__filedesc {
  font-size: 13px;
  color: var(--text-3);
  line-height: 1.5;
}

/* ── Auth flow ── */
.auth-steps {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
  background: var(--border);
}

.auth-step {
  display: grid;
  grid-template-columns: 48px 1fr;
  gap: 0;
  background: var(--bg);
  align-items: stretch;
}

.auth-step__num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-tint);
  border-right: 1px solid var(--border);
  padding: 16px;
}

.auth-step__content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 20px;
}

.auth-step__title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
}

.auth-step__desc {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-3);
  line-height: 1.5;
}

/* ── HTTP grid ── */
.http-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}

.http-chip {
  background: var(--bg);
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  transition: background 0.2s;
}
.http-chip:hover { background: var(--bg-tint); }

.http-chip__method {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 2px 7px;
  border-radius: 2px;
  display: inline-block;
  align-self: flex-start;
}

.http-chip__method--get    { background: #e8f4eb; color: #2e7d52; }
.http-chip__method--put    { background: #eaf1fb; color: #2563a8; }
.http-chip__method--post   { background: #fef3e2; color: #b45309; }
.http-chip__method--delete { background: #fdf0ef; color: #b52a2a; }

.http-chip__name {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--text);
}

.http-chip__desc {
  font-size: 12px;
  color: var(--text-3);
  line-height: 1.5;
}

/* ── Commands grid ── */
.commands-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 6px;
  overflow: hidden;
}

.commands-group {
  background: var(--bg);
  padding: 20px 24px;
}

.commands-group__label {
  display: block;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.commands-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.commands-list li {
  font-size: 13px;
  color: var(--text-2);
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 8px;
}

.commands-list li::before {
  content: '';
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--border-mid);
  flex-shrink: 0;
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

.callout--info {
  border-left-color: #2563a8;
  background: #eaf1fb;
  border-radius: 0 4px 4px 0;
  color: #1a3a5c;
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
.callout--info .callout__label { color: #2563a8; }

.callout code {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: rgba(0,0,0,0.06);
  padding: 1px 5px;
  border-radius: 2px;
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

/* ── Improvement list ── */
.improvement-list-block {
  /* container */
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
  gap: 8px;
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
  .spotcli-hero__grid { grid-template-columns: 1fr; }
  .genesis-layout { grid-template-columns: 1fr; gap: 32px; }
  .two-col { grid-template-columns: 1fr; gap: 32px; }
  .image-pair { grid-template-columns: 1fr; }
  .final-gallery { grid-template-columns: 1fr; }
  .arch-tree__file { grid-template-columns: 1fr; gap: 4px; }
  .commands-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 680px) {
  .spotcli-hero { padding: 80px 20px 0; }
  .spotcli-section { padding: 64px 20px; }
  .back-footer { padding: 24px 20px 48px; }

  .spotcli-hero__image-wrap {
    margin: 0 -20px;
    width: calc(100% + 40px);
  }

  .spotcli-hero__title { font-size: clamp(3rem, 12vw, 5rem); }

  .http-grid { grid-template-columns: 1fr 1fr; }
  .learning-grid { grid-template-columns: 1fr; }
  .commands-grid { grid-template-columns: 1fr; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
