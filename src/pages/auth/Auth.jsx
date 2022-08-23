import React, { useState } from "react";
import styled from "styled-components";

import Signin from "../../components/auth/Signin";
import Signup from "../../components/auth/Signup";

const StyledAuth = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 7rem auto;
`;

const Auth = () => {
  const [isSigninMode, setIsSigninMode] = useState(true);

  const switchToSignup = () => {
    setIsSigninMode(false);
  };

  const switchToSignin = () => {
    setIsSigninMode(true);
  };

  return (
    <StyledAuth>
      {isSigninMode && <Signin toSignup={switchToSignup} />}
      {!isSigninMode && <Signup toSignin={switchToSignin} />}
    </StyledAuth>
  );
};

export default Auth;
