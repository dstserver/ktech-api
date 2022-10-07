const supertest = require("supertest");

console.log("test macro");

describe("server", function () {
  let server;
  beforeEach(() => {
    server = require("./index");
  });
  afterEach(() => {
    server.close();
  });
  it("/health", (done) => {
    supertest(server).get("/health").expect(200, done);
  });
  it("not found", (done) => {
    supertest(server).get("/foobar").expect(404, done);
  });
});
