import { useState, useEffect } from 'react';

/**
 * Resolves the primary route pathname ('/', '/direito-previdenciario', '/direito-publico')
 * based on current browser location, handling direct URLs, SPA rewrites, and query fallbacks.
 */
export function resolveCurrentRoute(): string {
  if (typeof window === 'undefined') return '/';

  const pathname = window.location.pathname.replace(/\/+$/, '').toLowerCase();
  if (pathname === '/direito-previdenciario' || pathname.endsWith('/direito-previdenciario')) {
    return '/direito-previdenciario';
  }
  if (pathname === '/direito-publico' || pathname.endsWith('/direito-publico')) {
    return '/direito-publico';
  }

  // Check search query fallback (e.g. ?page=direito-previdenciario or ?route=direito-publico)
  const search = window.location.search.toLowerCase();
  if (search.includes('direito-previdenciario') || search.includes('previdenciario')) {
    return '/direito-previdenciario';
  }
  if (search.includes('direito-publico') || search.includes('servidor')) {
    return '/direito-publico';
  }

  // Check hash fallback only if explicitly representing a route, NOT a section
  const hash = window.location.hash.toLowerCase();
  if (hash === '#/direito-previdenciario' || hash === '#direito-previdenciario') {
    return '/direito-previdenciario';
  }
  if (hash === '#/direito-publico' || hash === '#direito-publico') {
    return '/direito-publico';
  }

  return '/';
}

/**
 * Section aliases to ensure bidirectional compatibility between content IDs and menu links.
 */
export const SECTION_ALIASES: Record<string, string[]> = {
  inicio: ['inicio', 'main-header'],
  sobre: ['sobre'],
  areas: ['areas', 'especialidades'],
  especialidades: ['especialidades', 'areas'],
  contato: ['contato', 'apresente-seu-caso'],
  'apresente-seu-caso': ['apresente-seu-caso', 'contato'],
  duvidas: ['duvidas', 'duvidas-frequentes', 'faq'],
  'duvidas-frequentes': ['duvidas-frequentes', 'duvidas', 'faq'],
  faq: ['faq', 'duvidas', 'duvidas-frequentes'],
  'como-podemos-auxiliar': ['como-podemos-auxiliar'],
  'como-funciona': ['como-funciona'],
  profissional: ['profissional'],
  'areas-de-atuacao': ['areas-de-atuacao'],
};

/**
 * Scrolls smoothly to an element by ID, accounting for the fixed header offset.
 */
export function scrollToElementById(id: string): boolean {
  if (typeof document === 'undefined') return false;

  const cleanId = id.replace(/^#/, '').toLowerCase();
  const candidateIds = SECTION_ALIASES[cleanId] || [cleanId];

  for (const targetId of candidateIds) {
    const el =
      document.getElementById(targetId) ||
      document.querySelector(`[data-section="${targetId}"]`) ||
      document.querySelector(`a[name="${targetId}"]`);

    if (el) {
      const headerOffset = 82; // Height of fixed header with spacing
      const rect = el.getBoundingClientRect();
      const targetY = rect.top + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, targetY),
        behavior: 'smooth',
      });
      return true;
    }
  }

  return false;
}

/**
 * Retries scrolling to element with exponential-like polling until the component mounts.
 */
export function scrollToElementByIdWithRetry(id: string, maxAttempts = 15, intervalMs = 60) {
  let attempts = 0;

  const tryScroll = () => {
    if (scrollToElementById(id)) return;
    attempts++;
    if (attempts < maxAttempts) {
      setTimeout(tryScroll, intervalMs);
    }
  };

  requestAnimationFrame(tryScroll);
}

// Global router store to synchronize all instances of useRouter across components
let globalCurrentRoute: string = resolveCurrentRoute();
const routeListeners = new Set<(route: string) => void>();

function updateGlobalRoute(newRoute: string) {
  if (globalCurrentRoute !== newRoute) {
    globalCurrentRoute = newRoute;
    routeListeners.forEach((listener) => listener(newRoute));
  }
}

