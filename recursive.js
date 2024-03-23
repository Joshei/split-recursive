

//3/9/24
// fixed a insertall error that makes workings better in complex siuations
// adjusts are commented out
// now working on hard setting the matrix and using moveallwords..
// recursivly.


//after insert, check entire field for words that cross boundries, if found a crossover
//move that text to start at that border and than goto top and do 



class RecursiveClass{
  constructor() {

    this.maxCols = 7;
    this.counter = 0;
    this.initialRow = 0;
    this.initialColumn = 0;
    this.mapCounter = 0
    this.testcounter = 0
    this.flag = 0
    this.flagToManyDashes = false
    this.testCounter = 0;
    this.BreakoutOfDelete = false
    
  }

deleteKeyPressed(array, col, row){

  //remove one element at rowindex
  const removed = array[row].splice(1, 1)

    return

  }



deleteRow(arr, rowIndex){

  arr.splice(rowIndex, 1)
  return arr;

}




fillNullWithDashOnRow(RowIndex ,arrayToChange)
{
  
for(let i = 0 ; i < WIDTH ; i++){
  //console.log("tl: ", arrayToChange[i])
  if (arrayToChange[RowIndex][i] == '' ||  arrayToChange[RowIndex][i] == " "  ||  typeof arrayToChange[RowIndex][i] == 'undefined')
  {
    //alert("here");
    arrayToChange[RowIndex][i] = '-'
  }
}

drawGrid(HEIGHT, WIDTH)
return arrayToChange
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


//ROWINDEX IS THE ONE ROW ABOVE TEXT TO MOVE UP
//REWORKED - 3/23/24
//Deletes word from bottom left to top right
recursiveDelete(originalArr, rowIndex, colIndex)
{

  if (rowIndex >= 6)
  {
    
    return(originalArr)
    
  }
  


  alert(rowIndex)
  let rowOne = originalArr[rowIndex]
  let rowTwo = originalArr[rowIndex+1]

  let index1stRow = rowOne.lastIndexOf("-");
  
  let index2ndRow = rowTwo.indexOf("-");



  //check last three positions for dashes or spaces
  let amountOfRightSpacesRow1 = WIDTH - index1stRow  + 1
  
  
  
  
  let amountOfLeftSpacesRow2 = index2ndRow   
  
  
  if (   amountOfLeftSpacesRow2 >  amountOfRightSpacesRow1 )
  {
    alert("doesn't fit:  row index", rowIndex)
      return originalArr5053
  }

  let amountOfTopSpaces = 0
  //check right spaces for space from below (the characters)
  for(let i = WIDTH - amountOfLeftSpacesRow2; i < WIDTH ; i++)
  {
    if(originalArr[rowIndex][i] == "" || originalArr[rowIndex][i] ==  " " || originalArr[rowIndex][i] ==  "-" )
    {
      amountOfTopSpaces++
    }

  }
  
  //in here means doesnt fit
  if(amountOfLeftSpacesRow2 > amountOfTopSpaces)
  {
    alert("here!!!")
    return
  }


//check next row for left word
//check top row for more or equal spaces to put word in
//if so, run function



  //alert("recursive delete");

  //originalArr = this.deleteColumnInTwoDimArrayDontMakeDash(originalArr, rowIndex, colIndex )


  //3/22/24:  check for recursive delete need, (needs to pull left characters up a row to the right side
  //and (at least for now) put spaces where word was)



     console.log({rowIndex})


    let topLineNextRow = []

    let topLine = originalArr[rowIndex - 1]
      
    topLineNextRow = originalArr[rowIndex]
   
    let lastSpaceIndex = topLine.lastIndexOf("-");
    
    let [lineBesideLeftMostCharacter, firstCharacter ] = this.splitAtIndex(topLine, lastSpaceIndex);
    
    
    
    
    
    let lastSpaceIndex2 = topLineNextRow.indexOf("-");

   
    let [CharactersOfNextLine, lineBesideLeftMostCharacterNextRow  ] = this.splitAtIndex(topLineNextRow, lastSpaceIndex2); 
    

    let completeTopRow = []

  
  
    //looks fine
   // if(1)
  //{
   
    
    
    alert("1!")

    let lengthOfSpaceForWord = CharactersOfNextLine.length
    let index = WIDTH - lengthOfSpaceForWord 
    let [left,b] = this.splitAtIndex(topLine, index);

    let combine = [...left, ...CharactersOfNextLine]  
    originalArr[rowIndex-1] = combine 


    for(let i = 0 ; i < lengthOfSpaceForWord;i++)
    {
      originalArr[rowIndex][i] = "-"
    }

    
    drawGrid(HEIGHT, WIDTH)

    return originalArr


  //}
  //else
  //{ //looks okay
  //  let lengthOfSpaceForWord = CharactersOfNextLine.length
  //  
  //  let [left, trim ] = this.splitAtIndex(topLineNextRow, lengthOfSpaceForWord);
  //  //let combine = [left]
  //  completeTopRow = [...trim, ...CharactersOfNextLine]
  //  
  //  originalArr[rowIndex - 1] = completeTopRow
  //  this.fillRightWithDashesIndex(lengthOfSpaceForWord, rowIndex , originalArr)
  //  drawGrid(HEIGHT, WIDTH)
  //}




    drawGrid(HEIGHT, WIDTH)



    this.recursiveDelete(originalArr, rowIndex+1, 0)

   
    return originalArr
}


//starts with null with first call

//3/21/24 - done, not thoroughly tested
pressedEnter3(originalArr,rowIndex3,colIndex, remainder, wordToPass, IsFirstTime)
{

  console.log("imp", typeof remainder)
  if (Object.keys(remainder).length === 0)
  {
    
      remainder = ""
  }

 
  if(rowIndex3 > HEIGHT-2)
  {
    
    return originalArr
  }


  let target1 = originalArr[rowIndex3]
 
  let target2 = originalArr[rowIndex3+1]


  let copyTarget1 = [...target1]
  let copyTarget2 = [...target2]
 

  let amtCharactersToPass = WIDTH - colIndex 
  
  let target3 = originalArr[rowIndex3+2]

  let holderForArray = []
  

  let indexOfWordToPass = colIndex + 1


  let thisIsFullPhrase = [...wordToPass, ...target1]

  let [topRightWord, row1LastCharacters ] = this.splitAtIndex(thisIsFullPhrase, colIndex)

  ///////

  let holderForArray1 = []
  for(let i = amtCharactersToPass; i < WIDTH ; i++)
  {
  }


  let combine = [  ...remainder, ...target2]
  
  //get 4 characters for moving to next row
  let [a, lastCharacters] = this.splitAtIndex(combine, indexOfWordToPass - 1 )



if(IsFirstTime === true)
{
  let secondRowNearlyDone = [...row1LastCharacters, ...combine] 
  let [secondRowDone, remainder1] = this.splitAtIndex(secondRowNearlyDone, WIDTH )
  originalArr[rowIndex3+1] = secondRowDone
  
 }
else
{
  let secondRowNearlyDone = [...wordToPass, ...combine] 
  let [secondRowDone, remainder1] = this.splitAtIndex(secondRowNearlyDone, WIDTH )
  originalArr[rowIndex3+1] = secondRowDone

}



  drawGrid(HEIGHT, WIDTH)


 
  if(IsFirstTime)
  {
   
  //cover the first word to pass with dashes
  for(let i = WIDTH - amtCharactersToPass; i < WIDTH ; i++)
  {
    originalArr[rowIndex3][i] = "-"
    
  }

  drawGrid(HEIGHT, WIDTH)

}

  this.pressedEnter3(originalArr,rowIndex3+1,colIndex, remainder, lastCharacters, false)

  

  drawGrid(HEIGHT, WIDTH)

 
  return originalArr
  



}


/////////

  pressedEnter(originalArr,rowIndex3,colIndex, remainder1)
  {

  //get first row
  //get second row, set as target
  //have row and column
  //split at cursor - this is leftWord and rightWord
  //get second row

  
  //combine remainder + rightword + target
  
  
  // split WIDTH - get another remiander and wordB
  // originalArr[rowIndex] =  wordB;
  //
  //
  //make dashes length of rightword
  // remadeLine = left word + dashes
  // originalArr[rowIndex] =


  let target1 = originalArr[rowIndex3]
  let target2 = originalArr[rowIndex3+1]

  //current row  
  let [backPieceTop, pieceToMove] = this.splitAtIndex(target1, colIndex);
  //current row + 1
  let [backPieceTop2, pieceToMove2] = this.splitAtIndex(target2, colIndex);

  
  let combine = [...pieceToMove, ...backPieceTop2]

  //check if combined words are so big as to just advance all the lines
  
  
  /*
  if (combine > 7 )
  {
    //originalArr.push (["A", "-", "-", "-", "-", "-" , "-" ],)

    alert("splice")
    originalArr.splice(rowIndex3+1,0, combine)
    return originalArr
  }
  */
  const [left, remainder2] = this.splitAtIndex(combine, WIDTH );




  //START LOOK HERE!!!!!

/////////////////////////////////////////////

  originalArr[rowIndex3+1] = combine

  //originalArr[rowIndex3+2] = pieceToMove2



  drawGrid(HEIGHT, WIDTH)

  //originalArr.splice(rowIndex3+1,0, left)
  //create dashes for replacing returned text

  let spaceForDashes = WIDTH - colIndex 
  for(let i = colIndex; i< WIDTH+1 ; i++)
  {
   // originalArr[rowIndex3][i] = "V"
  }
  drawGrid(HEIGHT, WIDTH)
  //this.deleteRow(originalArr, rowIndex3+ 2)


  //HEIGHT++
  
  

  this.pressedEnter2(originalArr,rowIndex3+3,colIndex, remainder1)
 
  drawGrid(HEIGHT, WIDTH)
  return originalArr
   

}

// working on remainder (2)
pressedEnter2(originalArr,rowIndex3,colIndex, remainder2)
{

 rowIndex3 = rowIndex3 - 1
  alert("z")
  if(rowIndex3 >= 6)
  {
    alert("A")
    return originalArr
  }

  //remainder1.length is amount to advance each row
  let target1 = originalArr[rowIndex3]
  let target2 = originalArr[rowIndex3+1]

  //current row  
  let [backPieceTop, pieceToMove] = this.splitAtIndex(target1, 0);
  //current row + 1
  let [backPieceTop2, pieceToMove2] = this.splitAtIndex(target2, colIndex+1);

  
  let combine = [...pieceToMove, ...backPieceTop2, ...remainder2]
  const [left, remainder3] = this.splitAtIndex(combine, WIDTH );
  originalArr[rowIndex3+1] = combine


  let combine2 = [...pieceToMove2, ...backPieceTop]
  originalArr[rowIndex3] = combine2

  this.pressedEnter2(originalArr,rowIndex3+2,colIndex, remainder3)
 
  originalArr.push (["B", "-", "-", "-", "-", "-" , "-" ],)
  HEIGHT++
  drawGrid(HEIGHT, WIDTH)
  return originalArr

}
//3/13/24 looked pretty good
moveAllWordsAcrossBorder(originalArr,remainder, rowIndex,colIndex){


  console.log("across: ", remainder);
    //check for index 6 and index 0
    //if two values add up to over 7 retunr out
    //get first row last word on border  - A
    //get second row  get first word on left border - B

    //put A on the 2nd row
    //put B on end of row
    //delete first row
    //check NEXT row with recursion
  
    if(originalArr[rowIndex][6] == "-" || originalArr[rowIndex+1][0] == "-"){ 

    

  }

  //alert("move all words...")
  


  let targetRow1 = originalArr[rowIndex];
  //originalArr.push (["A", "-", "-", "-", "-", "-" , "-" ],)
  if(rowIndex < HEIGHT-1){
    originalArr.push (["A", "-", "-", "-", "-", "-" , "-" ],)
    //return
  }
  else{
    return
  }
  if (rowIndex > HEIGHT-2){
    //return
  }
  let targetRow2 = originalArr[rowIndex+1];


  // find first values
  let lastSpaceIndex = targetRow1.lastIndexOf("-");
  const [trim1, lastPiece] = this.splitAtIndex(targetRow1, lastSpaceIndex + 1);
  
  // find 2nd values
  let firstSpaceIndex = targetRow2.indexOf("-");
  const [frontPiece, trim2] = this.splitAtIndex(targetRow2, firstSpaceIndex);

  if((frontPiece.length + lastPiece.length) > 7 )
  {
    this.moveAllWordsAcrossBorder(originalArr,[], rowIndex+2,colIndex)
    //originalArr = this.deleteRow(originalArr, rowIndex+1)
    //alert("over 7")
    return originalArr
  }
  //last peice on row 1, forsy peice on row 2
  // 01
  const combined = [...lastPiece, ...frontPiece, ...trim2]

  //leftover line that was previous

  ///   -1  ?????
  const [word1, remainder1] = this.splitAtIndex(combined, WIDTH-1);
  remainder  =  [...remainder, ...remainder1]

  originalArr[rowIndex] = trim1 
  originalArr[rowIndex+1] = word1
  this.fillNullWithDashOnRow(rowIndex+1 ,originalArr)
  this.fillNullWithDashOnRow(rowIndex ,originalArr)

 
  
  
  
  
  
  
  drawGrid(HEIGHT, WIDTH)
  
  this.moveAllWordsAcrossBorder(originalArr,[], rowIndex+1,colIndex)
  

  let DeleteFlag = true
  let i = 0
  for(let j = 0; j< rowIndex; j++)
  {

    DeleteFlag = true
  
  for(i = 0; i < WIDTH - 1 ; i++)
  {
    if (originalArr[j][i] != "-")
    {
        DeleteFlag = false;
        break
    }
  }

  if(DeleteFlag == true)
  {
    originalArr = this.deleteRow(originalArr, j)
    
   
  }
}
  
  
  
  drawGrid(HEIGHT, WIDTH) 
 
  return (originalArr)

 

}


/*
//3/13/24 :  Looks pretty good.
BringLeftTextUpIntoSpaceOnRight( originalArr,rowIndex2,colIndex)
{


if (rowIndex2 >= HEIGHT)
{
  return originalArr
}


console.log("Z0: ", rowIndex2, colIndex)
 

console.log("Z1: ", originalArr)


  alert("top to bottom")

let wordIndexOfRightEndWord = 0

let firstSpaceIndexTop = originalArr[rowIndex2].lastIndexOf("-")

  wordIndexOfRightEndWord = firstSpaceIndexTop

let wordIndexOfLeftEndWord = 0

let firstSpaceIndexLeftBottom = originalArr[rowIndex2+1].indexOf("-")

  wordIndexOfLeftEndWord = firstSpaceIndexLeftBottom

let lengthOfTopSpace =  wordIndexOfRightEndWord 
let lengthOfBottomWord = WIDTH - wordIndexOfLeftEndWord - 1 

let fits = true
for(let i = WIDTH - lengthOfBottomWord; i < WIDTH -1 ; i++)
{
    if((originalArr[rowIndex2][i] != "") && (originalArr[rowIndex2][i] != "-" ) && (originalArr[rowIndex2][i] != " " ))
    {
        fits = false
    }
}

if (fits == true)
{

  console.log({rowIndex2})
  
  let target = originalArr[rowIndex2]
  let target1 = originalArr[rowIndex2+ 1]
  alert("slice");

  console.log({target})
  console.log({target1})
  
  let [trimmedLeftTopRight, wordPartTopRight] = this.splitAtIndex(target, wordIndexOfRightEndWord + 1);
  
  
  
  let[ wordPartBottomLeft, trimmedLeftBottomLeft] = this.splitAtIndex(target1, wordIndexOfLeftEndWord  )
  let [leftToAddTo, trim3] = this.splitAtIndex(trimmedLeftTopRight, WIDTH - wordPartBottomLeft.length );
  
  let endTopWord = [...leftToAddTo,  ...wordPartBottomLeft ]

  // ----a--
//  let[ Left, trim2] = this.splitAtIndex(trimmedLeftTopRight,  2  )


  
  

  //a in proper place
//  let combinedArrForTop = [...trimmedLeftTopRight, ...wordPartBottomLeft]

  
//  let[ left, trim] = this.splitAtIndex(combinedArrForTop, lengthOfBottomWord)
  

//  let reducedArrForBottom = [...trimmedLeftBottomLeft]

  originalArr[rowIndex2] = endTopWord

  drawGrid(WIDTH,HEIGHT)


  this.recursionFunction([], rowIndex2, originalArr)
 
}



return originalArr
}
*/

//3/22/24: looks good, hasnt been thoroughly tested - left shifts everything
deleteACharacter(remainder, rowIndex2, originalArr, IsFirstRun){

  if (rowIndex2 >= 5)
  {
    const removed = originalArr[rowIndex2+1].splice(1, 1)
    originalArr[HEIGHT-1][WIDTH-1] = "-"
    alert("in")
    return(originalArr)
    
  }
  
  //remove word on bottom row and shift all chafracters left that amount of lenght

  // row is second row that needs to be moved three left
  let lineToShift = originalArr[rowIndex2 + 1]
  let secondLine = originalArr[rowIndex2 + 2]
  //remove left characters that were moved
  //get the lline after this one 
  //combine the two
  //split at width
  //call function
  let[ left1, trim1] = this.splitAtIndex(lineToShift, 1 )
  //let[ left3, trim3] = this.splitAtIndex(secondLine, 1 )
  let target = originalArr[rowIndex2+1]

  let combined = []
if(IsFirstRun)
{
  combined = [...remainder, ...trim1, ...secondLine]
}
else{
  combined = [...remainder, ...secondLine]
}

  let[ left2, trim] = this.splitAtIndex(combined, WIDTH )

  originalArr[rowIndex2 + 1] = left2

  //+2
  //this.deleteRow(originalArr, rowIndex2+2)

  //originalArr.push(["-", "-" , "-", "-" ,"-", "-" ,"-", ]);


  this.deleteACharacter(trim, rowIndex2 + 1, originalArr, false)

  drawGrid(WIDTH, HEIGHT)



}  










///////////

adjustForWordBreaks_TopToBottom(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  colIndex
  //iteration
) 
{
  

  //return originalArr
  alert("adjustforwordbreak");
  let totalWord = ""
  let iteration = 1
  //let finalRemainder = ""
  let consolePad = "  ".repeat(iteration); // console padding for more legible output
  //.at(-1) lets us access last letter in trimmedLine
  //if (false){//frontPart.at(-1) == "-" || remainder[0] == "-") {
    //if line ends *without* breaking word (front ends with space, or remainder starts with one)

      //}
      //else
       
    
    // a word has been broken
    console.log(consolePad, "a word was broken in the line break");
    //find last index of space in frontPart
    console.log(consolePad, "line to break up:");
    console.log(consolePad, frontPart);
    let lastSpaceIndex = frontPart.indexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    //split frontPart at space index
    
    
    let [wordPart, trimmedLeft] = this.splitAtIndex(frontPart, lastSpaceIndex);
    console.log(consolePad, "trimmed line split at word break:", trimmedLeft);
    console.log(consolePad, "partial word:", wordPart);
    //replace original row with the word-excluded part of the line

    
    
    let target = originalArr[rowIndex - 1]
    lastSpaceIndex = target.lastIndexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    

    //no dashes, filled row with characters
    if (lastSpaceIndex === -1)
    {
      
      return originalArr
    }

    let [trimmedLeft1, wordPart1] = this.splitAtIndex(target, lastSpaceIndex + 1);

   
    

    target = originalArr[rowIndex]
    lastSpaceIndex = target.lastIndexOf("-");
    //no dashes, filled row with characters
    if (lastSpaceIndex === -1)
    {
      
      return originalArr
    }

    //console.log(consolePad, "space index", lastSpaceIndex);
    let frontPieceWord = originalArr[rowIndex] 
    let [trimmedLeft2, frontWordPart1] = this.splitAtIndex(frontPieceWord, lastSpaceIndex);


    totalWord = [...frontWordPart1, ...wordPart]
    //use orignal text
    const combinedArr = [...wordPart1, ...wordPart];

    //let combinedArrWidth = {}
     let [combinedArrWidth, finalRemainder] = this.splitAtIndex(combinedArr, this.maxCols);

    

    let value = rowIndex;
    
    
    

    //covers original text
    let coverArray = {}
    if(wordPart.length  + wordPart1.length > 7 )
    {
      //this.flagToManyDashes = true

      return originalArr
      //this.flagToManyDashes = true
      
      
      //console.log("1z: ", wordPart)
      //console.log("2z: ", wordPart1)
      //cover wih dashes
      ///alert("row : ", rowIndex);
      //originalArr[rowIndex] = wordPart1//"XX-----";
      //originalArr = this.fillRowWithDashes(rowIndex-1, originalArr)
      //put wordpart here, row after 7 characters
      //this.insertNewArr(originalArr, wordPart, rowIndex + 1,0)
      
      return originalArr
    }

   
   
  
  
  originalArr[rowIndex] = combinedArrWidth;
  originalArr[rowIndex-1] = trimmedLeft1 
  
originalArr = this.fillNullWithDashOnRow(rowIndex - 1 , originalArr)

  
  this.insertNewArr(originalArr, finalRemainder, rowIndex + 1,0)
   
  
    this.fillNullWithDashOnRow(rowIndex, originalArr)
    
    
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
    console.log("adjust2: ", originalArr)
    return originalArr;
  //}
}



//this is working on bottom-up
adjustForWordBreaks_BottomToTop(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  colIndex)
  {
  
    let totalWord = ""
  let iteration = 1
  //let finalRemainder = ""
  let consolePad = "  ".repeat(iteration);

    alert("found test!");
    // a word has been broken
    console.log(consolePad, "a word was broken in the line break");
    //find last index of space in frontPart
    console.log(consolePad, "line to break up:");
    console.log(consolePad, frontPart);
    let lastSpaceIndex = frontPart.lastIndexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    //split frontPart at space index
    

    //no dashes, filled row with characters
    if (lastSpaceIndex === -1)
    {
      
      return originalArr
    }

    //this!
    let [trimmedLeft, wordPart] = this.splitAtIndex(frontPart, lastSpaceIndex + 1);
    console.log(consolePad, "trimmed line split at word break:", trimmedLeft);
    console.log(consolePad, "partial word:", wordPart);
    //replace original row with the word-excluded part of the line

    
    
    let target = originalArr[rowIndex + 1]
    lastSpaceIndex = target.indexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    //split frontPart at space index
    
    //no dashes, filled row with characters
    if (lastSpaceIndex === -1)
    {
      
      return originalArr
    }

    //this!
    let [wordPart1, trimmedLeft1] = this.splitAtIndex(target, lastSpaceIndex + 1);

    target = originalArr[rowIndex]
    lastSpaceIndex = target.lastIndexOf("-");
   
    let frontPieceWord = originalArr[rowIndex] 
    let [trimmedLeft2, frontWordPart1] = this.splitAtIndex(frontPieceWord, lastSpaceIndex + 1);


    totalWord = [...frontWordPart1, ...wordPart]
    
    const combinedArr = [...wordPart1, ...wordPart];

   
     let [combinedArrWidth, finalRemainder] = this.splitAtIndex(combinedArr, this.maxCols);

    

    let value = rowIndex;
    
    if(wordPart.length  + wordPart1.length > 7 )
    {
      this.flagToManyDashes = true
      
      return originalArr

      //console.log("1z: ", wordPart)
      //console.log("2z: ", wordPart1)
      ////cover wih dashes
      //alert("row : ", rowIndex);
      //originalArr[rowIndex + 1] = wordPreturnart
      //originalArr = this.fillRowWithDashes(rowIndex+1, originalArr)
      //put wordpart here, row after 7 characters
      //this.insertNewArr(originalArr, wordPart1, rowIndex + 2,0)
      //return originalArr
    }

  
  
    originalArr[rowIndex] = trimmedLeft2;



   //originalArr = this.fillRowWithDashes(rowIndex, originalArr)
  this.insertNewArr(originalArr, wordPart, rowIndex+1,0)
  originalArr = this.fillNullWithDashOnRow(rowIndex , originalArr)
 

  
  //this.insertNewArr(originalArr, finalRemainder, rowIndex - 1,0)
   
  
    //this.fillNullWithDashOnRow(rowIndex, originalArr)
    
    
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
    console.log("adjust2: ", originalArr)
    return originalArr;
  }

 
  /////////


  // combined on next row, delete former/8
insertNewArr(originalArr, insertedArr, rowIndex, colIndex)
{
  

  //alert("insert: ", rowIndex);

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

    if(insertedArr == "-"){

      return originalArr
    }

    let lastSpaceIndex = targetRow.lastIndexOf("-");
     //split the original row at that index into "front" & "back" pieces
    const [frontPiece, backPiece] = this.splitAtIndex(targetRow, (colIndex));
    
    //combined with the inserted value which is a single valued array
    let combinedArr = [...frontPiece,  ...insertedArr, ...backPiece, ];

    

    // a - - - - -
    console.log(consolePad, "frontPiece", frontPiece);
    console.log(consolePad, "backpiece", backPiece);
   
    console.log("ca9: ", combinedArr);
    console.log("1x:", originalArr[0][5])
    console.log("ri1: ", rowIndex)
    console.log("ir1: ", this.initialRow)
    console.log("z: ", originalArr)
    
    
    

    console.log("ca: ", combinedArr)
    console.log("cols: ", this.maxCols)
    console.log(consolePad, "combined array:");
    console.log(consolePad, combinedArr);

    //alert("z")
    //does combined array have less characters than this maxCols, //the new array fits on one line
    if (combinedArr.length <= this.maxCols) {
      
      console.log(consolePad, "new array fits on one line");
      //overwrite insertedArr[rowIndex] with combined array
      originalArr[rowIndex] = combinedArr;
      console.log("ca2: ", combinedArr)
      //console.log(consolePad, "after row insertion:", this.snapshot(originalArr));
      alert("1");


    //does not fit in the row 
    } else {


      //alert("y")
      //alert("here33");
      //new array too long to fit on one line
      console.log(consolePad, "need to split lines");
      //split the combinedArr to have length of maxCols


      //THESE ARE THE VALUES, ASSUMING THESE ARE ALL INDUCED HERE, THEY WILL BE USED CORRECTLY
      const [trimmedLine, remainder] = this.splitAtIndex(combinedArr, this.maxCols );
      console.log(consolePad, "trimmedLine4 ", trimmedLine);

      //Used to pass as the next first value
      console.log(consolePad, "remainder4 ", remainder);
      //remainder[0] = ''

      //is this: originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);  :  a over b causes b to move left once ; without:  correct
      //without:  right and than left right disappears.  with:  works, to next line 
      

      //if(originalArr[rowIndex][6] != "-" )
      
      //CONSIDER THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      /*this function is broken, one of the adjustfors... too. */
      
      
      if(originalArr[rowIndex][6] != "-" && remainder[0] == "-") {

        console.log("remx: ", remainder)
      //originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);
      return originalArr
      }
      



        console.log("no word broken on trimmed line")
          
         originalArr[rowIndex] = trimmedLine;
        console.log("replace original array row with trimmed line")

         console.log(originalArr)
         //if there's anything left over, push it into position 0 of the next row
         if (remainder.length > 0) {
          //alert("w");
           console.log("trimmed line had remainder afterwards")
           console.log("origianalArr1: ", originalArr)
           console.log("remainder1: ", remainder);
           //put on next line

           //if(originalArr[rowIndex][6]  === "-" && originalArr[rowIndex+1][0] === '-'){
           
           //originalArr = this.insertNewArr(originalArr, remainder,rowIndex+1, 0);
           

          //let lengthofWord = 
           originalArr = this.insertNewArr(originalArr, remainder,verticalCursorPosition/10+1, colIndex);
           console.log("vert: ", verticalCursorPosition/10+1)
           console.log("vert2: ", rowIndex+1)
           //this.insertClean(false, originalArr, insertedArr, rowIndex+1, colIndex) 
           
           //return originalArr
           //}
          
          /*
           try{if(originalArr[rowIndex][6]  === "-" && originalArr[rowIndex+1][0] === '-'){

            //alert("in here")
           originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);
           //return originalArr
           }
          }  catch (e){
            alert("caught");
            createNextRow()
            //this.pressedEnter(originalArr, verticalCursorPosition/10, horizontalCursorPosition/5)
            drawGrid
            return originalArr
          }

           */


           console.log("array after inserting remainder:", originalArr);
           console.log("origianalArr2: ", originalArr)
         }
         //alert("a")
         /////////////
         //////////////////////////////////////////////////////////////////
         //BOTH BORDER CASES SUPPORTED (DIFFERENT ORDER), CALLS ADJUSRFORWORDBREAKS CORRECTLY
         //NEWEST PROBLEM, WHEN THERE IS A LETTER ON ROW ZERO COLUMN 6, IT DISAPPEARS WHEN THERE IS AN INSERT LIKE ON ROW 0 COL 3
         //THIS WAS JUST SOLVED, TRIED ONE TIME AND WORKED. THIS IS WHERE I LEFT OFF (LINE 413:  originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);)


         //////////////////////////////////////////////////////////////////
         //if  ( originalArr[rowIndex ][6] !== "-")
         {
          
          //this.insertNewArr(originalArr, insertedArr, rowIndex, colIndex)
          //return originalArr
          
          //alert("d");
            //originalArr[rowIndex+1][0] = "Z"
            console.log("12: " , originalArr)
         }


         //////////
      if(rowIndex < 1 )
      {
        rowIndex = 1
        return originalArr
      }

      if(rowIndex > 5)
      {
       
        //rowIndex = 5;
        //return originalArr
      }
      

     

      

      


       ////////////
         
         // ASSUMPTION:  THIS FUNCTION TAKES IN THE INPUT VALUES AND ASSUMING THEY ARE CORRECT, SHOULD OUTPUT THE NEWLY INSERTED ARRAY
         // ALSO CHECKS THAT AS ELSE SAYS, DOES NOT FIT IN THE ROW:  (does not fit in the row ) IS COMMENTED    
         //
         //  Inputs:
     
          // this is where word is broken across row
          //  trimmedLine is the line on the left that doesn't include insert array and remainder array  
          //  remainder - is the array after the inserted value 
          //  originalarr - is the entire array before the insert
          //  rowIndex - the value pertaining to the position vertical as index
          //  colIndex - the position pertaining to the horizontal value as index

          if (rowIndex+1 == 1){
            //rowIndex= 1
          }
      //alert("b")                                                                                          -1, is second afrgment
         

      //originalArr = this.fillNullWithDashOnRow(rowIndex ,originalArr)
      
      //originalArr = this.fillNullWithDashOnRow(rowIndex + 1 ,originalArr)
      //top to bottom

      console.log("check: ", originalArr)
      //originalArr[5][0] = "-"
      //originalArr[5][0] = "-"

      //LOOK at remainder at 721 amd other function two - when commented in/out does half character situations
      //Uncaught TypeError: Cannot read properties of undefined (reading '5')
      
      
      
      if(0){
      //if  (originalArr[rowIndex][6] !== "-" && originalArr[rowIndex +1 ][0] !== "-" ){

          //originalArr = this.adjustForWordBreaks_TopToBottom(
        
          /*
          alert("bottom to top")
            originalArr = this.adjustForWordBreaks_BottomToTop(
            trimmedLine,
            remainder,
            originalArr,
            rowIndex,
            colIndex,
          
          );

          */
          return originalArr

         } 
         
         
         //bottom to top
        if(0)// (originalArr[rowIndex ][0] !== "-" && originalArr[rowIndex - 1 ][6] !== "-"  )
         {
          alert("top to bottom")
        
         
         
            console.log("here1: ", rowIndex )

        

        

        
       // originalArr = this.adjustForWordBreaks_BottomToTop(
        /*
        originalArr = this.adjustForWordBreaks_TopToBottom(
        
        trimmedLine,
        remainder,
        originalArr,
        rowIndex,
        colIndex,
      
      );
         
          */
      }


      
     
      

      
        return originalArr
      
      
      }  // ...did not fit in row 



      //////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////

  
  //alert("put here");
  console.log(consolePad, "**!!END OF ITERATION ", innerCounter, "!!**");
  console.log(consolePad, this.snapshot(originalArr));
  console.log(consolePad, "-------------");

  return originalArr;   //function ends here

//no row, so create one
}  else{

alert("i");
}

return originalArr
}

  
//insert into a clean duplicate bc it's nicer
insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) 
{
  
  if(isFromIndex === true){
  this.initialRow = rowIndex
  //this.initialColumn = colIndex
  }

  
  let newArray2 = this.snapshot(originalArray);
  console.log("oa2: ", originalArray)
  return this.insertNewArr(newArray2, insertedArray, rowIndex, colIndex);
}










}