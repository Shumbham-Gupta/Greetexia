import React, { useState, useEffect } from 'react';

interface StepFunny1Props {
  name: string;
  onNext: () => void;
}

const StepFunny1: React.FC<StepFunny1Props> = ({ name, onNext }) => {
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScanning(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="glass-card animate-fade-in" style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3.5rem', marginBottom: '1rem', animation: 'waddle 1s alternate infinite' }}>
        🐧
      </div>


      {scanning ? (
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Checking your coolness levels...</p>


          <div style={{
            width: '100%',
            maxWidth: '250px',
            height: '10px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '5px',
            margin: '0 auto',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              background: '#60a5fa',
              animation: 'load 2.5s linear forwards'
            }} />
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <p style={{ fontSize: '1.1rem', marginBottom: '2.3rem', opacity: 0.8 }}>
            Phew! Your Coolness confirmed.❄️ It's
          </p>
          <div style={{
            fontSize: 'clamp(3rem, 15vw, 5rem)',
            fontWeight: 400,
            color: '#4ade80',
            marginBottom: '1rem',
            textShadow: '0 0 20px rgba(74, 222, 128, 0.5)'
          }}>
            100%
          </div>

          <p style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fbbf24', marginBottom: '0.7rem' }}>
            To be honest, I didn't think you are this cool! 😁😂😎 Anyways,
          </p>

          <div className="flex-center">
            <button
              onClick={onNext}
              className="btn-primary"
              style={{ width: 'auto', padding: '0.8rem 2.5rem' }}
            >
              Continue &rarr;
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes waddle {
          0% { transform: rotate(-10deg); }
          100% { transform: rotate(10deg); }
        }
        @keyframes load {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default StepFunny1;
