const express = require("express"),
  multer = require("multer"),
  { execSync } = require("child_process"),
  upload = multer({ dest: "/tmp/uploads/" }),
  port = process.env.PORT,
  server = express()
    .get("/health", (_, res) => {
      res.send("OK");
    })
    .post("/convert", upload.single("file"), (req, res, next) => {
      const output = execSync(
        `./ktech ${req.file.path} /tmp/converted/`
      ).toString();
      if (output.includes("Loading non-TEX from")) {
        res.sendFile(`/tmp/converted/${req.file.filename}.tex`);
      } else if (output.includes("Loading KTEX from")) {
        res.sendFile(`/tmp/converted/${req.file.filename}.png`);
      } else {
        res.status(422);
      }
    })
    .listen(port, () => {
      console.log(`listening on port ${port}`);
    });

module.exports = server;
