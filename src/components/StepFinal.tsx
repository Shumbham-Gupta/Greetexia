import React from 'react';

interface StepFinalProps {
  name: string;
  onReset: () => void;
}

const StepFinal: React.FC<StepFinalProps> = ({ name, onReset }) => {
  return (
    <div className="glass-card animate-fade-in" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3.5rem', marginBottom: '1rem', animation: 'bounce 2s infinite' }}>
        🚀
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
      `}</style>

      <h1 style={{
        fontSize: 'clamp(1.5rem, 6vw, 2rem)',
        marginBottom: '2rem',
        background: 'linear-gradient(to right, #ffd700, #ff8c00, #fff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 700
      }}>
        The World Needs You, {name}!
      </h1>

      <div style={{ textAlign: 'left', maxWidth: '100%', margin: '0 auto' }}>
        <p style={{
          fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
          lineHeight: '1.8',
          marginBottom: '1.5rem',
          color: '#e2e8f0'
        }}>
          After seeing your scores and confirming your coolness, it's clear: **you are absolutely extraordinary.**
          It's not just about being "cool" or "loved"—it's about the unique light you bring into every room you enter.
        </p>

        <p style={{
          fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
          lineHeight: '1.6',
          marginBottom: '1.5rem',
          opacity: 0.85
        }}>
          You have a rare combination of kindness and strength that the world truly needs right now.
          The way you handle challenges and the care you show others isn't just "nice"—it's a superpower.
        </p>

        <p style={{
          fontSize: 'clamp(1.1rem, 4vw, 1.2rem)',
          lineHeight: '1.7',
          marginBottom: '2.3rem',
          color: '#ffd700',
          fontWeight: 600
        }}>
          Don't ever let anyone dull your sparkle. You are destined for amazing things, and today is just the beginning of your next big win! 🏆
        </p>
      </div>

      <div className="flex-center">
        <button
          onClick={onReset}
          className="btn-primary"
          style={{ width: 'auto', padding: '0.8rem 2.5rem', background: 'transparent', border: '2px solid rgba(255,255,255,0.3)', marginTop: '1rem' }}
        >
          Repeat the Magic ↺
        </button>
      </div>
    </div>
  );
};

export default StepFinal;
