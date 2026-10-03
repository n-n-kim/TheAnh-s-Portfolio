import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageBubble } from './components/LanguageBubble';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CertificatesSection } from './components/CertificatesSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';

import './design-system/tokens.css';
import './design-system/globals.css';

export default function App() {
  return (
    <LanguageProvider>
      <LanguageBubble />
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="certificates">
          <CertificatesSection />
        </section>

        <section id="achievements">
          <AchievementsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </LanguageProvider>
  );
}