



class RecursiveClass{
  constructor() {

    this.maxCols = 7;
    this.counter = 0;
    this.initialRow = 0;
    this.initialColumn = 0;
    this.mapCounter = 0
    this.testcounter = 0
   
  }

  
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



splitAtIndex(arr, index) {
  
  console.log("index: ", index)
  console.log("arr: ", arr)
  const front = arr.slice(0, index);
  const back = arr.slice(index);
  return [front, back];
  }

 
seperateOnRightBoundry(originalArr, rowIndex, colIndex)
{
  
 
  alert("seperate function")
  console.log("oa4: ",originalArr)
  console.log("ci: ", colIndex)

  //check for word caused by word being across boundries
if((originalArr[colIndex][WIDTH-1] !== "-") && (originalArr[colIndex + 1][0] !== "-")){
  
  alert("is here - sep fucntion")
  

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

 
  //this.fillNullWithDash(originalArr)


    //originalArr = this.insertClean(false, originalArr, newRemainder, rowIndex + 1, 0);
    originalArr = this.insertClean(false, originalArr, remainder, rowIndex + 1, colIndex);
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(consolePad,  "array after inserting remainder with repaired word");
    console.log(consolePad, this.snapshot(originalArr));
    originalArr[0][0] = "Z"
    return originalArr;

    /////////
}

  
}




  
adjustForWordBreaks(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  colIndex
  //iteration
) {

  console.log("frontPart1: ", frontPart)
  console.log("remainder1: ", remainder)
  
  
  //let consolePad = "  ".repeat(iteration); // console padding for more legible output
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

  }else{       //above is breaking word
   
    //alert("not created yet")
    //originalArr = this.insertClean(false, originalArr, remainder, rowIndex + 1, 0);
    //console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log("array after inserting remainder with repaired word");
    console.log(this.snapshot(originalArr));
    

    originalArr = this.seperateOnRightBoundry(originalArr, rowIndex, colIndex)

    
    return originalArr;
  }

}     //this is the addjustforwordbreaks

  /////////

