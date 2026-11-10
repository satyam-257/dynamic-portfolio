import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  reducedMotion: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="intro"
      style={{
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6rem',
        paddingBottom: '5rem',
        position: 'relative',
      }}
    >
      <div id="hero" style={{ position: 'absolute', top: 0 }} />
      <div className="container">
        {/* Monospace Status Badge */}
        <div
          className="reveal-on-scroll"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: '1.85rem',
            padding: '0.35rem 0.85rem',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E3E2DD',
            borderRadius: '2px',
            boxShadow: 'var(--shadow-studio-sm)',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
              boxShadow: '0 0 6px rgba(255, 79, 0, 0.45)',
            }}
          />
          <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
            // STATUS: AVAILABLE FOR INTERNSHIPS &amp; ROLES
          </span>
        </div>

        {/* 2-Column Architectural Layout: Headline & Tactile Spec Card */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(320px, 0.95fr)',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
          className="hero-architectural-grid"
        >
          {/* Left Column: Swiss Display Typography & Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <h1
              className="reveal-on-scroll stagger-1 swiss-display"
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(2.5rem, 2.0rem + 2.8vw, 4.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                fontWeight: 700,
              }}
            >
              Satyam Kumar — <br />
              <span style={{ color: 'var(--accent)' }}>Data Science</span> &amp; C++ Engineer
            </h1>

            <p
              className="reveal-on-scroll stagger-2"
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '560px',
              }}
            >
              Specializing in algorithmic problem-solving, tabular machine learning, and high-performance systems.
            </p>

            {/* Actions: Carbon-Black Primary & 1px Bordered Secondary */}
            <div
              className="reveal-on-scroll stagger-3"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                paddingTop: '0.75rem',
              }}
            >
              {/* Solid Carbon-Black Primary Button */}
              <button
                onClick={() => onNavigate('projects')}
                className="btn-primary"
                id="hero-explore-projects-cta"
                style={{
                  backgroundColor: '#121212',
                  color: '#FFFFFF',
                  border: '1px solid #121212',
                  padding: '0.85rem 1.65rem',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  boxShadow: 'var(--shadow-studio-sm)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <span>Explore Projects</span>
                <ArrowDown size={14} />
              </button>

              {/* Clean 1px Bordered Secondary Button */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="hero-github-resume-cta"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E3E2DD',
                  color: 'var(--text-primary)',
                  padding: '0.85rem 1.6rem',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-studio-sm)',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <span>GitHub / Resume</span>
                <ArrowUpRight size={14} style={{ color: 'var(--text-muted)' }} />
              </a>
            </div>

            {/* Tactile 3D Compute Core Scroll Cue */}
            <div
              className="reveal-on-scroll stagger-4"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                paddingTop: '0.5rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                  display: 'inline-block',
                }}
              />
              <span>TACTILE 3D MECHANICAL LOGIC CUBE ACTIVE // ISOMETRIC 3/4 VIEW // SCROLL TO UNFOLD</span>
            </div>
          </div>

          {/* Right Column: Architectural HUD Framing for the 3D Logic Cube */}
          <div
            className="reveal-on-scroll stagger-2"
            style={{
              minHeight: '380px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.75rem',
              border: '1px dashed rgba(18, 18, 18, 0.14)',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.35)',
              backdropFilter: 'blur(3px)',
              pointerEvents: 'none',
            }}
          >
            {/* Viewport Top Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 6px rgba(255, 79, 0, 0.6)',
                  }}
                />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  3D LOGIC CUBE VIEWPORT
                </span>
              </div>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
                [ ISO: 35.26° / 45° ]
              </span>
            </div>

            {/* Corner Crosshairs */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  letterSpacing: '0.1em',
                  color: 'rgba(18, 18, 18, 0.25)',
                  textAlign: 'center',
                }}
              >
                + CUBE ASSEMBLY: SOLVED +<br />
                <span style={{ fontSize: '0.62rem' }}>CURSOR TILT &amp; LIVING ROTATION ACTIVE</span>
              </div>
            </div>

            {/* Viewport Footer Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(18, 18, 18, 0.08)',
                paddingTop: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-secondary)',
              }}
            >
              <span>SECTION 1: 0% → 25%</span>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
                SCROLL DOWN TO UNFOLD ↓
              </span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="reveal-on-scroll stagger-4"
          style={{
            marginTop: '5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <button
            onClick={() => onNavigate('projects')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.08em',
              transition: 'color var(--transition-fast)',
            }}
            aria-label="Scroll down to projects section"
          >
            <span>SCROLL TO PROJECTS</span>
            <ArrowDown size={13} style={{ color: 'var(--accent)' }} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-architectural-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
export default HeroSection;
