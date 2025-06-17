import React, { useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { place_order } from "../store/reducers/orderReducer";

const Shipping = () => {
  const {
    state: { products, price, shipping_fee, items },
  } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const [res, setRes] = useState(false);
  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    post: "",
    province: "",
    city: "",
    area: "",
  });

  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();
    const { name, address, phone, post, province, city, area } = state;
    if (name && address && phone && post && province && city && area) {
      setRes(true);
    }
  };

  const placeOrder = () => {
    dispatch(
      place_order({
        price,
        products,
        shipping_fee,
        items,
        shippingInfo: state,
        userId: userInfo.id,
        navigate,
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
              <h2 className="text-4xl font-bold text-gray-50 mb-2">Shipping</h2>
              <div className="flex items-center text-gray-200">
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
                <IoIosArrowForward className="mx-2" />
                <span className="text-gray-50">Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Shipping Information
                </h2>
                {!res ? (
                  <form onSubmit={save} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-gray-600 text-sm">
                          Name
                        </label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="name"
                          id="name"
                          value={state.name}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div className="space-y-1">
                        <label
                          htmlFor="address"
                          className="text-gray-600 text-sm"
                        >
                          Address
                        </label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="address"
                          id="address"
                          value={state.address}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          placeholder="Enter Your Address"
                        />
                      </div>
                      <div className="space-y-1">
                        <label
                          htmlFor="phone"
                          className="text-gray-600 text-sm"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={state.phone}
                          onChange={inputHandle}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-gray-600 text-sm">Post</label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="post"
                          id="post"
                          value={state.post}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          placeholder="Enter Postal Code"
                        />
                      </div>
                      <div className="space-y-1">
                        <label
                          htmlFor="province"
                          className="text-gray-600 text-sm"
                        >
                          State
                        </label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="province"
                          id="province"
                          value={state.province}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          placeholder="Enter State"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="city" className="text-gray-600 text-sm">
                          City
                        </label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="city"
                          id="city"
                          value={state.city}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          placeholder="Enter City"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="area" className="text-gray-600 text-sm">
                          Area
                        </label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="area"
                          id="area"
                          value={state.area}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                          placeholder="Enter Area"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Save Changes
                    </button>
                  </form>
                ) : (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Deliver To {state.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">
                        Home
                      </span>
                      <span className="text-gray-600">
                        {state.phone} | {state.address}, {state.city},{" "}
                        {state.province}
                      </span>
                      <button
                        onClick={() => setRes(false)}
                        className="text-yellow-500 hover:text-yellow-600 ml-2"
                      >
                        Change
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Email notifications will be sent to: xyz@gmail.com
                    </p>
                  </div>
                )}
              </div>

              {/* Cart Items */}
              <div className="space-y-6">
                {products.map((p, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      {p.shopName}
                    </h3>
                    {p.products.map((item, idx) => (
                      <div key={idx} className="py-4 border-t border-gray-200">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                          <div className="flex items-center gap-4">
                            <img
                              className="w-20 h-20 object-cover rounded-lg"
                              src={item.productInfo.images[0]}
                              alt="Product"
                            />
                            <div>
                              <h4 className="font-medium text-gray-800">
                                {item.productInfo.name}
                              </h4>
                              <p className="text-sm text-gray-600">
                                Brand: {item.productInfo.brand}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col md:items-end gap-4 w-full md:w-auto">
                            <div className="text-yellow-500 font-bold text-lg">
                              ₹
                              {item.productInfo.price -
                                Math.floor(
                                  (item.productInfo.price *
                                    item.productInfo.discount) /
                                    100
                                )}
                              <span className="text-gray-400 line-through ml-2">
                                ₹{item.productInfo.price}
                              </span>
                              <span className="text-yellow-400 text-sm ml-2">
                                -{item.productInfo.discount}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Total Items ({items})</span>
                    <span>₹{price}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>₹{shipping_fee}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-800 pt-4">
                    <span>Total Payment</span>
                    <span>₹{price + shipping_fee}</span>
                  </div>
                  <button
                    onClick={placeOrder}
                    disabled={!res}
                    className={`w-full py-3 rounded-lg transition-colors ${
                      res
                        ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                        : "bg-yellow-300 cursor-not-allowed text-gray-50"
                    }`}
                  >
                    Place Order
                  </button>
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

export default Shipping;
