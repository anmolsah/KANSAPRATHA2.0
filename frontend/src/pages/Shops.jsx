import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import img1 from "../assets/img1.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Range } from "react-range";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import Products from "../components/products/Products";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import ShopProducts from "../components/products/ShopProducts";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  price_range_product,
  query_products,
} from "../store/reducers/homeReducer";
const Shops = () => {
  const dispatch = useDispatch();
  const {
    products,
    categorys,
    priceRange,
    latest_product,
    totalProduct,
    perPage,
  } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(price_range_product());
  }, []);

  useEffect(() => {
    setState({
      values: [priceRange.low, priceRange.high],
    });
  }, [priceRange]);

  const [filter, setFilter] = useState(true);
  const [rating, setRating] = useState("");
  const [styles, setStyles] = useState("grid");

  const [pageNumber, setPageNumber] = useState(1);
  const [state, setState] = useState({
    values: [priceRange.low, priceRange.high],
  });

  const [category, setCategory] = useState("");
  const [sortPrice, setSortPrice] = useState("");

  const queryCategory = (e, val) => {
    if (e.target.checked) {
      setCategory(val);
    } else {
      setCategory("");
    }
  };

  useEffect(() => {
    dispatch(
      query_products({
        low: state.values[0],
        high: state.values[1],
        category,
        rating,
        sortPrice,
        pageNumber,
      })
    );
  }, [
    state.values[0],
    state.values[1],
    category,
    rating,
    sortPrice,
    pageNumber,
  ]);

  const resetRating = () => {
    setRating("");
    dispatch(
      query_products({
        low: state.values[0],
        high: state.values[1],
        category,
        rating: "",
        sortPrice,
        pageNumber,
      })
    );
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
      <Header />
      <section
        className="h-64 bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-indigo-950/80">
          <div className="max-w-7xl mx-auto h-full px-4">
            <div className="flex flex-col justify-center items-center h-full text-center">
              <h2 className="text-4xl font-bold text-gray-50 mb-2">
                Shop Page
              </h2>
              <div className="flex items-center text-gray-200">
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
                <IoIosArrowForward className="mx-2" />
                <span className="text-gray-50">Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`md:hidden ${!filter ? "mb-6" : "mb-0"}`}>
            <button
              onClick={() => setFilter(!filter)}
              className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              Filter Products
            </button>
          </div>

          <div className="flex flex-wrap gap-8">
            {/* Filters Sidebar */}
            <div
              className={`w-full md:w-3/12 ${
                filter ? "md:block" : "hidden"
              } transition-all duration-300`}
            >
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Category
                </h2>
                <div className="space-y-2">
                  {categorys.map((c, i) => (
                    <div className="flex items-center gap-2 py-1" key={i}>
                      <input
                        checked={category === c.name ? true : false}
                        onChange={(e) => queryCategory(e, c.name)}
                        type="checkbox"
                        id={c.name}
                        className="text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
                      />
                      <label
                        htmlFor={c.name}
                        className="text-gray-600 hover:text-yellow-500 cursor-pointer transition-colors"
                      >
                        {c.name}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="my-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Price
                  </h2>
                  <div className="space-y-4">
                    <Range
                      step={5}
                      min={priceRange.low}
                      max={priceRange.high}
                      values={state.values}
                      onChange={(values) => setState({ values })}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          className="h-2 bg-gray-100 rounded-full"
                          style={{
                            ...props.style,
                            display: "flex",
                            alignItems: "center",
                            height: "20px",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              height: "2px",
                              background: "#10b981",
                              top: "50%",
                              transform: "translateY(-50%)",
                              left: `${
                                props.ref?.current?.getBoundingClientRect
                                  ? props.ref.current.getBoundingClientRect()
                                      .left
                                  : 0
                              }px`,
                            }}
                          />
                          {children}
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          className="h-5 w-5 bg-yellow-500 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                      )}
                    />

                    <div className="text-gray-800 font-medium">
                      ₹{Math.floor(state.values[0])} - ₹
                      {Math.floor(state.values[1])}
                    </div>
                  </div>
                </div>

                <div className="my-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Rating
                  </h2>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1, 0].map((stars) => (
                      <div
                        key={stars}
                        onClick={() => setRating(stars)}
                        className="flex items-center gap-1 cursor-pointer text-yellow-400 hover:text-yellow-500"
                      >
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>
                            {i < stars ? (
                              <AiFillStar className="w-6 h-6" />
                            ) : (
                              <CiStar className="w-6 h-6" />
                            )}
                          </span>
                        ))}
                      </div>
                    ))}
                 <button className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400" onClick={resetRating}>
                      Reset
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <Products title="Latest Products" products={latest_product} />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="w-full md:w-8/12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <h2 className="text-xl font-medium text-gray-800 mb-4 md:mb-0">
                    {totalProduct} Products
                  </h2>
                  <div className="flex items-center gap-4">
                    <select
                      onChange={(e) => setSortPrice(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-400"
                    >
                      <option value="">Sort By</option>
                      <option value="low-to-high">Low to High Price</option>
                      <option value="high-to-low">High to Low Price</option>
                    </select>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setStyles("grid")}
                        className={`p-2 rounded-lg ${
                          styles === "grid"
                            ? "bg-yellow-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <BsFillGridFill className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setStyles("list")}
                        className={`p-2 rounded-lg ${
                          styles === "list"
                            ? "bg-yellow-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <FaThList className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <ShopProducts products={products} styles={styles} />
                <div>
                  {totalProduct > perPage && (
                    <Pagination
                      pageNumber={pageNumber}
                      setPageNumber={setPageNumber}
                      totalItem={totalProduct}
                      perPage={perPage}
                      showItem={Math.floor(totalProduct / 3)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shops;
