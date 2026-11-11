import React from 'react';
import { FEATURED_PROJECTS, ProjectCaseStudy } from '../data/portfolioData';
import {
  TrackXInteractivePreview,
  ExperimentPilotInteractivePreview,
  TraverlyInteractivePreview,
} from '../components/ProjectInteractivePreviews';
import { Github, ExternalLink, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenProjectModal: (project: ProjectCaseStudy) => void;
  onNavigate?: (sectionId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProjectModal }) => {
  const renderInteractivePreview = (id: string) => {
    switch (id) {
      case 'trackx':
        return <TrackXInteractivePreview />;
      case 'experimentpilot':
        return <ExperimentPilotInteractivePreview />;
      case 'traverly':
        return <TraverlyInteractivePreview />;
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--grid-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3.75rem' }}>
          <div className="reveal-on-scroll architectural-label">
            <span>02 // FEATURED ENGINEERING CASE STUDIES</span>
          </div>

          <h2 className="reveal-on-scroll stagger-1 swiss-headline" style={{ marginBottom: '1.1rem' }}>
            End-to-End ML Systems &amp;{' '}
            <span style={{ color: 'var(--accent)' }}>Full-Stack AI</span> Builds.
          </h2>

          <p
            className="reveal-on-scroll stagger-2"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 1.68,
            }}
          >
            Each project below documents the underlying problem, data and validation approach,
            measured outcomes, and system architecture — accompanied by an interactive preview.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {FEATURED_PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              className={`reveal-on-scroll stagger-${(idx % 3) + 1} architectural-card`}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E3E2DD',
                borderRadius: '6px',
                padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.85rem',
              }}
            >
              {/* Case Study Header Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid #E3E2DD',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '0.65rem',
                      marginBottom: '0.55rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {project.number}
                    </span>
                    <span style={{ color: '#D9D8D3' }}>/</span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {project.category.toUpperCase()}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: project.achievementNote ? 'var(--accent)' : 'var(--text-secondary)',
                        backgroundColor: project.achievementNote ? 'var(--accent-soft)' : '#FAF9F6',
                        border: `1px solid ${
                          project.achievementNote ? 'var(--accent-subtle-border)' : '#E3E2DD'
                        }`,
                        padding: '0.18rem 0.55rem',
                        borderRadius: '2px',
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.6rem, 1.3rem + 1.1vw, 2.25rem)',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.15,
                      marginBottom: '0.3rem',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.02rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* Action Links */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      padding: '0.62rem 1.05rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.76rem',
                    }}
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        padding: '0.62rem 1.05rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.76rem',
                      }}
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <button
                    onClick={() => onOpenProjectModal(project)}
                    className="btn-ghost"
                    style={{
                      padding: '0.62rem 1rem',
                      fontSize: '0.75rem',
                    }}
                  >
                    <Layers size={14} style={{ color: 'var(--accent)' }} />
                    <span>Case Study Details</span>
                  </button>
                </div>
              </div>

              {/* Description + Optional Achievement Banner */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-primary)', lineHeight: 1.68 }}>
                  {project.description}
                </p>

                {project.achievementNote && (
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      padding: '0.65rem 1rem',
                      backgroundColor: 'var(--accent-soft)',
                      border: '1px solid var(--accent-subtle-border)',
                      borderRadius: '3px',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span>{project.achievementNote}</span>
                  </div>
                )}
              </div>

              {/* Structured Case Study Grid: Problem / Built / Approach */}
              <div
                className="case-study-pillars"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#FAF9F6',
                    border: '1px solid #E3E2DD',
                    borderRadius: '3px',
                    padding: '1.15rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.45rem',
                    }}
                  >
                    01 // PROBLEM STATEMENT
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.problemStatement}
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: '#FAF9F6',
                    border: '1px solid #E3E2DD',
                    borderRadius: '3px',
                    padding: '1.15rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.45rem',
                    }}
                  >
                    02 // WHAT I BUILT
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.whatIBuilt}
                  </p>
                </div>

                <div
                  style={{
                    backgroundColor: '#FAF9F6',
                    border: '1px solid #E3E2DD',
                    borderRadius: '3px',
                    padding: '1.15rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.45rem',
                    }}
                  >
                    03 // TECHNICAL APPROACH
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {project.technicalApproach}
                  </p>
                </div>
              </div>

              {/* Interactive Visual Direction Showcase */}
              <div>{renderInteractivePreview(project.id)}</div>

              {/* Bottom Strip: Measurable Results + Key Contributions + Stack */}
              <div
                className="case-study-footer-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 0.9fr)',
                  gap: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #E3E2DD',
                  alignItems: 'start',
                }}
              >
                {/* Key Contributions (top 4 concise bullets + link to modal for full list) */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: 'var(--text-muted)',
                      letterSpacing: '0.08em',
                      marginBottom: '0.7rem',
                    }}
                  >
                    KEY ENGINEERING CONTRIBUTIONS
                  </div>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                    }}
                  >
                    {project.keyContributions.slice(0, 4).map((item, cIdx) => (
                      <li
                        key={cIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.55rem',
                          fontSize: '0.87rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55,
                        }}
                      >
                        <span
                          style={{
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent)',
                            marginTop: '0.52rem',
                            flexShrink: 0,
                          }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {project.keyContributions.length > 4 && (
                    <button
                      onClick={() => onOpenProjectModal(project)}
                      style={{
                        marginTop: '0.65rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'var(--accent)',
                      }}
                    >
                      + View all {project.keyContributions.length} contributions &amp; full case study →
                    </button>
                  )}
                </div>

                {/* Measurable Results & Tech Stack */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                      gap: '0.65rem',
                    }}
                  >
                    {project.measurableResults.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        style={{
                          padding: '0.75rem 0.7rem',
                          backgroundColor: '#FAF9F6',
                          border: '1px solid #E3E2DD',
                          borderRadius: '3px',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.96rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: '0.18rem',
                          }}
                        >
                          {res.value}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.64rem',
                            fontWeight: 600,
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.08em',
                        marginBottom: '0.5rem',
                      }}
                    >
                      TECHNOLOGY STACK
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className="mono-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .case-study-pillars {
            grid-template-columns: 1fr !important;
          }
          .case-study-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
