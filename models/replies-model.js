const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Replies = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true
    },
    like: {
      type: Array,
      required: false
    },
    dislike: {
      type: Array,
      required: false
    },
    comments: {
      type: Array,
      required: false
    },
    topic: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("replies", Replies);
