const express = require("express");

const repliesController = require("../controllers/replies-controller");

const router = express.Router();

router.post("/replies", repliesController.createReply);
router.get("/replies", repliesController.getReplies);
router.put("/replies", repliesController.updateReply);
router.delete("/replies/id", repliesController.deleteReply);
router.get("/last_reply", repliesController.getLastDate);
router.get("/replies/top_replies", repliesController.getTopReplies)
router.get("/replies/latest_replies", repliesController.getLatestReplies)

module.exports = router;