import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";

function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  const orders = [
    {
      id: "34344",
      price: "$34.99",
      paymentStatus: "Pending",
      orderStatus: "Processing",
    },
    // Add more orders here as needed
  ];

  const tableHeaderClasses = "py-3 font-bold border-b border-slate-700";
  const tableCellClasses = "py-3 font-medium border-b border-slate-700";

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-chartbgcolor rounded-md">
        {/* Controls */}
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setParPage(parseInt(e.target.value, 10))}
            className="px-4 py-2 bg-chartbgcolor border border-slate-700 rounded-md text-[#d0d2d6] focus:outline-none focus:border-indigo-500"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <input
            className="px-4 py-2 bg-[#283046] border border-gray-700 rounded-md text-[#ded2d6] placeholder-gray-500 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="relative mt-5 overflow-x-auto">
          <div className="text-sm text-[#d0d2d6] uppercase">
            <div className="flex justify-between items-center">
              <div className={`w-[25%] ${tableHeaderClasses}`}>Order ID</div>
              <div className={`w-[13%] ${tableHeaderClasses}`}>Price</div>
              <div className={`w-[18%] ${tableHeaderClasses}`}>
                Payment Status
              </div>
              <div className={`w-[18%] ${tableHeaderClasses}`}>
                Order Status
              </div>
              <div className={`w-[18%] ${tableHeaderClasses}`}>Action</div>
              <div className={`w-[8%] ${tableHeaderClasses}`}>
                <FaDownload />
              </div>
            </div>
          </div>

          {/* Table Rows */}
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex justify-between items-start bg-gray-900 hover:bg-gray-800 text-white px-2 rounded-md"
            >
              <div className={`w-[25%] ${tableCellClasses}`}>{order.id}</div>
              <div className={`w-[13%] ${tableCellClasses}`}>{order.price}</div>
              <div className={`w-[18%] ${tableCellClasses}`}>
                {order.paymentStatus}
              </div>
              <div className={`w-[18%] ${tableCellClasses}`}>
                {order.orderStatus}
              </div>
              <div className={`w-[18%] ${tableCellClasses}`}>
                <Link className="text-blue-500 hover:underline">View</Link>
              </div>
              <div
                onClick={() => setShow(!show)}
                className={`w-[8%] ${tableCellClasses} cursor-pointer`}
              >
                <FaDownload />
              </div>
            </div>
          ))}

          {/* Expanded Content */}
          {show && (
            <div className="bg-[#8288ed] border-b border-slate-700">
              <div className={`flex items-start`}>
                <div className={`w-[25%] ${tableCellClasses}`}>
                  Extra Order Info
                </div>
                {/* Add more details as necessary */}
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="w-full flex justify-end mt-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            parPage={parPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Orders;
