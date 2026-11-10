import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  reducedMotion?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ reducedMotion }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  const socialLinks = [
    { label: 'GitHub', href: PROFILE.github || 'https://github.com/satyam-257' },
    { label: 'Kaggle', href: PROFILE.kaggle || 'https://kaggle.com/satyam257' },
    { label: 'LeetCode', href: PROFILE.leetcode || 'https://leetcode.com/u/satyam-257/' },
    { label: 'LinkedIn', href: PROFILE.linkedin || 'https://linkedin.com/in/satyam-257' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E3E2DD',
        position: 'relative',
        zIndex: 10,
        padding: '1.6rem 0',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem',
        }}
      >
        {/* Left: "SATYAM KUMAR © 2026 — B.TECH CSE (DATA SCIENCE)" */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.04em',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
              display: 'inline-block',
              boxShadow: '0 0 6px rgba(255, 79, 0, 0.45)',
            }}
          />
          <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
            SATYAM KUMAR &copy; 2026 &mdash; B.TECH CSE (DATA SCIENCE)
          </span>
        </div>

        {/* Center: Direct external links with subtle 45-degree arrow icons (↗) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                transition: 'color var(--transition-fast)',
                letterSpacing: '0.02em',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              }}
            >
              <span>[{link.label}]</span>
              <ArrowUpRight size={12} style={{ color: 'var(--accent)' }} />
            </a>
          ))}
        </div>

        {/* Right: Functional "BACK TO TOP [↑]" monospace button */}
        <button
          onClick={scrollToTop}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E3E2DD',
            borderRadius: '2px',
            padding: '0.45rem 0.95rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            letterSpacing: '0.05em',
            transition: 'all var(--transition-fast)',
            boxShadow: 'var(--shadow-studio-sm)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
            (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = '#E3E2DD';
            (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
          }}
          title="Return to top & reverse 3D Logic Cube transformations"
          aria-label="Back to top"
        >
          <span>BACK TO TOP [↑]</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
