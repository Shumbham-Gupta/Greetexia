import React from 'react';

interface StepInputProps {
  name: string;
  setName: (name: string) => void;
  onNext: () => void;
}

const StepInput: React.FC<StepInputProps> = ({ name, setName, onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNext();
    }
  };

  return (
    <div className="glass-card animate-fade-in">
      <h2>Hi Dear! 👋</h2>
      <p style={{ textAlign: 'center', marginBottom: '1.5rem', opacity: 0.8 }}>
        Your Well-Wisher has sent you a special wish. <br />To begin, please tell us your name.
      </p>
      <form onSubmit={handleSubmit} className="step-container">
        <input
          type="text"
          placeholder="Your beautiful name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <button type="submit" className="btn-primary" disabled={!name.trim()}>
          Next Step &rarr;
        </button>
      </form>
    </div>
  );
};

export default StepInput;
