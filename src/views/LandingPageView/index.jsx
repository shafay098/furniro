"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./LandingPageView.module.css";
import { Button } from "@/components/CommonComponents/Button";
import { SectionContainer } from "@/components/ProjectComponents/SectionContainer";
import {
  range_type_data,
  product_array,
  lp_swiper_data,
} from "@/data/DummyData";
import { ProductCard } from "@/components/ProjectComponents/ProductCard/ProductCard";
import { mergeClass } from "@/utils/HelperFunctions";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const LandingPageView = () => {
  const sectionOne = () => {
    return (
      <SectionContainer
        heading={"Browse The Range"}
        para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      >
        {range_type_data?.map((item, index) => (
          <Col key={index} xs={4}>
            <div className={classes?.rangeContainer}>
              <div className={classes?.imageClass}>
                <Image alt="image" src={item?.img} fill />
              </div>

              <div className="mt-3 flex justify-center  items-center">
                <h6 className="h7 text-center">{item?.title}</h6>
              </div>
            </div>
          </Col>
        ))}
      </SectionContainer>
    );
  };

  const sectionTwo = () => {
    return (
      <SectionContainer
        button={true}
        btnText="Show More"
        heading={"Our Products"}
      >
        {product_array?.map((item, index) => (
          <Col className="mb-3" xs={3} key={index}>
            <ProductCard data={item} />
          </Col>
        ))}
      </SectionContainer>
    );
  };

  const SectionThree = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    console.log("🚀 ~ SectionThree ~ activeIndex:", activeIndex);

    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
    };

    return (
      <Container className="pd-0" fluid>
        <Row className={mergeClass("pd-0 m-0", classes?.secThreeRow)}>
          <Col xs={4}>
            <div className={classes?.sec3TextDiv}>
              <h3 className="h3">50+ Beautiful rooms inspiration</h3>
              <p className="p3">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <div className={classes?.buttonContainer}>
                <Button>Explore More</Button>
              </div>
            </div>
          </Col>
          <Col xs={8}>
            <div className="flex flex-row">
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>

          
              {/*  thumv swiper */}
              {/* <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                onSlideChange={handleSlideChange}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className={classes?.swiper1}
              >
                {lp_swiper_data?.map((item, index) => (
                  <SwiperSlide style={{ width: "100px" }} key={index}>
                    <div className={classes?.imageTextClass}>
                      <Image alt="image" src={item?.img} fill />
                      <div
                        style={activeIndex !== index ? { display: "none" } : {}}
                        className={classes?.overlay}
                      >
                        <div className="flex flex-row">
                          <p className="p3">{`${activeIndex} ----- ${item?.label}`}</p>
                        </div>
                        <div className="flex flex-row">
                          <h6 className="h6 maxline1">{item?.tagline}</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {lp_swiper_data?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className={classes?.imageTextClass}>
                      <Image alt="image" src={item?.img} fill />
                      <div
                        style={activeIndex !== index ? { display: "none" } : {}}
                        className={classes?.overlay}
                      >
                        <div className="flex flex-row">
                          <p className="p3">{`${activeIndex} ----- ${item?.label}`}</p>
                        </div>
                        <div className="flex flex-row">
                          <h6 className="h6 maxline1">{item?.tagline}</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper> */}
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <>
      <Container className="pd-0" fluid>
        <Row className="mt-4 m-0">
          <Col className="pd-0" xs={12}>
            <div className={classes?.rootContainer}>
              <div className={classes?.landingPageCard}>
                <p className="p3">New Arrival</p>
                <h1 className="h1">Discover Our New Collection</h1>
                <p className="p3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis.
                </p>
                <div className={classes?.buttonContainer}>
                  <Button>BUY NOW</Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* section one */}
      {sectionOne()}
      {/* section 2 */}
      {sectionTwo()}
      {/* section 3 */}
      <SectionThree />
    </>
  );
};
