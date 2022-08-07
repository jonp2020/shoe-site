const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app.js");
const { get } = require("../routes/shoes.js");
const connectDB = require("../config/db.js");

beforeEach(async () => {
  await connectDB();
});

afterAll(() => {
  mongoose.connection.close();
});

describe("/api/", () => {
  describe("GET /api/shoes", () => {
    test("should respond with a 200 status code", () => {
      return request(app).get("/api/shoes").expect(200);
    });
  });
  describe("GET /api/shoes/womens", () => {
    test("should respond with a 200 status code", () => {
      return request(app).get("/api/shoes/womens").expect(200);
    });
    test("should return an array of objects", () => {
      return request(app)
        .get("/api/shoes/womens")
        .expect(200)
        .then((res) => {
          expect(res.body).toEqual(expect.any(Array));
        });
    });
  });
  describe("GET /api/shoes/mens", () => {
    test("should respond with a 200 status code", () => {
      return request(app).get("/api/shoes/mens").expect(200);
    });
  });
  describe("GET /api/shoes/kids", () => {
    test("should respond with a 200 status code", async () => {
      return request(app).get("/api/shoes/kids").expect(200);
    });
  });
  describe("GET /api/shoes/kidzzz", () => {
    test("should respond with a 404 status code", () => {
      return request(app).get("/api/shoes/kidzzz").expect(404);
    });
  });
});
