import React, { useState, useEffect } from 'react';
import { PROFILE, NAV_LINKS, NavLink } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  reducedMotion: boolean;
  onToggleReducedMotion: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  reducedMotion,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollRotX, setScrollRotX] = useState<number>(0);
  const [cubeState, setCubeState] = useState<string>('SOLVED');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 15);

      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const rawRatio = Math.min(1, Math.max(0, scrollY / maxScroll));
      const rotX = Math.round(rawRatio * 360);
      setScrollRotX(rotX);

      if (rawRatio < 0.25) {
        setCubeState('SOLVED');
      } else if (rawRatio < 0.33) {
        setCubeState('UNFOLDING');
      } else if (rawRatio <= 0.60) {
        setCubeState('EXPLODED');
      } else if (rawRatio < 0.85) {
        setCubeState('CORE_ARCHITECTURE');
      } else {
        setCubeState('LOCKED_READY');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: NavLink) => {
    if (link.isExternal && link.href) {
      window.open(link.href, '_blank', 'noopener,noreferrer');
      setMobileMenuOpen(false);
      return;
    }
    onNavigate(link.id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
        className={scrolled ? 'nav-sticky-scrolled' : 'nav-sticky-top'}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* Left: 'Satyam Kumar' Architectural Wordmark */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
              window.history.pushState(null, '', '#');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              textAlign: 'left',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
            }}
            aria-label={`${PROFILE.name} - Return to top`}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              {PROFILE.name}
            </span>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                display: 'inline-block',
                boxShadow: '0 0 8px rgba(255, 79, 0, 0.5)',
              }}
              title="Tactile 3D Logic Cube Active"
            />
          </button>

          {/* Right Group: Monospace Coordinate Tracker (ROT_X: 0° / STATE: SOLVED) + Quick Links (Intro, Projects, Stack, Contact) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.25rem',
            }}
            className="desktop-nav-group"
          >
            {/* Quick-Jump Navigation Links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.75rem',
              }}
              className="desktop-nav"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  (activeSection === link.id ||
                    (link.id === 'intro' && (activeSection === 'hero' || activeSection === 'intro'))) &&
                  !link.isExternal;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link)}
                    style={{
                      position: 'relative',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 600 : 500,
                      letterSpacing: '-0.01em',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      padding: '0.35rem 0',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer',
                    }}
                    className="nav-quick-link"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent)',
                          display: 'inline-block',
                        }}
                      />
                    )}
                    <span>{link.label}</span>
                    {link.isExternal && (
                      <ArrowUpRight size={13} style={{ color: 'var(--text-muted)' }} />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Clean Monospace Scroll-Coordinate Tracker: (ROT_X: 0° / STATE: SOLVED) */}
            <div
              className="nav-tracker-badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                border: '1px solid var(--grid-hairline)',
                borderRadius: '3px',
                padding: '0.32rem 0.8rem',
                boxShadow: 'var(--shadow-studio-sm)',
                letterSpacing: '0.04em',
                userSelect: 'none',
              }}
              title="Mechanical Logic Cube Scroll Coordinate Tracker"
              aria-label={`Scroll rotation X: ${scrollRotX} degrees, state: ${cubeState}`}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: cubeState === 'SOLVED' ? 'var(--text-primary)' : 'var(--accent)',
                  display: 'inline-block',
                  boxShadow: cubeState !== 'SOLVED' ? '0 0 6px rgba(255, 79, 0, 0.6)' : 'none',
                }}
              />
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                {cubeState === 'CORE_ARCHITECTURE' ? (
                  <>
                    ROT_X: 180° / STATE:{' '}
                    <span style={{ color: 'var(--accent)' }}>CORE_ARCHITECTURE</span>
                  </>
                ) : cubeState === 'LOCKED_READY' ? (
                  <>
                    ROT_X: 360° / STATE:{' '}
                    <span style={{ color: 'var(--accent)' }}>LOCKED_READY</span>
                  </>
                ) : (
                  <>
                    ROT_X: {scrollRotX}° / STATE:{' '}
                    <span style={{ color: cubeState === 'SOLVED' ? 'var(--text-primary)' : 'var(--accent)' }}>
                      {cubeState}
                    </span>
                  </>
                )}
              </span>
              {/* Dynamic Micro-Progress Track */}
              <div
                style={{
                  width: '32px',
                  height: '3px',
                  backgroundColor: 'var(--grid-hairline)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  marginLeft: '0.2rem',
                }}
              >
                <div
                  style={{
                    width: `${(scrollRotX / 360) * 100}%`,
                    height: '100%',
                    backgroundColor: 'var(--accent)',
                    transition: 'width 60ms linear',
                  }}
                />
              </div>
            </div>
          </div>

          {/* Mobile Right: Compact Coordinate Tracker & Hamburger */}
          <div
            style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}
            className="mobile-menu-wrapper"
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                backgroundColor: 'rgba(255, 255, 255, 0.88)',
                border: '1px solid var(--grid-hairline)',
                borderRadius: '3px',
                padding: '0.25rem 0.5rem',
              }}
            >
              ROT_X: {scrollRotX}°
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: '0.45rem',
                color: 'var(--text-primary)',
                border: '1px solid var(--grid-hairline)',
                borderRadius: '2px',
                backgroundColor: '#FFFFFF',
              }}
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Clean Frosted-White Blur */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(245, 245, 243, 0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '2.5rem 1.75rem',
            borderTop: '1px solid var(--grid-hairline)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '2rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              INDEX // NAVIGATION
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-primary)',
                fontWeight: 600,
              }}
            >
              ROT_X: {scrollRotX}° / STATE:{' '}
              <span style={{ color: 'var(--accent)' }}>{cubeState}</span>
            </div>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {NAV_LINKS.map((link) => {
              const isActive =
                (activeSection === link.id ||
                  (link.id === 'intro' && (activeSection === 'hero' || activeSection === 'intro'))) &&
                !link.isExternal;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 0',
                    borderBottom: '1px solid var(--grid-hairline)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                    textAlign: 'left',
                  }}
                >
                  <span>{link.label}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {link.index}
                  </span>
                </button>
              );
            })}
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            <a
              href={PROFILE.resumeUrl}
              download="Satyam_Kumar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      )}

      {/* Responsive Breakpoint */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav-group {
            display: none !important;
          }
          .mobile-menu-wrapper {
            display: flex !important;
          }
        }
        .nav-quick-link:hover {
          color: var(--text-primary) !important;
        }
      `}</style>
    </>
  );
};

export default Header;
