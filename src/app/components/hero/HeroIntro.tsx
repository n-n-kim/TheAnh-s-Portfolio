import { MultilingualGreeting } from './MultilingualGreeting';
import { HeroActions } from './HeroActions';
import styles from './Hero.module.css';

interface HeroIntroProps {
  category: string;
  name: string;
  introParagraph1: string;
  introParagraph2: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref: string;
  secondaryHref: string;
}

/**
 * Left column on desktop — eyebrow, animated greeting, stacked editorial
 * name, short intro paragraphs, and CTAs.
 *
 * The CTAs are rendered here (not in a separate bottom row) so the entire
 * left side reads as a single cohesive vertical unit.
 */
export function HeroIntro({
  category,
  name,
  introParagraph1,
  introParagraph2,
  primaryLabel,
  secondaryLabel,
  primaryHref,
  secondaryHref,
}: HeroIntroProps) {
  // Split the name into two lines for an editorial stacked mark.
  const parts = name.trim().split(/\s+/);
  const mid = Math.ceil(parts.length / 2);
  const firstLine = parts.slice(0, mid).join(' ');
  const secondLine = parts.slice(mid).join(' ');

  return (
    <div className={styles.heroIntro}>
      <span className={styles.heroEyebrow}>{category}</span>

      <MultilingualGreeting suffix=", I'm" />

      <h1 className={styles.heroName}>
        <span className={styles.heroNameLine}>{firstLine}</span>
        <span className={styles.heroNameLine}>{secondLine}</span>
      </h1>

      <p className={styles.heroIntroText}>{introParagraph1}</p>
      <p className={styles.heroIntroText}>{introParagraph2}</p>

      <HeroActions
        primaryLabel={primaryLabel}
        secondaryLabel={secondaryLabel}
        primaryHref={primaryHref}
        secondaryHref={secondaryHref}
      />
    </div>
  );
}