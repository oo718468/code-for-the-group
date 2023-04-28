import React from "react";
import ProductImage from "../../assets/images/product_image.png";
import AreaImage from "../../assets/images/product_area.svg";
import {Swiper,SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Products() {
  return (
    <div className="products">
      <div className="container">
        <div className="products_container">
      
          <div className="products_item">
        
            <div className="products_image">
            <Swiper 
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src={ProductImage} alt="" /></SwiperSlide>
            <SwiperSlide><img src={ProductImage} alt="" /></SwiperSlide>
            <SwiperSlide><img src={ProductImage} alt="" /></SwiperSlide>
            <SwiperSlide><img src={ProductImage} alt="" /></SwiperSlide>
               </Swiper>
              <div className="image_top">
                <p>Top</p>
              </div>
            </div>
            <div className="products_descriptions">
              <p>
                Ekopark yashil zonasi yaqinidagi yangi <br /> bino 2 xonali / 2
                qavatli...
              </p>
              <h2>Toshkent, Bektemir tumani</h2>
            </div>
            <div className="products_info">
              <p>jihozlangan</p>
              <div className="products_area">
                <div className="products_area_info">
                  <img src={AreaImage} alt="" />
                  <h3>
                    68m<sup>2</sup>{" "}
                  </h3>
                </div>

                <h4>11/04/2023</h4>
              </div>
            </div>
            <div className="products_price">
              <p>150 000 000 so'm</p>
            </div>
          </div>
         
          
          <div className="products_item">
            <div className="products_image">
            <Swiper 
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src={ProductImage} alt="" /></SwiperSlide>
            <SwiperSlide><img src={ProductImage} alt="" /></SwiperSlide>
            <SwiperSlide><img src={ProductImage} alt="" /></SwiperSlide>
            <SwiperSlide><img src={ProductImage} alt="" /></SwiperSlide>
               </Swiper>
              <div className="image_top">
                <p>Top</p>
              </div>
            </div>
            <div className="products_descriptions">
              <p>
                Ekopark yashil zonasi yaqinidagi yangi <br /> bino 2 xonali / 2
                qavatli...
              </p>
              <h2>Toshkent, Bektemir tumani</h2>
            </div>
            <div className="products_info">
              <p>jihozlangan</p>
              <div className="products_area">
                <div className="products_area_info">
                  <img src={AreaImage} alt="" />
                  <h3>
                    68m<sup>2</sup>{" "}
                  </h3>
                </div>

                <h4>11/04/2023</h4>
              </div>
            </div>
            <div className="products_price">
              <p>150 000 000 so'm</p>
            </div>
          </div>
          <div className="products_item">
            <div className="products_image">
              <img src={ProductImage} alt="" />
              <div className="image_top">
                <p>Top</p>
              </div>
              <div className="image_top">
                <p>Top</p>
              </div>
            </div>
            <div className="products_descriptions">
              <p>
                Ekopark yashil zonasi yaqinidagi yangi <br /> bino 2 xonali / 2
                qavatli...
              </p>
              <h2>Toshkent, Bektemir tumani</h2>
            </div>
            <div className="products_info">
              <p>jihozlangan</p>
              <div className="products_area">
                <div className="products_area_info">
                  <img src={AreaImage} alt="" />
                  <h3>
                    68m<sup>2</sup>{" "}
                  </h3>
                </div>

                <h4>11/04/2023</h4>
              </div>
            </div>
            <div className="products_price">
              <p>150 000 000 so'm</p>
            </div>
          </div>
          <div className="products_item">
            <div className="products_image">
              <img src={ProductImage} alt="" />
              <div className="image_top">
                <p>Top</p>
              </div>
            </div>
            <div className="products_descriptions">
              <p>
                Ekopark yashil zonasi yaqinidagi yangi <br /> bino 2 xonali / 2
                qavatli...
              </p>
              <h2>Toshkent, Bektemir tumani</h2>
            </div>
            <div className="products_info">
              <p>jihozlangan</p>
              <div className="products_area">
                <div className="products_area_info">
                  <img src={AreaImage} alt="" />
                  <h3>
                    68m<sup>2</sup>{" "}
                  </h3>
                </div>

                <h4>11/04/2023</h4>
              </div>
            </div>
            <div className="products_price">
              <p>150 000 000 so'm</p>
            </div>
          </div>
          <div className="products_item">
            <div className="products_image">
              <img src={ProductImage} alt="" />
              <div className="image_top">
                <p>Top</p>
              </div>
            </div>
            <div className="products_descriptions">
              <p>
                Ekopark yashil zonasi yaqinidagi yangi <br /> bino 2 xonali / 2
                qavatli...
              </p>
              <h2>Toshkent, Bektemir tumani</h2>
            </div>
            <div className="products_info">
              <p>jihozlangan</p>
              <div className="products_area">
                <div className="products_area_info">
                  <img src={AreaImage} alt="" />
                  <h3>
                    68m<sup>2</sup>{" "}
                  </h3>
                </div>

                <h4>11/04/2023</h4>
              </div>
            </div>
            <div className="products_price">
              <p>150 000 000 so'm</p>
            </div>
          </div>
          <div className="products_item">
            <div className="products_image">
              <img src={ProductImage} alt="" />
              <div className="image_top">
                <p>Top</p>
              </div>
            </div>
            <div className="products_descriptions">
              <p>
                Ekopark yashil zonasi yaqinidagi yangi <br /> bino 2 xonali / 2
                qavatli...
              </p>
              <h2>Toshkent, Bektemir tumani</h2>
            </div>
            <div className="products_info">
              <p>jihozlangan</p>
              <div className="products_area">
                <div className="products_area_info">
                  <img src={AreaImage} alt="" />
                  <h3>
                    68m<sup>2</sup>{" "}
                  </h3>
                </div>

                <h4>11/04/2023</h4>
              </div>
            </div>
            <div className="products_price">
              <p>150 000 000 so'm</p>
            </div>
          </div>
          <div className="products_item">
            <div className="products_image">
              <img src={ProductImage} alt="" />
              <div className="image_top">
                <p>Top</p>
              </div>
            </div>
            <div className="products_descriptions">
              <p>
                Ekopark yashil zonasi yaqinidagi yangi <br /> bino 2 xonali / 2
                qavatli...
              </p>
              <h2>Toshkent, Bektemir tumani</h2>
            </div>
            <div className="products_info">
              <p>jihozlangan</p>
              <div className="products_area">
                <div className="products_area_info">
                  <img src={AreaImage} alt="" />
                  <h3>
                    68m<sup>2</sup>{" "}
                  </h3>
                </div>

                <h4>11/04/2023</h4>
              </div>
            </div>
            <div className="products_price">
              <p>150 000 000 so'm</p>
            </div>
          </div>
          <div className="products_item">
            <div className="products_image">
              <img src={ProductImage} alt="" />
              <div className="image_top">
                <p>Top</p>
              </div>
            </div>
            <div className="products_descriptions">
              <p>
                Ekopark yashil zonasi yaqinidagi yangi <br /> bino 2 xonali / 2
                qavatli...
              </p>
              <h2>Toshkent, Bektemir tumani</h2>
            </div>
            <div className="products_info">
              <p>jihozlangan</p>
              <div className="products_area">
                <div className="products_area_info">
                  <img src={AreaImage} alt="" />
                  <h3>
                    68m<sup>2</sup>{" "}
                  </h3>
                </div>

                <h4>11/04/2023</h4>
              </div>
            </div>
            <div className="products_price">
              <p>150 000 000 so'm</p>
            </div>
          </div>
          <div className="products_item">
            <div className="products_image">
              <img src={ProductImage} alt="" />
              <div className="image_top">
                <p>Top</p>
              </div>
            </div>
            <div className="products_descriptions">
              <p>
                Ekopark yashil zonasi yaqinidagi yangi <br /> bino 2 xonali / 2
                qavatli...
              </p>
              <h2>Toshkent, Bektemir tumani</h2>
            </div>
            <div className="products_info">
              <p>jihozlangan</p>
              <div className="products_area">
                <div className="products_area_info">
                  <img src={AreaImage} alt="" />
                  <h3>
                    68m<sup>2</sup>{" "}
                  </h3>
                </div>

                <h4>11/04/2023</h4>
              </div>
            </div>
            <div className="products_price">
              <p>150 000 000 so'm</p>
            </div>
          </div>
          <div className="products_item">
            <div className="products_image">
              <img src={ProductImage} alt="" />
              <div className="image_top">
                <p>Top</p>
              </div>
            </div>
            <div className="products_descriptions">
              <p>
                Ekopark yashil zonasi yaqinidagi yangi <br /> bino 2 xonali / 2
                qavatli...
              </p>
              <h2>Toshkent, Bektemir tumani</h2>
            </div>
            <div className="products_info">
              <p>jihozlangan</p>
              <div className="products_area">
                <div className="products_area_info">
                  <img src={AreaImage} alt="" />
                  <h3>
                    68m<sup>2</sup>{" "}
                  </h3>
                </div>

                <h4>11/04/2023</h4>
              </div>
            </div>
            <div className="products_price">
              <p>150 000 000 so'm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
