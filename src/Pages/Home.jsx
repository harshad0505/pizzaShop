import React from "react";
import Productspage from "../Component/ProductsPage";

const Home = () => {
  return (
    <>
      <div className="hero py-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <h6 className="text-lg">
              <em>Are You hungry</em>
            </h6>
            <h1 className="text-3xl font-bold">Dont Wait</h1>
            <button
              className="px-6 py-2 rounded-full text-white border-none font-bold mt-4 bg-yellow-500 hover:bg-yellow-700"
              onClick={() => {
                alert("Order Something");
              }}>
              Order Now
            </button>
          </div>
          <div className="w-1/2">
            <img src="/Images/pizza.png" alt="" />
          </div>
        </div>
      </div>
      <div className="pb-24">
        <Productspage />
      </div>
    </>
  );
};

export default Home;
