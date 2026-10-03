import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeader } from './primitives/SectionHeader';
import { Reveal } from './primitives/Reveal';
import styles from './AchievementsSection.module.css';

interface Achievement {
  category: string;
  title: string;
  description: string;
  date: string;
  impact: string;
}

export function AchievementsSection() {
  const { t, language } = useLanguage();

  const achievements: Achievement[] = [
    {
      category: language === 'en' ? 'Graduation' : 'Tốt nghiệp',
      title: language === 'en' ? 'Graduated with Honors' : 'Tốt nghiệp loại Giỏi',
      description: language === 'en'
        ? 'Graduated from FPT University with an overall GPA of 3.3/4.0'
        : 'Tốt nghiệp Đại học FPT loại Giỏi với GPA toàn khóa 3.3/4.0',
      date: '2026',
      impact: language === 'en' ? 'Overall GPA: 3.3/4.0' : 'GPA toàn khóa: 8,2/10',
    },
    {
      category: language === 'en' ? 'Academic Excellence' : 'Xuất sắc Học tập',
      title: language === 'en' ? 'Excellent Student — SP26 Semester' : 'Sinh viên Giỏi — Học kỳ SP26',
      description: language === 'en'
        ? 'Recognized for outstanding academic performance in Spring 2026 semester at FPT University.'
        : 'Được công nhận vì thành tích học tập tốt trong học kỳ Xuân 2026 tại Đại học FPT.',
      date: language === 'en' ? 'Spring 2026' : 'Xuân 2026',
      impact: language === 'en'
        ? 'Maintained high GPA and consistent academic performance'
        : 'Duy trì GPA cao và thành tích học tập ổn định',
    },
    {
      category: language === 'en' ? 'Academic Excellence' : 'Xuất sắc Học tập',
      title: language === 'en' ? 'Excellent Student — SU26 Semester' : 'Sinh viên Giỏi — Học kỳ SU26',
      description: language === 'en'
        ? 'Recognized for outstanding academic performance in the Summer 2026 semester at FPT University.'
        : 'Được công nhận danh hiệu Sinh viên Giỏi trong học kỳ Hè 2026 tại Đại học FPT.',
      date: language === 'en' ? 'Summer 2026' : 'Hè 2026',
      impact: language === 'en'
        ? 'Sustained excellent academic performance through the final semester'
        : 'Duy trì thành tích học tập xuất sắc đến học kỳ cuối',
    },
    {
      category: language === 'en' ? 'Academic Excellence' : 'Xuất sắc Học tập',
      title: language === 'en' ? 'Excellent Student — FA25 Semester' : 'Sinh viên Giỏi — Học kỳ FA25',
      description: language === 'en'
        ? 'Recognized for outstanding academic performance in Fall 2025 semester at FPT University.'
        : 'Được công nhận vì thành tích học tập tốt trong học kỳ Thu 2025 tại Đại học FPT.',
      date: language === 'en' ? 'Fall 2025' : 'Thu 2025',
      impact: language === 'en'
        ? 'Demonstrated consistent excellence across multiple semesters'
        : 'Thể hiện sự xuất sắc nhất quán qua nhiều học kỳ',
    },
    {
      category: language === 'en' ? 'Academic Excellence' : 'Xuất sắc Học tập',
      title: language === 'en' ? 'Excellent Student — SP25 Semester' : 'Sinh viên Giỏi — Học kỳ SP25',
      description: language === 'en'
        ? 'Recognized for outstanding academic performance in Spring 2025 semester at FPT University.'
        : 'Được công nhận vì thành tích học tập tốt trong học kỳ Xuân 2025 tại Đại học FPT.',
      date: language === 'en' ? 'Spring 2025' : 'Xuân 2025',
      impact: language === 'en'
        ? 'Demonstrated consistent excellence across multiple semesters'
        : 'Thể hiện sự xuất sắc nhất quán qua nhiều học kỳ',
    },
    {
      category: language === 'en' ? 'Professional Development' : 'Phát triển Chuyên môn',
      title: language === 'en' ? 'Multiple Professional Certifications' : 'Nhiều Chứng chỉ Chuyên nghiệp',
      description: language === 'en'
        ? 'Completed 7+ professional certifications from leading institutions including Microsoft, Columbia, Yonsei, and Google.'
        : 'Hoàn thành 7+ chứng chỉ chuyên nghiệp từ các tổ chức hàng đầu bao gồm Microsoft, Columbia, Yonsei và Google.',
      date: language === 'en' ? '2023 — 2025' : '2023 — 2025',
      impact: language === 'en'
        ? 'Built strong foundation in business analysis, marketing, and leadership'
        : 'Xây dựng nền tảng vững chắc về phân tích kinh doanh, marketing và lãnh đạo',
    },
    {
      category: language === 'en' ? 'Leadership' : 'Lãnh đạo',
      title: language === 'en' ? 'Club Secretary & HR Manager' : 'Thư ký & Quản lý Nhân sự CLB',
      description: language === 'en'
        ? 'Led HR management and administrative operations for FPT Musical Instruments Club, managing members and coordinating activities.'
        : 'Lãnh đạo quản lý nhân sự và hoạt động hành chính cho CLB Nhạc cụ FPT, quản lý thành viên và điều phối hoạt động.',
      date: language === 'en' ? '2022 — 2023' : '2022 — 2023',
      impact: language === 'en'
        ? 'Developed leadership and organizational management skills'
        : 'Phát triển kỹ năng lãnh đạo và quản lý tổ chức',
    },
    {
      category: language === 'en' ? 'Community Impact' : 'Tác động Cộng đồng',
      title: language === 'en' ? 'Charity Project Organizer' : 'Tổ chức Dự án Từ thiện',
      description: language === 'en'
        ? 'Successfully organized and managed multiple charity fundraising projects contributing to community welfare.'
        : 'Tổ chức và quản lý thành công nhiều dự án gây quỹ từ thiện đóng góp cho phúc lợi cộng đồng.',
      date: '2024',
      impact: language === 'en'
        ? 'Contributed to 3 major charity campaigns serving local communities'
        : 'Đóng góp vào 3 chiến dịch từ thiện lớn phục vụ cộng đồng địa phương',
    },
    {
      category: language === 'en' ? 'Teaching & Mentoring' : 'Giảng dạy & Hướng dẫn',
      title: language === 'en' ? 'English Teaching Assistant' : 'Trợ giảng Tiếng Anh',
      description: language === 'en'
        ? 'Served as teaching assistant for 2 years, supporting English education and student development.'
        : 'Phục vụ với vai trò trợ giảng trong 2 năm, hỗ trợ giáo dục tiếng Anh và phát triển học viên.',
      date: language === 'en' ? '2023 — 2025' : '2023 — 2025',
      impact: language === 'en'
        ? 'Enhanced teaching skills and contributed to student learning success'
        : 'Nâng cao kỹ năng giảng dạy và đóng góp vào thành công học tập của học viên',
    },
    {
      category: language === 'en' ? 'Sports & Leadership' : 'Thể thao & Lãnh đạo',
      title: language === 'en' ? 'Taekwondo Instructor & Class Manager' : 'Huấn luyện viên & Quản lý Lớp Taekwondo',
      description: language === 'en'
        ? 'Taught and managed Taekwondo classes for 2 years, developing discipline, leadership, and communication skills.'
        : 'Giảng dạy và quản lý lớp Taekwondo trong 2 năm, phát triển kỷ luật, lãnh đạo và kỹ năng giao tiếp.',
      date: language === 'en' ? '2017 — 2019' : '2017 — 2019',
      impact: language === 'en'
        ? 'Built strong foundation in leadership and classroom management'
        : 'Xây dựng nền tảng vững chắc về lãnh đạo và quản lý lớp học',
    },
    {
      category: language === 'en' ? 'Practical Experience' : 'Kinh nghiệm Thực tế',
      title: language === 'en' ? 'Multiple Industry Internships' : 'Thực tập đa dạng lĩnh vực',
      description: language === 'en'
        ? 'Completed internships and projects across diverse sectors including technology, cosmetics, and logistics.'
        : 'Hoàn thành thực tập và dự án trong các lĩnh vực đa dạng bao gồm công nghệ, mỹ phẩm và logistics.',
      date: language === 'en' ? '2025 — 2026' : '2025 — 2026',
      impact: language === 'en'
        ? 'Gained hands-on experience in product development, marketing, and operations'
        : 'Có được kinh nghiệm thực tế trong phát triển sản phẩm, marketing và vận hành',
    },
  ];

  return (
    <div className="section">
      <div className="section__container">
        <SectionHeader
          number="06"
          eyebrow={t('achievements.label')}
          title={<>Achievements <em>& Awards</em></>}
        />

        <Reveal as="ul" className={styles.ach}>
          {achievements.map((a, i) => (
            <li key={i} className={styles.achRow}>
              <div className={styles.achRow__meta}>
                <span className={styles.achRow__category}>{a.category}</span>
                <span className={styles.achRow__date}>{a.date}</span>
              </div>

              <div className={styles.achRow__body}>
                <h3 className={styles.achRow__title}>{a.title}</h3>
                <p className={styles.achRow__desc}>{a.description}</p>
                <div className={styles.achRow__impact}>
                  <span className={styles.achRow__impactLabel}>
                    {t('achievements.impact')}
                  </span>
                  <span className={styles.achRow__impactValue}>{a.impact}</span>
                </div>
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className={styles.achStats}>
          <div className={styles.achStat}>
            <span className={styles.achStat__value}>4</span>
            <span className={styles.achStat__label}>
              {language === 'en' ? 'YEARS' : 'NĂM'}
            </span>
          </div>
          <div className={styles.achStat}>
            <span className={styles.achStat__value}>7+</span>
            <span className={styles.achStat__label}>
              {language === 'en' ? 'CERTIFICATES' : 'CHỨNG CHỈ'}
            </span>
          </div>
          <div className={styles.achStat}>
            <span className={styles.achStat__value}>4x</span>
            <span className={styles.achStat__label}>
              {language === 'en' ? 'GOOD' : 'GIỎI'}
            </span>
          </div>
          <div className={styles.achStat}>
            <span className={styles.achStat__value}>7+</span>
            <span className={styles.achStat__label}>
              {language === 'en' ? 'EXPERIENCES' : 'KINH NGHIỆM'}
            </span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}