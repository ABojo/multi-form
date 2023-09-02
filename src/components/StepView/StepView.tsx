import styles from "./StepView.module.scss";

interface StepViewProps {
  currentStep: number;
}

function StepView({ currentStep }: StepViewProps): JSX.Element {
  const steps: string[] = ["Your Plan", "Select Plan", "Add-Ons", "Summary"];

  return (
    <div className={styles.steps}>
      {steps.map((step, i) => {
        const stepNumber = i + 1;
        let numberClass = `${styles.step__number}`;

        if (currentStep + 1 === stepNumber) {
          numberClass += ` ${styles["step__number--active"]}`;
        }

        return (
          <div className={styles.step} key={step}>
            <div className={numberClass}>{stepNumber}</div>
            <div className={styles.step__details}>
              <span className={styles.step__sub}>Step {stepNumber}</span>
              <p className={styles.step__name}>{step}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StepView;
