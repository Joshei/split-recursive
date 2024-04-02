

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
    this.RanBefore = false
    this.rem = []
    
  }
/////////////


//3/29/24 - looks okay 
moveAllWordsAcrossBorder(originalArr,remainder, rowIndex,colIndex){


  if (rowIndex >= 5){
    return originalArr
  }

 
  let target1 = originalArr[rowIndex];
  let target2 = originalArr[rowIndex+1]

  let lastSpaceIndex1 = target1.lastIndexOf("-");
  const [trim, topWord] = this.splitAtIndex(target1, lastSpaceIndex1 + 1);
  //let lengthOfDashesToApply = topWord.length

  let combine = [...topWord, ...remainder,  ...target2]
  const [row, remainder2] = this.splitAtIndex(combine, WIDTH);
  //const combine2 = [...row]
  originalArr[rowIndex+1] = row 
  drawGrid(HEIGHT, WIDTH)
  
  // replace topword with dashes, top word can be multpile characters 
  let topWordLen = topWord.length
  let indextoStartDisplayDashes = WIDTH - topWordLen
  for(let i = indextoStartDisplayDashes ; i <= WIDTH - 1 ; i++ )
  {
    originalArr[rowIndex][i] = "-"
  }
  drawGrid(HEIGHT, WIDTH)
  

  this.moveAllWordsAcrossBorder(originalArr,remainder2, rowIndex+ 1,colIndex)

  return (originalArr)
}



//////////////
insertCharacterToArray(array, col, row, character)
{
  array[row].splice(col,0, "W")
  
  
}

//col is the column, to add too
deleteKeyPressed(array, col, row){

  //remove one element at rowindex
  const removed = array[row].splice(col, 1)

    return

  }

