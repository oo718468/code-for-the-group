import React from "react";
import user_logo from "../../../assets/images/user_logo.svg";
import location from "../../../assets/images/location.svg";
import like from "../../../assets/images/like.svg";
// import Product_item from "../../../json/products_item";
import Product_item_child from "../../../json/Product_item_child.json";

function ProductsTitle() {
  return (
    <>
      <div className="header_product_title">
        {Product_item_child.map((item, idx) => (
          <div key={idx}>
            <div className="product_user">
              <img src={user_logo} />
              <p>Aziza Axmedova</p>
            </div>
            <div className="some_about">
              <p key={item.id}>{item.location}</p>
            </div>
            <div className="product_location">
              <div className="product_location_first">
                <img src={location} />
                <p>{item.manzil}</p>
              </div>
              <div className="product_location_second">
                <img src={like} />
                <p>istaklar</p>
              </div>
            </div>
            <div className="product_all_about">
              <p>{item.aboutHome}</p>
            </div>
            <div className="product_price">
              <p>150 000 000 </p>
              <p id="som">so'm</p>
            </div>
            <div className="product_buttons">
              <div className="product_phone_number">
                <button>
                  <p>+998 ** *** ** **</p>
                </button>
              </div>
              <div className="product_send_massage">
                <button>
                  <p>xabar yuborish</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductsTitle;
