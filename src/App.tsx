import { ThemeProvider } from '@/components/Theme/ThemeProvider';
import Navbar from '@/components/NavBar/Navbar';
import HeroSection from '@/components/Home/HeroSection';
import AboutSection from '@/components/About/AboutSection';
import SkillsSection from '@/components/Skills/SkillsSection';
import ExperienceSection from '@/components/Experience/ExperienceSection';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import ContactSection from '@/components/Contact/ContactSection';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ls-rathore-portfolio-theme">
      <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}
