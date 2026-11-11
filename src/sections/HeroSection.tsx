import React, { useEffect, useRef, useState } from 'react';
import { PROFILE, HERO_METRICS } from '../data/portfolioData';
import { ArrowDown, Download, MessageSquare, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  reducedMotion: boolean;
}

const CounterNumber: React.FC<{
  target: number;
  decimals?: number;
  suffix?: string;
  reducedMotion: boolean;
}> = ({ target, decimals = 0, suffix = '', reducedMotion }) => {
  const [display, setDisplay] = useState<string>(() =>
    reducedMotion ? `${target.toFixed(decimals)}${suffix}` : `${(0).toFixed(decimals)}${suffix}`
  );
  const startedRef = useRef(false);
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(`${target.toFixed(decimals)}${suffix}`);
      return;
    }
    const el = elRef.current;
    if (!el || startedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const duration = 1100;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const current = eased * target;
            setDisplay(`${current.toFixed(decimals)}${suffix}`);
            if (p < 1) {
              requestAnimationFrame(tick);
            } else {
              setDisplay(`${target.toFixed(decimals)}${suffix}`);
            }
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, decimals, suffix, reducedMotion]);

  return <span ref={elRef}>{display}</span>;
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, reducedMotion }) => {
  return (
    <section
      id="home"
      style={{
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '6.25rem',
        paddingBottom: '4.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div id="intro" style={{ position: 'absolute', top: 0 }} />
      <div id="hero" style={{ position: 'absolute', top: 0 }} />

      {/* Subtle Animated Data-Network SVG Backdrop */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 620"
        fill="none"
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '1200px',
          height: '620px',
          pointerEvents: 'none',
          opacity: 0.45,
          zIndex: 0,
        }}
      >
        <g stroke="#D9D8D3" strokeWidth="1" strokeDasharray="4 5">
          <line x1="120" y1="140" x2="340" y2="95" />
          <line x1="340" y1="95" x2="540" y2="210" />
          <line x1="120" y1="140" x2="250" y2="310" />
          <line x1="250" y1="310" x2="540" y2="210" />
          <line x1="540" y1="210" x2="770" y2="120" />
          <line x1="770" y1="120" x2="1030" y2="220" />
          <line x1="540" y1="210" x2="820" y2="390" />
          <line x1="820" y1="390" x2="1030" y2="220" />
        </g>
        {[
          { cx: 120, cy: 140, accent: false },
          { cx: 340, cy: 95, accent: true },
          { cx: 540, cy: 210, accent: false },
          { cx: 250, cy: 310, accent: false },
          { cx: 770, cy: 120, accent: true },
          { cx: 1030, cy: 220, accent: false },
          { cx: 820, cy: 390, accent: false },
        ].map((node, idx) => (
          <g key={idx}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.accent ? 4.5 : 3.5}
              fill={node.accent ? '#FF4F00' : '#FFFFFF'}
              stroke={node.accent ? '#FF4F00' : '#C6C5BF'}
              strokeWidth="1.5"
            />
          </g>
        ))}
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Top Metadata Row */}
        <div
          className="reveal-on-scroll"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.75rem',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: 'var(--accent)',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E3E2DD',
              padding: '0.38rem 0.85rem',
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
              }}
            />
            {PROFILE.heroIntro}
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.06em',
              color: 'var(--text-secondary)',
              backgroundColor: 'rgba(255,255,255,0.75)',
              border: '1px solid #E3E2DD',
              padding: '0.38rem 0.8rem',
              borderRadius: '2px',
            }}
          >
            <span>{PROFILE.identity}</span>
            <span style={{ color: '#D9D8D3' }}>|</span>
            <MapPin size={12} style={{ color: 'var(--accent)' }} />
            <span>{PROFILE.location}</span>
          </span>
        </div>

        {/* 2-Column Hero Grid: Narrative Left + Interactive Architectural Node Frame Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.35fr) minmax(280px, 0.85fr)',
            gap: 'clamp(2rem, 4.5vw, 4rem)',
            alignItems: 'center',
            marginBottom: '3.25rem',
          }}
          className="hero-architectural-grid"
        >
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.45rem' }}>
            <h1
              className="reveal-on-scroll stagger-1 swiss-display"
              style={{
                color: 'var(--text-primary)',
                fontSize: 'clamp(2.4rem, 1.9rem + 2.7vw, 4.25rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                fontWeight: 800,
              }}
            >
              Building Intelligent Systems.{' '}
              <span style={{ color: 'var(--accent)' }}>Engineering</span> Real-World Impact.
            </h1>

            <p
              className="reveal-on-scroll stagger-2"
              style={{
                fontSize: 'clamp(1.02rem, 0.96rem + 0.35vw, 1.2rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.68,
                maxWidth: '610px',
              }}
            >
              {PROFILE.heroSupport}
            </p>

            {/* Three Hero CTAs */}
            <div
              className="reveal-on-scroll stagger-3"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                alignItems: 'center',
                paddingTop: '0.45rem',
              }}
            >
              <button
                onClick={() => onNavigate('projects')}
                className="btn-primary"
                id="hero-explore-work-cta"
                style={{
                  padding: '0.88rem 1.55rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.03em',
                }}
              >
                <span>Explore My Work</span>
                <ArrowDown size={14} />
              </button>

              <a
                href={PROFILE.resumeUrl}
                download="Satyam_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="hero-download-resume-cta"
                style={{
                  padding: '0.88rem 1.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.03em',
                }}
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => onNavigate('contact')}
                className="btn-ghost"
                id="hero-connect-cta"
                style={{
                  padding: '0.88rem 1.25rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  letterSpacing: '0.03em',
                  backgroundColor: 'rgba(255,255,255,0.72)',
                }}
              >
                <MessageSquare size={14} style={{ color: 'var(--accent)' }} />
                <span>Let&apos;s Connect</span>
              </button>
            </div>

            <div
              className="reveal-on-scroll stagger-4"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                borderLeft: '2px solid var(--accent)',
                paddingLeft: '0.85rem',
                marginTop: '0.25rem',
              }}
            >
              &ldquo;{PROFILE.positioningStatement}&rdquo;
            </div>
          </div>

          {/* Right Column: Clean Framing Aperture Over the 3D Mechanical Logic Cube */}
          <div
            className="reveal-on-scroll stagger-2 hero-cube-frame"
            style={{
              minHeight: '340px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.35rem',
              border: '1px dashed rgba(18, 18, 18, 0.14)',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.34)',
              backdropFilter: 'blur(2px)',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
              }}
            >
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                SYSTEMS // ML ARCHITECTURE
              </span>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>INTERACTIVE 3D</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                borderTop: '1px solid rgba(18,18,18,0.08)',
                paddingTop: '0.75rem',
              }}
            >
              <span>NSEC KOLKATA · 2024–2028</span>
              <span>INTERNSHIPS 2026</span>
            </div>
          </div>
        </div>

        {/* 4 Visually Prominent Verified Metric Cards */}
        <div
          className="hero-metrics-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '1rem',
          }}
        >
          {HERO_METRICS.map((item, idx) => (
            <div
              key={item.id}
              className={`reveal-on-scroll stagger-${idx + 1} architectural-card-flat`}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E3E2DD',
                borderRadius: '4px',
                padding: '1.35rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1.65rem, 1.4rem + 0.9vw, 2.15rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                }}
              >
                <CounterNumber
                  target={item.value}
                  decimals={item.decimals ?? 0}
                  suffix={item.suffix ?? ''}
                  reducedMotion={reducedMotion}
                />
              </div>

              <div
                style={{
                  width: '28px',
                  height: '2px',
                  backgroundColor: 'var(--accent)',
                }}
              />

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.45,
                }}
              >
                {item.context}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-architectural-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-cube-frame {
            display: none !important;
          }
          .hero-metrics-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
        @media (max-width: 540px) {
          .hero-metrics-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
