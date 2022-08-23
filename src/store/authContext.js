import { createContext } from "react";

const AuthContext = createContext({
  isSignedIn: false,
  signin: (email, password) => {},
  signup: (email, password) => {},
  signout: () => {},
});

export default AuthContext;
