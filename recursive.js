//TEST ENTER
//TEST DELETE?
//WRITE DESTRUCTIVE INSERT 
//WRITE DESTRUCTIVE DELETE
//GOOD PLACE TO QUIT, BAILOUT LOOKS GOOD, AND JUST APPLIED QUICK FIXE!
//NEXT AFTER THE ABOVE IS DASHES
//LAST BRANCH SHOULD BE PRETTY MUCH OKAY
//lastRowIndexToPushOn MUST BE SET TO MAXIMUM TO CREATE A NEW ROW AT checkOnLastLineSoCreateRow
//INITIALINSERT needs to bail out when dash, pushrow has example and is called wit rowindex or rowindex+1
//last index aftar cursor

class RecursiveClass {
  constructor() {
  this.counterOfRows = 0
  this.CursorOnLastColumn = false
  this.lastRowIndexToPushOn = -1
  this.checkOnLastLineSoCreateRow = false
  
  
}

  deleteRow(arr, rowNumber) 
  {
      arr.splice(rowNumber, 1);
      return arr;
  }


    createRow(grid, rowIndex) {
    //remove last line, which is exclamation marks
    //this.deleteRow(grid, rowIndex+1) 
    //add a new row of nulls
    grid.push(["-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-","-", "-", "-", "-", "-", "-" , "-" ]),
    //add exclamation marks at end again, which is for padding
    //grid.push(["!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!","!", "!", "!", "!", "!" , "!" ]),
    //important, allows new line to display in the drawgrid
    HEIGHT++ 
    return grid
    
  }

  getLastSpaceOrNull(grid ,topRow){
  //get left phrase before last dash
  //checks for either space or dash, whichever is less characters
  let lastIndexOfNullOnTopRow = topRow.lastIndexOf("-");
  let lastIndexOfSpaceOnTopRow = topRow.lastIndexOf(" ");
  let maxIndexOfNullOrString = 0
  if(lastIndexOfSpaceOnTopRow >= lastIndexOfNullOnTopRow){
    maxIndexOfNullOrString = lastIndexOfSpaceOnTopRow
  }else{
    //choose space or null character that is farthest right on row
    maxIndexOfNullOrString = lastIndexOfNullOnTopRow
  }
  if (maxIndexOfNullOrString === -1){
    return grid
  }
  //gets the word after dash or spacew
  const [left, rightWordAtEndOfRowOne] = this.splitAtIndex(topRow, maxIndexOfNullOrString + 1);
  return {leftSide: left, rightSide: rightWordAtEndOfRowOne}
}

//8/13/24
//over border in middle
//right on row end without pushing
//three pushes at one time.+
//top row
//CHECK FULL ROWS
 
  pushWords(grid, remainder, rowIndex)
  {
    
      
      
    //CHECK FOR BAIL OUT AND IS NOT ON LAST ROW
    if(rowIndex <= HEIGHT-1 && rowIndex > this.lastRowIndexToPushOn  && this.lastRowIndexToPushOn != -1){
      return grid
    }
    //PUSHING IS HAPPENING, IF ON ROW ABOVE LAST AND THERE IS A CHARACTER ON LAST ROW ON BOTTOM ROW, THAN CREATE ROW
    //row on second to  last row
    if(rowIndex === HEIGHT-1){
      //looking if there is a character of bottom row, if so create a row and continue with push
      if(grid[HEIGHT-1][WIDTH-1] != DASH ){
      this.createRow(grid, rowIndex)
      }
      //return grid
    }else if (rowIndex > HEIGHT-1){

      return grid
    }

   
    //if (rowIndex == HEIGHT - 1){
    //  return grid
    //}

    //HEIGHT - ?
    if(rowIndex === false){
    return grid
    //waiting for a createrow from insert function - HEIGHT defaults at -1, so it
    //is + 2 because there is a row of exclamation marks at the end of matrix, so 
    //it is checking for a row two rows down  
    this.createRow(grid, rowIndex)
    let topRow = grid[rowIndex];
    //finds the last word after the last space or null, word id on top row, right side
    
    
    ///////////IF THIS CODE IS USED, CHANGE THIS TO USE WITH, "holder" 
    let [unusedcheckthis, rightWordAtEndOfRowOne] =  this.getLastSpaceOrNull(grid, topRow)
    ////////////



    //length of word
    let lengthOfRightWordAtRowOne = rightWordAtEndOfRowOne.length
    //fill spaces after row on bottom row, with dashes
    let RowOfNulls = []
    for(let i = 0; i < WIDTH - lengthOfRightWordAtRowOne; i++){
      RowOfNulls[i] = "-"
    }
    //move row of first row to second row and add nulls
    const secondRow = [...rightWordAtEndOfRowOne, ...RowOfNulls]
    
    grid[rowIndex+1] = secondRow
    //fill top row with dashes where moved text was
    for(let i = WIDTH - lengthOfRightWordAtRowOne; i< WIDTH; i++){
      grid[rowIndex][i] = "-"
      }
    //drawGrid(HEIGHT, WIDTH)
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET)
      return grid
    }


