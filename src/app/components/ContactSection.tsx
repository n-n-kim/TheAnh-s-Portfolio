import { Mail, Phone, Linkedin, MapPin, Github, Twitter, Send, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center justify-center min-h-screen px-16 py-20 bg-gray-50">
      <div className="max-w-5xl w-full">
        <div className="mb-12">
          <p className="text-xs tracking-widest text-gray-500 mb-2">{t('contact.label')}</p>
          <h2 className="text-5xl tracking-tight">{t('contact.title')}</h2>
          <div className="w-20 h-1 bg-black mt-4"></div>
        </div>

        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl mb-6 tracking-wide">{t('contact.connect')}</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              {t('contact.intro')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs tracking-wider text-gray-500 mb-1">{t('contact.email')}</p>
                  <p className="tracking-wide text-sm">theanh30112004@gmail.com </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs tracking-wider text-gray-500 mb-1">{t('contact.phone')}</p>
                  <p className="tracking-wide">0939303600</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-black flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs tracking-wider text-gray-500 mb-1">{t('contact.location')}</p>
                  <p className="tracking-wide">Vietnam</p>
                  <p className="text-sm text-gray-600">FPT University</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-xs tracking-wider text-gray-500 mb-4">{t('contact.networks')}</p>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/theanhne04/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.facebook.com/theanhne04/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/_wseyeong_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200 shadow-sm">
            <h3 className="text-xl mb-6 tracking-wide">{t('contact.form.title')}</h3>

            <form className="space-y-6">
              <div>
                <label className="block text-xs tracking-wider text-gray-500 mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wider text-gray-500 mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wider text-gray-500 mb-2">{t('contact.form.subject')}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wider text-gray-500 mb-2">{t('contact.form.message')}</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your opportunity or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>{t('contact.form.send')}</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center py-8 border-t border-gray-300">
          <p className="text-sm text-gray-600 mb-2">{t('contact.thanks')}</p>
          <p className="text-xs text-gray-500 tracking-wider">{t('contact.copyright')}</p>
        </div>
      </div>
    </div>
  );
}
