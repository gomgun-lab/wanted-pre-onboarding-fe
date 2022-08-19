import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Auth from "./pages/auth/Auth";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </Fragment>
  );
}

export default App;
