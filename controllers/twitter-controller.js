// const twitterOAuth = require("../utils");

generateAuthUrl = async (req, res) => {
  const { callback, sessionKey } = req.body
  if (callback) {
    const state = sessionKey;
    // const client = twitterOAuth.initClient(callback, state);

    const data = {
      state,
      authUrl: "twitterOAuth.generateAuthURL(client, state)",
    };
    console.log(data)

    res.status(200).send(data);
  } else {
    res.status(400);
  }
};

module.exports = {
  generateAuthUrl,
};