    //DECREASE ALL ROWINDEXES BY ONE

    
    
    ////////////////////////////
    ////////////////////////////
  //check for a push word situation, a character on last column of row, and a character on next row,
    //first column
    if ((grid[rowIndex][WIDTH-1] != "-") && ((grid[rowIndex][WIDTH-2] != "-") || 
    (grid[rowIndex+1][0] != undefined && grid[rowIndex+1][0] != "-" )) )
    {

      let holdthis = rowIndex+1
    //end base case
    let wasVariablegridCheck = []
    let anothertWordAtEndOfRowOne = []
    let topRow = grid[rowIndex];
    let bottomRow =grid[rowIndex+1];// grid[verticalCursorPosition/10 + 1];
    let characterCounter = 0
    let holder = this.getLastSpaceOrNull(grid,topRow)
    wasVariablegridCheck = holder.leftSide
    anothertWordAtEndOfRowOne = holder.rightSide
    let lengthOfRightWordAtRowOne = anothertWordAtEndOfRowOne.length
    //before first space or null, whichever is first  
    let firstIndexOfNullOnBottomRow = bottomRow.indexOf("-");
    let firstIndexOfSpaceOnBottomRow = bottomRow.indexOf(" ");
    if(firstIndexOfNullOnBottomRow === -1){
      firstIndexOfNullOnBottomRow = 27
    }
    if(firstIndexOfSpaceOnBottomRow === -1){
      firstIndexOfSpaceOnBottomRow = 27
    }
    let lastIndexOfFirstWord = 0
    //choose space or null character that is farthest right on row
    if(firstIndexOfSpaceOnBottomRow < firstIndexOfNullOnBottomRow){
    lastIndexOfFirstWord = firstIndexOfSpaceOnBottomRow -1
    }else{
    lastIndexOfFirstWord = firstIndexOfNullOnBottomRow -1
    }//word id onm left
    const [firstWordBottomRow, indexAfterLeftWordBottomRow] = this.splitAtIndex(bottomRow, lastIndexOfFirstWord+1 );
    let lastIndexOffirstWordBottomRow = firstWordBottomRow.length
    let EmptySpacesAFTERBottomLeftWord = 0
    let LengthOfNullsAndSpacesAfterLeftWord = 0
    
    
    
     //!!!!!!!!!!!!!!!!!!!!!!!!!!
    //get next dash or space after word on left - bottom row
    //for(let i = lastIndexOfFirstWord+1 ; i < WIDTH; i++){
    //  if (grid[rowIndex+2][i] != "-" &&  grid[rowIndex+2][i] != " "){
    //        break
    //  }
    //  LengthOfNullsAndSpacesAfterLeftWord++
    //}
   
    LengthOfNullsAndSpacesAfterLeftWord = 9
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    //will word fit below in the spaces and nulls that are before the next real character
    if(lengthOfRightWordAtRowOne <= LengthOfNullsAndSpacesAfterLeftWord){
      let combined = []
    //characters will be moved from top to bottom, the final right side has empty
    //elements that are not assigned yer
     const [removeThis, afterLeftWordWithReservationForMovingCharacters] = this.splitAtIndex(indexAfterLeftWordBottomRow, lengthOfRightWordAtRowOne );
    //put row together
    combined = [...anothertWordAtEndOfRowOne, ...firstWordBottomRow, ...afterLeftWordWithReservationForMovingCharacters]
    
    let lengthOfFirstWordBottomRow = firstWordBottomRow.length
    //get remainder for next recursive call - this is one rows worth
    const [newBottomRow, newRemainder] = this.splitAtIndex(combined, WIDTH);
    ////drawGrid(HEIGHT, WIDTH)
    //assign row
    grid[rowIndex+1] = newBottomRow
    ////drawGrid(HEIGHT, WIDTH)
    //set cursor at next row, first column//
     if(lengthOfRightWordAtRowOne == 0){
    }else{
    //fill in moved text space with dashes on top row
    for(let i =  WIDTH - lengthOfRightWordAtRowOne ; i < WIDTH ; i++){
      grid[rowIndex][i] = '-'
    }
    }
    //check if cursor is on the right word, if so, proceed with below
    let IsOnLeftTopWordForPushWord = false
    let IsOnTopRightTextForMove = false
    //get position before when insert moves cursor right for test
    CursorMovements.cursorLeft()
    




    //////////////////////////
    //if cursor is on top right word, than set flag
    //for on top row - !!!!!!!  Verticalcursorposition possibly set here?    !!!!!
    if(rowIndex === verticalCursorPosition/10){
    for(let i =  WIDTH - anothertWordAtEndOfRowOne.length-1; i < WIDTH; i++){
      if (i === horizontalCursorPosition/5){
        IsOnLeftTopWordForPushWord = true
      }
    }
  }
      //resets text to insert position, before above.
      CursorMovements.cursorRight()
   
    if(IsOnLeftTopWordForPushWord){
    //determine where to put cursor on next tow, after insert
    for(let topLeftWordIndex = WIDTH - (anothertWordAtEndOfRowOne.length)-1; topLeftWordIndex< horizontalCursorPosition/5 - 1; topLeftWordIndex++){
      characterCounter++
    }
    //change cursor position based on if cursor is on last column
    if(this.CursorOnLastColumn == true){
      characterCounter = anothertWordAtEndOfRowOne.length
      horizontalCursorPosition = 0
      horizontalCursorPosition = characterCounter*5
    }else{
      verticalCursorPosition = verticalCursorPosition + 10
      horizontalCursorPosition = 0
      horizontalCursorPosition = characterCounter*5 - 5
    }
  }



  //////////////////////////
//checking bottom row, left word, for cursor on or to next character (blank)
let CursorIsInLeftWordOfBottom = false

if(rowIndex+1 === verticalCursorPosition/10){
for(let i =   0 ; i <  firstWordBottomRow.length + 1 ;  i++){
  if (i === horizontalCursorPosition/5){
    CursorIsInLeftWordOfBottom = true
     break
  }
}
}
if(CursorIsInLeftWordOfBottom ){
  horizontalCursorPosition = horizontalCursorPosition + 5
}

CursorIsInLeftWordOfBottom = false

this.pushWords(grid, newRemainder, rowIndex+1)


return grid  

}
    

}else{
  //advances to next row if grid not set up for this word push
  this.pushWords(grid, [""], rowIndex+1)
  return grid
}



}

