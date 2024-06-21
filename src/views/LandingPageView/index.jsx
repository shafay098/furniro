import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./LandingPageView.module.css";
import { Button } from "@/components/CommonComponents/Button";
import { SectionContainer } from "@/components/ProjectComponents/SectionContainer";
import { range_type_data, product_array } from "@/data/DummyData";
import { ProductCard } from "@/components/ProjectComponents/ProductCard/ProductCard";

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
          <Col xs={3} key={index}>
            <ProductCard data={item} />
          </Col>
        ))}
      </SectionContainer>
    );
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col xs={12}>
          <div className={classes?.rootContainer}>
            <div className={classes?.landingPageCard}>
              <p className="p3">New Arrival</p>
              <h1 className="h1">Discover Our New Collection</h1>
              <p className="p3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <div className={classes?.buttonContainer}>
                <Button>BUY NOW</Button>
              </div>
            </div>
          </div>
        </Col>
        {/* section one */}
        {sectionOne()}
        {/* section 2 */}
        {sectionTwo()}
      </Row>
    </Container>
  );
};
