import FormField from "./FormField";

interface InvalidateAction {
  type: "SET_EMAIL_INVALID" | "SET_NAME_INVALID" | "SET_PHONE_NUMBER_INVALID";
}

interface SetAction {
  type: "SET_EMAIL" | "SET_NAME" | "SET_PHONE_NUMBER";
  payload: FormField;
}

type FormAction = SetAction | InvalidateAction;

export default FormAction;
