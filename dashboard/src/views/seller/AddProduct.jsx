import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsImage } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

const AddProduct = () => {
  const categorys = [
    {
      id: 1,
      name: "sports",
    },
    {
      id: 2,
      name: "Electronics",
    },
    {
      id: 3,
      name: "Clothing",
    },
    {
      id: 4,
      name: "Home & Kitchen",
    },
    {
      id: 5,
      name: "Beauty & Personal Care",
    },
    {
      id: 6,
      name: "Health & Household",
    },
    {
      id: 7,
      name: "Pet Products",
    },
    {
      id: 8,
      name: "Sports & Outdoors",
    },
    {
      id: 9,
      name: "Baby Products",
    },
    {
      id: 10,
      name: "Arts, Crafts & Sewing",
    },
    {
      id: 11,
      name: "Automotive",
    },
    {
      id: 12,
      name: "Industrial & Scientific",
    },
    {
      id: 13,
      name: "Musical Instruments",
    },
    {
      id: 14,
      name: "Office Products",
    },
    {
      id: 15,
      name: "Toys & Games",
    },
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
      <div className="w-full p-4 ng-[add some color] rounded-md">
        <div className="flex justify-between items-center pb-4">
          <h1 className="">Add Product</h1>
          <Link className="bg-[add some color] hover:shadow-[add some color] hover:shadow-lg text-[add soem color] rounded-sm py-2 px-2 mt-2">
            All Products
          </Link>
        </div>
        <div className="">
          <form>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[add some color]">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="name">Product Name</label>
                <input
                  onChange={inputHandle}
                  value={state.name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="product name...."
                  className=""
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="brand">Product Brand</label>
                <input
                  onChange={inputHandle}
                  value={state.brand}
                  type="text"
                  name="brand"
                  id="name"
                  placeholder="product brand...."
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[add some color]">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <input
                  readOnly
                  onClick={() => setCateShow(!cateShow)}
                  onChange={inputHandle}
                  value={category}
                  type="text"
                  id="category"
                  placeholder="--Select Category--"
                  className=""
                />
                <div
                  className={`absolute top-[101%] bg-[add some color] w-full  transition-all ${
                    cateShow ? "scale-100" : "scale-0"
                  }`}
                >
                  <div className="w-full px-4 py-2 fixed">
                    <input
                      value={searchValue}
                      onChange={categorySearch}
                      type="text"
                      placeholder="search.."
                      className="px-3 w-full py-1 text-[add some color] overflow-hidden"
                    />
                  </div>
                  <div className="pt-14">
                    <div className="flex justify-start items-center flex-col h-[200px] overflow-x-scroll">
                      {allCategory.map((c, i) => (
                        <span
                          className={``}
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
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Product Stock</label>
                <input
                  onChange={inputHandle}
                  value={state.stock}
                  type="text"
                  name="stock"
                  id="stock"
                  placeholder="Stock...."
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-[add some color]">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  onChange={inputHandle}
                  value={state.price}
                  type="number"
                  name="price"
                  id="price"
                  placeholder="price...."
                  className=""
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="discount">Discount</label>
                <input
                  onChange={inputHandle}
                  value={state.discount}
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder="discount by percentage...."
                  className=""
                />
              </div>
            </div>
            <div className="flex flex-col w-full gap-1 mb-5">
              <label htmlFor="description" className="">
                Description
              </label>
              <textarea
                onChange={inputHandle}
                value={state.description}
                name="description"
                id="description"
                placeholder="description...."
                className=""
                cols="10"
                rows="4"
              ></textarea>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[adds oem color] mb-4">
              {imageShow.map((img, i) => (
                <div className="h-[180px] relative">
                  <label htmlFor={i}>
                    <img
                      className="w-full h-full rounded-sm"
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
                    className="p-2 z-10 cursor-pointer bg-[add some color] text-[adds ome color] absolute top-1 right-1 rounded-full"
                  >
                    <IoMdClose />
                  </span>
                </div>
              ))}
              <label
                htmlFor="image"
                className="flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed border-[add some color] w-full text-[adds ome color]"
              >
                <span>
                  <BsImage />
                </span>
                <span>Select Image</span>
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
                  <button className="px-2 bg-gray-900 text-white font-semibold py-2 rounded-md hover:bg-gray-700 transition-all">
                    Add Product
                  </button>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
