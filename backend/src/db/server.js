import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB connected !! DB HOST:");
  } catch (error) {
    console.log("MONGODB connection FAILD", error);
    process.exit(1);
  }
};

export default connectDB;
