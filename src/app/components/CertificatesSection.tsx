import { Award, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CertificatesSection() {
  const { t, language } = useLanguage();

  const certificates = [
    {
      title: language === 'en' ? 'Project Management Principles and Practices' : 'Nguyên tắc và Thực hành Quản lý Dự án',
      issuer: 'University of California, Irvine',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'January 2026' : 'Tháng 1/2026',
      skills: language === 'en'
        ? ['Project Management', 'Agile Methodologies', 'Risk Management', 'Stakeholder Management']
        : ['Quản lý Dự án', 'Phương pháp Agile', 'Quản lý Rủi ro', 'Quản lý Stakeholder']
    },
    {
      title: language === 'en' ? 'Microsoft Office Specialist: Excel Associate (Excel and Excel 2019)' : 'Chứng chỉ MOS Excel',
      issuer: 'Microsoft',
      score: language === 'en' ? 'Certified' : 'Đã chứng nhận',
      date: language === 'en' ? 'September 2025' : 'Tháng 9/2025',
      skills: language === 'en'
        ? ['Microsoft Excel', 'Data Analysis', 'Spreadsheet Management', 'Formulas & Functions']
        : ['Microsoft Excel', 'Phân tích dữ liệu', 'Quản lý Bảng tính', 'Công thức & Hàm']
    },
    {
      title: language === 'en' ? 'European Business Law Specialization' : 'Chuyên ngành Luật Kinh doanh Châu Âu',
      issuer: 'Lund University',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'September 2025' : 'Tháng 9/2025',
      skills: language === 'en'
        ? ['International Relations', 'Tax Law', 'Business Law', 'Legal Compliance']
        : ['Quan hệ Quốc tế', 'Luật Thuế', 'Luật Kinh doanh', 'Tuân thủ Pháp lý']
    },
    {
      title: language === 'en' ? 'Academic English: Writing Specialization' : 'Chuyên ngành Tiếng Anh Học thuật: Viết',
      issuer: 'University of California, Irvine – The Paul Merage School of Business',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'June 2025' : 'Tháng 6/2025',
      skills: language === 'en'
        ? ['Academic Writing', 'English Composition', 'Research Writing', 'Critical Analysis']
        : ['Viết Học thuật', 'Soạn thảo Tiếng Anh', 'Viết Nghiên cứu', 'Phân tích Phê bình']
    },
    {
      title: language === 'en' ? 'Quantitative Techniques' : 'Kỹ thuật Định lượng',
      issuer: 'Columbia University',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'February 2025' : 'Tháng 2/2025',
      skills: language === 'en'
        ? ['Statistical Analysis', 'Quantitative Methods', 'Data Interpretation', 'Business Analytics']
        : ['Phân tích Thống kê', 'Phương pháp Định lượng', 'Diễn giải Dữ liệu', 'Phân tích Kinh doanh']
    },
    {
      title: language === 'en' ? 'International Marketing & Cross Industry Growth Specialization' : 'Marketing Quốc tế & Tăng trưởng Liên ngành',
      issuer: 'Yonsei University',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'January 2025' : 'Tháng 1/2025',
      skills: language === 'en'
        ? ['International Marketing', 'Global Strategy', 'Market Entry', 'Cross-Industry Analysis']
        : ['Marketing Quốc tế', 'Chiến lược Toàn cầu', 'Thâm nhập Thị trường', 'Phân tích Liên ngành']
    },
    {
      title: language === 'en' ? 'Information Systems Specialization' : 'Chuyên ngành Hệ thống Thông tin',
      issuer: 'University of Minnesota',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'September 2024' : 'Tháng 9/2024',
      skills: language === 'en'
        ? ['Information Systems', 'Database Management', 'IT Governance', 'System Analysis']
        : ['Hệ thống Thông tin', 'Quản lý Cơ sở dữ liệu', 'Quản trị CNTT', 'Phân tích Hệ thống']
    },
    {
      title: language === 'en' ? 'Human Resource Management: HR for People Managers Specialization' : 'Quản lý Nhân sự: HR cho Quản lý',
      issuer: 'University of Minnesota',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'May 2024' : 'Tháng 5/2024',
      skills: language === 'en'
        ? ['HR Management', 'Talent Acquisition', 'Performance Management', 'Employee Relations']
        : ['Quản lý Nhân sự', 'Tuyển dụng', 'Quản lý Hiệu suất', 'Quan hệ Người lao động']
    },
    {
      title: language === 'en' ? 'Leading: Human Resource Management and Leadership Specialization' : 'Lãnh đạo: Quản lý Nhân sự và Lãnh đạo',
      issuer: 'Macquarie University',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'January 2024' : 'Tháng 1/2024',
      skills: language === 'en'
        ? ['HR Management', 'Leadership Skills', 'Team Management', 'Organizational Behavior']
        : ['Quản lý Nhân sự', 'Kỹ năng Lãnh đạo', 'Quản lý Nhóm', 'Hành vi Tổ chức']
    },
    {
      title: language === 'en' ? 'Academic Skills for University Success Specialization' : 'Kỹ năng Học thuật để Thành công tại Đại học',
      issuer: 'The University of Sydney Business School',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'August 2023' : 'Tháng 8/2023',
      skills: language === 'en'
        ? ['Academic Skills', 'Study Strategies', 'Critical Thinking', 'Research Methods']
        : ['Kỹ năng Học thuật', 'Chiến lược Học tập', 'Tư duy Phê bình', 'Phương pháp Nghiên cứu']
    },
    {
      title: language === 'en' ? 'Fundamentals of Digital Marketing' : 'Cơ bản về Marketing Số',
      issuer: 'Google Digital Garage',
      score: language === 'en' ? 'Certified' : 'Đã chứng nhận',
      date: language === 'en' ? 'June 2023' : 'Tháng 6/2023',
      skills: language === 'en'
        ? ['Digital Marketing', 'SEO Basics', 'Social Media', 'Online Advertising']
        : ['Marketing Số', 'Cơ bản SEO', 'Mạng xã hội', 'Quảng cáo Trực tuyến']
    },
    {
      title: language === 'en' ? 'Business Analysis Foundations: Competencies' : 'Nền tảng Phân tích Kinh doanh: Năng lực',
      issuer: 'LinkedIn',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'July 2023' : 'Tháng 7/2023',
      skills: language === 'en'
        ? ['Business Analysis', 'Analytical Thinking', 'Problem Solving', 'Communication Skills']
        : ['Phân tích Kinh doanh', 'Tư duy Phân tích', 'Giải quyết Vấn đề', 'Kỹ năng Giao tiếp']
    },
    {
      title: language === 'en' ? 'Business Analysis: Essential Tools and Techniques' : 'Phân tích Kinh doanh: Công cụ và Kỹ thuật Thiết yếu',
      issuer: 'LinkedIn',
      score: language === 'en' ? 'Completed' : 'Hoàn thành',
      date: language === 'en' ? 'July 2023' : 'Tháng 7/2023',
      skills: language === 'en'
        ? ['Business Analysis', 'Requirements Gathering', 'Process Modeling', 'Stakeholder Analysis']
        : ['Phân tích Kinh doanh', 'Thu thập Yêu cầu', 'Mô hình hóa Quy trình', 'Phân tích Stakeholder']
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen px-16 py-20 bg-gray-50">
      <div className="max-w-5xl w-full">
        <div className="mb-12">
          <p className="text-xs tracking-widest text-gray-500 mb-2">{t('certificates.label')}</p>
          <h2 className="text-5xl tracking-tight">{t('certificates.title')}</h2>
          <div className="w-20 h-1 bg-black mt-4"></div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white border border-gray-200 hover:border-black transition-all duration-300 group">
              <div className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="tracking-wide mb-1 text-sm">{cert.title}</h3>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 tracking-wider">{t('certificates.score')}</p>
                    <p className="mt-1 text-sm">{cert.score}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 tracking-wider">{t('certificates.date')}</p>
                    <p className="mt-1 text-sm">{cert.date}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs tracking-wider text-gray-500 mb-3">{t('certificates.competencies')}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cert.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-black flex-shrink-0" />
                        <span className="text-xs text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
