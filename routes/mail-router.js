const express = require("express");

const mailController = require("../controllers/mail-controller");

const router = express.Router();

router.post("/mail", mailController.sendCode);

module.exports = router;