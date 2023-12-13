const fs = require("fs");

fs.readFile("02/data.txt", "utf-8", (error, data) => {
  if (error) {
    console.error("Error:", error);
  } else {
    const cleanData = cleanInputData(data);
    const total = checkPossibleGames(cleanData);
    console.log(`The Sum of the Ids is: ${total}`);
  }
});

function checkPossibleGames(inputData) {
  let redCubes = 12;
  let greenCubes = 13;
  let blueCubes = 14;

  let totalInput = 0;

  inputData.forEach((game) => {
    gameRoundNumber = game.split(":")[0].split(" ")[1];
    gameRoundSets = game.split(":")[1];
    gameSets = gameRoundSets.split(";");

    let roundsPassed = 0;

    let gamePassed = true;

    gameSets.forEach((roundPlayed) => {
      const roundPlayedObject = createRoundObject(roundPlayed);
      if (
        roundPlayedObject.blue > blueCubes ||
        roundPlayedObject.red > redCubes ||
        roundPlayedObject.green > greenCubes
      ) {
        if (gamePassed) {
          gamePassed = false;
        }
      }
    });
    if (gamePassed) {
      totalInput += Number(gameRoundNumber);
    }
  });

  return totalInput;
}

function cleanInputData(inputData) {
  const cleanData = inputData.split("\n");
  return cleanData;
}

function createRoundObject(roundInput) {
  let roundObject = {};
  const cubesPlayed = roundInput.split(",");
  // For each cube played check if blue was played
  cubesPlayed.forEach((cubeColor) => {
    if (cubeColor.includes("blue")) {
      // if true, filter the number
      const number = cubeColor.match(/\d+/g);
      roundObject.blue = Number(number[0]);
    }
    if (cubeColor.includes("red")) {
      // if true, filter the number
      const number = cubeColor.match(/\d+/g);
      roundObject.red = Number(number[0]);
    }
    if (cubeColor.includes("green")) {
      // if true, filter the number
      const number = cubeColor.match(/\d+/g);
      roundObject.green = Number(number[0]);
    }
  });

  // create object with blue: number
  return roundObject;
}

module.exports = { checkPossibleGames, cleanInputData };
