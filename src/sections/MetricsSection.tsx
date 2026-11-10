import React from 'react';
import { ARCHITECTURAL_METRICS } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';

interface MetricsSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="metrics"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--grid-hairline)',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '4.5rem' }}>
          <div className="reveal-on-scroll architectural-label">
            <span>03 / VERIFIED METRICS</span>
          </div>

          <h2
            className="reveal-on-scroll stagger-1 swiss-headline"
            style={{ marginBottom: '1.25rem' }}
          >
            Empirical Benchmarks &amp;{' '}
            <span style={{ color: 'var(--accent)' }}>System</span> Outcomes.
          </h2>

          <p
            className="reveal-on-scroll stagger-2"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}
          >
            Engineering claims require measurable verification. Below are the verified latency,
            compression, and regression metrics from production deployments.
          </p>
        </div>

        {/* 4 Architectural Metric Blocks with Studio Shadows */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.75rem',
            marginBottom: '4.5rem',
          }}
          className="metrics-grid"
        >
          {ARCHITECTURAL_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`reveal-on-scroll stagger-${idx + 1} architectural-card`}
              style={{
                padding: '2.25rem 2rem',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '260px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                    fontWeight: 600,
                  }}
                >
                  {metric.category}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '2.8rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.0,
                    marginBottom: '0.65rem',
                  }}
                >
                  {metric.value}
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                    marginBottom: '0.85rem',
                  }}
                >
                  {metric.label}
                </h3>

                <p
                  style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {metric.detail}
                </p>
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--grid-hairline)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                }}
              >
                &bull; {metric.benchmark}
              </div>
            </div>
          ))}
        </div>

        {/* Comparative Analysis Table */}
        <div
          className="reveal-on-scroll stagger-3 architectural-card"
          style={{
            padding: '2.5rem',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.65rem',
              fontWeight: 600,
            }}
          >
            ARCHITECTURE COMPARATIVE ANALYSIS
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.55rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '1.75rem',
            }}
          >
            Empirical Baseline vs Engineered Implementation
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Case 01: Railway Delay Telemetry */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '2px',
                border: '1px solid var(--grid-hairline)',
                backgroundColor: 'var(--bg-canvas)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.85rem',
                }}
              >
                Railway Timetable vs TrackX Telemetry
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--text-muted)' }}>
                  &times; Static Offset: Naive compounding delay calculations
                </div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span>XGBoost Regression: 42% lower ETA deviation error</span>
                </div>
              </div>
            </div>

            {/* Case 02: Edge CV */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '2px',
                border: '1px solid var(--grid-hairline)',
                backgroundColor: 'var(--bg-canvas)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.85rem',
                }}
              >
                Cloud-Hosted AI vs TrailLens Edge CV
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--text-muted)' }}>
                  &times; Cloud API: 350ms - 1.2s round-trip latency &amp; data leakage
                </div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span>Quantized Edge: 22.4ms CPU evaluation, 100% offline</span>
                </div>
              </div>
            </div>

            {/* Case 03: Data Synchronization */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '2px',
                border: '1px solid var(--grid-hairline)',
                backgroundColor: 'var(--bg-canvas)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '0.85rem',
                }}
              >
                Polling vs Realtime Supabase Sync
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
                <div style={{ color: 'var(--text-muted)' }}>
                  &times; Periodic HTTP Polling: Server overhead &amp; stale state
                </div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span>Realtime WebSocket Tables: Sub-30ms client state updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Link */}
        <div
          className="reveal-on-scroll stagger-4"
          style={{
            marginTop: '4.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <a
            href="/Satyam_Kumar_Resume.pdf"
            download="Satyam_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            title="Download Satyam Kumar's Technical Resume"
          >
            <FileText size={15} />
            <span>Download Full Resume (PDF)</span>
            <ArrowUpRight size={13} />
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary"
            id="metrics-to-contact-btn"
          >
            <span>Initiate Contact</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
export default MetricsSection;
