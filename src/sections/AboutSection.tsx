import React from 'react';
import { PROFILE, EDUCATION } from '../data/portfolioData';
import { GraduationCap, Terminal, MapPin } from 'lucide-react';

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
        <div style={{ maxWidth: '820px', marginBottom: '2.25rem' }}>
          <div className="reveal-on-scroll architectural-label">
            <span>01 // ABOUT</span>
          </div>

          <h2 className="reveal-on-scroll stagger-1 swiss-headline" style={{ marginBottom: '0.65rem' }}>
            {PROFILE.positioningStatement}
          </h2>
        </div>

        {/* Balanced 2-Column Frosted Glass Layout: Concise Profile (Left) & Education (Right) */}
        <div
          className="about-editorial-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left: Concise Profile Card */}
          <div
            className="reveal-on-scroll stagger-1 architectural-card"
            style={{
              borderRadius: '6px',
              padding: '1.65rem 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.2rem',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.65rem',
                  marginBottom: '1.1rem',
                  paddingBottom: '0.8rem',
                  borderBottom: '1px solid #E3E2DD',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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
                    PROFILE
                  </span>
                </div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <MapPin size={12} style={{ color: 'var(--accent)' }} />
                  {PROFILE.location}
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {PROFILE.aboutParagraphs.slice(0, 2).map((para, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: '0.94rem',
                      color: idx === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: idx === 0 ? 500 : 400,
                      lineHeight: 1.65,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div
              style={{
                paddingTop: '0.95rem',
                borderTop: '1px solid #E3E2DD',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              {[
                'Leakage-Aware Validation',
                'End-to-End ML Pipelines',
                '150+ LeetCode Problems',
                'Full-Stack AI Delivery',
              ].map((pill) => (
                <span key={pill} className="mono-tag" style={{ fontSize: '0.7rem' }}>
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Structured Education Timeline */}
          <div
            className="reveal-on-scroll stagger-2 architectural-card"
            style={{
              borderRadius: '6px',
              padding: '1.65rem 1.75rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.25rem',
                paddingBottom: '0.8rem',
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
