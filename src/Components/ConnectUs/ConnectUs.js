import "./ConnectUs.css";
import * as React from "react";
import Gbtn from "../../Assets/play-store.png.svg"

function ConnectUs() {
  return (
    <div className="container">
      <div className="column">
        <div className="iphone-container">
          <div className="iphone-frame">
            <div className="screenshot-container">
              <img
                src="https://i.ibb.co/y8tgGmZ/Screenshot-20240707-031722.png"
                alt="Screenshot"
                className="screenshot-img"
              />
            </div>
          </div>
          <div className="background-image"></div>
        </div>
      </div>
      <div className="column column-2">
        <div className="content">
          <div className="div-2">
            <div className="div-3" id="download">
              DOWNLOAD OUR APP
            </div>
            <div className="div-4">
              Transform your canteen experience effortlessly
            </div>
            {/* <div className="div-5">
              Keep your community active through
              <br />
              gamified quests
            </div> */}
            <div className="download-btns">
              {/* <a
                href="https://itunes.apple.com/us/app/my-app/id123456789?mt=8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                />
              </a> */}
              <a
                href="https://play.google.com/store/apps/details?id=com.corapana.foodtakeawayuser&pli=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="g-btn"
                  src={Gbtn}
                  alt="Get it on Google Play"
                />
              </a>
            </div>
            <div className="div-6">
              <div className="div-7">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/af5903b57cb3973835d55f9c6e2b47f3b29f9d92ea0c167472da457631870bba?"
                  className="img-2"
                  alt="Quests"
                />
                <div className="div-8">2K + Installs</div>
              </div>
              <div className="div-9">
                Download our app now and feel the
                <br />
                savour of the taste
              </div>
            </div>
            <div className="div-10">
              <div className="div-11">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf12104ba36faa95b0eefe802efd0c55a4a80020490d28b87a93c0e7778d831c?"
                  className="img-3"
                  alt="Set up a sprint"
                />
                <div className="div-12">6+ Cities</div>
              </div>
              <div className="div-13">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/513260b1fb97dcd77d20935e0e92379ed369615e501777a25ee17e16640d362e?"
                  className="img-4"
                  alt="Reward the winners"
                />
                <div className="div-14">4.9+ Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ConnectUs };
