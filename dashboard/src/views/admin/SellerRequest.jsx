import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Search from "./../components/Search";
import { get_seller_request} from "../../store/reducers/sellerReducer";

const SellerRequest = () => {
  const dispatch = useDispatch();
  const { totalSeller, sellers } = useSelector((state) => state.seller);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(
      get_seller_request({
        perPage,
        searchValue,
        page: currentPage,
      })
    );
  }, [perPage, searchValue, currentPage]);
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <h1 className="text-xl font-semibold mb-2 text-gray-600">
        Seller Request
      </h1>

      <div className="w-full p-4 bg-[give some color] rounded-md">
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
                  <td className="px-6 py-3">{i + 1}</td>

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
                      <Link
                        to={`/admin/dashboard/seller/details/${d._id}`}
                        className="px-3 hover:shadow-lg text-green-600 hover:text-green-800 transition-all"
                      >
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

export default SellerRequest;
