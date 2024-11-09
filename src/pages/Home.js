import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Home = () => {

  return (
    <div className="header">
      <NavLink to={"/auth/login"}>Login</NavLink>
      <NavLink to={"/auth/signup"}>Sign up</NavLink>
      <Outlet/>
    </div>
  );
};

export default Home;
