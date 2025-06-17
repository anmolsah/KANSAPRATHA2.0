import React, { useEffect } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import img12 from "../assets/banner001.jpg";
import img1 from "../assets/img1.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  get_cart_product,
  delete_cart_product,
  messageClear,
  quantity_inc,
  quantity_dec,
} from "../store/reducers/cartReducer";
import toast from "react-hot-toast";

const Card = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const {
    cart_products,
    successMessage,
    price,
    buy_product_item,
    shipping_fee,
    outofstock_products,
  } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(get_cart_product(userInfo.id));
  }, []);
  const redirect = () => {
    navigate("/shipping", {
      state: {
        products: cart_products,
        price: price,
        shipping_fee: shipping_fee,
        items: buy_product_item,
      },
    });
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      dispatch(get_cart_product(userInfo.id));
    }
  }, [successMessage]);

  const inc = (quantity, stock, cart_id) => {
    const temp = quantity + 1;
    if (temp <= stock) {
      dispatch(quantity_inc(cart_id));
    }
  };

  const dec = (quantity, cart_id) => {
    const temp = quantity - 1;
    if (temp !== 0) {
      dispatch(quantity_dec(cart_id));
    }
  };
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
      <Header />
      <section
        className="h-64 bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${img12})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-indigo-950/80">
          <div className="max-w-7xl mx-auto h-full px-4">
            <div className="flex flex-col justify-center items-center h-full text-center">
              <h2 className="text-4xl font-bold text-gray-50 mb-2">Cart</h2>
              <div className="flex items-center text-gray-200">
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
                <IoIosArrowForward className="mx-2" />
                <span className="text-gray-50">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {cart_products.length > 0 || outofstock_products.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-lg font-semibold text-yellow-500 mb-4">
                    Stock Products ({cart_products.length})
                  </h2>
                  {cart_products.map((p, i) => (
                    <div key={i} className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {p.shopName}
                        </h3>
                        {p.products.map((item, idx) => (
                          <div
                            key={idx}
                            className="py-4 border-t border-gray-200"
                          >
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
                                <div className="flex items-center gap-4">
                                  <div className="flex bg-gray-100 rounded-lg">
                                    <button
                                      onClick={() =>
                                        dec(
                                          item.quantity,

                                          item._id
                                        )
                                      }
                                      className="px-3 py-1 hover:bg-yellow-500 hover:text-white rounded-l-lg transition-colors"
                                    >
                                      -
                                    </button>
                                    <span className="px-3 py-1">
                                      {item.quantity}
                                    </span>
                                    <button
                                      onClick={() =>
                                        inc(
                                          item.quantity,
                                          item.productInfo.stock,
                                          item._id
                                        )
                                      }
                                      className="px-3 py-1 hover:bg-yellow-500 hover:text-white rounded-r-lg transition-colors"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <button
                                    onClick={() =>
                                      dispatch(delete_cart_product(item._id))
                                    }
                                    className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Out of Stock Products */}
                {outofstock_products.length > 0 && (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold text-yellow-500 mb-4">
                      Out Of Stock ({outofstock_products.length})
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-4">
                      {outofstock_products.map((item, idx) => (
                        <div key={idx} className="py-4">
                          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                            <div className="flex items-center gap-4">
                              <img
                                className="w-20 h-20 object-cover rounded-lg"
                                src={item.products[0].images[0]}
                                alt="Product"
                              />
                              <div>
                                <h4 className="font-medium text-gray-800">
                                  {item.products[0].name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Brand: {item.products[0].brand}
                                </p>
                              </div>
                            </div>
                            <div className="text-yellow-500 font-bold text-lg">
                              ₹
                              {item.products[0].price -
                                Math.floor(
                                  (item.products[0].price *
                                    item.products[0].discount) /
                                    100
                                )}
                              <span className="text-gray-400 line-through ml-2">
                                ₹{item.products[0].price}
                              </span>
                              <span className="text-yellow-400 text-sm ml-2">
                                -{item.products[0].discount}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">
                    Order Summary
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>{buy_product_item} Items</span>
                      <span>₹{price}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping Fee</span>
                      <span>₹{shipping_fee}</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Discount Coupon"
                      />
                      <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors">
                        Apply
                      </button>
                    </div>
                    <div className="flex justify-between font-bold text-gray-800 pt-4">
                      <span>Total</span>
                      <span>₹{price + shipping_fee}</span>
                    </div>
                    <button
                      onClick={redirect}
                      className="w-full py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <Link
                to="/shops"
                className="px-8 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Card;
