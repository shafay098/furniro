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
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PhotoAlbum from "react-photo-album";

export const LandingPageView = () => {
  const sectionOne = () => {
    return (
      <SectionContainer
        heading={"Browse The Range"}
        para={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      >
        {range_type_data?.map((item, index) => (
          <Col key={index} xxl={4} xl={4} lg={4} md={4} sm={12} xs={12}>
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
          <Col
            className="mb-3"
            xxl={3}
            xl={4}
            lg={4}
            md={6}
            sm={12}
            xs={12}
            key={index}
          >
            <ProductCard data={item} />
          </Col>
        ))}
      </SectionContainer>
    );
  };

  const SectionThree = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    console.log("🚀 ~ SectionThree ~ activeIndex:", activeIndex);

    const handleSlideChange = (swiper) => {
      setActiveIndex(swiper.activeIndex);
    };

    return (
      <Container className="pd-0 mt-5 mb-5" fluid>
        <Row className={mergeClass("pd-0 m-0", classes?.secThreeRow)}>
          <Col xxl={5} xl={5} lg={12} xs={12}>
            <div className={classes?.sec3TextDiv}>
              <h3 className="h3">50+ Beautiful rooms inspiration</h3>
              <p className="p3">
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
              <div className={classes?.buttonContainerSec2}>
                <Button>Explore More</Button>
              </div>
            </div>
          </Col>
          <Col xxl={7} xl={7} lg={12} xs={12}>
            <div className="flex flex-row">
              <Swiper
                onSlideChange={handleSlideChange}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  // slideShadows: true,
                }}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className={classes?.swiperCoverFlow}
              >
                {lp_swiper_data?.map((item, index) => (
                  <SwiperSlide
                    style={{
                      width: "400px",
                      height: "525px",
                      overflow: "hidden",
                    }}
                    key={index}
                  >
                    <Image
                      alt="image"
                      src={item?.img}
                      height={582}
                      width={400}
                    />
                    <div
                      style={activeIndex !== index ? { display: "none" } : {}}
                      className={classes?.overlay}
                    >
                      <div className="flex flex-row  items-center">
                        <p className="p3">{`${activeIndex + 1}`}</p>
                        <hr className={classes?.line} />
                        <p className="p3">{`${item?.label}`}</p>
                      </div>
                      <div className="flex flex-row">
                        <h6 className="h6 maxline2">{item?.tagline}</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  const sectionFour = () => {
    return (
      <SectionContainer
        heading={"Share your setup with"}
        para={"#FuniroFurniture"}
      >
        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
          <div className={classes?.photoAlbum}>
            <PhotoAlbum
              rowConstraints={{ minPhotos: 2, maxPhotos: 2 }}
              columns={2}
              layout="columns"
              photos={images1}
            />
          </div>
        </Col>
        <Col className={classes?.colHide} xs={4}>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className={classes?.imageClass}>
              <Image alt="image" src={"/images/product 5.png"} fill />
            </div>
          </div>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
          <div className={classes?.photoAlbum}>
            <PhotoAlbum columns={2} layout="columns" photos={images2} />
          </div>
        </Col>
      </SectionContainer>
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
      {/* section four */}
      {sectionFour()}
    </>
  );
};

const images1 = [
  {
    src: "/images/product1.png",
    width: 100,
    height: 100,
  },
  {
    src: "/images/product 3.png",
    width: 150,
    height: 323,
  },
  {
    src: "/images/product 2.png",
    width: 50,
    height: 50,
  },
  {
    src: "/images/product 4.png",
    width: 350,
    height: 240,
  },
];

const images2 = [
  {
    src: "/images/product 6.png",
    width: 100,
    height: 100,
  },
  {
    src: "/images/product 7.png",
    width: 270,
    height: 400,
  },
  {
    src: "/images/product 8.png",
    width: 170,
    height: 205,
  },
  {
    src: "/images/product 9.png",
    width: 250,
    height: 195,
  },
];
