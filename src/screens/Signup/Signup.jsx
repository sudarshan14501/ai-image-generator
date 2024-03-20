import React, {useState}from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false); 
  const handleLoginClick = useGoogleLogin({
    onSuccess: async (res) => {
      try {
        const accessToken = res.access_token;
        localStorage.setItem('accessToken', accessToken); // Save access token in localStorage

        const userinfoEndpoint = 'http://209.97.155.198:6060/manageUser';
        const response = await fetch(userinfoEndpoint, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        if (!response.ok) {
          throw new Error("Failed to fetch user information");
        }
        const userinfo = await response.json();

        // Navigate to home page
        await navigate('/home');
      } catch (error) {
        const errorMessage = error.message || "An unknown error occurred";
        setError(errorMessage);
      }
    },
    onError: (error) => {
      const errorMessage = error.message || "An unknown error occurred";
      setError(errorMessage);
    }
  });

  return (
    <div className="signup">
      <div className="div-4">
        <div className="overlap-wrapper">
          <div className="overlap-4">
            <div className="frame-35">
              <p className="text-wrapper-26">
                Create a brand image in 1:1 for a fashion brand in a dark theme with neonic typography
              </p>
              <div className="group-2">
                <div className="overlap-group-4">
                  <img className="star-7" alt="Star" src="/img/star-1-1.svg" />
                  <img className="star-8" alt="Star" src="/img/star-2-1.svg" />
                  <img className="star-9" alt="Star" src="/img/star-3-1.svg" />
                </div>
              </div>
            </div>
            <img className="instagram-post" alt="I" src="/img/instagram-post-2-6.png" />
            <div className="frame-36">
              <div className="text-wrapper-27">Created</div>
            </div>
          </div>
        </div>
        <div className="frame-37">
          <div className="frame-38">
            <div className="text-wrapper-28">Hey! Welcome</div>
            <div className="frame-39">
              <div className="frame-40">
                <div className="text-wrapper-29">Full Name</div>
              </div>
              <div className="frame-40">
                <div className="text-wrapper-29">Email</div>
              </div>
              <div className="frame-40">
                <div className="text-wrapper-29">Password</div>
              </div>
              <div className="frame-41">
                <div className="text-wrapper-30">Continue</div>
              </div>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-group-5">
              <img className="vector-2" alt="Vector" src="/img/vector-156.svg" />
              <div className="frame-42">
                <div className="text-wrapper-31">OR</div>
              </div>
            </div>
          </div>
          <div className="frame-43">
            <div className="text-wrapper-32" onClick={handleLoginClick}>Continue with google</div>
            <img className="image-2" alt="Image" src="/img/image-10.png" />
          </div>
        </div>
        <div className="text-wrapper-33">pbly.ai</div>
      </div>
    </div>
  );
};
