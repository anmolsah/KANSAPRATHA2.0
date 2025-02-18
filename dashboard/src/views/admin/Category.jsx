import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEdit, FaTrash } from "react-icons/fa";

const Category = () => {
  const [perPage, setPerPage] = useState(5);
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-7/12">
          <div className="w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <select
                onChange={(e) => setPerPage(parseInt(e.target.value))}
                className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
              <input
                type="text"
                placeholder="Search..."
                className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="relative overflow-x-auto mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-3">NO</th>
                    <th className="px-6 py-3">Images</th>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((d, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-3">{d}</td>
                      <td className="px-6 py-3">
                        <img
                          className="w-[45px]"
                          src="http://localhost:9000/images/03.jpg"
                          alt="items"
                        />
                      </td>
                      <td className="px-6 py-3">Frock</td>
                      <td className="px-6 py-3 text-blue-600 cursor-pointer">
                        <div className="flex justify-start items-center gap-3">
                          <Link className="px-3  hover:shadow-lg ">
                            <FaEdit />
                          </Link>
                          <Link className="px-3  hover:shadow-lg ">
                            <FaTrash />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-5/12"></div>
      </div>
    </div>
  );
};

export default Category;
