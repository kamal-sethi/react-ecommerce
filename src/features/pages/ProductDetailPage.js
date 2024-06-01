import React from "react";
import Navbar from "../navbar/Navbar";
import ProductDetails from "../productList/components/ProductDetails";

const ProductDetailPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDetails></ProductDetails>
      </Navbar>
    </div>
  );
};

export default ProductDetailPage;
