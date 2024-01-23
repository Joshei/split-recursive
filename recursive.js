



class RecursiveClass{
  constructor() {

    this.maxCols = 7;
    this.counter = 0;

//this.nestedArray = [
//  ["h", "e", "l", "", "", "", "a"],
//  ["w", "o", "r", "l", "d"],
//];
//this.testArr= []
  }


splitAtIndex(arr, index) {
  const front = arr.slice(0, index);
  const back = arr.slice(index);
  return [front, back];
}

//let nestedArray = [
//  ["h", "e", "l", "l", "o"],
//  ["w", "o", "r", "l", "d"],
//];
//console.log(nestedArray);


//console.log({nestedArray]);


adjustForWordBreaks(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  iteration)
 {

  //alert("0");
  //return originalArr
  console.log("vp: ", verticalCursorPosition/10);
  console.log("front: ", frontPart);
  console.log("remainder: ", remainder);
  console.log("rowIndex: ",rowIndex);
  console.log("iteration:" , iteration)

  //if(rowIndex != verticalCursorPosition/10){
    //alert("here")
    console.log("oa:", originalArr)
    //originalArr = this.insertClean(originalArr, "Y", rowIndex + 1, 0);
      //originalArr = this.insertClean("y", "z", 2 , 0);
   // originalArr = "test1000"
    //return originalArr
  //}

  //if(originalArr[WIDTH-1] == "-"){
     // return originalArr
  //  }
  

  
  
  
  
 
  let consolePad = "  ".repeat(iteration); // console padding for more legible output
  
  ////////////////
  
  //word on last and first column
  console.log("fp: ", frontPart.at(-1));
  console.log("rem: ", remainder[0]);
  if (frontPart.at(-1) != "-" && remainder[0] != "-") {
    alert("here")
    ///////
    console.log("--startsearchhere--")
    //alert("broken word2");
    // a word has been broken
    console.log(consolePad, "a word was broken in the line break");
    //find last index of space in frontPart
    console.log(consolePad, "line to break up:");
    console.log(consolePad, frontPart);
    let lastSpaceIndex = frontPart.lastIndexOf("-") ;
    console.log(consolePad, "space index", lastSpaceIndex);

    lastSpaceIndex = lastSpaceIndex + 1
    if(lastSpaceIndex == 0){
      lastSpaceIndex = 7;
    }

    //split frontPart at space index
    let [trimmedLeft, wordPart] = this.splitAtIndex(frontPart, lastSpaceIndex);
    console.log(consolePad, "trimmed line split at word break:", trimmedLeft);
    console.log(consolePad, "partial word:", wordPart);
    //replace original row with the word-excluded part of the line

    //alert("check here2");

    ///////

    ///////

    originalArr[rowIndex] = trimmedLeft;
    console.log("trimmedLeft: ", trimmedLeft)
    //originalArr[rowIndex] = frontPart;
    
    console.log(
      consolePad,
      "replace original row with trimmed left part of line"
    );
    console.log(consolePad, this.snapshot(originalArr));
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
    console.log("oA9: ", originalArr);
    console.log("mr8: ", newRemainder)
      //alert("2");
    originalArr = this.insertClean(originalArr, newRemainder, rowIndex + 1, 0);
    
    
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
      return(originalArr)
    //////

  }

  /////////////////

  //.at(-1) lets us access last letter in trimmedLine
  if (frontPart.at(-1) == "-" || remainder[0] == "-") {
    //if line ends *without* breaking word (front ends with space, or remainder starts with one)

    console.log(consolePad, "no word broken on trimmed line");
    //the front half of that becomes originalArray[rowIndex]
    originalArr[rowIndex] = frontPart;
    console.log(consolePad, "replace original array row with trimmed line");
    console.log(consolePad, this.snapshot(originalArr));
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
      
      console.log("0a9: ", originalArr)
      console.log("0a1: ", remainder)
      console.log("11: ", rowIndex)
      console.log("fp9: ", frontPart)

      //if(remainder === "" ){
        
      
      //alert("yes")
      originalArr = this.insertClean(originalArr, remainder, rowIndex + 1, 0);
      //}
      //console.log(consolePad, "!! Return to iteration", iteration, "!!");
      //console.log(consolePad, "array after inserting remainder:");
      //console.log(consolePad, this.snapshot(originalArr));
      
      return originalArr;
    }
  } else {

    //alert("broken word");
    // a word has been broken
    console.log(consolePad, "a word was broken in the line break");
    //find last index of space in frontPart
    console.log(consolePad, "line to break up:");
    console.log(consolePad, frontPart);
    let lastSpaceIndex = frontPart.lastIndexOf("-") ;
    console.log(consolePad, "space index", lastSpaceIndex);

    lastSpaceIndex = lastSpaceIndex + 1
    if(lastSpaceIndex == 0){
      lastSpaceIndex = 7;
    }

    //split frontPart at space index
    let [trimmedLeft, wordPart] = this.splitAtIndex(frontPart, lastSpaceIndex);
    console.log(consolePad, "trimmed line split at word break:", trimmedLeft);
    console.log(consolePad, "partial word:", wordPart);
    //replace original row with the word-excluded part of the line

    //alert("check here");
    
    for(let i = 0; i<WIDTH ; i++){
      console.log("tl: ", trimmedLeft[i])
      if (trimmedLeft[i] === undefined)
      {
        //alert("here");
        trimmedLeft[i] = '-'
      }
    }
    
    originalArr[rowIndex] = trimmedLeft;
    console.log("trimmedLeft: ", trimmedLeft)
    //originalArr[rowIndex] = frontPart;
    
    console.log(
      consolePad,
      "replace original row with trimmed left part of line"
    );
    console.log(consolePad, this.snapshot(originalArr));
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
    console.log("oA9: ", originalArr);
    console.log("mr8: ", newRemainder)
      //alert("2");
    originalArr = this.insertClean(originalArr, newRemainder, rowIndex + 1, 0);
    
    
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
    return originalArr;
  }
}

