



class RecursiveClass{
  constructor() {

    this.maxCols = 7;
    this.counter = 0;
    this.initialRow = 0;
    this.initialColumn = 0;

//this.nestedArray = [
//  ["h", "e", "l", "", "", "", "a"],
//  ["w", "o", "r", "l", "d"],
//];
//this.testArr= []
  }

//index at 0 : 302
splitAtIndex(arr, index) {
  
  console.log("index: ", index)
  console.log("arr: ", arr)
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


/////////////

adjustForWordBreaks(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  iteration
) {

  //alert("1");
  let consolePad = "  ".repeat(iteration); // console padding for more legible output
  //.at(-1) lets us access last letter in trimmedLine
  if (frontPart.at(-1) == "-" || remainder[0] == "-") {
    //if line ends *without* breaking word (front ends with space, or remainder starts with one)
    alert("3")
    console.log(consolePad, "no word broken on trimmed line");
    //the front half of that becomes originalArray[rowIndex]
    originalArr[rowIndex] = frontPart;
    console.log(consolePad, "replace original array row with trimmed line");
    
    originalArr[rowIndex] = frontPart
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
      originalArr = this.insertClean(false,originalArr, remainder, rowIndex + 1, 0);
      console.log(consolePad, "!! Return to iteration", iteration, "!!");
      console.log(consolePad, "array after inserting remainder:");
      console.log(consolePad, this.snapshot(originalArr));
      return originalArr;
    }
  } else {

    /*
    alert("2")
    // a word has been broken
    console.log(consolePad, "a word was broken in the line break");
    //find last index of space in frontPart
    console.log(consolePad, "line to break up:");
    console.log(consolePad, frontPart);
    let lastSpaceIndex = frontPart.lastIndexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    //split frontPart at space index
    let [trimmedLeft, wordPart] = this.splitAtIndex(frontPart, lastSpaceIndex);
    console.log(consolePad, "trimmed line split at word break:", trimmedLeft);
    console.log(consolePad, "partial word:", wordPart);
    //replace original row with the word-excluded part of the line
    originalArr[rowIndex] = trimmedLeft;
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
    originalArr = this.insertClean(false, originalArr, newRemainder, rowIndex + 1, 0);
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));

    */

    //////////

    
//seperateOnRightBoundry(originalArr, insertedArr, rowIndex, colIndex){
 
  console.log("oa4: ",originalArr)
  console.log("ci: ", colIndex)
//console.log("1d: ", originalArr[colIndex][5])
//console.log("2d: ", originalArr[colIndex + 1][0])

//if(originalArr[colIndex][WIDTH-1] === "z"){
//  alert("z");
//}

//if(originalArr[colIndex + 1][0] === "z"){
//  alert("x");
//}

//check for word caused by word being across boundries
if((originalArr[colIndex][WIDTH-1] !== "-") && (originalArr[colIndex + 1][0] !== "-")){
  
  alert("is here")
  //does word fit on next row
  
  //move text to next row

  //get text from last - to column 6

  //let consolePad = "  ".repeat(iteration); // console padding for more legible output  
  let targetRow = originalArr[colIndex];
  console.log("-targetRow: ", targetRow)
  console.log("-in here")
  //no backpiece
  let [frontPiece, backPiece] = this.splitAtIndex(targetRow, WIDTH-1);
  console.log("frontpiece1: ", frontPiece)
  console.log("backPiece1:", backPiece)
  //     -1
  //2
  let lastSpaceIndex = frontPiece.lastIndexOf("-") ;

  lastSpaceIndex =lastSpaceIndex + 1
  if(lastSpaceIndex == 0){
    lastSpaceIndex = 7
  }
  console.log("lastSpaceIndex: ", lastSpaceIndex)
  
  //   backPiece2 = "aaa"  // is on first row 
  let [frontPiece2, backPiece2] = this.splitAtIndex(frontPiece, lastSpaceIndex);

  console.log("frontpiece2: ", frontPiece2)
  console.log("backPiece2: ", backPiece2)
  
  let combinedArr = [...frontPiece2 , ...originalArr[colIndex+1]];

  let [frontPiece3, backPiece3] = this.splitAtIndex(combinedArr, lastSpaceIndex);

  console.log("frontpiece3: ", frontPiece3)
  console.log("backPiece3: ", backPiece3)
  

  
  
  let trimmedLine = frontPiece3;
  let remainder = backPiece3

  //checks row for null and changes to dashes
  //this.fillNullWithDash(originalArr)


    /////////


    ////////////

    //originalArr = this.insertClean(false, originalArr, newRemainder, rowIndex + 1, 0);
    originalArr = this.insertClean(false, originalArr, remainder, rowIndex + 1, colIndex);
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));

    /////////
    return originalArr;
  }
//}


/////////////

adjustForWordBreaks2(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  iteration)
 {

  alert("0");
  return originalArr
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
   // alert("here")
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

    //look at this - two of these
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



     // 
     if(this.initialRow == rowIndex){
      
    originalArr = this.insertClean(false, originalArr, newRemainder, rowIndex + 1, 0);
     }
    
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
      return (originalArr)
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
      originalArr = this.insertClean(false, originalArr, remainder, rowIndex + 1, 0);
      //}
      //console.log(consolePad, "!! Return to iteration", iteration, "!!");
      //console.log(consolePad, "array after inserting remainder:");
      console.log(consolePad, this.snapshot(originalArr));
      
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

    //look at this = teo of these
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
    originalArr = this.insertClean(false, originalArr, newRemainder, rowIndex, 0);
    
    
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
    return originalArr;
  }
}

