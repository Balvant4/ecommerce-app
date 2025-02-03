import mongoose, { Schema } from "mongoose";

const sellerCustomerSchema = new Schema(
  {
    myId: {
      type: String,
      required: true,
    },
    myFriends: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const sellerCustomer = mongoose.model(
  "sellerCustomer",
  sellerCustomerSchema
);
