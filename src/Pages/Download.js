import * as React from "react";
import { Header } from "../Components/Header/Header";
import { ConnectUs } from "../Components/ConnectUs/ConnectUs";
import { Footer } from "../Components/Footer/Footer";

function Download() {
  return (
    <>
      <Header />
      <div className="autoshow">
        <ConnectUs />
      </div>
      <Footer />
    </>
  );
}
export default Download;
