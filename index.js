const express = require("express"),
  port = process.env.PORT,
  server = express()
    .get("/health", (_, res) => {
      res.send("OK");
    })
    .listen(port, () => {
      console.log(`listening on port ${port}`);
    });

module.exports = server;
