import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { get_deactive_sellers } from "../../store/reducers/sellerReducer";

const DeactivateSeller = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  const { sellers, totalSeller } = useSelector((state) => state.seller);

  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_deactive_sellers(obj));
  }, [searchValue, currentPage, perPage]);
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
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
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
              {sellers.map((d, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">{i+1}</td>
                  <td className="px-6 py-3">
                    <img
                      className="w-[45px] h-[50px]"
                      src={d.image}
                      alt="items"
                    />
                  </td>
                  <td className="px-6 py-3">{d.name}</td>
                  <td className="px-6 py-3">{d.email}</td>
                  <td className="px-6 py-3">
                    <span>{d.payment}</span>
                  </td>
                  <td className="px-6 py-3">
                    <span>{d.status}</span>
                  </td>
                  <td className="px-6 py-3 text-blue-600 cursor-pointer">
                    <div className="flex justify-start items-center gap-3">
                      <Link to={`/admin/dashboard/seller/details/${d._id}`} className="px-3 hover:shadow-lg text-green-600 hover:text-green-800 transition-all">
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
