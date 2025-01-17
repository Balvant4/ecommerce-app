import React from "react";
import { Link } from "react-router-dom";

function SellersDetails() {
  return (
    <div className="lg:px-7 px-4 w-full pt-5 flex flex-col gap-3">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-4 border-b border-slate-700">
        <h1 className="text-2xl font-semibold ">Order Details</h1>
        <Link
          to="/admin/dashboard/seller-request"
          className=" bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Back to Seller
        </Link>
      </div>
      <div className="w-full p-4 rounded-md bg-gray-800 flex flex-col lg:flex-row gap-10">
        {/* Profile Section */}
        <div className="lg:w-3/12 flex flex-col justify-center items-center rounded-md">
          <img
            className="rounded-md w-full  object-cover"
            src="http://localhost:5173/images/demo.jpg"
            alt="Profile image"
          />
          <div className="pt-4 flex gap-2">
            <select className="px-3 py-2 text-white rounded-lg border border-gray-700 focus:ring-0 hover:border-indigo-500 bg-gray-700">
              <option value="">--Select Status--</option>
              <option value="active">Active</option>
              <option value="deactive">Deactive</option>
            </select>
            <button className="bg-red-500 px-4 py-2 rounded-lg text-white hover:shadow-md hover:shadow-red-500/40">
              Submit
            </button>
          </div>
        </div>

        {/* Basic Info Section */}
        <div className="lg:w-6/12">
          <h2 className="text-xl text-white pb-2">Basic Info</h2>
          <div className="bg-gray-700 p-4 rounded-md text-white">
            <div className="flex pb-2 gap-2">
              <span className="font-semibold">Name:</span>
              <span>Balvant</span>
            </div>
            <div className="flex pb-2 gap-2">
              <span className="font-semibold">Email:</span>
              <span>Balvanoifj</span>
            </div>
            <div className="flex pb-2 gap-2">
              <span className="font-semibold">Role:</span>
              <span>Nothing</span>
            </div>
            <div className="flex pb-2 gap-2">
              <span className="font-semibold">Status:</span>
              <span>Pending</span>
            </div>
            <div className="flex pb-2 gap-2">
              <span className="font-semibold">Payment Status:</span>
              <span>Baki hai</span>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="lg:w-6/12">
          <h2 className="text-xl text-white pb-2">Address</h2>
          <div className="bg-gray-700 p-4 rounded-md text-white">
            <div className="flex pb-2 gap-2">
              <span className="font-semibold">Shop Name:</span>
              <span>Lalan ka dukan</span>
            </div>
            <div className="flex pb-2 gap-2">
              <span className="font-semibold">Division:</span>
              <span>pat ani</span>
            </div>
            <div className="flex pb-2 gap-2">
              <span className="font-semibold">District:</span>
              <span>kuch bhi</span>
            </div>
            <div className="flex pb-2 gap-2">
              <span className="font-semibold">State:</span>
              <span>Thik nahi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellersDetails;
