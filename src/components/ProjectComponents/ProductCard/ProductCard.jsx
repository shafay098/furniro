import React from "react";
import Image from "next/image";
import classes from "./ProductCard.module.css";
import { mergeClass } from "@/utils/HelperFunctions";
import { Button } from "@/components/CommonComponents/Button";
import { CiShare2 } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

export const ProductCard = ({ data }) => {
  return (
    <div className={classes?.cardContainer}>
      <div className={classes?.imageDiv}>
        <Image alt="image" src={data?.image} fill />
        <div className={classes?.discountCircle}></div>
      </div>
      <div className={classes?.textContainerDiv}>
        <h6 className="h7 maxline1">{data?.title}</h6>
        <p className="p3 maxline1">{data?.tagline}</p>
        <div className={classes?.priceContainer}>
          <p className="p1">{`Rp ${data?.price}`}</p>
          {data?.discountedTag && (
            <p className={mergeClass("p3", classes?.discountedTagStyle)}>
              {data?.discountedTag}
            </p>
          )}
        </div>
      </div>
      <div className={classes?.overlay}></div>
      <div className={classes?.cardhoverButtons}>
        <Button variant="primary">Add to Cart</Button>
        <div className={classes?.rowButtons}>
          <div className={classes?.iconText}>
            <CiShare2 size={16} />
            <p className="p3">Share</p>
          </div>

          <div className={classes?.iconText}>
            <MdCompareArrows />
            <p className="p3">Compare</p>
          </div>

          <div className={classes?.iconText}>
            <CiHeart />
            <p className="p3">Like</p>
          </div>
        </div>
      </div>
    </div>
  );
};
