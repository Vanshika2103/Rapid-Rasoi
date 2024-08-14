import * as React from "react";
import { Header } from "../Components/Header/Header";
import { AboutUs } from "../Components/AboutUs/AboutUs";
import { Footer } from "../Components/Footer/Footer";
import { GetInTouch } from "../Components/GetInTouch/GetInTouch";

function AboutUsPage() {
  return (
    <>
      <Header />
      <div className="autoshow">
        <AboutUs />
        <GetInTouch />
      </div>

      <Footer />
    </>
  );
}
export default AboutUsPage;
