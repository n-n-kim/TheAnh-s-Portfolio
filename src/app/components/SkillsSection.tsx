import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeader } from './primitives/SectionHeader';
import { Reveal } from './primitives/Reveal';
import { Pill } from './primitives/Pill';
import {
  Globe,
  Search,
  Package,
  Truck,
  Megaphone,
  BarChart3,
  Ship,
  Link2,
} from 'lucide-react';
import styles from './SkillsSection.module.css';

export function SkillsSection() {
  const { t, language } = useLanguage();

  const businessSkills = [
    { name: language === 'en' ? 'Problem Solving' : 'Giải quyết vấn đề', level: 85 },
    { name: language === 'en' ? 'Critical Thinking' : 'Tư duy phản biện', level: 82 },
    { name: language === 'en' ? 'Business Research & Reporting' : 'Nghiên cứu & Báo cáo Kinh doanh', level: 80 },
    { name: language === 'en' ? 'Market Research' : 'Nghiên cứu Thị trường', level: 78 },
    { name: language === 'en' ? 'Content Planning' : 'Lập kế hoạch Nội dung', level: 75 },
    { name: language === 'en' ? 'Customer Response Scripting' : 'Viết kịch bản phản hồi KH', level: 72 },
  ];

  const technicalSkills = [
    { name: 'Microsoft Excel', level: 88 },
    { name: 'Microsoft Word', level: 85 },
    { name: 'PowerPoint', level: 82 },
    { name: 'Google Sheets', level: 80 },
    { name: 'Canva', level: 78 },
  ];

  const languageSkills = [
    { name: language === 'en' ? 'English' : 'Tiếng Anh', level: 80, note: language === 'en' ? 'Business Communication' : 'Giao tiếp Kinh doanh' },
    { name: language === 'en' ? 'Chinese' : 'Tiếng Trung', level: 60, note: 'HSK 3' },
    { name: language === 'en' ? 'Vietnamese' : 'Tiếng Việt', level: 100, note: language === 'en' ? 'Native' : 'Tiếng mẹ đẻ' },
  ];

  const expertiseTags = [
    { label: 'International Business', Icon: Globe },
    { label: 'Market Research', Icon: Search },
    { label: 'Product Development', Icon: Package },
    { label: 'Logistics Operations', Icon: Truck },
    { label: 'Content Marketing', Icon: Megaphone },
    { label: 'Business Analysis', Icon: BarChart3 },
    { label: 'Import-Export', Icon: Ship },
    { label: 'Supply Chain', Icon: Link2 },
  ];

  const renderList = (
    items: { name: string; level: number; note?: string }[]
  ) => (
    <ul className={styles.skillsList}>
      {items.map((skill, i) => (
        <li key={i} className={styles.skillRow}>
          <div className={styles.skillRow__main}>
            <span className={styles.skillRow__name}>{skill.name}</span>
            <span className={styles.skillRow__meta}>{skill.level}%</span>
          </div>
          {skill.note && (
            <span className={styles.skillRow__note}>{skill.note}</span>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="section">
      <div className="section__container">
        <SectionHeader
          number="02"
          eyebrow={t('skills.label')}
          title={<>Professional <em>Skills</em></>}
        />

        <Reveal className={styles.skillsLayout}>
          <div className={styles.skillsBlock}>
            <div className={styles.skillsBlock__head}>
              <span className={styles.skillsBlock__title}>{t('skills.business')}</span>
              <span className={styles.skillsBlock__count}>
                {String(businessSkills.length).padStart(2, '0')}
              </span>
            </div>
            {renderList(businessSkills)}
          </div>

          <div className={styles.skillsBlock}>
            <div className={styles.skillsBlock__head}>
              <span className={styles.skillsBlock__title}>{t('skills.technical')}</span>
              <span className={styles.skillsBlock__count}>
                {String(technicalSkills.length).padStart(2, '0')}
              </span>
            </div>
            {renderList(technicalSkills)}
          </div>

          <div className={styles.skillsBlock}>
            <div className={styles.skillsBlock__head}>
              <span className={styles.skillsBlock__title}>{t('skills.language')}</span>
              <span className={styles.skillsBlock__count}>
                {String(languageSkills.length).padStart(2, '0')}
              </span>
            </div>
            {renderList(languageSkills)}
          </div>
        </Reveal>

        <Reveal className={styles.skillsTags}>
          {expertiseTags.map(({ label, Icon }) => (
            <Pill key={label} icon={Icon} variant="quiet">
              {label}
            </Pill>
          ))}
        </Reveal>
      </div>
    </div>
  );
}