import React from 'react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Award, Terminal, BarChart3, Users, Code } from 'lucide-react';

const iconForAchievement = (id: string) => {
  switch (id) {
    case 'amazon-ai-summit':
      return <Award size={18} style={{ color: 'var(--accent)' }} />;
    case 'kshitij-ca':
      return <Users size={18} style={{ color: 'var(--accent)' }} />;
    case 'leetcode':
      return <Terminal size={18} style={{ color: 'var(--accent)' }} />;
    case 'codechef':
      return <Code size={18} style={{ color: 'var(--accent)' }} />;
    case 'kaggle-ml':
      return <BarChart3 size={18} style={{ color: 'var(--accent)' }} />;
    default:
      return <Award size={18} style={{ color: 'var(--accent)' }} />;
  }
};

export const AchievementsSection: React.FC = () => {
  return (
    <section
      id="achievements"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--grid-hairline)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '820px', marginBottom: '3rem' }}>
          <div className="reveal-on-scroll architectural-label">
            <span>05 // ACHIEVEMENTS &amp; MILESTONES</span>
          </div>

          <h2 className="reveal-on-scroll stagger-1 swiss-headline" style={{ marginBottom: '1rem' }}>
            Verified Selections, Leadership &amp;{' '}
            <span style={{ color: 'var(--accent)' }}>Problem-Solving</span> Track Record.
          </h2>

          <p
            className="reveal-on-scroll stagger-2"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
            }}
          >
            Milestones across applied AI product selection, technical campus outreach, competitive
            programming consistency, and cross-validated ML pipelines.
          </p>
        </div>

        {/* Elegant Cards Grid */}
        <div
          className="achievements-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.35rem',
          }}
        >
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={item.id}
              className={`reveal-on-scroll stagger-${(idx % 3) + 1} architectural-card`}
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E3E2DD',
                borderRadius: '4px',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: 'var(--accent)',
                    }}
                  >
                    {iconForAchievement(item.id)}
                    <span>{item.tag}</span>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      backgroundColor: '#FAF9F6',
                      border: '1px solid #E3E2DD',
                      padding: '0.16rem 0.5rem',
                      borderRadius: '2px',
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.3,
                    marginBottom: '0.35rem',
                  }}
                >
                  {item.title}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)',
                    marginBottom: '0.85rem',
                  }}
                >
                  {item.organization}
                </div>

                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.62,
                  }}
                >
                  {item.description}
                </p>
              </div>

              {item.metric && (
                <div
                  style={{
                    paddingTop: '0.85rem',
                    borderTop: '1px solid #E3E2DD',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                  }}
                >
                  <span style={{ color: 'var(--text-muted)' }}>OUTCOME</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{item.metric}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

