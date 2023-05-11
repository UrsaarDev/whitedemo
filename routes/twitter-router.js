const express = require("express");

const twitterController = require("../controllers/twitter-controller");

const router = express.Router();

router.post("/twitterGenerateAuthUrl", twitterController.generateAuthUrl);

module.exports = router;