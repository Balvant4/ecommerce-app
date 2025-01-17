import { MdOutlineFileDownload } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";
import Pagination from "../../components/Pagination";

function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  const handleOrderSearch = (query) => {
    // Add order-specific search logic here
  };

  return (
    <div className="lg:px-7 px-4 w-full pt-5">
      <div className="w-full p-6 bg-gray-900 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <Dropdown setParPage={setParPage} />
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleOrderSearch}
            placeholder="Search orders..."
          />
        </div>

        {/* Orders Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th scope="col" className="py-3 px-4">
                  Order ID
                </th>
                <th scope="col" className="py-3 px-4">
                  Price
                </th>
                <th scope="col" className="py-3 px-4">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4">
                  Action
                </th>
                <th scope="col" className="py-3 px-4 text-center">
                  <MdOutlineFileDownload />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700 hover:bg-gray-800">
                <td className="py-3 px-4">1254</td>
                <td className="py-3 px-4">$856</td>
                <td className="py-3 px-4">Pending</td>
                <td className="py-3 px-4">Pending</td>
                <td className="py-3 px-4 ">
                  <Link
                    to="/admin/dashboard/order/details/1"
                    className="text-blue-500 hover:text-blue-300"
                  >
                    View
                  </Link>
                </td>
                <td
                  onClick={() => setShow(!show)}
                  className="py-3 px-4 text-center cursor-pointer"
                >
                  <MdOutlineFileDownload />
                </td>
              </tr>
              {/* Expandable Row */}
              {show && (
                <tr className="bg-gray-800">
                  <td className="py-3 px-4">34343</td>
                  <td className="py-3 px-4">$56</td>
                  <td className="py-3 px-4">Pending</td>
                  <td className="py-3 px-4">Pending</td>
                  <td className="py-3 px-4">Action</td>
                  <td className="py-3 px-4 text-center">...</td>
                </tr>
              )}
            </tbody>
          </table>
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
