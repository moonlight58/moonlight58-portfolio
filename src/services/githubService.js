/**
 * Service pour gérer les appels à l'API GitHub via Netlify Function avec cache
 */

const NETLIFY_FUNCTION_URL = '/.netlify/functions/github-api';
const CACHE_KEY = 'github_projects_cache';
const CACHE_TIMESTAMP_KEY = 'github_projects_cache_timestamp';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 heures en millisecondes

/**
 * Récupère tous les projets publics d'un utilisateur GitHub avec description
 * @param {boolean} forceRefresh - Force le rafraîchissement des données malgré le cache
 * @returns {Promise<Array>} - Array des projets publics avec description
 */
export async function getPublicProjectsWithDescription(forceRefresh = false) {
  try {
    // Vérifier si le cache est valide
    if (!forceRefresh && isCacheValid()) {
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        return JSON.parse(cachedData);
      }
    }

    // Récupérer les données via la fonction Netlify
    const projects = await fetchProjectsFromNetlify();
    
    // Sauvegarder en cache
    saveCacheWithTimestamp(projects);
    
    return projects;
  } catch (error) {
    console.error('Erreur lors de la récupération des projets GitHub:', error);
    
    // Retourner les données en cache même si elles sont expirées en cas d'erreur
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      console.warn('Utilisation du cache expiré en cas d\'erreur réseau');
      return JSON.parse(cachedData);
    }
    
    return [];
  }
}

/**
 * Récupère les projets via la fonction Netlify serverless
 * @returns {Promise<Array>}
 */
async function fetchProjectsFromNetlify() {
  const username = 'moonlight58'; // Change this if needed
  const response = await fetch(`${NETLIFY_FUNCTION_URL}?username=${username}`);
  
  if (!response.ok) {
    throw new Error(`Erreur function Netlify: ${response.status} ${response.statusText}`);
  }

  const repos = await response.json();

  // Filter public repos with description and transform to expected format
  return repos
    .filter(repo => repo.description && repo.description.trim().length > 0)
    .map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: repo.updated_at,
      topics: repo.topics || []
    }))
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
}

/**
 * Vérifie si le cache est valide (moins de 24h)
 * @returns {boolean}
 */
function isCacheValid() {
  const timestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
  
  if (!timestamp) {
    return false;
  }

  const cachedTime = parseInt(timestamp, 10);
  const currentTime = Date.now();
  
  return (currentTime - cachedTime) < CACHE_DURATION;
}

/**
 * Sauvegarde le cache avec un timestamp
 * @param {Array} data - Les données à mettre en cache
 */
function saveCacheWithTimestamp(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
  } catch (error) {
    console.warn('Impossible de sauvegarder le cache:', error);
  }
}

/**
 * Force le nettoyage du cache
 */
export function clearProjectsCache() {
  try {
    localStorage.removeItem(CACHE_KEY);
    localStorage.removeItem(CACHE_TIMESTAMP_KEY);
  } catch (error) {
    console.warn('Impossible de nettoyer le cache:', error);
  }
}
