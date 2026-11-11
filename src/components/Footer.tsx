import React from 'react';
import { PROFILE } from '../data/portfolioData';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
  reducedMotion?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ reducedMotion }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  const links = [
    { label: 'GitHub', href: PROFILE.github },
    { label: 'LinkedIn', href: PROFILE.linkedin },
    { label: 'Email', href: `mailto:${PROFILE.email}` },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #E3E2DD',
        position: 'relative',
        zIndex: 10,
        padding: '1.65rem 0',
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
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.76rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.55rem',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
              display: 'inline-block',
            }}
          />
          <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
            SATYAM KUMAR &copy; 2026
          </span>
          <span style={{ color: '#D9D8D3' }}>—</span>
          <span>B.TECH CSE (DATA SCIENCE) · KOLKATA</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.35rem', flexWrap: 'wrap' }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: 'var(--text-secondary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={12} style={{ color: 'var(--accent)' }} />
            </a>
          ))}
        </div>

        <button
          onClick={scrollToTop}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E3E2DD',
            borderRadius: '2px',
            padding: '0.42rem 0.85rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
          }}
          aria-label="Scroll back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp size={12} style={{ color: 'var(--accent)' }} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
