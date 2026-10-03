import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeader } from './primitives/SectionHeader';
import { Reveal } from './primitives/Reveal';
import styles from './AboutSection.module.css';

export function AboutSection() {
  const { t } = useLanguage();

  const interests = [
    t('about.interest1'),
    t('about.interest2'),
    t('about.interest3'),
    t('about.interest4'),
    t('about.interest5'),
    t('about.interest6'),
    t('about.interest7'),
    t('about.interest8'),
  ];

  const hobbies = [
    t('about.hobby1'),
    t('about.hobby2'),
    t('about.hobby3'),
    t('about.hobby4'),
    t('about.hobby5'),
    t('about.hobby6'),
    t('about.hobby7'),
    t('about.hobby8'),
    t('about.hobby9'),
  ];

  return (
    <div className="section">
      <div className="section__container">
        <SectionHeader
          number="01"
          eyebrow={t('about.label')}
          title={<>About <em>Me</em></>}
        />

        <Reveal className={styles.about}>
          <div className={styles.about__intro}>
            <p className={styles.about__display}>
              {t('about.summary.title')} —{' '}
              <em>international business, market research, and operational growth.</em>
            </p>
            <p className={styles.about__body}>{t('about.summary.p1')}</p>
            <p className={styles.about__body}>{t('about.summary.p2')}</p>
          </div>

          <div className={styles.about__side}>
            <div>
              <div className={styles.about__listTitle}>
                <span className={styles.about__listTitleLabel}>
                  {t('about.interests.title')}
                </span>
                <span className={styles.about__listTitleCount}>
                  {String(interests.length).padStart(2, '0')}
                </span>
              </div>
              <ul className={styles.about__list}>
                {interests.map((item, i) => (
                  <li key={i} className={styles.about__listItem}>
                    <span className={styles.about__listIndex}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.about__listText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className={styles.about__listTitle}>
                <span className={styles.about__listTitleLabel}>
                  {t('about.hobby.title')}
                </span>
                <span className={styles.about__listTitleCount}>
                  {String(hobbies.length).padStart(2, '0')}
                </span>
              </div>
              <ul className={styles.about__list}>
                {hobbies.map((item, i) => (
                  <li key={i} className={styles.about__listItem}>
                    <span className={styles.about__listIndex}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={styles.about__listText}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className={styles.about__stats}>
          <div className={styles.about__stat}>
            <span className={styles.about__statValue}>4</span>
            <span className={styles.about__statLabel}>{t('about.stat1')}</span>
          </div>
          <div className={styles.about__stat}>
            <span className={styles.about__statValue}>7+</span>
            <span className={styles.about__statLabel}>{t('about.stat2')}</span>
          </div>
          <div className={styles.about__stat}>
            <span className={styles.about__statValue}>7+</span>
            <span className={styles.about__statLabel}>{t('about.stat3')}</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}