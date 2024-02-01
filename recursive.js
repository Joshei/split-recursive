



class RecursiveClass{
  constructor() {

    this.maxCols = 7;
    this.counter = 0;
    this.initialRow = 0;
    this.initialColumn = 0;
    this.mapCounter = 0
    //this.rowIndexChanged = false

//this.nestedArray = [
//  ["h", "e", "l", "", "", "", "a"],
//  ["w", "o", "r", "l", "d"],
//];
//this.testArr= []
  }

  ///


  ///

snapshot(original) 
{

  console.log("orig: 0" , original)
  //creates a deep copy to capture array's state at that moment
  let newArray = original.map((oldRow) => {
    console.log ("map: " , this.mapCounter);
    this.mapCounter = this.mapCounter + 1
    return [...oldRow];
  });
  console.log("or: ",newArray)
  return newArray;
}
  ///


  

  ///

//index at 0 : 302
splitAtIndex(arr, index) {
  
  console.log("index: ", index)
  console.log("arr: ", arr)
  const front = arr.slice(0, index);
  const back = arr.slice(index);
  return [front, back];
  }

  /////////


  
adjustForWordBreaks(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  colIndex,
  iteration
) {

  
  //return originalArr


  //frontpart -->  a a - - - - - 
  //remainder -->  a   -> put on next line

  console.log("frontPart1: ", frontPart)
  console.log("remainder1: ", remainder)
  
  //alert("1");
  let consolePad = "  ".repeat(iteration); // console padding for more legible output
  //.at(-1) lets us access last letter in trimmedLine
  if (frontPart.at(-1) == "-" || remainder[0] == "-") {
    //if line ends *without* breaking word (front ends with space, or remainder starts with one)
    //alert("3")
    console.log(consolePad, "no word broken on trimmed line");
    //the front half of that becomes originalArray[rowIndex]
    originalArr[rowIndex] = frontPart;
    console.log("frontPart: ", frontPart)
    console.log("remainder: ", remainder)
    console.log(consolePad, "replace original array row with trimmed line");
    
    //originalArr[rowIndex] = frontPart
    //originalArr[rowIndex+1] = remainder
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


      //insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) 
        
      let trythisinsertedArray ="X"
      console.log("1!: ", originalArr)
      console.log("2!: ",remainder)
      console.log("3!:", rowIndex)
      //make the recursive call to add the remainder to the next line
      originalArr = this.insertClean(false,originalArr, remainder, rowIndex + 1, 0);
      console.log(consolePad, "!! Return to iteration", iteration, "!!");
      console.log(consolePad, "array after inserting remainder:");
      //console.log(consolePad, this.snapshot(originalArr));
      //console.log("What about this?: ", originalArr)
      return originalArr;
    }

  }else{
   
    alert("not created yet")
    originalArr = this.insertClean(false, originalArr, remainder, rowIndex + 1, 0);
    //console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
    

    seperateOnRightBoundry(originalArr, rowIndex, colIndex)

    return originalArr;
  }

}
  /////////

