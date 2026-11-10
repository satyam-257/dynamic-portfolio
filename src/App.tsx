import React, { useState, useEffect, useRef } from 'react';
import { Project, NAV_LINKS } from './data/portfolioData';
import { Header } from './components/Header';
import { LogicCubeCanvas } from './components/LogicCubeCanvas';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { StackSection } from './sections/StackSection';
import { MetricsSection } from './sections/MetricsSection';
import { ContactSection } from './sections/ContactSection';
import { useScrollAnimation } from './hooks/useScrollAnimation';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const appContainerRef = useRef<HTMLDivElement>(null);

  // Initialize smooth scroll animation system
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

  // Smooth navigation with sticky header offset
  const handleNavigate = (sectionId: string) => {
    const targetId = sectionId === 'intro' ? 'intro' : sectionId;
    let el = document.getElementById(targetId);
    if (!el && targetId === 'intro') {
      el = document.getElementById('hero');
    }
    if (el) {
      const headerOffset = 75;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: reducedMotion ? 'auto' : 'smooth',
      });

      window.history.pushState(null, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
  };

  // Active section tracking on scroll
  useEffect(() => {
    const sectionIds = ['intro', 'projects', 'stack', 'metrics', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headerOffset = 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        let el = document.getElementById(id);
        if (!el && id === 'intro') {
          el = document.getElementById('hero');
        }
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

    // Check initial hash in URL
    const hash = window.location.hash.replace('#', '');
    if (hash && (NAV_LINKS.some((l) => l.id === hash) || hash === 'intro' || hash === 'hero' || hash === 'contact')) {
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
      {/* Minimal Sticky Top Navigation Bar */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={handleToggleReducedMotion}
      />

      {/* Persistent Fixed 3D Canvas (Hyper-Realistic 3D Mechanical Logic Cube) */}
      <LogicCubeCanvas reducedMotion={reducedMotion} />

      {/* Main Architectural Flow */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {/* Hero Section */}
        <HeroSection onNavigate={handleNavigate} reducedMotion={reducedMotion} />

        {/* 01: Projects */}
        <ProjectsSection
          onOpenProjectModal={(p) => setSelectedProject(p)}
          onNavigate={handleNavigate}
        />

        {/* 02: Stack */}
        <StackSection onNavigate={handleNavigate} />

        {/* 03: Metrics */}
        <MetricsSection onNavigate={handleNavigate} />

        {/* 04: Contact */}
        <ContactSection
          onShowToast={(msg) => setToastMessage(msg)}
          onNavigate={handleNavigate}
        />
      </main>

      {/* Global Architectural Footer */}
      <Footer onNavigate={handleNavigate} reducedMotion={reducedMotion} />

      {/* Project Deep-Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Action Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
};
export default App;
