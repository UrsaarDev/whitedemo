const express = require("express");

const annController = require("../controllers/announcements-controller");

const router = express.Router();

router.post("/announcements/create", annController.createAnn);
router.get("/announcements", annController.getAnns);
router.put("/announcements", annController.updateAnn);
router.delete("/announcements/delete", annController.deleteAnn);

module.exports = router;