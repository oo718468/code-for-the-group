import React, { useState } from "react";
import camera from "../../assets/images/camera.svg";

function Photo() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");

  return (
    <div className="header_photo">
      <div className="photo_item">
        <h4>Rasmlar*</h4>
        <h5>Eng kami 3 dona rasim joylashtiring</h5>
        {/* <p>
          Saytda fotosuratlarni joylashtirish qoidalari <br />
          Ruxsat etilgan fayl turlari: JPG, PNG va GIF, maksimal hajmi 10 MB.
        </p> */}
      </div>
      <div className="photo-grid">
        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={110} height={110} alt={fileName} />
          ) : (
            <img src={camera} />
          )}
        </form>

        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={110} height={110} alt={fileName} />
          ) : (
            <img src={camera} />
          )}
        </form>

        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={110} height={110} alt={fileName} />
          ) : (
            <img src={camera} />
          )}
        </form>

        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={110} height={110} alt={fileName} />
          ) : (
            <img src={camera} />
          )}
        </form>

        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={110} height={110} alt={fileName} />
          ) : (
            <img src={camera} />
          )}
        </form>

        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={110} height={110} alt={fileName} />
          ) : (
            <img src={camera} />
          )}
        </form>

        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={110} height={110} alt={fileName} />
          ) : (
            <img src={camera} />
          )}
        </form>

        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={110} height={110} alt={fileName} />
          ) : (
            <img src={camera} />
          )}
        </form>

        <form onClick={() => document.querySelector(".input-field").click()}>
          <input
            type="file"
            accept="image/*"
            className="input-field"
            hidden
            onChange={({ target: { files } }) => {
              files[0] && setFileName(files[0].name);
              if (files) {
                setImage(URL.createObjectURL(files[0]));
              }
            }}
          />

          {image ? (
            <img src={image} width={110} height={110} alt={fileName} />
          ) : (
            <img src={camera} />
          )}
        </form>
      </div>
    </div>
  );
}

export default Photo;
