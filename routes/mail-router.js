const express = require("express");

const mailController = require("../controllers/mail-controller");

const router = express.Router();

router.post("/mail", mailController.sendCode);
router.post("/twitterGenerateAuthUrl", mailController.generateAuthUrl)

module.exports = router;