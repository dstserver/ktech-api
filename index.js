const express = require("express"),
  port = process.env.PORT,
  app = express()
    .get("/health", (_, res) => {
      res.send("OK");
    })
    .listen(port, () => {
      console.log(`listening on port ${port}`);
    });

export default app;
