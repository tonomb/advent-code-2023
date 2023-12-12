const fs = require("fs");

let calibrationData;

fs.readFile("01/data.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    calibrationData = data.split("\n");

    const totalCalibrationValue = calibrateCoordinates(calibrationData);
    console.log(`Total Calibration Value: ${totalCalibrationValue}`);
  }
});

function calibrateCoordinates(calibrationData) {
  let totalCalibrationValue = 0;

  calibrationData.forEach((coordinate) => {
    let calibrationValue;
    let firstDigit;
    let lastDigit;

    let coordinateText = coordinate.split("");

    let pointerB = coordinateText.length - 1;
    for (i = 0; i < coordinateText.length; i += 1) {
      let pointerA = i;
      let pointerB = coordinateText.length - 1 - i;

      if (!firstDigit && Number(coordinateText[pointerA])) {
        firstDigit = coordinateText[pointerA];
      }

      if (!lastDigit && Number(coordinateText[pointerB])) {
        lastDigit = coordinateText[pointerB];
      }
    }

    const total = Number(firstDigit) * 10 + Number(lastDigit);
    totalCalibrationValue += total;
  });

  return totalCalibrationValue;
}

module.exports = calibrateCoordinates;
