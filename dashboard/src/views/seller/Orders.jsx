import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { get_seller_orders } from "../../store/reducers/OrderReducer";

const Orders = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);

  const { myOrders, totalOrder } = useSelector((state) => state.order);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      searchValue,
      sellerId: userInfo._id,
    };
    dispatch(get_seller_orders(obj));
  }, [searchValue, currentPage, perPage]);

  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <h1 className="text-lg font-semibold mb-3">Orders </h1>
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
                <th className="px-6 py-3">Order Id</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Payment Status</th>
                <th className="px-6 py-3">Order Status</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((d, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">#{d._id}</td>
                  <td className="px-6 py-3">₹{d.price}</td>
                  <td className="px-6 py-3">{d.payment_status}</td>
                  <td className="px-6 py-3">{d.delivery_status}</td>
                  <td className="px-6 py-3">{d.date}</td>
                  <td className="px-6 py-3 text-blue-600 cursor-pointer">
                    <div className="flex justify-start items-center gap-3">
                      <Link
                        to={`/seller/dashboard/order-details/${d._id}`}
                        className="px-3 hover:shadow-lg text-green-500 hover:text-green-700 transition-all"
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

        {
          totalOrder <= perPage ? "" :  <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={totalOrder}
            perPage={perPage}
            showItem={3}
          />
        </div>
        }
       
      </div>
    </div>
  );
};

export default Orders;
