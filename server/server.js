const path = require("path");
const express = require("express");

const server = express();
const request = require("superagent");

server.use(express.json());
server.use(express.static(path.join(__dirname, "./public")));

server.get("/api/haveibeenpwned/:email", (req, res) => {
  const apiEndPoint = "https://haveibeenpwned.com/api/v2/breachedaccount/";
  request
    .get(apiEndPoint + req.params.email)
    .set("User-Agent", "Firefox")
    .then(apiRes => {
      console.log(apiRes)
      res.json(apiRes.body);

    });
});

module.exports = server;
