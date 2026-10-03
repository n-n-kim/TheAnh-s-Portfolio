import { motion, useReducedMotion } from 'motion/react';
import styles from './Hero.module.css';
import { floatingSkills, type SkillTag, type TagTier } from './heroData';

/**
 * Skill tags that orbit the portrait on desktop.
 *
 * - All 8 tags are rendered permanently visible at all times (opacity >= 0.92).
 * - `tier` controls visual depth: `far` tags are slightly more transparent
 *   and slightly smaller for editorial layering.
 * - Animation is a barely-noticeable vertical float (4–8s), each tag with
 *   its own delay so they never move in sync.
 * - On mobile the same data is rendered as a wrapping pill list below the
 *   intro — no absolute positioning over the face.
 */
export function FloatingSkills() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      {/* Desktop: absolute-positioned pills orbiting the portrait */}
      <div className={styles.floatingSkillsDesktop}>
        {floatingSkills.map((skill, idx) => (
          <FloatingSkill
            key={skill.label}
            skill={skill}
            index={idx}
            reducedMotion={!!reducedMotion}
          />
        ))}
      </div>

      {/* Mobile: wrapping pill list */}
      <div className={styles.floatingSkillsMobile} aria-label="Areas of expertise">
        {floatingSkills.map((skill) => (
          <MobileSkill key={skill.label} skill={skill} />
        ))}
      </div>
    </>
  );
}

interface FloatingSkillProps {
  skill: SkillTag;
  index: number;
  reducedMotion: boolean;
}

const tierToClass: Record<TagTier, string> = {
  near: '',
  mid: styles.tierMid ?? '',
  far: styles.tierFar ?? '',
};

function FloatingSkill({ skill, index, reducedMotion }: FloatingSkillProps) {
  const { Icon } = skill;
  const positionClass = styles[`pos-${skill.position}`] ?? '';
  const tierClass = tierToClass[skill.tier];

  // Different tags float at slightly different speeds.
  const floatDuration = 5 + (index % 4) * 0.8; // 5s – 7.4s

  return (
    <motion.span
      className={`${styles.floatingSkillDesktop} ${positionClass} ${tierClass}`.trim()}
      // Static rotation + initial transform — only Y animates.
      style={{ rotate: `${skill.rotate}deg` }}
      animate={
        reducedMotion
          ? { y: 0 }
          : {
              y: [0, -4, 0],
            }
      }
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              duration: floatDuration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: skill.delay,
            }
      }
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -6,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }
      }
    >
      <Icon className={styles.floatingSkillIcon} aria-hidden="true" strokeWidth={1.5} />
      <span>{skill.label}</span>
    </motion.span>
  );
}

function MobileSkill({ skill }: { skill: SkillTag }) {
  const { Icon } = skill;
  return (
    <span className={styles.floatingSkillMobile}>
      <Icon className={styles.floatingSkillIcon} aria-hidden="true" strokeWidth={1.5} />
      <span>{skill.label}</span>
    </span>
  );
}