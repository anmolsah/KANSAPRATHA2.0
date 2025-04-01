import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import FeatureProduct from "../components/products/FeatureProduct";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Categorys />
      <div className="py-[45px]">
        <FeatureProduct />
      </div>
      <div className="py-10">
        <div className="w-[85%] mx-auto flex flex-wrap">
          <div className="grid w-full grid-cols-3  gap-7">
            <div className="overflow-hidden">
              <Products />
            </div>
            <div className="overflow-hidden">
              <Products />
            </div>
            <div className="overflow-hidden">
              <Products />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
