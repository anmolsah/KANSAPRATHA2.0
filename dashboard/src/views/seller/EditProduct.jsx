import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_category } from "../../store/reducers/categoryReducer";
import { get_product } from "../../store/reducers/productReducer";

const EditProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { categorys } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(
      get_category({
        searchValue: "",
        perPage: "",
        page: "",
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      get_product(productId)
    );
  }, [productId]);

  // const categorys = [
  //   { id: 1, name: "Brass Thaalis & Plates" },
  //   { id: 2, name: "Copper Bottles & Jugs" },
  //   { id: 3, name: "Handcrafted Kadai & Cookware" },
  //   { id: 4, name: "Traditional Brass Utensils" },
  //   { id: 5, name: "Decorative Pooja Items" },
  //   { id: 6, name: "Copper Glasses & Tumblers" },
  //   { id: 7, name: "Brass Lamps & Diyas" },
  //   { id: 8, name: "Handmade Cutlery & Ladles" },
  //   { id: 9, name: "Kitchen Storage Containers" },
  //   { id: 10, name: "Serving Bowls & Dishes" },
  //   { id: 11, name: "Masala Box & Spice Holders" },
  //   { id: 12, name: "Brass & Copper Home Décor" },
  //   { id: 13, name: "Tea Sets & Kettles" },
  //   { id: 14, name: "Hand-Hammered Cookware" },
  //   { id: 15, name: "Traditional Cooking Tools" },
  // ];

  const [state, setState] = useState({
    name: "",
    description: "",
    discount: "",
    price: "",
    brand: "",
    stock: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const [cateShow, setCateShow] = useState(false);
  const [category, setCategory] = useState("");
  const [allCategory, setAllCategory] = useState(categorys);
  const [searchValue, setSearchValue] = useState("");
  //const [images, setImages] = useState([]);
  const [imageShow, setImageShow] = useState([]);

  const categorySearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      let searchValue = allCategory.filter(
        (c) => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
      setAllCategory(searchValue);
    } else {
      setAllCategory(categorys);
    }
  };

  const changeImage = (img, files) => {
    if (files.length > 0) {
      console.log(files[0]);
      console.log(img);
    }
  };

  useEffect(() => {
    setState({
      name: "Brass Thaali",
      description:
        "A brass thaali is a classic Indian dining plate, widely used in Kolkata for serving meals in a traditional setting. It is crafted from high-quality brass, often featuring intricate engravings and a polished golden finish. ",
      discount: 10,
      price: 2000,
      brand: "KhansaPratha",
      stock: 20,
    });
    setCategory("Brass Thaalis & Plates");
    setImageShow(["/images/thaali.webp", "/images/06.jpg"]);
  }, []);

  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Edit Product</h1>
          <Link
            to="/seller/dashboard/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg py-2 px-4 transition-all"
          >
            All Products
          </Link>
        </div>
        <div className="mt-6">
          <form>
            <div className="flex flex-col mb-6 md:flex-row gap-6 w-full">
              <div className="flex flex-col w-full gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  onChange={inputHandle}
                  value={state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Product name..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label
                  htmlFor="brand"
                  className="text-sm font-medium text-gray-700"
                >
                  Product Brand
                </label>
                <input
                  onChange={inputHandle}
                  value={state.brand}
                  type="text"
                  name="brand"
                  id="brand"
                  placeholder="Product brand..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6 md:flex-row gap-6 w-full">
              <div className="flex flex-col w-full gap-2 relative">
                <label
                  htmlFor="category"
                  className="text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <input
                  readOnly
                  onClick={() => setCateShow(!cateShow)}
                  onChange={inputHandle}
                  value={category}
                  type="text"
                  id="category"
                  placeholder="--Select Category--"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <div
                  className={`absolute top-[101%] bg-white w-full shadow-lg rounded-lg transition-all ${
                    cateShow ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2">
                    <input
                      value={searchValue}
                      onChange={categorySearch}
                      type="text"
                      placeholder="Search..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="pt-2">
                    <div className="flex flex-col h-[200px] overflow-y-auto">
                      {allCategory.map((c, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setCateShow(false);
                            setCategory(c.name);
                            setSearchValue("");
                            setAllCategory(categorys);
                          }}
                        >
                          {c.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <label
                  htmlFor="stock"
                  className="text-sm font-medium text-gray-700"
                >
                  Product Stock
                </label>
                <input
                  onChange={inputHandle}
                  value={state.stock}
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="Stock..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col mb-6 md:flex-row gap-6 w-full">
              <div className="flex flex-col w-full gap-2">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  onChange={inputHandle}
                  value={state.price}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="Price..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <label
                  htmlFor="discount"
                  className="text-sm font-medium text-gray-700"
                >
                  Discount
                </label>
                <input
                  onChange={inputHandle}
                  value={state.discount}
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder="Discount by percentage..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-2 mb-6">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                onChange={inputHandle}
                value={state.description}
                name="description"
                id="description"
                placeholder="Description..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                cols="10"
                rows="4"
              ></textarea>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full mb-6">
              {imageShow.map((img, i) => (
                <div>
                  <label htmlFor={i}>
                    <img src={img} alt="" />
                  </label>
                  <input
                    onChange={(e) => changeImage(img, e.target.files)}
                    type="file"
                    id={i}
                    className="hidden"
                  />
                </div>
              ))}
            </div>
            <div className="flex">
              <button className="px-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
