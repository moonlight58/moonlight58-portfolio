# SpotCLI

> Un client Spotify qui vit entièrement dans votre terminal — sans navigateur, sans application, juste une ligne de commande.

---

##  C'est quoi ?

SpotCLI est une application en ligne de commande que j'ai développée en C, qui permet de contrôler Spotify entièrement depuis un terminal. Elle se connecte à l'API Spotify via une authentification OAuth2 et offre un contrôle complet sur sa musique sans jamais ouvrir l'application Spotify.

C'était un défi assumé : construire quelque chose de complet, dans un langage bas niveau, en communiquant directement avec une API du monde réel.

---

##  À quoi ça sert ?

SpotCLI propose deux façons d'interagir avec lui. Il est possible d'utiliser des commandes rapides directement depuis le terminal — rechercher un morceau ou vérifier ce qui est en train de jouer, par exemple — ou de basculer vers un menu interactif qui guide à travers toutes les fonctionnalités disponibles.

Les fonctionnalités principales incluent :

- **Recherche musicale** — rechercher des morceaux, artistes ou albums et les sauvegarder directement dans sa bibliothèque
- **Contrôle de lecture** — jouer, mettre en pause, passer, chercher, ajuster le volume, activer le mode aléatoire et la répétition
- **Gestion de la bibliothèque** — parcourir ses morceaux et albums sauvegardés, les ajouter ou les supprimer
- **Gestion des playlists** — créer, modifier et supprimer des playlists, ajouter ou retirer des morceaux
- **Contrôle de la file d'attente** — visualiser la file de lecture et y ajouter des morceaux
- **Support multi-appareils** — voir tous les appareils Spotify actifs et transférer la lecture de l'un à l'autre

---

## 󱕅 Points forts

- **Écrit en C** — le projet entier est construit sans framework de haut niveau, ce qui a nécessité une gestion manuelle de la mémoire et des requêtes HTTP
- **Flux OAuth2 complet** — l'authentification fonctionne en ouvrant une URL dans le navigateur, puis SpotCLI démarre un serveur HTTP local pour intercepter le callback et échanger automatiquement le code contre un token
- **Couverture large de l'API Spotify** — le projet encapsule une grande partie de la Spotify Web API dans une bibliothèque C propre et organisée
- **Persistance du token** — les identifiants sont stockés localement et renouvelés automatiquement à expiration, on ne se connecte donc qu'une seule fois

---

## 󱉟 Ce que j'ai appris

Ce projet m'a obligé à réfléchir sérieusement à **l'architecture logicielle en C** — organiser une grande base de code en modules logiques (authentification, HTTP, wrappers API, interface) sans les filets de sécurité que les langages de plus haut niveau offrent.

Travailler directement avec les requêtes HTTP, le parsing JSON et OAuth2 m'a également donné une compréhension bien plus profonde du fonctionnement réel des APIs, au-delà du simple appel de fonctions de bibliothèque.

---

## 󰓌 Stack

Entièrement développé en **C**, avec libcurl pour les requêtes HTTP, json-c pour le parsing JSON, et ncurses pour l'interface terminal.

---

## 󱖫 Statut

Les fonctionnalités principales sont complètes et fonctionnelles. Des types de recherche supplémentaires (playlists, livres audio) et une interface TUI plus riche sont prévus pour la prochaine phase.

## 󰐎 Démo

SpotCLI en action est montré dans les captures d'écran ci-dessous. La première image montre la fonctionnalité de recherche, tandis que la seconde affiche l'interface du lecteur avec les informations sur la piste actuelle et les contrôles de lecture.
![SpotCLI in action](https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/projects/personal/preview/spotcli-1.png)
![SpotCLI Player](https://raw.githubusercontent.com/moonlight58/extra/refs/heads/main/projects/personal/preview/spotcli-2.png)

---

## 󰊤 Github
> [Découvrez le code sur GitHub](https://github.com/moonlight58/spotcli)