const fs = require("fs").promises;

const { checkEngineSchematic } = require("./index");

describe("03 Game Tests", () => {
  let data;

  beforeAll(async () => {
    data = await fs.readFile("03/mockData.txt", "utf-8");
  });

  test("Check Schematic", () => {
    expect(checkEngineSchematic(data)).toBe(true);
  });
});
