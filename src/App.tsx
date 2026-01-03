import { useState } from 'react';
import StepInput from './components/StepInput';
import StepReady from './components/StepReady';
import StepReveal from './components/StepReveal';
import StepLove from './components/StepLove';
import StepFunny1 from './components/StepFunny1';
import StepFunny2 from './components/StepFunny2';
import StepFinal from './components/StepFinal';

function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');

  const nextStep = () => setStep((prev) => prev + 1);

  const resetFlow = () => {
    setStep(1);
    setName('');
  };

  return (
    <div className="app-container">
      <div className="branding-header">
        ✨ WishFlow
      </div>

      <div className="main-content">

        {step === 1 && (
          <StepInput
            name={name}
            setName={setName}
            onNext={nextStep}
          />
        )}

        {step === 2 && (
          <StepReady
            onNext={nextStep}
          />
        )}

        {step === 3 && (
          <StepReveal
            name={name}
            onNext={nextStep}
          />
        )}

        {step === 4 && (
          <StepLove
            name={name}
            onNext={nextStep}
          />
        )}

        {step === 5 && (
          <StepFunny1
            name={name}
            onNext={nextStep}
          />
        )}

        {step === 6 && (
          <StepFunny2
            onNext={nextStep}
          />
        )}

        {step === 7 && (
          <StepFinal
            name={name}
            onReset={resetFlow}
          />
        )}
      </div>
    </div>
  );
}

export default App;
