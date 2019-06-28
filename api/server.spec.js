const request = require("supertest");

const server = require("./server");
const Games = require("../games/gamesModel");

describe("server.js", () => {
  it("should set testing environment", async () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

describe("GET /", () => {
  it("should return 200 OK", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  it("should return json", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("application/json");
  });

  it('should return message: "api running"', async () => {
    const res = await request(server).get("/");
    expect(res.body).toEqual({ message: "api running" });
  });
});

describe("GET /games", () => {
  it("should return 200 OK", async () => {
    const res = await request(server).get("/games");
    expect(res.status).toBe(200);
  });

  it("should return json", async () => {
    const res = await request(server).get("/games");
    expect(res.type).toBe("application/json");
  });
});

describe("POST /games", () => {
  it("should return status 201 when game added", async () => {
    await Games.insert({ title: "pacman", genre: "arcade" });
    const res = await request(server).post("/games");
    expect(res.status).toBe(201);
  });
});
