import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Pagination from "../../components/Pagination";

function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  const handleProductSearch = (query) => {
    console.log("Product Search:", query);
  };

  const products = [1, 2, 3, 4];

  return (
    <div className="lg:px-7 px-2 w-full pt-5 flex flex-col gap-5 ">
      <h1 className="text-2xl font-semibold text-black">Orders</h1>
      <div className="w-full p-6 bg-slate-800 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-2">
          <Dropdown setParPage={setParPage} />
          <SearchBar
            className="w-full md:w-96"
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleProductSearch}
            placeholder="Search"
          />
        </div>

        {/* Table Section */}
        <div className="mt-5">
          <div className=" overflow-x-auto rounded-xl">
            <table className="table-auto  text-left text-white">
              <thead className="bg-gradient-to-r from-indigo-500 to-blue-600 uppercase text-xs font-bold text-white rounded-md py-2 px-3 mb-2">
                <tr className="border-b border-b-gray-700 ">
                  <th className="px-4 py-2 w-[25%]">Order id</th>
                  <th className="px-4 py-2 w-[25%]">Price</th>
                  <th className="px-4 py-2 w-[25%]">Payment Status</th>
                  <th className="px-4 py-2 w-[25%]">Order Status</th>
                  <th className="px-4 py-2 w-[25%]">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((d, i) => (
                  <tr key={i} className="hover:bg-slate-700">
                    <td className="px-4 py-2 w-[25%]">#343434</td>
                    <td className="px-4 py-2 w-[25%]">562</td>
                    <td className="px-4 py-2 w-[25%]">Pending</td>
                    <td className="px-4 py-2 w-[25%]">Pending</td>
                    <td className="px-4 py-2 w-[25%]">
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

export default Orders;
