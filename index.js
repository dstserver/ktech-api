const express = require("express"),
  multer = require("multer"),
  upload = multer({ dest: "/tmp/uploads/" }),
  port = process.env.PORT,
  server = express()
    .get("/health", (_, res) => {
      res.send("OK");
    })
    .post("/png2tex", upload.single("file"), (req, res, next) => {
      console.log(req.file, req.body);
      res.send("Done");
    })
    .listen(port, () => {
      console.log(`listening on port ${port}`);
    });

module.exports = server;
