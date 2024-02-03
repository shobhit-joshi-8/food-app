const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
  {
    foods: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Foods",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["pending", "invoiced", "shipped", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("Orders", ordersSchema);
