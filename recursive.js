// 5/1/24


class RecursiveClass {
  constructor() {
    this.maxCols = 7;
    this.counter = 0;
    this.initialColumn = 0;
    this.mapCounter = 0;
    this.testcounter = 0;
    this.flag = 0;
    this.flagToManyDashes = false;
    this.testCounter = 0;
    this.BreakoutOfDelete = false;
    this.rem = [];
    //this.IsJustFromRecursive = false
    this.calledOneTimeAlready = false
    this.CounterForHeight = 0
    this.HasBeenToRecursiveFunction = false
    this.GCreateRowFlag = true
    this.HasBeenCalled = false
    this.counterOfRows = 0
    
  }

  
  copyArray(sourceArray, destArray, commonLength){

    for(let i = 0; i < commonLength; i++)
    {
      let tempValue = sourceArray[i]
      destArray[i] = tempValue
    }

    return destArray
    
  }

   //looks good - 4/26/24
  createRowForPushWords(grid, insertedArr, rowIndex, colIndex)
  {
    alert("push")

    let target = grid[rowIndex]
    let lastSpaceIndex = target.indexOf("!");
    for (let i = lastSpaceIndex ; i < WIDTH; i++){
      grid[rowIndex][i] = "-"
    }


    //delete final row (padding for iterated inserted array, elsewhere.)
    this.deleteRow(grid, rowIndex+1) 
    //grid[rowIndex][0] = "A"
    //grid.push(['-','-','-','-','-','-','-' ], )
    //grid[rowIndex+1][0] = "B"
    //drawGrid(HEIGHT, WIDTH)
    //push for new final row again (padding for recursive calls, elsewhere)
    grid.push(['!','!','!','!','!','!','!' ], )

    
    //this.fillNullWithDashOnRow(rowIndex+1, grid)
    HEIGHT++ 
  
 //@ drawGrid(HEIGHT, WIDTH)
 //@   horizontalCursorPosition = 0;
 //@   verticalCursorPosition = verticalCursorPosition + 10;
 //@ drawCursor(
 //@   horizontalCursorPosition + HOFFSET,
 //@   verticalCursorPosition + VOFFSET
 //@ );
  
  return grid

  }
  
 
 createRow2(grid, insertedArr, rowIndex, colIndex) {
  
  {

    alert("A")
    //delete final row (padding for iterated inserted array, elsewhere.)
    //delete final row (padding for iterated inserted array, elsewhere.)
    this.deleteRow(grid, rowIndex) 
    //grid[rowIndex][0] = "A"
    grid.push(["-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-","-", "-", "-", "-", "-", "-" , "-" ]),
  
    //push for new final row again (padding for recursive calls, elsewhere)
    grid.push(["!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!","!", "!", "!", "!", "!" , "!" ]),
  
    HEIGHT++ 
  }
   
    return grid
    
    }

    
    createRow(grid, insertedArr, rowIndex, colIndex) {
  
      {
        //delete final row (padding for iterated inserted array, elsewhere.)
        //delete final row (padding for iterated inserted array, elsewhere.)
        this.deleteRow(grid, rowIndex+1) 
        //grid[rowIndex][0] = "A"
        grid.push(["-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-","-", "-", "-", "-", "-", "-" , "-" ]),
      
        //push for new final row again (padding for recursive calls, elsewhere)
        grid.push(["!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!","!", "!", "!", "!", "!" , "!" ]),
      
        HEIGHT++ 
      }
       
        return grid
        
        }
    



//@     else {
//@      let [front, remainder] = this.splitAtIndex(insertedArr, WIDTH);
//@      //delete final row (padding for iterated inserted array, elsewhere.)
//@      this.deleteRow(grid, rowIndex) 
//@      grid.push(front);
//@      //push for new final row again (padding for recursive calls, elsewhere)
//@      grid.push(["", "", "", "", "", "" , "" ],)

      
//@      return grid
//@    }
//@    return grid
//@  }

