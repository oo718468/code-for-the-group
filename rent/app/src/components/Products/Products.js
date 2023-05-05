import React, { useState, useRef } from "react";
import ProductImage from "../../assets/images/product_image.png";
import AreaImage from "../../assets/images/product_area.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import productJson from "../../json/products_item";

function Products() {
  const [addCart, setaddCart] = useState([]);
  const divRef = useRef(null);

  // const handleCartClik = () => {
  //   const firstCart = divRef.current.innerHTML;
  //   setaddCart([...addCart, firstCart]);
  //   console.log(setaddCart);
  // };

  return (
    <div className="products">
      <div className="container">
        <div className="products_container">
          {/*  json dan kevotgan malumotla*/}
          {productJson.map((item) => (
            <div
              key={item.id}
              ref={divRef}
              // onClick={handleCartClik}
              className="products_item"
            >
              <div className="products_image">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-navigation-size": "20px",
                  }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  navigation={true}
                  cssMode={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img src={item.img} />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <img src={item.img} />
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <img src={item.img} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={item.img} />
                  </SwiperSlide>
                </Swiper>
                <div className="image_top">
                  <p>Top</p>
                </div>
              </div>
              <div className="products_descriptions">
                <p>{item.location}</p>
                <h2>{item.manzil}</h2>
              </div>
              <div className="products_info">
                <p>{item.jihoz}</p>
                <div className="products_area">
                  <div className="products_area_info">
                    <img src={AreaImage} alt="" />
                    <h3>
                      {item.olchami}
                      <sup>2</sup>{" "}
                    </h3>
                  </div>

                  <h4>{item.date}</h4>
                </div>
              </div>
              <div className="products_price">
                <p>{item.narxi} so'm</p>
              </div>
              {/* <p>
                {addCart.map((firstCart, index) => (
                  <h1 key={index}>{firstCart}</h1>
                ))}
              </p> */}
            </div>
          ))}

          {/*  json dan kevotgan malumotla*/}
        </div>
      </div>
    </div>
  );
}

export default Products;
