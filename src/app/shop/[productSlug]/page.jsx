import React from "react";
import ProductSlugPageView from "@/views/ProductSlugPageView";
// import { useRouter } from "next/navigation";

export default function ProductSlugPage({ params }) {
  console.log("🚀 ~ ProductSlugPage ~ id:", params?.productSlug);
  return <ProductSlugPageView id={params?.productSlug} />;
}
