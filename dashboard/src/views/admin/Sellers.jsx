import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../../components/Pagination";

function Sellers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [categorySearchValue, setCategorySearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  const handleOrderSearch = (query) => {
    console.log("Order Search:", query);
  };

  return (
    <div className="lg:px-7 px-4 w-full pt-5 sm:flex gap-3">
      <div className="w-full p-4 rounded-md bg-slate-800 shadow-lg">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center gap-4 px-2">
          <Dropdown setParPage={setParPage} />
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleOrderSearch}
            placeholder="Search sellers..."
          />
        </div>

        {/* Sellers Table */}
        <div className="mt-5">
          <div className="overflow-x-auto rounded-md">
            <table className="table-auto w-full text-left text-white border-collapse">
              <thead className="bg-slate-700 text-sm uppercase font-semibold">
                <tr>
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">Shop Name</th>
                  <th className="px-4 py-3">Payment Status</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Division</th>
                  <th className="px-4 py-3">District</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>

              <tbody className="text-sm">
                {[1, 2, 3, 4].map((d, i) => (
                  <tr
                    key={i}
                    className={`hover:bg-slate-600 ${
                      i % 2 === 0 ? "bg-slate-800" : "bg-slate-700"
                    }`}
                  >
                    <td className="px-4 py-3">{d}</td>
                    <td className="px-4 py-3">
                      <img
                        className="w-12 h-12 rounded-md object-cover"
                        src={`http://localhost:5173/images/category/${d}.jpg`}
                        alt={`Category ${d}`}
                      />
                    </td>
                    <td className="px-4 py-3">Kazi Ariyan</td>
                    <td className="px-4 py-3">Easy</td>
                    <td className="px-4 py-3">
                      <span className="px-3 py-[6px] bg-yellow-500 text-black rounded-md">
                        Pending
                      </span>
                    </td>
                    <td className="px-4 py-3">balvantkumarsingh3@gmail.com</td>
                    <td className="px-4 py-3">Bihar</td>
                    <td className="px-4 py-3">Chapra</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <Link
                          to="#"
                          className="p-2 bg-green-500 rounded-md text-white hover:bg-green-600 transition"
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
        </div>

        {/* Pagination */}
        <div className="flex justify-end mt-6">
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
