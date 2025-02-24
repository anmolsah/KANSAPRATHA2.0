import React, { useState } from "react";
import { Link } from "react-router-dom";

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
                  placeholder="Category .."
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
