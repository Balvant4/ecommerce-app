import app from "./app.js";
import connectDB from "./db/server.js";
import dotenv from "dotenv";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection Faild", err);
  });
