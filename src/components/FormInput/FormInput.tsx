import FormField from "../../types/FormField";
import styles from "./FormInput.module.scss";

interface FormInputProps {
  labelText: string;
  id: string;
  placeholder: string;
  formField: FormField;
  errorMessage: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}

function FormInput({ labelText, id, placeholder, formField, errorMessage, onChangeHandler }: FormInputProps) {
  const mainClass = `${styles.input} ${formField.isValid === false && styles["input--invalid"]}`;

  return (
    <div className={mainClass}>
      <div className={styles.input__head}>
        <label htmlFor={id} className={styles.input__label}>
          {labelText}
        </label>
        <span className={styles.input__error}>{errorMessage}</span>
      </div>
      <input
        onChange={onChangeHandler}
        className={styles.input__input}
        type="text"
        placeholder={placeholder}
        value={formField.currentValue}
      />
    </div>
  );
}

export default FormInput;
