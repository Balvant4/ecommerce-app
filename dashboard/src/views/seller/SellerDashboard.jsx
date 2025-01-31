import AdminPageCards from "../../components/AdminPageCards";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCart4 } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import ApexChart from "../../components/ApexChart";
import { Link } from "react-router-dom";

function SellerDashboard() {
  return (
    <div className="px-4 py-5 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AdminPageCards
          value="$3434"
          label="Total Sales"
          bgColor="bg-green-200"
          iconBgColor="bg-red-700"
          logo={BsCurrencyDollar}
        />
        <AdminPageCards
          value="120"
          label="Products"
          bgColor="bg-lime-100"
          iconBgColor="bg-yellow-500"
          logo={MdProductionQuantityLimits}
        />
        <AdminPageCards
          value="50"
          label="Orders"
          bgColor="bg-amber-50"
          iconBgColor="bg-rose-800"
          logo={BsCart4}
        />
        <AdminPageCards
          value="50"
          label="Pending Orders"
          bgColor=" bg-green-300"
          iconBgColor="bg-yellow-900"
          logo={BsCart4}
        />
      </div>

      {/* Second section start from here */}
      <div className="pt-7 flex lg:flex-row flex-col gap-3">
        <div className="lg:w-7/12 w-full bg-chartbgcolor p-5 rounded-xl">
          <ApexChart />
        </div>

        {/* ChatBox */}
        <div className="w-full lg:w-5/12 rounded-xl bg-chartbgcolor p-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-semibold text-lg text-[#d0d2d6]">
              Recent Customer Message
            </h2>
            <Link className="font-semibold text-sm text-[#d0d2d6]">
              View All
            </Link>
          </div>

          <div className="flex flex-col gap-4 text-[#d0d2d6]">
            <ol className="  border-slate-600">
              {/* First li */}
              <li className="flex gap-4 items-center pb-2">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="http://localhost:5173/images/admin.jpg"
                  alt="Admin"
                />
                <div className="flex-1 p-4 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <Link className="text-md font-normal">Sellers</Link>
                    <time className="text-sm font-normal">2 days ago</time>
                  </div>
                  <div className="p-3 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                    How are you
                  </div>
                </div>
              </li>

              {/* second li */}
              <li className="flex gap-4 items-center pb-2">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="http://localhost:5173/images/admin.jpg"
                  alt="Admin"
                />
                <div className="flex-1 p-4 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <Link className="text-md font-normal">Admin</Link>
                    <time className="text-sm font-normal">2 days ago</time>
                  </div>
                  <div className="p-3 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                    How are you
                  </div>
                </div>
              </li>

              {/* third li */}
              <li className="flex gap-4 items-center">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  src="http://localhost:5173/images/admin.jpg"
                  alt="Admin"
                />
                <div className="flex-1 p-4 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <Link className="text-md font-normal">Customer</Link>
                    <time className="text-sm font-normal">2 days ago</time>
                  </div>
                  <div className="p-3 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                    How are you
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Third sectio start from here */}
      <div className=" mt-5 w-full bg-chartbgcolor p-5 rounded-xl">
        <div className=" flex justify-between text-white">
          <h2 className=" font-bold ">Recent Orders</h2>
          <span className=" font-semibold ">View All</span>
        </div>

        {/* Table start from here */}
        <div className="mt-5 ">
          <div className="overflow-x-auto rounded-xl border border-gray-700">
            <table className="table-auto w-full text-left border-collapse text-white">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border border-gray-700 rounded-tl-xl">
                    ORDER ID
                  </th>
                  <th className="px-4 py-2 border border-gray-700">PRICE</th>
                  <th className="px-4 py-2 border border-gray-700">
                    PAYMENT STATUS
                  </th>
                  <th className="px-4 py-2 border border-gray-700">
                    ORDER STATUS
                  </th>
                  <th className="px-4 py-2 border border-gray-700 rounded-tr-xl">
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody>
                {[1, 2, 3, 4].map((d, i) => (
                  <tr key={i} className="bg-gray-900 hover:bg-gray-800">
                    <td className="px-4 py-2 border border-gray-700">#34344</td>
                    <td className="px-4 py-2 border border-gray-700">$34.99</td>
                    <td className="px-4 py-2 border border-gray-700">
                      Pending
                    </td>
                    <td className="px-4 py-2 border border-gray-700">
                      Processing
                    </td>
                    <td className="px-4 py-2 border border-gray-700 text-blue-500 cursor-pointer hover:underline">
                      <Link>View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
