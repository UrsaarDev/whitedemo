const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Brands = new Schema(
  {
    name: { type: String, required: true },
    logo: { type: String, required: true },
    link: { type: String, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("brands", Brands);
