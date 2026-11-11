import React, { useState, useEffect } from 'react';
import { PROFILE, NAV_LINKS, NavLink } from '../data/portfolioData';
import { Menu, X, Download } from 'lucide-react';

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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 16);
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      setScrollProgress(Math.min(100, Math.max(0, (scrollY / maxScroll) * 100)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: NavLink) => {
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
        {/* Subtle Top Scroll Progress Hairline */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '2px',
            width: `${scrollProgress}%`,
            backgroundColor: 'var(--accent)',
            transition: reducedMotion ? 'none' : 'width 80ms linear',
          }}
        />

        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
          }}
        >
          {/* Left: Brand Wordmark */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
              window.history.pushState(null, '', '#home');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              textAlign: 'left',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: 0,
              flexShrink: 0,
            }}
            aria-label={`${PROFILE.name} - Return to top`}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '2px',
                backgroundColor: 'var(--accent)',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.02rem',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}
            >
              {PROFILE.name}
            </span>
            <span
              className="nav-role-chip"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                borderLeft: '1px solid var(--grid-hairline)',
                paddingLeft: '0.6rem',
                letterSpacing: '0.04em',
              }}
            >
              ML / AI ENG
            </span>
          </button>

          {/* Desktop Navigation: 7 Recommended Links + Resume CTA */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
            }}
            className="desktop-nav-group"
          >
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.35rem',
              }}
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  activeSection === link.id ||
                  (link.id === 'home' && (activeSection === 'intro' || activeSection === 'hero'));
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link)}
                    style={{
                      position: 'relative',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.86rem',
                      fontWeight: isActive ? 700 : 500,
                      letterSpacing: '-0.01em',
                      color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                      padding: '0.35rem 0',
                      transition: 'color var(--transition-fast)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.38rem',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                    }}
                    className="nav-quick-link"
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <span
                        style={{
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent)',
                          display: 'inline-block',
                        }}
                      />
                    )}
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </nav>

            <a
              href={PROFILE.resumeUrl}
              download="Satyam_Kumar_AI_ML_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                backgroundColor: '#FFFFFF',
                border: '1px solid var(--grid-hairline)',
                borderRadius: '2px',
                padding: '0.42rem 0.78rem',
                boxShadow: 'var(--shadow-studio-sm)',
                transition: 'all var(--transition-fast)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--grid-hairline)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div
            style={{ display: 'none', alignItems: 'center', gap: '0.65rem' }}
            className="mobile-menu-wrapper"
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: '0.45rem 0.55rem',
                color: 'var(--text-primary)',
                border: '1px solid var(--grid-hairline)',
                borderRadius: '2px',
                backgroundColor: '#FFFFFF',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
              }}
              className="mobile-menu-btn"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '58px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(245, 245, 243, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            borderTop: '1px solid var(--grid-hairline)',
            overflowY: 'auto',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            // PORTFOLIO SECTIONS
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }} aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.9rem 0.25rem',
                    borderBottom: '1px solid var(--grid-hairline)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    letterSpacing: '-0.025em',
                    color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                    textAlign: 'left',
                  }}
                >
                  <span>{link.label}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                    }}
                  >
                    {link.index}
                  </span>
                </button>
              );
            })}
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href={PROFILE.resumeUrl}
              download="Satyam_Kumar_AI_ML_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Download size={15} />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-role-chip {
            display: none !important;
          }
        }
        @media (max-width: 920px) {
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
