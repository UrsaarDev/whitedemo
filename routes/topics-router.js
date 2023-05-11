const express = require("express");

const topicsController = require("../controllers/topics-controller");

const router = express.Router();

router.post("/topics", topicsController.createTopic);
router.get("/topics", topicsController.getTopics);
router.put("/topics", topicsController.updateTopic);
router.delete("/topics/id", topicsController.deleteTopic);
router.get("/topics/top_topics", topicsController.getTopTopics);
router.get("/topics/latest_topics", topicsController.getLatestTopics);

module.exports = router;