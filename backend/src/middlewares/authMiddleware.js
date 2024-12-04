import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler";
import ApiError from "../utils/ApiError";

const authMiddleware = asyncHandler(async (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return ApiError(409, "Please Login First");
  } else {
    try {
      const decodeTOken = await jwt.verify(accessToken, process.env.JWT_SECRET);
      req.role = decodeTOken.role;
      req.id = decodeTOken.id;
      next();
    } catch (error) {
      return ApiError(409, "Please Login", error);
    }
  }
});

export default authMiddleware;
