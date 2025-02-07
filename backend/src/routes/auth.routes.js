import { Router } from "express";
import {
  adminLogin,
  getUser,
  sellerRegister,
} from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { sellerRegisterSchema } from "../validations/seller.validation.js";
import validate from "../middlewares/validateMiddleware.js";

const authrouter = Router();

authrouter.route("/admin-login").post(adminLogin);
authrouter.route("/get-user").get(authMiddleware, getUser);
authrouter
  .route("/seller-register")
  .post(validate(sellerRegisterSchema), sellerRegister);

export default authrouter;
