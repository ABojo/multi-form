import { useState, useReducer, useEffect } from "react";
import StepView from "./components/StepView/StepView";
import PersonalSection from "./components/PersonalSection/PersonalSection";
import PlanSection from "./components/PlanSection/PlanSection";
import AddOnSection from "./components/AddOnSection/AddOnSection";
import SummarySection from "./components/SummarySection/SummarySection";
import SubmittedSection from "./components/SubmittedSection/SubmittedSection";
import formReducer from "./reducers/formReducer";
import defaultFormState from "./utils/defaultFormState";
import imageList from "./utils/imageList";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [formState, formDispatch] = useReducer(formReducer, defaultFormState);

  //caches images used in form
  useEffect(() => {
    imageList.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

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

  function goToPlanPage() {
    setStepIndex(1);
  }

  function markFormSubmitted() {
    setIsSubmitted(true);
  }

  const stepComponents = [
    <PersonalSection
      nameField={formState.name}
      emailField={formState.email}
      phoneField={formState.phoneNumber}
      incrementStep={incrementStepIndex}
      formDispatch={formDispatch}
    />,
    <PlanSection
      currentPlan={formState.plan}
      currentPlanDuration={formState.planDuration}
      incrementStep={incrementStepIndex}
      decrementStep={decrementStepIndex}
      formDispatch={formDispatch}
    />,
    <AddOnSection
      incrementStep={incrementStepIndex}
      decrementStep={decrementStepIndex}
      formDispatch={formDispatch}
      currentPlanDuration={formState.planDuration}
      savedAddOns={formState.addOns}
    />,
    <SummarySection
      decrementStep={decrementStepIndex}
      goToPlanPage={goToPlanPage}
      markFormSubmitted={markFormSubmitted}
      plan={formState.plan}
      planDuration={formState.planDuration}
      addOns={formState.addOns}
    />,
  ];

  return (
    <main className="container">
      <StepView currentStep={stepIndex} />
      <form onSubmit={(e) => e.preventDefault()}>{isSubmitted ? <SubmittedSection /> : stepComponents[stepIndex]}</form>
    </main>
  );
}

export default App;