////////////////////////////
////////////////////////////




fillNullWithDashOnRow(RowIndex, arrayToChange) {
for (let i = 0; i < WIDTH; i++) {
  if (
    arrayToChange[RowIndex][i] == "" ||
    arrayToChange[RowIndex][i] == " " ||
    typeof arrayToChange[RowIndex][i] == "undefined"
  ) {
    arrayToChange[RowIndex][i] = "-";
  }
}
return arrayToChange;
}
  
  splitAtIndex(arr, index) {
    console.log("index: ", index);
    console.log("arr: ", arr);
    const front = arr.slice(0, index);
    const back = arr.slice(index);
    return [front, back];
  }

  //6/19/24
  //  top empty row
  //  top on characters
  //  on first column
  //  on middle column
  //  on last column
  //  mid text
  //  last row, first, middle, last  
  //  //CHECK FULL ROWS
  pressedEnter(
    grid,
    rowIndex,
    colIndex,
    remainder,
    IsFirstTime
    ) {
    //if no remainder set it to null
    if (Object.keys(remainder).length === 0) {
      remainder = "";
    }
    //assign current row to be top row
    let topRow = grid[rowIndex];
    //row after toprow
    let bottomRow = grid[rowIndex + 1];
    //colindex is where cursor split the phrase into two halves
    let amtCharactersToPassToNextRow = WIDTH - colIndex;
    let [isntUsed, leftSideOfCursor] = this.splitAtIndex(
      topRow,
      colIndex
    );
    //set here for scope
    let secondRowDone = []
    let newRemainder = []
    //remainder is leftover from string when a widths worth of data is gotten
    let combine = [...remainder, ...bottomRow];
    //on initial call 
    if (IsFirstTime === true) {
      //combine left hand side of top at cursor and the bottom with remainder from last call
      let secondRowNearlyDone = [...leftSideOfCursor, ...combine];
      //cuts it to the size of one row
      [secondRowDone, newRemainder] = this.splitAtIndex(secondRowNearlyDone,WIDTH);
      //assign row with characters 
      grid[rowIndex + 1] = secondRowDone;
    } else {
      //like above but no text on left side because enter pushes next rows directly down
      //is size of one row
        [secondRowDone, newRemainder] = this.splitAtIndex(combine,WIDTH);
      //set second row
      grid[rowIndex + 1] = secondRowDone;
    }
    //on initial call, cover with null on right side, because it is carried to next line
    if (IsFirstTime) {
      for (let i = WIDTH - amtCharactersToPassToNextRow; i < WIDTH; i++) {
        grid[rowIndex][i] = "-";
      }     
    } 
    //no longer first time, done using value
    IsFirstTime = false
    //index is HEIGHT - 1, and is next value
    //is on last row with an enter, so create a new line
    if (rowIndex > HEIGHT-2) {
      this.createRow(grid, rowIndex+1)
      //fill in nulls after displaying text moved there from above
      let amountOfNullsForNewBottomRow = colIndex
      for(let i = WIDTH-amountOfNullsForNewBottomRow; i < WIDTH ; i++ )
      {
        grid[rowIndex+1][i] = "-"
      }
      return grid
    }
    //set for cursor on next line, first column
    horizontalCursorPosition = 0
    ////drawGrid(HEIGHT, WIDTH)
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    //enter effects next row here
    this.pressedEnter(
      grid,
      rowIndex + 1,
      colIndex,
      newRemainder,
      false
    );
    return grid;
  }

  //delete middle without dash at end and character on next line doesnt move
  //delete on last row, 2 and one on dash
  //delete on last row, 2 and none on dash
  //character on last row, delete middle and next row moves, row after doesn't
  //character on last row, delete first caharacter and other charatcres move corretcly
  //first character delete, characters below work fine.
  //first characetr at top left, characters move right, below one and multiple, rows
  //delete to raise row up from bottom left to top row right, character move right
  //test this, delete without character on first colmun of second row
  ////CHECK FULL ROWS
  //FIX DELETE ON FIRST COLUMN AND ROW
  deleteACharacter(remainder, rowIndex, columnIndex,  grid) {
    let counterOfUsedRows = 0
    let rowIndexInLoop = rowIndex
    //bails out of recursion - top row is the last row on the grid
   if(rowIndex == HEIGHT-1){
    let topRow = grid[rowIndex];
    //divide the row in to parts, at cursor location
    let [topRowLeftSide, topRowRightSide] = this.splitAtIndex(topRow, columnIndex+1) ;
    //strips of the character that was on the right side, so left is phrase without letter 
    let [removedLetter, rightSideRemovedCharacter] = this.splitAtIndex(topRowRightSide, 1) ;
    //the letter at cursor was removed so the new position is a null at far right side
    let combine  =  [...topRowLeftSide, ...rightSideRemovedCharacter, ["-"] ]
    grid[rowIndex] = combine
    return grid
   }
   let topRow = grid[rowIndex]
  //this is to check if there is a dash on last row of top row
  //????
  let anotherTopRowForCondition = grid[rowIndex]
  


  //is a dash - checks if top row has a dash on last character - will delete only on this line and add a null
  if (anotherTopRowForCondition[WIDTH-1] === "-"){
    let anotherTopRowForCondition = grid[rowIndex]
    //splits row to the two sides of cursor
    let [topRowLeftSide, topRowRightSideWithFrontChar] = this.splitAtIndex(topRow, columnIndex) ;
    //strips off the character that was on the right side
    let [removedThisCharacter, topRightSideRemovedCharacter] = this.splitAtIndex(topRowRightSideWithFrontChar, 1) ;
    let nullCharacter = ["-"]
    //combine the two pieces wihthout the character that was removed, and add a null at end
    let combine = [...topRowLeftSide, ...topRightSideRemovedCharacter, ...nullCharacter]
    grid[rowIndex] = combine
    CursorMovements.cursorLeft()
    return grid
  }
  //there is a character on end of row, so remove first row and take character from next row, put on toprow left end
  


  ///spaces too?
  else if (anotherTopRowForCondition[WIDTH-1] != "-" ){
    counterOfUsedRows = 0
    //determine how many rows of code with non null right side
    while(true){
      //now on last row so leave
      if(rowIndexInLoop == HEIGHT){
        break
      }
      if(grid[rowIndexInLoop][WIDTH-1] != "-")
      {
        //counts rows, and incrememtns row index
        rowIndexInLoop++
        counterOfUsedRows++
      }
      else{
        break
      }
    }
  let topRow = grid[rowIndex];
  //row under top row
  let bottomRow = grid[rowIndex+1]
  //take left most character from top row
  let [frontCharactersTopRow, topWithoutFrontCharacters] = this.splitAtIndex(topRow, columnIndex + 1) ;
  //remove characters from right hand side
  let [left, topRightWithoutDeletedCharacter] = this.splitAtIndex(topWithoutFrontCharacters, 1) ;
  //get character on next (bottom) row, first column
  let [bottomLeftmostCharacter, bottomWholeRowExceptFinalRow] = this.splitAtIndex(bottomRow, 1) ;
  //creates top row using first character from next row
  let combine = [...frontCharactersTopRow, ...topRightWithoutDeletedCharacter, ...bottomLeftmostCharacter ]
  grid[rowIndex] = combine
  //this is a function that has a recursion call.  
  this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(counterOfUsedRows, rowIndex+1, grid)
  CursorMovements.cursorLeft()
  return grid
  }
}


  removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(amtOfUsedRows, rowIndex, grid){
    //counter is used to check for proper amount of lines to be run
    this.counterOfRows++
    //if none at all bail or if run for all rows bail out of recursion 
    if (amtOfUsedRows === 0 || amtOfUsedRows+1 == this.counterOfRows)
      {
        this.counterOfRows = 0
        return grid;
      }
    //if on last row, bail out, base case
    if(rowIndex > HEIGHT-1)
    {
      this.counterOfRows = 0
       return grid
    }
    let topRow = grid[rowIndex]
    //row after top row
    let botttomRow = grid[rowIndex+1]
    //get left most characeter, on bottomrow. Is put on most right side of row above it, top row.
    let leftCharacterofBottomRow = botttomRow[0]
    //on final row and was a deletion so append a null character to end
    if(rowIndex == HEIGHT-1){
      leftCharacterofBottomRow = "-"
    }
    //get top row without left most character
    let [topLeftmostCharacter, topRowWithoutLeftCharacter] = this.splitAtIndex(topRow, 1) ;
    //recreate the top with the next row's left character, if last row replace last character with null.
    let newTopRow = [...topRowWithoutLeftCharacter, ...leftCharacterofBottomRow]
    grid[rowIndex] = newTopRow
    //tail end recursion, runs until end of rows, or dash is encountered after number of rows
    this.removeLeftCharacterFrom2ndRowAndReplaceAboveOnMostRightSide(amtOfUsedRows, rowIndex+1, grid)
    //rest this global value, for use next time
    this.counterOfRows = 0
    return grid
 }

  displayGridAndCursor(){
  ////drawGrid(HEIGHT, WIDTH)
  drawCursor(
    horizontalCursorPosition + HOFFSET,
    verticalCursorPosition + VOFFSET)
  }


  //?
  //change cursor position to next row if not on last row and column
  advanceHorizontalOneTime(){
  if(horizontalCursorPosition/5 >= WIDTH-1  && verticalCursorPosition/10 >= HEIGHT-1)
  {
        return
  }
  if (horizontalCursorPosition >= (WIDTH-1)*5){
    horizontalCursorPosition = 0
    verticalCursorPosition = verticalCursorPosition + 10
  }else{
    horizontalCursorPosition = horizontalCursorPosition + 5
  }
  }

