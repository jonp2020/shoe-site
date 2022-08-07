const request = require("supertest");
const app = require("../app.js");
const { get } = require("../routes/shoes.js");

describe("/api/", () => {
  describe("GET /api/shoes", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/shoes").expect(200);
    });
  });
  describe("GET /api/shoes/womens", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/shoes/womens").expect(200);
    });
  });
  describe("GET /api/shoes/mens", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/shoes/mens").expect(200);
    });
  });
  describe("GET /api/shoes/kids", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/api/shoes/kids").expect(200);
    });
  });
});
