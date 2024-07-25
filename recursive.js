//comment push and initial, consider current repo for meld
//test meld commiting
class RecursiveClass {
  constructor() {
  this.counterOfRows = 0
  this.RowAddedCount = 1
 }

  deleteRow(arr, rowNumber) 
  {
      arr.splice(rowNumber, 1);
      return arr;
  }


  createRow(grid, rowIndex) {
    //add a new row of nulls
    grid.push(["-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-"   ,"-", "-", "-", "-", "-", "-" , "-" ]),
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
  return [grid,rightWordAtEndOfRowOne]
}

  //this last parameter checks for when the end of row already had a character.  This would
  //allow an end row key press to work if it is on top of it.  Because of this,
  //push word will function across that right end row.    
  pushWords(grid, remainder, rowIndex, CharacterOnRightAlready)
  {
    let rightWordAtEndOfRowOne = []
    if((rowIndex === HEIGHT - 1) && !CharacterOnRightAlready && grid[rowIndex][WIDTH-1] != "-"){
    //make a row at very end
    this.createRow(grid, rowIndex)
    drawGrid(HEIGHT, WIDTH)
    let topRow = grid[rowIndex];
    //finds the last word after the last space or null, word id on top row, right side
    const [unusedcheckthis, rightWordAtEndOfRowOne] =  this.getLastSpaceOrNull(grid, topRow)
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

    else if((rowIndex === HEIGHT - 1) && CharacterOnRightAlready && grid[rowIndex][WIDTH-1] != "-"){
      //let rightWordAtEndOfRowOne = []
      this.createRow(grid, rowIndex)
      let topRow = grid[rowIndex];
      const [unusedcheckthis, rightWordAtEndOfRowOne] =  this.getLastSpaceOrNull(grid, topRow)
      let bottomRow = grid[rowIndex+1]
      bottomRow = rightWordAtEndOfRowOne 
      grid[rowIndex+1] = bottomRow
      drawGrid(HEIGHT, WIDTH)
    }

      

    if(rowIndex === HEIGHT - 1){

      return grid
    }

    //end base case
    let wasVariablegridCheck = []
    let anothertWordAtEndOfRowOne = []
    let topRow = grid[rowIndex];
    let bottomRow = grid[rowIndex + 1];
    //////consolidate this
    [wasVariablegridCheck, anothertWordAtEndOfRowOne] =  this.getLastSpaceOrNull(grid,topRow)
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
    //get next dash or space after word on left - bottom row
    for(let i = lastIndexOfFirstWord+1 ; i < WIDTH; i++){
      if (grid[rowIndex+1][i] != "-" ){//&&  grid[rowIndex+1][i] != " "){
            break
      }
      LengthOfNullsAndSpacesAfterLeftWord++
    }
    //will word fit below in the spaces and nulls that are before the next real character
    if(lengthOfRightWordAtRowOne <= LengthOfNullsAndSpacesAfterLeftWord){
      let combined = []
    //characters will be moved from top to bottom, the final right side has empty
    //elements that are not assigned yer
     const [removeThis, afterLeftWordWithReservationForMovingCharacters] = this.splitAtIndex(indexAfterLeftWordBottomRow, lengthOfRightWordAtRowOne );
    //put row together
    combined = [...anothertWordAtEndOfRowOne, ...firstWordBottomRow, ...afterLeftWordWithReservationForMovingCharacters]
    //get remainder for next recursive call - this is one rows worth
    const [newBottomRow, newRemainder] = this.splitAtIndex(combined, WIDTH);
    ////drawGrid(HEIGHT, WIDTH)
    //assign row
    grid[rowIndex+1] = newBottomRow
    ////drawGrid(HEIGHT, WIDTH)
    //set cursor at next row, first column
    horizontalCursorPosition = 0
    //verticalCursorPosition = verticalCursorPosition + 10
    if(lengthOfRightWordAtRowOne == 0){
    }else{
    //fill in moved text space with dashes on top row
    for(let i =  WIDTH - lengthOfRightWordAtRowOne ; i < WIDTH ; i++){
      grid[rowIndex][i] = '-'
    }
    }
   //set for cursor.  Put cursor at end of inserted row.
    horizontalCursorPosition = horizontalCursorPosition + lengthOfRightWordAtRowOne * 5
    //recursive call
    this.pushWords(grid, newRemainder, rowIndex+1, CharacterOnRightAlready)
    }
      return grid
    }

  
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
  //this is to check if there is a dash on last row of top row, a new, fresh variable.
  let anotherTopRowForCondition = grid[rowIndex]
  
  //is a dash - checks if top row has a dash on last character - will delete only on this line and add a null
  if (anotherTopRowForCondition[WIDTH-1] === "-"){
    let anotherTopRowForCondition = grid[rowIndex]
    //splits row to the two sides of cursor
    let [topRowLeftSide, topRowRightSideWithFrontChar] = this.splitAtIndex(topRow, columnIndex+1) ;
    //strips off the character that was on the right side
    let [removedThisCharacter, topRightSideRemovedCharacter] = this.splitAtIndex(topRowRightSideWithFrontChar, 1) ;
    let nullCharacter = ["-"]
    //combine the two pieces wihthout the character that was removed, and add a null at end
    let combine = [...topRowLeftSide, ...topRightSideRemovedCharacter, ...nullCharacter]
    grid[rowIndex] = combine
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

    //this parameter checks for when the end of row already had a character.  This would
    //allow an end row key press to work if it is on top of it.  Because of this,
    //insert will function across that right end row.  
    initialInsert(rowIndex, colIndex, grid, leftOverChar, IsCharacterOnLastRow){
      //for displaying
      let horizString =  (horizontalCursorPosition/5).toString()
      let vertString = (verticalCursorPosition/10).toString() 
      let a = document.getElementById("xAndY")
      a.innerHTML = 'Horizontal: ' + horizString + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + 'Vertical: '+ vertString
      drawGrid(HEIGHT, WIDTH)
      this.checkOnLastLineSoCreateRow(grid, rowIndex, IsCharacterOnLastRow)
      drawGrid(HEIGHT, WIDTH)
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
      if ((grid[rowIndex][WIDTH-1] != DASH) && (grid[rowIndex][WIDTH-1] != " ")){
        //push rows right because of insert
        drawGrid(HEIGHT, WIDTH)
        this.pushRowRight(rowIndex+1, 0, grid, leftOver)
        drawGrid(HEIGHT, WIDTH)
      }
      //set row
      //grid[rowIndex] = finishedTopRow
      return grid
    }

checkOnLastLineSoCreateRow(grid, rowIndex, IsAlreadyACharacterAtEndOfRow){
      
  //if we are on the last line and there is a character on rightmost character
  //create a row if on last row
  if(rowIndex  >= HEIGHT )
  {
    return grid
  }
  //if (grid[rowIndex][WIDTH] != "-" && rowIndex >= HEIGHT - 2 && verticalCursorPosition/10 >= HEIGHT - 1  && IsAlreadyACharacterAtEndOfRow){
  
  if (grid[rowIndex][WIDTH] != "-" && rowIndex ==  HEIGHT - 1  && IsAlreadyACharacterAtEndOfRow && this.RowAddedCount == 1){
    this.createRow(grid, rowIndex)
    this.RowAddedCount++
    drawGrid(HEIGHT, WIDTH)
  }
  return grid
}


pushRowRight(rowIndex, colIndex, grid, leftOverChar){

  
  //bails out of recursion
  if(rowIndex > HEIGHT - 1){
    return grid
  }
  
  this.checkOnLastLineSoCreateRow(grid, rowIndex, true)//
  
  //two rows were using for push
  let topRow = grid[(rowIndex-1)];
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
  let [bottomRowReady, remainingChars] = this.splitAtIndex(combineToBottomRow, WIDTH )
  
  /////
  if(grid[rowIndex][WIDTH-1] == "-"){
    
    //this.pushRowRight(rowIndex+1, 0, grid, remainingChars)
  }
  /////

  grid[rowIndex] = bottomRowReady
 
    drawGrid(HEIGHT, WIDTH)
    this.pushRowRight(rowIndex+1, 0, grid, remainingChars)
  return grid
  }

}





