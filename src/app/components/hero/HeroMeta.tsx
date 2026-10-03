import styles from './Hero.module.css';

interface HeroMetaProps {
  careerObjectiveLabel: string;
  careerObjectiveText: string;
  basedInLabel: string;
  basedInValue: string;
  focusLabel: string;
  focusValue: string;
}

/**
 * Right column on desktop — a thin "supporting information" rail.
 *
 * Typography is small and quiet on purpose: the centre (portrait + tags)
 * should be the dominant focal point.
 */
export function HeroMeta({
  careerObjectiveLabel,
  careerObjectiveText,
  basedInLabel,
  basedInValue,
  focusLabel,
  focusValue,
}: HeroMetaProps) {
  return (
    <aside className={styles.heroMeta} aria-label="Career summary">
      <div className={styles.heroMetaBlock}>
        <span className={styles.heroMetaLabel}>{careerObjectiveLabel}</span>
        <p className={styles.heroObjective}>{careerObjectiveText}</p>
      </div>

      <div className={styles.heroMetaBlock}>
        <span className={styles.heroMetaLabel}>{basedInLabel}</span>
        <span className={styles.heroMetaValue}>{basedInValue}</span>
      </div>

      <div className={styles.heroMetaBlock}>
        <span className={styles.heroMetaLabel}>{focusLabel}</span>
        <span className={styles.heroMetaValue}>{focusValue}</span>
      </div>
    </aside>
  );
}