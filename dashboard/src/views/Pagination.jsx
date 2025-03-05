// import React from "react";
// import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

// const Pagination = ({
//   pageNumber,
//   setPageNumber,
//   totalItem,
//   perPage,
//   showItem,
// }) => {
//   let totalPage = Math.ceil(totalItem / perPage);
//   let startPage = pageNumber;
//   let diff = totalPage - pageNumber;

//   if (diff <= showItem) {
//     startPage = totalPage - showItem;
//   }

//   let endpage = startPage < 0 ? showItem : showItem + startPage;

//   if (startPage <= 0) {
//     startPage = 1;
//   }

//   const createBtn = () => {
//     const btns = [];
//     for(let i=startPage; i<=endpage; i++){
//       btns.push(
//         <li className={`${pageNumber === i ? "bg-[add some color] text-[add some color]" : ""} w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer}`}></li>
//       )
//     }
//   };

//   return (
//     <ul className="flex gap-3">
//       {pageNumber > 1 && (
//         <li className="w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer bg-[add some color] text-[add some color]">
//           <MdOutlineKeyboardDoubleArrowLeft />
//         </li>
//       )}{
//         createBtn();
//       }
//     </ul>
//   );
// };

// export default Pagination;

import React from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  perPage,
  showItem,
}) => {
  let totalPage = Math.ceil(totalItem / perPage);
  let startPage = pageNumber;
  let diff = totalPage - pageNumber;

  if (diff <= showItem) {
    startPage = totalPage - showItem;
  }

  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }

  const createBtn = () => {
    const btns = [];
    for (let i = startPage; i <= endPage; i++) {
      btns.push(
        <li
          key={i}
          onClick={() => setPageNumber(i)}
          className={`w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all ${
            pageNumber === i
              ? "bg-blue-600 text-white font-bold"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {i}
        </li>
      );
    }
    return btns;
  };

  return (
    <ul className="flex gap-3 items-center mt-4">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-blue-500 text-white hover:bg-blue-700 transition-all"
        >
          <MdOutlineKeyboardDoubleArrowLeft size={20} />
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-blue-500 text-white hover:bg-blue-700 transition-all"
        >
          <MdOutlineKeyboardDoubleArrowRight size={20} />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
