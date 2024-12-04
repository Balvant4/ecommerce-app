import { Router } from "express";
import { adminLogin, getUser } from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const authrouter = Router();

authrouter.route("/admin-login").post(adminLogin);
authrouter.route("/get-user").get(authMiddleware, getUser);

export default authrouter;