//////////

seperateOnRightBoundry(originalArr, insertedArr, rowIndex, colIndex){

  console.log("ci: ", colIndex)
console.log("1d: ", originalArr[colIndex][WIDTH-1])
console.log("2d: ", originalArr[colIndex + 1][0])

if(originalArr[colIndex][WIDTH-1] === "z"){
  alert("z");
}

if(originalArr[colIndex + 1][0] === "z"){
  alert("x");
}

//check for word caused by word being across boundries
if((originalArr[colIndex][WIDTH-1] !== "-") && (originalArr[colIndex + 1][0] !== "-")){
  
  //does word fit on next row
  
  //move text to next row

  //get text from last - to column 6

  //let consolePad = "  ".repeat(iteration); // console padding for more legible output  
  let targetRow = originalArr[colIndex];
  console.log("-targetRow: ", targetRow)
  console.log("-in here")
  //no backpiece
  let [frontPiece, backPiece] = this.splitAtIndex(targetRow, WIDTH);
  console.log("frontpiece1: ", frontPiece)
  console.log("backPiece1:", backPiece)
  //     -1
  //2
  let lastSpaceIndex = frontPiece.lastIndexOf("-") ;

  lastSpaceIndex =lastSpaceIndex + 1
  if(lastSpaceIndex == 0){
    lastSpaceIndex = 6
  }
  console.log("lastSpaceIndex: ", lastSpaceIndex)
  //   backPiece2 = "aaa"  // is on first row 
  let [frontPiece2, backPiece2] = this.splitAtIndex(frontPiece, lastSpaceIndex);

  console.log("frontpiece2: ", frontPiece2)
  console.log("backPiece2: ", backPiece2)
  
  let combinedArr = [...frontPiece2 , ...originalArr[colIndex+1]];
  
  
  originalArr[colIndex] = frontPiece2;
  originalArr[colIndex+1] = backPiece2
  /*
  let combinedArr = [...frontPiece2];
  console.log("combinedArr: ", combinedArr)
  
  //console.log("combined: ", combinedArr)
  originalArr[rowIndex] = combinedArr ;
  console.log("originalArr: ", originalArr)
  //whole line needs proceeding witj aaa 
  let targetRow2 = originalArr[rowIndex+1]
  console.log("targetRow2: ", targetRow2)
  //with proceeding, "aaa"
  let nextRow = [...backPiece2, ...targetRow2]
  console.log("nextRow: ", nextRow)
  
  //does row still fit on next row - does?
  if (nextRow.length <= this.maxCols) {
    originalArr[rowIndex] = nextRow;
    console.log("originalArr: ", originalArr[rowIndex])
    console.log("-after row insertion:", this.snapshot(originalArr));
    */
  }
  //line needs splitting
  else{
    /////////
    console.log("-need to split lines");
    //split the combinedArr to have length of maxCols
    const [trimmedLine, remainder] = this.splitAtIndex(nextRow, this.maxCols);
    console.log("-trimmedLine: ", trimmedLine);
    console.log("-remainder: ", remainder);
    /////////
    originalArr = this.adjustForWordBreaks(
      trimmedLine,
      remainder,
      originalArr,
      rowIndex,
      innerCounter
    );
    console.log("originalArr2: ", originalArr)
    /////////
  }

  
    return originalArr



}



