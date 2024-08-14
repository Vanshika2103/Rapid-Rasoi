import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useForm, ValidationError } from "@formspree/react";

import "./Footer.css";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
      setNameValid(value.length > 0);
    } else if (name === "email") {
      setEmail(value);
      setEmailValid(validateEmail(value));
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const [state, handleSubmit] = useForm("xyzgwvdj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (nameValid && emailValid) {
  //     sendEmail(name, email);
  //     setFormSubmitted(true);
  //   } else {
  //     alert("Please enter valid Name and Email.");
  //   }
  // };

  // const sendEmail = (name, email) => {
  //   // Mocking the email sending functionality
  //   // Replace with actual email sending logic on your backend
  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name,
  //       email,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("Email sent:", json);
  //       alert("Email sent successfully!");
  //     })
  //     .catch((error) => {
  //       console.error("Error sending email:", error);
  //       alert("Failed to send email. Please try again later.");
  //     });
  // };

  return (
    <main className="footer-main-container">
      <section className="footer-section-one">
        <h3>
          Your Efficiency, Our Innovation: <br /> Together We Thrive
        </h3>
        <p>
          Stay Updated! Join Us for the Latest Innovations and <br /> Exclusive
          Offers!
        </p>
        <form className="footer-form" onSubmit={handleSubmit}>
          <input
            className="form-input-one"
            placeholder="Enter Your Name"
            value={name}
            onChange={handleInputChange}
            name="name"
            required
          />
          <input
            className="form-input-two"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleInputChange}
            name="email"
            type="email"
            required
          />
          <button type="submit" className="sub-btn">
            Submit
          </button>
        </form>
        <small className="privacy-policy-content lighter-texts">
          By submitting your form you agree to our{"    "}
          <b>
            {"  "}
            <a
              className="privacy"
              href="https://rapidrasoi.in/privacy_policy.php"
            >
              {"  "} Privacy Policy
            </a>
          </b>
        </small>
        {formSubmitted && (
          <small className="lighter-texts">Form submitted successfully!</small>
        )}
      </section>

      <section className="footer-section-two flex-col">
        <div className="section-two-lists-container">
          <ul>
            <li>
              <small className="display-block">Navigation</small>
            </li>
            <li className="pointer">
              <a href="#home">Home</a>
            </li>
            <li className="pointer">
              <a href="#works">How it works</a>
            </li>
            <li className="pointer">
              <a href="#discover-us">Discover Us</a>
            </li>
            <li className="pointer">
              <Link to="/about">About Us</Link>
            </li>
            <li className="pointer">
              <Link to="/contacts">Get in touch</Link>
            </li>
            <li className="pointer">
              <a href="#location">Location</a>
            </li>
            <li className="pointer">
              <a href="#download">Download our app</a>
            </li>
          </ul>
          <ul>
            <li>
              <small>Main Office</small>
            </li>
            <li className="pointer">IIT Kharagpur</li>
            <li className="pointer">+91 9620702023</li>
            <li className="pointer">+91 8617343506</li>
            <li className="pointer">
              <a href="mailto:rapidrasoi.in@gmail.com">
                rapidrasoi.in@gmail.com
              </a>
            </li>
            <li className="list-having-svg-icons">
              <small>
                <a
                  href="https://www.linkedin.com/company/rapidrasoi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                </a>
              </small>
              <small>
                <a
                  href="https://www.instagram.com/rapidrasoi.in/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
              </small>
            </li>
          </ul>
        </div>
        <small className="lighter-texts">
          RapidRasoi copyright @2023. All Rights Reserved.
        </small>
      </section>

      <section className="footer-section-three">
        <p className="footer-logo-image"></p>
      </section>
    </main>
  );
};

export { Footer };
