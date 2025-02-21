import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";

const DeactivateSeller = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <h1 className="text-xl font-semibold mb-2 text-gray-600">
        Deactivate Seller
      </h1>

      <div className="w-full p-4 bg-[give some color] rounded-md">
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
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Payment Status</th>
                <th className="px-6 py-3">Status</th>
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
                      src="http://localhost:9000/images/03.jpg"
                      alt="items"
                    />
                  </td>
                  <td className="px-6 py-3">Anmol Sah</td>
                  <td className="px-6 py-3">123Anni@gmail.com</td>
                  <td className="px-6 py-3">
                    <span>Pending</span>
                  </td>
                  <td className="px-6 py-3">
                    <span>Deactive</span>
                  </td>
                  {/* <td className="px-6 py-3">123Anni@gmail.com</td>
                  <td className="px-6 py-3">Kolkata</td>
                  <td className="px-6 py-3">Sonarpur</td> */}
                  <td className="px-6 py-3 text-blue-600 cursor-pointer">
                    <div className="flex justify-start items-center gap-3">
                      <Link className="px-3 hover:shadow-lg text-green-600 hover:text-green-800 transition-all">
                        <FaEye />
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

export default DeactivateSeller;
