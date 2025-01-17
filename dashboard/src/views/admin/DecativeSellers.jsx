import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../../components/Pagination";

function DecativeSellers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [categorySearchValue, setCategorySearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  const handleOrderSearch = (query) => {
    console.log("Order Search:", query);
  };

  const handleCategorySearch = (query) => {
    console.log("Category Search:", query);
  };

  return (
    <div className="lg:px-7 px-4 w-full pt-5 sm:flex gap-3 flex flex-col">
      <h1 className="text-2xl font-semibold text-white">Deactivated Sellers</h1>
      <div className="w-full p-6 bg-slate-800 rounded-lg shadow-lg">
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

        {/* Table section */}
        <div className="mt-5">
          <div className="overflow-x-auto rounded-xl">
            <table className="table-auto w-full text-left text-white">
              <thead className="bg-gradient-to-r from-indigo-500 to-blue-600 uppercase text-xs font-bold text-white rounded-md py-2 px-3 mb-2">
                <tr className="border-b border-b-gray-700">
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Payment Status</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4].map((d, i) => (
                  <tr key={i} className="hover:bg-slate-700">
                    <td className="px-4 py-2">{d}</td>
                    <td className="px-4 py-2">
                      <img
                        className="w-[45px] h-[45px] rounded-full"
                        src={`http://localhost:5173/images/category/${d}.jpg`}
                        alt="CategoryImages"
                      />
                    </td>
                    <td className="px-4 py-2">Kazi Ariyan</td>
                    <td className="px-4 py-2">Easy</td>
                    <td className="px-4 py-2">Pending</td>

                    <td className="px-4 py-2">balvantkumarsingh3@gmail.com</td>

                    <td className="px-4 py-2">
                      <div className="flex justify-start items-center gap-4">
                        <Link className="p-2 bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                          <FaEye />
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
    </div>
  );
}

export default DecativeSellers;
