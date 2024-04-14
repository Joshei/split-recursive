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
  }

  
 createRow(originalArr, insertedArr, rowIndex, colIndex) {
  alert("create row")
  if (insertedArr.length <= WIDTH) {
      //HEIGHT++;
        //delete final row (padding for iterated inserted array, elsewhere.)
      //delete final row (padding for iterated inserted array, elsewhere.)
      this.deleteRow(originalArr, rowIndex+1) 
      originalArr.push(insertedArr);
      //push for new final row again (padding for recursive calls, elsewhere)
      originalArr.push(["", "", "", "", "", "" , "" ],)
      this.fillNullWithDashOnRow(rowIndex+1, originalArr)
      HEIGHT++ 
    }
    drawGrid(HEIGHT, WIDTH)
      horizontalCursorPosition = 0;
      verticalCursorPosition = verticalCursorPosition + 10;
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    
    //inserted array is greater than one row  
    }


    createRow2(originalArr, insertedArr, rowIndex, colIndex) {
      alert("q")
      if (insertedArr.length <= WIDTH) {
        HEIGHT++;
          //delete final row (padding for iterated inserted array, elsewhere.)
        //delete final row (padding for iterated inserted array, elsewhere.)
        this.deleteRow(originalArr, rowIndex+1) 
        originalArr.push(["-", "-", "-", "-", "-", "-" , "-" ],)
        //push for new final row again (padding for recursive calls, elsewhere)
        originalArr.push(["", "", "", "", "", "" , "" ],)
        //@this.fillNullWithDashOnRow(rowIndex+1, originalArr)
       // HEIGHT++ 
      }
      drawGrid(HEIGHT, WIDTH)
        horizontalCursorPosition = 0;
        verticalCursorPosition = verticalCursorPosition + 10;
        drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
      );
    
    }

