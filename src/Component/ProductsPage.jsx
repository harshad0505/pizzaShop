import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from "./Product";
const Productspage = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch('https://star-spark-pasta.glitch.me/api/products')
    .then(response => response.json())
    .then(products => {
     setproducts(products);
    });
 }, []);

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8"> Products </h1>
      <div className="grid grid-cols-5 my-8 gap-24">
          {
              products.map(product => <Product key={product._id} product={product}/>)
          }
      </div>
    </div>
  );
};

export default Productspage;
