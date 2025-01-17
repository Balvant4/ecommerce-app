import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../../components/Pagination";

function Sellers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  const handleOrderSearch = (query) => {
    console.log("Order Search:", query);
  };

  return (
    <div className="lg:px-10 px-4 py-6">
      <h1 className="text-2xl font-semibold text-white mb-6">
        Sellers Request
      </h1>
      <div className="w-full p-6 bg-slate-800 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
          <Dropdown setParPage={setParPage} />
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleOrderSearch}
            placeholder="Search"
          />
        </div>

        {/* Table Section */}
        <div className="mt-5 overflow-x-auto rounded-xl">
          <table className="table-auto w-full text-left text-sm text-white">
            <thead className="bg-gradient-to-r from-indigo-500 to-blue-600 text-xs uppercase font-bold text-white rounded-md">
              <tr className="border-b border-slate-700">
                <th className="px-4 py-2">No</th>
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
                  <td className="px-4 py-2">Kazi Ariyan</td>
                  <td className="px-4 py-2">balvantkumarsingh3@gmail.com</td>
                  <td className="px-4 py-2">
                    <span className="py-2 px-2 bg-green-500 text-black rounded-md ">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <span className="py-2 px-2 bg-red-500 text-white rounded-md ">
                      Deactive
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-4">
                      <Link
                        to="/admin/dashboard/seller/details/2"
                        className="p-2 bg-indigo-500 rounded shadow-lg hover:shadow-indigo-500/50 text-white"
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

        {/* Pagination Section */}
        <div className="flex justify-end mt-4">
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

export default Sellers;
