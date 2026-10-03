import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.certificates': 'Certificates',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',
    'nav.portfolio': 'PORTFOLIO',
    'nav.rights': '© 2026 All Rights Reserved',

    // Hero Section
    'hero.title': 'INTERNATIONAL BUSINESS',
    'hero.greeting': "Hello, I'm",
    'hero.name': 'Nguyễn Thế Anh',
    'hero.multilingualLabel': 'GREETING',
    'hero.introShort':
      'An International Business graduate with a strong interest in business operations, professional development, and organizational growth.',
    'hero.introTail':
      'Adaptable, eager to learn, and open to opportunities where I can apply my knowledge, develop practical skills, and contribute to meaningful results.',
    'hero.intro':
      'An International Business graduate with a strong interest in business operations, professional development, and organizational growth. Adaptable, eager to learn, and open to diverse career opportunities where I can apply my knowledge, develop practical skills, and contribute to meaningful results.',
    'hero.objective.title': 'CAREER OBJECTIVE',
    'hero.objective.short':
      'To establish a long-term career in a professional environment where I can continuously expand my knowledge, strengthen my capabilities, and take on new challenges.',
    'hero.objective.text':
      'To establish a long-term career in a professional environment where I can continuously expand my knowledge, strengthen my capabilities, and take on new challenges. I aspire to grow through diverse experiences, contribute to organizational success, and develop into a well-rounded professional.',
    'hero.meta.basedIn': 'BASED IN',
    'hero.meta.location': 'Ho Chi Minh City, Vietnam',
    'hero.meta.focus': 'FOCUS',
    'hero.meta.discipline': 'International Business',
    'hero.cta.primary': 'View My Experience',
    'hero.cta.secondary': 'Contact Me',
    'hero.scroll': 'Scroll',
    'hero.download': 'DOWNLOAD CV',
    'hero.contact': 'CONTACT ME',

    // About Section
    'about.label': 'INTRODUCTION',
    'about.title': 'About Me',
    'about.summary.title': 'Professional Summary',
    'about.summary.p1':
      'I am a third-year International Business student at FPT University with a strong passion for global commerce and business operations. I enjoy researching markets, understanding customer behavior, and developing strategies that create real value.',
    'about.summary.p2':
      'Currently seeking opportunities in international business, marketing, logistics, and trade operations where I can apply my analytical mindset, communication skills, and eagerness to learn in a professional environment.',
    'about.interests.title': 'Career Interests',
    'about.interest1': 'International Business',
    'about.interest2': 'Market Research',
    'about.interest3': 'Product Development',
    'about.interest4': 'Logistics Operations',
    'about.interest5': 'Content Marketing',
    'about.interest6': 'Business Analysis',
    'about.interest7': 'Import-Export',
    'about.interest8': 'Supply Chain',
    'about.stat1': 'YEARS OF STUDY',
    'about.stat2': 'EXPERIENCES',
    'about.stat3': 'CERTIFICATIONS',
    'about.hobby.title': 'Hobbies',
    'about.hobby1': 'Rubiks Cube',
    'about.hobby2': 'Badminton',
    'about.hobby3': 'Gym Training',
    'about.hobby4': 'Guitar',
    'about.hobby5': 'Reading',
    'about.hobby6': 'Traveling',
    'about.hobby7': 'Photography',
    'about.hobby8': 'Taekwondo',
    'about.hobby9': 'Vovinam',

    // Skills Section
    'skills.label': 'EXPERTISE',
    'skills.title': 'Professional Skills',
    'skills.business': 'Business Skills',
    'skills.technical': 'Technical Skills',
    'skills.language': 'Language Skills',

    // Projects Section
    'projects.label': 'PORTFOLIO',
    'projects.title': 'Featured Projects',
    'projects.view': 'VIEW PROJECT DETAILS →',

    // Experience Section
    'experience.label': 'PROFESSIONAL JOURNEY',
    'experience.title': 'Experience & Activities',
    'experience.responsibilities': 'KEY RESPONSIBILITIES',
    'experience.achievements': 'KEY ACHIEVEMENTS',

    // Certificates Section
    'certificates.label': 'CREDENTIALS',
    'certificates.title': 'Certificates & Qualifications',
    'certificates.score': 'SCORE/STATUS',
    'certificates.date': 'DATE OBTAINED',
    'certificates.competencies': 'KEY COMPETENCIES',

    // Achievements Section
    'achievements.label': 'RECOGNITION',
    'achievements.title': 'Achievements & Awards',
    'achievements.impact': 'MEASURABLE IMPACT',

    // Contact
    'contact.label': 'GET IN TOUCH',
    'contact.title': 'Contact Me',
    'contact.connect': "Let's Connect",
    'contact.intro':
      "I am actively seeking opportunities in international business, marketing, logistics, and trade operations. Whether you're looking for an eager learner or want to discuss potential opportunities, I'd love to hear from you.",
    'contact.email': 'EMAIL',
    'contact.phone': 'PHONE',
    'contact.location': 'LOCATION',
    'contact.networks': 'PROFESSIONAL NETWORKS',
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'YOUR NAME',
    'contact.form.email': 'EMAIL ADDRESS',
    'contact.form.subject': 'SUBJECT',
    'contact.form.message': 'MESSAGE',
    'contact.form.send': 'SEND MESSAGE',
    'contact.thanks': 'Thank you for visiting my portfolio',
    'contact.copyright': '© 2026 Nguyễn Thế Anh. All rights reserved.',
  },
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.about': 'Giới thiệu',
    'nav.skills': 'Kỹ năng',
    'nav.projects': 'Dự án',
    'nav.experience': 'Kinh nghiệm',
    'nav.certificates': 'Chứng chỉ',
    'nav.achievements': 'Thành tích',
    'nav.contact': 'Liên hệ',
    'nav.portfolio': 'Hồ sơ',
    'nav.rights': '© 2026 Bản quyền thuộc về',

    // Hero Section
    'hero.title': 'SINH VIÊN KINH DOANH QUỐC TẾ',
    'hero.greeting': 'Xin chào, tôi là',
    'hero.name': 'Nguyễn Thế Anh',
    'hero.multilingualLabel': 'LỜI CHÀO',
    'hero.introShort':
      'Sinh viên tốt nghiệp ngành Kinh doanh Quốc tế, đam mê phát triển kinh doanh, vận hành doanh nghiệp và tăng trưởng tổ chức.',
    'hero.introTail':
      'Linh hoạt, ham học hỏi và sẵn sàng đón nhận cơ hội để áp dụng kiến thức, rèn luyện kỹ năng thực tế và tạo ra giá trị thiết thực.',
    'hero.intro':
      'Sinh viên tốt nghiệp ngành Kinh doanh Quốc tế, đang định hướng phát triển sự nghiệp trong lĩnh vực Nhân sự, với thế mạnh về giao tiếp, tuyển dụng và điều phối nhân sự.',
    'hero.objective.title': 'MỤC TIÊU NGHỀ NGHIỆP',
    'hero.objective.short':
      'Xây dựng sự nghiệp lâu dài trong môi trường chuyên nghiệp, không ngừng mở rộng kiến thức, nâng cao năng lực và chinh phục những thử thách mới.',
    'hero.objective.text':
      'Xây dựng sự nghiệp lâu dài trong lĩnh vực Nhân sự, tập trung vào tuyển dụng và phát triển nhân tài, không ngừng nâng cao chuyên môn để tìm kiếm, thu hút và phát triển nguồn nhân lực phù hợp, đồng thời góp phần xây dựng tổ chức bền vững, lấy con người làm trung tâm.',
    'hero.meta.basedIn': 'ĐỊA CHỈ',
    'hero.meta.location': 'TP. Hồ Chí Minh, Việt Nam',
    'hero.meta.focus': 'LĨNH VỰC',
    'hero.meta.discipline': 'Kinh doanh Quốc tế',
    'hero.cta.primary': 'Xem Kinh nghiệm',
    'hero.cta.secondary': 'Liên hệ tôi',
    'hero.scroll': 'Cuộn',
    'hero.download': 'TẢI CV',
    'hero.contact': 'LIÊN HỆ TÔI',

    // About Section
    'about.label': 'GIỚI THIỆU',
    'about.title': 'Về tôi',
    'about.summary.title': 'Tóm tắt chuyên môn',
    'about.summary.p1':
      'Tôi là sinh viên năm 3 chuyên ngành Kinh doanh Quốc tế tại Đại học FPT với niềm đam mê mạnh mẽ về thương mại toàn cầu và hoạt động kinh doanh. Tôi thích nghiên cứu thị trường, hiểu hành vi khách hàng và phát triển các chiến lược tạo ra giá trị thực sự.',
    'about.summary.p2':
      'Hiện đang tìm kiếm cơ hội trong lĩnh vực kinh doanh quốc tế, marketing, logistics và hoạt động thương mại, nơi tôi có thể áp dụng tư duy phân tích, kỹ năng giao tiếp và sự nhiệt huyết học hỏi trong môi trường chuyên nghiệp.',
    'about.interests.title': 'Định hướng nghề nghiệp',
    'about.interest1': 'Kinh doanh Quốc tế',
    'about.interest2': 'Nghiên cứu Thị trường',
    'about.interest3': 'Phát triển Sản phẩm',
    'about.interest4': 'Vận hành Logistics',
    'about.interest5': 'Content Marketing',
    'about.interest6': 'Phân tích Kinh doanh',
    'about.interest7': 'Xuất nhập khẩu',
    'about.interest8': 'Chuỗi cung ứng',
    'about.stat1': 'NĂM HỌC',
    'about.stat2': 'KINH NGHIỆM',
    'about.stat3': 'CHỨNG CHỈ',
    'about.hobby.title': 'Sở thích',
    'about.hobby1': 'Rubiks Cube',
    'about.hobby2': 'Cầu lông',
    'about.hobby3': 'Tập gym',
    'about.hobby4': 'Chơi guitar',
    'about.hobby5': 'Đọc sách',
    'about.hobby6': 'Du lịch',
    'about.hobby7': 'Nhiếp ảnh',
    'about.hobby8': 'Taekwondo',
    'about.hobby9': 'Vovinam',

    // Skills Section
    'skills.label': 'CHUYÊN MÔN',
    'skills.title': 'Kỹ năng chuyên môn',
    'skills.business': 'Kỹ năng Kinh doanh',
    'skills.technical': 'Kỹ năng Công nghệ',
    'skills.language': 'Kỹ năng Ngoại ngữ',

    // Projects Section
    'projects.label': 'DANH MỤC DỰ ÁN',
    'projects.title': 'Dự án nổi bật',
    'projects.view': 'XEM CHI TIẾT DỰ ÁN →',

    // Experience Section
    'experience.label': 'HÀNH TRÌNH CHUYÊN MÔN',
    'experience.title': 'Kinh nghiệm & Hoạt động',
    'experience.responsibilities': 'TRÁCH NHIỆM CHÍNH',
    'experience.achievements': 'THÀNH TỰU CHÍNH',

    // Certificates Section
    'certificates.label': 'BẰNG CẤP & CHỨNG CHỈ',
    'certificates.title': 'Chứng chỉ & Bằng cấp',
    'certificates.score': 'ĐIỂM/TRẠNG THÁI',
    'certificates.date': 'NGÀY ĐẠT ĐƯỢC',
    'certificates.competencies': 'NĂNG LỰC CHÍNH',

    // Achievements Section
    'achievements.label': 'THÀNH TÍCH',
    'achievements.title': 'Thành tích & Giải thưởng',
    'achievements.impact': 'TÁC ĐỘNG ĐO LƯỜNG ĐƯỢC',

    // Contact
    'contact.label': 'LIÊN HỆ',
    'contact.title': 'Liên hệ với tôi',
    'contact.connect': 'Kết nối với tôi',
    'contact.intro':
      'Tôi đang tích cực tìm kiếm cơ hội trong lĩnh vực kinh doanh quốc tế, marketing, logistics và hoạt động thương mại. Dù bạn đang tìm kiếm một người học hỏi nhiệt huyết hay muốn thảo luận về các cơ hội tiềm năng, tôi rất mong được lắng nghe từ bạn.',
    'contact.email': 'EMAIL',
    'contact.phone': 'SỐ ĐIỆN THOẠI',
    'contact.location': 'VỊ TRÍ',
    'contact.networks': 'MẠNG XÃ HỘI CHUYÊN NGHIỆP',
    'contact.form.title': 'Gửi tin nhắn',
    'contact.form.name': 'TÊN CỦA BẠN',
    'contact.form.email': 'ĐỊA CHỈ EMAIL',
    'contact.form.subject': 'CHỦ ĐỀ',
    'contact.form.message': 'NỘI DUNG',
    'contact.form.send': 'GỬI TIN NHẮN',
    'contact.thanks': 'Cảm ơn bạn đã ghé thăm portfolio của tôi',
    'contact.copyright': '© 2026 Nguyễn Thế Anh. Bản quyền thuộc về.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
