const nodemailer = require("nodemailer");
const Mail = require("../models/mail-model");

sendCode = async (req, res) => {
  const { email } = req.body
  let transporter = nodemailer.createTransport({
    service: "gmail",
    debug: true,
    logger: true,
    auth: {
      user: "whitehatdoa@gmail.com",
      pass: "sjijhbtxbqiucmwe"
    }
  });

  const randomCode = Math.floor(100000 + Math.random() * 900000).toString()
  let message = {
    from: "whitehatdoa@gmail.com",
    to: email,
    subject: `Verification code`,
    html: randomCode
  }

  await transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent");
      return res.status(200).json({ success: true, code: randomCode });
    }
  })
};

module.exports = {
  sendCode,
};