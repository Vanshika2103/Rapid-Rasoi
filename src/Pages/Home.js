import { Header } from "../Components/Header/Header";
import { LandingPage } from "../Components/LandingPage/LandingPage";
import { WorkingPage } from "../Components/WorkingPage/WorkingPage";
import { SearchingPage } from "../Components/SearchingPage/Searching";
import { TestimonialSection } from "../Components/Testimonials/Testimonials";
import { Advertisement } from "../Components/Advertisement/Advertisement";
import { ConnectUs } from "../Components/ConnectUs/ConnectUs";
import { Footer } from "../Components/Footer/Footer";
import { Map } from "../Components/Map/Map";
import { LocateUs } from "../Components/LocateUs/LocateUs";

const Home = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <WorkingPage />
      <ConnectUs />
      <SearchingPage />
      <TestimonialSection />
      <Advertisement />
      <Map />
      {/* <LocateUs /> */}
      <Footer />
    </div>
  );
};

export { Home };
