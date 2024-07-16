"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import classes from "./ProductSlugPageView.module.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/CommonComponents/Button";

const ProductSlugPageView = ({ id }) => {
  const navigation = useRouter();
  const images = [
    "/images/bedroom image.png",
    "/images/dining image.png",
    "/images/living room.png",
    "/images/sofa 2.png",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <div className={classes?.doubleBreadCrumbDiv}>
            <Link href={"/"}>Home</Link>
            {">"}
            <Link href={"/shop"}>Shop</Link>
            {">"}
            <p className="p3">{id}</p>
          </div>
        </Col>{" "}
      </Row>
      <Row>
        <Col xs={12}>
          <Button
            onClick={() => {
              navigation.push({ pathname: "/", query: { data: "" } });
            }}
          >
            Check
          </Button>
        </Col>
        {/* <Col xs={6}>
          <div className={classes?.swiperRootContainer}>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              slidesPerView={1}
              loop={true}
              direction="vertical"
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={classes?.mySwiper2}
            >
              {images?.map((item, index) => (
                <SwiperSlide key={index} className={classes?.swiperSlideN2}>
                  <div className={classes?.swiper2ImageCont}>
                    <Image fill alt="image" src={item} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              direction="horizontal"
              spaceBetween={10}
              slidesPerView={1}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className={classes?.mySwiper1}
            >
              {images?.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={classes?.swiper1ImageCont}>
                    <Image fill alt="image" src={item} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Col>
        <Col xs={6}></Col> */}
      </Row>
    </Container>
  );
};

export default ProductSlugPageView;
