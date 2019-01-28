import React from "react";

export default function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>R$ {props.price}</h3>
      <h3>{props.description}</h3>
    </div>
  );
}
