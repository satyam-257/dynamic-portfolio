import React, { useRef, useState } from 'react';
import { CHAPTERS, MECHANICAL_PARTS } from '../data/portfolioData';
import { Layers, Activity } from 'lucide-react';

interface WatchStoryStageProps {
  currentChapterIndex: number;
  scrollProgress: number; // 0.0 to 1.0 overall normalized progress
  onSelectChapter: (id: string) => void;
  reducedMotion: boolean;
}

export const WatchStoryStage: React.FC<WatchStoryStageProps> = ({
  currentChapterIndex,
  scrollProgress,
  onSelectChapter,
  reducedMotion,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [inspectModalOpen, setInspectModalOpen] = useState(false);
  const [selectedPartIndex, setSelectedPartIndex] = useState<number | null>(null);

  // Optical tilt on mouse movement (subtle luxury tactile feel)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const activeChapter = CHAPTERS[currentChapterIndex] || CHAPTERS[0];

  // Specific camera zoom and panning for each stage
  const stageVisuals = [
    {
      // Stage 1: Origin
      zoom: 1.02,
      panX: 0,
      panY: 0,
      overlayLabel: "STAGE 01 // CALIBER EQUILIBRIUM",
      subLabel: "MORNING STUDY BENCH // RESTING STATE",
      focalPoint: "Full Caliber Enclosure",
      beatFreq: "28,800 BPH (4 Hz)",
      rotation: 0,
    },
    {
      // Stage 2: Foundation
      zoom: 1.38,
      panX: -4,
      panY: 3,
      overlayLabel: "STAGE 02 // DISASSEMBLED MOVEMENT",
      subLabel: "GEAR TRAIN, PINIONS & BASEPLATE LAID BARE",
      focalPoint: "Wheel Train & Jewels",
      beatFreq: "DISASSEMBLED FOR STUDY",
      rotation: -18,
    },
    {
      // Stage 3: Experiment
      zoom: 1.82,
      panX: 8,
      panY: -6,
      overlayLabel: "STAGE 03 // ESCAPEMENT & BALANCE",
      subLabel: "MACRO FOCUS // 4 HZ REGULATING PULSE",
      focalPoint: "Balance Wheel & Pallet Fork",
      beatFreq: "28,800 BPH ACTIVE OSCILLATION",
      rotation: 35,
    },
    {
      // Stage 4: Projects
      zoom: 1.14,
      panX: 0,
      panY: 4,
      overlayLabel: "STAGE 04 // WORKBENCH COMPOSITION",
      subLabel: "APPLIED SYSTEMS IN ACTIVE WORKSPACE",
      focalPoint: "Timepiece in Working Context",
      beatFreq: "TELEMETRY SYNCHRONIZED",
      rotation: 0,
    },
    {
      // Stage 5: Evolve
      zoom: 1.48,
      panX: 5,
      panY: 2,
      overlayLabel: "STAGE 05 // POLISHED DIAL DETAIL",
      subLabel: "PRECISION BEVELS & COAXIAL HARMONY",
      focalPoint: "Dial Bevels & Finished Hands",
      beatFreq: "CONTINUOUS REFINEMENT",
      rotation: -10,
    },
    {
      // Stage 6: Connect
      zoom: 1.06,
      panX: 0,
      panY: 0,
      overlayLabel: "STAGE 06 // FINISHED CALIBER",
      subLabel: "MASTER BALANCE IN UNINTERRUPTED HARMONY",
      focalPoint: "Master Caliber Enclosure",
      beatFreq: "PERPETUAL CYCLE",
      rotation: 0,
    },
  ];

  const currentVisual = stageVisuals[currentChapterIndex] || stageVisuals[0];

  // Dynamic continuous rotation computed from scroll progress
  const dynamicGearRotation = scrollProgress * 360 * 1.5;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '440px',
        maxHeight: '680px',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'var(--color-cream)',
        border: '1px solid var(--color-divider)',
        boxShadow: 'var(--shadow-warm)',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="watch-story-stage"
      aria-label="Mechanical Watch Scroll Narrative Stage"
    >
      {/* Top Telemetry Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.65rem 1rem',
          backgroundColor: 'rgba(245, 241, 232, 0.92)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--color-divider)',
          zIndex: 10,
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-xs)',
          color: 'var(--color-charcoal)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-burnt-orange)',
            }}
            className="pulse-animation"
          />
          <span style={{ fontWeight: 600, letterSpacing: '0.08em' }}>
            {currentVisual.overlayLabel}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span
            style={{
              color: 'var(--color-warm-gray)',
              fontSize: '0.7rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
            className="stage-freq-tag"
          >
            <Activity size={12} color="var(--color-copper)" />
            {currentVisual.beatFreq}
          </span>

          <button
            onClick={() => setInspectModalOpen(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.7rem',
              color: 'var(--color-burnt-orange)',
              border: '1px solid var(--color-divider)',
              padding: '0.2rem 0.5rem',
              borderRadius: '3px',
              backgroundColor: 'var(--color-paper)',
            }}
            title="Inspect caliber mechanical components"
          >
            <Layers size={11} />
            <span>PARTS</span>
          </button>
        </div>
      </div>

      {/* Main Photographic Optical Viewport */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          overflow: 'hidden',
          cursor: 'crosshair',
        }}
      >
        {CHAPTERS.map((ch, idx) => {
          const isActive = idx === currentChapterIndex;
          const visual = stageVisuals[idx];

          // Compute individual opacity and transform
          const opacity = isActive ? 1 : 0;
          const zIndex = isActive ? 5 : 1;

          // Parallax mouse tilt
          const tiltX = reducedMotion ? 0 : mousePos.x * 12;
          const tiltY = reducedMotion ? 0 : mousePos.y * 12;

          const scale = reducedMotion ? 1 : visual.zoom;
          const panX = reducedMotion ? 0 : visual.panX + tiltX;
          const panY = reducedMotion ? 0 : visual.panY + tiltY;

          return (
            <div
              key={ch.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity,
                zIndex,
                transition: reducedMotion
                  ? 'opacity 0.2s linear'
                  : 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: `scale(${scale}) translate(${panX}px, ${panY}px)`,
                pointerEvents: isActive ? 'auto' : 'none',
              }}
            >
              <img
                src={ch.watchStage.image}
                alt={ch.watchStage.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'contrast(1.04) brightness(0.98)',
                }}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />

              {/* Soft editorial vignette overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(245, 241, 232, 0.04) 40%, rgba(36, 35, 33, 0.22) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
          );
        })}

        {/* Optical Telemetry Crosshairs & Calibrated Reticle Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 8,
          }}
        >
          {/* Subtle center crosshairs */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '60px',
              height: '60px',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '50%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1px',
                height: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-8px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1px',
                height: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '-8px',
                top: '50%',
                transform: 'translateY(-50%)',
                height: '1px',
                width: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '-8px',
                top: '50%',
                transform: 'translateY(-50%)',
                height: '1px',
                width: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
              }}
            />
          </div>

          {/* Rotating Micro-Gear Reticle in bottom right */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              width: '46px',
              height: '46px',
              transform: `rotate(${dynamicGearRotation}deg)`,
              transition: 'transform 0.1s linear',
              opacity: 0.85,
            }}
          >
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="rgba(245, 241, 232, 0.7)"
                strokeWidth="2"
                strokeDasharray="4 3"
              />
              <circle
                cx="50"
                cy="50"
                r="18"
                fill="none"
                stroke="rgba(201, 98, 53, 0.8)"
                strokeWidth="2.5"
              />
              <circle cx="50" cy="50" r="4" fill="var(--color-burnt-orange)" />
              {/* Gear Teeth */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <line
                  key={angle}
                  x1="50"
                  y1="6"
                  x2="50"
                  y2="14"
                  stroke="rgba(245, 241, 232, 0.9)"
                  strokeWidth="3"
                  transform={`rotate(${angle} 50 50)`}
                />
              ))}
            </svg>
          </div>

          {/* Focal Coordinate Tag */}
          <div
            style={{
              position: 'absolute',
              bottom: '14px',
              left: '16px',
              padding: '0.35rem 0.65rem',
              backgroundColor: 'rgba(36, 35, 33, 0.72)',
              backdropFilter: 'blur(6px)',
              borderRadius: '4px',
              color: 'var(--color-paper)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: 'var(--color-burnt-orange)', fontWeight: 600 }}>
              FOCAL: {currentVisual.focalPoint}
            </span>
            <span style={{ opacity: 0.85, fontSize: '0.62rem' }}>
              MAG: {(currentVisual.zoom * 100).toFixed(0)}% // OPTICAL APERTURE f/2.8
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Stage Progress Selector */}
      <div
        style={{
          padding: '0.75rem 1rem',
          backgroundColor: 'rgba(245, 241, 232, 0.96)',
          borderTop: '1px solid var(--color-divider)',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--text-2xs)',
            color: 'var(--color-warm-gray)',
          }}
        >
          <span>CHRONO SEQUENCE</span>
          <span>
            STAGE 0{currentChapterIndex + 1} OF 0{CHAPTERS.length}
          </span>
        </div>

        {/* 6 Stage Navigation Dots & Scrub Line */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '0.4rem',
          }}
        >
          {CHAPTERS.map((ch, idx) => {
            const isActive = idx === currentChapterIndex;
            const isPassed = idx <= currentChapterIndex;

            return (
              <button
                key={ch.id}
                onClick={() => onSelectChapter(ch.id)}
                style={{
                  position: 'relative',
                  height: '24px',
                  borderRadius: '3px',
                  backgroundColor: isActive
                    ? 'var(--color-charcoal)'
                    : isPassed
                    ? 'var(--color-cream)'
                    : 'var(--color-divider-light)',
                  border: isActive
                    ? '1px solid var(--color-charcoal)'
                    : '1px solid var(--color-divider)',
                  color: isActive ? 'var(--color-paper)' : 'var(--color-charcoal)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.2rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)',
                }}
                title={`Jump to Chapter ${ch.number}: ${ch.title}`}
              >
                {isActive && (
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-burnt-orange)',
                    }}
                  />
                )}
                <span>{ch.number}</span>
              </button>
            );
          })}
        </div>

        {/* Brief description of current watch stage */}
        <p
          style={{
            marginTop: '0.5rem',
            fontSize: '0.74rem',
            color: 'var(--color-charcoal-light)',
            fontStyle: 'italic',
            lineHeight: 1.35,
          }}
        >
          "{activeChapter.watchStage.description}"
        </p>
      </div>

      {/* Mechanism Inspector Modal */}
      {inspectModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(36, 35, 33, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setInspectModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'var(--color-paper)',
              maxWidth: '640px',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid var(--color-divider)',
              boxShadow: 'var(--shadow-hover)',
              padding: '2rem',
              maxHeight: '85vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.25rem',
                borderBottom: '1px solid var(--color-divider)',
                paddingBottom: '0.85rem',
              }}
            >
              <div>
                <span className="mono-label" style={{ color: 'var(--color-burnt-orange)' }}>
                  CALIBER BLUEPRINT // 25 JEWELS
                </span>
                <h3 style={{ fontSize: '1.6rem', marginTop: '0.2rem' }}>
                  The Mechanical Metaphor
                </h3>
              </div>
              <button
                onClick={() => setInspectModalOpen(false)}
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--color-warm-gray)',
                  padding: '0.2rem 0.6rem',
                }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', color: 'var(--color-charcoal-light)' }}>
              A fine mechanical watch is an embodiment of disciplined engineering: hundreds of microscopic parts working in frictionless harmony to create reliable outcome. Each phase of my software and AI journey maps directly to a mechanical organ.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {MECHANICAL_PARTS.map((part: any, pIdx: any) => {
                const isSelected = selectedPartIndex === pIdx;
                return (
                  <div
                    key={part.name}
                    onClick={() => setSelectedPartIndex(isSelected ? null : pIdx)}
                    style={{
                      padding: '1rem',
                      borderRadius: '6px',
                      backgroundColor: isSelected ? 'var(--color-cream)' : 'var(--color-ivory)',
                      border: isSelected
                        ? '1.5px solid var(--color-burnt-orange)'
                        : '1px solid var(--color-divider)',
                      cursor: 'pointer',
                      transition: 'all var(--transition-fast)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <span className="mono-number" style={{ fontSize: '0.8rem' }}>
                        {part.name}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.1rem',
                          color: 'var(--color-charcoal)',
                          fontWeight: 600,
                        }}
                      >
                        {part.concept}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--color-charcoal-light)', lineHeight: 1.45 }}>
                      {part.role}
                    </p>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setInspectModalOpen(false)}
              className="btn-primary"
              style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
            >
              Resume Storyline Exploration
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
