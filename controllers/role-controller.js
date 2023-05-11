const Role = require("../models/role-model");

createRole = (req, res) => {
  const { type, address } = req.body
  Role.create(
    {
      type,
      address,
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Role was created successfully." });
    }
  );
};

getRoles = async (req, res) => {
  await Role.find({}, (err, topic) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!topic) {
      return res.status(404).json({ success: false, error: "Role not found" });
    }
    return res.status(200).json({ success: true, data: topic });
  })
    .clone()
    .catch((err) => console.error(err));
};

deleteRole = async (req, res) => {
  await Role.deleteOne({ _id: req.body._id }, (err) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    return res
      .status(200)
      .json({ success: true, data: "Role was deleted successfully." });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createRole,
  getRoles,
  deleteRole
};
