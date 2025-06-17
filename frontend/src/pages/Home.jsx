import React, { useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categorys from "../components/Categorys";
import FeatureProduct from "../components/products/FeatureProduct";
import Products from "../components/products/Products";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../store/reducers/homeReducer";

const Home = () => {
  const dispatch = useDispatch();
  const {
    products,
    latest_product,
    topRated_product,
    discount_product,
  } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(get_products());
  }, []);

  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Categorys />
      <div className="py-6 md:py-[45px]">
        <FeatureProduct products={products} />
      </div>
      <div className="py-6 md:py-10">
        <div className="w-full px-4 sm:px-6 md:w-[85%] mx-auto">
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-7">
            <div className="overflow-hidden">
              <Products title="Latest Product" products={latest_product} />
            </div>
            <div className="overflow-hidden">
              <Products title="Top Rated Product" products={topRated_product} />
            </div>
            <div className="overflow-hidden">
              <Products title="Discount Product" products={discount_product} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;