import React from "react";
import productsData from "./Products";
import Product from "./ProductComponent";

export default function App() {
  const ProductMap = productsData.map(product => {
    return (
      <Product
        key={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
      />
    );
  });
  return <div>{ProductMap}</div>;
}
