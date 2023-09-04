import FormState from "../types/FomState";
import FormAction from "../types/FormAction";

function formReducer(state: FormState, action: FormAction): FormState {
  const { type } = action;
  const newState: FormState = { ...state };

  switch (type) {
    case "SET_EMAIL":
      newState.email = { ...action.payload };
      return newState;
    case "SET_NAME":
      newState.name = { ...action.payload };
      return newState;
    case "SET_PHONE_NUMBER":
      newState.phoneNumber = { ...action.payload };
      return newState;
    case "SET_EMAIL_INVALID":
      newState.email = { ...newState.email, isValid: false };
      return newState;
    case "SET_NAME_INVALID":
      newState.name = { ...newState.name, isValid: false };
      return newState;
    case "SET_PHONE_NUMBER_INVALID":
      newState.phoneNumber = { ...newState.phoneNumber, isValid: false };
      return newState;
    case "SET_PLAN":
      newState.plan = { ...action.payload };
      return newState;
    case "SET_PLAN_DURATION":
      newState.planDuration = action.payload;
      return newState;
    case "SET_ADD_ONS":
      newState.addOns = action.payload;
      return newState;
  }
}

export default formReducer;
