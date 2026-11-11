import React, { useState, useEffect } from 'react';
import {
  Train,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  MapPin,
  Calendar,
  Users,
  Wallet,
  Play,
  Pause,
} from 'lucide-react';

/* ============================================================================
   PROJECT 01 PREVIEW: TrackX Railway Network & Prototype ETA Console
   Clearly marks demo telemetry as prototype / simulated evaluation data.
   ============================================================================ */
const STATIONS = [
  { code: 'HWH', name: 'Howrah Jn', km: 0, schedOffset: '00:00', delayMin: 0 },
  { code: 'ASN', name: 'Asansol Jn', km: 200, schedOffset: '+02:45', delayMin: 6 },
  { code: 'DHN', name: 'Dhanbad Jn', km: 259, schedOffset: '+03:40', delayMin: 11 },
  { code: 'GYA', name: 'Gaya Jn', km: 458, schedOffset: '+06:25', delayMin: 14 },
  { code: 'DDU', name: 'Pt. DD Upadhyaya', km: 661, schedOffset: '+09:10', delayMin: 18 },
  { code: 'NDLS', name: 'New Delhi', km: 1451, schedOffset: '+17:20', delayMin: 12 },
];

export const TrackXInteractivePreview: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(2); // DHN
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STATIONS.length);
    }, 1800);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const currentStation = STATIONS[activeIdx];
  const progressPct = (activeIdx / (STATIONS.length - 1)) * 100;

  return (
    <div
      style={{
        backgroundColor: 'rgba(250, 249, 246, 0.58)',
        border: '1px solid rgba(227, 226, 221, 0.9)',
        borderRadius: '4px',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem',
      }}
    >
      {/* Prototype Disclaimer Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.45rem',
          paddingBottom: '0.55rem',
          borderBottom: '1px solid rgba(227, 226, 221, 0.9)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <Train size={13} style={{ color: 'var(--accent)' }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.69rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}
          >
            TRACKX NETWORK &amp; ETA CONSOLE
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.63rem',
              color: 'var(--text-muted)',
              backgroundColor: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid #E3E2DD',
              padding: '0.14rem 0.45rem',
              borderRadius: '2px',
            }}
            title="Illustrative prototype corridor preview; metrics come from 515-snapshot held-out evaluation."
          >
            DEMO ROUTE // 515-SNAPSHOT EVAL
          </span>
          <button
            onClick={() => setIsAnimating((v) => !v)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 600,
              color: isAnimating ? 'var(--accent)' : 'var(--text-primary)',
              backgroundColor: 'rgba(255, 255, 255, 0.78)',
              border: '1px solid #E3E2DD',
              padding: '0.16rem 0.5rem',
              borderRadius: '2px',
            }}
            aria-label={isAnimating ? 'Pause simulated train movement' : 'Step simulated train along route'}
          >
            {isAnimating ? <Pause size={11} /> : <Play size={11} />}
            <span>{isAnimating ? 'PAUSE' : 'STEP'}</span>
          </button>
        </div>
      </div>

      {/* Railway Corridor Schematic */}
      <div style={{ padding: '0.4rem 0.2rem 0.2rem' }}>
        <div style={{ position: 'relative', padding: '0.7rem 0.4rem 0.15rem' }}>
          {/* Track Baseline */}
          <div
            style={{
              position: 'absolute',
              top: '1.25rem',
              left: '18px',
              right: '18px',
              height: '2px',
              backgroundColor: '#DCD9D0',
            }}
          />
          {/* Progress Line */}
          <div
            style={{
              position: 'absolute',
              top: '1.25rem',
              left: '18px',
              width: `calc((100% - 36px) * ${progressPct / 100})`,
              height: '2px',
              backgroundColor: 'var(--accent)',
              transition: 'width 320ms ease',
            }}
          />

          {/* Station Nodes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${STATIONS.length}, 1fr)`,
              position: 'relative',
              zIndex: 2,
            }}
          >
            {STATIONS.map((st, idx) => {
              const isActive = idx === activeIdx;
              const isPassed = idx < activeIdx;
              return (
                <button
                  key={st.code}
                  onClick={() => {
                    setIsAnimating(false);
                    setActiveIdx(idx);
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                  }}
                  title={`Inspect ${st.name} (${st.code})`}
                >
                  <span
                    style={{
                      width: isActive ? '16px' : '10px',
                      height: isActive ? '16px' : '10px',
                      marginTop: isActive ? '0px' : '3px',
                      borderRadius: '50%',
                      backgroundColor: isActive
                        ? 'var(--accent)'
                        : isPassed
                        ? '#121212'
                        : '#FFFFFF',
                      border: `2px solid ${
                        isActive ? '#FFFFFF' : isPassed ? '#121212' : '#B5B3AA'
                      }`,
                      boxShadow: isActive ? '0 0 0 2px var(--accent)' : 'none',
                      transition: 'all 200ms ease',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                    }}
                  >
                    {st.code}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Station ETA Prediction Panel + Model MAE Benchmark */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))',
          gap: '0.65rem',
        }}
      >
        {/* Left Box: Station ETA Deviation Output */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.72)',
            border: '1px solid #E3E2DD',
            borderRadius: '3px',
            padding: '0.72rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              marginBottom: '0.45rem',
            }}
          >
            STATION TELEMETRY SAMPLE // {currentStation.name.toUpperCase()}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: '0.35rem',
            }}
          >
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Schedule Offset
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '0.86rem' }}>
              {currentStation.schedOffset}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              Predicted Deviation
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.92rem',
                color: 'var(--accent)',
              }}
            >
              +{currentStation.delayMin} min
            </span>
          </div>
        </div>

        {/* Right Box: Held-Out Model Evaluation Comparison (515 Snapshots) */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.72)',
            border: '1px solid #E3E2DD',
            borderRadius: '3px',
            padding: '0.72rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.42rem',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
            }}
          >
            HELD-OUT MAE BENCHMARK (515 SNAPSHOTS)
          </div>

          {/* Timetable Baseline Bar */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                marginBottom: '0.2rem',
              }}
            >
              <span style={{ color: 'var(--text-secondary)' }}>Timetable Baseline</span>
              <span style={{ fontWeight: 600 }}>17.97 min</span>
            </div>
            <div style={{ height: '6px', backgroundColor: '#EEEEEC', borderRadius: '2px' }}>
              <div style={{ width: '100%', height: '100%', backgroundColor: '#A2A09B', borderRadius: '2px' }} />
            </div>
          </div>

          {/* XGBoost Model Bar */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                marginBottom: '0.2rem',
              }}
            >
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                XGBoost Deviation Model
              </span>
              <span style={{ fontWeight: 700, color: 'var(--accent)' }}>10.37 min (-42%)</span>
            </div>
            <div style={{ height: '6px', backgroundColor: '#EEEEEC', borderRadius: '2px' }}>
              <div style={{ width: '57.7%', height: '100%', backgroundColor: 'var(--accent)', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================================
   PROJECT 02 PREVIEW: ExperimentPilot Verification & Calibration Workbench
   ============================================================================ */
const ECE_BINS = [
  { conf: 0.15, acc: 0.14 },
  { conf: 0.25, acc: 0.23 },
  { conf: 0.35, acc: 0.34 },
  { conf: 0.45, acc: 0.42 },
  { conf: 0.55, acc: 0.53 },
  { conf: 0.65, acc: 0.66 },
  { conf: 0.75, acc: 0.72 },
  { conf: 0.85, acc: 0.83 },
  { conf: 0.95, acc: 0.92 },
];

export const ExperimentPilotInteractivePreview: React.FC = () => {
  const [tab, setTab] = useState<'comparison' | 'matrix' | 'calibration'>('comparison');
  const [errorFilter, setErrorFilter] = useState<'ALL' | 'FP' | 'FN'>('FP');

  const sampleErrors = [
    { id: 'CASE-104', type: 'FP', prob: '0.78', trueLabel: 0, predLabel: 1, note: 'High-variance boundary sample' },
    { id: 'CASE-219', type: 'FP', prob: '0.64', trueLabel: 0, predLabel: 1, note: 'Over-confident positive shift' },
    { id: 'CASE-087', type: 'FN', prob: '0.41', trueLabel: 1, predLabel: 0, note: 'Missed minority subgroup pattern' },
  ].filter((s) => errorFilter === 'ALL' || s.type === errorFilter);

  return (
    <div
      style={{
        backgroundColor: 'rgba(250, 249, 246, 0.58)',
        border: '1px solid rgba(227, 226, 221, 0.9)',
        borderRadius: '4px',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem',
      }}
    >
      {/* Header + Tab Controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.45rem',
          paddingBottom: '0.55rem',
          borderBottom: '1px solid rgba(227, 226, 221, 0.9)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <ShieldCheck size={13} style={{ color: 'var(--accent)' }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.69rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
            }}
          >
            EXPERIMENTPILOT VERIFICATION WORKBENCH
          </span>
        </div>

        <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
          {[
            { id: 'comparison', label: 'Comparison' },
            { id: 'matrix', label: 'Confusion' },
            { id: 'calibration', label: '10-Bin ECE' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id as typeof tab)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 600,
                padding: '0.22rem 0.5rem',
                borderRadius: '2px',
                border: `1px solid ${tab === item.id ? 'var(--accent)' : '#E3E2DD'}`,
                backgroundColor: tab === item.id ? 'var(--accent-soft)' : 'rgba(255, 255, 255, 0.78)',
                color: tab === item.id ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Comparison + Compatibility Guardrail */}
      {tab === 'comparison' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                backgroundColor: 'rgba(255, 255, 255, 0.74)',
                border: '1px solid #E3E2DD',
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#F5F5F3', textAlign: 'left' }}>
                  <th style={{ padding: '0.55rem 0.7rem', borderBottom: '1px solid #E3E2DD' }}>Run</th>
                  <th style={{ padding: '0.55rem 0.7rem', borderBottom: '1px solid #E3E2DD' }}>Reported</th>
                  <th style={{ padding: '0.55rem 0.7rem', borderBottom: '1px solid #E3E2DD' }}>Verified Macro-F1</th>
                  <th style={{ padding: '0.55rem 0.7rem', borderBottom: '1px solid #E3E2DD' }}>10-Bin ECE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.55rem 0.7rem', borderBottom: '1px solid #E3E2DD', fontWeight: 600 }}>
                    XGBoost-v2 (depth=6)
                  </td>
                  <td style={{ padding: '0.55rem 0.7rem', borderBottom: '1px solid #E3E2DD', color: 'var(--text-muted)' }}>
                    Acc 0.88
                  </td>
                  <td style={{ padding: '0.55rem 0.7rem', borderBottom: '1px solid #E3E2DD', color: 'var(--accent)', fontWeight: 700 }}>
                    0.862 [VERIFIED]
                  </td>
                  <td style={{ padding: '0.55rem 0.7rem', borderBottom: '1px solid #E3E2DD' }}>0.031</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.55rem 0.7rem', fontWeight: 600 }}>
                    LogReg-Baseline (C=1.0)
                  </td>
                  <td style={{ padding: '0.55rem 0.7rem', color: 'var(--text-muted)' }}>Acc 0.82</td>
                  <td style={{ padding: '0.55rem 0.7rem', fontWeight: 600 }}>0.794 [VERIFIED]</td>
                  <td style={{ padding: '0.55rem 0.7rem' }}>0.058</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 0.7rem',
              backgroundColor: 'rgba(255, 255, 255, 0.74)',
              border: '1px solid var(--accent-subtle-border)',
              borderRadius: '3px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.67rem',
              color: 'var(--text-secondary)',
            }}
          >
            <AlertTriangle size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <span>
              <strong>GUARDRAIL ACTIVE:</strong> Comparisons blocked automatically if dataset split, schema, or task type differ.
            </span>
          </div>
        </div>
      )}

      {/* Tab 2: Confusion Matrix + FP/FN Disagreement Explorer */}
      {tab === 'matrix' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))',
            gap: '0.65rem',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid #E3E2DD',
              borderRadius: '3px',
              padding: '0.72rem',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                marginBottom: '0.55rem',
              }}
            >
              CONFUSION MATRIX (SAMPLE)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem' }}>
              {[
                { label: 'TN', val: '412', good: true },
                { label: 'FP', val: '18', good: false },
                { label: 'FN', val: '24', good: false },
                { label: 'TP', val: '346', good: true },
              ].map((cell) => (
                <div
                  key={cell.label}
                  style={{
                    padding: '0.55rem',
                    borderRadius: '2px',
                    backgroundColor: cell.good ? '#F5F5F3' : 'var(--accent-soft)',
                    border: `1px solid ${cell.good ? '#E3E2DD' : 'var(--accent-subtle-border)'}`,
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                    {cell.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 700 }}>
                    {cell.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid #E3E2DD',
              borderRadius: '3px',
              padding: '0.72rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                ERROR EXPLORER
              </span>
              <div style={{ display: 'flex', gap: '0.3rem' }}>
                {(['FP', 'FN', 'ALL'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setErrorFilter(f)}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '2px',
                      border: `1px solid ${errorFilter === f ? 'var(--accent)' : '#E3E2DD'}`,
                      color: errorFilter === f ? 'var(--accent)' : 'var(--text-secondary)',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
            {sampleErrors.map((err) => (
              <div
                key={err.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  padding: '0.45rem 0.55rem',
                  backgroundColor: '#FAF9F6',
                  border: '1px solid #E3E2DD',
                  borderRadius: '2px',
                }}
              >
                <span>
                  <strong>{err.id}</strong> ({err.type}) · p={err.prob}
                </span>
                <span style={{ color: 'var(--text-muted)' }}>{err.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: 10-Bin Calibration Chart + Hybrid Rule/LLM Insights */}
      {tab === 'calibration' && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))',
            gap: '0.65rem',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid #E3E2DD',
              borderRadius: '3px',
              padding: '0.72rem',
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
              10-BIN RELIABILITY CURVE
            </div>
            <svg viewBox="0 0 180 110" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <line x1="20" y1="95" x2="170" y2="95" stroke="#D9D8D3" strokeWidth="1" />
              <line x1="20" y1="10" x2="20" y2="95" stroke="#D9D8D3" strokeWidth="1" />
              {/* Perfect calibration reference diagonal */}
              <line x1="20" y1="95" x2="170" y2="10" stroke="#A2A09B" strokeDasharray="3 3" strokeWidth="1" />
              <polyline
                fill="none"
                stroke="#FF4F00"
                strokeWidth="2"
                points={ECE_BINS.map((b) => `${20 + b.conf * 150},${95 - b.acc * 85}`).join(' ')}
              />
              {ECE_BINS.map((b, i) => (
                <circle
                  key={i}
                  cx={20 + b.conf * 150}
                  cy={95 - b.acc * 85}
                  r="2.6"
                  fill="#FF4F00"
                />
              ))}
            </svg>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.72)',
              border: '1px solid #E3E2DD',
              borderRadius: '3px',
              padding: '0.72rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--accent)', fontWeight: 700 }}>
              <Sparkles size={12} />
              <span>RULE ENGINE + GEMINI / OPENAI SYNTHESIS</span>
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              <strong>Measured Observation:</strong> Tail bins (0.85–0.95) show minor overconfidence (ECE = 0.031).
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
              <strong>Recommendation:</strong> Apply isotonic or Platt calibration inside CV folds before threshold tuning.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ============================================================================
   PROJECT 03 PREVIEW: Traverly Domestic Travel & Multi-Factor Cost Estimator
   ============================================================================ */
export const TraverlyInteractivePreview: React.FC = () => {
  const [style, setStyle] = useState<'budget' | 'standard' | 'comfort'>('standard');
  const [season, setSeason] = useState<'offpeak' | 'peak'>('peak');
  const [partySize, setPartySize] = useState<number>(2);
  const [days] = useState<number>(4);

  const styleMultiplier = style === 'budget' ? 0.72 : style === 'comfort' ? 1.48 : 1.0;
  const seasonMultiplier = season === 'peak' ? 1.2 : 0.92;
  const stayPerNight = Math.round(2400 * styleMultiplier * seasonMultiplier);
  const transitCost = Math.round((style === 'comfort' ? 5200 : 1850) * partySize * seasonMultiplier);
  const foodAndLocal = Math.round(950 * partySize * days * styleMultiplier);
  const stayTotal = stayPerNight * (days - 1);
  const grandTotal = stayTotal + transitCost + foodAndLocal;

  return (
    <div
      style={{
        backgroundColor: 'rgba(250, 249, 246, 0.58)',
        border: '1px solid rgba(227, 226, 221, 0.9)',
        borderRadius: '4px',
        padding: '0.85rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.7rem',
      }}
    >
      {/* Header with Amazon AI Summit 2026 Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.45rem',
          paddingBottom: '0.55rem',
          borderBottom: '1px solid rgba(227, 226, 221, 0.9)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <MapPin size={13} style={{ color: 'var(--accent)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700 }}>
            TRAVERLY PREVIEW // KOLKATA → JAIPUR (4D)
          </span>
        </div>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.63rem',
            fontWeight: 700,
            color: 'var(--accent)',
            backgroundColor: 'var(--accent-soft)',
            border: '1px solid var(--accent-subtle-border)',
            padding: '0.14rem 0.45rem',
            borderRadius: '2px',
          }}
        >
          <CheckCircle2 size={10} />
          <span>AMAZON AI SUMMIT 2026</span>
        </span>
      </div>

      {/* Multi-factor Controls */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '0.3rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)' }}>
            STYLE:
          </span>
          {(['budget', 'standard', 'comfort'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                padding: '0.18rem 0.45rem',
                borderRadius: '2px',
                border: `1px solid ${style === s ? 'var(--accent)' : '#E3E2DD'}`,
                backgroundColor: style === s ? 'var(--accent-soft)' : 'rgba(255, 255, 255, 0.78)',
                color: style === s ? 'var(--accent)' : 'var(--text-secondary)',
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => setSeason((v) => (v === 'peak' ? 'offpeak' : 'peak'))}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.28rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 600,
              padding: '0.18rem 0.45rem',
              borderRadius: '2px',
              border: '1px solid #E3E2DD',
              backgroundColor: 'rgba(255, 255, 255, 0.78)',
            }}
          >
            <Calendar size={10} style={{ color: 'var(--accent)' }} />
            <span>{season === 'peak' ? 'PEAK' : 'OFF-PEAK'}</span>
          </button>

          <button
            onClick={() => setPartySize((p) => (p === 1 ? 2 : p === 2 ? 4 : 1))}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.28rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 600,
              padding: '0.18rem 0.45rem',
              borderRadius: '2px',
              border: '1px solid #E3E2DD',
              backgroundColor: 'rgba(255, 255, 255, 0.78)',
            }}
          >
            <Users size={10} style={{ color: 'var(--accent)' }} />
            <span>{partySize} {partySize === 1 ? 'PAX' : 'PAX'}</span>
          </button>
        </div>
      </div>

      {/* Itemized Estimate + Sample Day-by-Day */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(185px, 1fr))',
          gap: '0.65rem',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.72)',
            border: '1px solid #E3E2DD',
            borderRadius: '3px',
            padding: '0.72rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.32rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
            <Wallet size={12} style={{ color: 'var(--accent)' }} />
            <span>MULTI-FACTOR COST MODEL (SAMPLE)</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Transit ({style === 'comfort' ? 'Flight' : 'Rail 3AC'})</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>₹{transitCost.toLocaleString('en-IN')}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Stay (3 nights)</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>₹{stayTotal.toLocaleString('en-IN')}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Food &amp; Local Transit</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>₹{foodAndLocal.toLocaleString('en-IN')}</span>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '0.45rem',
              marginTop: '0.2rem',
              borderTop: '1px solid #E3E2DD',
              fontSize: '0.88rem',
              fontWeight: 700,
            }}
          >
            <span>Estimated Total</span>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
              ₹{grandTotal.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.72)',
            border: '1px solid #E3E2DD',
            borderRadius: '3px',
            padding: '0.72rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
            GENERATED ITINERARY STRUCTURE
          </div>
          <div><strong>Day 01:</strong> Arrival · Fuzzy-matched transit check-in &amp; Walled City walk</div>
          <div><strong>Day 02:</strong> Amer Fort &amp; heritage corridor · City-cost capped dining</div>
          <div><strong>Day 03–04:</strong> Hawa Mahal, local transit loop &amp; return departure</div>
        </div>
      </div>
    </div>
  );
};

