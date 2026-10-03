import { useLanguage } from '../contexts/LanguageContext';
import { HeroIntro } from './hero/HeroIntro';
import { Portrait } from './hero/Portrait';
import { FloatingSkills } from './hero/FloatingSkills';
import { HeroMeta } from './hero/HeroMeta';
import { ScrollIndicator } from './hero/ScrollIndicator';
import styles from './hero/Hero.module.css';

/**
 * Editorial hero section.
 *
 * The composition is treated as ONE unit, not a 3-column grid:
 *
 *   ┌─ INTERNATIONAL BUSINESS ─┐
 *   │  Hello, I'm             │
 *   │  NGUYỄN                 │    (quiet supporting rail)
 *   │  THẾ ANH                │    ┌─────────────────┐
 *   │  intro...               │    │  PORTRAIT       │
 *   │  intro...               │    │  + tags orbit   │
 *   │  [CTA] [CTA]            │    └─────────────────┘
 *   └─────────────────────────┘
 *
 * On mobile this collapses to a single linear flow with the portrait
 * fully unobstructed and tags wrapping naturally below.
 */
export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero} aria-label="Introduction">
      {/* Decorative editorial rules */}
      <span className={`${styles.heroRule} ${styles['heroRule--top']}`} aria-hidden="true" />
      <span className={`${styles.heroRule} ${styles['heroRule--bottom']}`} aria-hidden="true" />

      {/* Giant low-opacity BUSINESS wordmark — partly hidden by the portrait */}
      <div className={styles.heroWordmark} aria-hidden="true">
        <span className={styles.heroWordmarkText}>BUSINESS</span>
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          <HeroIntro
            category={t('hero.title')}
            name={t('hero.name')}
            introParagraph1={t('hero.introShort')}
            introParagraph2={t('hero.introTail')}
            primaryLabel={t('hero.cta.primary')}
            secondaryLabel={t('hero.cta.secondary')}
            primaryHref="#experience"
            secondaryHref="#contact"
          />

          <div className={styles.heroCenter}>
            <Portrait />
            <FloatingSkills />
          </div>

          <HeroMeta
            careerObjectiveLabel={t('hero.objective.title')}
            careerObjectiveText={t('hero.objective.short')}
            basedInLabel={t('hero.meta.basedIn')}
            basedInValue={t('hero.meta.location')}
            focusLabel={t('hero.meta.focus')}
            focusValue={t('hero.meta.discipline')}
          />
        </div>
      </div>

      <ScrollIndicator label={t('hero.scroll')} />
    </section>
  );
}