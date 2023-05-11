const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Member = new Schema({
    name: { type: String, required: true },
    pfp: { type: String, required: true },
    role: { type: String, required: true },
    socials: { type: String, required: true },
    address: { type: String, required: true },
    verified: { type: Boolean, required: true },
})

const Socials = new Schema({
  twitter: {type: String, required: false},
  github: {type: String, required: false},
  discord: {type: String, required: false},
  medium: {type: String, required: false},
  web: {type: String, required: false},
  telegram: {type: String, required: false},
})

const Insurance = new Schema({
  name: { type: String, required: true },
  logolink: { type: String, required: true },
  link: { type: String, required: true }
})

const AuditProject = new Schema(
  {
    creator: { type: String, required: false },
    authorName: { type: String, required: false},
    authorEmail: { type: String, required: false},
    authorTelegram: { type: String, required: false},
    authorNationality: { type: String, required: false},
    authorDiscord: { type: String, required: false},
    authorRelation: { type: String, required: false},
    authorIP: { type: String, required: false},
    authorCountry: { type: String, required: false},
    name: { type: String, required: false },
    logo: { type: String, required: false },
    audited_by: { type: Array, required: false },
    safety_score: { type: Number, required: false },
    onboard_date: { type: Date, required: false },
    tags: { type: Array, required: false },
    socials: { type: Socials, required: false },
    description: { type: String, required: false },
    verified: { type: Boolean, required: false },
    platform: { type: String, required: false },
    language: { type: String, required: false },
    contract_addr: { type: Array, required: false },
    contract_addr1: { type: Array, required: false },
    member: { type: Array, required: false },
    codebase: { type:String, required: false },
    codebase1: { type:String, required: false },
    circle_text: { type: String, required: false },
    circle_subtext: { type: String, required: false },
    bottom_link: { type: String, required: false },
    contract_audits: { type: Array, required: false },
    platform_audits: { type: Array, required: false },
    bug_bounty: { type: Array, required: false },
    insurance: { type: Insurance, required: false },
    distribution: { type: String, required: false },
    distribution_list: { type: Array, required: false },
    security_text: {type: String, required: false},
    security_list: {type: Array, required: false},
    audited_files_text: { type: String, required: false },
    audited_files_list: { type: Array, required: false },
    metho: { type: String, required: false },
    methodology_tags: { type: Array, required: false },
    token_title: { type: String, required: false },
    token_name: { type: String, required: false },
    token: { type: String, required: false },
    market_api: { type: String, required: false },
    market_data: { type: Array, required: false },
    team_title: { type: String, required: false },
    team_note: { type: String, required: false },
    disclaimer: { type: String, required: false },
    disclaimer_text: { type: String, required: false },
    multisig_address: { type: Array, required: false },
    mintable: { type: Boolean, required: false },
    published: { type: String, required: false },
    reviewed: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("audit_project", AuditProject);
