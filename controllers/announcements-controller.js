const Anns = require("../models/anns-model");

createAnn = (req, res) => {
  Anns.create(
    {
      title: req.body.title,
      tags: req.body.tags,
      topic: req.body.topic,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Announcement was created successfully." });
    }
  );
};

updateAnn = async (req, res) => {
  await Anns.updateOne(
    { _id: req.body.id },
    {
      title: req.body.title,
      tags: req.body.tags,
      topic: req.body.topic,
    },
    (err, topic) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res.status(200).json({ success: true, data: topic });
    }
  )
    .clone()
    .catch((err) => console.error(err));
};

getAnns = async (req, res) => {
  await Anns.find({}, (err, topic) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!topic) {
      return res.status(404).json({ success: false, error: "Announcement not found" });
    }
    return res.status(200).json({ success: true, data: topic });
  }).sort({ createdAt: -1 })
    .clone()
    .catch((err) => console.error(err));
};

deleteAnn = async (req, res) => {
  await Anns.deleteOne({ _id: req.body.item._id }, (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res
      .status(200)
      .json({ success: true, data: "Announcement was deleted successfully." });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createAnn,
  getAnns,
  updateAnn,
  deleteAnn,
};
