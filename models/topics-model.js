const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Topics = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true
    },
    topic: {
      type: Array,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    like: {
      type: Array,
      required: false
    },
    dislike: {
      type: Array,
      required: false
    },
    vote_yes: {
      type: Array,
      required: false
    },
    vote_no: {
      type: Array,
      required: false
    },
    vote_more: {
      type: Array,
      required: false
    },
    comments: {
      type: Array,
      required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("topics", Topics);