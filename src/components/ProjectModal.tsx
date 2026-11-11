import React, { useEffect } from 'react';
import { ProjectCaseStudy } from '../data/portfolioData';
import { Github, ExternalLink, X, Check } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectCaseStudy | null;
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
        padding: '1.25rem',
      }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={`${project.title} Engineering Case Study`}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          maxWidth: '880px',
          width: '100%',
          maxHeight: '90vh',
          borderRadius: '6px',
          border: '1px solid var(--grid-hairline)',
          boxShadow: 'var(--shadow-studio-elevated)',
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div
          style={{
            position: 'sticky',
            top: 0,
            backgroundColor: '#FFFFFF',
            borderBottom: '1px solid var(--grid-hairline)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.15rem 1.75rem',
            zIndex: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent)',
                backgroundColor: 'var(--accent-soft)',
                border: '1px solid var(--accent-subtle-border)',
                padding: '0.2rem 0.6rem',
                borderRadius: '2px',
                fontWeight: 700,
              }}
            >
              {project.number}
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              {project.badge}
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
            }}
            aria-label="Close case study modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '0.35rem',
              }}
            >
              {project.category}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 1.4rem + 1.2vw, 2.35rem)',
                fontWeight: 800,
                color: 'var(--text-primary)',
                marginBottom: '0.4rem',
              }}
            >
              {project.title}
            </h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              {project.subtitle}
            </p>
          </div>

          {/* Measurable Results Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '0.85rem',
            }}
          >
            {project.measurableResults.map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: '1rem 1.15rem',
                  borderRadius: '3px',
                  backgroundColor: '#FAF9F6',
                  border: '1px solid var(--grid-hairline)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.35rem', fontWeight: 700 }}>
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.86rem', fontWeight: 700, marginTop: '0.15rem' }}>
                  {stat.label}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {stat.context}
                </div>
              </div>
            ))}
          </div>

          {/* Problem / Built / Approach */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ padding: '1rem 1.2rem', backgroundColor: '#FAF9F6', borderLeft: '3px solid var(--accent)', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.3rem' }}>
                PROBLEM STATEMENT
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{project.problemStatement}</p>
            </div>

            <div style={{ padding: '1rem 1.2rem', backgroundColor: '#FAF9F6', border: '1px solid #E3E2DD', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                WHAT I BUILT
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{project.whatIBuilt}</p>
            </div>

            <div style={{ padding: '1rem 1.2rem', backgroundColor: '#FAF9F6', border: '1px solid #E3E2DD', borderRadius: '2px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                TECHNICAL APPROACH
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{project.technicalApproach}</p>
            </div>
          </div>

          {/* Full Key Contributions */}
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Key Contributions ({project.keyContributions.length})
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.keyContributions.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                  <Check size={16} style={{ color: 'var(--accent)', marginTop: '0.2rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              TECHNOLOGY STACK
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.technologies.map((t) => (
                <span key={t} className="mono-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.85rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid #E3E2DD',
            }}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: 1, minWidth: '180px', justifyContent: 'center' }}
            >
              <Github size={16} />
              <span>View GitHub Repository</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ flex: 1, minWidth: '180px', justifyContent: 'center' }}
              >
                <ExternalLink size={16} />
                <span>Open Verified Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
