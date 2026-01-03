import React, { useEffect, useState } from 'react';

interface StepRevealProps {
  name: string;
  onNext: () => void;
}

const StepReveal: React.FC<StepRevealProps> = ({ name, onNext }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="glass-card animate-fade-in" style={{ textAlign: 'center' }}>

      {!showContent ? (
        <div style={{ fontSize: '1.5rem', padding: '2rem 0' }}>🎁 Unwrapping your surprise...</div>
      ) : (
        <div className="animate-fade-in">


          <h1 style={{
            background: 'linear-gradient(to right, #f43f5e, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 2px 10px rgba(139, 92, 246, 0.3))',
            marginBottom: '2rem'
          }}>
            Hello, {name}!
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 3vw, 1.25rem)',
            lineHeight: '1.8',
            color: '#e2e8f0',
            marginBottom: '3rem',
            whiteSpace: 'pre-wrap',
            maxWidth: '100%',
            marginInline: 'auto'
          }}>
            In this vast universe, you are a unique and shining star.
            Your smile lights up rooms and your presence brings joy to those around you.
            Never forget how amazing, capable, and loved you truly are.
          </p>

          <div className="flex-center">
            <button
              onClick={onNext}
              className="btn-primary"
              style={{ width: 'auto', padding: '0.8rem 2.5rem' }}
            >
              Go Forward &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StepReveal;
