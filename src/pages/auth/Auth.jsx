import React, { useState } from "react";
import styled from "styled-components";

import AuthForm from "../../components/auth/AuthForm";

const StyledAuth = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 7rem auto;
`;

const Auth = () => {
  const [isLoginMode, setIsLoginMode, resetFormData] = useState(true);

  const switchLoginMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <StyledAuth>
      <AuthForm
        buttonChildren={isLoginMode ? "로그인" : "회원가입"}
        spanChildren={isLoginMode ? "회원가입" : "로그인"}
        changeMode={switchLoginMode}
        resetForm={resetFormData}
      />
    </StyledAuth>
  );
};

export default Auth;
