const express = require("express");
const server = express(); //create instance of express server
const CORS = require("cors");
const helmet = require("helmet");

const proRouter = require("../routes-models/projects/project-routes");
const tecRouter = require("../routes-models/techs/techs-router");
const techProjRouter = require("../routes-models/techproj/techInProj-router");
const ptRouter = require("../routes-models/pt/pt-router");
const techsProjectRouter = require("../routes-models/techsProject/techsProject-router");
const twilioRouter = require("../routes-models/Twilio/twilio-router");
const mailerRouter = require("../routes-models/mailer/mailer-router")
const authRouter = require("../routes-models/auth/auth-router")


server.use(express.json()); // allows express to read .json from body of request
server.use(CORS());
server.use(helmet());

server.use("/projects", proRouter);
server.use("/tech", tecRouter);
server.use("/techInProject", techProjRouter);
server.use("/pt", ptRouter);
server.use("/techsProject", techsProjectRouter);
server.use("/twilio", twilioRouter);
server.use("/mailer", mailerRouter)
server.use("/auth", authRouter)


server.get("/", (req, res) => {
  res.status(200).json({ hello: process.env.MOTD });
});

module.exports = server;
