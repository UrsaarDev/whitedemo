const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Announcements = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true
    },
    topic: {
      type: Array,
      required: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("announcements", Announcements);