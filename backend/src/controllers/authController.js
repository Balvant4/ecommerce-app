import { Admin, Seller } from "../models/auth.model.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcryptjs";
import createToken from "../utils/createToken.js";
import { sellerCustomer } from "../models/chat/sellerCustomerModel.js";

const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  // Find admin by email
  const admin = await Admin.findOne({ email });
  if (!admin) {
    throw new ApiError(404, "Admin not found");
  }

  // Compare passwords
  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    throw new ApiError(401, "Wrong Password");
  }

  const token = await createToken({
    id: admin.id,
    role: admin.role,
  });

  res.cookie("authToken", token, {
    httpOnly: true, // Prevents access by JavaScript
    secure: process.env.NODE_ENV === "production", // Sends cookie over HTTPS in production
    sameSite: "strict", // Protects against CSRF
    maxAge: 24 * 60 * 60 * 1000, // Cookie validity (1 day)
  });

  // Respond with admin details and token
  const response = new ApiResponse(200, "User Login Successfully", {
    admin: {
      id: admin._id,
      email: admin.email,
      name: admin.name,
    },
    token,
    success: true,
  });

  res.status(response.statusCode).json(response);
});
//END METHOD

const sellerRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await Seller.findOne({ email });
  if (existedUser) {
    throw new ApiError(404, "Email is already reagistered");
  }

  const hasedPassword = await bcrypt.hash(password, 10);

  const user = await Seller.create({
    name,
    email,
    password: hasedPassword,
    method: "menualy",
    shopInfo: {},
  });

  await sellerCustomer.create({
    myId: user.id,
  });

  const token = await createToken({
    id: user.id,
    role: user.role,
  });
  res.cookie("authToken", token, {
    httpOnly: true, // Prevents access by JavaScript
    secure: process.env.NODE_ENV === "production", // Sends cookie over HTTPS in production
    sameSite: "strict", // Protects against CSRF
    maxAge: 24 * 60 * 60 * 1000, // Cookie validity (1 day)
  });

  const createdUser = await Seller.findById(user.id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while creating seller");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

const getUser = asyncHandler(async (req, res) => {
  const { id, role } = req;
  if (role == "admin") {
    const user = await Admin.findById(id);
    ApiResponse(200, { userInfo: user });
  } else {
    console.log("seller info");
  }
});

export { adminLogin, sellerRegister, getUser };
