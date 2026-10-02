import { Trophy, Star, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AchievementsSection() {
  const { t, language } = useLanguage();

  const achievements = [
    {
      icon: Trophy,
      category: language === 'en' ? 'Academic Excellence' : 'Xuất sắc Học tập',
      title: language === 'en' ? 'Excellent Student - SU26 Semester' : 'Sinh viên Giỏi - Học kỳ SU26',
      description: language === 'en'
        ? 'Recognized for outstanding academic performance in the Summer 2026 semester at FPT University'
        : 'Được công nhận danh hiệu Sinh viên Giỏi trong học kỳ Hè 2026 tại Đại học FPT',
      date: language === 'en' ? 'Summer 2026' : 'Hè 2026',
      impact: language === 'en' ? 'Sustained excellent academic performance through the final semester' : 'Duy trì thành tích học tập xuất sắc đến học kỳ cuối'
    },
    {
      icon: Trophy,
      category: language === 'en' ? 'Academic Excellence' : 'Xuất sắc Học tập',
      title: language === 'en' ? 'Excellent Student - SP26 Semester' : 'Sinh viên Giỏi - Học kỳ SP26',
      description: language === 'en'
        ? 'Recognized for outstanding academic performance in Spring 2026 semester at FPT University'
        : 'Được công nhận vì thành tích học tập tốt trong học kỳ Xuân 2026 tại Đại học FPT',
      date: language === 'en' ? 'Spring 2026' : 'Xuân 2026',
      impact: language === 'en' ? 'Maintained high GPA and consistent academic performance' : 'Duy trì GPA cao và thành tích học tập ổn định'
    },
    {
      icon: Star,
      category: language === 'en' ? 'Graduation' : 'Tốt nghiệp',
      title: language === 'en' ? 'Graduated with Honors' : 'Tốt nghiệp loại Giỏi',
      description: language === 'en'
        ? 'Graduated from FPT University with an overall GPA of 8.2/10'
        : 'Tốt nghiệp Đại học FPT loại Giỏi với GPA toàn khóa 8,2/10',
      date: '2026',
      impact: language === 'en' ? 'Overall GPA: 8.2/10' : 'GPA toàn khóa: 8,2/10'
    },
    {
      icon: Trophy,
      category: language === 'en' ? 'Academic Excellence' : 'Xuất sắc Học tập',
      title: language === 'en' ? 'Excellent Student - FA25 Semester' : 'Sinh viên Giỏi - Học kỳ FA25',
      description: language === 'en'
        ? 'Recognized for outstanding academic performance in Fall 2025 semester at FPT University'
        : 'Được công nhận vì thành tích học tập tốt trong học kỳ Thu 2025 tại Đại học FPT',
      date: language === 'en' ? 'Fall 2025' : 'Thu 2025',
      impact: language === 'en' ? 'Demonstrated consistent excellence across multiple semesters' : 'Thể hiện sự xuất sắc nhất quán qua nhiều học kỳ'
    },
    {
      icon: Trophy,
      category: language === 'en' ? 'Academic Excellence' : 'Xuất sắc Học tập',
      title: language === 'en' ? 'Excellent Student - SP25 Semester' : 'Sinh viên Giỏi - Học kỳ SP25',
      description: language === 'en'
        ? 'Recognized for outstanding academic performance in Spring 2025 semester at FPT University'
        : 'Được công nhận vì thành tích học tập tốt trong học kỳ Xuân 2025 tại Đại học FPT',
      date: language === 'en' ? 'Spring 2025' : 'Xuân 2025',
      impact: language === 'en' ? 'Demonstrated consistent excellence across multiple semesters' : 'Thể hiện sự xuất sắc nhất quán qua nhiều học kỳ'
    },
    {
      icon: Star,
      category: language === 'en' ? 'Professional Development' : 'Phát triển Chuyên môn',
      title: language === 'en' ? 'Multiple Professional Certifications' : 'Nhiều Chứng chỉ Chuyên nghiệp',
      description: language === 'en'
        ? 'Completed 7+ professional certifications from leading institutions including Microsoft, Columbia, Yonsei, and Google'
        : 'Hoàn thành 7+ chứng chỉ chuyên nghiệp từ các tổ chức hàng đầu bao gồm Microsoft, Columbia, Yonsei và Google',
      date: language === 'en' ? '2023 - 2025' : '2023 - 2025',
      impact: language === 'en' ? 'Built strong foundation in business analysis, marketing, and leadership' : 'Xây dựng nền tảng vững chắc về phân tích kinh doanh, marketing và lãnh đạo'
    },
    {
      icon: Users,
      category: language === 'en' ? 'Leadership' : 'Lãnh đạo',
      title: language === 'en' ? 'Club Secretary & HR Manager' : 'Thư ký & Quản lý Nhân sự CLB',
      description: language === 'en'
        ? 'Led HR management and administrative operations for FPT Musical Instruments Club, managing members and coordinating activities'
        : 'Lãnh đạo quản lý nhân sự và hoạt động hành chính cho CLB Nhạc cụ FPT, quản lý thành viên và điều phối hoạt động',
      date: language === 'en' ? '2022 - 2023' : '2022 - 2023',
      impact: language === 'en' ? 'Developed leadership and organizational management skills' : 'Phát triển kỹ năng lãnh đạo và quản lý tổ chức'
    },
    {
      icon: TrendingUp,
      category: language === 'en' ? 'Community Impact' : 'Tác động Cộng đồng',
      title: language === 'en' ? 'Charity Project Organizer' : 'Tổ chức Dự án Từ thiện',
      description: language === 'en'
        ? 'Successfully organized and managed multiple charity fundraising projects contributing to community welfare'
        : 'Tổ chức và quản lý thành công nhiều dự án gây quỹ từ thiện đóng góp cho phúc lợi cộng đồng',
      date: '2024',
      impact: language === 'en' ? 'Contributed to 3 major charity campaigns serving local communities' : 'Đóng góp vào 3 chiến dịch từ thiện lớn phục vụ cộng đồng địa phương'
    },
    {
      icon: Star,
      category: language === 'en' ? 'Teaching & Mentoring' : 'Giảng dạy & Hướng dẫn',
      title: language === 'en' ? 'English Teaching Assistant' : 'Trợ giảng Tiếng Anh',
      description: language === 'en'
        ? 'Served as teaching assistant for 2 years, supporting English education and student development'
        : 'Phục vụ với vai trò trợ giảng trong 2 năm, hỗ trợ giáo dục tiếng Anh và phát triển học viên',
      date: language === 'en' ? '2023 - 2025' : '2023 - 2025',
      impact: language === 'en' ? 'Enhanced teaching skills and contributed to student learning success' : 'Nâng cao kỹ năng giảng dạy và đóng góp vào thành công học tập của học viên'
    },
    {
      icon: Trophy,
      category: language === 'en' ? 'Sports & Leadership' : 'Thể thao & Lãnh đạo',
      title: language === 'en' ? 'Taekwondo Instructor & Class Manager' : 'Huấn luyện viên & Quản lý Lớp Taekwondo',
      description: language === 'en'
        ? 'Taught and managed Taekwondo classes for 2 years, developing discipline, leadership, and communication skills'
        : 'Giảng dạy và quản lý lớp Taekwondo trong 2 năm, phát triển kỷ luật, lãnh đạo và kỹ năng giao tiếp',
      date: language === 'en' ? '2017 - 2019' : '2017 - 2019',
      impact: language === 'en' ? 'Built strong foundation in leadership and classroom management' : 'Xây dựng nền tảng vững chắc về lãnh đạo và quản lý lớp học'
    },
    {
      icon: Users,
      category: language === 'en' ? 'Practical Experience' : 'Kinh nghiệm Thực tế',
      title: language === 'en' ? 'Multiple Industry Internships' : 'Thực tập đa dạng lĩnh vực',
      description: language === 'en'
        ? 'Completed internships and projects across diverse sectors including technology, cosmetics, and logistics'
        : 'Hoàn thành thực tập và dự án trong các lĩnh vực đa dạng bao gồm công nghệ, mỹ phẩm và logistics',
      date: language === 'en' ? '2025 - 2026' : '2025 - 2026',
      impact: language === 'en' ? 'Gained hands-on experience in product development, marketing, and operations' : 'Có được kinh nghiệm thực tế trong phát triển sản phẩm, marketing và vận hành'
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen px-16 py-20">
      <div className="max-w-5xl w-full">
        <div className="mb-12">
          <p className="text-xs tracking-widest text-gray-500 mb-2">{t('achievements.label')}</p>
          <h2 className="text-5xl tracking-tight">{t('achievements.title')}</h2>
          <div className="w-20 h-1 bg-black mt-4"></div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="bg-gray-50 border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-wider text-gray-500 mb-1">{achievement.category.toUpperCase()}</p>
                      <h3 className="tracking-wide text-sm">{achievement.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  <div className="pt-4 border-t border-gray-300">
                    <p className="text-xs tracking-wider text-gray-500 mb-2">{t('achievements.impact')}</p>
                    <p className="text-sm">{achievement.impact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-4 gap-6">
          <div className="text-center p-6 bg-black text-white">
            <p className="text-3xl mb-2">4</p>
            <p className="text-xs tracking-wider">{language === 'en' ? 'YEARS' : 'NĂM'}</p>
          </div>
          <div className="text-center p-6 bg-black text-white">
            <p className="text-3xl mb-2">7+</p>
            <p className="text-xs tracking-wider">{language === 'en' ? 'CERTIFICATES' : 'CHỨNG CHỈ'}</p>
          </div>
          <div className="text-center p-6 bg-black text-white">
            <p className="text-3xl mb-2">4x</p>
            <p className="text-xs tracking-wider">{language === 'en' ? 'GOOD' : 'GIỎI'}</p>
          </div>
          <div className="text-center p-6 bg-black text-white">
            <p className="text-3xl mb-2">7+</p>
            <p className="text-xs tracking-wider">{language === 'en' ? 'EXPERIENCES' : 'KINH NGHIỆM'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
