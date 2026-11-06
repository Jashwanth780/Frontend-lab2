
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(0);

  return (
    <div>
      <h1>STEP COUNTER</h1>

      <h2>Total Steps: {step}</h2>

      <button onClick={() => setStep(step + 1)}>
        Increase 1 Step
      </button>

      <button onClick={() => setStep(step + 10)}>
        Increase 10 Steps
      </button>

      <button onClick={() => setStep(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
