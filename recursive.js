

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

  //rid element

  //alert("here")
  //check last index
  //if dash, just move characters in row
  //if a character:
  //move characters to left
  //move, on next row, [0], to previous row [6]
  //move all characters to left
  //if dash end otherwise, continue
  
  //move charactes to left, by deleting element:
  //

  //remove one element at rowindex
  const removed = array[row].splice(1, 1)

  /*
    1234567
    abcdefg
  */

    return

  }

  deleteColumnInTwoDimArrayDontMakeDash(array, col, row)
{
  console.log({col})
    array[row-1].splice(col-2, 1)
    

    return(array)
}

deleteColumnInTwoDimArray(array, col, row)
{
  console.log({col})
    array[row-1].splice(col-2, 1)
    array[row-1][6] = "-"

    return(array)
}



deleteRow(arr, rowIndex){

  arr.splice(rowIndex, 1)
  return arr;

}

fillMovedWordWithDash(rowIndex , arrayToChange, startingIndexRow)
{
   
for(let i = startingIndexRow; i< WIDTH; i++){
  
  if (arrayToChange[rowIndex ][i] !== '-')
  
  {
   
    arrayToChange[rowIndex ][i] = '-'
  }
}
}



fillRowWithDashes(rowIndex, arrayToChange){
  
  for(let i = 0 ; i < WIDTH ; i++){

    arrayToChange[rowIndex-1][i] = "-"
  }

  return arrayToChange

}



//isUndefined(_arr, _index1, _index2) {
//  try { return _arr[_index1][_index2] == undefined; } catch(e) { return true; }
//}

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



passInHere( bool, originalArr, key,  x, y)
{
  
  originalArr = Recursive.insertClean(bool, originalArr, "Z", y, x )
  return originalArr

}


isDeletePossible(rowIndex, columnIndex)
{
  

  //  THIS ISNT RIGHT
  /*
  for (i = 0; i < WIDTH ; i++)
  {
  for(j = 0 ; j < HEIGHT; j++){

      if(originalArr[rowIndex-1][WIDTH-1] !== "" || typeof originalArr[rowIndex-1][WIDTH-1] !== "undefined"   )
      BreakoutOfDelete = false
      return this.BreakoutOfDelete
    }

  }

      BreakoutOfDelete = true
      return this.BreakoutOfDelete
*/
}


  
deleteCharacters(originalArr,counter,rowIndex,colIndex)
{

  //rowIndex = rowIndex + 1
  // delete character from rowIndex if there is a character at row+ 1, [0]
// A.)move that character up to rowindex - 1 [6]
// move thhat lines characters to th e left
// if there is a character at row+1 [0] goto A.)


    //if(rowIndex >= 7)
    //{
    //  return originalArr
    //}

    //Check if there are spaces/nulls left of volImdex, if not return out of here without deleting

    
    //DO THIS
    //let BreakoutFlag = this.isDeletePossible(rowIndex, colIndex)
//
//    if(BreakoutFlag == true)
//    {
//      return originalArr
//    }
   
    //deletes the character
    originalArr = this.deleteColumnInTwoDimArray(originalArr, colIndex, rowIndex )
    //colIndex = colIndex + 1
    //rowIndex = rowIndex + 1
    //moves first character to complete top row
    ////originalArr[rowIndex][6] = originalArr[rowIndex+1][0]
    //complete top row
    let topLine = originalArr[rowIndex - 1]
    //next row, needs to get first character 
    let topLineNextRow = originalArr[rowIndex]
    //let lastSpaceIndex = 1
    
    let lastSpaceIndex = topLine.lastIndexOf("-");
    //this is top row, get first dcharacter
    let [lineBesideLeftMostCharacter, firstCharacter ] = this.splitAtIndex(topLine, lastSpaceIndex);
    

    //let value = originalArr[rowIndex+1][6]
    //let value2 =  [ ...lineBesideLeftMostCharacter, ...value] 
    //originalArr[rowIndex] = value2
    
    
    //originalArr[rowIndex] = topLine


    

    let lastSpaceIndex2 = topLineNextRow.lastIndexOf("-");

    //this is second row, getting changed
    let [firstCharacterOfNextLine, lineBesideLeftMostCharacterNextRow  ] = this.splitAtIndex(topLineNextRow, 1); 
    //makes top row 
    let completeTopRow = [...lineBesideLeftMostCharacter, ...firstCharacterOfNextLine]
    originalArr[rowIndex - 1] = completeTopRow

    this.deleteCharacters(originalArr,counter,rowIndex+1 ,colIndex);
    

    drawGrid()
    return originalArr
  }

pressedEnter(originalArr,rowIndex3,column)
{

  if(rowIndex3 > HEIGHT-1 )
  {
    //HEIGHT = HEIGHT + 1
    
  }
  
  //make left and right by first dash
  //put left side on same line
  //put right side on next line with push
  
  let target = originalArr[rowIndex3] 
  let lastSpaceIndex = target.indexOf("-");
  let [leftWord, rightWord] = this.splitAtIndex(target, lastSpaceIndex);
  let [leftWord1, rightWord1] = this.splitAtIndex(leftWord, column)

  //leftWord = ["2","2","2","2","2","2","2" ]

 
  originalArr[rowIndex3] = leftWord1
  originalArr.splice(rowIndex3+1,0,rightWord1)

  originalArr = this.fillNullWithDashOnRow(rowIndex3 , originalArr)
  originalArr = this.fillNullWithDashOnRow(rowIndex3+1 , originalArr)
  //alert("@@@@")
  HEIGHT++
  drawGrid(HEIGHT, WIDTH)

  
  return originalArr
   
/*
  /////////////////
  //otherwise:

  let lastSpaceIndex1 = originalArr[rowIndex3].lastIndexOf("-");
  //no dashed
  if(lastSpaceIndex1 == -1 )
  {

  }

  let frontPart = originalArr[rowIndex3]
  let [leftPiece, rightPiece] = this.splitAtIndex(frontPart, lastSpaceIndex1);
  rightPiece = ["1","1","1","1","1","1","1" ]
  


  //////////////

  //if in left piece than  make this  -------
  //


  originalArr.splice(rowIndex3+1,0,rightPiece)
  
  HEIGHT++
  drawGrid(HEIGHT, WIDTH)
  return originalArr
*/   
}

