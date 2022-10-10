const express = require("express"),
  multer = require("multer"),
  { execSync } = require("child_process"),
  upload = multer({ dest: "/tmp/uploads/" }),
  port = process.env.PORT,
  server = express()
    .get("/health", (_, res) => {
      res.send("OK");
    })
    .post("/png2tex", upload.single("file"), (req, res, next) => {
      execSync(`./ktech ${req.file.path} /tmp/converted/`);
      res.sendFile(`/tmp/converted/${req.file.path}.tex`);
    })
    .listen(port, () => {
      console.log(`listening on port ${port}`);
    });

module.exports = server;
