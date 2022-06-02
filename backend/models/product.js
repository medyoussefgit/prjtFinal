const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: String,
  image: String,
  createDate: { type: Date, default: Date.now() },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});
module.exports = Product = mongoose.model("product", productSchema);
