import React, { useContext } from "react";
import styled from "styled-components";

import AuthContext from "../../store/authContext";
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

const Signin = ({ toSignup }) => {
  const [formState, inputHandler] = useForm(authInitState, false);
  const authContext = useContext(AuthContext);

  const submitForm = (e) => {
    e.preventDefault();

    const { email, password } = formState.inputs;

    console.log("signin");
    authContext.signin(email.value, password.value);
  };

  return (
    <Card>
      <form onSubmit={submitForm}>
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
          {"로그인"}
        </Button>
        <hr />
        <SpanContainer>
          <StyledSpan onClick={toSignup}>{"회원가입"}</StyledSpan>
        </SpanContainer>
      </form>
    </Card>
  );
};

export default Signin;
