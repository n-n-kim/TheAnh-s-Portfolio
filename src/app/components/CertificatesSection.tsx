import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeader } from './primitives/SectionHeader';
import { Reveal } from './primitives/Reveal';
import { Pill } from './primitives/Pill';
import styles from './CertificatesSection.module.css';

interface Certificate {
  title: string;
  issuer: string;
  score: string;
  date: string;
  skills: string[];
}

export function CertificatesSection() {
  const { t, language } = useLanguage();

  const certificates: Certificate[] = [
    {
      title: language === 'en' ? 'Project Management Principles and Practices' : 'Nguyên tắc và Thực hành Quản lý Dự án',
      issuer: 'University of California, Irvine',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'January 2026' : 'Tháng 1/2026',
      skills: language === 'en'
        ? ['Project Management', 'Agile Methodologies', 'Risk Management', 'Stakeholder Management']
        : ['Quản lý Dự án', 'Phương pháp Agile', 'Quản lý Rủi ro', 'Quản lý Stakeholder'],
    },
    {
      title: language === 'en' ? 'Microsoft Office Specialist: Excel Associate' : 'Chứng chỉ MOS Excel',
      issuer: 'Microsoft',
      score: language === 'en' ? 'Certified' : 'Đã chứng nhận',
      date: language === 'en' ? 'September 2025' : 'Tháng 9/2025',
      skills: language === 'en'
        ? ['Microsoft Excel', 'Data Analysis', 'Spreadsheet Management', 'Formulas & Functions']
        : ['Microsoft Excel', 'Phân tích dữ liệu', 'Quản lý Bảng tính', 'Công thức & Hàm'],
    },
    {
      title: language === 'en' ? 'European Business Law Specialization' : 'Chuyên ngành Luật Kinh doanh Châu Âu',
      issuer: 'Lund University',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'September 2025' : 'Tháng 9/2025',
      skills: language === 'en'
        ? ['International Relations', 'Tax Law', 'Business Law', 'Legal Compliance']
        : ['Quan hệ Quốc tế', 'Luật Thuế', 'Luật Kinh doanh', 'Tuân thủ Pháp lý'],
    },
    {
      title: language === 'en' ? 'Academic English: Writing Specialization' : 'Chuyên ngành Tiếng Anh Học thuật: Viết',
      issuer: 'University of California, Irvine',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'June 2025' : 'Tháng 6/2025',
      skills: language === 'en'
        ? ['Academic Writing', 'English Composition', 'Research Writing', 'Critical Analysis']
        : ['Viết Học thuật', 'Soạn thảo Tiếng Anh', 'Viết Nghiên cứu', 'Phân tích Phê bình'],
    },
    {
      title: language === 'en' ? 'Quantitative Techniques' : 'Kỹ thuật Định lượng',
      issuer: 'Columbia University',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'February 2025' : 'Tháng 2/2025',
      skills: language === 'en'
        ? ['Statistical Analysis', 'Quantitative Methods', 'Data Interpretation', 'Business Analytics']
        : ['Phân tích Thống kê', 'Phương pháp Định lượng', 'Diễn giải Dữ liệu', 'Phân tích Kinh doanh'],
    },
    {
      title: language === 'en' ? 'International Marketing & Cross Industry Growth' : 'Marketing Quốc tế & Tăng trưởng Liên ngành',
      issuer: 'Yonsei University',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'January 2025' : 'Tháng 1/2025',
      skills: language === 'en'
        ? ['International Marketing', 'Global Strategy', 'Market Entry', 'Cross-Industry Analysis']
        : ['Marketing Quốc tế', 'Chiến lược Toàn cầu', 'Thâm nhập Thị trường', 'Phân tích Liên ngành'],
    },
    {
      title: language === 'en' ? 'Information Systems Specialization' : 'Chuyên ngành Hệ thống Thông tin',
      issuer: 'University of Minnesota',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'September 2024' : 'Tháng 9/2024',
      skills: language === 'en'
        ? ['Information Systems', 'Database Management', 'IT Governance', 'System Analysis']
        : ['Hệ thống Thông tin', 'Quản lý Cơ sở dữ liệu', 'Quản trị CNTT', 'Phân tích Hệ thống'],
    },
    {
      title: language === 'en' ? 'Human Resource Management Specialization' : 'Quản lý Nhân sự: HR cho Quản lý',
      issuer: 'University of Minnesota',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'May 2024' : 'Tháng 5/2024',
      skills: language === 'en'
        ? ['HR Management', 'Talent Acquisition', 'Performance Management', 'Employee Relations']
        : ['Quản lý Nhân sự', 'Tuyển dụng', 'Quản lý Hiệu suất', 'Quan hệ Người lao động'],
    },
    {
      title: language === 'en' ? 'Leading: HR Management and Leadership' : 'Lãnh đạo: Quản lý Nhân sự và Lãnh đạo',
      issuer: 'Macquarie University',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'January 2024' : 'Tháng 1/2024',
      skills: language === 'en'
        ? ['HR Management', 'Leadership Skills', 'Team Management', 'Organizational Behavior']
        : ['Quản lý Nhân sự', 'Kỹ năng Lãnh đạo', 'Quản lý Nhóm', 'Hành vi Tổ chức'],
    },
    {
      title: language === 'en' ? 'Academic Skills for University Success' : 'Kỹ năng Học thuật để Thành công tại Đại học',
      issuer: 'The University of Sydney Business School',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'August 2023' : 'Tháng 8/2023',
      skills: language === 'en'
        ? ['Academic Skills', 'Study Strategies', 'Critical Thinking', 'Research Methods']
        : ['Kỹ năng học thuật', 'Chiến lược Học tập', 'Tư duy Phê bình', 'Phương pháp Nghiên cứu'],
    },
    {
      title: language === 'en' ? 'Fundamentals of Digital Marketing' : 'Cơ bản về Marketing Số',
      issuer: 'Google Digital Garage',
      score: language === 'en' ? 'Certified' : 'Đã chứng nhận',
      date: language === 'en' ? 'June 2023' : 'Tháng 6/2023',
      skills: language === 'en'
        ? ['Digital Marketing', 'SEO Basics', 'Social Media', 'Online Advertising']
        : ['Marketing Số', 'Cơ bản SEO', 'Mạng xã hội', 'Quảng cáo Trực tuyến'],
    },
    {
      title: language === 'en' ? 'Business Analysis Foundations' : 'Nền tảng Phân tích Kinh doanh',
      issuer: 'LinkedIn',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'July 2023' : 'Tháng 7/2023',
      skills: language === 'en'
        ? ['Business Analysis', 'Analytical Thinking', 'Problem Solving', 'Communication Skills']
        : ['Phân tích Kinh doanh', 'Tư duy Phân tích', 'Giải quyết Vấn đề', 'Kỹ năng Giao tiếp'],
    },
  ];

  return (
    <div className="section section--alt">
      <div className="section__container">
        <SectionHeader
          number="05"
          eyebrow={t('certificates.label')}
          title={<>Certificates <em>& Qualifications</em></>}
        />

        <Reveal as="ul" className={styles.certs}>
          {certificates.map((cert, index) => (
            <li key={index} className={styles.certRow}>
              <span className={styles.certRow__index}>
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className={styles.certRow__body}>
                <div className={styles.certRow__head}>
                  <h3 className={styles.certRow__title}>{cert.title}</h3>
                  <span className={styles.certRow__issuer}>{cert.issuer}</span>
                </div>

                <div className={styles.certRow__skills}>
                  {cert.skills.map((skill, i) => (
                    <Pill key={i} variant="quiet">
                      {skill}
                    </Pill>
                  ))}
                </div>
              </div>

              <div className={styles.certRow__meta}>
                <div>
                  <div className={styles.certRow__score}>{t('certificates.score')}</div>
                  <div className={styles.certRow__scoreValue}>{cert.score}</div>
                </div>
                <div className={styles.certRow__date}>{cert.date}</div>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </div>
  );
}