"use client";

import React, { useState } from "react";
import classes from "./ShopPageView.module.css";
import { SectionBgBreadCrumbs } from "@/components/ProjectComponents/SectionBgBreadCrumbs";
import { Container, Row, Col } from "react-bootstrap";
import { IoFilterSharp } from "react-icons/io5";
import Input from "@/components/CommonComponents/Input";
import { ProductCard } from "@/components/ProjectComponents/ProductCard/ProductCard";
import { product_array_shop } from "@/data/DummyData";
import Pagination from "@/components/CommonComponents/Pagination";
import Image from "next/image";
import { banner_rules_data } from "@/data/ConstantData";

import { GrTrophy } from "react-icons/gr";

export const ShopPageView = () => {
  const [show, setShow] = useState(16);
  const [sortBy, setSortBy] = useState("default");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set the number of items per page

  const FilterComponnentUi = () => {
    return (
      <Row className={classes?.filterRowClass}>
        <Col xs={1}>
          <div className={classes?.filterCont}>
            <IoFilterSharp size={20} />
            <p className="p1">Filter</p>
          </div>
        </Col>
        <Col xs={5}>
          <div className={classes?.resultCountStyle}>
            <p className="p3">Showing 1–16 of 32 results</p>
          </div>
        </Col>
        <Col xs={6}>
          <div className={classes?.showSortCont}>
            <div className={classes?.showStyle}>
              <p className="p1">Show</p>
              <Input value={show} setValue={setShow} placeholder={show} />
            </div>

            <div className={classes?.sortByStyle}>
              <p className="p1">SortBy</p>
              <Input value={sortBy} setValue={setSortBy} placeholder={sortBy} />
            </div>
          </div>
        </Col>
      </Row>
    );
  };

  // const BadgesSection = () => {
  //   return (

  //   )
  // }

  return (
    <Container>
      <Row>
        <Col className="pd-0" xs={12}>
          <SectionBgBreadCrumbs
            header="Shop"
            breadCrumbsData={[{ title: "Home", href: "/" }, { title: "shop" }]}
          />
        </Col>
      </Row>
      {/* filter */}
      <FilterComponnentUi />
      {/* --------- */}
      <Row className={"mt-3 pd-0"}>
        {product_array_shop
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item, index) => (
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
              <ProductCard index={index} link={true} data={item} />
            </Col>
          ))}
        <Col xs={12}>
          <div className={classes?.paginationCont}>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={product_array_shop.length}
            />
          </div>
        </Col>
      </Row>

      <Row className="pd-0">
        <Col className="pd-0" xs={12}>
          <div className={classes?.posterRules}>
            <div className={classes?.ruleDiv}>
              {banner_rules_data?.map((item, index) => (
                <div className="d-flex gap-2" key={index}>
                  <Image src={item?.image} height={60} width={60} alt="icon" />
                  <div className={"d-flex flex-column gap-2"}>
                    <h6 className="h7-default">{item?.label}</h6>
                    <p className="p1">{item?.tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
