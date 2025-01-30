import { FadeLoader } from "react-spinners";
import { BsImages } from "react-icons/bs";
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import Input from "../../components/Input";
import MainButton from "../../components/MainButton";

function Profile() {
  const image = true;
  const loader = true;
  const status = "active";
  const userInfo = true;

  return (
    <div className=" px-2 lg:px-7 py-5">
      <div className=" w-full flex flex-col md:flex-row gap-4 ">
        <div className=" w-full md:w-6/12">
          <div className=" w-full p-4 rounded-md text-white bg-slate-800">
            <div className=" flex justify-center items-center py-3">
              {image ? (
                <label
                  htmlFor="img"
                  className="h-[150px] w-[200px] cursor-pointer relative p-3 overflow-hidden"
                >
                  <img src="http://localhost:5173/images/demo.jpg" />
                  {!loader && (
                    <div className=" bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  className=" flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer border border-dashed hover:border-red-500 border-[#d0d3d6] relative"
                  htmlFor="img"
                >
                  <span>
                    <BsImages />
                  </span>
                  <span>Slelect Image</span>
                  {loader && (
                    <div className=" bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input type="file" className="hidden" id="img" />
            </div>

            {/* Profile Details Start from here */}
            <div className=" px-0 md:px-5 py-2">
              <div className=" flex justify-between text-sm flex-col gap-2 p-4 bg-green-500 rounded-md relative">
                <span className=" p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer">
                  <FaRegEdit />
                </span>
                <div className=" flex gap-2">
                  <span>Name: </span>
                  <span>Balvant</span>
                </div>
                <div className=" flex gap-2">
                  <span>Email: </span>
                  <span>balvantkumarsign@gmail.com</span>
                </div>
                <div className=" flex gap-2">
                  <span>Role: </span>
                  <span>Saller</span>
                </div>
                <div className=" flex gap-2">
                  <span>Status: </span>
                  <span>Pending</span>
                </div>
                <div className=" flex gap-2">
                  <span>Payment Account: </span>
                  <p>
                    {status === "active" ? (
                      <span className=" bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-1 rounded">
                        Pending
                      </span>
                    ) : (
                      <span className=" bg-red-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-1 rounded">
                        Pending
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Form start from here */}

            <div className=" px-0 md:px-5 py-2 ">
              {userInfo ? (
                <form>
                  <Input
                    label="Shop Name"
                    placeholder="Shop Name"
                    type="text"
                    name="shopname"
                    id="shop"
                    className=" mb-5"
                  />
                  <Input
                    label="Division Name"
                    placeholder="Division Name"
                    type="text"
                    name="division"
                    id="division"
                    className=" mb-5"
                  />
                  <Input
                    label="District Name"
                    placeholder="District Name"
                    type="text"
                    name="district"
                    id="district"
                    className=" mb-5"
                  />
                  <Input
                    label="Sub District Name"
                    placeholder="Sub District Name "
                    type="text"
                    name="subdis"
                    id="subdis"
                    className=" mb-5"
                  />
                  <MainButton text="Save Changes" />
                </form>
              ) : (
                <div className=" px-0 md:px-5 py-2">
                  <div className=" flex justify-between text-sm flex-col gap-2 p-4 bg-green-500 rounded-md relative">
                    <span className=" p-[6px] bg-yellow-500 rounded hover:shadow-lg hover:shadow-yellow-500/50 absolute right-2 top-2 cursor-pointer">
                      <FaRegEdit />
                    </span>
                    <div className=" flex gap-2">
                      <span>Shop Name: </span>
                      <span>Balvant</span>
                    </div>
                    <div className=" flex gap-2">
                      <span>Division Name: </span>
                      <span>balvantkumarsign@gmail.com</span>
                    </div>
                    <div className=" flex gap-2">
                      <span>District Name: </span>
                      <span>Saller</span>
                    </div>
                    <div className=" flex gap-2">
                      <span>Sub District Name: </span>
                      <span>Pending</span>
                    </div>
                    <div className=" flex gap-2">
                      <span>Payment Account: </span>
                      <p>
                        {status === "active" ? (
                          <span className=" bg-blue-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-1 rounded">
                            Pending
                          </span>
                        ) : (
                          <span className=" bg-red-500 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-1 rounded">
                            Pending
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" w-full md:w-6/12">
          <div className=" w-full p-4 rounded-md text-white bg-slate-800">
            <h1 className=" text-xl mb-4">Change Password</h1>

            <form>
              <Input
                label="Email"
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                className=" mb-5"
              />
              <Input
                label="Old Password"
                placeholder="Old Password"
                type="password"
                name="old_password"
                id="old_password"
                className=" mb-5"
              />
              <Input
                label="New Password"
                placeholder="New Password"
                type="password"
                name="new_password"
                id="new_password"
                className=" mb-5"
              />

              <MainButton text="Save Changes" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
