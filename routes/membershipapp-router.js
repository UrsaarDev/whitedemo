const express = require("express");

const membershipappController = require("../controllers/membershipapp-controller");

const router = express.Router();

router.post("/membershipapp", membershipappController.createMembershipApp);
router.get("/membershipapps", membershipappController.getMembershipApps);

module.exports = router;
