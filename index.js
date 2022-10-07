import express from "express";

const port = process.env.PORT,
  app = express()
    .get("/health", (_, res) => {
      res.send("OK");
    })
    .listen(port, () => {
      console.log(`listening on port ${port}`);
    });
