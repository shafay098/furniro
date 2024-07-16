"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { mergeClass } from "@/utils/HelperFunctions";
import classes from "./SectionBreadCrumbs.module.css";

export const SectionBgBreadCrumbs = ({ header = "", breadCrumbsData = [] }) => {
  const router = useRouter();
  return (
    <div className={classes?.rootCont}>
      <div className={classes?.textContainer}>
        <h2 className="h2">{header}</h2>
        <div className={classes?.bcStyle}>
          {breadCrumbsData.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  if (item?.href) {
                    router?.push(item?.href);
                  }
                }}
                className={mergeClass(
                  "p3",
                  item?.href ? classes?.linkStyle : classes?.noLink
                )}
              >
                {item?.title}
                {index !== breadCrumbsData.length - 1 && (
                  <span style={{ height: "40px", width: "40px" }}> {`>`} </span>
                )}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
