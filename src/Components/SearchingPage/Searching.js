import { useState } from "react";
import "./Searching.css";
import { Link } from "react-router-dom";

const SearchingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Vendor",
      option1: "Digital Accounting",
      option2: "Customer Insights",
      option3: "Operational Efficiency",
      option4: "Simplified POS",
      option5: "Smooth Withdrawls",
    },
    {
      title: "Student",
      option1: "No Hidden Charges",
      option2: "Save Time",
      option3: "No Long Queues",
      option4: "Hostel Delivery",
      option5: "Exclusive Offers",
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 2);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <>
      <h1 className="discover flex-center gap-1 mt-3" id="discover-us">
        Discover <span>RapidRasoi</span>
      </h1>
      <div className="mt-1 searching-boxes">
        <button
          className="left-slider-btn btn-hollow"
          onClick={handlePrevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
          >
            <g clipPath="url(#clip0_98_79)">
              <path
                d="M2.3545 9.30854L2.01748 8.9456L1.62662 9.30854L2.01748 9.67148L2.3545 9.30854ZM9.62543 3.23284C9.82587 3.04672 9.83747 2.7333 9.65135 2.53291C9.46522 2.33243 9.15184 2.32084 8.95139 2.50696L9.62543 3.23284ZM9.62543 15.3842L2.69151 8.9456L2.01748 9.67148L8.95139 16.1101L9.62543 15.3842ZM2.69151 9.67148L9.62543 3.23284L8.95139 2.50696L2.01748 8.9456L2.69151 9.67148Z"
                fill="#FE6F2F"
              />
            </g>
            <defs>
              <clipPath id="clip0_98_79">
                <rect
                  width="9.90559"
                  height="15.8489"
                  fill=""
                  transform="matrix(-1 0 0 -1 10.7744 16.7379)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <section className="searchingPage-middle-section">
          <center className="searchingPage-headings">
            <h1>
              I'm a <i>{slides[currentSlide].title}</i>
            </h1>
          </center>
          <div className="searchingPage-flex-container">
            <div className="flex-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <g clipPath="url(#clip0_98_8)">
                  <path
                    d="M45.5015 1.24988H15.5015C7.63141 1.24988 1.25146 7.62982 1.25146 15.4999V45.4999C1.25146 53.3699 7.63141 59.7499 15.5015 59.7499H45.5015C53.3715 59.7499 59.7515 53.3699 59.7515 45.4999V15.4999C59.7515 7.62982 53.3715 1.24988 45.5015 1.24988Z"
                    stroke="#E1E1E1"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.5005 45.4989L18.5875 42.4119"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.789 25.6691C34.1931 25.6691 35.3314 24.5309 35.3314 23.1267C35.3314 21.7226 34.1931 20.5844 32.789 20.5844C31.3849 20.5844 30.2466 21.7226 30.2466 23.1267C30.2466 24.5309 31.3849 25.6691 32.789 25.6691Z"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37.8741 33.2962C37.8741 30.488 35.5976 28.2114 32.7893 28.2114C29.9811 28.2114 27.7046 30.488 27.7046 33.2962"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28.3108 40.1113C29.7038 40.6359 31.2131 40.9228 32.7895 40.9228C39.8101 40.9228 45.5014 35.2315 45.5014 28.2109C45.5014 21.1903 39.8101 15.499 32.7895 15.499C25.7689 15.499 20.0776 21.1903 20.0776 28.2109C20.0776 29.7872 20.3645 31.2966 20.889 32.6896"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.9799 37.0208L21.2833 45.1106L15.8901 39.7173L23.9799 37.0208Z"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_98_8">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.500977 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h4>{slides[currentSlide].option1}</h4>
            </div>
            <div className="flex-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="61"
                viewBox="0 0 60 61"
                fill="none"
              >
                <g clipPath="url(#clip0_98_19)">
                  <path
                    d="M44.9961 1.24988H14.9961C7.12604 1.24988 0.746094 7.62982 0.746094 15.4999V45.4999C0.746094 53.3699 7.12604 59.7499 14.9961 59.7499H44.9961C52.8662 59.7499 59.2461 53.3699 59.2461 45.4999V15.4999C59.2461 7.62982 52.8662 1.24988 44.9961 1.24988Z"
                    stroke="#E1E1E1"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M29.9975 43.2112C37.0181 43.2112 42.7094 37.5199 42.7094 30.4993C42.7094 23.4788 37.0181 17.7875 29.9975 17.7875C22.9769 17.7875 17.2856 23.4788 17.2856 30.4993C17.2856 37.5199 22.9769 43.2112 29.9975 43.2112Z"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.9989 29.2275C31.403 29.2275 32.5412 28.0892 32.5412 26.685C32.5412 25.281 31.403 24.1427 29.9989 24.1427C28.5947 24.1427 27.4565 25.281 27.4565 26.685C27.4565 28.0892 28.5947 29.2275 29.9989 29.2275Z"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.9126 36.8565C24.9126 34.0483 27.1891 31.7717 29.9974 31.7717C32.8056 31.7717 35.0821 34.0483 35.0821 36.8565"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.9961 17.7871V15.499"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42.7085 30.5H44.9967"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29.9961 43.2104V45.4986"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.9971 30.5H17.2852"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_98_19">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(-0.00292969 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h4>{slides[currentSlide].option2}</h4>
            </div>
            <div className="flex-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <g clipPath="url(#clip0_98_32)">
                  <path
                    d="M45.4985 1.24988H15.4985C7.62848 1.24988 1.24854 7.62982 1.24854 15.4999V45.4999C1.24854 53.3699 7.62848 59.7499 15.4985 59.7499H45.4985C53.3686 59.7499 59.7486 53.3699 59.7486 45.4999V15.4999C59.7486 7.62982 53.3686 1.24988 45.4985 1.24988Z"
                    stroke="#E1E1E1"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M21.6223 36.3167C23.313 36.3167 24.6835 34.9461 24.6835 33.2554C24.6835 31.5648 23.313 30.1942 21.6223 30.1942C19.9316 30.1942 18.561 31.5648 18.561 33.2554C18.561 34.9461 19.9316 36.3167 21.6223 36.3167Z"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4995 45.498C15.4995 42.1166 18.2406 39.3755 21.622 39.3755C25.0034 39.3755 27.7445 42.1166 27.7445 45.498"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.3164 21.6244V23.9203"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.4983 24.6826C45.4983 19.0456 40.4196 14.5949 34.5882 15.6564C30.9773 16.3137 28.0089 19.2435 27.3096 22.8464C26.576 26.6255 28.1652 30.0654 30.8914 32.0557C32.4265 33.1765 33.2533 33.4978 33.2533 35.3986V35.4809C33.2533 37.1341 34.5793 38.4582 36.215 38.4582H36.3145C38.0052 38.4582 39.3758 37.0876 39.3758 35.397C39.3758 33.4326 40.3189 33.1366 41.8826 31.9477C44.0773 30.279 45.4983 27.6553 45.4983 24.6826Z"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.3164 39.9887V38.4581"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_98_32">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.499023 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h4>{slides[currentSlide].option3}</h4>
            </div>
            <div className="flex-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <g clipPath="url(#clip0_98_43)">
                  <path
                    d="M45.8706 1.25415H15.8706C8.00055 1.25415 1.62061 7.63409 1.62061 15.5042V45.5042C1.62061 53.3742 8.00055 59.7542 15.8706 59.7542H45.8706C53.7407 59.7542 60.1206 53.3742 60.1206 45.5042V15.5042C60.1206 7.63409 53.7407 1.25415 45.8706 1.25415Z"
                    stroke="#E1E1E1"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M30.8715 39.4162C32.2755 39.4162 33.4138 38.2779 33.4138 36.8738C33.4138 35.4697 32.2755 34.3314 30.8715 34.3314C29.4673 34.3314 28.3291 35.4697 28.3291 36.8738C28.3291 38.2779 29.4673 39.4162 30.8715 39.4162Z"
                    stroke="#ED7124"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.0249 45.502C26.6776 43.4472 28.6009 41.9585 30.8719 41.9585C33.1426 41.9585 35.0659 43.447 35.7187 45.5016"
                    stroke="#ED7124"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M41.0405 39.4162C42.4445 39.4162 43.5828 38.2779 43.5828 36.8738C43.5828 35.4697 42.4445 34.3314 41.0405 34.3314C39.6363 34.3314 38.498 35.4697 38.498 36.8738C38.498 38.2779 39.6363 39.4162 41.0405 39.4162Z"
                    stroke="#ED7124"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M36.1958 45.502C36.8485 43.4472 38.7718 41.9585 41.0428 41.9585C43.3135 41.9585 45.2204 43.447 45.8733 45.5016"
                    stroke="#ED7124"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.7025 39.4162C22.1067 39.4162 23.2449 38.2779 23.2449 36.8738C23.2449 35.4697 22.1067 34.3314 20.7025 34.3314C19.2984 34.3314 18.1602 35.4697 18.1602 36.8738C18.1602 38.2779 19.2984 39.4162 20.7025 39.4162Z"
                    stroke="#ED7124"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.8716 45.502C16.5243 43.4472 18.4311 41.9585 20.7021 41.9585C22.9729 41.9585 24.896 43.447 25.5489 45.5016"
                    stroke="#ED7124"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.2764 29.0157C25.2907 27.0299 25.2907 23.8104 27.2764 21.8247C29.2622 19.839 32.4816 19.839 34.4673 21.8247C36.453 23.8104 36.453 27.0299 34.4673 29.0157"
                    stroke="#ED7124"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.8706 15.5033V20.3338"
                    stroke="#ED7124"
                    strokeWidth="3"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_98_43">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.871582 0.503418)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h4>{slides[currentSlide].option4}</h4>
            </div>
            <div className="flex-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="61"
                viewBox="0 0 61 61"
                fill="none"
              >
                <g clipPath="url(#clip0_98_57)">
                  <path
                    d="M45.1275 1.25415H15.1274C7.25739 1.25415 0.877441 7.63409 0.877441 15.5042V45.5042C0.877441 53.3742 7.25739 59.7542 15.1274 59.7542H45.1275C52.9975 59.7542 59.3775 53.3742 59.3775 45.5042V15.5042C59.3775 7.63409 52.9975 1.25415 45.1275 1.25415Z"
                    stroke="#E1E1E1"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M30.1283 20.5881C31.5324 20.5881 32.6706 19.4498 32.6706 18.0456C32.6706 16.6416 31.5324 15.5033 30.1283 15.5033C28.7241 15.5033 27.5859 16.6416 27.5859 18.0456C27.5859 19.4498 28.7241 20.5881 30.1283 20.5881Z"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25.0425 28.2151C25.0425 25.4069 27.319 23.1304 30.1273 23.1304C32.9355 23.1304 35.212 25.4069 35.212 28.2151"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.2117 40.4198H15.127V45.5045H20.2117V40.4198Z"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M32.6706 40.4198H27.5859V45.5045H32.6706V40.4198Z"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.1282 40.4198H40.0435V45.5045H45.1282V40.4198Z"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.6685 40.4192V35.3345H42.5838V40.4192"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30.1279 30.7574V40.4184"
                    stroke="#ED7124"
                    strokeWidth="2.25"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_98_57">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.125 0.503418)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <h4>{slides[currentSlide].option5}</h4>
            </div>
          </div>
        </section>
        <button
          className="right-slider-btn btn-filled"
          onClick={handleNextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="17"
            viewBox="0 0 11 17"
            fill="none"
          >
            <g clipPath="url(#clip0_98_72)">
              <path
                d="M9.27392 8.31414L9.61094 8.67708L10.0018 8.31414L9.61094 7.9512L9.27392 8.31414ZM2.00299 14.3898C1.80255 14.576 1.79094 14.8894 1.97707 15.0898C2.16319 15.2903 2.47658 15.3018 2.67703 15.1157L2.00299 14.3898ZM2.00299 2.23845L8.9369 8.67708L9.61094 7.9512L2.67703 1.51257L2.00299 2.23845ZM8.9369 7.9512L2.00299 14.3898L2.67703 15.1157L9.61094 8.67708L8.9369 7.9512Z"
                fill="#FFD7C5"
              />
            </g>
            <defs>
              <clipPath id="clip0_98_72">
                <rect
                  width="9.90559"
                  height="15.8489"
                  fill="white"
                  transform="translate(0.853516 0.884766)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="get-in-touch-container">
        <nav className="fork-icon-png"></nav>
        <h2>Streamline your college canteen with RapidRasoi</h2>
        <Link to="/getintouch">
          <button className="get-btn">Get In Touch</button>
        </Link>
      </div>
    </>
  );
};
export { SearchingPage };