//@     else {
//@      let [front, remainder] = this.splitAtIndex(insertedArr, WIDTH);
//@      //delete final row (padding for iterated inserted array, elsewhere.)
//@      this.deleteRow(originalArr, rowIndex) 
//@      originalArr.push(front);
//@      //push for new final row again (padding for recursive calls, elsewhere)
//@      originalArr.push(["", "", "", "", "", "" , "" ],)

      
//@      return originalArr
//@    }
//@    return originalArr
//@  }

  //debugged : 4/11/24
  moveWords(originalArr, remainder, rowIndex, colIndex)
  {
    alert("Height")
    if(rowIndex > HEIGHT ){
     
      this.createRow(originalArr, remainder, rowIndex)
      HEIGHT++;
      return originalArr
    }
    //%alert("2")
    let target1 = originalArr[rowIndex];
    let target2 = originalArr[rowIndex + 1];
    //get left phrase before last dash
    let lastSpaceIndex1 = target1.lastIndexOf("-");
    //phrase, right of last dash
    const [trim, rightWord] = this.splitAtIndex(target1, lastSpaceIndex1 + 1);
    //put full row after target1s right word
    let combine = [...rightWord, ...target2];
    //one widths worth
    const [row, remainder2] = this.splitAtIndex(combine, WIDTH);
    originalArr[rowIndex + 1] = row;
    //remainder passed in last iteration through, with left side of target1 
    //!!!!
    let row2 = [...trim, ...remainder]
    //const [row3, remainder3] = this.splitAtIndex(row2, WIDTH);
    let row3 = [...remainder, ...row];
    originalArr[rowIndex] = row2;
    originalArr[rowIndex+1] = row3;
    //@drawGrid(HEIGHT, WIDTH);
    //covers nulls with dashes 
    let topWordLen = rightWord.length;
    let indextoStartDisplayDashes = WIDTH - topWordLen;
    for (let i = indextoStartDisplayDashes; i <= WIDTH - 1; i++) {
      originalArr[rowIndex][i] = "-";
    }
      //@drawGrid(HEIGHT, WIDTH);
      
      //return originalArr;
      
      //@verticalCursorPosition = 50;
      return remainder2;

      alert("move")
    }
  //CHECK ALL THIS, ESPECIALLY ONE PAIR FUNCTION, ALSO, CHECK LAST ROW

  //4/8/24
  //all word pairs
  ////debugged : 4/11/24
  moveAllWordsAcrossBorder(originalArr, remainder, rowIndex, colIndex) {
    if (rowIndex > HEIGHT-2) {
      //alert("height")
      this.createRow(originalArr, remainder, rowIndex)
      return originalArr;
    }
    //gets the remainder for recursive calls
    let remainder2 = this.moveWords(originalArr, remainder, rowIndex, colIndex)

    this.moveAllWordsAcrossBorder(
      originalArr,
      remainder2,
      rowIndex + 1,
      colIndex
    );
    drawGrid(HEIGHT, WIDTH)
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET)
      return originalArr;
  }

  //4/8/24 - rowIndex is top row that moves down and to the left
  //checks for one pair, there
  //debugged : 4/11/24
  moveWordAcrossBorder(originalArr, remainder, rowIndex, colIndex) {
    if (rowIndex >= HEIGHT-1) {
      alert("4")
      this.createRow(originalArr, remainder, rowIndex)
      return originalArr;
    }
    alert("A")
    // variable is a dud, no useage
    let dud = this.moveWords(originalArr, remainder, rowIndex, colIndex)
    //this.createRow2(originalArr, remainder, rowIndex)
    drawGrid(HEIGHT, WIDTH)
    //*horizontalCursorPosition = 10;
    //*verticalCursorPosition = 30;
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET)
      return originalArr;

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
    drawGrid(HEIGHT, WIDTH);
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
  //this function uses createrow2, moveword use just createrow
  pressedEnter(
    originalArr,
    rowIndex3,
    colIndex,
    remainder,
    wordToPass,
    IsFirstTime
  ) {
    
    //only on intial call, not when being recursive.
    if (IsFirstTime) {
    alert("1")
    //this.createRow(originalArr, remainder, rowIndex3, colIndex) 
    drawGrid(HEIGHT, WIDTH)
    //delete row of nulls to put back on last row below
    //@this.deleteRow(originalArr, (HEIGHT))
    //@originalArr.push (["-", "-", "-", "-", "-", "-" , "-" ],)
    //@originalArr.push (["", "", "", "", "", "" , "" ],)
    //@HEIGHT++
    //@alert("was here?!?!")
    }
    if(rowIndex3 > HEIGHT - 2)
    {
      alert("2");
      this.createRow2(originalArr, remainder, rowIndex3)
      //@HEIGHT++
      return originalArr
      
    }
    //@console.log("imp", typeof remainder);
    //check if remainder has a value
    if (Object.keys(remainder).length === 0) {
      remainder = "";
    }
    let target1 = originalArr[rowIndex3];
    let target2 = originalArr[rowIndex3 + 1];
    //these characters are pushed to next row because of enter press
    let amtCharactersToPass = WIDTH - colIndex;
    let target3 = originalArr[rowIndex3 + 2];
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
      originalArr[rowIndex3 + 1] = secondRowDone;
    } else {
      //build second row
      let secondRowNearlyDone = [...wordToPass, ...combine];
      let [secondRowDone, remainder1] = this.splitAtIndex(
        secondRowNearlyDone,
        WIDTH
      );
      originalArr[rowIndex3 + 1] = secondRowDone;
    }
    //@drawGrid(HEIGHT, WIDTH);
    //again, on initial call, cover null with dash
    if (IsFirstTime) {
      for (let i = WIDTH - amtCharactersToPass; i < WIDTH; i++) {
        originalArr[rowIndex3][i] = "P";
      }
     //* drawGrid(HEIGHT, WIDTH);
    //*}
    //*if(IsFirstTime)
    //*{
      
    } 
    IsFirstTime = false
    if (rowIndex3 > HEIGHT-2) {
      alert("y")
      this.createRow2(originalArr, remainder, rowIndex3+1)
      return originalArr;
    }
    drawGrid(HEIGHT, WIDTH);
    //alert("here")
    //@verticalCursorPosition =  (verticalCursorPosition + 10)
    horizontalCursorPosition = 0
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    //enter effects next row here
    this.pressedEnter(
      originalArr,
      rowIndex3 + 1,
      colIndex,
      remainder,
      lastCharacters,
      false
    );
    
      //return originalArr;
    return originalArr;
  }
  

  //  4/7/24:  This is looking very good, reworked!
  //debugged : 4/11/24
  deleteACharacter(remainder, rowIndex, columnIndex,  originalArr, IsFirstRun) {
   
  //on last row
  if(rowIndex > 5)
  {
    //put a dash on last row, last column
    originalArr[HEIGHT-1][WIDTH-1] = "A"
    //set cursor one position to left
    horizontalCursorPosition = horizontalCursorPosition - 5
    //@if(horizontalCursorPosition < 0)
    //@{
    //@  horizontalCursorPosition = horizontalCursorPosition + 5
    //@}
    drawGrid(HEIGHT, WIDTH)
    drawCursor(
    horizontalCursorPosition + HOFFSET,
    verticalCursorPosition + VOFFSET
    )
    return originalArr
  }
   //get cursor x position
   //get left and to right of x position
   //left is keep these characters
   //middle is to delete
   //combine   ...left, ...right
   //get first character next line and append to line above

   //remove last cgaracter
   //okay, current line needs to have leftmost character removed
   //letter taken from next line first position goes to end of previous line
   
   //this is intial call form index.html
   if(IsFirstRun)
   {
   let line1 = originalArr[rowIndex+1];
   let line2 = originalArr[rowIndex+2]
   let cursorPosition = columnIndex
   //break up line1 at the cursor position into to parts, divided by one space beyond cursor
   let [left, right] = this.splitAtIndex(line1, cursorPosition+1) ;
   //get length of character
   let len = left.length
   //get phrase one less than cursor
   let [leftPhrase, notUsed] = this.splitAtIndex(left, len-1) ;
   //get lien without thew last character
   let sixDigitLine = [...leftPhrase, ...right] 
   //get next lines first character 
   let [CharacterOnNextLine, notUsed2] = this.splitAtIndex(line2, 1)
   //makes a line of code that is exactly one width
   let combine2 = [  ...sixDigitLine, ...CharacterOnNextLine ]
   originalArr[rowIndex+1] = combine2
   drawGrid(HEIGHT, WIDTH)
   //recursive call, will call the next section, this is only run on initial call
   //from index.html
   this.deleteACharacter( [], rowIndex+1, 0,  originalArr, false)
   return originalArr
  }else{
    let line1 = originalArr[rowIndex+1];
    let line2 = originalArr[rowIndex+2]
    //left most character of second line - put at end of line 1
    let [lineTwosLeftmostCharacterForLineOne, LineTwosWordWithoutFirstLetter] = this.splitAtIndex(line2, 1) ;
    //remove letter from start of first line
    let [lineOneFirstCharacterForLineTwo, lineOneWithoutFirstLetter] = this.splitAtIndex(line1, 1) ;
    //add second lines left most character to line ones most right position
    let completeLineOne = [ ...lineOneWithoutFirstLetter, ...lineTwosLeftmostCharacterForLineOne]
    let letter = ""
    //row index is 4 or less, otherwise calls first condition
    //in condition element is a maximum of 7
    //there is one more, before increasing height, and that is when the afore-mentioned
    //section is called and a dash is put in that last position because it is the last
    //before padding
    if (rowIndex < 4)
    {
      letter = originalArr[rowIndex+3][0]
      console.log("row: ", rowIndex)
      console.log("letter: ", letter)
    }
    //let completeLineTwo = [ ...lineOneFirstCharacterForLineTwo,...LineTwosWordWithoutFirstLetter]
    //one line
    //let completeLineTwo = [...LineTwosWordWithoutFirstLetter, letter ]
    originalArr[rowIndex+1] = completeLineOne
    //originalArr[rowIndex+2] = completeLineTwo
    drawGrid(HEIGHT, WIDTH)
    //recursive call
    this.deleteACharacter( [], rowIndex+1, 0,  originalArr, false)
    return originalArr 
  }  
}

  //Worked on, 4/5/24
  //debugged : 4/11/24
  insertNewArr(HasBeenToRecursive, IsFromIndex, originalArr, insertedArr, rowIndex, colIndex) {
    //there has been a recursive call, so we don't want to call this, it is only called the original first time.
    //@if(HasBeenToRecursive)
    //@{
    //@  //return originalArr
    //@}
    //made it to bottom of array, so bail out
    alert("insert")
    if (rowIndex > HEIGHT - 1) {
      alert("!")
      return originalArr;
    }
    let targetRow = originalArr[rowIndex];
    //@if (targetRow) {
    //@  console.log("tr: ", targetRow);
    //@  console.log("inserting array into an existing row of originalArr");
      let front = []
      let back = []
      if (IsFromIndex) {
      //split phrase it cursor position, first time
      [front, back] = this.splitAtIndex(targetRow, colIndex);
      }
      //
      else{
      [front, back] = this.splitAtIndex(targetRow, 0);
      }
      let combine = [];
      //comes from index.html, initial call
      if (IsFromIndex) {
        combine = [...front, ...insertedArr, ...back];
      } else {
        //!!!this looks unneeded
        combine = [ ...front, ...insertedArr, ...back];
      }
      //splits string at the width, so will fit on one row, and rest is set to remainder.
      let [row2, remainder1] = this.splitAtIndex(combine, WIDTH);
      
      //if either, than only insert on one line, not recursive
      if (
        originalArr[rowIndex][WIDTH - 1] == "-" ||
        originalArr[rowIndex][WIDTH - 1] == ""
      ) {
        originalArr[rowIndex] = row2;
        if (IsFromIndex ) {
          //sets the cursor position
          this.setXandYPositions();
        }
        drawGrid(HEIGHT, WIDTH);
        drawCursor(
          horizontalCursorPosition + HOFFSET,
          verticalCursorPosition + VOFFSET
        );
        remainder1 = [];
        //is on last row, so negate the former cursor positions for cursor
        if(rowIndex === HEIGHT-1)
        {
          horizontalCursorPosition = (HEIGHT-1)* 5
          verticalCursorPosition= verticalCursorPosition - 10
          drawCursor(
            horizontalCursorPosition + HOFFSET,
            verticalCursorPosition + VOFFSET
          );
          
        }
        return originalArr;
      }
      
      else {
        //calls recursibly, affects all rows
        //called first time, only.  As array is recursed only set positions once
        if (this.calledOneTimeAlready === false)
        {
          //calls function to get cursor positions
          this.setXandYPositions(); 
          //return originalArr
        }
        this.calledOneTimeAlready = true
        //@alert("section 2");
        originalArr[rowIndex] = row2;
        let length = remainder1.length;
        //if there is a remiander, which is extra when split to be one width for the row
        if (length > 0) {
          let target = originalArr[rowIndex + 1];

          //remainder comes first, it is passed from last recursive call
          let combine = [...remainder1, ...target];
          //one rows worth
          let [display, b] = this.splitAtIndex(combine, WIDTH);
          originalArr[rowIndex + 1] = display;
          //cover up null character
          this.fillNullWithDashOnRow(rowIndex + 1, originalArr);
          //this.setXandYPositions();
          drawGrid(HEIGHT, WIDTH);
          drawCursor(
            horizontalCursorPosition + HOFFSET,
            verticalCursorPosition + VOFFSET
          );
          //not on last row, checks for HEIGHT or more, at beginning of function, to bail out
          //unsure of workings if either odd number of rows or even number of rows
          if(rowIndex !== HEIGHT-1)
          {
            this.insertNewArr(true, false, originalArr, b, rowIndex + 2, colIndex);
          }
          
          return originalArr;
        }
      }
    //@} 
    //@else {
    //@  //there was
    //@  alert("create row");
    //@  this.createRow(originalArr, insertedArr, rowIndex, colIndex);
    //@  HEIGHT++;
    //@  drawGrid(HEIGHT, WIDTH);
    //@  drawCursor(
    //@    horizontalCursorPosition + HOFFSET,
    //@    verticalCursorPosition + VOFFSET
    //@  );
    //@  return originalArr;
    //@}
  }
  
  
  setXandYPositions() {
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
  
  
  //@createRow(originalArr, insertedArr, rowIndex, colIndex) {
  //@  if (insertedArr.length <= WIDTH) {
  //@    HEIGHT++;
  //@      //delete final row (padding for iterated inserted array, elsewhere.)
  //@    //delete final row (padding for iterated inserted array, elsewhere.)
  //@    deleteRow(originalArr, rowIndex) 
  //@    originalArr.push(insertedArr);
  //@    //push for new final row again (padding for recursive calls, elsewhere)
  //@    originalArr.push(["", "", "", "", "", "" , "" ],)
  //@  //inserted array is greater than one row  
  //@  } else {
  //@    let [front, remainder] = this.splitAtIndex(insertedArr, WIDTH);
  //@    //delete final row (padding for iterated inserted array, elsewhere.)
  //@    deleteRow(originalArr, rowIndex) 
  //@    originalArr.push(front);
  //@    //push for new final row again (padding for recursive calls, elsewhere)
  //@    originalArr.push(["", "", "", "", "", "" , "" ],)
  //@    this.insertNewArr(
  //@      false,
  //@      //LOOK AT THIS WHEN APPROPRIATE
  //@      false,
  //@      originalArr,
  //@      insertedArr,
  //@      rowIndex + 1,
  //@      colIndex
  //@    );
  //@    return originalArr
  //@  }
  //@  return originalArr
  //@}
  
  
  insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) {
    //@if (isFromIndex === true) {
    //@this.IsJustFromRecursive = false
    //@}
    let newArray2 = this.snapshot(originalArray);
    console.log("oa2: ", originalArray);
    return this.insertNewArr(
      false,
      isFromIndex,
      newArray2,
      insertedArray,
      rowIndex,
      colIndex
    );
  }

  //tested : 4/13/24
  pullTextBackToTop(originalArr, rowIndex, colIndex) {
    //?
   
    if(rowIndex === 0)
    {
      return originalArr;
    }
    if(colIndex === 0)
    {
      return originalArr;
    }
    //if there is not complete characters from cursor to left border, than exit
    for (let i = colIndex - 1; i >= 0; i--) {
      if (originalArr[rowIndex][i] == "" || originalArr[rowIndex][i] == "-") {
      //alert("in if");
      return originalArr;
      }
    }
    if (rowIndex > 6) {
      alert("left")
      return originalArr;
    }
    let rowOne = originalArr[rowIndex];
    let rowTwo = originalArr[rowIndex + 1];
    //final dash character
    let index1stRow = rowOne.lastIndexOf("-");
    //first dash character
    let index2ndRow = rowTwo.indexOf("-");
    let amountOfRightSpacesRow1 = WIDTH - index1stRow + 1;
    let amountOfLeftSpacesRow2 = index2ndRow;
    //word doesn't fit in above space
    //@if (amountOfLeftSpacesRow2 > amountOfRightSpacesRow1) {
    //@  return originalArr;
    //@}
    //@let amountOfTopSpaces = 0;
    //@for (let i = WIDTH - amountOfLeftSpacesRow2; i < WIDTH; i++) {
    //@  if (
    //@    originalArr[rowIndex][i] == "" ||
    //@    originalArr[rowIndex][i] == " " ||
    //@    originalArr[rowIndex][i] == "-"
    //@  ) {
    //@    amountOfTopSpaces++;
    //@  }
    //@}
    if (amountOfLeftSpacesRow2 > amountOfRightSpacesRow1) {
      alert("here!!!");
      drawGrid(HEIGHT, WIDTH)
      return originalArr;
    }
    //@alert("here!!!&&&");
    //@console.log({ rowIndex });
    let topLineNextRow = [];
    let topLine = originalArr[rowIndex - 1];
    topLineNextRow = originalArr[rowIndex];
    //@let lastSpaceIndex = topLine.lastIndexOf("-");
    //@let [lineBesideLeftMostCharacter, firstCharacter] = this.splitAtIndex(
    //@  topLine,
    //@  lastSpaceIndex
    //@);
    //index is right after left most word
    let lastSpaceIndex2 = topLineNextRow.indexOf("-");
    let [CharactersOfNextLine, unusedTrim] =
      this.splitAtIndex(topLineNextRow, lastSpaceIndex2);
    let completeTopRow = [];
    let lengthOfSpaceForWord = CharactersOfNextLine.length;
    //find index for insertion of charatersOfNextLine into topline
    let index = WIDTH - lengthOfSpaceForWord;
    //phrase on left before insert position
    let [left, unused] = this.splitAtIndex(topLine, index);
    //put characters on next line left border on top line right of left
    let combine = [...left, ...CharactersOfNextLine];
    originalArr[rowIndex - 1] = combine;
    //cover left side word with dashes
    for (let i = 0; i < lengthOfSpaceForWord; i++) {
      originalArr[rowIndex][i] = "-";
    }
    //put cursor on last character on left hand side of top row
    horizontalCursorPosition = (5 * WIDTH-1)-5;
    verticalCursorPosition = verticalCursorPosition - 10;
    drawGrid(HEIGHT, WIDTH);
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    return originalArr;
    //@drawGrid(HEIGHT, WIDTH);
    //@return originalArr;
  }
  

}
