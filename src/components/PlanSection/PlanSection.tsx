import styles from "./PlanSection.module.scss";
import planData from "../../utils/planData";
import FormAction from "../../types/FormAction";
import Plan from "../../types/Plan";
import PlanDuration from "../../types/PlanDuration";

interface PlanSectionProps {
  incrementStep: () => void;
  decrementStep: () => void;
  formDispatch: React.Dispatch<FormAction>;
  currentPlan: Plan;
  currentPlanDuration: PlanDuration;
}

function PlanSection({
  incrementStep,
  decrementStep,
  formDispatch,
  currentPlan,
  currentPlanDuration,
}: PlanSectionProps) {
  function durationIsYearly() {
    return currentPlanDuration === "yearly";
  }

  return (
    <div className="section">
      <div className="section__head">
        <h1 className="section__heading">Select your plan</h1>
        <p className="section__description">You have the option of monthly or yearly billing</p>
      </div>
      <div className={styles.plans}>
        {planData.map((plan) => {
          const { name, iconUrl, prices } = plan;
          const id = name.toLowerCase();

          return (
            <div
              key={id}
              className={styles.card}
              onClick={() => {
                formDispatch({ type: "SET_PLAN", payload: plan });
              }}
            >
              <input
                className={styles.card__radio}
                id={id}
                type="radio"
                name="plan"
                defaultChecked={name === currentPlan.name}
              />
              <label className={styles.card__label} htmlFor={id}>
                <img className={styles.card__img} src={iconUrl} alt={name} />
                <div>
                  <p className={styles.card__title}>{name}</p>
                  <span className={styles.card__price}>
                    ${prices[currentPlanDuration]}/
                    <span className={styles.card__term}>{durationIsYearly() ? "yr" : "mo"}</span>
                  </span>
                  {durationIsYearly() && <span className={styles.card__promotion}>2 months free</span>}
                </div>
              </label>
            </div>
          );
        })}
      </div>
      <div className={styles.duration}>
        <input
          id="duration"
          className={styles.duration__check}
          type="checkbox"
          onChange={(e) => {
            const newDuration = e.target.checked ? "yearly" : "monthly";
            formDispatch({ type: "SET_PLAN_DURATION", payload: newDuration });
          }}
          checked={durationIsYearly()}
        />
        <span className={`${styles.duration__name} ${styles["duration__name--monthly"]}`}>Monthly</span>
        <label htmlFor="duration" className={styles.duration__label}></label>
        <span className={`${styles.duration__name} ${styles["duration__name--yearly"]}`}>Yearly</span>
      </div>
      <div className="section__foot">
        <button type="button" className="section__back" onClick={decrementStep}>
          Go Back
        </button>
        <button type="submit" className="section__next" onClick={incrementStep}>
          Next Step
        </button>
      </div>
    </div>
  );
}

export default PlanSection;
