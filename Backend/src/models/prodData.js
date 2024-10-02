const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Register = new mongoose.model("Product", productSchema);

module.exports = Register;
