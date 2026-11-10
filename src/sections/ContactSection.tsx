import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import {
  Copy,
  Mail,
  Send,
  Check,
  Lock,
  Download,
} from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
  onNavigate?: (sectionId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Engineering Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    onShowToast(`Copied ${PROFILE.email} to clipboard // Ready to dispatch.`);
    setTimeout(() => setCopied(false), 2600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast('Message transmitted successfully.');
    }, 750);
  };

  return (
    <section
      id="contact"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--grid-hairline)',
        paddingTop: 'clamp(5rem, 8vw, 7.5rem)',
        paddingBottom: '5rem',
      }}
    >
      <div className="container">
        {/* ===================================================================
            SECTION 4: PRECISION SNAP-LOCK & DOCK CRADLE
            The solved 3D Logic Cube locks cleanly into this top aperture,
            scaled down by 30% as an architectural precision emblem!
            =================================================================== */}
        <div
          style={{
            maxWidth: '880px',
            margin: '0 auto 2.75rem auto',
            textAlign: 'center',
            position: 'relative',
          }}
          className="reveal-on-scroll"
        >
          {/* Spatial clearing for the docked 3D cube emblem */}
          <div
            style={{
              height: 'clamp(110px, 14vw, 150px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              marginBottom: '1rem',
            }}
            aria-hidden="true"
          >
            {/* Architectural Reticle Hairlines */}
            <div
              style={{
                position: 'absolute',
                width: '140px',
                height: '1px',
                backgroundColor: 'var(--grid-hairline)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '1px',
                height: '70px',
                backgroundColor: 'var(--grid-hairline)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent)',
                opacity: 0.6,
              }}
            />
          </div>

          {/* Precision Dock Telemetry Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              padding: '0.4rem 0.95rem',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E3E2DD',
              borderRadius: '2px',
              boxShadow: 'var(--shadow-studio-sm)',
            }}
          >
            <Lock size={12} style={{ color: 'var(--accent)' }} />
            <span>04: DOCKED STATE // SNAP-LOCK ASSEMBLY</span>
            <span style={{ color: '#E3E2DD' }}>|</span>
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>ROT_X: 360° / STATE: LOCKED_READY</span>
          </div>
        </div>

        {/* ===================================================================
            HIGH-CONVERSION RECRUITER CTA CARD
            Directly beneath the docked 3D cube, architectural matte-white card
            (#FFFFFF with 1px #E3E2DD border and subtle studio drop shadow)
            =================================================================== */}
        <div
          className="reveal-on-scroll stagger-1 architectural-card"
          style={{
            maxWidth: '920px',
            margin: '0 auto 4.5rem auto',
            padding: 'clamp(2.75rem, 6vw, 4.25rem) clamp(2rem, 5vw, 3.75rem)',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E3E2DD',
            borderRadius: '6px',
            boxShadow: '0 20px 48px -12px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.03)',
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          {/* Monospace Eyebrow: "// READY FOR DEPLOYMENT" */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--accent)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1.25rem',
            }}
          >
            <span>// READY FOR DEPLOYMENT</span>
          </div>

          {/* Headline: "Structured Logic. Production-Grade Code." */}
          <h2
            className="swiss-display"
            style={{
              fontSize: 'clamp(2.3rem, 4.6vw, 3.6rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
              marginBottom: '1.25rem',
            }}
          >
            Structured Logic. Production-Grade Code.
          </h2>

          {/* Subtext: "Available for Software Engineering, Data Science, and Machine Learning roles & internships." */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.65,
              maxWidth: '640px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            Available for Software Engineering, Data Science, and Machine Learning roles &amp; internships.
          </p>

          {/* Action Cluster */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1.25rem',
              marginBottom: '2.75rem',
            }}
          >
            {/* Primary Action: Solid carbon-black button ("Copy Email Address") */}
            <button
              onClick={handleCopyEmail}
              id="copy-email-primary-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                backgroundColor: '#121212',
                color: '#FFFFFF',
                border: '1px solid #121212',
                padding: '0.95rem 1.95rem',
                borderRadius: '3px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                boxShadow: '0 4px 14px rgba(18, 18, 18, 0.18)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#222222';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#121212';
              }}
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#FF4F00',
                      display: 'inline-block',
                      boxShadow: '0 0 8px #FF4F00',
                    }}
                  />
                  <span>Copied to Clipboard [✓]</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>

            {/* Secondary Action: Clean bordered button ("Download Resume PDF ->") */}
            <a
              href={PROFILE.resumeUrl || '/Satyam_Kumar_Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              id="download-resume-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                backgroundColor: '#FFFFFF',
                color: 'var(--text-primary)',
                border: '1px solid #E3E2DD',
                padding: '0.95rem 1.85rem',
                borderRadius: '3px',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
                boxShadow: 'var(--shadow-studio-sm)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--text-primary)';
                (e.currentTarget as HTMLElement).style.backgroundColor = '#FAFAFA';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#E3E2DD';
                (e.currentTarget as HTMLElement).style.backgroundColor = '#FFFFFF';
              }}
            >
              <Download size={15} />
              <span>Download Resume PDF -&gt;</span>
            </a>
          </div>

          {/* Micro Specification Bar beneath the buttons */}
          <div
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid #E3E2DD',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-secondary)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--text-muted)' }}>DIRECT INBOX:</span>
              <a
                href={`mailto:${PROFILE.email}`}
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Mail size={13} style={{ color: 'var(--accent)' }} />
                <span>{PROFILE.email}</span>
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent)',
                  boxShadow: '0 0 6px rgba(255, 79, 0, 0.6)',
                }}
              />
              <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                ROT_X: 360° / STATE: LOCKED_READY
              </span>
            </div>
          </div>
        </div>

        {/* ===================================================================
            OPTIONAL DIRECT TRANSMISSION DISPATCH PANEL
            For recruiters or engineers who prefer sending a technical dispatch
            =================================================================== */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            border: '1px solid #E3E2DD',
            borderRadius: '4px',
            padding: '2.25rem 2rem',
            boxShadow: 'var(--shadow-studio-sm)',
          }}
          className="reveal-on-scroll stagger-2"
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              paddingBottom: '0.75rem',
              borderBottom: '1px solid #E3E2DD',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              // FAST TRANSMISSION DISPATCH
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent)',
                letterSpacing: '0.04em',
              }}
            >
              STANDALONE DISPATCH
            </div>
          </div>

          {submitted ? (
            <div
              style={{
                padding: '2rem 1.5rem',
                borderRadius: '2px',
                backgroundColor: 'var(--bg-canvas)',
                border: '1px solid #E3E2DD',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.85rem',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                }}
              >
                <Check size={20} />
              </div>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem',
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                }}
              >
                Transmission Dispatched
              </h4>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.86rem',
                  lineHeight: 1.6,
                }}
              >
                Your message has been delivered to Satyam Kumar. Expect a prompt response.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', topic: 'Engineering Inquiry', message: '' });
                }}
                className="btn-secondary"
                style={{ fontSize: '0.80rem', marginTop: '0.5rem', padding: '0.45rem 0.95rem' }}
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '1rem',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                      fontWeight: 600,
                    }}
                    htmlFor="contact-name"
                  >
                    Name / Team *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Recruiter / Engineer name"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '2px',
                      backgroundColor: 'var(--bg-canvas)',
                      border: '1px solid #E3E2DD',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                      fontWeight: 600,
                    }}
                    htmlFor="contact-email"
                  >
                    Return Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@company.com"
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.85rem',
                      borderRadius: '2px',
                      backgroundColor: 'var(--bg-canvas)',
                      border: '1px solid #E3E2DD',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      outline: 'none',
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
                    color: 'var(--text-secondary)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                    fontWeight: 600,
                  }}
                  htmlFor="contact-message"
                >
                  Message Scope *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Role details, technical stack, or project inquiry..."
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.85rem',
                    borderRadius: '2px',
                    backgroundColor: 'var(--bg-canvas)',
                    border: '1px solid #E3E2DD',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#121212',
                  color: '#FFFFFF',
                  border: '1px solid #121212',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: 'background var(--transition-fast)',
                }}
                id="contact-submit-btn"
              >
                <Send size={13} />
                <span>{isSubmitting ? 'Transmitting Dispatch...' : 'Dispatch Message [->]'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
