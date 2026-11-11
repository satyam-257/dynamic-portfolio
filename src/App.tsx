import React, { useState, useEffect, useRef } from 'react';
import { ProjectCaseStudy, NAV_LINKS } from './data/portfolioData';
import { Header } from './components/Header';
import { LogicCubeCanvas } from './components/LogicCubeCanvas';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperimentsSection } from './sections/ExperimentsSection';
import { StackSection } from './sections/StackSection';
import { AchievementsSection } from './sections/AchievementsSection';
import { ContactSection } from './sections/ContactSection';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const appContainerRef = useRef<HTMLDivElement>(null);

  useScrollAnimation([reducedMotion]);

  const handleToggleReducedMotion = () => {
    setReducedMotion((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('reduced-motion-active');
        setToastMessage('Reduced motion active');
      } else {
        document.documentElement.classList.remove('reduced-motion-active');
        setToastMessage('Smooth studio motion active');
      }
      return next;
    });
  };

  const handleNavigate = (sectionId: string) => {
    const targetId = sectionId === 'intro' ? 'home' : sectionId;
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: reducedMotion ? 'auto' : 'smooth',
      });

      window.history.pushState(null, '', `#${targetId}`);
      setActiveSection(targetId);
    }
  };

  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'experiments', 'skills', 'achievements', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerOffset = 150;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - headerOffset;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const hash = window.location.hash.replace('#', '');
    if (hash && (NAV_LINKS.some((l) => l.id === hash) || sectionIds.includes(hash))) {
      setTimeout(() => {
        handleNavigate(hash);
      }, 150);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={appContainerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bg-canvas)',
        color: 'var(--text-primary)',
        position: 'relative',
      }}
      className={reducedMotion ? 'reduced-motion-active' : ''}
    >
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={handleToggleReducedMotion}
      />

      {/* Subtle 3D Studio Architectural Centerpiece */}
      <LogicCubeCanvas reducedMotion={reducedMotion} />

      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <HeroSection onNavigate={handleNavigate} reducedMotion={reducedMotion} />

        <AboutSection />

        <ProjectsSection
          onOpenProjectModal={(p) => setSelectedProject(p)}
          onNavigate={handleNavigate}
        />

        <ExperimentsSection />

        <StackSection onNavigate={handleNavigate} />

        <AchievementsSection />

        <ContactSection
          onShowToast={(msg) => setToastMessage(msg)}
          onNavigate={handleNavigate}
        />
      </main>

      <Footer onNavigate={handleNavigate} reducedMotion={reducedMotion} />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};

export default App;
