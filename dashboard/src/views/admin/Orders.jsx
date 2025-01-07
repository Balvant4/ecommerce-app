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
    console.log("Order Search:", query);
    // Add order-specific search logic here
  };

  return (
    <div className="lg:px-7 px-2 w-full pt-5">
      <div className="w-full p-4 rounded-md bg-chartbgcolor">
        <div className="flex justify-between px-2">
          <Dropdown setParPage={setParPage} />
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSearch={handleOrderSearch}
            placeholder="Search orders..."
            className={``}
          />
        </div>

        <div className=" relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left bg-chartbgcolor">
            <div className=" text-sm text-white uppercase border-b  border-b-slate-700">
              <div className=" flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order id</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[8%] font-bold text-xl">
                  <MdOutlineFileDownload />
                </div>
              </div>
            </div>

            <div className=" text-sm text-white">
              <div className=" flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">1254</div>
                <div className="py-3 w-[13%] font-bold">$856</div>
                <div className="py-3 w-[18%] font-bold">Pending</div>
                <div className="py-3 w-[18%] font-bold">Pending</div>
                <div className="py-3 w-[18%] font-bold">
                  <Link>View</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-bold text-xl cursor-pointer"
                >
                  <MdOutlineFileDownload />
                </div>
              </div>

              <div
                className={
                  show
                    ? " block border-b border-slate-700 bg-slate-800"
                    : " hidden"
                }
              >
                <div className=" flex justify-start items-start border-b border-slate-700 pl-3">
                  <div className="py-3 w-[25%] font-bold">#34343</div>
                  <div className="py-3 w-[13%] font-bold">$56</div>
                  <div className="py-3 w-[18%] font-bold">Pending</div>
                  <div className="py-3 w-[18%] font-bold">Pending</div>
                  <div className="py-3 w-[18%] font-bold">Action</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-end mt-4 mr-5">
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
