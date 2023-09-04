import FormState from "../types/FomState";
import planData from "./planData";

const defaultFormState: FormState = {
  name: {
    currentValue: "",
    isValid: null,
  },
  email: {
    currentValue: "",
    isValid: null,
  },
  phoneNumber: {
    currentValue: "",
    isValid: null,
  },
  plan: planData[0],
  planDuration: "monthly",
  addOns: [],
};

export default defaultFormState;
