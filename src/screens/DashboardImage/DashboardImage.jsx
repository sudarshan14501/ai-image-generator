import React, { useState, useRef, useEffect } from "react"; // Import React, useState hook, and useRef hook
import "./style.css"; // Import CSS file
import Popup from "../../shared/popup";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom

export const DashboardImage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [logoThumbnail, setLogoThumbnail] = useState(null);
  const [picClicked, setPicClicked] = useState(false);
  const [color, setColor] = useState("#8C03F9");
  const [selectedColors, setSelectedColors] = useState([]);
  const [logoFile, setLogoFile] = useState(null);
  const [imageDescription, setImageDescription] = useState("");
  const [generateImageSuccess, setGenerateImageSuccess] = useState(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");
  const [content, setContent] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [userProfileData, setUserProfileData] = useState({ name: "", credits: 0 });
  const [isEditable, setIsEditable] = useState(false); // State to track if content is editable
  const [accessToken, setAccessToken] = useState('');
  const [resultHistory, setResultHistory] = useState([])
  const [showPopup, setShowPopup] = useState(false);
const [popupImageUrl, setPopupImageUrl] = useState('');
const [selectedFont, setSelectedFont] = useState("Montserrat"); // State to manage selected font


  const generatedContentRef = useRef(null); // Ref for the generated content text
  useEffect(() => {
    // Retrieve access token from localStorage
    const storedAccessToken = localStorage.getItem('accessToken');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);

      // Fetch user profile data
      const fetchData = async () => {
        try {
          const userProfileResponse = await fetch("http://209.97.155.198:6060/getUserProfile", {
            headers: {
              Authorization: `Bearer ${storedAccessToken}`,
            },
          });

          if (userProfileResponse.ok) {
            const userProfileData = await userProfileResponse.json();
            setUserProfileData(userProfileData.result);
          } else {
            console.error("Failed to fetch user profile data");
          }
        } catch (error) {
          console.error("Error fetching user profile data:", error);
        }

        try {
          const response = await fetch("http://209.97.155.198:5000/getImages", {
            headers: {
              Authorization: `Bearer ${storedAccessToken}`, // Use stored access token
            },
          });
          if (response.ok) {
            const data = await response.json();
            setResultHistory(data.result);
          } else {
            console.error("Failed to fetch images");
          }
        } catch (error) {
          console.error("Error fetching images:", error);
        } finally {
          // setHistoryLoading(false);
        }
      };

      fetchData();
    }
  }, []);
  const handleFileUpload = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setLogoFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setLogoThumbnail(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const removeLogo = () => {
    setLogoThumbnail(null);
  };

  const toggleFrame = () => {
    setPicClicked(!picClicked);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const navigateToSamplePrompts = () => {
    navigate("/sample-prompt"); // Navigate to the specified route ("/sampleprompts")
  };

  const navigateToRoot = () => {
    navigate("/"); // Navigate to the root route ("/")
  };
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("logo_file", logoFile);
  
    if (color.length > 0) {
      const colorsAsString = color;
      formData.append("color", colorsAsString);
    }
  
    try {
      const response = await fetch("http://209.97.155.198:6060/uploadBrandKit", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        // If the response is successful, show an alert
        alert("Brand kit uploaded successfully!");
      } else {
        // Handle other cases like error responses
        console.error("Failed to upload brand kit");
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("Error uploading brand kit:", error);
    }
  };
  
  const handleGenerate = async () => {
    setContent(true);
      
      if(isEditable){
    setImageDescription(generatedContent); 
      }
      else {
        setGeneratedContent(imageDescription);
      }// Clear the text from the input field after generating content
    // const accessToken = "ya29.a0Ad52N39c1AspTvCndISIuY597ap-GpM6JtQ-PprWRwH3721evgoJJ9LsSURFUUt53oN3MhhxybValBtAOJML2pcJlJjqjkdErWtHfqONqv56ixh-2Y_oif_gOUPp9J1r2JejQGPrgde-EsQ9J71EndE0obqqSN-GkL-aaCgYKAboSARMSFQHGX2MixfE-KzpeFS3od9bMC2ovXg0171";
    try {
      const response = await fetch("http://209.97.155.198:5000/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          prompt: isEditable ? generatedContent : imageDescription, // Use generatedContent if editable, otherwise use imageDescription
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.result;
        setGeneratedImageUrl(imageUrl);
        setGenerateImageSuccess(true);
        setIsEditable(false)
      } else {
        console.error("Failed to generate image");
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };
  const openPopup = (imageUrl) => {
    setPopupImageUrl(imageUrl);
    setShowPopup(true);
  };
  
  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };
  const handleEditContent = () => {
    setIsEditable(true); // Set isEditable to true when content is clicked for editing
  };

  const handleContentChange = (event) => {
    setGeneratedContent(event.target.value); // Update generatedContent state with the edited content
  };

  const handleCopyToClipboard = () => {
    if (!generatedContentRef.current) return;
  
    // Select the text inside the generatedContentRef
    generatedContentRef.current.select();
    // Copy the selected text to the clipboard using the Clipboard API
    navigator.clipboard.writeText(generatedContent)
      .then(() => {
        console.log('Text copied to clipboard successfully');
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  };

  const handleDownloadImage = () => {
    const link = document.createElement('a');
    link.href = "/img/instagram-post-2-9.png"; // URL of the image to be downloaded
    link.download = "generated_image.png"; // Filename to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dashboard-image">
      <div className="overlap-wrapper-2">
        <div className="overlap-8">
          <div className="overlap-9">
            <div className="overlap-10">
              <header className="header-4">
                <div className="pic-3" onClick={toggleFrame} />
                <div className="frame-91">
                  <img className="coin-4" alt="Coin" src="/img/coin-1-3.svg" />
                  <div className="text-wrapper-57">{userProfileData.credits} credits</div>
                </div>
                <div className="text-wrapper-58">pbly.ai</div>
              </header>
              <div className="frame-92" onClick={navigateToSamplePrompts}>
      <div className="text-wrapper-59">Sample Prompts</div>
    </div>
              {picClicked && (
                <div className="frame-93">
                  <div className="frame-94">
                    <div className="text-wrapper-60">Request Credits</div>
                    <img className="vector-5" alt="Vector" src="/img/vector-160.svg" />
                    <div className="frame-95" onClick={navigateToRoot}>
                      <img
                        className="iconly-light-logout"
                        alt="Iconly light logout"
                        src="/img/iconly-light-logout-1.svg"
                      />
                      <div className="text-wrapper-61">Log out</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="frame-96">
              <div className="frame-97">
                <div className="frame-98">
                  <div className="text-wrapper-62">Logo (Transparent .png file)</div>
                  <div className="frame-99">
                    {logoThumbnail ? (
                      <>
                        <img
                          className="close-2"
                          alt="Close"
                          src="/img/close.svg"
                          onClick={removeLogo}
                        />
                        <img className="image-5" alt="Image" src={logoThumbnail} />
                      </>
                    ) : (
                      <>
                        <div
                          className="text-wrapper-4 upload-logo-text"
                          onClick={handleFileUpload}
                        >
                          Upload Logo
                        </div>
                        <input
                          type="file"
                          id="fileInput"
                          style={{ display: "none" }}
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                        <img
                          className="files-download"
                          alt="Files download"
                          src="/img/files-download-2.svg"
                          onClick={handleFileUpload}
                        />
                      </>
                    )}
                  </div>
                </div>
                <div className="frame-98">
                  <div className="text-wrapper-62">Define colors</div>
                  <div className="frame-100">
                    <input
                      className="frame-100"
                      type="text"
                      value={color}
                      onChange={handleColorChange}
                      style={{ backgroundColor: "#0a0711", color: "white", border: 'none' }}
                    />
                    <div className="files-download-8" style={{ backgroundColor: color }}></div>
                  </div>
                </div>
                <div className="frame-102">
      <div className="frame-98">
        <div className="text-wrapper-62">Choose font</div>
        <div className="frame-100">
          {/* Dropdown component for selecting font */}
          <select
            className="dropdown"
            value={selectedFont}
            style={{width:'inherit', border: 'none', outline: 'none', background:'transparent', color: 'white'}}
            onChange={handleFontChange}
          >
            {/* Dropdown options */}
            <option value="Montserrat">Montserrat</option>
            <option value="Arial">Arial</option>
            <option value="Roboto">Roboto</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Courier New">Courier New</option>
            <option value="Georgia">Georgia</option>
            <option value="Verdana">Verdana</option>
            <option value="Impact">Impact</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Century Gothic">Century Gothic</option>
            <option value="Lucida Sans Unicode">Lucida Sans Unicode</option>
            <option value="Arial Black">Arial Black</option>
            <option value="Book Antiqua">Book Antiqua</option>
            <option value="Garamond">Garamond</option>
            <option value="Palatino Linotype">Palatino Linotype</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Franklin Gothic Medium">Franklin Gothic Medium</option>
            <option value="Copperplate">Copperplate</option>
            {/* Add more font options as needed */}
          </select>
        </div>
      </div>
    </div>
              </div>
              <div className="frame-103">
                <img className="img-3" alt="Ecommerce invoice" src="/img/ecommerce-invoice-1.svg" onClick={handleEditContent} />
                <div className="text-wrapper-64">Define your Brand</div>
              </div>
              <div className="frame-104">
                <div className="text-wrapper-65" onClick={handleUpload}>Upload</div>
              </div>
            </div>
            <div className="frame-105">
              <div className="frame-106">
                
                <div className="overlap-11">
                  <input
                    className="text-wrapper-66"
                    type="text"
                    placeholder="Describe the image you want to generate..."
                    value={imageDescription}
                    onChange={(e) => setImageDescription(e.target.value)}
                    style={{ backgroundColor: "black", color: "white", border: 'none', outline: 'none' }}
                  />
                  <img className="files-download-9" alt="Files download" src="/img/files-download-1.svg" onClick={handleGenerate} />
                </div>
                <div className="group-9">
                  <div className="overlap-group-10">
                    <img className="star-19" alt="Star" src="/img/star-1-4.svg" />
                    <img className="star-20" alt="Star" src="/img/star-2-5.svg" />
                    <img className="star-21" alt="Star" src="/img/star-3-4.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="frame-107">
            {content && (
              <div className="frame-108">
                <div className="frame-109">
                  {content && (
                    <div className="frame-110">
                      <div className={`text-wrapper-67 ${isEditable ? 'editable' : ''}`}>
                        {isEditable ? (
                          <input
                            ref={generatedContentRef} // Assign the ref to the input field
                            className="text-input"
                            type="text"
                            style={{ backgroundColor: "transparent", color: 'white', width: '38rem', border: 'none', fontSize: '15px', outline: 'none' }}
                            value={generatedContent}
                            onChange={handleContentChange}
                          />
                        ) : (
                          <p className="create-an-image-in-2" onClick={handleEditContent}>{generatedContent}</p>
                        )}
                      </div>
                      {!generateImageSuccess && isEditable && ( // Add this condition to hide the button after it has been clicked
                        <button className="regenerate-button" style={{ background: 'linear-gradient(180deg, rgb(78, 191.28, 255) 0%, rgb(2, 54.8, 242) 100%)', borderRadius: '3rem', color: 'white', width: '7rem', height: '2rem', border: 'none' }} onClick={handleGenerate}>
                          Regenerate
                        </button>
                      )}
                    </div>
                  )}
                  <div className="frame-111">
                    <div className="frame-112">
                    <img className="img-3" alt="Frame" src="/img/frame-1000003334-7.svg" onClick={() => setIsEditable(!isEditable)} />
                      <div className="icon-frame-4" onClick={handleCopyToClipboard}> {/* Add onClick handler to copy to clipboard */}
                        <img className="base-5" alt="Base" src="/img/base-7.png" />
                        <img className="union-6" alt="Union" src="/img/union-7.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* {generateImageSuccess && ( */}
              <div className="frame-94">
                <div className="frame-114">
                  <img className="instagram-post-9" alt="Generated image" src="/img/instagram-post-2-9.png" />
                  <img className="frame-115" alt="Frame" src="/img/frame-1100-1.svg" onClick={handleDownloadImage} />

                </div>
              </div>
            {/* ) */}

<div className="frame-116">
  <p style={{color:'white', fontFamily: '"Sora", Helvetica', fontWeight:'600', fontSize: '20px'}}>Your Generated Image History</p>
  {resultHistory.map((image, index) => (
      <img onClick={() => openPopup(image)} key={index} className="instagram-post-10" alt={`Instagram post ${index}`} src={image} />
  ))}
</div>
          </div>

        </div>
      </div>
      {showPopup && (
        <div className="popup-container" style={{zIndex: '999999', marginTop:'200px', marginRight: '600px'}}>
        <Popup imageUrl={popupImageUrl} onClose={closePopup} onDownload={handleDownloadImage} />
        </div>
      )}
    </div>
  );
};
