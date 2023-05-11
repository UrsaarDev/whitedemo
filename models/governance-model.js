const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Governance = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("governances", Governance);