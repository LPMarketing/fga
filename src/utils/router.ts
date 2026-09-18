import { useState, useEffect } from 'react';

export function normalizePath(path: string): string {
  // Remove trailing slashes (except root) and lowercase
  if (!path || path === '/') return '/';
  const clean = path.replace(/\/+$/, '');
  return clean || '/';
}

export function useRouter() {
  const [currentPath, setCurrentPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (to: string) => {
    if (to.startsWith('http://') || to.startsWith('https://')) {
      window.location.href = to;
      return;
    }

    if (to.startsWith('#')) {
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
    const normalized = normalizePath(path);

    if (normalized !== currentPath) {
      window.history.pushState({}, '', to);
      setCurrentPath(normalized);
      if (hash) {
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return { currentPath, navigate };
}
