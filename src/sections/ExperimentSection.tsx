import React, { useState } from 'react';
import { CHAPTERS, EXPERIMENT_METRICS } from '../data/portfolioData';
import { Activity, ChevronRight } from 'lucide-react';

interface ExperimentSectionProps {
  onNavigate: (id: string) => void;
}

export const ExperimentSection: React.FC<ExperimentSectionProps> = ({ onNavigate }) => {
  const chapter = CHAPTERS[2];

  // Interactive beat frequency simulator
  const [selectedBph, setSelectedBph] = useState(28800);
  const frequencies = [
    { bph: 18000, hz: 2.5, label: "18,000 BPH", style: "Vintage Caliber", note: "Deliberate baseline" },
    { bph: 21600, hz: 3.0, label: "21,600 BPH", style: "Standard Movement", note: "Balanced daily rate" },
    { bph: 28800, hz: 4.0, label: "28,800 BPH", style: "High-Beat Caliber", note: "Modern precision (SK Standard)" },
    { bph: 36000, hz: 5.0, label: "36,000 BPH", style: "Ultra-High Chrono", note: "Sub-second resolution" },
  ];

  const currentFreq = frequencies.find(f => f.bph === selectedBph) || frequencies[2];

  return (
    <section
      id="experiment"
      style={{
        minHeight: '85vh',
        padding: '5rem 0 3rem 0',
        position: 'relative',
        borderTop: '1px solid var(--color-divider-light)',
      }}
      aria-label="Chapter 03: Experiment"
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

        {/* Subtitle */}
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

        {/* Metric Telemetry Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          {EXPERIMENT_METRICS.map((metric: any) => (
            <div
              key={metric.label}
              style={{
                backgroundColor: 'var(--color-paper)',
                border: '1px solid var(--color-divider)',
                borderRadius: '6px',
                padding: '1.25rem',
                boxShadow: 'var(--shadow-subtle)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span className="mono-label" style={{ fontSize: '0.68rem', marginBottom: '0.35rem' }}>
                {metric.label}
              </span>
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'var(--color-burnt-orange)',
                  lineHeight: 1.1,
                  marginBottom: '0.35rem',
                }}
              >
                {metric.value}
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-warm-gray)', marginTop: 'auto' }}>
                {metric.note}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Escapement & Pulse Regulator Widget */}
        <div
          style={{
            backgroundColor: 'var(--color-cream)',
            border: '1px solid var(--color-divider)',
            borderRadius: '6px',
            padding: '1.75rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Activity size={16} color="var(--color-burnt-orange)" />
              <span className="mono-label" style={{ color: 'var(--color-charcoal)' }}>
                ESCAPEMENT IMPULSE REGULATOR
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                padding: '0.2rem 0.5rem',
                backgroundColor: 'var(--color-paper)',
                borderRadius: '3px',
                color: 'var(--color-burnt-orange)',
                fontWeight: 600,
              }}
            >
              {currentFreq.hz} Hz ({currentFreq.bph} BPH)
            </span>
          </div>

          <p
            style={{
              fontSize: '0.88rem',
              color: 'var(--color-charcoal)',
              lineHeight: 1.55,
              marginBottom: '1.25rem',
            }}
          >
            In a watch, the escapement converts continuous mainspring power into precise discrete beats. In machine learning, experimentation converts noisy signals into convergent models. Select a frequency to witness the regulating balance pulse:
          </p>

          {/* Frequency Selector Buttons */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '0.5rem',
              marginBottom: '1.25rem',
            }}
          >
            {frequencies.map((f) => {
              const isSelected = f.bph === selectedBph;
              return (
                <button
                  key={f.bph}
                  onClick={() => setSelectedBph(f.bph)}
                  style={{
                    padding: '0.65rem 0.75rem',
                    borderRadius: '4px',
                    border: isSelected
                      ? '1.5px solid var(--color-burnt-orange)'
                      : '1px solid var(--color-divider)',
                    backgroundColor: isSelected ? 'var(--color-paper)' : 'rgba(245, 241, 232, 0.6)',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all var(--transition-fast)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--color-burnt-orange)' : 'var(--color-charcoal)',
                    }}
                  >
                    {f.label}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--color-warm-gray)' }}>
                    {f.style}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Visual Oscillating Pulse Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: 'var(--color-paper)',
              padding: '0.85rem 1.25rem',
              borderRadius: '4px',
              border: '1px solid var(--color-divider-light)',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                border: '2px solid var(--color-burnt-orange)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: `balance-oscillate ${1 / currentFreq.hz}s ease-in-out infinite`,
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'var(--color-charcoal)',
                  borderRadius: '50%',
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--color-charcoal)',
                  fontWeight: 500,
                }}
              >
                Regulating note: {currentFreq.note}
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-warm-gray)' }}>
                Tuned against telemetry variance in Indian Railway timetables and edge vision networks.
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => onNavigate('projects')}
          className="text-link"
          style={{ fontSize: '0.86rem' }}
        >
          <span>Examine the projects built with this methodology</span>
          <ChevronRight size={14} />
        </button>
      </div>
    </section>
  );
};
