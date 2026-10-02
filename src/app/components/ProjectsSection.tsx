import { Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ProjectsSection() {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: language === 'en'
        ? 'Hybrid ARIMAX-LSTM Model for Predicting Price Volatility of Vietnam’s Rice Exports'
        : 'Mô hình lai ARIMAX-LSTM để dự đoán biến động giá xuất khẩu gạo của Việt Nam',
      description: language === 'en'
        ? 'Graduation thesis applying a hybrid ARIMAX-LSTM model to analyze and forecast price volatility in Vietnam’s rice exports.'
        : 'Đồ án tốt nghiệp ứng dụng mô hình lai ARIMAX-LSTM để phân tích và dự đoán biến động giá xuất khẩu gạo của Việt Nam.',
      role: language === 'en' ? 'Graduation Thesis' : 'Đồ án Tốt nghiệp',
      thesisUrl: '/Final_Thesis_Revised_After_the_Report.pdf',
      responsibilities: language === 'en' ? [
        'Collected and prepared Vietnam rice export price data and relevant external variables',
        'Developed a hybrid model combining ARIMAX and LSTM forecasting methods',
        'Evaluated forecasting performance and analyzed price volatility patterns'
      ] : [
        'Thu thập và xử lý dữ liệu giá xuất khẩu gạo Việt Nam cùng các biến ngoại sinh liên quan',
        'Xây dựng mô hình dự báo lai kết hợp phương pháp ARIMAX và LSTM',
        'Đánh giá hiệu quả dự báo và phân tích xu hướng biến động giá'
      ],
      achievements: language === 'en' ? [
        'Completed an interdisciplinary research project combining international business and data analytics',
        'Applied quantitative forecasting methods to a practical Vietnamese export problem'
      ] : [
        'Hoàn thành nghiên cứu liên ngành kết hợp kinh doanh quốc tế và phân tích dữ liệu',
        'Ứng dụng phương pháp dự báo định lượng vào bài toán xuất khẩu thực tế của Việt Nam'
      ]
    },
    {
      title: language === 'en' ? 'FloodSense Product Development' : 'Phát triển sản phẩm FloodSense',
      projectUrl: 'https://www.facebook.com/profile.php?id=61583161011775',
      description: language === 'en'
        ? 'Product research and development project for Sony Vietnam, focusing on innovative flood sensing technology and smart solutions.'
        : 'Dự án nghiên cứu và phát triển sản phẩm tại Sony Việt Nam - Cần Thơ, tập trung vào công nghệ cảm biến lũ lụt sáng tạo và giải pháp thông minh.',
      role: language === 'en' ? 'Product Research Assistant' : 'Trợ lý Nghiên cứu Sản phẩm',
      responsibilities: language === 'en' ? [
        'Conducted market research and product analysis for flood detection solutions',
        'Collaborated with development team on product feature improvements',
        'Gathered user feedback and contributed to product enhancement strategies',
        'Documented research findings and presented recommendations to stakeholders'
      ] : [
        'Thực hiện nghiên cứu thị trường và phân tích sản phẩm cho giải pháp phát hiện lũ lụt',
        'Phối hợp với nhóm phát triển về cải tiến tính năng sản phẩm',
        'Thu thập phản hồi người dùng và đóng góp vào chiến lược nâng cao sản phẩm',
        'Ghi chép kết quả nghiên cứu và trình bày đề xuất cho các bên liên quan'
      ],
      achievements: language === 'en' ? [
        'Gained hands-on experience in product development lifecycle',
        'Developed analytical skills through market and product research',
        'Contributed valuable insights for product improvement strategies'
      ] : [
        'Có được kinh nghiệm thực tế trong chu trình phát triển sản phẩm',
        'Phát triển kỹ năng phân tích thông qua nghiên cứu thị trường và sản phẩm',
        'Đóng góp những hiểu biết có giá trị cho chiến lược cải thiện sản phẩm'
      ]
    },
    {
      title: language === 'en' ? 'Content Marketing Campaign - Coconut Cosmetics' : 'Chiến dịch Content Marketing - Mỹ phẩm Dừa',
      description: language === 'en'
        ? 'Social media marketing project for Coconut Cosmetic Bến Tre, focusing on content creation, customer engagement, and brand promotion.'
        : 'Dự án marketing mạng xã hội cho Mỹ phẩm Dừa Bến Tre, tập trung vào tạo nội dung, tương tác khách hàng và quảng bá thương hiệu.',
      role: language === 'en' ? 'Content Marketing Intern' : 'Thực tập sinh Content Marketing',
      responsibilities: language === 'en' ? [
        'Created engaging Facebook content to promote natural cosmetic products',
        'Developed customer response scripts for consistent brand communication',
        'Contributed creative content ideas for social media campaigns',
        'Analyzed customer engagement and feedback to optimize content strategy'
      ] : [
        'Tạo nội dung Facebook hấp dẫn để quảng bá sản phẩm mỹ phẩm thiên nhiên',
        'Phát triển kịch bản phản hồi khách hàng để giao tiếp thương hiệu nhất quán',
        'Đóng góp ý tưởng nội dung sáng tạo cho các chiến dịch mạng xã hội',
        'Phân tích tương tác và phản hồi khách hàng để tối ưu hóa chiến lược nội dung'
      ],
      achievements: language === 'en' ? [
        'Developed practical skills in social media marketing and content creation',
        'Enhanced understanding of customer behavior and brand communication',
        'Contributed to increasing brand awareness through creative content'
      ] : [
        'Phát triển kỹ năng thực tế trong marketing mạng xã hội và tạo nội dung',
        'Nâng cao hiểu biết về hành vi khách hàng và giao tiếp thương hiệu',
        'Đóng góp vào việc tăng nhận diện thương hiệu thông qua nội dung sáng tạo'
      ]
    },
    {
      title: language === 'en' ? 'Logistics Operations Management - Viettel' : 'Quản lý Vận hành Logistics - Viettel',
      description: language === 'en'
        ? 'Operations support project for Viettel Logistics, focusing on data management, reporting, and vehicle coordination planning.'
        : 'Tham gia hỗ trợ quản lý xe tải cho Viettel Logistics, tập trung vào quản lý dữ liệu, báo cáo và lập kế hoạch điều phối xe.',
      role: language === 'en' ? 'Vehicle Operations Staff' : 'Thực tập sinh phòng vận tải',
      responsibilities: language === 'en' ? [
        'Handled operational data for logistics and vehicle coordination',
        'Prepared periodic reports on operations performance and efficiency',
        'Supported planning for vehicle coordination and route optimization',
        'Maintained accurate records and documentation of operations activities'
      ] : [
        'Xử lý dữ liệu vận hành cho logistics và điều phối xe',
        'Chuẩn bị báo cáo định kỳ về hiệu suất và hiệu quả vận hành',
        'Hỗ trợ lập kế hoạch điều phối xe và tối ưu hóa lộ trình',
        'Duy trì hồ sơ và tài liệu chính xác về các hoạt động vận hành'
      ],
      achievements: language === 'en' ? [
        'Gained practical experience in logistics operations management',
        'Developed data handling and reporting skills in real business environment',
        'Enhanced understanding of supply chain and vehicle coordination processes'
      ] : [
        'Có được kinh nghiệm thực tế trong quản lý vận hành logistics',
        'Phát triển kỹ năng xử lý dữ liệu và báo cáo trong môi trường kinh doanh thực tế',
        'Nâng cao hiểu biết về chuỗi cung ứng và quy trình điều phối xe'
      ]
    },
    {
      title: language === 'en' ? 'Community Charity Projects' : 'Các dự án Từ thiện Cộng đồng',
      description: language === 'en'
        ? 'Multiple charity and fundraising projects including "Chung Một Nhịp Đập", "Trao Gửi Yêu Thương", and "Khúc Giao Mùa".'
        : 'Nhiều dự án từ thiện và gây quỹ bao gồm "Chung Một Nhịp Đập", "Trao Gửi Yêu Thương" và "Khúc Giao Mùa".',
      role: language === 'en' ? 'Project Organizer & Coordinator' : 'Người tổ chức & Điều phối Dự án',
      responsibilities: language === 'en' ? [
        'Organized and managed charity fundraising events and campaigns',
        'Coordinated sales-based fundraising activities',
        'Engaged with community members to promote charitable causes',
        'Managed team coordination and event execution'
      ] : [
        'Tổ chức và quản lý các sự kiện và chiến dịch gây quỹ từ thiện',
        'Điều phối các hoạt động gây quỹ dựa trên bán hàng',
        'Tương tác với các thành viên cộng đồng để thúc đẩy hoạt động từ thiện',
        'Quản lý điều phối nhóm và thực hiện sự kiện'
      ],
      achievements: language === 'en' ? [
        'Successfully organized multiple charity campaigns serving local communities',
        'Developed teamwork, event management, and leadership skills',
        'Contributed to meaningful social impact through community service'
      ] : [
        'Tổ chức thành công nhiều chiến dịch từ thiện phục vụ cộng đồng địa phương',
        'Phát triển kỹ năng làm việc nhóm, quản lý sự kiện và lãnh đạo',
        'Đóng góp vào tác động xã hội có ý nghĩa thông qua dịch vụ cộng đồng'
      ]
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen px-16 py-20 bg-gray-50">
      <div className="max-w-5xl w-full">
        <div className="mb-12">
          <p className="text-xs tracking-widest text-gray-500 mb-2">{t('projects.label')}</p>
          <h2 className="text-5xl tracking-tight">{t('projects.title')}</h2>
          <div className="w-20 h-1 bg-black mt-4"></div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 group">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg mb-2 tracking-wide group-hover:text-gray-600 transition-colors">{project.title}</h3>
                    <p className="text-xs tracking-wider text-gray-500 mb-3">{project.role}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors flex-shrink-0" />
                </div>

                <p className="text-sm text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <p className="text-xs tracking-wider mb-3">{language === 'en' ? 'KEY RESPONSIBILITIES' : 'TRÁCH NHIỆM CHÍNH'}</p>
                  <ul className="space-y-2">
                    {project.responsibilities.slice(0, 3).map((resp, i) => (
                      <li key={i} className="text-xs text-gray-700 flex gap-2">
                        <span className="text-black mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs tracking-wider mb-3">{language === 'en' ? 'KEY ACHIEVEMENTS' : 'THÀNH TỰU CHÍNH'}</p>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="text-xs text-gray-700 flex gap-2">
                        <span className="text-black mt-1">▪</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 px-8 py-4 bg-gray-50 flex flex-wrap items-center gap-x-6 gap-y-3">
                {'projectUrl' in project && project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs tracking-wider hover:text-gray-600 transition-colors"
                  >
                    {language === 'en' ? 'VIEW PROJECT' : 'XEM DỰ ÁN'}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button className="text-xs tracking-wider hover:text-gray-600 transition-colors">
                    {t('projects.view')}
                  </button>
                )}

                {'thesisUrl' in project && project.thesisUrl && (
                  <a
                    href={project.thesisUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs tracking-wider hover:text-gray-600 transition-colors"
                  >
                    {language === 'en' ? 'VIEW FINAL THESIS' : 'XEM LUẬN VĂN'}
                    <Download className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
