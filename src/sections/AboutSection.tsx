import React from 'react';
import { PHILOSOPHY_PILLARS, PROFILE } from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="about"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--border-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '4.5rem' }}>
          <div className="reveal-on-scroll section-label">
            <span>01 / ABOUT</span>
          </div>

          <h2
            className="reveal-on-scroll stagger-1 editorial-headline"
            style={{ marginBottom: '1.5rem' }}
          >
            Clarity Through{' '}
            <span style={{ color: 'var(--silver-muted)', fontWeight: 600 }}>
              Engineering
            </span>{' '}
            Discipline.
          </h2>

          <p
            className="reveal-on-scroll stagger-2"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--silver-muted)',
              lineHeight: 1.7,
            }}
          >
            Software is more than code written to satisfy isolated functional requirements.
            It is a continuous machine operating under memory, network, and human attention constraints.
          </p>
        </div>

        {/* 2-Column Split: Editorial Narrative + 4 Philosophy Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
            gap: 'clamp(2.5rem, 5vw, 4.5rem)',
            alignItems: 'start',
            marginBottom: '5rem',
          }}
          className="about-editorial-grid"
        >
          {/* Left Column: Narrative Prose */}
          <div
            className="reveal-on-scroll stagger-2 matte-card"
            style={{
              padding: '2.5rem',
              backgroundColor: 'var(--bg-surface)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--silver-muted)',
                letterSpacing: '0.08em',
                marginBottom: '1.75rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--border-hairline)',
                textTransform: 'uppercase',
              }}
            >
              Background &amp; Philosophy
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ color: '#FFFFFF', fontSize: '1.05rem', lineHeight: 1.75 }}>
                I am a software engineer focused on building clean web architectures, machine learning
                telemetry systems, and edge computer vision companions.
              </p>

              <p style={{ color: 'var(--silver-muted)', fontSize: '0.96rem', lineHeight: 1.75 }}>
                During development of <strong style={{ color: '#FFFFFF' }}>TrackX</strong>, I investigated
                why static passenger timetables fail under dynamic railway conditions. By training an
                XGBoost regressor on empirical delay deviations rather than absolute journey times, we
                achieved a 42% reduction in intermediate ETA error.
              </p>

              <p style={{ color: 'var(--silver-muted)', fontSize: '0.96rem', lineHeight: 1.75 }}>
                Similarly with <strong style={{ color: '#FFFFFF' }}>TrailLens</strong>, I prioritized
                intentionality: an ultra-compact 5.45 MB PyTorch model that operates 100% offline,
                providing private, sub-25ms classification so the user can quickly identify a specimen
                and return to the physical world.
              </p>

              <div
                style={{
                  marginTop: '1rem',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--accent-soft)',
                  borderLeft: '2px solid var(--accent)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.35rem',
                  }}
                >
                  Core Principle
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.08rem',
                    fontWeight: 600,
                    color: '#FFFFFF',
                  }}
                >
                  &ldquo;Make it work. Make it right. Measure the difference.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architectural Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`reveal-on-scroll stagger-${idx + 1} matte-card`}
                style={{
                  padding: '1.75rem',
                  backgroundColor: 'var(--bg-surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {pillar.title}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.70rem',
                      color: 'var(--silver-faint)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {pillar.tag}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.82rem',
                    color: 'var(--accent)',
                    fontWeight: 500,
                  }}
                >
                  {pillar.subtitle}
                </div>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--silver-muted)',
                    lineHeight: 1.6,
                    marginTop: '0.25rem',
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Empirical Metrics Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {PROFILE.metrics.map((m, idx) => (
            <div
              key={idx}
              className={`reveal-on-scroll stagger-${idx + 1} matte-card`}
              style={{
                padding: '2rem 1.75rem',
                backgroundColor: 'var(--bg-surface)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '2.4rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  marginBottom: '0.5rem',
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--silver-medium)',
                  marginBottom: '0.2rem',
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.78rem',
                  color: 'var(--silver-faint)',
                }}
              >
                {m.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Transition Link */}
        <div
          className="reveal-on-scroll stagger-3"
          style={{
            marginTop: '4rem',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            onClick={() => onNavigate('stack')}
            className="btn-secondary"
            id="about-to-stack-btn"
          >
            <span>Next: Technical Stack</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
export default AboutSection;
