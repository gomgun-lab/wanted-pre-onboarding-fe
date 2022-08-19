import React from "react";
import styled from "styled-components";

import Card from "../common/Card";
import Input from "../common/Input";
import Button from "../common/Button";

import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from "../../util/validators";
import useForm from "../../hooks/auth/useForm";

const StyledSpan = styled.span`
  margin-left: auto;

  :hover {
    cursor: pointer;
  }
`;

const SpanContainer = styled.div`
  display: flex;
`;

const authInitState = {
  email: {
    value: "",
    isValid: false,
  },
  password: {
    value: "",
    isValid: false,
  },
};

const Signup = ({ buttonChildren, spanChildren, changeMode, resetForm }) => {
  const [formState, inputHandler] = useForm(authInitState, false);

  const changeForm = () => {
    changeMode();
    resetForm();
  };

  return (
    <Card>
      <Input
        label="Email"
        id="email"
        type="email"
        name="email"
        errorMessage="이메일 형식으로 입력해주세요."
        onInput={inputHandler}
        validator={[VALIDATOR_EMAIL()]}
      />
      <Input
        label="Password"
        id="password"
        type="password"
        name="password"
        errorMessage="비밀번호는 8자 이상으로 입력해주세요."
        onInput={inputHandler}
        validator={[VALIDATOR_MINLENGTH(8)]}
      />
      <Button type="submit" disabled={!formState.isValid}>
        {buttonChildren}
      </Button>
      <hr />
      <SpanContainer>
        <StyledSpan onClick={changeMode}>{spanChildren}</StyledSpan>
      </SpanContainer>
    </Card>
  );
};

export default Signup;
