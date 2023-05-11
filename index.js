const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { connection, collections } = require("./db");
const projectRouter = require("./routes/audit_project-router");
const membershipappRouter = require("./routes/membershipapp-router");
const mainProRouter = require("./routes/main-pro-router");
const profileRouter = require("./routes/profile-router");
const replyRouter = require("./routes/replies-router");
const topicRouter = require("./routes/topics-router");
const annRouter = require("./routes/announcements-router");
const governanceRouter = require("./routes/governance-router");
const roleRouter = require("./routes/role-router");
const mailRouter = require("./routes/mail-router");

const app = express();
const apiPort = 4001;

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json());
app.use(cors());

connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error: ")
);

app.get("/", (req, res) => {
  res.send({ name: "White Hat DAO API", version: "v2.0" });
});

app.use("/api", projectRouter);
app.use("/api", membershipappRouter);
app.use("/api", mainProRouter);
app.use("/api", profileRouter);
app.use("/api", replyRouter);
app.use("/api", topicRouter);
app.use("/api", annRouter);
app.use("/api", governanceRouter);
app.use("/api", roleRouter);
app.use("/api", mailRouter);

app.listen(process.env.PORT || apiPort, () => {
  console.log(`Server running on port ${apiPort}`);
});
