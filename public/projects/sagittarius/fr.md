# Sagittarius

> Un assistant IA personnel qui fonctionne entièrement sur votre propre machine — sans abonnement, sans données envoyées dans le cloud.

---

##  C'est quoi ?

Sagittarius est une application web que j'ai conçue et développée de zéro dans le cadre d'un projet personnel. L'idée est venue d'une frustration simple : la plupart des assistants IA nécessitent un abonnement payant et envoient vos conversations sur des serveurs externes.

Sagittarius règle ça en faisant tourner tout **localement** sur votre ordinateur. Vous possédez vos données, vous choisissez votre modèle IA, et rien ne quitte jamais votre machine.

Une preview est disponible sur [sagittarius.grothlin.fr](https://sagittarius.grothlin.fr) — les fonctionnalités IA nécessitent une installation locale pour fonctionner, mais l'interface est librement consultable.

---

##  À quoi ça sert ?

L'application est organisée autour d'**espaces de travail** — des environnements dédiés, chacun adapté à une tâche précise :

- **Code** — un assistant pour écrire, expliquer ou déboguer du code
- **Mail** — un assistant de rédaction pour écrire des e-mails professionnels
- **Chat** — une interface de conversation généraliste

Chaque espace de travail conserve son propre historique de conversation, ce qui permet de passer d'un contexte à l'autre sans perdre ses échanges précédents.

---

## 󱕅 Points forts

- **Vie privée totale** — tout le traitement IA se fait sur votre machine via [Ollama](https://ollama.com), un moteur de modèles open-source
- **Flexibilité des modèles** — compatible avec n'importe quel modèle IA (Mistral, LLaMA, Gemma, etc.), changeable à tout moment
- **Interface soignée** — thème sombre personnalisé avec une barre latérale, une zone de saisie responsive et des transitions fluides
- **Support Markdown** — les réponses de l'IA sont affichées avec une mise en forme correcte et de la coloration syntaxique pour le code

---

## 󱉟 Ce que j'ai appris

Ce projet m'a poussé à travailler avec le streaming de données en temps réel (la réponse de l'IA s'affiche mot par mot, comme si elle tapait), la gestion d'état entre plusieurs sessions de chat, et la construction d'une interface qui se sent aboutie sans s'appuyer sur une librairie de composants.

Il m'a aussi amené à réfléchir sérieusement au **design produit** — comment présenter une fonctionnalité techniquement complexe de façon simple et accessible pour l'utilisateur final.

---

## 󰓌 Stack

Développé avec **Vue 3**, stylisé en CSS pur, propulsé par **Ollama** côté backend.

---

## 󱖫 Statut

En développement actif — l'espace de travail Calendrier et le support des pièces jointes sont prévus pour la suite.

## 󰐎 Démo 

En ligne disponible sur [sagittarius.grothlin.fr](https://sagittarius.grothlin.fr) (fonctionnalités IA désactivées, mais l'interface est consultable).

![Démo de l'interface de sagittarius](https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/projects/personal/preview/sagittarius-preview-1.GIF)

---

## 󰊤 Github
> [Découvrez le code sur GitHub](https://github.com/moonlight58/sagittarius)