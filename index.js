const express = require("express"),
  multer = require("multer"),
  upload = multer({ dest: "uploads/" }),
  port = process.env.PORT,
  server = express()
    .get("/health", (_, res) => {
      res.send("OK");
    })
    .post("png2tex", upload.single("file"), (req, res, next) => {
      console.log(req.file, req.body);
    })
    .listen(port, () => {
      console.log(`listening on port ${port}`);
    });

module.exports = server;
