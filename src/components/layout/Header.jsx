import React, { useContext } from "react";

import Card from "../common/Card";
import Button from "../common/Button";

import AuthContext from "../../store/authContext";

const Header = () => {
  const authContext = useContext(AuthContext);

  return (
    <Card>
      <Button onClick={authContext.signout}>๋ก๊ทธ์์</Button>
    </Card>
  );
};

export default Header;
