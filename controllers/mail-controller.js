const nodemailer = require("nodemailer");
const twitterOAuth = require("../utils");

generateAuthUrl = async (req, res) => {
  const callback = "http://localhost:3000/twitter_done/twitter-f9c812f97a0fcb4082337aeeb590bca66348603342e727860588cf3972ffb294"
  const sessionKey = "twitter-f9c812f97a0fcb4082337aeeb590bca66348603342e727860588cf3972ffb294"
  if (callback) {
    const state = sessionKey;
    const client = twitterOAuth.initClient(callback, state);

    const data = {
      state,
      authUrl: twitterOAuth.generateAuthURL(client, state),
    };
    console.log(data)

    res.status(200).send(data);
  } else {
    res.status(400);
  }
};

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
  generateAuthUrl,
};