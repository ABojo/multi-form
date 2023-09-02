import FormState from "../types/FomState";
import FormAction from "../types/FormAction";

function formReducer(state: FormState, action: FormAction) {
  const { type, payload } = action;
  const newState: FormState = { ...state };

  switch (type) {
    case "SET_EMAIL":
      newState.email = { ...state.email, currentValue: payload };
      return newState;
    case "SET_NAME":
      newState.name = { ...state.name, currentValue: payload };
      return newState;
    case "SET_PHONE_NUMBER":
      newState.phoneNumber = { ...state.phoneNumber, currentValue: payload };
      return newState;
  }
}
export default formReducer;
