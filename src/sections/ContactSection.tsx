import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import {
  Copy,
  Mail,
  Send,
  Check,
  Download,
  Github,
  Linkedin,
  ArrowUpRight,
  MapPin,
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
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    onShowToast(`Copied ${PROFILE.email} to clipboard.`);
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
      onShowToast('Inquiry prepared — you can also email sa.25.07.2006@gmail.com directly.');
    }, 550);
  };

  return (
    <section
      id="contact"
      className="section-spacing"
      style={{
        position: 'relative',
        borderTop: '1px solid var(--grid-hairline)',
        paddingBottom: '5.5rem',
      }}
    >
      <div className="container">
        <div
          className="contact-layout-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
            gap: '2.25rem',
            alignItems: 'start',
          }}
        >
          {/* Left: High-Impact Contact CTA Card */}
          <div
            className="reveal-on-scroll architectural-card"
            style={{
              borderRadius: '6px',
              padding: 'clamp(1.75rem, 4vw, 2.85rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.45rem',
            }}
          >
            <div>
              <div className="architectural-label" style={{ marginBottom: '0.75rem' }}>
                <span>06 // CONTACT &amp; INTERNSHIPS</span>
              </div>

              <h2
                className="swiss-headline"
                style={{
                  fontSize: 'clamp(2rem, 1.65rem + 1.6vw, 2.95rem)',
                  marginBottom: '1rem',
                }}
              >
                Have an interesting problem to solve?
              </h2>

              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.68,
                  maxWidth: '580px',
                }}
              >
                I&apos;m always interested in discussing machine learning, AI engineering, research
                ideas, collaborations, and internship opportunities.
              </p>
            </div>

            {/* Primary Actions: Email Copy + Direct Email + Resume */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
              <button
                onClick={handleCopyEmail}
                id="copy-email-primary-btn"
                className="btn-primary"
                style={{
                  padding: '0.9rem 1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                }}
              >
                {copied ? (
                  <>
                    <Check size={15} />
                    <span>Copied: {PROFILE.email}</span>
                  </>
                ) : (
                  <>
                    <Copy size={15} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${PROFILE.email}`}
                className="btn-secondary"
                style={{
                  padding: '0.9rem 1.4rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                }}
              >
                <Mail size={15} style={{ color: 'var(--accent)' }} />
                <span>Send Email</span>
              </a>

              <a
                href={PROFILE.resumeUrl}
                download="Satyam_Kumar_AI_ML_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                id="download-resume-btn"
                className="btn-ghost"
                style={{
                  padding: '0.9rem 1.35rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                }}
              >
                <Download size={15} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Verified External Profile Channels */}
            <div
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid #E3E2DD',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '0.85rem',
              }}
            >
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="architectural-card-flat"
                style={{
                  padding: '1rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(250, 249, 246, 0.65)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <Github size={18} style={{ color: 'var(--text-primary)' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>GitHub</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      github.com/satyam-257
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={15} style={{ color: 'var(--accent)' }} />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="architectural-card-flat"
                style={{
                  padding: '1rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(250, 249, 246, 0.65)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                  <Linkedin size={18} style={{ color: 'var(--text-primary)' }} />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>LinkedIn</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      satyam-kumar-006b52324
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={15} style={{ color: 'var(--accent)' }} />
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--text-muted)',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={13} style={{ color: 'var(--accent)' }} />
                {PROFILE.location}
              </span>
              <span>DIRECT EMAIL: {PROFILE.email}</span>
            </div>
          </div>

          {/* Right: Direct Message Compose Panel */}
          <div
            className="reveal-on-scroll stagger-1 architectural-card-flat"
            style={{
              borderRadius: '6px',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--accent)',
                letterSpacing: '0.08em',
                marginBottom: '0.4rem',
              }}
            >
              // QUICK MESSAGE
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              Start a Conversation
            </h3>

            {submitted ? (
              <div
                style={{
                  padding: '2rem 1.25rem',
                  borderRadius: '4px',
                  backgroundColor: '#FAF9F6',
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
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Message Ready</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Thanks for reaching out. You can also send directly via{' '}
                  <a
                    href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(
                      `Portfolio Inquiry from ${formData.name}`
                    )}&body=${encodeURIComponent(formData.message)}`}
                    style={{ color: 'var(--accent)', fontWeight: 600, textDecoration: 'underline' }}
                  >
                    your email client
                  </a>{' '}
                  for instant delivery.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ fontSize: '0.78rem', padding: '0.5rem 0.95rem' }}
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    Name / Organization *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name or team"
                    style={{
                      width: '100%',
                      padding: '0.72rem 0.85rem',
                      borderRadius: '2px',
                      backgroundColor: '#FAF9F6',
                      border: '1px solid #E3E2DD',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    style={{
                      width: '100%',
                      padding: '0.72rem 0.85rem',
                      borderRadius: '2px',
                      backgroundColor: '#FAF9F6',
                      border: '1px solid #E3E2DD',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: 'block',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      marginBottom: '0.35rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Internship opportunity, ML collaboration, or technical discussion..."
                    style={{
                      width: '100%',
                      padding: '0.72rem 0.85rem',
                      borderRadius: '2px',
                      backgroundColor: '#FAF9F6',
                      border: '1px solid #E3E2DD',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.88rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary"
                  id="contact-submit-btn"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                  }}
                >
                  <Send size={13} />
                  <span>{isSubmitting ? 'Preparing...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
