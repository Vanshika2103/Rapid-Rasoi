import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <section className="landingPage-section autoshow" id="home">
        <div className="mini-section">
          <h1>Boost Campus Life With Digital Canteen Solutions</h1>
          <p>
            Digitalize Your Campus Canteen with RapidRasoi: Cut Costs, Enhance
            Efficiency, and Boost Satisfaction.
          </p>
          <Link to="/getintouch">
            <button className="join-btn">Join</button>
          </Link>
        </div>
      </section>
    </>
  );
};
export { LandingPage };
