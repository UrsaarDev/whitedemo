const geoip = require('geoip-country');
const AuditProject = require("../models/audit_project-model");

createProject = (req, res) => {
  AuditProject.create(
    {
      creator: req.body.creator,
      authorName: req.body.authorName,
      authorEmail: req.body.authorEmail,
      authorTelegram: req.body.authorTelegram,
      authorNationality: req.body.authorNationality,
      authorDiscord: req.body.authorDiscord,
      authorRelation: req.body.authorRelation,
      authorIP: req.body.authorIP,
      name: req.body.name,
      logo: req.body.logo,
      audited_by: req.body.audited_by,
      safety_score: req.body.safety_score,
      onboard_date: req.body.onboard_date,
      tags: req.body.tags,
      socials: req.body.socials,
      description: req.body.description,
      verified: req.body.verified,
      platform: req.body.platform,
      language: req.body.language,
      contract_addr: req.body.contract_addr,
      contract_addr1: req.body.contract_addr1,
      member: req.body.member,
      codebase: req.body.codebase,
      codebase1: req.body.codebase1,
      circle_text: req.body.circle_text,
      circle_subtext: req.body.circle_subtext,
      bottom_link: req.body.bottom_link,
      contract_audits: req.body.contract_audits,
      platform_audits: req.body.platform_audits,
      bug_bounty: req.body.bug_bounty,
      insurance: req.body.insurance,
      distribution: req.body.distribution,
      distribution_list: req.body.distribution_list,
      security_text: req.body.security_text,
      security_list: req.body.security_list,
      audited_files_text: req.body.audited_files_text,
      audited_files_list: req.body.audited_files_list,
      metho: req.body.metho,
      methodology_tags: req.body.methodology_tags,
      token_title: req.body.token_title,
      token_name: req.body.token_name,
      token: req.body.token,
      market_api: req.body.market_api,
      market_data: req.body.market_data,
      team_title: req.body.team_text,
      team_note: req.body.team_note,
      disclaimer: req.body.disclaimer,
      disclaimer_text: req.body.disclaimer_text,
      multisig_address: req.body.multisig_address,
      mintable: req.body.mintable,
      published: "unpublish",
      reviewed: "pending",
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Project was created successfully." });
    }
  );
};

updateProject = async (req, res) => {
  await AuditProject.updateOne(
    { _id: req.body.id },
    {
      creator: req.body.creator,
      authorName: req.body.authorName,
      authorEmail: req.body.authorEmail,
      authorTelegram: req.body.authorTelegram,
      authorNationality: req.body.authorNationality,
      authorDiscord: req.body.authorDiscord,
      authorRelation: req.body.authorRelation,
      authorIP: req.body.authorIP,
      name: req.body.name,
      logo: req.body.logo,
      audited_by: req.body.audited_by,
      safety_score: req.body.safety_score,
      onboard_date: req.body.onboard_date,
      tags: req.body.tags,
      socials: req.body.socials,
      description: req.body.description,
      verified: req.body.verified,
      platform: req.body.platform,
      language: req.body.language,
      contract_addr: req.body.contract_addr,
      contract_addr1: req.body.contract_addr1,
      member: req.body.member,
      codebase: req.body.codebase,
      codebase1: req.body.codebase1,
      circle_text: req.body.circle_text,
      circle_subtext: req.body.circle_subtext,
      bottom_link: req.body.bottom_link,
      contract_audits: req.body.contract_audits,
      platform_audits: req.body.platform_audits,
      bug_bounty: req.body.bug_bounty,
      insurance: req.body.insurance,
      distribution: req.body.distribution,
      distribution_list: req.body.distribution_list,
      security_text: req.body.security_text,
      security_list: req.body.security_list,
      audited_files_text: req.body.audited_files_text,
      audited_files_list: req.body.audited_files_list,
      metho: req.body.metho,
      methodology_tags: req.body.methodology_tags,
      token_title: req.body.token_title,
      token_name: req.body.token_name,
      token: req.body.token,
      market_api: req.body.market_api,
      market_data: req.body.market_data,
      team_title: req.body.team_title,
      team_note: req.body.team_note,
      disclaimer: req.body.disclaimer,
      disclaimer_text: req.body.disclaimer_text,
      multisig_address: req.body.multisig_address,
      mintable: req.body.mintable,
      published: req.body.published,
      reviewed: req.body.reviewed,
    },
    (err, project) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: project });
    }
  )
    .clone()
    .catch((err) => console.error(err));
};

deleteProject = async (req, res) => {
  console.log('id', req.params.id)
  await AuditProject.findOneAndRemove({_id: req.params.id}, (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res
      .status(200)
      .json({ success: true, data: "Project was deleted successfully." });
  })
    .clone()
    .catch((err) => console.error(err));
};

getProjects = async (req, res) => {
  await AuditProject.find(req.query, (err, project) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: "Project not found" });
    }
    let proj = project
    // proj.forEach(x => x.authorCountry = x.authorIP ? geoip.lookup(x.authorIP).country : "Unknown")
    return res.status(200).json({ success: true, data: proj });
  })
    .clone()
    .catch((err) => console.error(err));
};

getLatestProjects = async (req, res) => {
  await AuditProject.find(
    {},
    {},
    { sort: { created_at: -1 } },
    (err, projects) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!projects) {
        return res
          .status(404)
          .json({ success: false, error: "Project not found" });
      }

      let indexs = [];

      projects.forEach((article, index) => {
        indexs.push(article._id);
      });
      return res.status(200).json({ success: true, data: indexs });
    }
  )
    .clone()
    .catch((err) => console.error(err));
};

getProjectsByField = async (req, res) => {
  var { field, value } = req.query;
  var regex = { $regex: ".*" + value + ".*" };
  var query = {};
  query[field] = regex;
  await AuditProject.find(query, (err, project) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!project) {
      return res
        .status(404)
        .json({ success: false, error: `Project not found` });
    }
    let proj = {...project}
    // proj.authorCountry = project.authorIP ? geoip.lookup(project.authorIP).country : "Unknown"
    return res.status(200).json({ success: true, data: proj });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
  getLatestProjects,
  getProjectsByField,
};
