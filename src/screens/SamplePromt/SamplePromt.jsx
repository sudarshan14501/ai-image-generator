import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import "./style.css";

export const SamplePromt = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to navigate back to the home page
  const navigateToHome = () => {
    navigate("/home"); // Navigate to the home page (assuming "/" is the route for the home page)
  };
  return (
    <div className="sample-promt">
      <div className="div-5">
        <div className="text-wrapper-34">Sample Prompts</div>
        <div className="frame-44">
          <div className="frame-45">
            <div className="frame-46">
              <img className="instagram-post-2" alt="Instagram post" src="/img/instagram-post-2-1.png" />
              <div className="frame-47">
                <div className="frame-45">
                  <p className="text-wrapper-35">
                    A pair of luxurious sunglasses , Editorial Photography, white background
                  </p>
                  <div className="group-4">
                    <div className="frame-48">
                      <div className="icon-frame-wrapper">
                        <div className="icon-frame">
                          <img className="base" alt="Base" src="/img/base.png" />
                          <img className="union" alt="Union" src="/img/union.svg" />
                        </div>
                      </div>
                      <img className="frame-49" alt="Frame" src="/img/frame-1000003334.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-46">
              <img className="instagram-post-2" alt="Instagram post" src="/img/instagram-post-2-2.png" />
              <div className="frame-47">
                <div className="frame-45">
                  <p className="text-wrapper-35">
                    A cat under the snow with blue eyes, covered by snow, cinematic style, medium shot, professional
                    photo, animal
                  </p>
                  <div className="group-4">
                    <div className="frame-48">
                      <div className="icon-frame-wrapper">
                        <div className="icon-frame">
                          <img className="base-2" alt="Base" src="/img/base.png" />
                          <img className="union" alt="Union" src="/img/union.svg" />
                        </div>
                      </div>
                      <img className="frame-49" alt="Frame" src="/img/frame-1000003334.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-46">
              <img className="instagram-post-2" alt="Instagram post" src="/img/instagram-post-2-5.png" />
              <div className="frame-47">
                <div className="frame-45">
                  <p className="text-wrapper-35">
                    centered shot of a hyper realistic car, wide angle, full body, dd, fantasy, highly detailed, digital
                    painting, artstation, smooth, sharp focus, digital art
                  </p>
                  <div className="group-4">
                    <div className="frame-48">
                      <div className="icon-frame-wrapper">
                        <div className="icon-frame">
                          <img className="base-3" alt="Base" src="/img/base.png" />
                          <img className="union" alt="Union" src="/img/union.svg" />
                        </div>
                      </div>
                      <img className="frame-49" alt="Frame" src="/img/frame-1000003334.svg"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-45">
            <div className="frame-46">
              <img className="instagram-post-3" alt="Instagram post" src="/img/instagram-post-2-3.png" />
              <div className="frame-47">
                <div className="frame-45">
                  <p className="text-wrapper-35">
                    A pair of luxurious sunglasses , Editorial Photography, white background
                  </p>
                  <div className="group-4">
                    <div className="frame-48">
                      <div className="icon-frame-wrapper">
                        <div className="union-wrapper">
                          <img className="union-2" alt="Union" src="/img/base.png" />
                        </div>
                      </div>
                      <img className="frame-50" alt="Frame" src="/img/base.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-46">
              <img className="instagram-post-3" alt="Instagram post" src="/img/instagram-post-2-4.png" />
              <div className="frame-47">
                <div className="frame-45">
                  <p className="text-wrapper-35">
                    A cat under the snow with blue eyes, covered by snow, cinematic style, medium shot, professional
                    photo, animal
                  </p>
                  <div className="group-4">
                    <div className="frame-48">
                      <div className="icon-frame-wrapper">
                        <div className="img-wrapper">
                          <img className="union-3" alt="Union" src="/img/base.png" />
                        </div>
                      </div>
                      <img className="frame-51" alt="Frame" src="/img/base.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-46">
              <img className="instagram-post-3" alt="Instagram post" src="/img/instagram-post-2-5.png" />
              <div className="frame-47">
                <div className="frame-45">
                  <p className="text-wrapper-35">
                    centered shot of a hyper realistic car, wide angle, full body, dd, fantasy, highly detailed, digital
                    painting, artstation, smooth, sharp focus, digital art
                  </p>
                  <div className="group-4">
                    <div className="frame-48">
                      <div className="icon-frame-wrapper">
                        <div className="icon-frame-2">
                          <img className="union-4" alt="Union" src="/img/base.png" />
                        </div>
                      </div>
                      <img className="frame-52" alt="Frame" src="/img/base.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="cross-2" alt="Cross" src="/img/cross-1.svg" onClick={navigateToHome}  />
      </div>
    </div>
  );
};