// Register global popstate and hashchange listeners once
if (typeof window !== 'undefined') {
  const handlePopState = () => {
    const newRoute = resolveCurrentRoute();
    updateGlobalRoute(newRoute);

    const hash = window.location.hash.replace(/^#/, '');
    if (hash && !hash.includes('direito-previdenciario') && !hash.includes('direito-publico')) {
      scrollToElementByIdWithRetry(hash);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  window.addEventListener('popstate', handlePopState);
  window.addEventListener('hashchange', handlePopState);

  // Handle direct access with hash on initial window load
  const initialHash = window.location.hash.replace(/^#/, '');
  if (initialHash && !initialHash.includes('direito-previdenciario') && !initialHash.includes('direito-publico')) {
    setTimeout(() => scrollToElementByIdWithRetry(initialHash), 180);
  }
}

/**
 * Central navigation function
 */
export function navigate(to: string) {
  if (!to) return;

  // External or scheme links
  if (
    to.startsWith('http://') ||
    to.startsWith('https://') ||
    to.startsWith('mailto:') ||
    to.startsWith('tel:')
  ) {
    window.location.href = to;
    return;
  }

  // Home section anchors (e.g. '#sobre', '/#sobre', '#especialidades', etc.)
  if (to.startsWith('#') || to.startsWith('/#')) {
    const rawSection = to.replace(/^\/?#/, '');
    const isCurrentlyOnHome = globalCurrentRoute === '/';

    if (isCurrentlyOnHome) {
      window.history.pushState({}, '', `/#${rawSection}`);
      scrollToElementByIdWithRetry(rawSection);
    } else {
      // User is on a landing page: switch route to Home, update URL, then scroll to section
      window.history.pushState({}, '', `/#${rawSection}`);
      updateGlobalRoute('/');
      scrollToElementByIdWithRetry(rawSection);
    }
    return;
  }

  // Combined path and hash (e.g. '/#sobre' or '/direito-previdenciario#como-funciona')
  if (to.includes('#')) {
    const [pathPart, hashPart] = to.split('#');
    const normalizedPath =
      pathPart === '' || pathPart === '/'
        ? '/'
        : pathPart.includes('previdenciario')
        ? '/direito-previdenciario'
        : pathPart.includes('publico')
        ? '/direito-publico'
        : '/';

    if (normalizedPath === '/') {
      const isCurrentlyOnHome = globalCurrentRoute === '/';
      window.history.pushState({}, '', `/#${hashPart}`);
      if (!isCurrentlyOnHome) {
        updateGlobalRoute('/');
      }
      scrollToElementByIdWithRetry(hashPart);
      return;
    }

    // Navigating to landing page section
    window.history.pushState({}, '', `${normalizedPath}#${hashPart}`);
    if (globalCurrentRoute !== normalizedPath) {
      updateGlobalRoute(normalizedPath);
    }
    scrollToElementByIdWithRetry(hashPart);
    return;
  }

  // Route without hash (e.g. '/', '/direito-previdenciario', '/direito-publico')
  const normalizedRoute =
    to === '/'
      ? '/'
      : to.includes('previdenciario')
      ? '/direito-previdenciario'
      : to.includes('publico') || to.includes('servidor')
      ? '/direito-publico'
      : '/';

  if (globalCurrentRoute !== normalizedRoute) {
    window.history.pushState({}, '', normalizedRoute);
    updateGlobalRoute(normalizedRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Already on the same route: smooth scroll to top
    window.history.pushState({}, '', normalizedRoute);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/**
 * Custom React hook for subscribing to route updates and triggering navigation
 */
export function useRouter() {
  const [currentPath, setCurrentPath] = useState<string>(() => globalCurrentRoute);

  useEffect(() => {
    // Sync with global route in case it changed prior to mount
    setCurrentPath(globalCurrentRoute);

    const handleRouteUpdate = (route: string) => {
      setCurrentPath(route);
    };

    routeListeners.add(handleRouteUpdate);
    return () => {
      routeListeners.delete(handleRouteUpdate);
    };
  }, []);

  return { currentPath, navigate };
}
