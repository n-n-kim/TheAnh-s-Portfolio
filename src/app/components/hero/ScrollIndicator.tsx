import styles from './Hero.module.css';

/**
 * Subtle editorial scroll indicator at the bottom of the hero.
 */
export function ScrollIndicator({ label }: { label: string }) {
  return (
    <div className={styles.scrollIndicator} aria-hidden="true">
      <span>{label}</span>
      <div className={styles.scrollIndicatorLine} />
    </div>
  );
}