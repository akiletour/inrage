import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref, and a stateful value bound to the ref
 */
export default function useSticky<T extends HTMLElement>() {
  const stickyRef = useRef<T>(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    // Observe when ref enters or leaves sticky state
    function observe() {
      if (!stickyRef.current) return;
      const stickyActive =
        stickyRef.current.getBoundingClientRect().bottom <= 0;

      if (stickyActive && !sticky) setSticky(true);
      else if (!stickyActive && sticky) setSticky(false);
    }
    observe();

    // Bind events
    document.addEventListener('scroll', observe);
    window.addEventListener('resize', observe);
    window.addEventListener('orientationchange', observe);

    return () => {
      document.removeEventListener('scroll', observe);
      window.removeEventListener('resize', observe);
      window.removeEventListener('orientationchange', observe);
    };
  }, [sticky]);

  return [stickyRef, sticky] as const;
}
