import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './LanguageBubble.module.css';

/**
 * Floating language switcher in the top-right corner.
 * Replaces the previous full sidebar navigation.
 */
export function LanguageBubble() {
  const { language, setLanguage } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <button
      type="button"
      className={styles.bubble}
      onClick={() => setLanguage(isEnglish ? 'vi' : 'en')}
      aria-label={isEnglish ? 'Switch to Vietnamese' : 'Switch to English'}
    >
      <Languages className={styles.bubble__icon} strokeWidth={1.5} />
      <span>{isEnglish ? 'EN' : 'VN'}</span>
    </button>
  );
}