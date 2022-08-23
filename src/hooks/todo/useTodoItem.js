import { useState } from "react";

import { validate, VALIDATOR_REQUIRE } from "../../util/validators";

const useTodoItem = (todo) => {
  const [value, setValue] = useState(todo || "");
  const [isValid, setIsValid] = useState(false);

  const changeHandler = (event) => {
    setValue(event.target.value);
    setIsValid(validate(event.target.value, [VALIDATOR_REQUIRE()]));
  };

  return { value, isValid, changeHandler, setValue };
};

export default useTodoItem;