insertNewArr(originalArr, insertedArr, rowIndex, colIndex)
{

let nextLine = ""
let remainder = ""
console.log("this should be X: ", insertedArr)
//if(insertedArr.indexOf("X") !== -1 )
const val = "X"


 //global counter can only ever contain the largest iteration number - take heed, this iteration isn't thorough
 //locally declared counter is scoped to *this* iteration of the function
  this.counter++;
  let innerCounter = this.counter; 
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
   
    console.log("tar: ", targetRow)
    console.log("ci9: ", colIndex);
    
    console.log("insertedArray: ", insertedArr);

     //split the original row at that index into "front" & "back" pieces
    const [frontPiece, backPiece] = this.splitAtIndex(targetRow, colIndex);
    
    //combined with the inserted value which is a single valued array
    let combinedArr = [...frontPiece, ...insertedArr, ...backPiece];

    // a - - - - -
    console.log(consolePad, "frontPiece", frontPiece);
    console.log(consolePad, "backpiece", backPiece);
   
    console.log("ca9: ", combinedArr);
    console.log("1x:", originalArr[0][5])
    console.log("ri1: ", rowIndex)
    console.log("ir1: ", this.initialRow)
    console.log("z: ", originalArr[colIndex][rowIndex])
    
    
    //if this is not from inital key press, than check for a dash (change to nulll value ) on the value of last column 
    if(  rowIndex != this.initialRow && originalArr[6][this.initialRow] === "-"){

     //does not do an insert because it is on first row, therefore is just displaye one space to right
     
    }
    else
    {
      //there isn't a null character on most right position so inserts on the next line
      combinedArr = [...frontPiece, ...insertedArr, ...backPiece];
      

    }
    console.log("ca: ", combinedArr)
    console.log("cols: ", this.maxCols)
    console.log(consolePad, "combined array:");
    console.log(consolePad, combinedArr);

    //does combined array have less characters than this maxCols, //the new array fits on one line
    if (combinedArr.length < this.maxCols) {
      
      console.log(consolePad, "new array fits on one line");
      //overwrite insertedArr[rowIndex] with combined array
      originalArr[rowIndex] = combinedArr;
      console.log("ca2: ", combinedArr)
      console.log(consolePad, "after row insertion:", this.snapshot(originalArr));
    


    //does not fit in the row 
    } else {
      
      //new array too long to fit on one line
      console.log(consolePad, "need to split lines");
      //split the combinedArr to have length of maxCols


      //THESE ARE THE VALUES, ASSUMING THESE ARE ALL INDUCED HERE, THEY WILL BE USED CORRECTLY
      const [trimmedLine, remainder] = this.splitAtIndex(combinedArr, this.maxCols );
      console.log(consolePad, "trimmedLine", trimmedLine);

      //Used to pass as the next first value
      console.log(consolePad, "remainder", remainder);
     


      //if line ends *without* breaking word .at -1 lets us access last letter in trimmedLine
      if(trimmedLine.at(-1) == '-' || remainder[0]=='-' ){
        console.log("no word broken on trimmed line")
          
         originalArr[rowIndex] = trimmedLine;
        console.log("replace original array row with trimmed line")

         console.log(originalArr)
         //if there's anything left over, push it into position 0 of the next row
         if (remainder.length > 0) {
           console.log("trimmed line had remainder afterwards")
           console.log("origianalArr1: ", originalArr)
           console.log("remainder1: ", remainder);
           //put on next line
           originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);
           console.log("array after inserting remainder:", originalArr);
           console.log("origianalArr2: ", originalArr)
         }

         // ASSUMPTION:  THIS FUNCTION TAKES IN THE INPUT VALUES AND ASSUMING THEY ARE CORRECT, SHOULD OUTPUT THE NEWLY INSERTED ARRAY
         // ALSO CHECKS THAT AS ELSE SAYS, DOES NOT FIT IN THE ROW:  (does not fit in the row ) IS COMMENTED    
         //
         //  Inputs:
     
        }else{ // this is where word is broken across row
               //  trimmedLine is the line on the left that doesn't include insert array and remainder array  
               //  remainder - is the array after the inserted value 
               //  originalarr - is the entire array before the insert
               //  rowIndex - the value pertaining to the position vertical as index
               //  colIndex - the position pertaining to the horizontal value as index

      

        originalArr = this.adjustForWordBreaks(
        
        trimmedLine,
        remainder,
        originalArr,
        rowIndex,
        colIndex,
      
      );
      

        }
      
      
      }  // ...did not fit in row 



      //////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////

    } else{  // this is the end of if target row - there was a row in originalArr,
             // there was no original row at that position 



    
    
      //instead, adding a whole new row to the end of originalArr
    console.log(
      consolePad,
      "adding inserted array to end of new array by creating a new line"
    );
    




     //if we're adding onto the end of newArray, just push the inserted arr as a new row
     //the size of the row must not be more with inserted letter added
     //new row fits on one line
    
    //is no row,so just make row equal to the added array (one character) 
     if (insertedArr.length <= this.maxCols) {
    //??????????????  

      console.log(consolePad, "new inserted row is within width constraints");
     //there is no row so just push on to the end of the original array
      originalArr.push(insertedArr);//???????????
      console.log(consolePad, "original array with new inserted line appended");
      console.log(consolePad, this.snapshot(originalArr));
    } else {//new row is too long to fit on one line



      //THIS CAN'T HAPPEN WITH THIS PROGRAM BECUASE INSERTEDARR IS ALWAYS ON CHARACTER LENGT 
      
      /*
      //insert array is bigger than maximum amount of columne
      console.log(consolePad, "inserted array is too long, break into lines");

      //split inserted line at max col width
      [nextLine, remainder] = this.splitAtIndex(insertedArr, this.maxCols );
      console.log(consolePad, "line to add immediately:");
      console.log(consolePad, nextLine);
      console.log(
        consolePad,
        "line to process and then add to the next row after this one"
      );
      console.log(consolePad, remainder);
      //can't make the final recursive call until word adjustments have been made
      */
      
      
      
      
      
      alert("adjust2")
      //  check to see if the word was to long, if so this will handle it - takes in these values
      //  *nextLine - is the array before the value is inserted
      //  *remainder - is the array after the inserted value 
      //  *originalarr - is the entire array before the insert
      //  -rowIndex - the value pertaining to the position vertical as index
      //  -colIndex - the position pertaining to the horizontal value as index
        originalArr = this.adjustForWordBreaks(
        
        nextLine,
        remainder,
        originalArr,
        rowIndex,
        colIndex,
       
      );
      
    }
  }  // This is the end of no row 


  if(this.testcounter === 1){
  //originalArr[0][0] = "z"
  }
  this.testcounter++

  //alert("put here");
  console.log(consolePad, "**!!END OF ITERATION ", innerCounter, "!!**");
  console.log(consolePad, this.snapshot(originalArr));
  console.log(consolePad, "-------------");

  return originalArr;   //function ends here
}

  
//insert into a clean duplicate bc it's nicer
insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) 
{
  
  //if(isFromIndex === true){
  //this.initialRow = rowIndex
  //this.initialColumn = colIndex
  //}

  
  let newArray = this.snapshot(originalArray);
  console.log("oa2: ", originalArray)
  return this.insertNewArr(newArray, insertedArray, rowIndex, colIndex);
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

