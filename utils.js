const { auth } = require("twitter-api-sdk");

const TIMEOUT_IN_MS = 60000; // 60000ms = 60s
const TIMEOUT_AUTHED_IN_MS = 10000; // 10000ms = 10s

let clients = {};
let timeoutDel= {};

initClient = (callback, sessionKey) => {
    clients[sessionKey] = new auth.OAuth2User({
        client_id: process.env.TWITTER_CLIENT_ID,
        client_secret: process.env.TWITTER_CLIENT_SECRET,
        callback: callback,
        scopes: ["tweet.read", "users.read"],
    });
  
    // stope the clients from causing a memory leak
    setTimeout(() => {
      deleteClient(sessionKey);
    }, TIMEOUT_IN_MS);
  
    return clients[sessionKey];
};

generateAuthURL = (client, state) => {
    return client.generateAuthURL({
      state,
      code_challenge_method: "s256",
    });
};

deleteClient = (state) => {
    timeoutDel[state] = setTimeout(() => {
        delete clients[state];
        delete timeoutDel[state];
    }, TIMEOUT_AUTHED_IN_MS);
};

module.exports = {
    generateAuthURL,
    initClient,
};  