/////////
insertNewArr(originalArr, insertedArr, rowIndex, colIndex) {
  

//else{
//  console.log("in here2")
//}


  
 
  //if(originalArr[WIDTH-1] == "-"){
  //  return originalArr
  //}

  //originalArrArr = "X" 
  //if(verticalCursorPosition/10 === colIndex)
  //if(originalArr[rowIndex] ===  && )
  this.counter++; //global counter can only ever contain the largest iteration number
  let innerCounter = this.counter; //locally declared counter is scoped to *this* iteration of the function
  let consolePad = "  ".repeat(innerCounter);
  console.log(consolePad, "-------------");
  console.log(consolePad, "ITERATION ", this.insertCleancounter);
  console.log(consolePad, "***!!!start of insertNewArr function!!!***");
  console.log(consolePad, "--( originalArr");
  console.log(consolePad, this.snapshot(originalArr));
  console.log(consolePad, "insertedArr");
  console.log(consolePad, insertedArr);
  console.log(consolePad, "row:", rowIndex, "col", colIndex, ")--");
  let targetRow = originalArr[rowIndex];

  if (targetRow) {
    console.log("tr: ", targetRow)
    //assuming there's a row here already
    console.log(
      consolePad,
      "inserting array into an existing row of originalArr"
    );
    //split the original row at that index into "front" & "back" pieces
    const [frontPiece, backPiece] = this.splitAtIndex(targetRow, colIndex);
    console.log(consolePad, "frontPiece", frontPiece);
    console.log(consolePad, "backpiece", backPiece);
    //make a combined array with insertedarr sandwiched in there
////////////////////////!!!!!!!!!!!!!!!!!
    let combinedArr= ""
    //if(originalArr[WIDTH-1] === '-'){
    //  combinedArr = [...frontPiece, ...backPiece]
    //
    //
    //}else{
    
      combinedArr = [...frontPiece, ...insertedArr, ...backPiece];
    //}
    console.log(consolePad, "combined array:");
    console.log(consolePad, combinedArr);

    if (combinedArr.length <= this.maxCols) {
      //the new array fits on one line

      console.log(consolePad, "new array fits on one line");
      //overwrite insertedArr[rowIndex] with combined array
      originalArr[rowIndex] = combinedArr;
      console.log(consolePad, "after row insertion:", this.snapshot(originalArr));
    } else {
      //new array too long to fit on one line
      console.log(consolePad, "need to split lines");
      //split the combinedArr to have length of maxCols
      const [trimmedLine, remainder] = this.splitAtIndex(combinedArr, this.maxCols);
      console.log(consolePad, "trimmedLine", trimmedLine);
      console.log(consolePad, "remainder", remainder);
      //if neither â€œtrimmedLine ends with spaceâ€ nor â€œremainder starts with spaceâ€
      //if(!(trimmedLine.at(-1) == '-' || remainder[0]=='-') ){

      //can't make the final recursive call until word adjustments have been made
      //alert("2")
      console.log("after: ", originalArr);
      //alert("hereA");
      
      
      //is here
      originalArr = this.adjustForWordBreaks(
        trimmedLine,
        remainder,
        originalArr,
        rowIndex,
        innerCounter
      );

      
      console.log("1a: ", rowIndex)
      console.log("2a: " , innerCounter)
      
    }
  } else {
    //adding a whole new row to the end of originalArr
    console.log(
      consolePad,
      "adding inserted array to end of new array by creating a new line"
    );
    //if we're adding onto the end of newArray, just push the inserted arr as a new row
    if (insertedArr.length <= this.maxCols) {
      //new row fits on one line

      console.log(consolePad, "new inserted row is within width constraints");
      // push the inserted arr as a new row
      originalArr.push(insertedArr);
      console.log(consolePad, "original array with new inserted line appended");
      console.log(consolePad, this.snapshot(originalArr));
    } else {
      //new row is too long

      console.log(consolePad, "inserted array is too long, break into lines");

      //split inserted line at max col width
      const [nextLine, remainder] = this.splitAtIndex(insertedArr, this.maxCols);
      console.log(consolePad, "line to add immediately:");
      console.log(consolePad, nextLine);
      console.log(
        consolePad,
        "line to process and then add to the next row after this one"
      );
      console.log(consolePad, remainder);
      //can't make the final recursive call until word adjustments have been made
      
      //alert("1");
      originalArr = this.adjustForWordBreaks(
        nextLine,
        remainder,
        originalArr,
        rowIndex,
        innerCounter
      );

      if(originalArr == -1){
        //return
      }
    }
  }
  console.log(consolePad, "**!!END OF ITERATION ", innerCounter, "!!**");
  console.log(consolePad, this.snapshot(originalArr));
  console.log(consolePad, "-------------");
  seperateOnRightBoundry(originalArr, insertedArr, rowIndex, colIndex)
  return originalArr;


}

snapshot(original) {
  //creates a deep copy to capture array's state at that moment
  let newArray = original.map((oldRow) => {
    return [...oldRow];
  });
  console.log("or: ",newArray)
  return newArray;
}

//insert into a clean duplicate bc it's nicer
insertClean(originalArray, insertedArray, rowIndex, colIndex) {
  let newArray = this.snapshot(originalArray);
  console.log("oa2: ", originalArray)
  return this.insertNewArr(newArray, insertedArray, rowIndex, colIndex);
}

/* TEST SECTION */
}
//console.log({testArr});
//testArr = this.insertClean(
//  this.nestedArray,
//  ["x" ],
//  0,
//  6
//);



//console.log("insert [x,y,z,'-',l,m,n,o,p] at [0][2]");


//console.log({testArr});

