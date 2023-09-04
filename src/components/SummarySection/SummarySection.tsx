import AddOn from "../../types/AddOn";
import Plan from "../../types/Plan";
import PlanDuration from "../../types/PlanDuration";
import styles from "./SummarySection.module.scss";
import durationFormats from "../../utils/durationFormats";

interface SummarySectionProps {
  decrementStep: () => void;
  goToPlanPage: () => void;
  markFormSubmitted: () => void;
  plan: Plan;
  planDuration: PlanDuration;
  addOns: AddOn[];
}

function SummarySection({
  decrementStep,
  goToPlanPage,
  markFormSubmitted,
  plan,
  planDuration,
  addOns,
}: SummarySectionProps) {
  const termString = durationFormats[planDuration].short;
  const totalPrice = addOns.reduce((acc, addOn) => acc + addOn.prices[planDuration], 0) + plan.prices[planDuration];

  return (
    <div className="section">
      <div className="section__head">
        <h1 className="section__heading">Finishing up</h1>
        <p className="section__description">Double-check everything looks OK before confirming.</p>
      </div>
      <div className={styles.summary}>
        <div className={styles.summary__container}>
          <div className={styles.summary__head}>
            <div>
              <p className={styles.summary__plan}>
                {plan.name} ({durationFormats[planDuration].capitalized})
              </p>
              <button onClick={goToPlanPage} className={styles.summary__change}>
                Change
              </button>
            </div>
            <p className={styles["summary__plan-price"]}>
              +${plan.prices[planDuration]}/{termString}
            </p>
          </div>

          {addOns.length > 0 && (
            <div className={styles.summary__extras}>
              {addOns.map((addOn) => {
                return (
                  <div className={styles["add-on"]}>
                    <p className={styles["add-on__name"]}>{addOn.name}</p>
                    <p className={styles["add-on__price"]}>
                      +${addOn.prices[planDuration]}/{termString}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.footer}>
          <p className={styles.footer__title}>Total (per {durationFormats[planDuration].per})</p>
          <p className={styles.footer__price}>
            +${totalPrice}/{termString}
          </p>
        </div>
      </div>

      <div className="section__foot">
        <button onClick={decrementStep} className="section__back">
          Go Back
        </button>
        <button onClick={markFormSubmitted} className="section__confirm">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default SummarySection;
