import React, { useState } from "react";
import "./WorkingPage.css";

const WorkingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Select Colleges",
      description:
        "Users begin by selecting their college from a list on the RapidRasoi platform, ensuring they are accessing the appropriate canteen services specific to their campus, for a personalized and relevant dining experience.",
    },
    {
      title: "Browse Menu",
      description:
        "Users can browse through a diverse menu offering various dishes tailored to their preferences and dietary needs.",
    },
    {
      title: "Customize Order",
      description:
        "Users have the option to customize their orders, adding or removing items according to their tastes.",
    },
    {
      title: "Choose Dine-In/Takeaway",
      description:
        "Users can choose whether they want to dine in the canteen or opt for takeaway services.",
    },
    {
      title: "Receive OTP Verification",
      description:
        "For security, users receive an OTP verification to ensure their orders are safe and confirmed.",
    },
    {
      title: "Secure Payment",
      description:
        "The platform supports secure payment methods, ensuring all transactions are safe and seamless.",
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="mt-3 padding-3 workingPage-parent" id="works">
        <section className="mt-2 pt-2 pl-2 workingPage-first-section">
          <h2>How it works</h2>
          <div className="mt-1 padding-1 pl-2 first-container">
            <small>step {currentSlide + 1}/6</small>
            <h2 className="mt-1 mb-1">{slides[currentSlide].title}</h2>
            <p className="content-gap-margin">
              {slides[currentSlide].description}
            </p>
            <div className="mt-auto">
              <button className="left-slider-btn" onClick={handlePrevSlide}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="17"
                  viewBox="0 0 11 17"
                  fill="none"
                >
                  <g clipPath="url(#clip0_58_19)">
                    <path
                      d="M1.74121 9.26642L1.4042 8.90348L1.01334 9.26642L1.4042 9.62936L1.74121 9.26642ZM9.01215 3.19073C9.21259 3.0046 9.22419 2.69119 9.03807 2.4908C8.85194 2.29031 8.53856 2.27872 8.33811 2.46485L9.01215 3.19073ZM9.01215 15.3421L2.07823 8.90348L1.4042 9.62936L8.33811 16.068L9.01215 15.3421ZM2.07823 9.62936L9.01215 3.19073L8.33811 2.46485L1.4042 8.90348L2.07823 9.62936Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_58_19">
                      <rect
                        width="9.90559"
                        height="15.8489"
                        fill="white"
                        transform="matrix(-1 0 0 -1 10.1611 16.6959)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button
                className="btn-1 right-slider-btn ml-half"
                onClick={handleNextSlide}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="17"
                  viewBox="0 0 11 17"
                  fill="#fe6f2f"
                >
                  <path
                    d="M9.08593 8.27197L9.42295 8.63491L9.81381 8.27197L9.42295 7.90903L9.08593 8.27197ZM1.815 14.3477C1.61456 14.5338 1.60296 14.8472 1.78908 15.0476C1.97521 15.2481 2.28859 15.2597 2.48904 15.0735L1.815 14.3477ZM1.815 2.19628L8.74892 8.63491L9.42295 7.90903L2.48904 1.4704L1.815 2.19628ZM8.74892 7.90903L1.815 14.3477L2.48904 15.0735L9.42295 8.63491L8.74892 7.90903Z"
                    fill="#fe6f2f"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="workingPage-second-section">
          <div>
            <h2 className="mb-1">Ordering Made Simple: Steps</h2>
            <p>
              RapidRasoi streamlines college food ordering with intuitive
              selection, secure transactions, real-time updates, and convenient
              pickup options for a seamless dining experience.
            </p>
          </div>
          <div className="second-container">
            <button
              className={`btn ${currentSlide === 0 ? "active" : ""}`}
              id="btn1"
            >
              Select College
            </button>
            <p className="lines" id="line1"></p>
            <button
              className={`btn ${currentSlide === 1 ? "active" : ""}`}
              id="btn2"
            >
              Browse Menu
            </button>
            <p className="lines" id="line2"></p>
            <button
              className={`btn ${currentSlide === 2 ? "active" : ""}`}
              id="btn3"
            >
              Customize Order
            </button>
            <p className="lines" id="line3"></p>
            <button
              className={`btn ${currentSlide === 3 ? "active" : ""}`}
              id="btn4"
            >
              Choose Dine-In/Takeaway
            </button>
            <p className="lines" id="line4"></p>
            <button
              className={`btn ${currentSlide === 4 ? "active" : ""}`}
              id="btn5"
            >
              Receive OTP Verification
            </button>
            <p className="lines" id="line5"></p>
            <button
              className={`btn ${currentSlide === 5 ? "active" : ""}`}
              id="btn6"
            >
              Secure Payment
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export { WorkingPage };
