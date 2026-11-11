import React, { useState } from 'react';
import { KAGGLE_CASE_STUDY } from '../data/portfolioData';
import { FlaskConical, ShieldAlert, GitBranch, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ExperimentsSection: React.FC = () => {
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(0);

  return (
    <section
      id="experiments"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--grid-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '860px', marginBottom: '3.25rem' }}>
          <div className="reveal-on-scroll architectural-label">
            <span>03 // {KAGGLE_CASE_STUDY.eyebrow}</span>
          </div>

          <h2 className="reveal-on-scroll stagger-1 swiss-headline" style={{ marginBottom: '1rem' }}>
            Beyond Projects: <span style={{ color: 'var(--accent)' }}>Machine Learning</span> Experiments.
          </h2>

          <p
            className="reveal-on-scroll stagger-2"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 1.68,
            }}
          >
            Deep experimental rigor across feature engineering, out-of-fold validation, and leakage
            diagnostics — evaluated strictly via stratified cross-validation.
          </p>
        </div>

        {/* Featured Kaggle Case Study Container */}
        <div
          className="reveal-on-scroll stagger-1 architectural-card"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E3E2DD',
            borderRadius: '6px',
            padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          {/* Case Study Title & CV Disclaimer */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid #E3E2DD',
            }}
          >
            <div style={{ maxWidth: '720px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  backgroundColor: 'var(--accent-soft)',
                  border: '1px solid var(--accent-subtle-border)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2px',
                  marginBottom: '0.65rem',
                }}
              >
                <FlaskConical size={12} />
                <span>{KAGGLE_CASE_STUDY.badge}</span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.45rem, 1.2rem + 1vw, 2rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.03em',
                  marginBottom: '0.55rem',
                }}
              >
                {KAGGLE_CASE_STUDY.title}
              </h3>

              <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {KAGGLE_CASE_STUDY.description}
              </p>
            </div>
          </div>

          {/* Explicit Cross-Validation Labeling Notice */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.75rem 1rem',
              backgroundColor: '#FAF9F6',
              border: '1px solid #E3E2DD',
              borderLeft: '3px solid var(--accent)',
              borderRadius: '2px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: 'var(--text-secondary)',
            }}
          >
            <ShieldAlert size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <span>
              <strong>VALIDATION NOTE:</strong> {KAGGLE_CASE_STUDY.validationDisclaimer}
            </span>
          </div>

          {/* 4 Summary Stat Tiles */}
          <div
            className="experiment-stats-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '0.9rem',
            }}
          >
            {KAGGLE_CASE_STUDY.headlineStats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  padding: '1.1rem',
                  backgroundColor: '#FAF9F6',
                  border: '1px solid #E3E2DD',
                  borderRadius: '3px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.55rem',
                    fontWeight: 700,
                    color: stat.value === '0.968' ? 'var(--accent)' : 'var(--text-primary)',
                    lineHeight: 1.1,
                    marginBottom: '0.35rem',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.88rem', fontWeight: 700 }}>
                  {stat.label}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.69rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Experimental Pipeline Diagram */}
          <div
            style={{
              backgroundColor: '#FAF9F6',
              border: '1px solid #E3E2DD',
              borderRadius: '4px',
              padding: '1.35rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                <GitBranch size={14} style={{ color: 'var(--accent)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.73rem', fontWeight: 700 }}>
                  EXPERIMENTAL PIPELINE ARCHITECTURE (SELECT STAGE TO INSPECT)
                </span>
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                LEAKAGE-FREE 10-FOLD STRATIFIED FLOW
              </span>
            </div>

            <div
              className="pipeline-nodes-row"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: '0.75rem',
                marginBottom: '1rem',
              }}
            >
              {KAGGLE_CASE_STUDY.pipelineStages.map((stage, idx) => {
                const isSelected = idx === selectedStageIdx;
                return (
                  <button
                    key={stage.step}
                    onClick={() => setSelectedStageIdx(idx)}
                    style={{
                      textAlign: 'left',
                      padding: '0.9rem',
                      borderRadius: '3px',
                      backgroundColor: isSelected ? '#FFFFFF' : '#F5F5F3',
                      border: `1px solid ${isSelected ? 'var(--accent)' : '#E3E2DD'}`,
                      boxShadow: isSelected ? 'var(--shadow-studio-sm)' : 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      position: 'relative',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: 700,
                          color: isSelected ? 'var(--accent)' : 'var(--text-muted)',
                        }}
                      >
                        STAGE {stage.step}
                      </span>
                      {idx < 3 && <ArrowRight size={12} style={{ color: 'var(--text-faint)' }} />}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        lineHeight: 1.3,
                      }}
                    >
                      {stage.title}
                    </div>
                  </button>
                );
              })}
            </div>

            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E3E2DD',
                borderRadius: '3px',
                padding: '1rem 1.15rem',
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
              }}
            >
              <strong style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                [{KAGGLE_CASE_STUDY.pipelineStages[selectedStageIdx].title.toUpperCase()}]:{' '}
              </strong>
              {KAGGLE_CASE_STUDY.pipelineStages[selectedStageIdx].detail}
            </div>
          </div>

          {/* 2-Column Technical Evidence: Model Progression Chart (Left) + Ablations & Contributions (Right) */}
          <div
            className="experiment-evidence-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
              gap: '1.5rem',
              alignItems: 'start',
            }}
          >
            {/* Left: CV ROC-AUC Progression Visualization */}
            <div
              style={{
                backgroundColor: '#FAF9F6',
                border: '1px solid #E3E2DD',
                borderRadius: '4px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700 }}>
                  CV ROC-AUC PROGRESSION (10-FOLD STRATIFIED)
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent)', fontWeight: 700 }}>
                  0.957 → 0.968 (+0.011)
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {KAGGLE_CASE_STUDY.modelProgression.map((row) => {
                  // Normalize bar scale visually around [0.950, 0.970] so +0.011 progression is clear
                  const normalizedWidth = Math.min(100, Math.max(12, ((row.score - 0.950) / 0.020) * 100));
                  const isBest = row.status === 'BEST CV';
                  return (
                    <div
                      key={row.model}
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: `1px solid ${isBest ? 'var(--accent-subtle-border)' : '#E3E2DD'}`,
                        borderRadius: '3px',
                        padding: '0.75rem 0.85rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          gap: '0.5rem',
                          marginBottom: '0.35rem',
                        }}
                      >
                        <span style={{ fontSize: '0.83rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {row.model}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            color: isBest ? 'var(--accent)' : 'var(--text-primary)',
                            flexShrink: 0,
                          }}
                        >
                          {row.score.toFixed(3)} ({row.delta})
                        </span>
                      </div>

                      <div
                        style={{
                          height: '7px',
                          backgroundColor: '#EEEEEC',
                          borderRadius: '2px',
                          overflow: 'hidden',
                          marginBottom: '0.35rem',
                        }}
                      >
                        <div
                          style={{
                            width: `${normalizedWidth}%`,
                            height: '100%',
                            backgroundColor: isBest ? 'var(--accent)' : row.status === 'BASELINE' ? '#A2A09B' : '#121212',
                          }}
                        />
                      </div>

                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                        {row.notes}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Ablation Log Highlights & Technical Contributions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  backgroundColor: '#FAF9F6',
                  border: '1px solid #E3E2DD',
                  borderRadius: '4px',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', fontWeight: 700 }}>
                  KEEP / REJECT ABLATIONS &amp; LEAKAGE DIAGNOSTICS (28 LOGGED RUNS)
                </div>

                {KAGGLE_CASE_STUDY.ablationHighlights.map((item) => (
                  <div
                    key={item.experiment}
                    style={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E3E2DD',
                      borderRadius: '3px',
                      padding: '0.8rem 0.9rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.3rem',
                      }}
                    >
                      <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {item.experiment}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          color: 'var(--accent)',
                          backgroundColor: 'var(--accent-soft)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '2px',
                          flexShrink: 0,
                        }}
                      >
                        {item.verdict}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {item.finding}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  backgroundColor: '#FAF9F6',
                  border: '1px solid #E3E2DD',
                  borderRadius: '4px',
                  padding: '1.25rem',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    marginBottom: '0.7rem',
                  }}
                >
                  SUMMARY OF TECHNICAL CONTRIBUTIONS
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '0.45rem 0.85rem',
                  }}
                >
                  {KAGGLE_CASE_STUDY.contributions.map((c, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.81rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--accent)', marginTop: '0.24rem', flexShrink: 0 }} />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .experiment-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .pipeline-nodes-row {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
          .experiment-evidence-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .experiment-stats-grid,
          .pipeline-nodes-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperimentsSection;

