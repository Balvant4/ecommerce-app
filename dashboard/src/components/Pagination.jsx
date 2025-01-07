import PropTypes from "prop-types";
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
  let startPage = pageNumber;
  const dif = totalPage - pageNumber;

  if (dif <= showItem) {
    startPage = totalPage - showItem;
  }

  let endPage = startPage < 0 ? showItem : showItem + startPage;

  if (startPage <= 0) {
    startPage = 1;
  }

  const createButtons = () => {
    const buttons = [];
    for (let i = startPage; i < endPage; i++) {
      buttons.push(
        <li
          key={i}
          onClick={() => setPageNumber(i)}
          className={`${
            pageNumber === i
              ? "bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white"
              : "bg-slate-600 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white"
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`}
          aria-label={`Go to page ${i}`}
        >
          {i}
        </li>
      );
    }
    return buttons;
  };

  return (
    <ul className="flex gap-3 items-center">
      {/* Previous Arrow */}
      <li
        onClick={() => pageNumber > 1 && setPageNumber(pageNumber - 1)}
        className={`w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer ${
          pageNumber === 1
            ? "bg-gray-400 text-gray-500 cursor-not-allowed"
            : "bg-slate-300 text-black hover:bg-slate-400"
        }`}
        aria-label="Go to previous page"
        aria-disabled={pageNumber === 1}
      >
        <MdKeyboardDoubleArrowLeft />
      </li>

      {createButtons()}

      {/* Next Arrow */}
      <li
        onClick={() => pageNumber < totalPage && setPageNumber(pageNumber + 1)}
        className={`w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer ${
          pageNumber === totalPage
            ? "bg-gray-400 text-gray-500 cursor-not-allowed"
            : "bg-slate-300 text-black hover:bg-slate-400"
        }`}
        aria-label="Go to next page"
        aria-disabled={pageNumber === totalPage}
      >
        <MdKeyboardDoubleArrowRight />
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
  totalItem: PropTypes.number.isRequired,
  parPage: PropTypes.number.isRequired,
  showItem: PropTypes.number.isRequired,
};

export default Pagination;
