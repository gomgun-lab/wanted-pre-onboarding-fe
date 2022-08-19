import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { validate } from "../../util/validators";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid #777;
  background-color: #eee;
  outline: none;
  font-size: 1.1rem;
  box-sizing: border-box;
  margin: 0 0 8px 0;
`;

const StyledLabel = styled.label`
  margin: 0 0 6px 0;
  font-size: 1.1rem;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const Input = ({ label, id, type, name, errorMessage, validator, onInput }) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouced] = useState(false);

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    setValue(event.target.value);
    setIsValid(validate(event.target.value, validator));
  };

  const touchHandler = () => {
    setIsTouced(true);
  };

  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        type={type}
        name={name}
        value={value}
        onChange={changeHandler}
        onBlur={touchHandler}
      />
      {!isValid && isTouched && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
