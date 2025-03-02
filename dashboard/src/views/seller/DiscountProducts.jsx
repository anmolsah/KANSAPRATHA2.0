import React, { useState } from "react";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const DiscountProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <h1 className="text-lg font-semibold mb-3">Discounts Products</h1>
      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        <Search
          setPerPage={setPerPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />

        <div className="relative overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3">NO</th>
                <th className="px-6 py-3">Images</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Brand</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Discount</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">{d}</td>
                  <td className="px-6 py-3">
                    <img
                      className="w-[45px] h-[50px]"
                      src="http://localhost:9000/images/07.png"
                      alt="items"
                    />
                  </td>
                  <td className="px-6 py-3">Brass Parat</td>
                  <td className="px-6 py-3">Brass</td>
                  <td className="px-6 py-3">Pital</td>
                  <td className="px-6 py-3">₹3000</td>
                  <td className="px-6 py-3">10%</td>
                  <td className="px-6 py-3">20</td>
                  <td className="px-6 py-3 text-blue-600 cursor-pointer">
                    <div className="flex justify-start items-center gap-3">
                      <Link className="px-3 hover:shadow-lg text-blue-500 hover:text-blue-700 transition-all">
                        <FaEdit />
                      </Link>
                      <Link className="px-3 hover:shadow-lg text-green-500 hover:text-green-700 transition-all">
                        <FaEye />
                      </Link>
                      <Link className="px-3 hover:shadow-lg text-red-500 hover:text-red-700 transition-all">
                        <FaTrash />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            perPage={perPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountProducts;
