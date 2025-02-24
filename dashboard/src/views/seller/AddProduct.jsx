import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
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
              <div className="flex flex-col w-full gap-1"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
