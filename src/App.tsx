import { useState } from "react";
import StepView from "./components/StepView/StepView";

function App() {
  const [stepIndex, setStepIndex] = useState(0);

  const stepComponents = [<div>Personal Info</div>, <div>Plans</div>, <div>Add Ons</div>, <div>Summary</div>];

  function incrementStepIndex() {
    setStepIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      if (newIndex < stepComponents.length) {
        return newIndex;
      }

      return 0;
    });
  }

  function decrementStepIndex() {
    setStepIndex((prevIndex) => {
      const newIndex = prevIndex - 1;

      if (newIndex >= 0) {
        return newIndex;
      }

      return stepComponents.length - 1;
    });
  }

  return (
    <main className="container">
      <StepView currentStep={stepIndex} />
    </main>
  );
}

export default App;
