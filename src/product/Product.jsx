import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <h2>
        {product.id} : {product.name}
        <p>{product.price}</p>
      </h2>
    </div>
  );
};

export default Product;
