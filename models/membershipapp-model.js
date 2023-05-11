const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Socials = new Schema({
  twitter: {type: String, required: true},
  github: {type: String, required: false},
  discord: {type: String, required: true},
  medium: {type: String, required: false},
  web: {type: String, required: false},
  telegram: {type: String, required: true},
})

const MembershipApp = new Schema(
  {
    creator: { type: String, required: true },
    authorName: { type: String, required: false},
    authorNationality: { type: String, required: false},
    authorTimezone: { type: String, required: false},
    authorEmail: { type: String, required: true},
    socials: { type: Socials, required: false},
    authorSocialNote: { type: String, required: false},
    authorNFTNote: { type: String, required: false},
  },
  { timestamps: true }
);

module.exports = mongoose.model("membershipapps", MembershipApp);
