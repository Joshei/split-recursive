const maxCols = 5;

function splitAtIndex(arr, index) {
  const front = arr.slice(0, index);
  const back = arr.slice(index);
  return [front, back];
}

function hasBrokenWord(frontArray, backArray){
//does the backarray start with a space character?
// if not, no broken word
  
}

let gridArray = [
  ["a", "b", "c"],
  ["d", "e", "f", "g"],
];
console.log(gridArray);

function insertNewArr(grid, insertedArr, rowIndex, colIndex) {
  let targetRow = grid[rowIndex];
  //assuming there's a row here already
  if (targetRow) {
    console.log("inserting array into an existing row of grid")
    //split the original row at that index into "front" & "back" pieces
    const [frontPiece, backPiece] = splitAtIndex(targetRow, colIndex);
    console.log("frontPiece", frontPiece)
    console.log("backpiece", backPiece);
    //make a combined array with insertedarr sandwiched in there
    const combinedArr = [...frontPiece, ...insertedArr, ...backPiece];
    console.log("combined array:", combinedArr)

    
    
    
    if (combinedArr.length <= maxCols) {
      	console.log("new array fits on one line")
      //the new array fits on one line
      //overwrite insertedArr[rowIndex] with combined array
      grid[rowIndex] = combinedArr;
      console.log("after row insertion:", grid)
    } else {
      console.log("need to split lines")
      //split the combinedArr to have length of maxCols
      const [trimmedLine, remainder] = splitAtIndex(combinedArr, maxCols);
		console.log("trimmedLine", trimmedLine)
      console.log("remainder", remainder);
      //if neither “trimmedLine ends with space” nor “remainder starts with space”
      //if(!(trimmedLine.at(-1) == '-' || remainder[0]=='-') ){
      
      //if line ends *without* breaking word .at -1 lets us access last letter in trimmedLine
      if(trimmedLine.at(-1) == '-' || remainder[0]=='-' ){
       console.log("no word broken on trimmed line")
         //the front half of that becomes griday[rowIndex]
        grid[rowIndex] = trimmedLine;
		    console.log("replace original array row with trimmed line")
        console.log(grid)
        //if there's anything left over, push it into position 0 of the next row
        if (remainder.length > 0) {
          console.log("trimmed line had remainder afterwards")
          grid = insertNewArr(grid, remainder, rowIndex + 1, 0);
          console.log("array after inserting remainder:", grid);
        }
        

        



      } else { // a word has been broken
        console.log("a word was broken in the line break")
         //find last index of space in trimmedLine
        let lastSpaceIndex = trimmedLine.lastIndexOf('-')
		//split trimmedLine at space index
        let [trimmedLeft, wordPart] = splitAtIndex(lastSpaceIndex)
        console.log("trimmed line split at word break:", trimmedLeft)
        console.log("partial word:", wordPart)
        grid[rowIndex] = trimmedLeft;
        console.log("replace original row with trimmed left part of line")
        console.log(grid)
		//take back of that split, tack it to the beginning of "remainder" array
        let newRemainder = [...wordPart, ...remainder]
        console.log("added word part to remainder", newRemainder);
      	// assign griday[row + 1] to recursive call (pass remainder to insertNewArr again)
         grid = insertNewArr(grid, remainder, rowIndex + 1, 0);
        console.log("array after inserting remainder with repaired word");
        console.log(grid)
      }
    }
  } else {
    console.log("adding inserted array to end of new array by creating a new line")
    //if we're adding onto the end of newArray, just push the inserted arr as a new row
    if (insertedArr.length <= maxCols) {
      console.log("new inserted row is within width constraints")
      grid.push(insertedArr);
      console.log("original array with new inserted line appended")
      console.log(grid)
    } else {
      console.log("inserted array is too long, break into lines")
      //if insertedArr is longer than max columns, we have to break it up
      const [nextLine, remainder] = splitAtIndex(insertedArr, maxCols);
      console.log("line to add immediately:", nextLine)
      console.log("line to process and then add to the next row after this one", remainder)
      grid.push(nextLine);
      console.log("added next line to end of array")
      console.log(grid)
      grid = insertNewArr(grid, remainder, grid.length, 0);
      console.log("original array with remainder added on lines below")
      console.log(grid)
    }
  }
  console.log("return modified array")
  console.log(grid)
  return grid;
}

//insert into a clean duplicate bc it's nicer
function insertClean(griday, insertedArray, rowIndex, colIndex) {
  let newArray = griday.map((oldRow) => {
    return [...oldRow];
  });
  return insertNewArr(newArray, insertedArray, rowIndex, colIndex);
}


console.log("insert [x,y]");
const newArr = insertClean(gridArray, ["x", "y"], 0, 2);
console.log(newArr);
console.log("insert [x,y,z]");
const testArr = insertClean(
  gridArray,
  ["x", "y", "z", "l", "m", "n", "o", "p", "q"],
  0,
  2
);
console.log(testArr);