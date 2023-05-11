const express = require("express");

const governanceController = require("../controllers/governance-controller");

const router = express.Router();

router.post("/governance/create", governanceController.createGovernance);
router.get("/governance", governanceController.getGovernances);

module.exports = router;