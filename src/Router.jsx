import { useContext } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import Auth from "./pages/auth/Auth";
import Todo from "./pages/todo/Todo";
import NotFound from "./pages/NotFound";
import AuthContext from "./store/authContext";

const Router = () => {
  const authContext = useContext(AuthContext);

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={
          authContext.isSignedIn ? <Navigate to="todo" replace /> : <Auth />
        }
      ></Route>
      <Route
        path="/todo"
        element={
          authContext.isSignedIn ? <Todo /> : <Navigate to="/" replace />
        }
      ></Route>
    </Routes>
  );
};

export default Router;
