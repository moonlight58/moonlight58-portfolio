// Ordre de lecture suggéré à travers les pages projets & stages.
// `key` doit être unique et correspondre à ce que chaque page passe à getPrevNext().
export const projectOrder = [
  { key: 'euphron', nameFr: 'Euphron', nameEn: 'Euphron', link: '/internship/euphron' },
  { key: 'ani', nameFr: 'Innov Crous (ANI)', nameEn: 'Innov Crous (ANI)', link: '/internship/ani' },
  { key: 'pluto', nameFr: 'Pluto', nameEn: 'Pluto', link: '/pluto' },
  { key: 'sagittarius', nameFr: 'Sagittarius', nameEn: 'Sagittarius', link: '/sagittarius' },
  { key: 'spotcli', nameFr: 'spotCLI', nameEn: 'spotCLI', link: '/spotcli' },
]

/**
 * Retourne les entrées précédente et suivante autour de `key`, en bouclant
 * (le dernier projet pointe vers le premier, et inversement).
 * @param {string} key
 * @returns {{ prev: object|null, next: object|null }}
 */
export function getPrevNext(key) {
  const i = projectOrder.findIndex((p) => p.key === key)
  if (i === -1) return { prev: null, next: null }

  const prev = projectOrder[(i - 1 + projectOrder.length) % projectOrder.length]
  const next = projectOrder[(i + 1) % projectOrder.length]
  return { prev, next }
}
