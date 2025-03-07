import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsImage } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const EditProduct = () => {
  const categorys = [
    { id: 1, name: "sports" },
    { id: 2, name: "Electronics" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Home & Kitchen" },
    { id: 5, name: "Beauty & Personal Care" },
    { id: 6, name: "Health & Household" },
    { id: 7, name: "Pet Products" },
    { id: 8, name: "Sports & Outdoors" },
    { id: 9, name: "Baby Products" },
    { id: 10, name: "Arts, Crafts & Sewing" },
    { id: 11, name: "Automotive" },
    { id: 12, name: "Industrial & Scientific" },
    { id: 13, name: "Musical Instruments" },
    { id: 14, name: "Office Products" },
    { id: 15, name: "Toys & Games" },
  ];

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
  const [images, setImages] = useState([]);
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

  const imageHandle = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      setImages([...images, ...files]);
      let imageUrl = [];
      for (let i = 0; i < length; i++) {
        imageUrl.push({ url: URL.createObjectURL(files[i]) });
      }
      setImageShow([...imageShow, ...imageUrl]);
    }
  };

  const changeImage = (img, index) => {
    if (img) {
      let tempUrl = imageShow;
      let tempImages = images;

      tempImages[index] = img;
      tempUrl[index] = { url: URL.createObjectURL(img) };
      setImageShow([...tempUrl]);
      setImages([...tempImages]);
    }
  };

  const removeImage = (i) => {
    const filterImage = images.filter((img, index) => index !== i);
    const filterImageUrl = imageShow.filter((img, index) => index !== i);
    setImages(filterImage);
    setImageShow(filterImageUrl);
  };

  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Add Product</h1>
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
                <div key={i} className="h-[180px] relative">
                  <label htmlFor={i}>
                    <img
                      className="w-full h-full rounded-lg object-cover"
                      src={img.url}
                      alt=""
                    />
                  </label>
                  <input
                    onChange={(e) => changeImage(e.target.files[0], i)}
                    type="file"
                    id={i}
                    className="hidden"
                  />
                  <span
                    onClick={() => removeImage(i)}
                    className="p-2 z-10 cursor-pointer bg-red-500 text-white absolute top-1 right-1 rounded-full hover:bg-red-600"
                  >
                    <IoMdClose />
                  </span>
                </div>
              ))}
              <label
                htmlFor="image"
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-all"
              >
                <span className="text-gray-500">
                  <BsImage className="text-3xl" />
                </span>
                <span className="text-gray-500 mt-2">Select Image</span>
              </label>
              <input
                onChange={imageHandle}
                type="file"
                id="image"
                multiple
                className="hidden"
              />
            </div>
            <div className="flex">
              <button className="px-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
