import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./SectionContainer.module.css";
import { Button } from "@/components/CommonComponents/Button";

export const SectionContainer = ({
  children,
  heading,
  para,
  colWidthHeading = { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 },
  headingClass,
  paraClass,
  colWidthPara = { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 },
  button = false,
  btnText = "",
}) => {
  return (
    <Container>
      <Row className="mt-5">
        <Col
          xs={colWidthHeading.xs}
          sm={colWidthHeading.sm}
          md={colWidthHeading.md}
          lg={colWidthHeading.lg}
          xl={colWidthHeading.xl}
        >
          <div className={headingClass && headingClass}>
            <h5 className="h5 text-center">{heading}</h5>
          </div>
        </Col>

        {para && (
          <Col
            xs={colWidthPara.xs}
            sm={colWidthPara.sm}
            md={colWidthPara.md}
            lg={colWidthPara.lg}
            xl={colWidthPara.xl}
          >
            <div className={paraClass && paraClass}>
              <p className="p1 text-center">{para}</p>
            </div>
          </Col>
        )}
      </Row>
      <Row className="mt-5">{children}</Row>
      {button && (
        <Row className="mt-5 ">
          <Col xs={12}>
            <div className="flex justify-center ">
              <Button variant="outlined">{btnText}</Button>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};
