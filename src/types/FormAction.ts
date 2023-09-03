import FormField from "./FormField";
import Plan from "./Plan";

interface InvalidateAction {
  type: "SET_EMAIL_INVALID" | "SET_NAME_INVALID" | "SET_PHONE_NUMBER_INVALID";
}

interface SetAction {
  type: "SET_EMAIL" | "SET_NAME" | "SET_PHONE_NUMBER";
  payload: FormField;
}

interface PlanAction {
  type: "SET_PLAN";
  payload: Plan;
}

type FormAction = SetAction | InvalidateAction | PlanAction;

export default FormAction;
