import styles from './Hero.module.css';
import matongPortrait from '../../../imports/matong.png';

/**
 * Center portrait stage.
 *
 * The matong.png asset is a 826x826 square image. We display it inside a
 * circular crop with subtle grayscale, soft gradient mask at the bottom,
 * and a soft radial glow + ring behind for editorial depth.
 */
export function Portrait() {
  return (
    <div className={styles.heroPortraitWrap}>
      <div className={styles.heroPortraitStage}>
        <div className={styles.heroPortraitGlow} aria-hidden="true" />
        <div className={styles.heroPortraitRing} aria-hidden="true" />
        <div className={styles.heroPortraitCap} aria-hidden="true" />
        <img
          src={matongPortrait}
          alt="Portrait of Nguyễn Thế Anh — International Business graduate"
          className={styles.heroPortraitImage}
          loading="eager"
          decoding="async"
          width={826}
          height={826}
        />
      </div>
    </div>
  );
}