///////////// SOME HOW, SET THIS TO A RANGE OF DELETES, ETC.

//Recursivley, checks each line and determins if each line needs to be moved to the left once. 

//  ELSE 
deletecharacters2(rowIndex)
{


  //for testing
  moveAllWordsAcrossBorder(rowIndex)

  alert("test");
  return(originalArr)

  //move chatracters only on this  line
  if(originalArr[rowIndex][6] == "-")
  {
    
    originalArr = this.deleteColumnInTwoDimArray(originalArr, colIndex+1, rowIndex+1)
    return originalArr
  }
  //move characters on next line to
  else
  {
    //move rowindex+1 0 to  row index 6
    //delete rowindex+1 0
    if (rowIndex == HEIGHT)
    {
      return originalArr
    }
    originalArr[rowindex+1][0] = originalArr[rowIndex][6]
    originalArr = this.deleteColumnInTwoDimArray(originalArr, colIndex+1, rowIndex+1)
    
    this.deletecharacters2(rowIndex+1)

  }

  
}

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

    //alert("in")
    //return originalArr

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
  const [word1, remainder1] = this.splitAtIndex(combined, 7);
  remainder  =  [...remainder, ...remainder1]

  originalArr[rowIndex] = trim1 
  originalArr[rowIndex+1] = word1
  this.fillNullWithDashOnRow(rowIndex+1 ,originalArr)
  this.fillNullWithDashOnRow(rowIndex ,originalArr)

 
  
  
  
  
  
  //originalArr = this.deleteRow(originalArr, rowIndex)
  if(rowIndex >= 3)
  {
    //return originalArr
  }
  //originalArr.push (["A", "-", "-", "-", "-", "-" , "-" ],)
  //this.pressedEnter(originalArr,HEIGHT-1,colIndex)
  //originalArr = this.fillNullWithDashOnRow(1 , originalArr)
  
  //originalArr.push (["A", "-", "-", "-", "-", "-" , "-" ],)
  drawGrid(HEIGHT, WIDTH)
  //alert("words...");
  //second row holds combined
  //originalArr = this.deleteRow(originalArr, rowIndex)
  //last parameter?
  //this.moveAllWordsAcrossBorder(originalArr, remainder, rowIndex + 1, 0)
  //this.insertNewArr(originalArr,remainder,rowIndex+1,0)
  //originalArr = this.deleteRow(originalArr, rowIndex)

 
  this.moveAllWordsAcrossBorder(originalArr,[], rowIndex+1,colIndex)
  
 
  //originalArr.push (["A", "-", "-", "-", "-", "-" , "-" ],)

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
    //DeleteFlag = false
   
  }
}
  //originalArr = this.deleteRow(originalArr, rowIndex)
  
  //originalArr.push (["B", "-", "-", "-", "-", "-" , "-" ],)
  drawGrid(HEIGHT, WIDTH) 
  //originalArr = this.fillNullWithDashOnRow(1 , originalArr)
  
  //createNextRow()
  

  
  //originalArr.push (["A", "-", "-", "-", "-", "-" , "-" ],)
  return (originalArr)

 

}



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

//shifts all rows left less than length of the bottom left word 
recursionFunction(remainder, rowIndex2, originalArr){

  if (rowIndex2 == HEIGHT-2)
  {
    alert("in")
    return(originalArr)
    
  }
  
  //remove word on bottom row and shift all chafracters left that amount of lenght

  // row is second row that needs to be moved three left
  let lineToShift = originalArr[rowIndex2 + 1]

  //remove left characters that were moved
  //get the lline after this one 
  //combine the two
  //split at width
  //call function
  let[ left1, trim1] = this.splitAtIndex(lineToShift, 3 )
  let target = originalArr[rowIndex2+2]

  

  let combined = [...remainder, ...trim1, ...target]


  let[ left2, trim] = this.splitAtIndex(combined, WIDTH )

  originalArr[rowIndex2 + 1] = left2

  //+2
  this.deleteRow(originalArr, rowIndex2+2)

  originalArr.push(["-", "-" , "-", "-" ,"-", "-" ,"-", ]);


  this.recursionFunction(trim, rowIndex2 + 1, originalArr)

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

  //ale
  
  
  //alert("worked")
  
 

  
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







BottomToTopDelete()
{
  if (frontPart.at(-1) == "-" || remainder[0] == "-") {
  //if line ends *without* breaking word (front ends with space, or remainder starts with one)
  

}else{

  //let targetRow = originalArr[rowIndex];




}

}

}


//testArray()
//{
//console.log({testArr});

/*
testArr = this.insertClean(
  true,
  this.nestedArray,
  ["x", "y", "z", "-", "l", "m", "n", "-", "p", "q"],
  0,
  6


}

*/

// TEST SECTION
//console.log({testArr});
//testArr = this.insertClean(
//  this.nestedArray,
//  ["x" ],
//  0,
//  6
//);

//console.log("insert [x,y,z,'-',l,m,n,o,p] at [0][2]");
//console.log({testArr});
