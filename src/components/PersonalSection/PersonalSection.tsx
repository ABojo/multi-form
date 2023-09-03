import FormField from "../../types/FormField";
import FormInput from "../FormInput/FormInput";
import FormAction from "../../types/FormAction";
import validate from "../../utils/validate";
import styles from "./PersonalSection.module.scss";

interface PersonalSectionProps {
  incrementStep: () => void;
  nameField: FormField;
  emailField: FormField;
  phoneField: FormField;
  formDispatch: React.Dispatch<FormAction>;
}

function PersonalSection({ incrementStep, nameField, emailField, phoneField, formDispatch }: PersonalSectionProps) {
  function isFormValid() {
    return nameField.isValid && emailField.isValid && phoneField.isValid;
  }

  function showErrors() {
    if (!nameField.currentValue) formDispatch({ type: "SET_NAME_INVALID" });
    if (!emailField.currentValue) formDispatch({ type: "SET_EMAIL_INVALID" });
    if (!phoneField.currentValue) formDispatch({ type: "SET_PHONE_NUMBER_INVALID" });
  }

  function onClickNext() {
    if (isFormValid()) {
      incrementStep();
    } else {
      showErrors();
    }
  }

  return (
    <div className="section">
      <div className="section__head">
        <h1 className="section__heading">Personal Info</h1>
        <p className="section__description">Please provide your name, email address, and phone number</p>
      </div>
      <div className={styles.personal}>
        <FormInput
          id="name"
          placeholder="e.g Stephen King"
          formField={nameField}
          labelText="Name"
          errorMessage="Please enter a valid name"
          onChangeHandler={(e) => {
            formDispatch({
              type: "SET_NAME",
              payload: { currentValue: e.target.value, isValid: validate.name(e.target.value) },
            });
          }}
        />
        <FormInput
          id="email"
          placeholder="e.g stephenking@lorem.com"
          formField={emailField}
          labelText="Email Address"
          errorMessage="Please enter a valid email"
          onChangeHandler={(e) => {
            formDispatch({
              type: "SET_EMAIL",
              payload: { currentValue: e.target.value, isValid: validate.email(e.target.value) },
            });
          }}
        />
        <FormInput
          id="phone"
          placeholder="e.g 123-456-7890"
          formField={phoneField}
          labelText="Phone Number"
          errorMessage="Please enter a valid phone number"
          onChangeHandler={(e) => {
            formDispatch({
              type: "SET_PHONE_NUMBER",
              payload: { currentValue: e.target.value, isValid: validate.phoneNumber(e.target.value) },
            });
          }}
        />
      </div>
      <div className="section__foot">
        <button onClick={onClickNext} className="section__next">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default PersonalSection;
