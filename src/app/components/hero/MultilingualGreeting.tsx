import { useEffect, useState } from 'react';
import styles from './Hero.module.css';
import { multilingualGreetings } from './heroData';

interface MultilingualGreetingProps {
  /** Static suffix that follows the animated greeting, e.g. ", I'm" */
  suffix?: string;
}

/**
 * Animated multilingual greeting — Typewriter style.
 *
 * Renders:    [typed word], I'm
 *                ^^^^^^^^   ← characters type in one by one
 *
 * Implementation notes:
 *  - The animated word has a NATURAL width (no fixed min-width). The
 *    surrounding layout reflows to match whichever word is currently
 *    being shown, so the suffix ", I'm" sits immediately next to the
 *    last typed character regardless of the word length.
 *  - A blinking caret appears at the end of the typed text.
 *  - The whole word stays visible long enough to read, then erases
 *    (or just blinks out) before the next language appears.
 *  - Honors prefers-reduced-motion (skips typing animation, shows full word).
 */
export function MultilingualGreeting({ suffix = ", I'm" }: MultilingualGreetingProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedLength, setTypedLength] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'holding' | 'erasing'>('typing');
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mql.matches);
    const onChange = () => setReducedMotion(mql.matches);
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, []);

  const current = multilingualGreetings[wordIndex];

  // Reduced motion: just hold the full word.
  useEffect(() => {
    if (!reducedMotion) return;
    setTypedLength(current.length);
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % multilingualGreetings.length);
    }, 2600);
    return () => clearInterval(id);
  }, [reducedMotion, current.length]);

  // Typewriter animation cycle.
  useEffect(() => {
    if (reducedMotion) return;

    const typingSpeed = 95; // ms per character
    const holdDuration = Math.max(1400, current.length * 200); // hold proportional to length
    const erasingSpeed = 45; // ms per character on erase
    const betweenDelay = 350;

    let timer: number;

    if (phase === 'typing') {
      if (typedLength < current.length) {
        timer = window.setTimeout(() => {
          setTypedLength((n) => n + 1);
        }, typingSpeed);
      } else {
        timer = window.setTimeout(() => setPhase('holding'), 100);
      }
    } else if (phase === 'holding') {
      timer = window.setTimeout(() => setPhase('erasing'), holdDuration);
    } else if (phase === 'erasing') {
      if (typedLength > 0) {
        timer = window.setTimeout(() => {
          setTypedLength((n) => n - 1);
        }, erasingSpeed);
      } else {
        timer = window.setTimeout(() => {
          setWordIndex((i) => (i + 1) % multilingualGreetings.length);
          setTypedLength(0);
          setPhase('typing');
        }, betweenDelay);
      }
    }

    return () => window.clearTimeout(timer);
  }, [phase, typedLength, wordIndex, reducedMotion, current.length]);

  const displayed = current.slice(0, typedLength);
  const showCaret = phase === 'typing' || phase === 'holding';

  return (
    <p className={styles.multilingual} aria-label={`${current}${suffix}`}>
      <span className={styles.multilingualWordWrapper} aria-live="polite">
        <span className={styles.multilingualWord}>{displayed}</span>
        <span
          className={`${styles.multilingualCaret} ${showCaret ? styles.multilingualCaretOn : ''}`}
          aria-hidden="true"
        />
      </span>
      <span className={styles.multilingualSuffix}>{suffix}</span>
    </p>
  );
}