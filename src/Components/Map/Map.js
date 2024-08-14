import * as React from "react";
import "./Map.css";
const Map = () => {
  return (
    <>
      <div className="map-section" id="location">
        <h1 className="flex-center mt-2 mb-2">Locate Us</h1>
        <iframe
          className="mb-2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29528.25059611525!2d87.28929489565827!3d22.314655051424456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d44031d91072d%3A0x750e832f90176385!2sIIT%20Kharagpur%2C%20Kharagpur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1720451940713!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export { Map };
