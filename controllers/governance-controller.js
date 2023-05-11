const Governance = require("../models/governance-model");

createGovernance = (req, res) => {
  Governance.create(
    {
      title: req.body.title,
      link: req.body.link,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Governance was created successfully." });
    }
  );
};

getGovernances = async (req, res) => {
  await Governance.find({}, (err, topic) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!topic) {
      return res.status(404).json({ success: false, error: "Governance not found" });
    }
    return res.status(200).json({ success: true, data: topic });
  }).sort({ createdAt: -1 })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createGovernance,
  getGovernances
};
