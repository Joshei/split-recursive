const maxCols = 7;
let counter = 0;
function splitAtIndex(arr, index) {
  const front = arr.slice(0, index);
  const back = arr.slice(index);
  return [front, back];
}

let nestedArray = [
  ["h", "e", "l", "l", "o", "-"],
  ["w", "o", "r", "l", "d"],
];
console.log(nestedArray);

function adjustForWordBreaks(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  iteration
) {
  let consolePad = "  ".repeat(iteration); // console padding for more legible output
  //.at(-1) lets us access last letter in trimmedLine
  if (frontPart.at(-1) == "-" || remainder[0] == "-") {
    //if line ends *without* breaking word (front ends with space, or remainder starts with one)

    console.log(consolePad, "no word broken on trimmed line");
    //the front half of that becomes originalArray[rowIndex]
    originalArr[rowIndex] = frontPart;
    console.log(consolePad, "replace original array row with trimmed line");
    console.log(consolePad, snapshot(originalArr));
    //if there's anything left over, push it into position 0 of the next row
    if (remainder.length > 0) {
      console.log(consolePad, "trimmed line had remainder afterwards");
      console.log(consolePad, remainder);
      console.log(
        consolePad,
        "!! Recursive call from level ",
        iteration,
        " to level",
        iteration + 1,
        " !!"
      );
      //make the recursive call to add the remainder to the next line
      originalArr = insertClean(originalArr, remainder, rowIndex + 1, 0);
      console.log(consolePad, "!! Return to iteration", iteration, "!!");
      console.log(consolePad, "array after inserting remainder:");
      console.log(consolePad, snapshot(originalArr));
      return originalArr;
    }
  } else {
    // a word has been broken
    console.log(consolePad, "a word was broken in the line break");
    //find last index of space in frontPart
    console.log(consolePad, "line to break up:");
    console.log(consolePad, frontPart);
    let lastSpaceIndex = frontPart.lastIndexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    //split frontPart at space index
    let [trimmedLeft, wordPart] = splitAtIndex(frontPart, lastSpaceIndex);
    console.log(consolePad, "trimmed line split at word break:", trimmedLeft);
    console.log(consolePad, "partial word:", wordPart);
    //replace original row with the word-excluded part of the line
    originalArr[rowIndex] = trimmedLeft;
    console.log(
      consolePad,
      "replace original row with trimmed left part of line"
    );
    console.log(consolePad, snapshot(originalArr));
    //take word fragment, tack it to the beginning of "remainder" array
    let newRemainder = [...wordPart, ...remainder];
    console.log(consolePad, "added word part to remainder");
    console.log(consolePad, newRemainder);
    console.log(
      consolePad,
      "!! Recursive call from level ",
      iteration,
      " to level",
      iteration + 1,
      " !!"
    );
    //make the recursive call to add the new remainder to the next line
    originalArr = insertClean(originalArr, newRemainder, rowIndex + 1, 0);
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, snapshot(originalArr));
    return originalArr;
  }
}

function insertNewArr(originalArr, insertedArr, rowIndex, colIndex) {
  counter++; //global counter can only ever contain the largest iteration number
  let innerCounter = counter; //locally declared counter is scoped to *this* iteration of the function
  let consolePad = "  ".repeat(innerCounter);
  console.log(consolePad, "-------------");
  console.log(consolePad, "ITERATION ", counter);
  console.log(consolePad, "***!!!start of insertNewArr function!!!***");
  console.log(consolePad, "--( originalArr");
  console.log(consolePad, snapshot(originalArr));
  console.log(consolePad, "insertedArr");
  console.log(consolePad, insertedArr);
  console.log(consolePad, "row:", rowIndex, "col", colIndex, ")--");
  let targetRow = originalArr[rowIndex];

  if (targetRow) {
    //assuming there's a row here already
    console.log(
      consolePad,
      "inserting array into an existing row of originalArr"
    );
    //split the original row at that index into "front" & "back" pieces
    const [frontPiece, backPiece] = splitAtIndex(targetRow, colIndex);
    console.log(consolePad, "frontPiece", frontPiece);
    console.log(consolePad, "backpiece", backPiece);
    //make a combined array with insertedarr sandwiched in there
    const combinedArr = [...frontPiece, ...insertedArr, ...backPiece];
    console.log(consolePad, "combined array:");
    console.log(consolePad, combinedArr);

    if (combinedArr.length <= maxCols) {
      //the new array fits on one line

      console.log(consolePad, "new array fits on one line");
      //overwrite insertedArr[rowIndex] with combined array
      originalArr[rowIndex] = combinedArr;
      console.log(consolePad, "after row insertion:", snapshot(originalArr));
    } else {
      //new array too long to fit on one line
      console.log(consolePad, "need to split lines");
      //split the combinedArr to have length of maxCols
      const [trimmedLine, remainder] = splitAtIndex(combinedArr, maxCols);
      console.log(consolePad, "trimmedLine", trimmedLine);
      console.log(consolePad, "remainder", remainder);
      //if neither â€œtrimmedLine ends with spaceâ€ nor â€œremainder starts with spaceâ€
      //if(!(trimmedLine.at(-1) == '-' || remainder[0]=='-') ){

      //can't make the final recursive call until word adjustments have been made
      originalArr = adjustForWordBreaks(
        trimmedLine,
        remainder,
        originalArr,
        rowIndex,
        innerCounter
      );
    }
  } else {
    //adding a whole new row to the end of originalArr
    console.log(
      consolePad,
      "adding inserted array to end of new array by creating a new line"
    );
    //if we're adding onto the end of newArray, just push the inserted arr as a new row
    if (insertedArr.length <= maxCols) {
      //new row fits on one line

      console.log(consolePad, "new inserted row is within width constraints");
      // push the inserted arr as a new row
      originalArr.push(insertedArr);
      console.log(consolePad, "original array with new inserted line appended");
      console.log(consolePad, snapshot(originalArr));
    } else {
      //new row is too long

      console.log(consolePad, "inserted array is too long, break into lines");

      //split inserted line at max col width
      const [nextLine, remainder] = splitAtIndex(insertedArr, maxCols);
      console.log(consolePad, "line to add immediately:");
      console.log(consolePad, nextLine);
      console.log(
        consolePad,
        "line to process and then add to the next row after this one"
      );
      console.log(consolePad, remainder);
      //can't make the final recursive call until word adjustments have been made
      originalArr = adjustForWordBreaks(
        nextLine,
        remainder,
        originalArr,
        rowIndex,
        innerCounter
      );
    }
  }
  console.log(consolePad, "**!!END OF ITERATION ", innerCounter, "!!**");
  console.log(consolePad, snapshot(originalArr));
  console.log(consolePad, "-------------");
  return originalArr;
}

function snapshot(original) {
  //creates a deep copy to capture array's state at that moment
  let newArray = original.map((oldRow) => {
    return [...oldRow];
  });
  return newArray;
}

//insert into a clean duplicate bc it's nicer
function insertClean(originalArray, insertedArray, rowIndex, colIndex) {
  let newArray = snapshot(originalArray);

  return insertNewArr(newArray, insertedArray, rowIndex, colIndex);
}

/* TEST SECTION */
console.log("insert [x,y,z,'-',l,m,n,o,p] at [0][2]");
const testArr = insertClean(
  nestedArray,
  ["x", "y", "z", "-", "l", "m", "n", "-", "p", "q"],
  0,
  2
);
console.log(testArr);