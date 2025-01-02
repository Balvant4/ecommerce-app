import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  parPage,
  showItem,
}) => {
  const totalPage = Math.ceil(totalItem / parPage);
  let startPage = Math.max(pageNumber - Math.floor(showItem / 2), 1);
  let endPage = Math.min(startPage + showItem - 1, totalPage);

  if (endPage - startPage + 1 < showItem) {
    startPage = Math.max(endPage - showItem + 1, 1);
  }

  const renderPageButtons = () => {
    const buttons = [];
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <li
          key={i}
          onClick={() => setPageNumber(i)}
          className={`${
            pageNumber === i
              ? "bg-indigo-500 text-white shadow-md"
              : "bg-gray-700 text-gray-200 hover:bg-indigo-400 hover:text-white"
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer transition`}
        >
          {i}
        </li>
      );
    }
    return buttons;
  };

  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li
          onClick={() => setPageNumber(pageNumber - 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-gray-300 text-black cursor-pointer hover:bg-gray-400 transition"
        >
          <MdKeyboardDoubleArrowLeft />
        </li>
      )}
      {renderPageButtons()}
      {pageNumber < totalPage && (
        <li
          onClick={() => setPageNumber(pageNumber + 1)}
          className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-gray-300 text-black cursor-pointer hover:bg-gray-400 transition"
        >
          <MdKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
