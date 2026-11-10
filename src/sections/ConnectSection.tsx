import React, { useState } from 'react';
import { PROFILE, CHAPTERS } from '../data/portfolioData';
import { Mail, Github, Linkedin, FileText, Check, Copy, Send, ArrowUp } from 'lucide-react';

interface ConnectSectionProps {
  onShowToast: (message: string) => void;
  onNavigate: (id: string) => void;
}

export const ConnectSection: React.FC<ConnectSectionProps> = ({ onShowToast, onNavigate }) => {
  const chapter = CHAPTERS[5];
  const [copied, setCopied] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    onShowToast(`Copied ${PROFILE.email} to clipboard.`);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryMessage.trim()) return;

    // Construct mailto link with encoded subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${inquiryName || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${inquiryName}\nEmail: ${inquiryEmail}\n\nMessage:\n${inquiryMessage}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    setFormSent(true);
    onShowToast('Drafting message to Satyam Kumar...');
  };

  return (
    <section
      id="connect"
      style={{
        minHeight: '85vh',
        padding: '5rem 0 4rem 0',
        position: 'relative',
        borderTop: '1px solid var(--color-divider-light)',
      }}
      aria-label="Chapter 06: Connect"
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
            fontSize: 'var(--text-4xl)',
            color: 'var(--color-charcoal)',
            marginBottom: '0.75rem',
            lineHeight: 1.05,
          }}
        >
          {PROFILE.closingHeadline}
        </h2>

        {/* Closing text */}
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.45rem',
            fontStyle: 'italic',
            color: 'var(--color-copper)',
            marginBottom: '1.75rem',
          }}
        >
          "{PROFILE.closingText}"
        </p>

        {/* Narrative text */}
        <p
          style={{
            fontSize: 'var(--text-base)',
            color: 'var(--color-charcoal-light)',
            lineHeight: 1.75,
            marginBottom: '2.5rem',
          }}
        >
          Whether you want to discuss edge computer vision, dynamic railway scheduling models, web platform engineering, or thoughtful collaboration, I am always open to meaningful conversations.
        </p>

        {/* Action Grid: Primary Channels */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Email Copy Box */}
          <div
            style={{
              backgroundColor: 'var(--color-paper)',
              border: '1px solid var(--color-divider)',
              borderRadius: '6px',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <div className="mono-label" style={{ fontSize: '0.68rem' }}>
              DIRECT EMAIL
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                color: 'var(--color-charcoal)',
                wordBreak: 'break-all',
              }}
            >
              {PROFILE.email}
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
              <button
                onClick={handleCopyEmail}
                style={{
                  flex: 1,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 0.75rem',
                  borderRadius: '4px',
                  backgroundColor: copied ? 'var(--color-cream)' : 'var(--color-ivory)',
                  border: '1px solid var(--color-divider)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: copied ? 'var(--color-burnt-orange)' : 'var(--color-charcoal)',
                }}
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>

              <a
                href={`mailto:${PROFILE.email}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.45rem 0.75rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--color-charcoal)',
                  color: 'var(--color-paper)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                }}
                title="Send email via default client"
              >
                <Mail size={13} />
              </a>
            </div>
          </div>

          {/* GitHub Channel */}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--color-paper)',
              border: '1px solid var(--color-divider)',
              borderRadius: '6px',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              transition: 'all var(--transition-fast)',
            }}
            className="channel-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="mono-label" style={{ fontSize: '0.68rem' }}>
                OPEN SOURCE
              </span>
              <Github size={18} color="var(--color-charcoal)" />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--color-charcoal)',
              }}
            >
              GitHub // satyam-257
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-warm-gray)', marginTop: 'auto' }}>
              Inspect public repositories, telemetry benchmarks & algorithms.
            </p>
          </a>

          {/* LinkedIn Channel */}
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--color-paper)',
              border: '1px solid var(--color-divider)',
              borderRadius: '6px',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              transition: 'all var(--transition-fast)',
            }}
            className="channel-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="mono-label" style={{ fontSize: '0.68rem' }}>
                PROFESSIONAL
              </span>
              <Linkedin size={18} color="var(--color-charcoal)" />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--color-charcoal)',
              }}
            >
              LinkedIn Profile
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-warm-gray)', marginTop: 'auto' }}>
              Connect for software engineering, research, and career inquiries.
            </p>
          </a>

          {/* Resume Download Channel */}
          <a
            href={PROFILE.resumeUrl}
            download="Satyam_Kumar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'var(--color-cream)',
              border: '1px solid var(--color-copper)',
              borderRadius: '6px',
              padding: '1.25rem',
              boxShadow: 'var(--shadow-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              transition: 'all var(--transition-fast)',
            }}
            className="channel-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="mono-label" style={{ color: 'var(--color-burnt-orange)', fontSize: '0.68rem' }}>
                CURRICULUM VITAE
              </span>
              <FileText size={18} color="var(--color-burnt-orange)" />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: 'var(--color-charcoal)',
              }}
            >
              Download Verified Resume
            </div>
            <p style={{ fontSize: '0.78rem', color: 'var(--color-charcoal-light)', marginTop: 'auto' }}>
              PDF format with verified educational and hackathon credentials.
            </p>
          </a>
        </div>

        {/* Quick Inquiry Form */}
        <div
          style={{
            backgroundColor: 'var(--color-paper)',
            border: '1px solid var(--color-divider)',
            borderRadius: '6px',
            padding: '2rem',
            marginBottom: '3rem',
          }}
        >
          <div className="mono-label" style={{ marginBottom: '0.4rem', color: 'var(--color-burnt-orange)' }}>
            TRANSMISSION CONSOLE
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>
            Send an Inquiry
          </h3>

          <form onSubmit={handleSubmitInquiry} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--color-warm-gray)',
                    marginBottom: '0.35rem',
                  }}
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  placeholder="e.g. Alex Vance"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '4px',
                    border: '1px solid var(--color-divider)',
                    backgroundColor: 'var(--color-ivory)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--color-charcoal)',
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--color-warm-gray)',
                    marginBottom: '0.35rem',
                  }}
                >
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  placeholder="name@organization.com"
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '4px',
                    border: '1px solid var(--color-divider)',
                    backgroundColor: 'var(--color-ivory)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    color: 'var(--color-charcoal)',
                  }}
                />
              </div>
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-warm-gray)',
                  marginBottom: '0.35rem',
                }}
              >
                MESSAGE
              </label>
              <textarea
                rows={4}
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                placeholder="Share your thoughts on machine learning systems, project collaboration, or engineering..."
                required
                style={{
                  width: '100%',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '4px',
                  border: '1px solid var(--color-divider)',
                  backgroundColor: 'var(--color-ivory)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  color: 'var(--color-charcoal)',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
            >
              {formSent ? <Check size={15} /> : <Send size={15} />}
              <span>{formSent ? 'Transmission Drafted' : 'Send Message'}</span>
            </button>
          </form>
        </div>

        {/* Footer / Colophon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--color-divider)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            color: 'var(--color-warm-gray)',
          }}
        >
          <div>
            © {new Date().getFullYear()} Satyam Kumar // EMBER PROTOCOL. All rights reserved.
          </div>

          <button
            onClick={() => onNavigate('origin')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--color-charcoal)',
              cursor: 'pointer',
            }}
          >
            <span>RETURN TO ORIGIN</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      <style>{`
        .channel-card:hover {
          transform: translateY(-3px);
          border-color: var(--color-burnt-orange) !important;
          box-shadow: var(--shadow-hover);
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