putElementIn2DimArray(arr, row, column)
{
  arr.splice(1, 0, "W")

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
//Deletes word from bottom row, left to top right
//not thoroughly tested
recursiveDelete(originalArr, rowIndex, colIndex)
{

  // check if cursor is on a left bordered word
  // if not return

  //alert("!!!!")
  
  for(let i = colIndex ; i >= 0 ; i-- )
  {
    //not on a left bordered word
    if (originalArr[rowIndex][i] == "" || originalArr[rowIndex][i] == "-" )
    {
      alert("in if");
      return originalArr
    }

  }

  if (rowIndex >= 6)
  {
    
    return(originalArr)
    
  }
  


  //alert(rowIndex)
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
      return originalArr
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
    return originalArr
  }


  alert("here!!!&&&")


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
   
    
    
    //alert("1!")

    let lengthOfSpaceForWord = CharactersOfNextLine.length
    let index = WIDTH - lengthOfSpaceForWord 
    let [left,b] = this.splitAtIndex(topLine, index);

    let combine = [...left, ...CharactersOfNextLine]  
    originalArr[rowIndex-1] = combine 


    for(let i = 0 ; i < lengthOfSpaceForWord;i++)
    {
      originalArr[rowIndex][i] = "-"
    }


    /////////

       
          horizontalCursorPosition =  5*(6)
          verticalCursorPosition = verticalCursorPosition - 10
        


    /////////

    //verticalCursorPosition = verticalCursorPosition - 10 
    //horizontalCursorPosition = horizontalCursorPosition + 5*(WIDTH-1)
    //horizontalCursorPosition = (WIDTH - 1) * 5

    drawGrid(HEIGHT, WIDTH)

    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    )

    //alert("does it get here");
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



    //this.recursiveDelete(originalArr, rowIndex+1, 0)

   
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

  //check this false!!!
  this.insertNewArr(false, originalArr, finalRemainder, rowIndex + 1,0)
   
  
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
   //check this false!!!
  this.insertNewArr(false, originalArr, wordPart, rowIndex+1,0)
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

 
  

 
insertNewArr(IsFromIndex, originalArr, insertedArr, rowIndex, colIndex)
{



  if (rowIndex >= 6)
  {
    
    return(originalArr)
    
  }

  let targetRow = originalArr[rowIndex]

  if (targetRow) {
    console.log("tr: ", targetRow)
    //assuming there's a row here already
    console.log(
      //consolePad,
      "inserting array into an existing row of originalArr"
    );

 
  let [front, back] = this.splitAtIndex(targetRow, colIndex);

  let combine = []

  //initial call puts insert within row, second call puts leftover remainder at front of row
  if (IsFromIndex)
  {
    combine = [ ...front , ...insertedArr , ...back, ]
  }
  else
  {
    combine = [ ...insertedArr ,...front,  ...back, ]
  }
  
  let [row2, remainder1] = this.splitAtIndex(combine, WIDTH);
  


  //isn't recursive - there is no character on right border, so just move characters in this row
  //remainder set to null
  if ((originalArr[rowIndex][WIDTH-1] == "-" || originalArr[rowIndex][WIDTH- 1] == ""))
  {
    alert("horiz change");
    originalArr[rowIndex] = row2
    
    //horizontalCursorPosition = horizontalCursorPosition + 5
    if (IsFromIndex)
    {
      this.setXandYPositions()
    }
    drawGrid(HEIGHT, WIDTH)
    drawCursor(
      horizontalCursorPosition + HOFFSET ,
      verticalCursorPosition + VOFFSET
    )

      remainder1 = []
    
    return originalArr
  }
  

  //character in sixth position of row, so each row updated, if that 6th column continues to be had
  else
  {

    
    alert("section 2")
    originalArr[rowIndex] = row2
   

    let length = remainder1.length
    if (length > 0)
    {

      let target = originalArr[rowIndex+1] 
      
      let combine = [...remainder1, ...target]
      
      let [display, b] = this.splitAtIndex(combine, WIDTH);
      originalArr[rowIndex+1] = display

    this.fillNullWithDashOnRow(rowIndex+1 ,originalArr)  
      
      
    this.setXandYPositions()
    
    drawCursor(
      horizontalCursorPosition + HOFFSET ,
      verticalCursorPosition + VOFFSET
    )

    drawGrid(HEIGHT, WIDTH)

    //this call should not effect hor and vert

    this.insertNewArr(false,originalArr, b, rowIndex + 2, 0)

    return originalArr
  
    }
  
  }


  }else{ //no row,  so create one
    alert("create row")
    this.createRow(originalArr, insertedArr, rowIndex, colIndex)
   
    HEIGHT++
    drawGrid(HEIGHT, WIDTH)

    //this is not correct, yet
    drawCursor(
      horizontalCursorPosition + HOFFSET ,
      verticalCursorPosition + VOFFSET
    )

    return originalArr
  }

}


//Both positions will change.
setXandYPositions()
{
  
  
  if (horizontalCursorPosition/5 < (WIDTH - 1 )) {
    horizontalCursorPosition = horizontalCursorPosition + 5
  }else{
    
    horizontalCursorPosition = 0
    verticalCursorPosition = verticalCursorPosition + 10
    //alert("here1");

  }

  drawCursor(
    horizontalCursorPosition + HOFFSET ,
    verticalCursorPosition + VOFFSET
  )
  

}

  
createRow(originalArr, insertedArr, rowIndex, colIndex)
{
  if(insertedArr.length <= WIDTH)
  { 
    //insertedArr is less than col max than push array onto originalArr
    HEIGHT++
    originalArr.push(insertedArr);
  }
  else{
  //insertedArr is more than WIDTH
  //split row into front and remainder with WIDTH
  //push front onto originalArr
  //call createRow(remainder)
  let [front, remainder] = this.splitAtIndex(insertedArr, WIDTH);
  originalArr.push(front)
  HEIGHT++
  //CHECK THIS, false!!!!
  this.insertNewArr(false, originalArr, insertedArr, rowIndex+1, colIndex)
  return originalArr
  }
}
    

//insert into a clean duplicate bc it's nicer
insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) 
{
  
  if(isFromIndex === true){
  this.initialRow = rowIndex
  this.RanBefore = false
  //this.initialColumn = colIndex
  }

  
  let newArray2 = this.snapshot(originalArray);
  console.log("oa2: ", originalArray)
  return this.insertNewArr(isFromIndex, newArray2, insertedArray, rowIndex, colIndex);
}


}