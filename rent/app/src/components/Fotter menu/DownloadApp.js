import React from "react";
import phone from "../../assets/images/phone.svg";
import googlePlay from "../../assets/images/googlePlay.svg";
import appStore from "../../assets/images/Appstore.svg";

function DownloadApp() {
  return (
    <div className="header_downloadApp">
      <div className="round"></div>
      <div className="round1"></div>
      <div className="round3"></div>
      <div className="round4"></div>
      <div className="round5"></div>
      <div className="downloadImg">
        <img src={phone} />
      </div>
      <div className="airhouse_deg">
        <div className="slider_track">
          <p id="p-teg1">airhouse</p>
          <p id="p-teg1">airhouse</p>
          <p id="p-teg1">airhouse</p>
          <p id="p-teg1">airhouse</p>
          <p id="p-teg1">airhouse</p>
          <p id="p-teg1">airhouse</p>
          <p id="p-teg1">airhouse</p>
          <p id="p-teg1">airhouse</p>
          <p id="p-teg1">airhouse</p>
        </div>
      </div>

      <div className="downloadApp_child">
        <h1>Ilovani yuklab olish</h1>
        <div className="googlePlay">
          <img src={googlePlay} />
        </div>
        <div className="appStore">
          <img src={appStore} />
        </div>
      </div>
    </div>
  );
}

export default DownloadApp;
