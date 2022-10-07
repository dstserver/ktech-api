import supertest from "supertest";

describe("app", function () {
  let server;
  beforeEach(() => {
    server = import("./index");
  });
  afterEach(() => {
    server.close();
  });
  it("/health", (done) => {
    request(server).get("/health").expect(200, done);
  });
  it("404", (done) => {
    request(server).get("/foobar").expect(404, done);
  });
});
