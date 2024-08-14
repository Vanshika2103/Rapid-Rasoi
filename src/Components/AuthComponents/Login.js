// // AuthPage.js
// import React, { useState } from "react";
// import { Header } from "../Header/Header";
// import "./AuthPage.css";

// const AuthPage = () => {
//   const [signupData, setSignupData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//   });

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleSignupInputChange = (e) => {
//     const { name, value } = e.target;
//     setSignupData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSignupSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Form Data:", signupData);
//   };

//   const handleLoginInputChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Form Data:", loginData);
//   };

//   return (
//     <>
//       <Header />
//       <div className="auth-container">
//         <div className="auth-form signup-form">
//           <h2>Sign Up</h2>
//           <form onSubmit={handleSignupSubmit}>
//             <div className="form-group">
//               <label htmlFor="fullName">Full Name</label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={signupData.fullName}
//                 onChange={handleSignupInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 id="signup-email"
//                 name="email"
//                 value={signupData.email}
//                 onChange={handleSignupInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="signup-password"
//                 name="password"
//                 value={signupData.password}
//                 onChange={handleSignupInputChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn-primary">
//               Sign Up
//             </button>
//           </form>
//         </div>

//         <div className="auth-form login-form">
//           <h2>Login</h2>
//           <form onSubmit={handleLoginSubmit}>
//             <div className="form-group">
//               <label htmlFor="login-email">Email</label>
//               <input
//                 type="email"
//                 id="login-email"
//                 name="email"
//                 value={loginData.email}
//                 onChange={handleLoginInputChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="login-password">Password</label>
//               <input
//                 type="password"
//                 id="login-password"
//                 name="password"
//                 value={loginData.password}
//                 onChange={handleLoginInputChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn-primary">
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AuthPage;
// LoginForm.js
import React, { useState } from "react";
import axios from "axios";
import "./AuthPage.css";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        loginData
      );
      console.log("Login successful:", response.data);
      // Handle successful login, e.g., redirect or show success message
    } catch (error) {
      console.error("Error logging in:", error.message);
      // Handle login error, e.g., show error message
    }
  };

  return (
    <div className="auth-form login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
