import styles from "./AddOnSection.module.scss";
import addOnData from "../../utils/addOnData";
import FormAction from "../../types/FormAction";
import PlanDuration from "../../types/PlanDuration";
import AddOn from "../../types/AddOn";

interface AddOnProps {
  incrementStep: () => void;
  decrementStep: () => void;
  formDispatch: React.Dispatch<FormAction>;
  currentPlanDuration: PlanDuration;
  savedAddOns: AddOn[];
}

function AddOnSection({ incrementStep, decrementStep, formDispatch, currentPlanDuration, savedAddOns }: AddOnProps) {
  function addOnIsSelected(addOn: AddOn): boolean {
    const foundAddOn = savedAddOns.find((currentAddOn) => {
      return currentAddOn.name === addOn.name;
    });

    return foundAddOn ? true : false;
  }

  return (
    <div className="section">
      <div className="section__head">
        <h1 className="section__heading">Pick add-ons</h1>
        <p className="section__description">Add-ons help enhance your gaming experience.</p>
      </div>
      <div className={styles.container}>
        {addOnData.map((addOn) => {
          const { name, description, prices } = addOn;

          return (
            <div className={styles.card} key={name}>
              <input
                onChange={(e) => {
                  let newAddOns;

                  if (e.target.checked) {
                    newAddOns = [...savedAddOns, addOn];
                  } else {
                    newAddOns = savedAddOns.filter((currentAddOn) => {
                      return currentAddOn.name !== addOn.name;
                    });
                  }

                  formDispatch({ type: "SET_ADD_ONS", payload: newAddOns });
                }}
                id={name}
                className={styles.card__check}
                type="checkbox"
                defaultChecked={addOnIsSelected(addOn)}
              />
              <label className={styles.card__label} htmlFor={name}>
                <span className={styles.card__custom}></span>
                <div className={styles.card__info}>
                  <p className={styles.card__title}>{name}</p>
                  <p className={styles.card__description}>{description}</p>
                </div>
                <span className={styles.card__price}>
                  +${prices[currentPlanDuration]}/
                  <span className={styles.card__duration}>{currentPlanDuration === "yearly" ? "yr" : "mo"}</span>
                </span>
              </label>
            </div>
          );
        })}
      </div>
      <div className="section__foot">
        <button type="button" onClick={decrementStep} className="section__back">
          Go Back
        </button>
        <button type="submit" onClick={incrementStep} className="section__next">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default AddOnSection;
