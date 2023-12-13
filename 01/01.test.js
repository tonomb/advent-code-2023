const calibrateCoordinates = require("./1");

const calibrationData = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"];

test("Calibration value Mock Data", () => {
  expect(calibrateCoordinates(calibrationData)).toBe(142);
});
