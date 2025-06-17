import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../assets/img1.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Ratings from "./../components/Ratings";
import { FaHeart } from "react-icons/fa";
import { Facebook, Twitter, Github, Linkedin } from "lucide-react";
import Reviews from "../components/Reviews";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch, useSelector } from "react-redux";
import { product_details } from "../store/reducers/homeReducer";
import toast from "react-hot-toast";
import {
  add_to_cart,
  messageClear,
  add_to_wishlist,
} from "../store/reducers/cartReducer";

const Details = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { product, relatedProducts, moreProducts } = useSelector(
    (state) => state.home
  );
  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage, errorMessage } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(product_details(slug));
  }, [slug]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const images = [1, 2, 3, 4, 5, 6];
  const [image, setImage] = useState("");
  const discount = 5;
  const stock = 3;
  const [state, setState] = useState("reviews");
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mdtablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
  };

  const [quantity, setQuantity] = useState(1);

  const inc = () => {
    if (quantity >= product.stock) {
      toast.error("Out of stock");
    } else {
      setQuantity(quantity + 1);
    }
  };

  const dec = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const add_cart = () => {
    if (userInfo) {
      dispatch(
        add_to_cart({
          userId: userInfo.id,
          quantity,
          productId: product._id,
        })
      );
    } else {
      navigate("/login");
    }
  };

  const add_wishlist = () => {
    if (userInfo) {
      dispatch(
        add_to_wishlist({
          userId: userInfo.id,
          productId: product._id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          discount: product.discount,
          rating: product.rating,
          slug: product.slug,
        })
      );
    } else {
      navigate("/login");
    }
  };

  const buyNow = () => {
    let price = 0;
    if (product.discount !== 0) {
      price =
        product.price - Math.floor((product.price * product.discount) / 100);
    } else {
      price = product.price;
    }

    const obj = [
      {
        sellerId: product.sellerId,
        shopName: product.shopName,
        price: quantity * (price - Math.floor((price * 5) / 100)),
        products: [
          {
            quantity,
            productInfo: product,
          },
        ],
      },
    ];
    navigate("/shipping", {
      state: {
        products: obj,
        price: price * quantity,
        shipping_fee: 50,
        items: 1,
      },
    });
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50">
      <Header />

      {/* Hero Section */}
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
                Product Details
              </h2>
              <div className="flex items-center text-gray-200">
                <Link
                  to="/"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </Link>
                <IoIosArrowForward className="mx-2" />
                <span className="text-gray-50"> Product Details </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center text-gray-600 text-sm">
            <Link to="/" className="hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <IoIosArrowForward className="mx-2" />
            <Link to="/" className="hover:text-yellow-500 transition-colors">
              {product.category}
            </Link>
            <IoIosArrowForward className="mx-2" />
            <span className="text-gray-800 font-medium"> {product.name}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="border-2 border-gray-100 rounded-xl p-4 bg-white shadow-lg">
              <img
                className="h-[480px] w-full object-contain"
                src={image ? image : product.images?.[0]}
                alt="Main product"
              />
            </div>

            {product.images && (
              <Carousel
                autoPlay={true}
                infinite={true}
                transitionDuration={500}
                responsive={responsive}
                className="thumbnail-carousel"
              >
                {product.images.map((img, i) => {
                  return (
                    <div
                      className="p-1 cursor-pointer border-2 border-transparent hover:border-yellow-400 rounded-lg transition-all"
                      key={i}
                      onClick={() => setImage(img)}
                    >
                      <img
                        className="h-24 w-full object-cover rounded-md"
                        src={img}
                        alt=""
                      />
                    </div>
                  );
                })}
              </Carousel>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

            <div className="flex items-center gap-4">
              <Ratings ratings={4} className="text-2xl" />
              <span className="text-yellow-600 font-medium">(24 reviews)</span>
            </div>

            <div className="space-y-4">
              <div className="text-3xl font-bold text-gray-800">
                {product.discount !== 0 ? (
                  <>
                    Price :<h2 className="line-through">₹{product.price}</h2>
                    <h2>
                      ₹
                      {product.price -
                        Math.floor((product.price * product.discount) / 100)}
                      (-{product.discount}
                      %)
                    </h2>
                  </>
                ) : (
                  <h2>Price : ₹{product.price}</h2>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold text-xl">ShopName : {product.shopName}</p>
            </div>

            {/* Product Actions */}
            {product.stock > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-gray-100 rounded-full">
                    <button
                      onClick={dec}
                      className="px-5 py-3 text-lg text-gray-600 hover:text-yellow-600 transition-colors font-semibold"
                    >
                      -
                    </button>
                    <span className="px-4 text-lg font-medium">{quantity}</span>
                    <button
                      onClick={inc}
                      className="px-5 py-3 text-gray-600 hover:text-yellow-600 transition-colors font-semibold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={add_cart}
                    className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold transition-all duration-200 hover:scale-[1.02]"
                  >
                    Add To Cart
                  </button>

                  <button
                    onClick={add_wishlist}
                    className="p-4 bg-white border-2 border-gray-200 rounded-full hover:border-yellow-400 hover:text-yellow-600 transition-all"
                  >
                    <FaHeart className="w-6 h-6" />
                  </button>
                </div>

                <div className="flex gap-4">
                  <button onClick={buyNow} className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold transition-all duration-200 hover:scale-[1.02]">
                    Buy Now
                  </button>
                  <button className="px-8 py-4 bg-yellow-800 hover:bg-yellow-900 text-white rounded-full font-semibold transition-all duration-200 hover:scale-[1.02]">
                    Chat Seller
                  </button>
                </div>
              </div>
            )}

            {/* Product Meta */}
            <div className="pt-6 border-t border-gray-200 space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-32 font-medium text-gray-800">
                  Availability
                </span>
                <span
                  className={`text-${
                    product.stock ? "yellow-600" : "red-500"
                  } font-medium`}
                >
                  {product.stock
                    ? `In Stock (${product.stock})`
                    : "Out of Stock"}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-32 font-medium text-gray-800">Share</span>
                <div className="flex gap-3">
                  {[Facebook, Twitter, Github, Linkedin].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-all duration-200 hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-16">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex">
                {["reviews", "description"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setState(tab)}
                    className={`px-8 py-4 font-semibold capitalize transition-colors ${
                      state === tab
                        ? "bg-yellow-500 text-white"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {state === "reviews" ? (
                  <Reviews product={product} />
                ) : (
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Seller Products */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800">
              From {product.shopName}
            </h3>
            <div className="space-y-6">
              {moreProducts.map((p) => (
                <Link
                  key={p}
                  className="block group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      src={p.images[0]}
                      alt="Related product"
                    />
                    {p.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                        -{p.discount}%
                      </div>
                    )}
                  </div>
                  <div className="pt-4">
                    <h4 className="text-gray-800 font-medium">{p.name}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-yellow-600 font-semibold">
                        ₹{p.price}
                      </span>
                      <Ratings ratings={p.rating} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="pt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            Related Products
          </h2>
          <Swiper
            slidesPerView="auto"
            breakpoints={{
              1280: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            className="related-swiper"
          >
            {relatedProducts.map((p) => (
              <SwiperSlide key={p}>
                <Link className="block group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      src={p.images[0]}
                      alt="Related product"
                    />
                    {p.discount > 0 && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                        -{p.discount}%
                      </div>
                    )}
                  </div>
                  <div className="pt-4">
                    <h4 className="text-gray-800 font-medium">{p.name}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-yellow-600 font-semibold">
                        ₹{p.price}
                      </span>
                      <Ratings ratings={p.rating} />
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Details;