fillNullWithDash(arrayToChange)
{
  
for(let i = 0; i<WIDTH-1 ; i++){
  console.log("tl: ", arrayToChange[i])
  if (arrayToChange[i] === undefined)
  {
    //alert("here");
    arrayToChange[i] = '-'
  }
}
}



/////////
insertNewArr(originalArr, insertedArr, rowIndex, colIndex) {
  
//alert("99")
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
  console.log(consolePad, "row9:", rowIndex, "col", colIndex, ")--");
  let targetRow = originalArr[rowIndex];

  if (targetRow) {
    console.log("tr: ", targetRow)
    //assuming there's a row here already
    console.log(
      consolePad,
      "inserting array into an existing row of originalArr"
    );
    //split the original row at that index into "front" & "back" pieces
    console.log("tar: ", targetRow)
    console.log("ci9: ", colIndex);
    
    console.log("insertedArray: ", insertedArr);
    const [frontPiece, backPiece] = this.splitAtIndex(targetRow, colIndex);
    let combinedArr = [...frontPiece, ...insertedArr, ...backPiece];

    console.log(consolePad, "frontPiece", frontPiece);
    console.log(consolePad, "backpiece", backPiece);
    console.log("ca9: ", combinedArr);

    //make a combined array with insertedarr sandwiched in there
////////////////////////!!!!!!!!!!!!!!!!!
    
      console.log({HEIGHT})

    
    //adjust...
    

    //if row zero has a dash at end means wont move next row
    //copy rowx into a variable and check for row
    //verticalCursorPositio/10 = 0
    //horizontalCursorPosition/5 = 5
      //let combinedArr= ""
    
      console.log("1x:", originalArr[0][5])
      //row has changed to next row to print there
     // if((originalArr[0][6] === "-") && (this.initialRow === rowIndex)){
    //if (insertedArr != "-" ){

    console.log("ri1: ", rowIndex)
    console.log("ir1: ", this.initialRow)
    console.log("z: ", originalArr[colIndex][rowIndex])
    //
    if(  rowIndex != this.initialRow && originalArr[6][this.initialRow]){
      alert("yes")
      return originalArr;
    }
    else{
      alert("no");
      combinedArr = [...frontPiece, ...insertedArr, ...backPiece];

    }
    //moves string below too
    //combinedArr = [...frontPiece, insertedArr, ...backPiece];
    //combinedArr = [...frontPiece, ...backPiece];
    //}
   // else{
      //combinedArr = [...frontPiece, ...backPiece];

    //}

    console.log("ca: ", combinedArr)

    //alert("stop1");



    console.log(consolePad, "combined array:");
    console.log(consolePad, combinedArr);

    if (combinedArr.length < this.maxCols) {
      //the new array fits on one line

      console.log(consolePad, "new array fits on one line");
      //overwrite insertedArr[rowIndex] with combined array
      originalArr[rowIndex] = combinedArr;
      console.log("ca2: ", combinedArr)
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
      
      //alert("hereA");
      
      
      
      

      //is here
      originalArr = this.adjustForWordBreaks(
        trimmedLine,
        remainder,
        originalArr,
        rowIndex,
        innerCounter
      );

      console.log("after: ", originalArr);
      /////
      return originalArr
      
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
      const [nextLine, remainder] = this.splitAtIndex(insertedArr, this.maxCols - 1);
      console.log(consolePad, "line to add immediately:");
      console.log(consolePad, nextLine);
      console.log(
        consolePad,
        "line to process and then add to the next row after this one"
      );
      console.log(consolePad, remainder);
      //can't make the final recursive call until word adjustments have been made
      
      alert("z");
      originalArr = this.adjustForWordBreaks2(
        nextLine,
        remainder,
        originalArr,
        rowIndex,
        innerCounter
      );

      /////
      return originalArr

     
    }
  }
  console.log(consolePad, "**!!END OF ITERATION ", innerCounter, "!!**");
  console.log(consolePad, this.snapshot(originalArr));
  console.log(consolePad, "-------------");
  //this.seperateOnRightBoundry(originalArr, insertedArr, rowIndex, colIndex);
  
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
insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) {
  
  if(isFromIndex == true){
  this.initialRow = rowIndex
  this.initialColumn = colIndex
  }

  //this.initialColumn = colIndex
  let newArray = this.snapshot(originalArray);
  console.log("oa2: ", originalArray)
  return this.insertNewArr(newArray, insertedArray, rowIndex, colIndex);
}

