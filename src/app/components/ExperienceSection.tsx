import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeader } from './primitives/SectionHeader';
import { Reveal } from './primitives/Reveal';
import styles from './ExperienceSection.module.css';

interface ExperienceEntry {
  period: string;
  title: string;
  company: string;
  type: string;
  responsibilities: string[];
  achievements: string[];
}

export function ExperienceSection() {
  const { t, language } = useLanguage();

  const experiences: ExperienceEntry[] = [
    {
      period: language === 'en' ? '2025 — 2026' : '2025 — 2026',
      title: language === 'en' ? 'Product Research and Development' : 'Nghiên cứu và Phát triển sản phẩm',
      company: 'Sony Vietnam',
      type: language === 'en' ? 'Project' : 'Dự án',
      responsibilities: language === 'en' ? [
        'Worked on product research and development for the FloodSense project',
        'Supported research activities and data collection for product improvement',
        'Contributed ideas and feedback for product enhancement',
        'Collaborated with team members on product analysis and testing',
        'Documented research findings and presented recommendations',
      ] : [
        'Thực hiện nghiên cứu và phát triển sản phẩm cho dự án FloodSense',
        'Hỗ trợ các hoạt động nghiên cứu và thu thập dữ liệu để cải thiện sản phẩm',
        'Đóng góp ý tưởng và phản hồi để nâng cao chất lượng sản phẩm',
        'Phối hợp với các thành viên trong nhóm về phân tích và thử nghiệm sản phẩm',
        'Ghi chép kết quả nghiên cứu và trình bày các đề xuất',
      ],
      achievements: language === 'en' ? [
        'Gained hands-on experience in product development process',
        'Developed analytical skills through market and product research',
      ] : [
        'Có được kinh nghiệm thực tế trong quy trình phát triển sản phẩm',
        'Phát triển kỹ năng phân tích thông qua nghiên cứu thị trường và sản phẩm',
      ],
    },
    {
      period: '2025',
      title: language === 'en' ? 'Content Marketing Intern' : 'Thực tập sinh Content Marketing',
      company: language === 'en' ? 'Coconut Cosmetic Bến Tre' : 'Mỹ phẩm Dừa Bến Tre',
      type: language === 'en' ? 'Internship' : 'Thực tập',
      responsibilities: language === 'en' ? [
        'Created Facebook content to promote products and engage customers',
        'Developed customer response scripts for consistent brand communication',
        'Contributed content ideas for the company fanpage',
        'Monitored social media engagement and customer feedback',
        'Assisted in planning content calendar and posting schedule',
      ] : [
        'Tạo nội dung Facebook để quảng bá sản phẩm và tương tác với khách hàng',
        'Phát triển kịch bản phản hồi khách hàng để đảm bảo giao tiếp thương hiệu nhất quán',
        'Đóng góp ý tưởng nội dung cho fanpage công ty',
        'Theo dõi tương tác mạng xã hội và phản hồi của khách hàng',
        'Hỗ trợ lập kế hoạch lịch nội dung và lịch đăng bài',
      ],
      achievements: language === 'en' ? [
        'Developed practical skills in social media marketing',
        'Enhanced content creation and customer communication abilities',
      ] : [
        'Phát triển kỹ năng thực tế trong marketing mạng xã hội',
        'Nâng cao khả năng tạo nội dung và giao tiếp với khách hàng',
      ],
    },
    {
      period: '2025',
      title: language === 'en' ? 'Vehicle Operations Staff' : 'Nhân viên Vận hành Xe',
      company: 'Viettel Logistics',
      type: language === 'en' ? 'Part-time' : 'Bán thời gian',
      responsibilities: language === 'en' ? [
        'Handled operational data for vehicle coordination and logistics',
        'Prepared periodic reports on operations performance',
        'Supported planning for vehicle coordination and route optimization',
        'Maintained accurate records of vehicle operations and schedules',
        'Collaborated with team to improve operational efficiency',
      ] : [
        'Xử lý dữ liệu vận hành cho điều phối xe và logistics',
        'Chuẩn bị báo cáo định kỳ về hiệu suất vận hành',
        'Hỗ trợ lập kế hoạch điều phối xe và tối ưu hóa lộ trình',
        'Duy trì hồ sơ chính xác về hoạt động và lịch trình xe',
        'Phối hợp với nhóm để cải thiện hiệu quả vận hành',
      ],
      achievements: language === 'en' ? [
        'Gained practical experience in logistics operations',
        'Developed data handling and reporting skills',
      ] : [
        'Có được kinh nghiệm thực tế trong vận hành logistics',
        'Phát triển kỹ năng xử lý dữ liệu và báo cáo',
      ],
    },
    {
      period: language === 'en' ? '2023 — 2025' : '2023 — 2025',
      title: language === 'en' ? 'English Class Teaching Assistant' : 'Trợ giảng Lớp Tiếng Anh',
      company: language === 'en' ? 'Private English Center' : 'Trung tâm Tiếng Anh Tư nhân',
      type: language === 'en' ? 'Part-time' : 'Bán thời gian',
      responsibilities: language === 'en' ? [
        'Supported English classes as a teaching assistant',
        'Helped manage students and maintain classroom order',
        'Assisted in classroom operations and lesson preparation',
        'Provided additional support to students who needed extra help',
        'Organized classroom activities and materials',
      ] : [
        'Hỗ trợ các lớp tiếng Anh với vai trò trợ giảng',
        'Giúp quản lý học sinh và duy trì trật tự lớp học',
        'Hỗ trợ vận hành lớp học và chuẩn bị bài giảng',
        'Cung cấp hỗ trợ bổ sung cho học sinh cần giúp đỡ thêm',
        'Tổ chức các hoạt động và tài liệu lớp học',
      ],
      achievements: language === 'en' ? [
        'Developed teaching and classroom management skills',
        'Improved communication and leadership abilities',
      ] : [
        'Phát triển kỹ năng giảng dạy và quản lý lớp học',
        'Cải thiện khả năng giao tiếp và lãnh đạo',
      ],
    },
    {
      period: '2024',
      title: language === 'en' ? 'Charity and Fundraising Projects' : 'Các dự án Từ thiện và Gây quỹ',
      company: language === 'en' ? 'FPT University Community' : 'Cộng đồng Đại học FPT',
      type: language === 'en' ? 'Volunteer' : 'Tình nguyện',
      responsibilities: language === 'en' ? [
        'Participated in organizing charity fundraising events',
        'Managed sales-based fundraising projects',
        'Coordinated with team members on event planning and execution',
        'Engaged with community members to promote charitable causes',
        'Contributed to projects: "Chung Một Nhịp Đập", "Trao Gửi Yêu Thương", "Khúc Giao Mùa"',
      ] : [
        'Tham gia tổ chức các sự kiện gây quỹ từ thiện',
        'Quản lý các dự án gây quỹ dựa trên bán hàng',
        'Phối hợp với các thành viên nhóm về kế hoạch và thực hiện sự kiện',
        'Tương tác với các thành viên cộng đồng để thúc đẩy các hoạt động từ thiện',
        'Đóng góp vào các dự án: "Chung Một Nhịp Đập", "Trao Gửi Yêu Thương", "Khúc Giao Mùa"',
      ],
      achievements: language === 'en' ? [
        'Developed teamwork and event management skills',
        'Contributed to meaningful community impact',
      ] : [
        'Phát triển kỹ năng làm việc nhóm và quản lý sự kiện',
        'Đóng góp vào tác động có ý nghĩa cho cộng đồng',
      ],
    },
    {
      period: language === 'en' ? '2022 — 2023' : '2022 — 2023',
      title: language === 'en' ? 'Secretary and Human Resource Management' : 'Thư ký và Quản lý Nhân sự',
      company: language === 'en' ? 'FMI FPT Musical Instruments Club' : 'CLB Nhạc cụ FMI FPT',
      type: language === 'en' ? 'Leadership' : 'Lãnh đạo',
      responsibilities: language === 'en' ? [
        'Served as secretary and HR manager for the club',
        'Supported internal management and member coordination',
        'Organized club operations and member activities',
        'Managed documentation and communication within the club',
        'Coordinated recruitment and onboarding of new members',
      ] : [
        'Đảm nhận vai trò thư ký và quản lý nhân sự cho câu lạc bộ',
        'Hỗ trợ quản lý nội bộ và điều phối thành viên',
        'Tổ chức hoạt động câu lạc bộ và các hoạt động thành viên',
        'Quản lý tài liệu và giao tiếp trong câu lạc bộ',
        'Điều phối tuyển dụng và giới thiệu thành viên mới',
      ],
      achievements: language === 'en' ? [
        'Developed organizational and leadership skills',
        'Enhanced ability to manage teams and coordinate activities',
      ] : [
        'Phát triển kỹ năng tổ chức và lãnh đạo',
        'Nâng cao khả năng quản lý nhóm và điều phối hoạt động',
      ],
    },
    {
      period: language === 'en' ? '2017 — 2019' : '2017 — 2019',
      title: language === 'en' ? 'Taekwondo Instructor and Class Manager' : 'Huấn luyện viên và Quản lý Lớp Taekwondo',
      company: language === 'en' ? 'Local Taekwondo Academy' : 'Học viện Taekwondo Địa phương',
      type: language === 'en' ? 'Part-time' : 'Bán thời gian',
      responsibilities: language === 'en' ? [
        'Taught and managed students in a Taekwondo class',
        'Developed training programs and lesson plans',
        'Maintained discipline and safety standards',
        'Managed class schedules and student attendance',
        'Communicated with parents about student progress',
      ] : [
        'Giảng dạy và quản lý học viên trong lớp Taekwondo',
        'Phát triển chương trình đào tạo và kế hoạch bài học',
        'Duy trì kỷ luật và tiêu chuẩn an toàn',
        'Quản lý lịch học và điểm danh học viên',
        'Giao tiếp với phụ huynh về tiến độ của học viên',
      ],
      achievements: language === 'en' ? [
        'Developed leadership, discipline, and communication skills',
        'Enhanced class management and teaching abilities',
      ] : [
        'Phát triển kỹ năng lãnh đạo, kỷ luật và giao tiếp',
        'Nâng cao khả năng quản lý lớp học và giảng dạy',
      ],
    },
  ];

  return (
    <div className="section section--alt">
      <div className="section__container">
        <SectionHeader
          number="04"
          eyebrow={t('experience.label')}
          title={<>Experience <em>& Activities</em></>}
        />

        <Reveal as="ul" className={styles.timeline}>
          {experiences.map((exp, index) => (
            <li key={index} className={styles.entry}>
              <div className={styles.entry__meta}>
                <span className={styles.entry__period}>{exp.period}</span>
                <span className={styles.entry__type}>{exp.type}</span>
              </div>

              <div className={styles.entry__body}>
                <div className={styles.entry__head}>
                  <h3 className={styles.entry__title}>{exp.title}</h3>
                  <span className={styles.entry__company}>{exp.company}</span>
                </div>

                <div className={styles.entryColumns}>
                  <div className={styles.entryColumn}>
                    <p className={styles.entryColumn__label}>
                      {t('experience.responsibilities')}
                    </p>
                    <ul className={styles.entryColumn__list}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className={styles.entryColumn__item}>
                          <span className={styles.entryColumn__bullet}>—</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.entryColumn}>
                    <p className={styles.entryColumn__label}>
                      {t('experience.achievements')}
                    </p>
                    <ul className={styles.entryColumn__list}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className={styles.entryColumn__item}>
                          <span className={styles.entryColumn__bullet}>—</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </div>
  );
}