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
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

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
          <>
            <Col xs={6}>
              <div className={classes.linksCont}>
                {Header_Links?.map((item, index) => {
                  return <div key={index}>{renderLinks(item)}</div>;
                })}
              </div>
            </Col>

            <Col xs={3}>
              <div className={classes?.iconContainer}>
                {iconsArray?.map((icon, index) => {
                  return <div key={index}>{icon?.iconjsx}</div>;
                })}
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

// icons array here can add label also

const iconsArray = [
  {
    iconjsx: <VscAccount color="black" size={28} />,
    label: "Account Alert",
  },
  {
    iconjsx: <CiSearch color="black" size={28} />,
    label: "Search",
  },
  {
    iconjsx: <FaRegHeart color="black" size={28} />,
    label: "heart",
  },
  // {
  //   iconjsx: <FaCartShopping color="black" size={28} />,
  //   label: "cart shopping",
  // },
];
