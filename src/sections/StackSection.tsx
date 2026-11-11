import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code2,
  Cpu,
  SlidersHorizontal,
  Network,
  Sparkles,
  Wrench,
} from 'lucide-react';

interface StackSectionProps {
  onNavigate?: (sectionId: string) => void;
}

const categoryIconMap: Record<string, React.ReactNode> = {
  languages: <Code2 size={17} style={{ color: 'var(--accent)' }} />,
  ml: <Cpu size={17} style={{ color: 'var(--accent)' }} />,
  'ml-engineering': <SlidersHorizontal size={17} style={{ color: 'var(--accent)' }} />,
  'deep-learning': <Network size={17} style={{ color: 'var(--accent)' }} />,
  'ds-genai': <Sparkles size={17} style={{ color: 'var(--accent)' }} />,
  tools: <Wrench size={17} style={{ color: 'var(--accent)' }} />,
};

interface KeycapChipProps {
  label: string;
}

const KeycapChip: React.FC<KeycapChipProps> = ({ label }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.46rem 0.85rem',
        backgroundColor: '#FFFFFF',
        border: `1px solid ${hovered ? 'var(--accent)' : '#E3E2DD'}`,
        borderRadius: '3px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.78rem',
        fontWeight: 600,
        color: hovered ? 'var(--text-primary)' : 'var(--text-secondary)',
        transform: hovered ? 'translateY(1px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 1px 0 #D4D3CD, 0 2px 6px rgba(255, 79, 0, 0.08)'
          : '0 2px 0 #DCD9D0, 0 1px 3px rgba(0, 0, 0, 0.03)',
        transition: 'transform 100ms ease, box-shadow 100ms ease, border-color 140ms ease, color 140ms ease',
        userSelect: 'none',
      }}
    >
      <span
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: hovered ? 'var(--accent)' : '#C6C5BF',
          flexShrink: 0,
        }}
      />
      <span>{label}</span>
    </span>
  );
};

export const StackSection: React.FC<StackSectionProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const visibleCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--grid-hairline)',
      }}
    >
      <div id="stack" style={{ position: 'absolute', top: 0 }} />
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.75rem',
          }}
        >
          <div style={{ maxWidth: '720px' }}>
            <div className="reveal-on-scroll architectural-label">
              <span>04 // TECHNICAL SKILLS</span>
            </div>

            <h2 className="reveal-on-scroll stagger-1 swiss-headline" style={{ marginBottom: '0.9rem' }}>
              Core Stack, ML Methods &amp;{' '}
              <span style={{ color: 'var(--accent)' }}>Engineering</span> Tooling.
            </h2>

            <p
              className="reveal-on-scroll stagger-2"
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
              }}
            >
              Organized by domain across languages, tabular and deep learning frameworks,
              validation discipline, GenAI serving, and software delivery.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div
            className="reveal-on-scroll stagger-2"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.45rem',
            }}
          >
            <button
              onClick={() => setActiveCategory('all')}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600,
                padding: '0.4rem 0.75rem',
                borderRadius: '2px',
                border: `1px solid ${activeCategory === 'all' ? 'var(--accent)' : '#E3E2DD'}`,
                backgroundColor: activeCategory === 'all' ? 'var(--accent-soft)' : '#FFFFFF',
                color: activeCategory === 'all' ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              ALL ({SKILL_CATEGORIES.length})
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  padding: '0.4rem 0.75rem',
                  borderRadius: '2px',
                  border: `1px solid ${activeCategory === cat.id ? 'var(--accent)' : '#E3E2DD'}`,
                  backgroundColor: activeCategory === cat.id ? 'var(--accent-soft)' : '#FFFFFF',
                  color: activeCategory === cat.id ? 'var(--accent)' : 'var(--text-secondary)',
                }}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Grouped Skill Categories Grid */}
        <div
          className="skills-categories-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '1.5rem',
          }}
        >
          {visibleCategories.map((category, idx) => (
            <div
              key={category.id}
              className={`reveal-on-scroll stagger-${(idx % 3) + 1} architectural-card-flat`}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E3E2DD',
                borderRadius: '4px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  paddingBottom: '0.85rem',
                  borderBottom: '1px solid #E3E2DD',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.3rem' }}>
                    {categoryIconMap[category.id]}
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.12rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {category.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                    {category.subtitle}
                  </p>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    backgroundColor: '#FAF9F6',
                    border: '1px solid #E3E2DD',
                    padding: '0.18rem 0.5rem',
                    borderRadius: '2px',
                    flexShrink: 0,
                  }}
                >
                  {category.skills.length} ITEMS
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                {category.skills.map((skill) => (
                  <KeycapChip key={skill} label={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .skills-categories-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StackSection;
