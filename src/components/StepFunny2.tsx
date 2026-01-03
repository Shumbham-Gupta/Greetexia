import React from 'react';

interface StepFunny2Props {
  onNext: () => void;
}

const StepFunny2: React.FC<StepFunny2Props> = ({ onNext }) => {
  return (
    <div className="glass-card animate-fade-in" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
        📊
      </div>

      <p style={{
        fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
        color: '#fb7185',
        fontWeight: 'bold',
        marginBottom: '2rem',
        fontStyle: 'italic',
        padding: '0 1rem'
      }}>
        "Warning: The chart almost exploded trying to measure your awesomeness! 🎇"
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: 'min(20px, 4vw)',
        height: '150px',
        marginBottom: '3rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ height: '40px', width: 'clamp(30px, 10vw, 40px)', background: 'rgba(255,255,255,0.3)', margin: '0 auto', borderRadius: '4px' }}></div>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Avg</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ height: '60px', width: 'clamp(30px, 10vw, 40px)', background: 'rgba(255,255,255,0.5)', margin: '0 auto', borderRadius: '4px' }}></div>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Cool</span>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            height: '140px',
            width: 'clamp(40px, 12vw, 50px)',
            background: 'linear-gradient(to top, #f472b6, #fbbf24)',
            margin: '0 auto',
            borderRadius: '4px',
            boxShadow: '0 0 15px rgba(251, 191, 36, 0.5)',
            position: 'relative'
          }}>
            <span style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', fontSize: '1.5rem' }}>👑</span>
          </div>
          <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>YOU</span>
        </div>
      </div>

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
  );
};

export default StepFunny2;
