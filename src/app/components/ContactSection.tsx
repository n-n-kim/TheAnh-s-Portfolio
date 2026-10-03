import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeader } from './primitives/SectionHeader';
import { Reveal } from './primitives/Reveal';
import { EditorialButton } from './primitives/EditorialButton';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="section section--alt">
      <div className="section__container">
        <SectionHeader
          number="07"
          eyebrow={t('contact.label')}
          title={<>Let's <em>Connect</em></>}
        />

        <Reveal as="div" className={styles.contact__hero}>
          <p className={styles.contact__intro}>{t('contact.intro')}</p>
        </Reveal>

        <Reveal className={styles.contact__grid}>
          <div className={styles.contactColumn}>
            <div className={styles.contactItem}>
              <span className={styles.contactItem__label}>{t('contact.email')}</span>
              <a className={styles.contactItem__value} href="mailto:theanh30112004@gmail.com">
                theanh30112004@gmail.com
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactItem__label}>{t('contact.phone')}</span>
              <a className={styles.contactItem__value} href="tel:+840939303600">
                0939303600
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactItem__label}>{t('contact.location')}</span>
              <span className={styles.contactItem__value}>Vietnam</span>
              <span className={styles.contactItem__sub}>FPT University</span>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactItem__label}>
                {t('contact.networks')}
              </span>
              <div className={styles.contactSocials}>
                <a
                  href="https://www.linkedin.com/in/theanhne04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill pill--outline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/theanhne04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill pill--outline"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/_wseyeong_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill pill--outline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactColumn}>
            <form className={styles.contactForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.contactForm__row}>
                <label className={styles.contactForm__label} htmlFor="contact-name">
                  {t('contact.form.name')}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className={styles.contactForm__input}
                  autoComplete="name"
                  placeholder="Enter your full name"
                />
              </div>

              <div className={styles.contactForm__row}>
                <label className={styles.contactForm__label} htmlFor="contact-email">
                  {t('contact.form.email')}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className={styles.contactForm__input}
                  autoComplete="email"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className={styles.contactForm__row}>
                <label className={styles.contactForm__label} htmlFor="contact-subject">
                  {t('contact.form.subject')}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className={styles.contactForm__input}
                  placeholder="What is this regarding?"
                />
              </div>

              <div className={styles.contactForm__row}>
                <label className={styles.contactForm__label} htmlFor="contact-message">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="contact-message"
                  className={styles.contactForm__textarea}
                  placeholder="Tell me about your opportunity or inquiry..."
                  rows={5}
                />
              </div>

              <div>
                <EditorialButton type="submit" icon={Send} variant="primary">
                  {t('contact.form.send')}
                </EditorialButton>
              </div>
            </form>
          </div>
        </Reveal>

        <Reveal as="footer" className={styles.contactFooter}>
          <span className={styles.contactFooter__thanks}>{t('contact.thanks')}</span>
          <span className={styles.contactFooter__copy}>{t('contact.copyright')}</span>
        </Reveal>
      </div>
    </div>
  );
}