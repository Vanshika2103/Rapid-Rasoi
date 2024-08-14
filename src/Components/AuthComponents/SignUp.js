// SignupForm.js
import React, { useState } from "react";
import axios from "axios";
import "./AuthPage.css";

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        signupData
      );
      console.log("Signup successful:", response.data);
      // Handle successful signup, e.g., redirect or show success message
    } catch (error) {
      console.error("Error signing up:", error.message);
      // Handle signup error, e.g., show error message
    }
  };

  return (
    <div className="auth-form signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={signupData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="signup-email"
            name="email"
            value={signupData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            value={signupData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
