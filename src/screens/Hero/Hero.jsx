import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Hero = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    // Navigate to the /signup route
    navigate("/signup");
  };
  return (
    <div className="hero">
      <div className="div-3">
        <div className="overlap-2">
          <div className="frame-21">
            <div className="frame-22">
              <div className="text-wrapper-17">Your brand, your Image</div>
              <div className="frame-23">
                <div className="text-wrapper-18">perfected with</div>
                <div className="text-wrapper-19">pbly.ai</div>
              </div>
            </div>
            <div className="frame-24">
              <div className="text-wrapper-20">
                {/* Convert "Get Started" text to a button */}
                <button className="text-wrapper-24" onClick={handleGetStartedClick}>Get Started</button>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img className="star-4" alt="Star" src="/img/star-1.svg" />
                  <img className="star-5" alt="Star" src="/img/star-2.svg" />
                  <img className="star-6" alt="Star" src="/img/star-3.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-3">
          <div className="background-image">
            <div className="overlap-group-3">
              <img className="element" alt="Element" src="/img/12.png" />
              <img className="noise" alt="Noise" src="/img/noise.png" />
            </div>
          </div>
          <div className="frame-25">
            <div className="frame-26">
              <div className="frame-27" />
              <div className="frame-28" />
              <div className="frame-29" />
            </div>
            <div className="frame-26">
              <div className="frame-30" />
              <div className="frame-31" />
              <div className="image-wrapper">
                <img className="image" alt="Image" src="/img/image-13.png" />
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="frame-32">
              <div className="text-wrapper-21">Privacy policy</div>
              <div className="text-wrapper-21">Terms &amp; conditions</div>
            </div>
            <div className="text-wrapper-22">copyright©pbly2024</div>
            <div className="text-wrapper-23">pbly.ai</div>
          </footer>
        </div>
        <header className="header-2">
          <div className="frame-33">
            <div className="frame-34">
            <button className="text-wrapper-24" onClick={handleGetStartedClick}>Get Started</button>
            </div>
          </div>
          <div className="text-wrapper-25">pbly.ai</div>
        </header>
      </div>
    </div>
  );
};

export default Hero;
