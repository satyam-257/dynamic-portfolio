import React from 'react';
import { PROJECTS, Project, PROFILE } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenProjectModal: (project: Project) => void;
  onNavigate: (sectionId: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenProjectModal,
}) => {
  // Extract the 3 prompt-specified featured builds aligned with the 3 mechanical slices
  const antarikshProject = PROJECTS.find((p) => p.id === 'antariksh') || PROJECTS[0];
  const tabularProject = PROJECTS.find((p) => p.id === 'tabular-ml') || PROJECTS[1];
  const cppProject = PROJECTS.find((p) => p.id === 'cpp-systems') || PROJECTS[2];

  // Additional production projects for archival registry
  const archivalProjects = PROJECTS.filter(
    (p) => p.id !== 'antariksh' && p.id !== 'tabular-ml' && p.id !== 'cpp-systems'
  );

  return (
    <section
      id="projects"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--grid-hairline)',
        paddingTop: '6rem',
        paddingBottom: '8rem',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '5rem' }}>
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
            <span>01 / EXPLODED-VIEW PROJECTS (25% TO 60% SCROLL)</span>
          </div>

          <h2
            className="reveal-on-scroll stagger-1 swiss-headline"
            style={{ marginBottom: '1.25rem', fontSize: 'var(--text-3xl)' }}
          >
            Mechanical Logic Slices &amp;{' '}
            <span style={{ color: 'var(--accent)' }}>Deterministic</span> Systems.
          </h2>

          <p
            className="reveal-on-scroll stagger-2"
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '720px',
            }}
          >
            As the 3D Logic Cube executes its animated mechanical unfold in the center, three flagship
            technical builds lock into place beside each floating mechanical slice.
          </p>
        </div>

        {/* =========================================================================
            3-TIER SLICE-ALIGNED PHYSICAL PROJECT CARDS
            Each card locks beside one of the 3 floating mechanical slices:
            - Slice 01 (Top Slice / +45° Twist) -> Bharatiya Antariksh Hackathon Technical Build
            - Slice 02 (Middle Slice / Titanium Core) -> Tabular ML & Out-of-Fold Feature Engineering (Kaggle)
            - Slice 03 (Bottom Slice / -45° Twist) -> High-Performance C++ Algorithmic Systems
           ========================================================================= */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8.5rem',
            position: 'relative',
            paddingBottom: '4rem',
          }}
          className="slice-cards-container"
        >
          {/* -----------------------------------------------------------------------
              TIER 1 (TOP SLICE): Bharatiya Antariksh Hackathon Technical Build
              Positioned on the Left with Hairline Connecting Right to Top Slice
             ----------------------------------------------------------------------- */}
          {/* -----------------------------------------------------------------------
              TIER 1 (TOP LAYER): Bharatiya Antariksh Hackathon Build
              Connected to Top Layer (+45° alternating twist) via hairline & orange dot
             ----------------------------------------------------------------------- */}
          <div
            className="reveal-on-scroll stagger-1 slice-card-row-1"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.15fr) minmax(280px, 0.85fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Physical Project Card 1 */}
            <div
              className="architectural-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E3E2DD',
                padding: '2.5rem',
                borderRadius: '3px',
                boxShadow: 'var(--shadow-studio-md)',
                position: 'relative',
              }}
            >
              {/* Connecting Hairline Indicator (Links Card to Top Floating Slice) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid #E3E2DD',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 6px rgba(255, 79, 0, 0.5)',
                  }}
                />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  SLICE 01 // TOP LAYER (+45° TWIST)
                </span>
                <span style={{ color: 'var(--grid-hairline)' }}>—</span>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>LOCKED</span>
              </div>

              {/* Card Header, Title & Tags */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2.1rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    marginBottom: '0.85rem',
                  }}
                >
                  Bharatiya Antariksh Hackathon Build
                </h3>

                {/* Monospace Tags: [Python] [Space-Tech] [Data Pipelines] */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {['Python', 'Space-Tech', 'Data Pipelines'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.6rem',
                        backgroundColor: '#FAFAF7',
                        border: '1px solid #E3E2DD',
                        borderRadius: '2px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  Engineered an end-to-end technical solution for space-science data processing and analytics under rapid hackathon constraints.
                </p>
              </div>

              {/* Measured Impact Spec */}
              <div
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'var(--bg-canvas)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: '2px',
                  marginBottom: '1.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>
                  MEASURED OUTCOME // ONBOARD VALIDATION
                </span>
                {antarikshProject.impactNote}
              </div>

              {/* Stats Benchmarks */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #E3E2DD',
                  marginBottom: '1.75rem',
                }}
              >
                {antarikshProject.stats?.map((stat, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Link: "View Repository ->" */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '0.5rem',
                }}
              >
                <a
                  href={antarikshProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '0.55rem 1.1rem',
                    backgroundColor: '#FAFAF7',
                    border: '1px solid #E3E2DD',
                    borderRadius: '2px',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E3E2DD';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  <span>View Repository -&gt;</span>
                </a>

                <button
                  onClick={() => onOpenProjectModal(antarikshProject)}
                  className="btn-secondary"
                  style={{
                    padding: '0.55rem 1.15rem',
                    fontSize: '0.82rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E3E2DD',
                  }}
                >
                  <span>Architecture Spec</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>

            {/* Right: Crisp Connecting Hairline pointing toward Center 3D Top Layer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                position: 'relative',
              }}
              className="connecting-leader-col-1"
            >
              <div
                style={{
                  height: '1px',
                  flex: 1,
                  backgroundColor: '#E3E2DD',
                  position: 'relative',
                }}
              >
                {/* Small orange anchor dot */}
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '-3.5px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 8px rgba(255, 79, 0, 0.85)',
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                [ CONNECTING: TOP LAYER +45° ]
              </span>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              TIER 2 (MIDDLE LAYER): Tabular ML & Feature Engineering Suite
              Connected to Middle Layer (-45° alternating twist) via hairline & orange dot
             ----------------------------------------------------------------------- */}
          <div
            className="reveal-on-scroll stagger-2 slice-card-row-2"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 0.85fr) minmax(0, 1.15fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Crisp Connecting Hairline pointing from Center Middle Layer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                justifyContent: 'flex-end',
                position: 'relative',
              }}
              className="connecting-leader-col-2"
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                [ CONNECTING: MIDDLE LAYER -45° ]
              </span>
              <div
                style={{
                  height: '1px',
                  flex: 1,
                  backgroundColor: '#E3E2DD',
                  position: 'relative',
                }}
              >
                {/* Small orange anchor dot at center origin */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '-3.5px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 8px rgba(255, 79, 0, 0.85)',
                  }}
                />
              </div>
            </div>

            {/* Right: Physical Project Card 2 */}
            <div
              className="architectural-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E3E2DD',
                padding: '2.5rem',
                borderRadius: '3px',
                boxShadow: 'var(--shadow-studio-md)',
                position: 'relative',
              }}
            >
              {/* Connecting Hairline Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid #E3E2DD',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 6px rgba(255, 79, 0, 0.5)',
                  }}
                />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  SLICE 02 // MIDDLE LAYER (-45° TWIST)
                </span>
                <span style={{ color: 'var(--grid-hairline)' }}>—</span>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>LOCKED</span>
              </div>

              {/* Card Header, Title & Tags */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2.1rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    marginBottom: '0.85rem',
                  }}
                >
                  Tabular ML &amp; Feature Engineering Suite
                </h3>

                {/* Monospace Tags: [Kaggle] [Random Forests] [Out-of-Fold Encoding] */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {['Kaggle', 'Random Forests', 'Out-of-Fold Encoding'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.6rem',
                        backgroundColor: '#FAFAF7',
                        border: '1px solid #E3E2DD',
                        borderRadius: '2px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  Built competitive machine learning pipelines utilizing advanced out-of-fold target encoding, decision trees, and rigorous cross-validation on large-scale tabular datasets.
                </p>
              </div>

              {/* Measured Impact Spec */}
              <div
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'var(--bg-canvas)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: '2px',
                  marginBottom: '1.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>
                  MEASURED OUTCOME // OUT-OF-FOLD GENERALIZATION
                </span>
                {tabularProject.impactNote}
              </div>

              {/* Stats Benchmarks */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #E3E2DD',
                  marginBottom: '1.75rem',
                }}
              >
                {tabularProject.stats?.map((stat, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Link: "Kaggle Profile & Notebooks ->" */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '0.5rem',
                }}
              >
                <a
                  href={PROFILE.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '0.55rem 1.1rem',
                    backgroundColor: '#FAFAF7',
                    border: '1px solid #E3E2DD',
                    borderRadius: '2px',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E3E2DD';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  <span>Kaggle Profile &amp; Notebooks -&gt;</span>
                </a>

                <button
                  onClick={() => onOpenProjectModal(tabularProject)}
                  className="btn-secondary"
                  style={{
                    padding: '0.55rem 1.15rem',
                    fontSize: '0.82rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E3E2DD',
                  }}
                >
                  <span>Validation Spec</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              TIER 3 (BOTTOM LAYER): High-Performance C++ Algorithmic Core
              Connected to Bottom Layer (+45° alternating twist) via hairline & orange dot
             ----------------------------------------------------------------------- */}
          <div
            className="reveal-on-scroll stagger-3 slice-card-row-3"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.15fr) minmax(280px, 0.85fr)',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Physical Project Card 3 */}
            <div
              className="architectural-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E3E2DD',
                padding: '2.5rem',
                borderRadius: '3px',
                boxShadow: 'var(--shadow-studio-md)',
                position: 'relative',
              }}
            >
              {/* Connecting Hairline Indicator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--text-muted)',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid #E3E2DD',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 6px rgba(255, 79, 0, 0.5)',
                  }}
                />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                  SLICE 03 // BOTTOM LAYER (+45° TWIST)
                </span>
                <span style={{ color: 'var(--grid-hairline)' }}>—</span>
                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>LOCKED</span>
              </div>

              {/* Card Header, Title & Tags */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2.1rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.15,
                    marginBottom: '0.85rem',
                  }}
                >
                  High-Performance C++ Algorithmic Core
                </h3>

                {/* Monospace Tags: [C++ STL] [Dynamic Programming] [Data Structures] */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                  {['C++ STL', 'Dynamic Programming', 'Data Structures'].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.6rem',
                        backgroundColor: '#FAFAF7',
                        border: '1px solid #E3E2DD',
                        borderRadius: '2px',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                  }}
                >
                  Architected optimized solutions for complex graph, sliding window, and dynamic programming problems using low-overhead C++ standard library containers.
                </p>
              </div>

              {/* Measured Impact Spec */}
              <div
                style={{
                  padding: '1rem 1.25rem',
                  backgroundColor: 'var(--bg-canvas)',
                  borderLeft: '3px solid var(--accent)',
                  borderRadius: '2px',
                  marginBottom: '1.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>
                  MEASURED OUTCOME // DETERMINISTIC LATENCY
                </span>
                {cppProject.impactNote}
              </div>

              {/* Stats Benchmarks */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid #E3E2DD',
                  marginBottom: '1.75rem',
                }}
              >
                {cppProject.stats?.map((stat, i) => (
                  <div key={i}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Link: "LeetCode & CodeChef ->" */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingTop: '0.5rem',
                }}
              >
                <a
                  href="https://leetcode.com/u/satyam-257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '0.55rem 1.1rem',
                    backgroundColor: '#FAFAF7',
                    border: '1px solid #E3E2DD',
                    borderRadius: '2px',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E3E2DD';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }}
                >
                  <span>LeetCode &amp; CodeChef -&gt;</span>
                </a>

                <button
                  onClick={() => onOpenProjectModal(cppProject)}
                  className="btn-secondary"
                  style={{
                    padding: '0.55rem 1.15rem',
                    fontSize: '0.82rem',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #E3E2DD',
                  }}
                >
                  <span>Benchmark Spec</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>

            {/* Right: Crisp Connecting Hairline pointing toward Center 3D Bottom Layer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                position: 'relative',
              }}
              className="connecting-leader-col-3"
            >
              <div
                style={{
                  height: '1px',
                  flex: 1,
                  backgroundColor: '#E3E2DD',
                  position: 'relative',
                }}
              >
                {/* Small orange anchor dot */}
                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '-3.5px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 0 8px rgba(255, 79, 0, 0.85)',
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.08em',
                  color: 'var(--text-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                [ CONNECTING: BOTTOM LAYER +45° ]
              </span>
            </div>
          </div>
        </div>

        {/* Archival Systems Registry (TrackX, TrailLens, Traverly) */}
        {archivalProjects.length > 0 && (
          <div style={{ marginTop: '7rem', paddingTop: '3rem', borderTop: '1px solid var(--grid-hairline)' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '2rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  ARCHIVAL PRODUCTION REGISTRY
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    marginTop: '0.25rem',
                  }}
                >
                  Additional Shipped Platforms
                </h4>
              </div>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {archivalProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onOpenProjectModal(p)}
                  className="architectural-card-flat"
                  style={{
                    padding: '1.5rem',
                    backgroundColor: '#FFFFFF',
                    cursor: 'pointer',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--text-muted)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {p.badge}
                  </div>
                  <h5
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {p.title}
                  </h5>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.5,
                      marginBottom: '1rem',
                    }}
                  >
                    {p.subtitle}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent)',
                      fontWeight: 600,
                    }}
                  >
                    <span>Inspect System</span>
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Responsive Styles for Slice Cards */}
      <style>{`
        @media (max-width: 900px) {
          .slice-card-row-1, .slice-card-row-2, .slice-card-row-3 {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .connecting-leader-col-1, .connecting-leader-col-2, .connecting-leader-col-3 {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
