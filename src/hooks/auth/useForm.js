import { useReducer, useCallback } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) continue;
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case "INPUT_RESET":
      return { inputs: "", isValid: false };
    default:
      return state;
  }
};

const useForm = (initialInputs, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const changeHandler = useCallback((inputId, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputId,
      value,
      isValid,
    });
  }, []);

  const resetFormData = useCallback(() => {
    dispatch({ type: "INPUT_RESET" });
  }, []);

  return [formState, changeHandler, resetFormData];
};

export default useForm;
