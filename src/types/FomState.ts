import FormField from "./FormField";
import Plan from "./Plan";

interface FormState {
  name: FormField;
  email: FormField;
  phoneNumber: FormField;
  plan: Plan;
}

export default FormState;
