import React from "react";

function GoogleMaps() {
  return (
    <>
      <div className="header_maps">
        <h1>Manzil</h1>
        <div className="google_carta">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12022.421628820426!2d69.0612582!3d41.1213081!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1683691763083!5m2!1sru!2s"
            style={{ width: 647, height: 268, border: 0 }}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default GoogleMaps;
