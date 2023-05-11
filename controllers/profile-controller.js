const Profile = require("../models/profile-model");

createProfile = (req, res) => {
  Profile.create(
    {
      username: req.body.username,
      website: req.body.website,
      pic: req.body.pic,
      bio: req.body.bio,
      wallet: req.body.wallet,
      email: req.body.email,
      twitter: req.body.twitter,
      github: req.body.github,
      timezone: req.body.timezone,
      discord: req.body.discord,
      project_dao: req.body.project_dao,
      trust_level: req.body.trust_level,
      views: req.body.views,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Profile was created successfully." });
    }
  );
};

updateProfile = async (req, res) => {
  await Profile.updateOne(
    { _id: req.body.id },
    {
      username: req.body.username,
      website: req.body.website,
      pic: req.body.pic,
      bio: req.body.bio,
      wallet: req.body.wallet,
      email: req.body.email,
      twitter: req.body.twitter,
      github: req.body.github,
      timezone: req.body.timezone,
      discord: req.body.discord,
      project_dao: req.body.project_dao,
      trust_level: req.body.trust_level,
      views: req.body.views,
    },
    (err, profile) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: profile });
    }
  )
    .clone()
    .catch((err) => console.error(err));
};

getProfile = async (req, res) => {
  await Profile.find(req.query, (err, profile) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!profile) {
      return res
        .status(404)
        .json({ success: false, error: "Profile not found" });
    }
    return res.status(200).json({ success: true, data: profile });
  })
    .clone()
    .catch((err) => console.error(err));
};

deleteProfile = async (req, res) => {
  await Profile.deleteOne({ id: req.params.id }, (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res
      .status(200)
      .json({ success: true, data: "Profile was deleted successfully." });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createProfile,
  updateProfile,
  getProfile,
  deleteProfile,
};
