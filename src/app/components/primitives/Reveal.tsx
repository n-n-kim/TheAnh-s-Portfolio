import { useEffect, useRef, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li' | 'h2' | 'p' | 'ul' | 'header';
}

/**
 * Editorial entry animation — opacity + 20px Y, 480ms ease-out.
 * Uses IntersectionObserver so it fires once when entering the viewport.
 * Honors prefers-reduced-motion (globals.css disables the transition).
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            window.setTimeout(() => {
              target.classList.add('isVisible');
            }, delay);
            observer.unobserve(target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  // Build a ref callback that supports any tag name.
  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  return (
    // @ts-expect-error — dynamic tag
    <Tag ref={setRef} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}