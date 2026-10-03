import { ArrowRight, Mail } from 'lucide-react';
import styles from './Hero.module.css';

interface HeroActionsProps {
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref: string;
  secondaryHref: string;
}

/**
 * Two clean CTA buttons anchored to internal sections.
 * Primary: white background, black text, subtle hover lift.
 * Secondary: transparent with thin border, white text.
 */
export function HeroActions({
  primaryLabel,
  secondaryLabel,
  primaryHref,
  secondaryHref,
}: HeroActionsProps) {
  return (
    <div className={styles.heroActions}>
      <a
        href={primaryHref}
        className={`${styles.heroButton} ${styles['heroButton--primary']}`}
        aria-label={primaryLabel}
      >
        <span>{primaryLabel}</span>
        <span className={styles.heroButtonIcon} aria-hidden="true">
          <ArrowRight className="w-4 h-4" strokeWidth={1.8} />
        </span>
      </a>

      <a
        href={secondaryHref}
        className={`${styles.heroButton} ${styles['heroButton--secondary']}`}
        aria-label={secondaryLabel}
      >
        <Mail className="w-4 h-4" aria-hidden="true" strokeWidth={1.6} />
        <span>{secondaryLabel}</span>
      </a>
    </div>
  );
}