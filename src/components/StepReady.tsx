import React, { useState, useEffect } from 'react';

interface StepReadyProps {
  onNext: () => void;
}

const StepReady: React.FC<StepReadyProps> = ({ onNext }) => {
  const [status, setStatus] = useState<'normal' | 'waiting'>('normal');

  const handleWait = () => {
    setStatus('waiting');
  };

  useEffect(() => {
    if (status === 'waiting') {
      const timer = setTimeout(() => {
        setStatus('normal');
      }, 4000); // 4 seconds delay
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="glass-card animate-fade-in" style={{ textAlign: 'center', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      {status === 'normal' ? (
        <div key="normal" className="animate-fade-in">
          <h2>Are you ready?</h2>
          <p style={{ marginBottom: '2rem', opacity: 0.9, lineHeight: '1.6' }}>
            I have prepared something very special just for you. <br />
            Take a deep breath and press the button below when you are ready to see it!
          </p>

          <div className="flex-responsive">
            <button
              onClick={handleWait}
              className="btn-primary"
              style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              Wait a moment
            </button>
            <button
              onClick={onNext}
              className="btn-primary"
            >
              Yes, I'm Ready! ✨
            </button>
          </div>
        </div>
      ) : (
        <div key="waiting" className="animate-fade-in">
          <h2 style={{ marginBottom: '1rem', fontSize: '2rem' }}>Take your time... 🌿</h2>
          <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>Breathe in... Breathe out...</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.6 }}>Asking again shortly...</p>
        </div>
      )}
    </div>
  );
};

export default StepReady;
