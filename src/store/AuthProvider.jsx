import React, { useEffect, useState, useCallback } from "react";

import { getAccessToken } from "../util/token";
import AuthContext from "./authContext";
import AuthService from "../services/auth.service";

const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (getAccessToken()) {
      setIsSignedIn(true);
    }
  }, []);

  const signin = useCallback(async (email, password) => {
    await AuthService.signin(email, password);
    if (getAccessToken()) setIsSignedIn(true);
  }, []);

  const signup = useCallback(async (email, password) => {
    await AuthService.signup(email, password);
    if (getAccessToken()) setIsSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    AuthService.signout();
    setIsSignedIn(false);
  }, []);

  const authContext = {
    isSignedIn,
    signin,
    signup,
    signout,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