//////////
/*
seperateOnRightBoundry(originalArr, insertedArr, rowIndex, colIndex){
 
  console.log("oa4: ",originalArr)
  console.log("ci: ", colIndex)
//console.log("1d: ", originalArr[colIndex][5])
//console.log("2d: ", originalArr[colIndex + 1][0])

if(originalArr[colIndex][WIDTH-1] === "z"){
  alert("z");
}

if(originalArr[colIndex + 1][0] === "z"){
  alert("x");
}

//check for word caused by word being across boundries
if((originalArr[colIndex][WIDTH-1] !== "-") && (originalArr[colIndex + 1][0] !== "-")){
  
  alert("is here")
  //does word fit on next row
  
  //move text to next row

  //get text from last - to column 6

  //let consolePad = "  ".repeat(iteration); // console padding for more legible output  
  let targetRow = originalArr[colIndex];
  console.log("-targetRow: ", targetRow)
  console.log("-in here")
  //no backpiece
  let [frontPiece, backPiece] = this.splitAtIndex(targetRow, WIDTH-1);
  console.log("frontpiece1: ", frontPiece)
  console.log("backPiece1:", backPiece)
  //     -1
  //2
  let lastSpaceIndex = frontPiece.lastIndexOf("-") ;

  lastSpaceIndex =lastSpaceIndex + 1
  if(lastSpaceIndex == 0){
    lastSpaceIndex = 7
  }
  console.log("lastSpaceIndex: ", lastSpaceIndex)
  
  //   backPiece2 = "aaa"  // is on first row 
  let [frontPiece2, backPiece2] = this.splitAtIndex(frontPiece, lastSpaceIndex);

  console.log("frontpiece2: ", frontPiece2)
  console.log("backPiece2: ", backPiece2)
  
  let combinedArr = [...frontPiece2 , ...originalArr[colIndex+1]];

  let [frontPiece3, backPiece3] = this.splitAtIndex(combinedArr, lastSpaceIndex);

  console.log("frontpiece3: ", frontPiece3)
  console.log("backPiece3: ", backPiece3)
  

  
  
  let trimmedLine = frontPiece3;
  let remainder = backPiece3

  //checks row for null and changes to dashes
  //this.fillNullWithDash(originalArr)


alert("stop")
  
  //done: AND check index values, in this function AND return originalArr placement
  //!!!!!!!!!!!!!!!!!!!DO THIS NEXT!!!!!!!!!! 
  
  originalArr = this.adjustForWordBreaks(
      trimmedLine,
      remainder,
      originalArr,
      rowIndex,
      innerCounter
    );

    /////
    return originalArr

  
  }
  
}
*/


}

/* TEST SECTION */
//console.log({testArr});
//testArr = this.insertClean(
//  this.nestedArray,
//  ["x" ],
//  0,
//  6
//);

//console.log("insert [x,y,z,'-',l,m,n,o,p] at [0][2]");
//console.log({testArr});

