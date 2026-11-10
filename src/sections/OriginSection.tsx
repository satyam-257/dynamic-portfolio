import React from 'react';
import { PROFILE, CHAPTERS } from '../data/portfolioData';
import { ArrowDown, ArrowRight } from 'lucide-react';

interface OriginSectionProps {
  onNavigate: (id: string) => void;
}

export const OriginSection: React.FC<OriginSectionProps> = ({ onNavigate }) => {
  const chapter = CHAPTERS[0];

  return (
    <section
      id="origin"
      style={{
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '5rem 0 3rem 0',
        position: 'relative',
      }}
      aria-label="Chapter 01: Origin"
    >
      <div style={{ maxWidth: '780px' }}>
        {/* Editorial Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
          <span className="mono-number">{chapter.number}</span>
          <span className="mono-label">CHAPTER // {chapter.title}</span>
          <span
            style={{
              height: '1px',
              width: '40px',
              backgroundColor: 'var(--color-divider)',
            }}
          />
        </div>

        {/* Hero Title */}
        <h1
          className="serif-display"
          style={{
            fontSize: 'var(--text-display)',
            lineHeight: 0.95,
            color: 'var(--color-charcoal)',
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}
        >
          {PROFILE.heroHeadline}
        </h1>

        {/* Subtitle / Philosophy */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'var(--text-2xl)',
            fontStyle: 'italic',
            color: 'var(--color-charcoal)',
            lineHeight: 1.25,
            marginBottom: '1.5rem',
          }}
        >
          "{PROFILE.heroSubtitle}"
        </p>

        {/* Narrative Paragraph */}
        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-charcoal-light)',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
            maxWidth: '680px',
          }}
        >
          Like a mechanical watchmaker who spends hours examining the interplay of mainsprings, pinions, and balance wheels, I look at software and intelligence as systems of interlocking discipline. From algorithmic telemetry to edge computer vision, every line of code is an intentional beat in a larger mechanism.
        </p>

        {/* Role Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '2.5rem',
          }}
        >
          {PROFILE.roles.map((role: any, idx: any) => (
            <div
              key={role}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 0.9rem',
                backgroundColor: 'var(--color-cream)',
                border: '1px solid var(--color-divider)',
                borderRadius: '4px',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--text-xs)',
                color: 'var(--color-charcoal)',
              }}
            >
              <span className="mono-number" style={{ fontSize: '0.65rem' }}>
                0{idx + 1}
              </span>
              <span>{role}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons: Explore Journey & View Projects */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <button
            onClick={() => onNavigate('foundation')}
            className="btn-primary"
            id="explore-journey-btn"
          >
            <span>Explore My Journey</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => onNavigate('projects')}
            className="btn-secondary"
            id="view-projects-btn"
          >
            <span>View Working Systems</span>
            <ArrowDown size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};
