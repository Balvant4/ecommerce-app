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
      <div className="w-full p-4 rounded-md bg-chartbgcolor">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center gap-4 px-2">
          <Dropdown setParPage={setParPage} />
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleOrderSearch}
            placeholder="Search orders..."
            className=""
          />
        </div>

        {/* Table Section */}
        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left bg-chartbgcolor">
            {/* Table Header */}
            <div className="text-sm text-white uppercase border-b border-b-slate-700">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div className="py-3 w-[25%] sm:w-[20%] md:w-[15%] font-bold">
                  Order ID
                </div>
                <div className="py-3 w-[13%] sm:w-[12%] md:w-[10%] font-bold">
                  Price
                </div>
                <div className="py-3 w-[18%] sm:w-[16%] md:w-[15%] font-bold">
                  Payment Status
                </div>
                <div className="py-3 w-[18%] sm:w-[16%] md:w-[15%] font-bold">
                  Order Status
                </div>
                <div className="py-3 w-[18%] sm:w-[20%] md:w-[25%] font-bold">
                  Action
                </div>
                <div className="py-3 w-[8%] sm:w-[5%] md:w-[5%] text-xl font-bold text-center">
                  <MdOutlineFileDownload />
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="text-sm text-white">
              <div className="flex flex-wrap justify-between items-center gap-2">
                <div className="py-3 w-[25%] sm:w-[20%] md:w-[15%] font-bold">
                  1254
                </div>
                <div className="py-3 w-[13%] sm:w-[12%] md:w-[10%] font-bold">
                  $856
                </div>
                <div className="py-3 w-[18%] sm:w-[16%] md:w-[15%] font-bold">
                  Pending
                </div>
                <div className="py-3 w-[18%] sm:w-[16%] md:w-[15%] font-bold">
                  Pending
                </div>
                <div className="py-3 w-[18%] sm:w-[20%] md:w-[25%] font-bold">
                  <Link to="#">View</Link>
                </div>
                <div
                  onClick={() => setShow(!show)}
                  className="py-3 w-[8%] sm:w-[5%] md:w-[5%] text-xl font-bold text-center cursor-pointer"
                >
                  <MdOutlineFileDownload />
                </div>
              </div>

              {/* Dropdown Row */}
              {show && (
                <div className="block border-b border-slate-700 bg-slate-800">
                  <div className="flex flex-wrap justify-start items-center gap-2 border-b border-slate-700 pl-3">
                    <div className="py-3 w-[25%] sm:w-[20%] md:w-[15%] font-bold">
                      #34343
                    </div>
                    <div className="py-3 w-[13%] sm:w-[12%] md:w-[10%] font-bold">
                      $56
                    </div>
                    <div className="py-3 w-[18%] sm:w-[16%] md:w-[15%] font-bold">
                      Pending
                    </div>
                    <div className="py-3 w-[18%] sm:w-[16%] md:w-[15%] font-bold">
                      Pending
                    </div>
                    <div className="py-3 w-[18%] sm:w-[20%] md:w-[25%] font-bold">
                      Action
                    </div>
                  </div>
                </div>
              )}
            </div>
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

export default Orders;
