import React from 'react';
import { CHAPTERS } from '../data/portfolioData';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

interface EvolveSectionProps {
  onNavigate: (id: string) => void;
}

export const EvolveSection: React.FC<EvolveSectionProps> = ({ onNavigate }) => {
  const chapter = CHAPTERS[4];

  const focusAreas = [
    {
      title: "Edge AI & Small Language Models (SLMs)",
      goal: "Distilling, pruning, and quantizing neural networks for sub-30ms offline inference on commodity mobile and edge devices.",
      evidence: "Engineered 5.45 MB PyTorch model in TrailLens achieving 22.4 ms CPU latency with 100% offline edge privacy.",
    },
    {
      title: "Real-Time Telemetry & Gradient Boosting",
      goal: "Predicting timetable deviations and operational bottlenecks across high-density transportation networks.",
      evidence: "Created TrackX dynamic ETA prediction engine cutting prediction variance by 42% over static timetable formulas.",
    },
    {
      title: "Autonomous Agentic Architecture",
      goal: "Building stateful conversational workflows with persistent vector memory and provider-agnostic cloud integrations.",
      evidence: "Architected FarmBank WhatsApp AI with OpenAI GPT-4o-mini and modular Twilio/Meta provider abstraction layer.",
    },
  ];

  return (
    <section
      id="evolve"
      style={{
        minHeight: '85vh',
        padding: '5rem 0 3rem 0',
        position: 'relative',
        borderTop: '1px solid var(--color-divider-light)',
      }}
      aria-label="Chapter 05: Evolve"
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
          Like a watchmaker inspecting the newly assembled escapement through a loupe, every finished milestone is merely a foundation for the next calibration. My technical trajectory focuses on where intelligence meets tangible constraints: running sophisticated models on constrained hardware, engineering reliable web infrastructure, and solving real operational friction.
        </p>

        {/* Focus Areas & Evidence Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {focusAreas.map((area, i) => (
            <div
              key={area.title}
              style={{
                backgroundColor: 'var(--color-paper)',
                border: '1px solid var(--color-divider)',
                borderRadius: '6px',
                padding: '1.5rem',
                boxShadow: 'var(--shadow-subtle)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.65rem',
                  marginBottom: '0.5rem',
                }}
              >
                <span className="mono-number" style={{ fontSize: '0.85rem' }}>
                  0{i + 1}
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    color: 'var(--color-charcoal)',
                  }}
                >
                  {area.title}
                </h4>
              </div>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-charcoal-light)',
                  lineHeight: 1.6,
                  marginBottom: '1rem',
                }}
              >
                {area.goal}
              </p>

              <div
                style={{
                  padding: '0.65rem 0.85rem',
                  backgroundColor: 'var(--color-cream)',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  fontSize: '0.82rem',
                  color: 'var(--color-charcoal)',
                }}
              >
                <CheckCircle2
                  size={15}
                  color="var(--color-burnt-orange)"
                  style={{ flexShrink: 0, marginTop: '2px' }}
                />
                <div>
                  <strong>Demonstrated Evidence: </strong>
                  <span>{area.evidence}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Milestone Callout */}
        <div
          style={{
            backgroundColor: 'var(--color-cream)',
            border: '1px solid var(--color-divider)',
            borderRadius: '6px',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <div className="mono-label" style={{ color: 'var(--color-burnt-orange)', marginBottom: '0.25rem' }}>
              RECOGNITION & CONTRIBUTION
            </div>
            <div style={{ fontSize: '0.94rem', color: 'var(--color-charcoal)', fontWeight: 500 }}>
              Smart India Hackathon (SIH) RailSight AI Contributor // Active Open Source Builder
            </div>
          </div>

          <button
            onClick={() => onNavigate('connect')}
            className="btn-primary"
            style={{ fontSize: '0.82rem', padding: '0.65rem 1.25rem' }}
          >
            <span>Proceed to Chapter 06: Connect</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
