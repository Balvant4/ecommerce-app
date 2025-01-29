import { useState } from "react";
import Dropdown from "../../components/Dropdown";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Pagination from "../../components/Pagination";

function DiscountProduct() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);

  const handleProductSearch = (query) => {
    console.log("Product Search:", query);
  };

  const products = [1, 2, 3, 4];

  return (
    <div className="lg:px-7 px-2 w-full pt-5 flex flex-col gap-5 ">
      <h1 className="text-2xl font-semibold text-black">Discount Product</h1>
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
          {/* Table for Large Screens */}
          <div className="hidden md:block overflow-x-auto rounded-xl">
            <table className="table-auto w-full text-left text-white">
              <thead className="bg-gradient-to-r from-indigo-500 to-blue-600 uppercase text-xs font-bold text-white rounded-md py-2 px-3 mb-2">
                <tr className="border-b border-b-gray-700">
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Brand</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Discount</th>
                  <th className="px-4 py-2">Stock</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((d, i) => (
                  <tr key={i} className="hover:bg-slate-700">
                    <td className="px-4 py-2">{d}</td>
                    <td className="px-4 py-2">
                      <img
                        className="w-[45px] h-[45px] rounded-full"
                        src={`http://localhost:5173/images/category/${d}.jpg`}
                        alt="CategoryImages"
                      />
                    </td>
                    <td className="px-4 py-2">Men Women</td>
                    <td className="px-4 py-2">Sports</td>
                    <td className="px-4 py-2">Nike</td>
                    <td className="px-4 py-2">$456</td>
                    <td className="px-4 py-2">4%</td>
                    <td className="px-4 py-2">456</td>
                    <td className="px-4 py-2">
                      <div className="flex justify-start items-center gap-4">
                        <Link className="p-2 bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                          <FaRegEdit />
                        </Link>
                        <Link className="p-2 bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                          <FaEye />
                        </Link>
                        <Link className="p-2 bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                          <MdDelete />
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card View for Small Screens */}
          <div className="block md:hidden w-full">
            {products.map((d, i) => (
              <div
                key={i}
                className="mb-4 p-4 bg-slate-700 rounded-lg shadow-lg"
              >
                <h1 className=" text-white font-bold text-xl flex items-center gap-2 justify-center">
                  Product No: <span>{d}</span>
                </h1>
                <div className="flex flex-col items-center gap-5">
                  <img
                    className=" h-[12rem] w-full mt-2"
                    src={`http://localhost:5173/images/category/${d}.jpg`}
                    alt="CategoryImages"
                  />
                </div>
                <div className=" pt-5">
                  <h2 className="text-[1.5rem] text-[#f2f542]">
                    Name: <span className=" text-white">Shirt</span>
                  </h2>
                  <p className="text-[1.5rem] text-[#f2f542]">
                    Category: <span className=" text-white">Women</span>
                  </p>
                  <p className="text-[1.5rem] text-[#f2f542]">
                    Brand: <span className=" text-white">Nike</span>
                  </p>
                  <p className="text-[1.5rem] text-[#f2f542]">
                    Price: <span className=" text-white">500</span>
                  </p>
                  <p className="text-[1.5rem] text-[#f2f542]">
                    Discount <span className=" text-white">10%</span>
                  </p>
                  <p className="text-[1.5rem] text-[#f2f542]">
                    Stock: <span className=" text-white">5000</span>
                  </p>
                </div>
                <div className="mt-4 flex gap-4">
                  <Link className="p-2 bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50">
                    <FaRegEdit className=" text-white text-xl" />
                  </Link>
                  <Link className="p-2 bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50">
                    <FaEye className=" text-white text-xl" />
                  </Link>
                  <Link className="p-2 bg-red-500 rounded hover:shadow-lg hover:shadow-red-500/50">
                    <MdDelete className=" text-white text-xl" />
                  </Link>
                </div>
              </div>
            ))}
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

export default DiscountProduct;
