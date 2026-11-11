import React from 'react';
import { PROFILE, EDUCATION } from '../data/portfolioData';
import { GraduationCap, Compass, Terminal, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--grid-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '840px', marginBottom: '3.25rem' }}>
          <div className="reveal-on-scroll architectural-label">
            <span>01 // ABOUT &amp; ENGINEERING PHILOSOPHY</span>
          </div>

          <h2 className="reveal-on-scroll stagger-1 swiss-headline" style={{ marginBottom: '1rem' }}>
            {PROFILE.positioningStatement}
          </h2>
        </div>

        {/* Main 2-Column Editorial Layout: Narrative + Philosophy (Left) & Education Timeline (Right) */}
        <div
          className="about-editorial-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.95fr)',
            gap: '2.25rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Personal Narrative + Engineering Philosophy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="reveal-on-scroll stagger-1 architectural-card"
              style={{
                borderRadius: '6px',
                padding: '2.25rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.9rem',
                  borderBottom: '1px solid #E3E2DD',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <Terminal size={15} style={{ color: 'var(--accent)' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: 'var(--text-primary)',
                    }}
                  >
                    PROFILE &amp; FOCUS
                  </span>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <MapPin size={12} style={{ color: 'var(--accent)' }} />
                  {PROFILE.location}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {PROFILE.aboutParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: '0.98rem',
                      color: idx === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: idx === 0 ? 500 : 400,
                      lineHeight: 1.72,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* How I Approach Engineering */}
            <div
              className="reveal-on-scroll stagger-2 architectural-card-flat"
              style={{
                borderRadius: '6px',
                padding: '2rem 2.25rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  marginBottom: '1.1rem',
                }}
              >
                <Compass size={16} style={{ color: 'var(--accent)' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  How I Approach Engineering
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {PROFILE.philosophyParagraphs.map((para, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: '0.94rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div
                style={{
                  marginTop: '1.35rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #E3E2DD',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.6rem',
                }}
              >
                {[
                  'Leakage-Aware Validation',
                  'End-to-End ML Pipelines',
                  '150+ LeetCode Problems',
                  'Full-Stack AI Delivery',
                ].map((pill) => (
                  <span key={pill} className="mono-tag">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Structured Education Timeline */}
          <div
            className="reveal-on-scroll stagger-2 architectural-card"
            style={{
              borderRadius: '6px',
              padding: '2.25rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.75rem',
                paddingBottom: '0.9rem',
                borderBottom: '1px solid #E3E2DD',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <GraduationCap size={17} style={{ color: 'var(--accent)' }} />
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  Education
                </h3>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.06em',
                }}
              >
                ACADEMIC TIMELINE
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', position: 'relative' }}>
              {EDUCATION.map((edu, idx) => (
                <div
                  key={edu.id}
                  style={{
                    position: 'relative',
                    paddingLeft: '1.5rem',
                    borderLeft: '2px solid #E3E2DD',
                  }}
                >
                  {/* Timeline Node */}
                  <span
                    style={{
                      position: 'absolute',
                      left: '-6px',
                      top: '0.35rem',
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: idx === 0 ? 'var(--accent)' : '#FFFFFF',
                      border: `2px solid ${idx === 0 ? 'var(--accent)' : '#121212'}`,
                    }}
                  />

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.4rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'var(--accent)',
                      }}
                    >
                      {edu.period}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        backgroundColor: 'var(--bg-canvas)',
                        border: '1px solid #E3E2DD',
                        padding: '0.18rem 0.55rem',
                        borderRadius: '2px',
                      }}
                    >
                      {edu.score}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.35,
                      marginBottom: '0.3rem',
                    }}
                  >
                    {edu.degree}
                  </h4>

                  <div
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.45rem',
                    }}
                  >
                    {edu.institution} · {edu.location}
                  </div>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-editorial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
