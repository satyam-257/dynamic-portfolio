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
        <div style={{ maxWidth: '780px', marginBottom: '2.25rem' }}>
          <div className="reveal-on-scroll architectural-label">
            <span>02 // FEATURED ENGINEERING CASE STUDIES</span>
          </div>

          <h2 className="reveal-on-scroll stagger-1 swiss-headline" style={{ marginBottom: '0.85rem' }}>
            End-to-End ML Systems &amp;{' '}
            <span style={{ color: 'var(--accent)' }}>Full-Stack AI</span> Builds.
          </h2>

          <p
            className="reveal-on-scroll stagger-2"
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--text-secondary)',
              lineHeight: 1.62,
            }}
          >
            Compact engineering dossiers covering the problem, architecture, measured results,
            and interactive preview for each system.
          </p>
        </div>

        {/* 3 Compact Glass Project Tiles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {FEATURED_PROJECTS.map((project, idx) => (
            <article
              key={project.id}
              className={`reveal-on-scroll stagger-${(idx % 3) + 1} architectural-card`}
              style={{
                padding: 'clamp(1.15rem, 2.2vw, 1.65rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.05rem',
              }}
            >
              {/* Compact Header Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid rgba(227, 226, 221, 0.85)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.35rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
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
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {project.category.toUpperCase()}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.64rem',
                        fontWeight: 600,
                        color: project.achievementNote ? 'var(--accent)' : 'var(--text-secondary)',
                        backgroundColor: project.achievementNote
                          ? 'var(--accent-soft)'
                          : 'rgba(250, 249, 246, 0.72)',
                        border: `1px solid ${
                          project.achievementNote ? 'var(--accent-subtle-border)' : '#E3E2DD'
                        }`,
                        padding: '0.14rem 0.45rem',
                        borderRadius: '2px',
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.55rem' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.28rem, 1.1rem + 0.75vw, 1.68rem)',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.025em',
                        lineHeight: 1.18,
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.88rem',
                        fontWeight: 500,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      — {project.subtitle}
                    </span>
                  </div>
                </div>

                {/* Action Links */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{
                      padding: '0.46rem 0.85rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.82)',
                    }}
                  >
                    <Github size={13} />
                    <span>GitHub</span>
                    <ArrowUpRight size={12} />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{
                        padding: '0.46rem 0.85rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                      }}
                    >
                      <ExternalLink size={13} />
                      <span>Live Demo</span>
                    </a>
                  )}

                  <button
                    onClick={() => onOpenProjectModal(project)}
                    className="btn-ghost"
                    style={{
                      padding: '0.46rem 0.8rem',
                      fontSize: '0.71rem',
                    }}
                  >
                    <Layers size={13} style={{ color: 'var(--accent)' }} />
                    <span>Full Case Study</span>
                  </button>
                </div>
              </div>

              {/* Compact 2-Column Body: Dossier Details (Left) + Interactive Preview (Right) */}
              <div
                className="compact-project-body"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.02fr) minmax(0, 0.98fr)',
                  gap: '1.15rem',
                  alignItems: 'start',
                }}
              >
                {/* Left Column: Summary, Problem/Approach pills, Measured Results & Stack */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <p style={{ fontSize: '0.89rem', color: 'var(--text-primary)', lineHeight: 1.56 }}>
                    {project.description}
                  </p>

                  {project.achievementNote && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.45rem 0.75rem',
                        backgroundColor: 'var(--accent-soft)',
                        border: '1px solid var(--accent-subtle-border)',
                        borderRadius: '3px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.81rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      <CheckCircle2 size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                      <span>{project.achievementNote}</span>
                    </div>
                  )}

                  {/* Concise 3-block Engineering Summary */}
                  <div
                    className="case-study-pillars"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                      gap: '0.55rem',
                    }}
                  >
                    {[
                      { label: '01 // PROBLEM', text: project.problemStatement, accent: true },
                      { label: '02 // BUILT', text: project.whatIBuilt, accent: false },
                      { label: '03 // APPROACH', text: project.technicalApproach, accent: false },
                    ].map((pillar) => (
                      <div
                        key={pillar.label}
                        style={{
                          backgroundColor: 'rgba(250, 249, 246, 0.65)',
                          border: '1px solid rgba(227, 226, 221, 0.9)',
                          borderRadius: '3px',
                          padding: '0.68rem',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.62rem',
                            fontWeight: 700,
                            color: pillar.accent ? 'var(--accent)' : 'var(--text-primary)',
                            letterSpacing: '0.07em',
                            marginBottom: '0.28rem',
                          }}
                        >
                          {pillar.label}
                        </div>
                        <p
                          style={{
                            fontSize: '0.76rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.45,
                            display: '-webkit-box',
                            WebkitLineClamp: 4,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                          title={pillar.text}
                        >
                          {pillar.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Measured Results Row */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                      gap: '0.55rem',
                    }}
                  >
                    {project.measurableResults.map((res, rIdx) => (
                      <div
                        key={rIdx}
                        style={{
                          padding: '0.55rem 0.6rem',
                          backgroundColor: 'rgba(250, 249, 246, 0.68)',
                          border: '1px solid rgba(227, 226, 221, 0.9)',
                          borderRadius: '3px',
                        }}
                      >
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.88rem',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            marginBottom: '0.1rem',
                          }}
                        >
                          {res.value}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.6rem',
                            fontWeight: 600,
                            color: 'var(--text-secondary)',
                          }}
                        >
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack + Full Case Study Trigger */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                    }}
                  >
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="mono-tag"
                          style={{
                            fontSize: '0.66rem',
                            padding: '0.2rem 0.48rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.72)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span
                          className="mono-tag"
                          style={{
                            fontSize: '0.66rem',
                            padding: '0.2rem 0.48rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.72)',
                          }}
                        >
                          +{project.technologies.length - 6}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onOpenProjectModal(project)}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.69rem',
                        fontWeight: 600,
                        color: 'var(--accent)',
                      }}
                    >
                      {project.keyContributions.length} contributions &amp; full case study →
                    </button>
                  </div>
                </div>

                {/* Right Column: Compact Interactive Visual Showcase */}
                <div>{renderInteractivePreview(project.id)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .compact-project-body {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 720px) {
          .case-study-pillars {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
