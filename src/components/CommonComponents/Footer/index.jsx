"use client";

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Input from "../Input";
import classes from "./Footer.module.css";
import { Button } from "../Button";

export const Footer = () => {
  const [email, setEmail] = useState("");

  function listItems(linksObject) {
    return (
      <div className={classes?.listRootContainer}>
        <h6 className={classes?.titleLink}>{linksObject?.headerLink}</h6>
        <ul className={classes?.listContainer}>
          {linksObject?.links?.map((item, index) => {
            return (
              <li key={index}>
                <Link className={classes?.linkStyle} href={item?.href}>
                  {item?.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <Container className="mt-32">
      <Row>
        <Col xs={3}>
          <div className={classes?.firstColDiv}>
            <h3 className={classes?.headingText}>Furniro</h3>
            <p className={classes?.paraText}>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
        </Col>

        <Col xs={3}>{listItems(linksObject1)}</Col>

        <Col xs={3}>{listItems(linksObject2)}</Col>

        <Col xs={3}>
          {
            <div>
              <p className={classes?.paraText}>Newsletter</p>
              <div className={classes?.subscribeCont}>
                <Input
                  inputContainerClass={classes?.inputClass}
                  value={email}
                  setValue={setEmail}
                />

                <p className={classes?.subscribeText} onClick={() => {}}>
                  SUBSCRIBE
                </p>
              </div>
            </div>
          }
        </Col>
      </Row>
      <Row>
        <hr className={classes?.hrLineStyle} />

        <Col xs={12}>
          <div className={classes?.lastFooterSecCont}>
            <h6 className={classes?.paraLast}>
              2023 furino. All rights reverved
            </h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

let linksObject1 = {
  headerLink: "Links",
  links: [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/" },
    { title: "About", href: "/" },
    { title: "Contact", href: "/" },
  ],
};

let linksObject2 = {
  headerLink: "Help",
  links: [
    { title: "Payment Options", href: "/" },
    { title: "Returns", href: "/" },
    { title: "Privacy Policies", href: "/" },
  ],
};
