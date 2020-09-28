import React from "react";
import ProductList from "../features/product-list";
import data from "../data/products.json";

export default function Home(props) {
  return (
    <div>
      <h1 className="title">Home</h1>
      <br />
      <ProductList products={data.products} />
    </div>
  );
}
