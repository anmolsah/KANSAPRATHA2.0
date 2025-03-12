import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import { ClipLoader } from "react-spinners";

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);
  const [imageShow, setImage] = useState("");

  const [state, setState] = useState({
    name: "",
    image: "",
  });

  const imageHandle = (e) => {
    let files = e.target.files;
    if (files.length > 0) {
      setImage(URL.createObjectURL(files[0]));
      setState({
        ...state,
        image: files[0],
      });
    }
  };

  const loader = false;

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
                          className="w-[45px] h-[50px]"
                          src="http://localhost:9000/images/03.jpg"
                          alt="items"
                        />
                      </td>
                      <td className="px-6 py-3">Frock</td>
                      <td className="px-6 py-3 text-blue-600 cursor-pointer">
                        <div className="flex justify-start items-center gap-3">
                          <Link className="px-3 hover:shadow-lg text-blue-500 hover:text-blue-700 transition-all">
                            <FaEdit />
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
        <div
          className={`w-[350px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-20  top-0 px-2 transition-all duration-500`}
        >
          <div className="w-full bg-white rounded-lg shadow-xl border border-gray-200">
            <div className="bg-white h-screen lg:h-auto px-6 py-6 lg:rounded-md text-gray-800">
              <h1 className="text-2xl font-semibold text-center mb-4 text-gray-900">
                ➕ Add Category
              </h1>
              <form className="space-y-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-medium text-gray-700">
                    Category Name
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Enter category name..."
                    value={state.name}
                    onChange={(e) =>
                      setState({ ...state, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="image"
                    className="flex flex-col items-center justify-center h-[220px] cursor-pointer border border-gray-300 border-dashed hover:border-gray-400 w-full bg-gray-50 rounded-md text-gray-600"
                  >
                    {imageShow ? (
                      <img className="h-full w-full" src={imageShow} alt="" />
                    ) : (
                      <>
                        <span className="text-3xl text-gray-500">
                          <BsImage />
                        </span>
                        <span className="mt-2 text-lg font-medium">
                          Select Image
                        </span>
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="hidden"
                    onChange={imageHandle}
                  />
                </div>

                <div>
                  <button
                    disabled={loader ? true : false}
                    type="submit"
                    className="w-full bg-gray-900 text-white font-semibold py-2 rounded-md hover:bg-gray-700 transition-all"
                  >
                    {loader ? <ClipLoader color="#ffffff" /> : "Add Category"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
