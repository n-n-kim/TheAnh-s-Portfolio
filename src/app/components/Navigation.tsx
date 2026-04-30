import { Home, User, Code, Briefcase, FolderOpen, Award, Trophy, Mail, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('nav.home'), icon: Home },
    { id: 'about', label: t('nav.about'), icon: User },
    { id: 'skills', label: t('nav.skills'), icon: Code },
    { id: 'projects', label: t('nav.projects'), icon: FolderOpen },
    { id: 'experience', label: t('nav.experience'), icon: Briefcase },
    { id: 'certificates', label: t('nav.certificates'), icon: Award },
    { id: 'achievements', label: t('nav.achievements'), icon: Trophy },
    { id: 'contact', label: t('nav.contact'), icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-black text-white border-r border-gray-800 flex flex-col">
      <div className="p-8 border-b border-gray-800">
        <h1 className="tracking-tight text-sm">NGUYỄN THẾ ANH</h1>
        <p className="text-xs text-gray-400 mt-1 tracking-wider">{t('nav.portfolio')}</p>
      </div>

      <div className="px-8 py-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Languages className="w-4 h-4 text-gray-400" />
          <button
            onClick={() => setLanguage(language === 'en' ? 'vi' : 'en')}
            className="flex-1 px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-xs tracking-wider"
          >
            {language === 'en' ? '🇻🇳 Tiếng Việt' : '🇬🇧 English'}
          </button>
        </div>
      </div>

      <div className="flex-1 py-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full px-8 py-4 flex items-center gap-3 transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm tracking-wide">{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-8 border-t border-gray-800">
        <p className="text-xs text-gray-500 tracking-wider">{t('nav.rights')}</p>
      </div>
    </nav>
  );
}
