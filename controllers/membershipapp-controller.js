const MembershipApp = require("../models/membershipapp-model");

createMembershipApp = (req, res) => {
  console.log(req.body)
  MembershipApp.create(
    {
      creator: req.body.creator,
      authorName: req.body.authorName,
      authorNationality: req.body.authorNationality,
      authorTimezone: req.body.authorTimezone,
      authorEmail: req.body.authorEmail,
      socials: req.body.socials,
      authorSocialNote: req.body.authorSocialNote,
      authorNFTNote: req.body.authorNFTNote,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Membership Application was created successfully." });
    }
  );
};

getMembershipApps = async (req, res) => {
  await MembershipApp.find(req.query, (err, app) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!app) {
      return res
        .status(404)
        .json({ success: false, error: "Application not found" });
    }
    return res.status(200).json({ success: true, data: app });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createMembershipApp,
  getMembershipApps,
};
