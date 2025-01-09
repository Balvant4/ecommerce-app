import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import Pagination from "../../components/Pagination";

function Category() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [categorySearchValue, setCategorySearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  const handleOrderSearch = (query) => {
    console.log("Order Search:", query);
    // Add order-specific search logic here
  };

  const handleCategorySearch = (query) => {
    console.log("Category Search:", query);
  };

  return (
    <div className="lg:px-7 px-4 w-full pt-5 sm:flex gap-3 ">
      <div className=" sm:w-7/12 p-4 rounded-md bg-chartbgcolor ">
        {/* Header section */}
        <div className="flex flex-wrap justify-between items-center gap-4 px-2">
          <Dropdown setParPage={setParPage} />
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleOrderSearch}
            placeholder="Search"
            className=""
          />
        </div>

        {/* Body section right side */}

        <div className="mt-5 ">
          <div className="overflow-x-auto rounded-xl ">
            <table className="table-auto w-full text-left  text-white">
              <thead className=" bg-chartbgcolor">
                <tr className=" uppercase border-b border-b-gray-700">
                  <th className="px-4 py-2  ">No</th>
                  <th className="px-4 py-2 ">Image</th>
                  <th className="px-4 py-2 ">Name</th>
                  <th className="px-4 py-2 ">Action</th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4].map((d, i) => (
                  <tr key={i} className=" hover:bg-chartbgcolor">
                    <td className="px-4 py-2 ">{d}</td>
                    <td className="px-4 py-2 ">
                      <img
                        className=" w-[45px] h-[45px]"
                        src={`http://localhost:5173/images/category/${d}.jpg`}
                        alt="CategoryImages"
                      />
                    </td>
                    <td className="px-4 py-2 ">Pending</td>
                    <td className="px-4 py-2 ">
                      <div className="flex justify-start items-center gap-4">
                        <Link className=" p-2 bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                          <FaEdit />
                        </Link>
                        <Link className=" p-2 bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                          <FaTrash />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-4 mr-5">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={1}
          />
        </div>
      </div>

      {/* Left side */}
      <div className="sm:w-5/12 p-4 rounded-md bg-chartbgcolor sm:mt-0 mt-5">
        <h1 className="flex items-center justify-center text-xl font-semibold text-white uppercase">
          Add Category
        </h1>

        <div className=" pt-10">
          <SearchBar
            searchValue={categorySearchValue}
            setSearchValue={setCategorySearchValue}
            handleSearch={handleCategorySearch}
            placeholder="Search"
            className=" w-full"
          />
        </div>

        <div className=" pt-5">
          <label
            htmlFor="image"
            className=" flex justify-center items-center flex-col h-[235px] cursor-pointer border border-dashed hover:border-red-500 w-full border-[#d0d2d6]"
          >
            <span>
              <FaImage />
            </span>
            <span>Select Image</span>
          </label>
          <input type="file" name="image" id="image" className=" hidden" />
          <div className=" pt-2">
            <button className=" bg-red-500 w-full hover:shadow-red-500/40 hover:shadow-md border-[#d0d2d6] py-2 rounded-lg text-white">
              Add Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