  //debugged : 4/11/24
  //testing - works with delete pressed on same line as top row
  //looks good - 4/26/24
  //rewritten : 4/27/24, tested
  pushWords(IsFromIndex, grid, remainder, rowIndex, colIndex)
  {

    //drawGrid(HEIGHT, WIDTH)
    //alert("has entered PushWords")

    if(rowIndex > HEIGHT-1){
      return grid
    }

    let nextRemainder = []
    let combined1 = []
    
    if(rowIndex > HEIGHT-2){
      
      //alert("move words")
      this.createRow(grid, [], rowIndex, colIndex)
      let target1 = grid[rowIndex];
      let target2 = grid[rowIndex + 1];
      let lastSpaceIndexRow1 = target1.lastIndexOf("-");
      //phrase, right of last dash
      const [left, rightWordRowOne] = this.splitAtIndex(target1, lastSpaceIndexRow1 + 1);
      let lengthOfRightWordRow1 = rightWordRowOne.length
      let lengthOfRemainder = remainder.length
      

      let combined1 = []
      let nextRemainder = []
      let aRowOfNulls = []
      for(let i = 0; i < WIDTH - lengthOfRightWordRow1 + lengthOfRemainder; i++){
        aRowOfNulls[i] = "-"
      }
      

      const combinedA = [...rightWordRowOne, ...aRowOfNulls]
      let [combined1a, nextRemaindera] = this.splitAtIndex(combinedA, WIDTH);


      grid[rowIndex+1] = combined1a
      for(let i = WIDTH - lengthOfRightWordRow1; i< WIDTH; i++){
        grid[rowIndex][i] = "-"
      }
      //drawGrid(HEIGHT, WIDTH)
      //drawCursor(
      //  horizontalCursorPosition + HOFFSET,
      //  verticalCursorPosition + VOFFSET)
      //  return grid
    }
    let target1 = grid[rowIndex];
    let target2 = grid[rowIndex + 1];
    //get left phrase before last dash
    let lastSpaceIndexRow1 = target1.lastIndexOf("-");
    //phrase, right of last dash
    const [left, rightWordRowOne] = this.splitAtIndex(target1, lastSpaceIndexRow1 + 1);
    //how many dashes from left to right that are spaces to determine if word is pushed onto this row
    let dashCounter  = 0
    for(let i = 0 ; i < WIDTH; i++){
       if (grid[rowIndex + 1][i] == "-"){
          dashCounter++
       }
       else{
        break;
       }
      }
    let amountOfSpaces = dashCounter
    //word to move's length
    let lengthOfRightWord = rightWordRowOne.length

    //add the first and only character jus on first call
    if(IsFromIndex){
      //lengthOfRightWord++
    }
    const [leftSpaces, rightWordRowTwo] = this.splitAtIndex(target2, lengthOfRightWord);

    let index = WIDTH - lengthOfRightWord
    if(lengthOfRightWord === 0){
      return grid
    }

    //if(colIndex  !== index && IsFromIndex)
    //{
    //   return grid
    //}
    if(lengthOfRightWord == WIDTH)
    {
      return grid
    }
    //does word fit in space
    if(lengthOfRightWord <= amountOfSpaces ){
      //start row with word from above agfainst right border one row up
      let row2 = rightWordRowOne
      let combinedRow2 = []
      if(false){
        combinedRow2 = [...remainder, ...row2, ...rightWordRowTwo]
      }
      else{
        combinedRow2 = [...row2, ...rightWordRowTwo]
      }
      let [combined1, nextRemainder] = this.splitAtIndex(combinedRow2, WIDTH);
      grid[rowIndex+1] = combined1
      let lengthOfRow2 = row2.length
      horizontalCursorPosition = 0//horizontalCursorPosition + lengthOfRow2 * 5
      verticalCursorPosition = verticalCursorPosition + 10

      //check top of two rows to replace the use dvalues with dashes)
      for(let i =  lengthOfRightWord ; i < WIDTH ; i++){
        grid[rowIndex][i] = "-"
      }
      //drawGrid(HEIGHT, WIDTH)
      horizontalCursorPosition = horizontalCursorPosition + lengthOfRightWord * 5
      //check for if next row is one below (not two), if not, advance two rows, as is normal
      if(grid[rowIndex+1][WIDTH-1] != "-" && grid[rowIndex+1][WIDTH-1] != undefined)
        {
          this.pushWords(false,grid, nextRemainder, rowIndex+1, 0) 
          return grid
        }
      this.pushWords(false, grid, nextRemainder, rowIndex+2, 0)
      return grid
    }
    //alert("out")
    return grid
  }
  
