import React from 'react';
import { Check, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        backgroundColor: '#FFFFFF',
        color: 'var(--text-primary)',
        padding: '0.85rem 1.25rem',
        borderRadius: '2px',
        boxShadow: 'var(--shadow-studio-lg)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        zIndex: 2000,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        borderLeft: '3px solid var(--accent)',
        borderTop: '1px solid var(--grid-hairline)',
        borderRight: '1px solid var(--grid-hairline)',
        borderBottom: '1px solid var(--grid-hairline)',
        animation: 'toastSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      role="status"
    >
      <Check size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
      <span style={{ letterSpacing: '0.02em', lineHeight: 1.4, fontWeight: 500 }}>{message}</span>
      <button
        onClick={onClose}
        style={{
          marginLeft: '0.85rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close notification"
      >
        <X size={14} />
      </button>

      <style>{`
        @keyframes toastSlideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
export default Toast;
