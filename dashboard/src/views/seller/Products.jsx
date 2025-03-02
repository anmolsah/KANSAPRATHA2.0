import React, { useState } from "react";
import Search from "../components/Search";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <h1 className="text-lg font-semibold mb-3">All Products</h1>
      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        <Search setPerPage={setPerPage} />
      </div>
    </div>
  );
};

export default Products;
