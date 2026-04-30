import { useLanguage } from '../contexts/LanguageContext';

export function SkillsSection() {
  const { t, language } = useLanguage();

  const businessSkills = [
    { name: language === 'en' ? 'Problem Solving' : 'Giải quyết vấn đề', level: 85 },
    { name: language === 'en' ? 'Critical Thinking' : 'Tư duy phản biện', level: 82 },
    { name: language === 'en' ? 'Business Research & Reporting' : 'Nghiên cứu & Báo cáo Kinh doanh', level: 80 },
    { name: language === 'en' ? 'Market Research' : 'Nghiên cứu Thị trường', level: 78 },
    { name: language === 'en' ? 'Content Planning' : 'Lập kế hoạch Nội dung', level: 75 },
    { name: language === 'en' ? 'Customer Response Scripting' : 'Viết kịch bản phản hồi KH', level: 72 },
    // { name: language === 'en' ? 'Operations Data Handling' : 'Xử lý dữ liệu Vận hành', level: 70 },
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

  return (
    <div className="flex items-center justify-center min-h-screen px-16 py-20">
      <div className="max-w-5xl w-full">
        <div className="mb-12">
          <p className="text-xs tracking-widest text-gray-500 mb-2">{t('skills.label')}</p>
          <h2 className="text-5xl tracking-tight">{t('skills.title')}</h2>
          <div className="w-20 h-1 bg-black mt-4"></div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="text-xl mb-6 tracking-wide pb-3 border-b border-black">{t('skills.business')}</h3>
            <div className="space-y-5">
              {businessSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-gray-200">
                    <div className="h-full bg-black transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="text-xl mb-6 tracking-wide pb-3 border-b border-black">{t('skills.technical')}</h3>
            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-gray-200">
                    <div className="h-full bg-black transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 border border-gray-200">
            <h3 className="text-xl mb-6 tracking-wide pb-3 border-b border-black">{t('skills.language')}</h3>
            <div className="space-y-5">
              {languageSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="text-sm block">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.note}</span>
                    </div>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-gray-200">
                    <div className="h-full bg-black transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
