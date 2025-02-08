import React, { useState } from "react";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);

  return (
    <div className="px-2 py-8">
      <div className="w-full bg-[#37b2d1] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="bg-[give some color] "
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <input type="text" placeholder="Search..." className="" />
        </div>

        <div className="relative overfloe-x-auto">
          <div className="w-full text-sm text-left bg-[give some color]">
            <div className="">
              <div className="flex justify-between items-center">
                <div className="">Order ID</div>
                <div className="">Price</div>
                <div className="">Payment Status</div>
                <div className="">Order Status</div>
                <div className="">Actions</div>
                <div className="">
                  <TfiArrowCircleDown />
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex justify-between items-center">
                <div className="">#34343</div>
                <div className="">$453</div>
                <div className="">Pending</div>
                <div className="">Pending </div>
                <div className="">
                  <Link>View</Link>
                </div>
                <div className="">
                  <TfiArrowCircleDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
