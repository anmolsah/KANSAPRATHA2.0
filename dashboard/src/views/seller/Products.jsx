import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../../store/reducers/productReducer";

const Products = () => {
  const dispatch = useDispatch();
  const { products, totalProduct } = useSelector((state) => state.product);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    const obj = {
      perPage: parseInt(perPage),
      page: parseInt(currentPage),
      searchValue,
    };
    dispatch(get_products(obj));
  }, [searchValue, currentPage, perPage]);

  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <h1 className="text-lg font-semibold mb-3">All Products</h1>
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
              {products.map((d, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">{i + 1}</td>
                  <td className="px-6 py-3">
                    <img
                      className="w-[45px] h-[50px]"
                      src={d.images[0]}
                      alt="items"
                    />
                  </td>
                  <td className="px-6 py-3">{d?.name?.slice(0, 15)}...</td>
                  <td className="px-6 py-3">{d.category}</td>
                  <td className="px-6 py-3">{d.brand}</td>
                  <td className="px-6 py-3">₹{d.price}</td>
                  <td className="px-6 py-3">
                    {d.discount === 0 ? (
                      <span>No Discount</span>
                    ) : (
                      <span>{d.discount}%</span>
                    )}
                  </td>
                  <td className="px-6 py-3">{d.stock}</td>
                  <td className="px-6 py-3 text-blue-600 cursor-pointer">
                    <div className="flex justify-start items-center gap-3">
                      <Link
                        to={`/seller/dashboard/edit-product/32`}
                        className="px-3 hover:shadow-lg text-blue-500 hover:text-blue-700 transition-all"
                      >
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
        {totalProduct <= perPage ? (
          ""
        ) : (
          <div className="w-full flex justify-end mt-4 bottom-4 right-4">
            <Pagination
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
              totalItem={50}
              perPage={perPage}
              showItem={3}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
