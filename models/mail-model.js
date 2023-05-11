const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Mail = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("mails", Mail);