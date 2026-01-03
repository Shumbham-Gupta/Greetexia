import React from 'react';

interface StepLoveProps {
  name: string;
  onNext: () => void;
}

const StepLove: React.FC<StepLoveProps> = ({ name, onNext }) => {
  return (
    <div className="glass-card animate-fade-in" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3.5rem', marginBottom: '1rem', animation: 'float 3s ease-in-out infinite' }}>
        💖
      </div>

      <h2 style={{
        color: 'var(--color-primary)',
        marginBottom: '1.5rem'
      }}>
        But wait, {name}...
      </h2>

      <p style={{
        fontSize: 'clamp(1rem, 3vw, 1.2rem)',
        lineHeight: '1.8',
        marginBottom: '2.5rem',
        opacity: 0.9
      }}>
        There's something else you should know. <br />
        You bring a special kind of magic to the world just by being you.
        Your kindness ripples out further than you can imagine! 🌊✨
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

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default StepLove;
