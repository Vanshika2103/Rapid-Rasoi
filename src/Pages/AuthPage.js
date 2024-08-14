// AuthPage.js
import React from "react";
import { Header } from "../Components/Header/Header";
import SignupForm from "../Components/AuthComponents/SignUp";
import LoginForm from "../Components/AuthComponents/Login";

const AuthPage = () => {
  return (
    <>
      <Header />
      <div className="auth-container autoshow">
        <SignupForm />
        <LoginForm />
      </div>
    </>
  );
};

export default AuthPage;
