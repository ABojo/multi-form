import FormField from "./FormField";
import Plan from "./Plan";
import PlanDuration from "./PlanDuration";

interface FormState {
  name: FormField;
  email: FormField;
  phoneNumber: FormField;
  plan: Plan;
  planDuration: PlanDuration;
}

export default FormState;