  insertCharacterToArray(array, col, row, character) 
  {
    array[row].splice(col, 0, "W");
  }
  
  
  deleteKeyPressed(array, col, row)
  {

    const removed = array[row].splice(col, 1);
    return;
  }
  
  
  putElementIn2DimArray(arr, row, column) 
  {
    arr.splice(1, 0, "W");
  }

  deleteRow(arr, rowNumber) 
  {
    arr.splice(rowNumber, 1);
    return arr;
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
    //@drawGrid(HEIGHT, WIDTH);
    return arrayToChange;
  }
  
  //!!!!
  snapshot(original) {
    console.log("orig: 0", original);
    let newArray = original.map((oldRow) => {
      console.log({oldRow})
      console.log("map: ", this.mapCounter);
      this.mapCounter = this.mapCounter + 1;
      console.log("oldRow2", ...oldRow)
      return [...oldRow];
    });
    console.log("or: ", newArray);
    return newArray;
  }
  
  
  splitAtIndex(arr, index) {
    console.log("index: ", index);
    console.log("arr: ", arr);
    const front = arr.slice(0, index);
    const back = arr.slice(index);
    return [front, back];
  }
  
  //debugged : 4/11/24
  //this function uses createrow,  pushWords use just createrow
  //tested : 4/16/24 =  changed - : 4/20/24
  pressedEnter(
    grid,
    rowIndex3,
    colIndex,
    remainder,
    wordToPass,
    IsFirstTime
  ) {
    this.fillNullWithDashOnRow(rowIndex3, grid)
    
    //only on intial call, not when being recursive.
    if (IsFirstTime) {
    alert("1")
    //this.createRow(grid, remainder, rowIndex3, colIndex) 
    //drawGrid(HEIGHT, WIDTH)
    //delete row of nulls to put back on last row below
    //@this.deleteRow(grid, (HEIGHT))
    //@grid.push (["-", "-", "-", "-", "-", "-" , "-" ],)
    //@grid.push (["", "", "", "", "", "" , "" ],)
    //@HEIGHT++
    //@alert("was here?!?!")
    if(rowIndex3 == HEIGHT - 1)
      {
        alert("2");
        
        //this.createRow(grid, remainder, rowIndex3+2)
        
        //@HEIGHT++
        //return grid
        
      }
    }

    //@console.log("imp", typeof remainder);
    //check if remainder has a value
    if (Object.keys(remainder).length === 0) {
      remainder = "";
    }
    let target1 = grid[rowIndex3];
    let target2 = grid[rowIndex3 + 1];
    //these characters are pushed to next row because of enter press
    let amtCharactersToPass = WIDTH - colIndex;
    //@ let target3 = grid[rowIndex3 + 2];
    //@let indexOfWordToPass = colIndex + 1;
    let thisIsFullPhrase = [...wordToPass, ...target1];
    //get left side to cursor
    let [isntUsed, row1LastCharacters] = this.splitAtIndex(
      thisIsFullPhrase,
      colIndex
    );
    //@for (let i = amtCharactersToPass; i < WIDTH; i++) {}
    //remainder is leftover from string when a widths worth of data is gottem
    let combine = [...remainder, ...target2];
    //split at cursor
    let [notUsed, lastCharacters] = this.splitAtIndex(combine, colIndex);
    //on initial call 
    if (IsFirstTime === true) {
      //characters from the phrase brroken at cursor above
      let secondRowNearlyDone = [...row1LastCharacters, ...combine];
      //one rows worth
      let [secondRowDone, remainder1] = this.splitAtIndex(
        secondRowNearlyDone,
        WIDTH
      );
      
      grid[rowIndex3 + 1] = secondRowDone;
     
    
    
    } else {
      //build second row
      let secondRowNearlyDone = [...wordToPass, ...combine];
      let [secondRowDone, remainder1] = this.splitAtIndex(
        secondRowNearlyDone,
        WIDTH
      );
      grid[rowIndex3 + 1] = secondRowDone;
    }
    //@drawGrid(HEIGHT, WIDTH);
    //again, on initial call, cover null with dash
    if (IsFirstTime) {
      for (let i = WIDTH - amtCharactersToPass; i < WIDTH; i++) {
        grid[rowIndex3][i] = "-";
      }
     //* drawGrid(HEIGHT, WIDTH);
    //*}
    //*if(IsFirstTime)
    //*{
      
    } 
    IsFirstTime = false
    if (rowIndex3 > HEIGHT-2) {
      alert("y")
      
      this.createRow(grid, remainder, rowIndex3+1, colIndex)
      let amountOfNulls = colIndex
      for(let i = WIDTH-amountOfNulls; i < WIDTH ; i++ )
      {
        grid[rowIndex3+1][i] = "-"
      }
      //@drawGrid(HEIGHT,WIDTH)
      //@drawCursor(
      //@  horizontalCursorPosition + HOFFSET,
      //@  verticalCursorPosition + VOFFSET
      //@);
      //@return grid;
    }
    

    //@drawGrid(HEIGHT, WIDTH);
    //alert("here")
    //@verticalCursorPosition =  (verticalCursorPosition + 10)
    horizontalCursorPosition = 0
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    //enter effects next row here
    this.pressedEnter(
      grid,
      rowIndex3 + 1,
      colIndex,
      remainder,
      lastCharacters,
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
  //this is to check if there is a dash on last row of top row
  let anotherTopRowForCondition = grid[rowIndex]
  
  //is a dash - checks if top row has a dash on last character - will delete only on this line and add a null
  if (anotherTopRowForCondition[WIDTH-1] === "-"){
    let anotherTopRowForCondition = grid[rowIndex]
    //splits row to the two sides of cursor
    let [topRowLeftSide, topRowRightSideWithFrontChar] = this.splitAtIndex(topRow, columnIndex+1) ;
    //strips of the character that was on the right side
    let [removedThisCharacter, topRightSideRemovedCharacter] = this.splitAtIndex(topRowRightSideWithFrontChar, 1) ;
    let nullCharacter = ["-"]
    //combine the two pieces wihthout the character that was removed, and add a null at end
    let combine = [...topRowLeftSide, ...topRightSideRemovedCharacter, ...nullCharacter]
    grid[rowIndex] = combine
    return grid
  }
  //there is a character on end of row, so remove first row and take character from next row, put on toprow left end
  else if (anotherTopRowForCondition[WIDTH-1] != "-" ){
    counterOfUsedRows = 0
    //deterimine rows of code before a row with a dash
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
  //take left most character grom top row
  let [frontCharactersTopRow, topWithoutFrontCharacters] = this.splitAtIndex(topRow, columnIndex + 1) ;
  //remove characters from right hand side
  let [left, topRightWithoutDeletedCharacter] = this.splitAtIndex(topWithoutFrontCharacters, 1) ;
  //get character on next (bottom) row, first column
  let [bottomLeftmostCharacter, bottomWholeRowExceptFinalRow] = this.splitAtIndex(bottomRow, 1) ;
  //creates s row without the character and character from next row, first character
  let combine = [...frontCharactersTopRow, ...topRightWithoutDeletedCharacter, ...bottomLeftmostCharacter ]
  grid[rowIndex] = combine
  //this is a function that has a recursion call.  
  this.removeLeftCharacterFrom2ndRowAndReplaceRowAboveOnMostRightSide(counterOfUsedRows, rowIndex+1, grid)
  return grid
}
  }
  removeLeftCharacterFrom2ndRowAndReplaceRowAboveOnMostRightSide(amtOfUsedRows, rowIndex, grid){
    //counter is used to check for proper amount of lines to be run
    this.counterOfRows++
    //if run for all rows, or none at all bail out
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
    this.removeLeftCharacterFrom2ndRowAndReplaceRowAboveOnMostRightSide(amtOfUsedRows, rowIndex+1, grid)
    //rest this global value, for use next time
    this.counterOfRows = 0
    return grid
 }


    setXandYPositions() {
    //alert("set");
    //If on left edge andvances to next row, column zero
    if (horizontalCursorPosition / 5 < WIDTH - 1) {
      horizontalCursorPosition = horizontalCursorPosition + 5;
    } else {
      horizontalCursorPosition = 0;
      verticalCursorPosition = verticalCursorPosition + 10;
    }
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
  }
  
  insertClean(isFromIndex, griday, insertedArray, rowIndex, colIndex) {
    //@if (isFromIndex === true) {
    //@this.IsJustFromRecursive = false
    //@}
    let newArray2 = this.snapshot(griday);
    console.log("oa2: ", griday);
    //@return this.insertNewArr(false,isFromIndex,newArray2,insertedArray,rowIndex,colIndex);
    return this.initialInsert(rowIndex, colIndex, griday, insertedArray)
  }

 
  //tested : 4/13/24
  //checked: 4/17/24 - bottom half not looked at.
  //checked: 4/26/24 - looks good
  //4/27/24 - changed, look at again
  pullTextBackToTop(CallFromIndex, character, grid, rowIndex, colIndex) {
    //?
   
    //drawGrid(HEIGHT, WIDTH)
    //alert("entered Pull")
    if(rowIndex === 0 || rowIndex === undefined)
    {
      return grid;
    }
    if(rowIndex > HEIGHT - 1)
    {
      return grid;
    }
    //understand this bettee
    //if there is not complete characters from cursor to left border, than exit
    
    if(CallFromIndex){
    for (let i = colIndex - 1; i >= 0; i--) {
        if (grid[rowIndex][i] == "" || grid[rowIndex][i] == "-") {
        return grid;
        }
      }
    } 
    let rowOne = []
    let rowTwo = []
    
    
    
    rowOne = grid[rowIndex-1];
    rowTwo = grid[rowIndex];
    
    //final dash, word on right
    let index1stRow = rowOne.lastIndexOf("-");
    //first dash character, word on left
    let index2ndRow = rowTwo.indexOf("-");

    let amountOfRightSpacesRow1 = index1stRow+1  ;
    let amountOfLeftCharactersRow2  = index2ndRow ;
    if(amountOfLeftCharactersRow2 === -1)
    {
      amountOfLeftCharactersRow2 = 7
    }
    //the amount of top spaces starts at last dash and iterates backwards to find out how many characters there can be (top spaces)
    let amountOfTopSpaces = 0;
   
    for (let i = (WIDTH - 1); i >= 0; i--) {
      if (
        grid[rowIndex-1][i] == "" ||
        grid[rowIndex-1][i] == " " ||
        grid[rowIndex-1][i] == "-"
      ) {
        amountOfTopSpaces++;
      }
      else{
        break;
      }
    }
    //not enough room for pushing text up
    if (amountOfLeftCharactersRow2 > amountOfTopSpaces) {
      //drawGrid(HEIGHT, WIDTH)
      return grid;
    }
   
    let topLineNextRow = [];
    let topLine = []
   
    topLine = grid[rowIndex-1];
    topLineNextRow = grid[rowIndex];
    //}
    
   
    let CharactersOfNextLine = []
    let unusedTrim = []
     //index is right after left most word
    let lastSpaceIndex2 = topLineNextRow.indexOf("-");
    //no dash, so is entire word
    if(lastSpaceIndex2 === -1){
      this.copyArray(topLineNextRow,CharactersOfNextLine, topLineNextRow.length)
    }
    else{
      //right hand word
      [CharactersOfNextLine, unusedTrim] =
      this.splitAtIndex(topLineNextRow, lastSpaceIndex2); 
    }
    //right hand word
    let lengthOfSpaceForWord = CharactersOfNextLine.length;
    //find index for insertion of charatersOfNextLine into topline
    let index = WIDTH - lengthOfSpaceForWord;
    let combine = []
    //@let left = []
    //@let unused = []
    
    //@if (CallFromIndex){
    //keep the left characters and than replace the rigth with lower word
    const [left, unused] = this.splitAtIndex(topLine, index);
    //build upper row with the same left and the characters of the lower row
    combine = [...left, ...CharactersOfNextLine];
    grid[rowIndex - 1] = combine;
    //cover left side lower word with dashes - this phrase was raised to top right and now is dashed
    for (let i = 0; i < lengthOfSpaceForWord; i++) {
      grid[rowIndex][i] = "-";
    }
    //put cursor on last character on left hand side of top row
    if (CallFromIndex === true)
    {
      horizontalCursorPosition = (5 * WIDTH) -5;
      verticalCursorPosition = verticalCursorPosition - 10;
    }
    //drawGrid(HEIGHT, WIDTH);
    //drawCursor(
    //  horizontalCursorPosition + HOFFSET,
    //  verticalCursorPosition + VOFFSET
    //);
    this.pullTextBackToTop(false, character, grid, rowIndex+1, colIndex)
    return grid;
    }
  
  

 displayGridAndCursor(){
  drawGrid(HEIGHT, WIDTH)
  drawCursor(
    horizontalCursorPosition + HOFFSET,
    verticalCursorPosition + VOFFSET)
  }


  advanceHorizontalOneTime(){
  if(horizontalCursorPosition/5 >= WIDTH-1  && verticalCursorPosition/10 >= HEIGHT-1)
  {
        return
  }

  if (horizontalCursorPosition >= (WIDTH-1)*5){// (WIDTH -1 )*5) {
    //*alert("here")
    horizontalCursorPosition = 0
    verticalCursorPosition = verticalCursorPosition + 10
  }else{
    horizontalCursorPosition = horizontalCursorPosition + 5
  }
  }

  advanceVerticalOneTime(){
    if(verticalCursorPosition > HEIGHT-1){
      return
    }
    verticalCursorPosition=verticalCursorPosition+10
  }
    displayGridAndCursor2()
    {
     
     
     
      if (horizontalCursorPosition >= (WIDTH-1)*5){// (WIDTH -1 )*5) {
        //*alert("here")
        horizontalCursorPosition = 0
        verticalCursorPosition = verticalCursorPosition + 10
      }else{
        horizontalCursorPosition = horizontalCursorPosition + 5
      }
      drawGrid(HEIGHT, WIDTH)
      drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET)

      return
    
    }

