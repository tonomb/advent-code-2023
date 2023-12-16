const fs = require("fs");

fs.readFile("03/mockData.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Error", error);
  } else {
    checkEngineSchematic(data);
  }
});

function checkEngineSchematic(data) {
  console.log(data);
  return false;
}

module.exports = { checkEngineSchematic };
