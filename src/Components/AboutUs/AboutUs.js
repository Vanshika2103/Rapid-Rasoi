import * as React from "react";
import "./AboutUs.css";
import Home from "../../Assets/Home.png";

const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="about-heading">
          Enhancing Campus <br /> Life <span>Today</span>
        </h1>
        <p className="about-description">
          We are an innovative platform specializing in transforming college
          canteen operations with cutting-edge technology. Our mission is to
          provide high-quality, tailored solutions that enhance efficiency and
          elevate the dining experience for students and staff.
        </p>
        <div className="card-wrapper">
          <div className="two-div-container">
            <div className="mission-div">
              <h2>Mission-Driven</h2>
              <p>
                Our mission is to enhance campus life by delivering exceptional
                dining experiences for students and staff through innovation and
                dedication.
              </p>
            </div>
            <div className="solution-div">
              <h2>Innovative Solutions</h2>
              <p>
                We leverage cutting-edge technology to transform college canteen
                operations, making them more efficient and user-friendly.
              </p>
            </div>
          </div>
          <div className="year-div">
            <h2>Established and privately held by IIT Kharagpur Founders</h2>
            <p>2023</p>
          </div>
          <div className="services-div">
            <h2>Tailored Services</h2>
            <img src={Home} alt="image" />
            <p>
              Our high-quality solutions are customized to meet the unique needs
              of each college, ensuring optimal performance and satisfaction.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { AboutUs };
