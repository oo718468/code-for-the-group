import React from "react";
import productJson from "../../../json/products_item";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import AreaImage from "../../../assets/images/product_area.svg";
import "swiper/css";
import "swiper/css/pagination";

function SliderBottom() {
  return (
    <div className="top_slider">
      <h1>O'xshash maxsulotlar</h1>
      <div className="bottom_slider">
        <Swiper
          slidesPerGroup={1}
          navigation={true}
          slidesPerView={true}
          modules={[Navigation]}
          spaceBetween={30}
          className="mySwiper5"
        >
          <SwiperSlide>
            <div className="products_container">
              {/*  json dan kevotgan malumotla*/}
              {productJson.map((item, idx) => (
                <div key={idx} className="products_item">
                  <div className="products_image">
                    <img src={item.img} />
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
                </div>
              ))}

              {/*  json dan kevotgan malumotla*/}
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SliderBottom;
