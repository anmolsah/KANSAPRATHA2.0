import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

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
                  {Array(3)
                    .fill()
                    .map((_, i) => (
                      <tr key={i} className="border-b hover:bg-gray-50">
                        <td className="px-6 py-3">#343434</td>
                        <td className="px-6 py-3">$456</td>
                        <td className="px-6 py-3">Pending</td>

                        <td className="px-6 py-3 text-blue-600 cursor-pointer">
                          <Link>View</Link>
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
