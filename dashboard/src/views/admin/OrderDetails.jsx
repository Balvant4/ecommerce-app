import { Link } from "react-router-dom";

function OrderDetails() {
  return (
    <div className="lg:px-7 px-4 w-full pt-5">
      <div className="w-full p-4 rounded-md bg-chartbgcolor">
        {/* Header Section */}
        <div className="flex justify-between items-center pb-4 border-b border-slate-700">
          <h1 className="text-2xl font-semibold text-white">Order Details</h1>
          <Link
            to="/admin/dashboard/orders"
            className="text-sm bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
          >
            Back to Orders
          </Link>
          {/* Action  */}
          <select
            className=" px-4 py-2  focus:border-indigo-500 outline-none border border-slate-700 rounded-md"
            name=""
            id=""
          >
            <option value="">Pending</option>
            <option value="">Processing</option>
            <option value="">Warehouse</option>
            <option value="">Placed</option>
            <option value="">Cancelled</option>
          </select>
        </div>

        {/* Order Summary */}
        <div className="grid lg:grid-cols-2 gap-5 mt-5">
          {/* Order Info */}
          <div className="bg-slate-800 p-4 rounded-md">
            <h2 className="text-lg font-semibold text-white mb-3">
              Order Information
            </h2>
            <div className="text-sm text-white space-y-2">
              <div className="flex justify-between">
                <span>Order ID:</span>
                <span>#1254</span>
              </div>
              <div className="flex justify-between">
                <span>Date:</span>
                <span>2025-01-15</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span>$856</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Status:</span>
                <span className="text-green-400">Paid</span>
              </div>
              <div className="flex justify-between">
                <span>Order Status:</span>
                <span className="text-yellow-400">Pending</span>
              </div>
            </div>
          </div>

          {/* Customer Info */}
          <div className="bg-slate-800 p-4 rounded-md">
            <h2 className="text-lg font-semibold text-white mb-3">
              Customer Information
            </h2>
            <div className="text-sm text-white space-y-2">
              <div className="flex justify-between">
                <span>Name:</span>
                <span>Balvant Kumar</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <span>balvantkumsrsign3@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span>Phone:</span>
                <span>+1234567890</span>
              </div>
              <div className="flex justify-between">
                <span>Address:</span>
                <span>Dhakka, Easy Shop</span>
              </div>
            </div>
          </div>
        </div>

        {/* Ordered Items */}
        <div className="mt-5 bg-slate-800 p-4 rounded-md">
          <h2 className="text-lg font-semibold text-white mb-3">
            Ordered Items
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-white">
              <thead className="text-xs uppercase bg-slate-700 text-white">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Item
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-slate-800 border-b border-slate-700">
                  <td className="px-4 py-3">Product A</td>
                  <td className="px-4 py-3">2</td>
                  <td className="px-4 py-3">$150</td>
                  <td className="px-4 py-3">$300</td>
                </tr>
                <tr className="bg-slate-800 border-b border-slate-700">
                  <td className="px-4 py-3">Product B</td>
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3">$200</td>
                  <td className="px-4 py-3">$200</td>
                </tr>
                <tr className="bg-slate-800">
                  <td className="px-4 py-3 font-bold">Total</td>
                  <td></td>
                  <td></td>
                  <td className="px-4 py-3 font-bold">$500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end mt-5">
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-3">
            Mark as Delivered
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
