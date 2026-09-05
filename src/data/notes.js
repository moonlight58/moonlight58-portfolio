// Notes courtes façon "Today I Learned". Ajoute une entrée ici pour publier
// une nouvelle note — aucune autre modification n'est nécessaire, la liste
// et le détail se génèrent automatiquement à partir de ce tableau.
//
// `content` est une liste de paragraphes en texte brut (pas de Markdown)
// pour rester cohérent avec le reste du site et éviter une dépendance
// supplémentaire.

export const notes = [
  {
    slug: 'vue-i18n-namespaces',
    date: '2026-02-10',
    tags: ['Vue', 'i18n'],
    title: {
      fr: 'Charger les traductions par namespace avec import.meta.glob',
      en: 'Loading translations by namespace with import.meta.glob',
    },
    excerpt: {
      fr: "Comment j'ai structuré les fichiers de traduction de ce portfolio pour éviter un fichier JSON monolithique par langue.",
      en: 'How I structured this portfolio\'s translation files to avoid one giant JSON file per language.',
    },
    content: {
      fr: [
        "Au début, chaque langue avait un seul fichier JSON. Au bout de quelques pages, il devenait difficile de retrouver une clé précise dans un fichier de plusieurs centaines de lignes.",
        "La solution : un fichier par domaine (nav, footer, home, projects...) sous src/i18n/locales/<locale>/<namespace>.json, chargés automatiquement avec import.meta.glob en mode eager, puis fusionnés sous leur clé de namespace.",
        "Le gain principal n'est pas technique mais organisationnel : localiser un texte à corriger devient une recherche de fichier, plus une recherche dans un fichier.",
      ],
      en: [
        "At first, each language had a single JSON file. After a few pages, finding one specific key inside a file of several hundred lines became painful.",
        "The fix: one file per domain (nav, footer, home, projects...) under src/i18n/locales/<locale>/<namespace>.json, eagerly loaded via import.meta.glob and merged back under their namespace key.",
        "The real win isn't technical, it's organisational: finding a string to fix becomes a file search, not a search inside a file.",
      ],
    },
  },
  {
    slug: 'netlify-function-per-user-cache',
    date: '2026-01-22',
    tags: ['Netlify', 'GitHub API'],
    title: {
      fr: "Un cache en mémoire par utilisateur dans une Netlify Function",
      en: 'A per-user in-memory cache in a Netlify Function',
    },
    excerpt: {
      fr: "Pourquoi j'ai mis un cache côté serverless en plus du cache localStorage, et ses limites.",
      en: 'Why I added a serverless-side cache on top of the localStorage cache, and its limits.',
    },
    content: {
      fr: [
        "La page /projects appelle l'API GitHub via une Netlify Function pour ne jamais exposer le token dans le navigateur. Le token vit uniquement côté serveur, dans une variable d'environnement.",
        "Pour éviter de taper l'API GitHub à chaque visite, la fonction garde un cache mémoire par nom d'utilisateur avec une durée de vie courte (1 minute), en plus du cache localStorage côté client (24 heures).",
        "La limite honnête : sur une plateforme serverless, une instance peut être recréée à tout moment (cold start), donc ce cache mémoire n'est pas garanti de survivre entre deux appels. Il aide surtout à absorber les rafales de requêtes rapprochées, pas à remplacer un vrai cache partagé.",
      ],
      en: [
        "The /projects page calls the GitHub API through a Netlify Function so the token never reaches the browser. It lives only server-side, as an environment variable.",
        "To avoid hitting the GitHub API on every visit, the function keeps a short-lived (1 minute) in-memory cache per username, on top of the client-side localStorage cache (24 hours).",
        "The honest limitation: on a serverless platform, an instance can be recycled at any time (cold start), so this in-memory cache isn't guaranteed to survive between calls. It mostly absorbs bursts of close requests, it doesn't replace a real shared cache.",
      ],
    },
  },
  {
    slug: 'petg-vs-pla-nozzle-temp',
    date: '2025-12-03',
    tags: ['3D Printing', 'Hardware'],
    title: {
      fr: 'PETG vs PLA : ce que ça change vraiment à l\'impression',
      en: 'PETG vs PLA: what actually changes when printing',
    },
    excerpt: {
      fr: "Notes prises pendant les 4-5 essais d'impression du chassis du clavier Pluto.",
      en: 'Notes taken during the 4-5 print attempts for the Pluto keyboard case.',
    },
    content: {
      fr: [
        "Le PLA pardonne beaucoup : plateau froid toléré, adhérence facile, peu de warping. Le PETG est plus exigeant sur trois points : température de buse plus haute, plateau chauffé nécessaire, et une tendance à faire des fils (stringing) si la rétractation n'est pas réglée.",
        "Ce qui a le plus changé le résultat : baisser la vitesse d'impression sur les premières couches, et augmenter légèrement la rétractation par rapport aux réglages par défaut du slicer.",
        "Le compromis en valait la peine pour ce projet : le nice!nano chauffe sous charge, et le PLA se déforme dès qu'il dépasse ~60°C. Le PETG tient la charge sans se déformer.",
      ],
      en: [
        "PLA is forgiving: cold bed tolerated, easy adhesion, little warping. PETG is stricter on three points: higher nozzle temperature, a heated bed is required, and a tendency to string if retraction isn't tuned.",
        "What changed the result the most: slowing down the first layers, and slightly increasing retraction compared to the slicer's default profile.",
        "The trade-off was worth it for this project: the nice!nano heats up under load, and PLA deforms past roughly 60°C. PETG holds up without warping.",
      ],
    },
  },
]

export function getNoteBySlug(slug) {
  return notes.find((n) => n.slug === slug) || null
}
