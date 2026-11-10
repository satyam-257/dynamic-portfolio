import React, { useState, useEffect, useRef } from 'react';
import { STACK_DATA } from '../data/portfolioData';
import { ArrowRight, Cpu, Layers, Sparkles } from 'lucide-react';

interface StackSectionProps {
  onNavigate: (sectionId: string) => void;
}

// Helper to synthesize authentic micro mechanical switch audio click via Web Audio API
const playMechanicalClickSound = () => {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(42, ctx.currentTime + 0.035);

    gain.gain.setValueAtTime(0.09, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.038);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch {
    // Graceful no-op if audio context is blocked
  }
};

// Tactile Matte-White Mechanical Keycap Pill Component (Physically depresses by 2px on hover)
interface KeycapPillProps {
  label: string;
}

const KeycapPill: React.FC<KeycapPillProps> = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onClick={playMechanicalClickSound}
      onMouseEnter={() => {
        setIsHovered(true);
        playMechanicalClickSound();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        padding: '0.45rem 0.8rem',
        backgroundColor: '#FFFFFF',
        border: `1px solid ${isHovered ? 'var(--accent)' : '#E3E2DD'}`,
        borderRadius: '3px',
        fontFamily: 'var(--font-mono)', // JetBrains Mono
        fontSize: '0.80rem',
        fontWeight: 600,
        color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
        cursor: 'pointer',
        userSelect: 'none',
        // Physically depresses by 2px on mouse hover / 3px on active press
        transform: isPressed ? 'translateY(3px)' : isHovered ? 'translateY(2px)' : 'translateY(0px)',
        boxShadow: isPressed
          ? '0 0 0 #D4D3CD, inset 0 1px 2px rgba(0,0,0,0.1)'
          : isHovered
          ? '0 1px 0 #D4D3CD, 0 2px 6px rgba(255, 79, 0, 0.08)'
          : '0 2px 0 #D4D3CD, 0 1px 3px rgba(0, 0, 0, 0.03)',
        transition: 'transform 0.08s ease, box-shadow 0.08s ease, border-color 0.12s ease, color 0.12s ease',
        whiteSpace: 'nowrap',
      }}
      title={`[${label}] - Tactile Mechanical Keycap`}
    >
      <span
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: isHovered ? 'var(--accent)' : '#D4D3CD',
          transition: 'background-color 0.12s ease',
        }}
      />
      <span>[{label}]</span>
    </button>
  );
};

// Smooth Scroll-Triggered Animated Number Counter Component
const AnimatedStatValue: React.FC<{ target: number; suffix?: string }> = ({ target, suffix = '+' }) => {
  const [value, setValue] = useState<number>(0);
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasTriggeredRef = useRef<boolean>(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          const startTime = performance.now();
          const duration = 1600; // ms

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(1, elapsed / duration);
            // Cubic ease-out
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(easeOut * target));

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={containerRef} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
      <span>{value}</span>
      <span style={{ color: 'var(--accent)', marginLeft: '2px' }}>{suffix}</span>
    </span>
  );
};