///////////////////////from cleanupPushword?

    //  push with letter on end  and a character in middle, push on left
    //  push with letter on end  and a character in middle, push on middle
    //  push with two rows on end, both move to next row
    //  two digits before two end points on end, all move correctly
    //  insert on empty row
    //  insert on row with chracters
    //  insert on last column with and without on last row and two there
    //  insert with dash on last character, otherwise full.
    //  insert with dash on last character, otherwise full, second line no dash on last character
    //  insert on last row, both with last character and null
    //  CHECK FULL ROWS
    //  //FIX INSERT ON RIGHT MOST COLUMN
    initialInsert(rowIndex, colIndex, grid, leftOverChar){
      //for displaying
      let horizString =  (horizontalCursorPosition/5).toString()
      let vertString = (verticalCursorPosition/10).toString() 
      let a = document.getElementById("xAndY")
      a.innerHTML = 'Horizontal' + horizString + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + 'Vertical: '+ vertString
      
      this.checkOnLastLineSoCreateRow = true;
      
      //from row now to end of each row, check for dash
      for(let i = verticalCursorPosition/10; i < HEIGHT; i++){
        if (grid[i][WIDTH-1] === "-"){
        this.checkOnLastLineSoCreateRow = false;
        break
        }
      }

      if(  this.checkOnLastLineSoCreateRow === true){
        
        this.createRow(grid, leftOverChar, rowIndex, colIndex)
        
      }
      if(rowIndex > HEIGHT -1){
        return grid
      }
      //these are the two lines we are using
      let topRow = grid[rowIndex];
      let lowerRow = grid[rowIndex+1]
      //splits array apart at insertion point
      let [leftTopRow, rightTopRow] = this.splitAtIndex(topRow, colIndex)
      //insert character at index
      let combineTopRow = [...leftTopRow, ...leftOverChar, ...rightTopRow]
      //this is one row, exactly, because of WIDTH
      let [finishedTopRow, leftOver] = this.splitAtIndex(combineTopRow, WIDTH)
      //there is a character on last row, do call function which is recursive
      //if (grid[rowIndex][WIDTH-1] != DASH)
        {
        //push rows right because of insert
        grid[rowIndex] = finishedTopRow

        //checks character on left for cursor positioning
        if(horizontalCursorPosition/5 === WIDTH-1){
          this.CursorOnLastColumn = true
        }

        if(grid[rowIndex][WIDTH-1] === "-" && this.lastRowIndexToPushOn === -1 && rowIndex > horizontalCursorPosition/5){
          //sets row to bail out on in pushwords
          this.lastRowIndexToPushOn = rowIndex+1
          
          //CursorMovements.cursorRight()//rowindex -1 (2) : delete return
          //return grid
        }
        else{
          this.lastRowIndexToPushOn == HEIGHT-1
        }

        this.pushRowRight(rowIndex+1, colIndex, grid, leftOver)
        //grid[rowIndex] = finishedTopRow
        //On zero, because there will be a cursorright
        if(horizontalCursorPosition/5-1 === 0){
          //last time,this was true, used for setting  cursor
          this.CursorOnLastColumn = true
        }
        CursorMovements.cursorRight()
        return grid

      }
    }
