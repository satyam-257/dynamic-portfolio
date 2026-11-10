import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { Github, ExternalLink, X, Check } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(20, 20, 19, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          maxWidth: '840px',
          width: '100%',
          maxHeight: '90vh',
          borderRadius: '4px',
          border: '1px solid var(--grid-hairline)',
          boxShadow: 'var(--shadow-studio-elevated)',
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--grid-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 2rem',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent)',
                backgroundColor: 'var(--accent-soft)',
                border: '1px solid var(--accent-subtle-border)',
                padding: '0.2rem 0.6rem',
                borderRadius: '2px',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              {project.badge}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: 'var(--text-muted)',
              }}
            >
              / ARCHITECTURAL SPECIFICATION
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              padding: '0.45rem',
              borderRadius: '2px',
              border: '1px solid var(--grid-hairline)',
              backgroundColor: 'var(--bg-canvas)',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all var(--transition-fast)',
            }}
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Header Title Area */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                marginBottom: '0.4rem',
                textTransform: 'uppercase',
              }}
            >
              {project.category}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                marginBottom: '0.5rem',
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                fontWeight: 500,
              }}
            >
              {project.subtitle}
            </p>
          </div>

          {/* Project Preview Image */}
          <div
            style={{
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid var(--grid-hairline)',
              maxHeight: '320px',
              backgroundColor: 'var(--bg-canvas)',
            }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '320px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Stats Grid */}
          {project.stats && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
                gap: '1rem',
              }}
            >
              {project.stats.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--grid-hairline)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Overview Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-lg)',
                color: 'var(--text-primary)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              System Description
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.75 }}>
              {project.description}
            </p>

            {/* Impact Box */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '2px',
                backgroundColor: 'var(--bg-canvas)',
                borderLeft: '3px solid var(--accent)',
                borderTop: '1px solid var(--grid-hairline)',
                borderRight: '1px solid var(--grid-hairline)',
                borderBottom: '1px solid var(--grid-hairline)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.70rem',
                  letterSpacing: '0.08em',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}
              >
                Benchmark Verification
              </div>
              <p style={{ color: 'var(--text-primary)', fontSize: '0.92rem', lineHeight: 1.6, fontWeight: 500 }}>
                {project.impactNote}
              </p>
            </div>
          </div>

          {/* Technical Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-lg)',
                color: 'var(--text-primary)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Key Architecture Highlights
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {project.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.85rem 1.1rem',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid var(--grid-hairline)',
                  }}
                >
                  <Check
                    size={15}
                    style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.2rem' }}
                  />
                  <span style={{ color: 'var(--text-primary)', fontSize: '0.90rem', lineHeight: 1.6 }}>
                    {h}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
              }}
            >
              Technology Stack
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((tech) => (
                <span key={tech} className="mono-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div
            style={{
              paddingTop: '1.75rem',
              borderTop: '1px solid var(--grid-hairline)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.84rem', padding: '0.65rem 1.25rem' }}
              >
                <Github size={15} />
                <span>GitHub Repository</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.84rem', padding: '0.65rem 1.25rem' }}
                >
                  <ExternalLink size={14} />
                  <span>Launch Platform</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="btn-ghost"
              style={{ padding: '0.65rem 1.25rem' }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;
