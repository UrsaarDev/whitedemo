const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Role = new Schema(
  {
    type: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("roles", Role);