/////////////////////////

////////from:???
checkOnLastLineSoCreateRow(grid, leftOverChar, rowIndex, colIndex){
      
  //if we are on the last line and there is a character on rightmost character
  //create a row if on last row
  //first part 
  //if (grid[HEIGHT-1][WIDTH-1] != "-" && rowIndex <= HEIGHT-1 && this.lastRowIndexToPushOn >= HEIGHT-1){
  
  //this needs to be set, lastRowIndex...,  so try this first  
  if (grid[HEIGHT-1][WIDTH-1] != "-" && this.AfterCursorAllRowsHaveNoDash){//} && rowIndex == HEIGHT-1){
    this.createRow(grid, rowIndex)
  }
  return grid
}
////////from:  cleanupPushWord

//called from index
//should be 12 is 13
//is 8 on pushword
//rowindex is top row
//top row will always be handled by insert
//topp row is -1 so do indexs started on row 1

pushRowRight(rowIndex, colIndex, grid, leftOverChar){

  let CharacterOnAllLastRows = true
  for(let i = verticalCursorPosition/10 ; i < HEIGHT-2 ; i++){
      if (grid[i][WIDTH-1] == "-"){
        CharacterOnAllLastRows = false
      }
  }

  if(CharacterOnAllLastRows == true){

    //this.createRow(grid, rowIndex)
  }

  //?
  if(rowIndex >= HEIGHT -1){
    return grid
  }

  drawGrid(HEIGHT, WIDTH)
  //two rows were using for push
  //let topRow = grid[(rowIndex-1)];
  let lowerRow = grid[rowIndex]
  let combineToBottomRow = []
  //if not a dash on last row end, than add that character on start of next line
  if (leftOverChar === "-"){
    combineToBottomRow = [...lowerRow]
  }else{
    combineToBottomRow = [...leftOverChar, ...lowerRow]
  }
  //one row, exactly, because of WIDTH, left over characters become remainder
  //for next call
  let [bottomRowReady, remainingChars] = this.splitAtIndex(combineToBottomRow, WIDTH)
  //let [left, remainingChars] = this.splitAtIndex(remainingChars, WIDTH)
  grid[rowIndex] = bottomRowReady

  drawGrid(HEIGHT, WIDTH)
  if(grid[rowIndex][WIDTH-1] === "-" && remainingChars == "" || remainingChars == [""] || remainingChars == "-"){
    return grid
  }
 
  

  /*
  if(rowIndex+2 <= HEIGHT-1 && grid[rowIndex+2][WIDTH-1] === "-"&& this.lastRowIndexToPushOn === -1  && rowIndex > horizontalCursorPosition/5){
    //sets row to bail out on in pushwords
    this.lastRowIndexToPushOn = rowIndex + 1
    //CursorMovements.cursorRight()
    //return grid
  }
  else{
    this.lastRowIndexToPushOn == HEIGHT-1
  }
*/
    drawGrid(HEIGHT, WIDTH)
    //push next row to right(one position)  recursion
    this.pushRowRight(rowIndex+1, 0, grid, remainingChars)
    
  return grid
  }

//////////////
}