insertNewArr(originalArr, insertedArr, rowIndex, colIndex)
{
console.log("this should be X: ", insertedArr)
//if(insertedArr.indexOf("X") !== -1 )
const val = "X"

//if(insertedArr.includes(val))
//{
//  console.log("IS NOW HERE...Sart looking at code now, here!")
//}
  
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
    
    
    // a - - - - - -
    console.log("tar: ", targetRow)
    console.log("ci9: ", colIndex);
    
    console.log("insertedArray: ", insertedArr);


    if(insertedArr == "-" && rowIndex != this.initialRow){
      
      //important piece of code, here!!!!
      return originalArr
    }
    const [frontPiece, backPiece] = this.splitAtIndex(targetRow, colIndex);
    let combinedArr = [...frontPiece, ...insertedArr, ...backPiece];

    // a - - - - -
    console.log(consolePad, "frontPiece", frontPiece);
    console.log(consolePad, "backpiece", backPiece);
    
    
    //comnined
    // a a - - - - - a
    console.log("ca9: ", combinedArr);

    
    
      console.log("1x:", originalArr[0][5])
     

    console.log("ri1: ", rowIndex)
    console.log("ir1: ", this.initialRow)
    console.log("z: ", originalArr[colIndex][rowIndex])
    //
    
    //dont chnage second row
    
    //row index reset to innital row
    
    
    if(  rowIndex != this.initialRow && originalArr[6][this.initialRow] === "-"){

      //if( originalArr[0][6] === "-"){

    //if(  rowIndex != this.initialRow ){
      //if(  this.rowIndexChanged ){
        //this.rowIndexChanged = false
      //alert("yes")
      console.log("did get here to abort")
      console.log("ori99: ", originalArr)
      //return originalArr;
    }
    else
    {
      //alert("yes2");
      combinedArr = [...frontPiece, ...insertedArr, ...backPiece];
      console.log("ori10: ", originalArr)

    }
    console.log("ca: ", combinedArr)

    //alert("stop1");

    console.log("cols: ", this.maxCols)

    console.log(consolePad, "combined array:");
    console.log(consolePad, combinedArr);

    
    
    
    if (combinedArr.length < this.maxCols) {
      //the new array fits on one line
      //alert("huh?")
      console.log(consolePad, "new array fits on one line");
      //overwrite insertedArr[rowIndex] with combined array
      originalArr[rowIndex] = combinedArr;
      console.log("ca2: ", combinedArr)
      console.log(consolePad, "after row insertion:", this.snapshot(originalArr));
    } else {
      //alert("looks like here")
      //new array too long to fit on one line
      console.log(consolePad, "need to split lines");
      //split the combinedArr to have length of maxCols
      const [trimmedLine, remainder] = this.splitAtIndex(combinedArr, this.maxCols );
      console.log(consolePad, "trimmedLine", trimmedLine);


      //is this ready for passing to adjust function
      //put this on next line
      console.log(consolePad, "remainder", remainder);
      //if neither â€œtrimmedLine ends with spaceâ€ nor â€œremainder starts with spaceâ€
      //if(!(trimmedLine.at(-1) == '-' || remainder[0]=='-') ){

      //if line ends *without* breaking word .at -1 lets us access last letter in trimmedLine
      if(trimmedLine.at(-1) == '-' || remainder[0]=='-' ){
        console.log("no word broken on trimmed line")
          //the front half of that becomes originalArray[rowIndex]
         originalArr[rowIndex] = trimmedLine;
        console.log("replace original array row with trimmed line")

         console.log(originalArr)
         //if there's anything left over, push it into position 0 of the next row
         if (remainder.length > 0) {
           console.log("trimmed line had remainder afterwards")

           console.log("origianalArr1: ", originalArr)
           //remainder is 'a'. so pass it in 
           console.log("remainder1: ", remainder);
           //this.rowIndexChanged = true
           originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);
           console.log("array after inserting remainder:", originalArr);
           console.log("origianalArr2: ", originalArr)
         }

      ////
        }else{

      //a word has been broken:
      //is here
      originalArr = this.adjustForWordBreaks(
        trimmedLine,
        remainder,
        originalArr,
        rowIndex,
        colIndex,
        innerCounter
      );
        }
      }  // ...looks likr here ends herte
    } else{

      
      /////
      //return originalArr
      
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
      const [nextLine, remainder] = this.splitAtIndex(insertedArr, this.maxCols );
      console.log(consolePad, "line to add immediately:");
      console.log(consolePad, nextLine);
      console.log(
        consolePad,
        "line to process and then add to the next row after this one"
      );
      console.log(consolePad, remainder);
      //can't make the final recursive call until word adjustments have been made
      originalArr = this.adjustForWordBreaks(
        nextLine,
        remainder,
        originalArr,
        rowIndex,
        colIndex,
        innerCounter
      );
    }
  }
  console.log(consolePad, "**!!END OF ITERATION ", innerCounter, "!!**");
  console.log(consolePad, this.snapshot(originalArr));
  console.log(consolePad, "-------------");
  return originalArr;
}

  //console.log(consolePad, "**!!END OF ITERATION ", innerCounter, "!!**");
  //console.log(consolePad, this.snapshot(originalArr));
  //console.log(consolePad, "-------------");
  
  /////this.seperateOnRightBoundry(originalArr, insertedArr, rowIndex, colIndex);
  
  //return originalArr;


//}


//insert into a clean duplicate bc it's nicer
insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) 
{
  
  if(isFromIndex === true){
  this.initialRow = rowIndex
  //this.initialColumn = colIndex
  }

  
  //this.rowIndexChanged = false

  //this.initialColumn = colIndex
  let newArray = this.snapshot(originalArray);
  console.log("oa2: ", originalArray)
  return this.insertNewArr(newArray, insertedArray, rowIndex, colIndex);
}

//let nestedArray = [
//  ["h", "e", "l", "l", "o"],
//  ["w", "o", "r", "l", "d"],
//];
//console.log(nestedArray);


//console.log({nestedArray]);


/////////////



seperateOnRightBoundry(originalArr, rowIndex, colIndex)
{
  //alert("got here, huh.a");
  //return
 
  console.log("oa4: ",originalArr)
  console.log("ci: ", colIndex)

  //check for word caused by word being across boundries
if((originalArr[colIndex][WIDTH-1] !== "-") && (originalArr[colIndex + 1][0] !== "-")){
  
  //alert("is here")
  

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




//}
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

