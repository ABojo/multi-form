import FormField from "./FormField";
import Plan from "./Plan";
import PlanDuration from "./PlanDuration";
import AddOn from "./AddOn";

interface FormState {
  name: FormField;
  email: FormField;
  phoneNumber: FormField;
  plan: Plan;
  planDuration: PlanDuration;
  addOns: AddOn[];
}

export default FormState;
