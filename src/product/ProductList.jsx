import React, { useEffect, useRef, useState } from "react";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // const loaded = useRef(false);
  const [load, setLoad] = useState(false);
  const handleClick = () => {
    setLoad(true);
  };
  // useEffect(() => {
  //   console.info("call use effect with []");
  // }, []);

  // console.log(load);
  useEffect(() => {
    // console.info("call use effect");
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    if (load) {
      // console.log(load);
      fetchProducts();
      // console.log("ini baru dirender");
    }
  }, [load]);

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load</button>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
