const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Profile = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: false,
    },
    pic: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
    },
    wallet: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    twitter: {
        type: String,
        required: false
    },
    github: {
        type: String,
        required: false
    },
    timezone: {
        type: String,
        required: false
    },
    discord: {
        type: String,
        required: false
    },
    project_dao: {
        type: String,
        required: false
    },
    trust_level: {
        type: String,
        required: false
    },
    views: {
        type: Number,
        required: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("profile", Profile);
