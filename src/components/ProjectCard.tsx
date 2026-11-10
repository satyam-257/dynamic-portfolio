import React from 'react';
import { Project } from '../data/portfolioData';
import { Github, ExternalLink, ArrowRight, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <article
      style={{
        backgroundColor: 'var(--color-paper)',
        border: '1px solid var(--color-divider)',
        borderRadius: '6px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-subtle)',
        transition: 'all var(--transition-normal)',
      }}
      className="project-showcase-card"
    >
      {/* Visual Header / Image Plate */}
      <div
        style={{
          position: 'relative',
          height: '210px',
          overflow: 'hidden',
          backgroundColor: 'var(--color-cream)',
          cursor: 'pointer',
        }}
        onClick={() => onOpenDetails(project)}
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform var(--transition-slow)',
          }}
          className="project-card-image"
          loading="lazy"
        />

        {/* Floating Category Badge */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            padding: '0.3rem 0.65rem',
            backgroundColor: 'rgba(245, 241, 232, 0.95)',
            backdropFilter: 'blur(6px)',
            borderRadius: '3px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            fontWeight: 600,
            color: 'var(--color-charcoal)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-burnt-orange)',
            }}
          />
          {project.badge}
        </div>

        {/* Authentic Asset Indicator badge if present */}
        {project.authenticAsset && (
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              padding: '0.25rem 0.55rem',
              backgroundColor: 'rgba(36, 35, 33, 0.85)',
              borderRadius: '3px',
              color: 'var(--color-paper)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.04em',
            }}
          >
            VERIFIED ASSET
          </div>
        )}
      </div>

      {/* Card Content */}
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {/* Category Label */}
        <div className="mono-label" style={{ fontSize: '0.68rem', marginBottom: '0.35rem' }}>
          {project.category}
        </div>

        {/* Title & Subtitle */}
        <h3
          style={{
            fontSize: '1.45rem',
            marginBottom: '0.2rem',
            color: 'var(--color-charcoal)',
          }}
        >
          {project.title}
        </h3>
        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'var(--color-copper)',
            marginBottom: '0.85rem',
          }}
        >
          {project.subtitle}
        </div>

        {/* Description snippet */}
        <p
          style={{
            fontSize: '0.88rem',
            color: 'var(--color-charcoal-light)',
            lineHeight: 1.55,
            marginBottom: '1rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.description}
        </p>

        {/* Impact Note pill */}
        <div
          style={{
            padding: '0.65rem 0.85rem',
            backgroundColor: 'var(--color-cream)',
            borderRadius: '4px',
            borderLeft: '3px solid var(--color-burnt-orange)',
            fontSize: '0.78rem',
            color: 'var(--color-charcoal)',
            lineHeight: 1.45,
            marginBottom: '1.25rem',
          }}
        >
          <strong style={{ color: 'var(--color-burnt-orange)' }}>Key Metric: </strong>
          {project.impactNote}
        </div>

        {/* Tech Stack Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            marginBottom: '1.5rem',
            marginTop: 'auto',
          }}
        >
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.2rem 0.5rem',
                backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-divider)',
                borderRadius: '3px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-warm-gray)',
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span
              style={{
                padding: '0.2rem 0.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--color-warm-gray)',
              }}
            >
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1rem',
            borderTop: '1px solid var(--color-divider-light)',
          }}
        >
          <button
            onClick={() => onOpenDetails(project)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--color-charcoal)',
              fontFamily: 'var(--font-sans)',
            }}
            className="explore-btn"
          >
            <Layers size={14} color="var(--color-burnt-orange)" />
            <span>Architecture</span>
            <ArrowRight size={14} />
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--color-warm-gray)',
              padding: '0.35rem 0.65rem',
              border: '1px solid var(--color-divider)',
              borderRadius: '3px',
              transition: 'all var(--transition-fast)',
            }}
            className="repo-btn"
            title={`View ${project.title} on GitHub`}
          >
            <Github size={13} />
            <span>CODE</span>
            <ExternalLink size={11} />
          </a>
        </div>
      </div>

      <style>{`
        .project-showcase-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          border-color: var(--color-copper);
        }
        .project-showcase-card:hover .project-card-image {
          transform: scale(1.04);
        }
        .explore-btn:hover {
          color: var(--color-burnt-orange);
        }
        .repo-btn:hover {
          border-color: var(--color-charcoal);
          color: var(--color-charcoal);
          background-color: var(--color-cream);
        }
      `}</style>
    </article>
  );
};
