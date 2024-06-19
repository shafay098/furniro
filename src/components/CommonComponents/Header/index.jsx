"use client";

import React, { useState, useEffect } from "react";
import "./Header.module.css";
import Link from "next/link";
import { Header_Links } from "@/data/ConstantData";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import classes from "./Header.module.css";
import { mergeClass } from "@/utils/HelperFunctions";
import useResponsiveHook from "@/hooks/useResponsiveHook";

// icons
import { GiHamburgerMenu } from "react-icons/gi";

// react drawer
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const renderLinks = (link) => {
  return (
    <Link key={link?.title} href={link?.href}>
      <p className="p1">{link?.title}</p>
    </Link>
  );
};

export const Header = () => {
  let isMobile = useResponsiveHook(768);
  console.log("🚀 ~ Header ~ isMobile:", isMobile);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Container className={mergeClass("mt-4", classes?.headerContainer)}>
      <Row>
        <Col xs={3}>
          <Image src={"/images/Logo.png"} height={29} width={135} alt="logo" />
        </Col>

        {isMobile ? (
          <>
            <Col xs={9}>
              <div className={classes?.drawerIcon}>
                <GiHamburgerMenu
                  className={classes?.drawerIcon}
                  fontSize={32}
                  onClick={toggleDrawer}
                  color="var(--primaryColor)"
                />
              </div>
            </Col>

            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className="bla bla bla"
            >
              <div>Hello World</div>
            </Drawer>
          </>
        ) : (
          <Col xs={6}>
            <div className={classes.linksCont}>
              {Header_Links?.map((item) => {
                return renderLinks(item);
              })}
            </div>
          </Col>
        )}

        <Col xs={3}>
          {/* <Image src={"/images/Logo.png"} height={29} width={135} alt="logo" /> */}
        </Col>
      </Row>
    </Container>
  );
};
