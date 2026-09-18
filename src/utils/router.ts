import { useState, useEffect } from 'react';

export function resolveCurrentRoute(): string {
  if (typeof window === 'undefined') return '/';

  const pathname = window.location.pathname.replace(/\/+$/, '').toLowerCase();
  if (pathname.includes('previdenciario')) return '/direito-previdenciario';
  if (pathname.includes('publico') || pathname.includes('servidor')) return '/direito-publico';

  const hash = window.location.hash.toLowerCase();
  if (hash.includes('previdenciario')) return '/direito-previdenciario';
  if (hash.includes('publico') || hash.includes('servidor')) return '/direito-publico';

  const search = window.location.search.toLowerCase();
  if (search.includes('previdenciario')) return '/direito-previdenciario';
  if (search.includes('publico') || search.includes('servidor')) return '/direito-publico';

  return '/';
}

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(() => resolveCurrentRoute());

  useEffect(() => {
    const handleNavigationChange = () => {
      setCurrentPath(resolveCurrentRoute());
    };

    window.addEventListener('popstate', handleNavigationChange);
    window.addEventListener('hashchange', handleNavigationChange);

    return () => {
      window.removeEventListener('popstate', handleNavigationChange);
      window.removeEventListener('hashchange', handleNavigationChange);
    };
  }, []);

  const navigate = (to: string) => {
    if (to.startsWith('http://') || to.startsWith('https://')) {
      window.location.href = to;
      return;
    }

    if (to.startsWith('#') && !to.includes('previdenciario') && !to.includes('publico')) {
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/' + to);
        setCurrentPath('/');
        setTimeout(() => {
          const el = document.querySelector(to);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.querySelector(to);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const [path, hash] = to.split('#');

    window.history.pushState({}, '', to);
    setCurrentPath(resolveCurrentRoute());

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { currentPath, navigate };
}
