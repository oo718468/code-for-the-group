import React from "react";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import productJson from "../../../json/products_item";
import productimg from "../../../assets/images/clickPay.svg";

function ProductsSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="header_product_slider">
        <div className="product_slider_bottom_first">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper3"
          >
            <SwiperSlide>
              {/* {productJson.map((item, index) => ( */}
              <div className="child_slider_img">
                <img src={productimg} />
              </div>
              {/* // ))} */}
            </SwiperSlide>
            <SwiperSlide>
              <img src={productimg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={productimg} />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper1"
          >
            <div>
              <SwiperSlide>
                <img src={productimg} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productimg} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productimg} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={productimg} />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default ProductsSlider;
