import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center min-h-screen px-16 py-20 bg-gray-50">
      <div className="max-w-5xl w-full">
        <div className="mb-12">
          <p className="text-xs tracking-widest text-gray-500 mb-2">{t('about.label')}</p>
          <h2 className="text-5xl tracking-tight">{t('about.title')}</h2>
          <div className="w-20 h-1 bg-black mt-4"></div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          {/* <div>
            <h3 className="text-xl mb-4 tracking-wide">{t('about.summary.title')}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('about.summary.p1')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('about.summary.p2')}
            </p>
          </div> */}

          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl mb-6 tracking-wide">{t('about.interests.title')}</h3>
            <ul className="space-y-3">
              {[
                t('about.interest1'),
                t('about.interest2'),
                t('about.interest3'),
                t('about.interest4'),
                t('about.interest5'),
                t('about.interest6'),
                t('about.interest7'),
                t('about.interest8')
              ].map((interest, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black"></div>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl mb-6 tracking-wide">{t('about.hobby.title')}</h3>
            <ul className="space-y-3">
              {[
                t('about.hobby1'),
                t('about.hobby2'),
                t('about.hobby3'),
                t('about.hobby4'),
                t('about.hobby5'),
                t('about.hobby6'),
                t('about.hobby7'),
                t('about.hobby8'),
                t('about.hobby9')
                // t('about.interest8')
              ].map((interest, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-black"></div>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>


        </div>

        <div className="mt-12 grid grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white border border-gray-200">
            <p className="text-4xl mb-2">4</p>
            <p className="text-sm tracking-wider text-gray-600">{t('about.stat1')}</p>
          </div>
          <div className="text-center p-8 bg-white border border-gray-200">
            <p className="text-4xl mb-2">7+</p>
            <p className="text-sm tracking-wider text-gray-600">{t('about.stat2')}</p>
          </div>
          <div className="text-center p-8 bg-white border border-gray-200">
            <p className="text-4xl mb-2">7+</p>
            <p className="text-sm tracking-wider text-gray-600">{t('about.stat3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
