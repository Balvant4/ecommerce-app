import express from "express";
import bodyParser from "body-parser";
import authrouter from "./routes/auth.routes.js";
import cors from "cors";
import cookieparser from "cookie-parser";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieparser());
app.use("/api", authrouter);

export default app;
