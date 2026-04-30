import { Download, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import matongPortrait from '../../imports/matong.png';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center min-h-screen px-16 py-20">
      <div className="max-w-5xl w-full">
        <div className="flex items-center gap-16">
          <div className="flex-1">
            <div className="inline-block px-4 py-1 border border-black mb-6">
              <p className="text-xs tracking-widest">{t('hero.title')}</p>
            </div>

            <h1 className="text-6xl mb-6 tracking-tight">
              {t('hero.greeting')}<br />
              <span className="inline-block mt-2">{t('hero.name')}</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              {t('hero.intro')}
            </p>

            <div className="mb-12 p-6 border-l-2 border-black bg-gray-50">
              <p className="text-sm tracking-wide">{t('hero.objective.title')}</p>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {t('hero.objective.text')}
              </p>
            </div>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-black text-white hover:bg-gray-900 transition-all duration-300 flex items-center gap-2 group">
                <Download className="w-4 h-4" />
                <span className="tracking-wide">{t('hero.download')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="tracking-wide">{t('hero.contact')}</span>
              </button>
            </div>
          </div>

          <div className="w-80 h-80 rounded-sm border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={matongPortrait}
              alt="Professional Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
