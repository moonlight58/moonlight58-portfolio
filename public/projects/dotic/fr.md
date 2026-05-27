# DotIC

> Un convertisseur d'images qui transforme n'importe quelle photo en art pointilliste — un style inspiré des peintres comme Seurat.

---

##  C'est quoi ?

DotIC est une application de bureau que j'ai développée en Python, qui prend n'importe quelle image et la recrée en utilisant uniquement des points. Les zones sombres de la photo originale deviennent de grands points denses — les zones claires de petits points à peine visibles. Le résultat évoque le style de la peinture pointilliste.

L'application dispose d'une interface graphique complète, donc aucune connaissance technique n'est nécessaire pour l'utiliser.

---

##  À quoi ça sert ?

On charge une photo, on ajuste quelques curseurs, et DotIC génère la version pointillée. Les principaux réglages incluent :

- **Densité de la grille** — combien de points utiliser horizontalement et verticalement (d'un rendu grossier à très fin)
- **Plage de taille des points** — les tailles minimale et maximale que chaque point peut atteindre
- **Mode de couleur** — niveaux de gris, couleurs originales conservées depuis la photo, ou ton sépia
- **Résolution de sortie** — de 400×400 jusqu'à 1200×1200 pixels

Une fois le résultat satisfaisant, l'image peut être exportée en PNG ou JPEG.

---

## 󱕅 Points forts

- **Progression en temps réel** — une barre de progression suit la génération au fil de son avancement, le traitement d'une grille très fine pouvant prendre quelques secondes
- **Interface non bloquante** — la génération s'exécute dans un thread en arrière-plan pour que l'interface reste réactive pendant tout le traitement
- **Interface graphique soignée** — construite avec Tkinter, avec des curseurs, boutons radio, aperçu scrollable et barre de statut
- **Algorithme basé sur la luminance** — la taille des points est calculée à partir de la luminance de chaque pixel, ce qui préserve fidèlement les ombres et la profondeur de l'image originale

---

## 󱉟 Ce que j'ai appris

Ce projet était une exploration du **traitement d'image et de l'art génératif**. Le principal défi était de traduire le concept abstrait du pointillisme en algorithme concret — trouver comment convertir la luminosité d'un pixel en taille de point d'une façon visuellement agréable.

Il m'a aussi poussé à réfléchir à la **réactivité de l'interface** : exécuter un calcul lourd sur le thread principal bloquerait l'interface, j'ai donc dû apprendre à déléguer le travail à un thread séparé tout en gardant la barre de progression et les mises à jour de statut synchronisées.

---

## 󰓌 Stack

Développé en **Python**, avec OpenCV pour le chargement et le traitement d'images, Pillow pour le dessin et l'export, et Tkinter pour l'interface graphique.

---

## 󱖫 Statut

Les fonctionnalités principales sont complètes. Les prochaines évolutions possibles incluent un sélecteur de couleur de fond, le support de grilles non carrées, et un mode de traitement par lot pour plusieurs images.


## 󰊤 Github
> [Découvrez le code sur GitHub](https://github.com/moonlight58/dotic)