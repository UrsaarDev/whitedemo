const express = require("express");

const brandsController = require("../controllers/brands-controller");

const router = express.Router();

router.post("/brand", brandsController.createBrand);
router.get("/brands", projectController.getProjects);   

module.exports = router;
 