import React from 'react';
import { CHAPTERS } from '../data/portfolioData';

interface ChapterRailProps {
  activeChapterId: string;
  scrollProgress: number; // 0.0 to 1.0
  onNavigate: (id: string) => void;
}

export const ChapterRail: React.FC<ChapterRailProps> = ({
  activeChapterId,
  scrollProgress,
  onNavigate,
}) => {
  return (
    <aside
      style={{
        position: 'fixed',
        left: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 90,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.85rem',
        padding: '0.85rem 0.65rem',
        backgroundColor: 'rgba(245, 241, 232, 0.88)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid var(--color-divider)',
        borderRadius: '24px',
        boxShadow: 'var(--shadow-subtle)',
      }}
      className="chapter-rail-container"
      aria-label="Chapter Narrative Rail"
    >
      {/* Progress track vertical meter */}
      <div
        style={{
          position: 'absolute',
          left: '19px',
          top: '20px',
          bottom: '20px',
          width: '2px',
          backgroundColor: 'var(--color-divider-light)',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: '100%',
            height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%`,
            backgroundColor: 'var(--color-burnt-orange)',
            transition: 'height 0.15s ease-out',
          }}
        />
      </div>

      {CHAPTERS.map((ch) => {
        const isActive = activeChapterId === ch.id;

        return (
          <button
            key={ch.id}
            onClick={() => onNavigate(ch.id)}
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              background: 'none',
              border: 'none',
              padding: '0.3rem 0.2rem',
              cursor: 'pointer',
              textAlign: 'left',
            }}
            aria-label={`Jump to chapter ${ch.number}: ${ch.title}`}
            aria-current={isActive ? 'step' : undefined}
          >
            {/* Node Indicator */}
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: isActive ? 'var(--color-paper)' : 'var(--color-cream)',
                border: isActive
                  ? '2px solid var(--color-burnt-orange)'
                  : '1.5px solid var(--color-stone)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all var(--transition-fast)',
                boxShadow: isActive ? '0 0 0 3px rgba(201, 98, 53, 0.2)' : 'none',
              }}
            >
              {isActive && (
                <div
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-burnt-orange)',
                  }}
                />
              )}
            </div>

            {/* Hover / Active Label */}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--color-burnt-orange)' : 'var(--color-warm-gray)',
                fontWeight: isActive ? 600 : 400,
                opacity: isActive ? 1 : 0.75,
                transition: 'all var(--transition-fast)',
                whiteSpace: 'nowrap',
              }}
              className="chapter-rail-label"
            >
              <span style={{ marginRight: '0.25rem', opacity: 0.6 }}>{ch.number}</span>
              {ch.navLabel}
            </span>
          </button>
        );
      })}

      <style>{`
        @media (max-width: 1200px) {
          .chapter-rail-container {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
};
