import React from "react";
import "./Auth.scss";
import SignIn from "../../components/sign-in/SignIn";
import Signup from "../../components/signup/Signup";

export const Auth = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
};
