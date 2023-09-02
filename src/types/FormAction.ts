interface FormAction {
  type: "SET_EMAIL" | "SET_NAME" | "SET_PHONE_NUMBER";
  payload: string;
}

export default FormAction;