    deleteLeftUpdateCursor(){
      if(horizontalCursorPosition === 0)
      {
        horizontalCursorPosition = 5 * (WIDTH - 1)
        verticalCursorPosition = verticalCursorPosition  - 10
      }
      else{
        horizontalCursorPosition = horizontalCursorPosition - 5
      }
    }
    //push with letter on end  and a character in middle, push on left
    //push with letter on end  and a character in middle, push on middle
    //push with two rows on end, both move to next row
    //two digits before two end points on end, all move correctly
    //  insert on empty row
    //  insert on last column with and without on last row and two there
    //  insert with dash on last character, otherwise full.
    //  insert with dash on last character, otherwise full, second line no dash on last character
    //  insert on last row, both with last character and null
    initialInsert(rowIndex, colIndex, grid, leftOverChar){
    let horizString =  (horizontalCursorPosition/5).toString()
    let vertString = (verticalCursorPosition/10).toString() 
    let a = document.getElementById("xAndY")
    a.innerHTML = 'Horizontal: ' + horizString + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + 'Vertical: '+ vertString
    this.checkOnLastLineSoCreateRow(grid, leftOverChar, rowIndex, colIndex)
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
    

    //if true isn't first run
    if (grid[rowIndex][WIDTH-1] != "-" ){
      //push rows right because of insert
      this.pushRowRight(rowIndex+1, 0, grid, leftOver)
    }
    
    //set row
    grid[rowIndex] = finishedTopRow

    return grid
  }



  
  pushRowRight(rowIndex, colIndex, grid, leftOverChar){
   
    //check if it is time to add row
    this.checkOnLastLineSoCreateRow(grid, leftOverChar, rowIndex, colIndex)
    //bails out of recursion
    if(rowIndex > HEIGHT -1){
      return grid
    }
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
    //one row, exactly, because of WIDTH
    let [bottomRowReady, remainingChars] = this.splitAtIndex(combineToBottomRow, WIDTH)
    grid[rowIndex] = bottomRowReady
   
    if(remainingChars != "-"){
    //push next row to right(one position)  recursion
      this.pushRowRight(rowIndex+1, 0, grid, remainingChars)
    }
    return grid
    }

    //do we add a row?
    checkOnLastLineSoCreateRow(grid, leftOverChar, rowIndex, colIndex){
      
      //if we are on the last line and there is a character on rightmost character
      //create a row if on last row
      if (grid[rowIndex][WIDTH-1] != "-" && rowIndex === HEIGHT-1 && verticalCursorPosition/10 === HEIGHT-1){
        this.createRow(grid, leftOverChar, rowIndex, colIndex)
      }
      return grid
    }
}





