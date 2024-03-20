import React, { useState } from "react";
import "./style.css";

export const Dashboard = () => {
  const [logoThumbnail, setLogoThumbnail] = useState(null);

  const handleFileUpload = () => {
    // Trigger file input click
    document.getElementById("fileInput").click();
  };

  const handleImageUpload = (event) => {
    // Handle image upload logic here
    const file = event.target.files[0];
    // You can now process the uploaded file, e.g., send it to a server or update state with the file data
    console.log("Uploaded file:", file);

    // Read the uploaded image file and set it as the logo thumbnail
    const reader = new FileReader();
    reader.onload = () => {
      setLogoThumbnail(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="dashboard">
      <div className="div">
        <header className="header">
          <div className="pic" />
          <div className="frame">
            <img className="coin" alt="Coin" src="/img/coin-1-5.svg" />
            <div className="text-wrapper">5 credits</div>
          </div>
          <div className="text-wrapper-2">pbly.ai</div>
        </header>
        <div className="frame-2">
          <div className="frame-3">
            <div className="frame-4">
              <div className="text-wrapper-3">Logo (Transparent .png file)</div>
              <div className="frame-5">
                {logoThumbnail ? (
                  <>
                  <div className="text-wrapper-4">
                    {/* Display uploaded logo thumbnail */}
                    <img src={logoThumbnail} alt="Uploaded Logo" className="logo-thumbnail" />
                  </div>
                  <img
                                  className="files-download"
                                  alt="Files download"
                                  src="/img/files-download-2.svg"
                                  onClick={handleFileUpload}
                                />
                  </>
                ) : (
                  <>
                  <div className="text-wrapper-4 upload-logo-text" onClick={handleFileUpload}>
                    Upload Logo
                  </div>
                                  <input
                                  type="file"
                                  id="fileInput"
                                  style={{ display: "none" }}
                                  accept="image/*"
                                  onChange={handleImageUpload}
                                />
                                {/* Image element */}
                                <img
                                  className="files-download"
                                  alt="Files download"
                                  src="/img/files-download-2.svg"
                                  onClick={handleFileUpload}
                                />
                                </>
                )}
                {/* Hidden file input */}

              </div>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-3">Define colors</div>
              <div className="frame-5">
                <div className="text-wrapper-4"># Hexcode</div>
                <div className="files-download-2" />
              </div>
              <div className="frame-5">
                <div className="text-wrapper-4"># Hexcode</div>
                <div className="files-download-2" />
              </div>
              <img className="img" alt="Frame" src="/img/frame-1000003324.svg" />
            </div>
            <div className="frame-wrapper">
              <div className="frame-4">
                <div className="text-wrapper-3">Choose font</div>
                <div className="frame-5">
                  <div className="text-wrapper-4">200+ modern fonts</div>
                  <img className="vector" alt="Vector" src="/img/vector-157.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-6">
            <img className="ecommerce-invoice" alt="Ecommerce invoice" src="/img/ecommerce-invoice.svg" />
            <div className="text-wrapper-5">Update brand kit</div>
          </div>
          <div className="frame-7">
            <div className="text-wrapper-6">Save</div>
          </div>
        </div>
        <div className="frame-8">
          <div className="text-wrapper-7">Sample Prompts</div>
        </div>
        <div className="frame-9">
          <div className="frame-10">
            <div className="text-wrapper-8">Hello Ziva!</div>
            <p className="p">Please enter the prompt for a desired output</p>
          </div>
          <div className="frame-11">
            <div className="overlap">
              <p className="text-wrapper-9">Describe the image you want to generate...</p>
              <img className="files-download-3" alt="Files download" src="/img/files-download-3.svg" />
            </div>
            <div className="group">
              <div className="overlap-group">
                <img className="star" alt="Star" src="/img/star-1-6.svg" />
                <img className="star-2" alt="Star" src="/img/star-2-6.svg" />
                <img className="star-3" alt="Star" src="/img/star-3-6.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-107">
        </div>
    </div>
  );
};
