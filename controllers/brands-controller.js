const Brands = require("../models/brands-model");

createBrand = (req, res) => {
  Brands.create(
    {
      name: req.body.name,
      logo: req.body.logo,
      link: req.body.link
    },
    (err) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      return res
        .status(200)
        .json({ success: true, data: "Brand was created successfully." });
    }
  );
};

updateBrand = async (req, res) => {};

deleteBrand = async (req, res) => {};

getBrands = async (req, res) => {
  await Brands.find(req.query, (err, brand) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!brand) {
      return res
        .status(404)
        .json({ success: false, error: "Brand not found" });
    }
    return res.status(200).json({ success: true, data: brand });
  })
    .clone()
    .catch((err) => console.error(err));
};

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
  getBrands,
};
