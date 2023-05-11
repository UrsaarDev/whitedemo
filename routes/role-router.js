const express = require("express");

const roleController = require("../controllers/role-controller");

const router = express.Router();

router.get("/role", roleController.getRoles);
router.post("/role", roleController.createRole);
router.delete("/role", roleController.deleteRole);

module.exports = router;