export const StackSection: React.FC<StackSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...STACK_DATA.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'all'
      ? STACK_DATA
      : STACK_DATA.filter((c) => c.title === selectedCategory);

  return (
    <section
      id="stack"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--grid-hairline)',
        backgroundColor: 'transparent',
      }}
    >
      <div className="container">
        {/* ===================================================================
            SECTION 3 HEADER: State 3 Moniker & Blueprint Title (60% to 85% Scroll)
            =================================================================== */}
        <div style={{ maxWidth: '860px', marginBottom: '3.5rem' }}>
          <div
            className="reveal-on-scroll"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--text-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '1.25rem',
              padding: '0.35rem 0.75rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E3E2DD',
              borderRadius: '2px',
              boxShadow: 'var(--shadow-studio-sm)',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
              }}
            />
            <span>02 / TECHNICAL ARCHITECTURE &amp; PROOF-OF-WORK (60% TO 85% SCROLL)</span>
          </div>

          <h2
            className="reveal-on-scroll stagger-1 swiss-headline"
            style={{ marginBottom: '1.25rem' }}
          >
            Internal Core Revelation &amp;{' '}
            <span style={{ color: 'var(--accent)' }}>Technical Blueprint</span>.
          </h2>

          <p
            className="reveal-on-scroll stagger-2"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
            }}
          >
            As the 8 outer corner cubies mechanically retract outward along brushed-steel telescopic pins,
            the precision international-orange (#FF4F00) spherical tension core is revealed inside the center of the cube,
            while the outer matte-white ceramic faces transition into a semi-transparent architectural wireframe blueprint mode.
          </p>
        </div>

        {/* ===================================================================
            SWISS-GRID SPECIFICATION TABLE BESIDE THE EXPOSED CUBE
            Left Column: Technical Stack Ledger (3 horizontal skill rows)
            Right Column: Architectural Viewfinder for the 3D Blueprint Cube
            =================================================================== */}
        <div
          className="stack-ledger-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(320px, 0.95fr)',
            gap: 'clamp(2rem, 4vw, 3.5rem)',
            alignItems: 'start',
            marginBottom: '3.5rem',
          }}
        >
          {/* Left Column: Technical Stack Ledger */}
          <div
            className="reveal-on-scroll stagger-1 architectural-card"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E3E2DD',
              borderRadius: '4px',
              padding: '2.25rem',
              boxShadow: 'var(--shadow-studio-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.85rem',
            }}
          >
            {/* Ledger Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1.15rem',
                borderBottom: '1px solid #E3E2DD',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 6px rgba(255, 79, 0, 0.6)',
                  }}
                />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  TECHNICAL STACK LEDGER // SPECIFICATION TABLE
                </span>
              </div>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
                [ TACTILE KEYCAPS ]
              </span>
            </div>

            {/* Row 1: Core Languages & Low-Level: [C++] [C++ STL] [Python] [SQL] [Bash / Linux] */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  Core Languages &amp; Low-Level
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                  ROW // 01
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['C++', 'C++ STL', 'Python', 'SQL', 'Bash / Linux'].map((skill) => (
                  <KeycapPill key={skill} label={skill} />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: '#E3E2DD' }} />

            {/* Row 2: Data Science & ML Systems: [LightGBM] [XGBoost] [CatBoost] [Pandas] [Feature Engineering] [Cross-Validation] */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  Data Science &amp; ML Systems
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                  ROW // 02
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['LightGBM', 'XGBoost', 'CatBoost', 'Pandas', 'Feature Engineering', 'Cross-Validation'].map((skill) => (
                  <KeycapPill key={skill} label={skill} />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: '#E3E2DD' }} />

            {/* Row 3: Engineering & Tooling: [Data Structures & Algorithms] [DBMS] [Git & GitHub] [Vercel] [Supabase] */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>
                  Engineering &amp; Tooling
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
                  ROW // 03
                </span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Data Structures & Algorithms', 'DBMS', 'Git & GitHub', 'Vercel', 'Supabase'].map((skill) => (
                  <KeycapPill key={skill} label={skill} />
                ))}
              </div>
            </div>

            {/* Mechanical key feedback status */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                paddingTop: '0.65rem',
                borderTop: '1px solid #E3E2DD',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
              }}
            >
              <Cpu size={13} style={{ color: 'var(--accent)' }} />
              <span>PHYSICALLY DEPRESSES BY 2PX ON HOVER // AUDITORY MICRO-SWITCH FEEDBACK ACTIVE</span>
            </div>
          </div>

          {/* Right Column: Architectural HUD Viewfinder Framing the 3D Blueprint Cube */}
          <div
            className="reveal-on-scroll stagger-2"
            style={{
              minHeight: '440px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '1.85rem',
              border: '1px dashed rgba(18, 18, 18, 0.14)',
              borderRadius: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.35)',
              backdropFilter: 'blur(4px)',
              pointerEvents: 'none',
            }}
          >
            {/* Viewfinder Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 8px rgba(255, 79, 0, 0.8)',
                  }}
                />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  ROT_X: 180° / CORE_ARCHITECTURE
                </span>
              </div>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
                [ BLUEPRINT REVEAL ]
              </span>
            </div>

            {/* Center Blueprint Crosshair HUD Telemetry */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.55rem',
                flex: 1,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                color: 'rgba(18, 18, 18, 0.32)',
                letterSpacing: '0.08em',
                textAlign: 'center',
              }}
            >
              <div>+ 8X CORNER CUBIES: EXTENDED ALONG TELESCOPIC PINS +</div>
              <div>+ INTERNAL TENSION CORE: #FF4F00 SPHERE +</div>
              <div>+ CERAMIC: SEMI-TRANSPARENT BLUEPRINT WIREFRAME +</div>
              <div style={{ color: 'var(--accent)', opacity: 0.85, fontSize: '0.64rem' }}>
                LIVING AXIAL ROTATION PASS ACTIVE
              </div>
            </div>

            {/* Viewfinder Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid rgba(18, 18, 18, 0.08)',
                paddingTop: '0.85rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-secondary)',
              }}
            >
              <span>SECTION 3: 60% → 85%</span>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>
                ↑ SCROLL TO FOLD BACK INTO 3 LAYERS
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================================
            PROOF-OF-WORK METRICS BAR (Bottom of Section)
            Directly beneath the skill rows: 3-column architectural scoreboard
            with exposed 1px grid borders and smooth count-up from zero
            =================================================================== */}
        <div style={{ marginBottom: '5.5rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              marginBottom: '1.25rem',
            }}
            className="reveal-on-scroll"
          >
            <Sparkles size={15} style={{ color: 'var(--accent)' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
              }}
            >
              PROOF-OF-WORK METRICS BAR // EMPIRICAL VALIDATION
            </span>
          </div>

          <div
            className="reveal-on-scroll stagger-2 proof-of-work-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E3E2DD',
              borderRadius: '4px',
              boxShadow: 'var(--shadow-studio-md)',
              overflow: 'hidden',
            }}
          >
            {/* Counter 1: "500+" — Label: "Algorithmic Problems Solved" — Subtext: "LeetCode, Codeforces & CodeChef (C++)" */}
            <div
              style={{
                padding: '2.5rem 2rem',
                borderRight: '1px solid #E3E2DD',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
              className="scoreboard-col"
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(2.6rem, 2.3rem + 1.2vw, 3.6rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.04em',
                }}
              >
                <AnimatedStatValue target={500} suffix="+" />
              </div>
              {/* Crisp 2px international-orange accent line */}
              <div
                style={{
                  width: '42px',
                  height: '2px',
                  backgroundColor: '#FF4F00',
                  borderRadius: '1px',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.08rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                Algorithmic Problems Solved
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.45,
                }}
              >
                LeetCode, Codeforces &amp; CodeChef (C++)
              </div>
            </div>

            {/* Counter 2: "10+" — Label: "ML Models & Competitions" — Subtext: "Kaggle Tabular Pipelines & GBDT Ensembles" */}
            <div
              style={{
                padding: '2.5rem 2rem',
                borderRight: '1px solid #E3E2DD',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
              className="scoreboard-col"
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(2.6rem, 2.3rem + 1.2vw, 3.6rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.04em',
                }}
              >
                <AnimatedStatValue target={10} suffix="+" />
              </div>
              {/* Crisp 2px international-orange accent line */}
              <div
                style={{
                  width: '42px',
                  height: '2px',
                  backgroundColor: '#FF4F00',
                  borderRadius: '1px',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.08rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                ML Models &amp; Competitions
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.45,
                }}
              >
                Kaggle Tabular Pipelines &amp; GBDT Ensembles
              </div>
            </div>

            {/* Counter 3: "5+" — Label: "Hackathons & Core Builds" — Subtext: "Including Bharatiya Antariksh Hackathon & Flipkart GRiD" */}
            <div
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
              }}
              className="scoreboard-col"
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(2.6rem, 2.3rem + 1.2vw, 3.6rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.04em',
                }}
              >
                <AnimatedStatValue target={5} suffix="+" />
              </div>
              {/* Crisp 2px international-orange accent line */}
              <div
                style={{
                  width: '42px',
                  height: '2px',
                  backgroundColor: '#FF4F00',
                  borderRadius: '1px',
                }}
              />
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.08rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}
              >
                Hackathons &amp; Core Builds
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.45,
                }}
              >
                Including Bharatiya Antariksh Hackathon &amp; Flipkart GRiD
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            DETAILED DOMAIN CATEGORY DIRECTORY (Drill-Down)
            =================================================================== */}
        <div>
          {/* Domain Category Filter Tabs */}
          <div
            className="reveal-on-scroll stagger-1"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '2.5rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--grid-hairline)',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                }}
              >
                Comprehensive Stack Directory
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                Filter across low-level infrastructure, machine learning, and systems architecture
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.45rem 0.95rem',
                      borderRadius: '2px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      fontWeight: isActive ? 600 : 500,
                      border: isActive
                        ? '1px solid var(--text-primary)'
                        : '1px solid var(--grid-hairline)',
                      backgroundColor: isActive ? 'var(--text-primary)' : '#FFFFFF',
                      color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                      boxShadow: isActive ? 'var(--shadow-studio-sm)' : 'none',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    {cat === 'all' ? 'All Domains' : cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Categories Stack Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {filteredCategories.map((category) => (
              <div key={category.title} className="reveal-on-scroll stagger-1">
                {/* Category Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <Layers size={16} style={{ color: 'var(--accent)' }} />
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {category.title}
                    </h4>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {category.description}
                  </div>
                </div>

                {/* Skills Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '1.25rem',
                  }}
                >
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="architectural-card"
                      style={{
                        padding: '1.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundColor: '#FFFFFF',
                        minHeight: '200px',
                      }}
                    >
                      <div>
                        {/* Skill Header */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'space-between',
                            gap: '0.5rem',
                            marginBottom: '0.85rem',
                          }}
                        >
                          <h5
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: '1.12rem',
                              fontWeight: 700,
                              color: 'var(--text-primary)',
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {skill.name}
                          </h5>
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.70rem',
                              color: 'var(--accent)',
                              backgroundColor: 'var(--accent-soft)',
                              padding: '0.15rem 0.5rem',
                              borderRadius: '2px',
                              fontWeight: 600,
                              letterSpacing: '0.04em',
                            }}
                          >
                            {skill.experience}
                          </span>
                        </div>

                        <p
                          style={{
                            fontSize: '0.88rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.62,
                            marginBottom: '1.5rem',
                          }}
                        >
                          {skill.description}
                        </p>
                      </div>

                      {/* Skill Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                        {skill.tags.map((tag) => (
                          <span key={tag} className="mono-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Navigation Quick Jump */}
        <div
          className="reveal-on-scroll stagger-2"
          style={{
            marginTop: '4.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2rem',
            borderTop: '1px solid var(--grid-hairline)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <button
            onClick={() => onNavigate('projects')}
            className="btn-ghost"
            style={{ fontSize: '0.82rem' }}
          >
            ← 01 / FEATURED PROJECTS
          </button>

          <button
            onClick={() => onNavigate('metrics')}
            className="btn-secondary"
            style={{ fontSize: '0.82rem' }}
          >
            03 / VERIFIED METRICS <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stack-ledger-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 850px) {
          .proof-of-work-grid {
            grid-template-columns: 1fr !important;
          }
          .proof-of-work-grid .scoreboard-col {
            border-right: none !important;
            border-bottom: 1px solid #E3E2DD !important;
          }
          .proof-of-work-grid .scoreboard-col:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default StackSection;
