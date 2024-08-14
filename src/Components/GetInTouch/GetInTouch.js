import * as React from "react";
import "./GetInTouch.css";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import axios from "axios";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [state, handleSubmit] = useForm("xldrbvwb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Send email with form data to the specified email address
  //     await axios.post("https://your-backend-server-url/send-email", formData);
  //     alert("Message sent successfully!");
  //     setFormData({ name: "", email: "", college: "", message: "" });
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //     alert("Failed to send message. Please try again later.");
  //   }
  // };

  return (
    <>
      <div className="get-intouch-container autoshow">
        <div className="left-column">
          <h2>Ready to Transform Your Canteen?</h2>
          <form onSubmit={handleSubmit}>
            {/* <form action="https://formspree.io/f/xgvwknjq" method="POST"> */}
            <div className="form-group">
              <label>Name * :</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label>College:</label>
              <input
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="College"
                field="college"
                errors={state.errors}
              />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              className="submit-btn"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="right-column">
          <p>
            We collaborate with colleges globally to revolutionize canteen
            operations. In food service, decisions have their pros and cons. At
            RapidRasoi, we emphasize the pros. Let us guide you through our
            benefits – efficiency, convenience, innovation, reliability,
            satisfaction, and sustainability. Let's discuss transforming your
            canteen services and enhancing campus life. Get in touch to see
            where improved performance can take your college dining experience.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Call</h3>
              <p>+91 9620702023</p>
              <p>+91 8617343506</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:rapidrasoi.in@gmail.com">
                rapidrasoi.in@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <h3>Visit</h3>
              <p>IIT KHARAGPUR CAMPUS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { GetInTouch };
