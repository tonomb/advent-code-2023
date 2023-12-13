const {
  checkPossibleGames,
  cleanInputData,
  minimumSetOfCubes,
} = require("./index");
const fs = require("fs").promises;

describe("02 Game Tests", () => {
  let data;

  beforeAll(async () => {
    data = await fs.readFile("02/mockData.txt", "utf-8");
  });

  test("Check Possible Games", () => {
    cleanData = cleanInputData(data);
    expect(checkPossibleGames(cleanData)).toBe(8);
  });

  test("Minimum Set of Cubes", () => {
    cleanData = cleanInputData(data);
    expect(minimumSetOfCubes(cleanData)).toBe(2286);
  });
});
