import React from "react";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs, Mousewheel, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import productJson from "../../../json/products_item";
import productimg from "../../../assets/images/clickPay.svg";
import rasm from "../../../assets/images/dacha.svg";

function ProductsSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="header_product_slider">
        <div className="product_slider_bottom_first">
          <div className="bottom_slider">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={1}
              freeMode={true}
              mousewheel={true}
              watchSlidesProgress={true}
              scrollbar={true}
              modules={[FreeMode, Navigation, Thumbs, Mousewheel, Scrollbar]}
              direction={"vertical"}
              className="mySwiper1"
            >
              <SwiperSlide>
                <div className="child_bottom_slider">
                  <img src={productimg} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="child_bottom_slider">
                  <img src={productimg} />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="child_bottom_slider">
                  <img src={productimg} />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="child_bottom_slider">
                  <img src={rasm} />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="child_slider_img">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              slidesPerView={"auto"}
              className="mySwiper3"
            >
              <div>
                <SwiperSlide>
                  <div>
                    <img src={productimg} />
                  </div>
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
      </div>
    </>
  );
}

export default ProductsSlider;
