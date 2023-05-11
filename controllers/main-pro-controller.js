const MainPro = require("../models/main-pro-model");

createMainPro = (req, res) => {
  MainPro.create(
    {
      home: {
        title: req.body.home.title,
        title_text: req.body.home.title_text,
        title_button: req.body.home.title_button,
        title_button_link: req.body.home.title_button_link,
        token: req.body.home.token,
        token_name: req.body.home.token_name,
        token_api: req.body.home.token_api,
        brands_title: req.body.home.brands_title,
        brands: req.body.home.brands,
        token_address: req.body.home.token_address,
        service_rating_link: req.body.home.service_rating_link,
        service_web3_link: req.body.home.service_web3_link,
        service_contract_link: req.body.home.service_contract_link,
        networks: req.body.home.networks,
        exchange: req.body.home.exchange
      },
      dao: {
        governance: req.body.dao.governance,
        summary: req.body.dao.summary,
        governance_text: req.body.dao.governance_text,
        component_feature: req.body.dao.component_feature,
        phase_design: req.body.dao.phase_design,
        snapshot_link: req.body.dao.snapshot_link,
        strategy_title: req.body.dao.strategy_title,
        strategy_first_button: req.body.dao.strategy_first_button,
        strategy_first_button_text: req.body.dao.strategy_first_button_text,
        strategy_second_button: req.body.dao.strategy_second_button,
        strategy_second_button_text: req.body.dao.strategy_second_button_text,
        strategy_text_first: req.body.dao.strategy_text_first,
        strategy_text_second: req.body.dao.strategy_text_second,
        core_text: req.body.dao.core_text,
        core_safety_security: req.body.dao.core_safety_security,
        core_transparency: req.body.dao.core_transparency,
        core_self_sovereignty: req.body.dao.core_self_sovereignty,
        core_fair_compensation: req.body.dao.core_fair_compensation,
        core_integrity: req.body.dao.core_integrity,
        core_honesty: req.body.dao.core_honesty,
        core_curiosity: req.body.dao.core_curiosity,
        contributor_title: req.body.dao.contributor_title,
        contributor_overview: req.body.dao.contributor_overview,
        contributor_developer: req.body.dao.contributor_developer,
        contributor_ambassador: req.body.dao.contributor_ambassador,
        message_title: req.body.dao.message_title,
        message_text: req.body.dao.message_text,
      },
      rating: {
        safety_ratings: req.body.rating.safety_ratings,
        rating_buttion_first: req.body.rating.rating_buttion_first,
        rating_button_first_link: req.body.rating_button_first_link,
        rating_button_second: req.body.rating.rating_button_second,
        rating_button_second_link: req.body.rating_button_second_link,
      },
      audit: {
        diligence_auditing: req.body.audit.diligence_auditing,
        diligence_auditing_text: req.body.audit.diligence_auditing_text,
        diligence_auditing_note: req.body.audit.diligence_auditing_note,
        diligence_auditing_button: req.body.audit.diligence_auditing_button,
        diligence_auditing_button_link:
          req.body.audit.diligence_auditing_button_link,
        terms: req.body.audit.terms,
        terms_text: req.body.audit.terms_text,
        audit_report: req.body.audit.audit_report,
        audit_report_text: req.body.audit.audit_report_text,
      },
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "MainPro was created successfully." });
    }
  );
};

updateMainPro = async (req, res) => {
  await MainPro.updateOne(
    { _id: req.body.id },
    {
      home: req.body.home,
      dao: req.body.dao,
      rating: req.body.rating,
      audit: req.body.audit,
    },
    (err, mainPro) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: mainPro });
    }
  )
    .clone()
    .catch((err) => console.error(err));
};

deleteMainPro = async (req, res) => {};

getMainPro = async (req, res) => {
  await MainPro.find(req.query, (err, mainPro) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!mainPro) {
      return res
        .status(404)
        .json({ success: false, error: "MainPro not found" });
    }
    return res.status(200).json({ success: true, data: mainPro });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createMainPro,
  updateMainPro,
  deleteMainPro,
  getMainPro,
};
