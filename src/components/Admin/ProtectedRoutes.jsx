import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Admin from "./Admin";
// import PoshContext from "../../../PoshContext";
import PoshContext from "../../PoshContext";

// const useAuth = () => {
//   const user = { loggedIn: false };
//   return user && user.loggedIn;
// };

const ProtectedRoutes = () => {
  const { isLogged } = useContext(PoshContext);

  //   const isAuth = useAuth();
  return isLogged ? <Outlet /> : <Navigate to="/admin" />;
};

export default ProtectedRoutes;
