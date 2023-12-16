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

  const dataRows = data.split("\n");

  for (i = 0; i < dataRows.length; i++) {
    const firstRow = dataRows[i];
    const secondRow = dataRows[i + 1];

    if (secondRow === undefined) {
      console.log("Finished");
      return;
    }

    console.log("=== New Matrix===");

    const checkFirstRow = firstRow.split("");
    const checkSecondRow = secondRow.split("");

    console.log(checkFirstRow);
    console.log(checkSecondRow);

    let pointerA = 0;
    let pointerB = 0;

    let valueFirstRow = checkFirstRow[pointerA];
    let valueSecondRow = checkSecondRow[pointerB];
    checkFirstRow.forEach((value) => {
      // Check if value is number or symbol

      const valueFirstRowType = testSymbolorNumber(valueFirstRow);
      const valueSecondRowType = testSymbolorNumber(valueSecondRow);

      // keep track of number
      let numberChecked;
      let validNumber = false;

      // check if first row value is a number
      if (valueFirstRowType === "number") {
        numberChecked = valueFirstRow;
        // check if value underneath is symbol
        if (valueSecondRow != "symbol") {
          valueSecondRow = checkSecondRow[pointerB + 1];
          // check value under right
          if (valueSecondRow === "symbol") {
            // flag tue
            validNumber = true;
          }
        } else if (valueSecondRowType === "symbol") {
          validNumber = true;
        }
      }

      pointerA += 1;
      pointerB += 1;
    });

    // if true check 3 values row 2 for number or symbol
    //
    console.log(valueFirstRow, valueFirstRowType);
    console.log(valueSecondRow, valueSecondRowType);

    console.log("Number Checked", numberChecked);
    console.log("Valid Number", validNumber);

    return;
  }

  return false;
}

function testSymbolorNumber(value) {
  if (/^\d$/.test(value)) {
    return "number";
  } else if (value === ".") {
    return "period";
  } else {
    return "symbol";
  }
}

module.exports = { checkEngineSchematic };
