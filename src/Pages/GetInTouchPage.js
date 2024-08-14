import * as React from "react";
import { Header } from "../Components/Header/Header";
import { GetInTouch } from "../Components/GetInTouch/GetInTouch";
import { Footer } from "../Components/Footer/Footer";
import { Map } from "../Components/Map/Map";

function GetInTouchPage() {
  return (
    <>
      <Header />
      <GetInTouch />
      <Map />
      <Footer />
    </>
  );
}
export default GetInTouchPage;
