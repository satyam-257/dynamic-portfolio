import React from 'react';
import { CHAPTERS, FOUNDATION_SKILLS } from '../data/portfolioData';
import { ChevronRight } from 'lucide-react';

interface FoundationSectionProps {
  onNavigate: (id: string) => void;
}

export const FoundationSection: React.FC<FoundationSectionProps> = ({ onNavigate }) => {
  const chapter = CHAPTERS[1];

  return (
    <section
      id="foundation"
      style={{
        minHeight: '85vh',
        padding: '5rem 0 3rem 0',
        position: 'relative',
        borderTop: '1px solid var(--color-divider-light)',
      }}
      aria-label="Chapter 02: Foundation"
    >
      <div style={{ maxWidth: '820px' }}>
        {/* Chapter Eyebrow */}
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

        {/* Section Headline */}
        <h2
          style={{
            fontSize: 'var(--text-3xl)',
            color: 'var(--color-charcoal)',
            marginBottom: '1rem',
            lineHeight: 1.08,
          }}
        >
          {chapter.headline}
        </h2>

        {/* Philosophy */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            fontStyle: 'italic',
            color: 'var(--color-copper)',
            marginBottom: '1.5rem',
          }}
        >
          "{chapter.subtitle}"
        </p>

        {/* Narrative text */}
        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-charcoal-light)',
            lineHeight: 1.75,
            marginBottom: '2rem',
          }}
        >
          {chapter.supportingText}
        </p>

        {/* Skills Matrix by Category */}
        <div
          style={{
            backgroundColor: 'var(--color-paper)',
            borderRadius: '6px',
            border: '1px solid var(--color-divider)',
            padding: '1.75rem',
            boxShadow: 'var(--shadow-subtle)',
            marginBottom: '2.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.25rem',
              borderBottom: '1px solid var(--color-divider-light)',
              paddingBottom: '0.75rem',
            }}
          >
            <span className="mono-label">SOFTWARE DEVELOPMENT CAPABILITIES</span>
            <span className="mono-number" style={{ fontSize: '0.75rem' }}>
              4 DISCIPLINES
            </span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {FOUNDATION_SKILLS.map((grp: any) => (
              <div key={grp.category}>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.15rem',
                    color: 'var(--color-charcoal)',
                    marginBottom: '0.65rem',
                  }}
                >
                  {grp.category}
                </h4>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                  }}
                >
                  {grp.items.map((item: any) => (
                    <li
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.86rem',
                        color: 'var(--color-charcoal-light)',
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--color-burnt-orange)',
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* The Disassembled Mechanism Metaphor */}
        <div
          style={{
            backgroundColor: 'var(--color-cream)',
            borderRadius: '6px',
            border: '1px solid var(--color-divider)',
            padding: '1.5rem',
          }}
        >
          <div
            className="mono-label"
            style={{ color: 'var(--color-burnt-orange)', marginBottom: '0.65rem' }}
          >
            MECHANICAL ANALOGY // MOVEMENT DISASSEMBLY
          </div>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-charcoal)',
              lineHeight: 1.6,
              marginBottom: '1rem',
            }}
          >
            Just as the caliber must be stripped down to pinions and baseplates to comprehend its power transfer, mastering software required decomposing full-stack applications into network protocols, DOM lifecycles, and database constraints.
          </p>

          <button
            onClick={() => onNavigate('experiment')}
            className="text-link"
            style={{ fontSize: '0.84rem' }}
          >
            <span>Proceed to Chapter 03: Experiment</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
