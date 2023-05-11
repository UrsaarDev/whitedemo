const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Home = new Schema({
  title: {
    type: String,
    required: true,
  },
  title_text: {
    type: String,
    required: true,
  },
  title_button: {
    type: String,
    required: true,
  },
  title_button_link: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true,
  },
  token_name: {
    type: String,
    required: true,
  },
  token_api: {
    type: String,
    required: true,
  },
  brands_title: {
    type: String,
    required: true,
  },
  brands: {
    type: Array,
    required: false,
  },
  token_address: {
    type: Array,
    required: true
  },
  service_rating_link: {
    type: String,
    required: false
  },
  service_web3_link: {
    type: String,
    required: false
  },
  service_contract_link: {
    type: String,
    required: false
  },
  networks: {
    type: Array,
    required: false
  },
  exchange: {
    type: Array,
    required: false
  }
});

const DAO = new Schema({
  governance: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  governance_text: {
    type: String,
    required: true,
  },
  component_feature: {
    type: Array,
    required: false,
  },
  phase_design: {
    type: Array,
    required: false,
  },
  snapshot_link: {
    type: String,
    required: false
  },
  strategy_title: {
    type: String,
    required: true,
  },
  strategy_first_button: {
    type: String,
    required: true,
  },
  strategy_first_button_text: {
    type: String,
    required: true,
  },
  strategy_second_button: {
    type: String,
    required: true,
  },
  strategy_second_button_text: {
    type: String,
    required: true,
  },
  strategy_text_first: {
    type: String,
    required: true,
  },
  strategy_text_second: {
    type: String,
    required: true,
  },
  core_text: {
    type: String,
    required: true,
  },
  core_safety_security: {
    type: String,
    required: true,
  },
  core_transparency: {
    type: String,
    required: true,
  },
  core_self_sovereignty: {
    type: String,
    required: true,
  },
  core_fair_compensation: {
    type: String,
    required: true,
  },
  core_integrity: {
    type: String,
    required: true,
  },
  core_honesty: {
    type: String,
    required: true,
  },
  core_curiosity: {
    type: String,
    required: true,
  },
  contributor_title: {
    type: String,
    required: true,
  },
  contributor_overview: {
    type: String,
    required: true,
  },
  contributor_developer: {
    type: String,
    required: false,
  },
  contributor_ambassador: {
    type: String,
    required: false
  },
  message_title: {
    type: String,
    required: true
  },
  message_text: {
    type: String,
    required: false
  }
});

const Rating = new Schema({
  safety_ratings: {
    type: String,
    required: true,
  },
  rating_buttion_first: {
    type: String,
    required: true,
  },
  rating_button_first_link: {
    type: String,
    required: false
  },
  rating_button_second: {
    type: String,
    required: true,
  },
  rating_button_second_link: {
    type: String,
    required: false,
  },
});

const Audit = new Schema({
  diligence_auditing: {
    type: String,
    required: true,
  },
  diligence_auditing_text: {
    type: String,
    required: true,
  },
  diligence_auditing_note: {
    type: String,
    required: true,
  },
  diligence_auditing_button: {
    type: String,
    required: true,
  },
  diligence_auditing_button_link: {
    type: String,
    required: true,
  },
  terms: {
    type: String,
    required: true,
  },
  terms_text: {
    type: Array,
    required: true,
  },
  audit_report: {
    type: String,
    required: true,
  },
  audit_report_text: {
    type: String,
    required: true,
  },
});

const MainPro = new Schema(
  {
    home: {
      type: Home,
      required: true,
    },
    dao: {
      type: DAO,
      required: true,
    },
    rating: {
      type: Rating,
      required: true,
    },
    audit: {
      type: Audit,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("main-pro", MainPro);
