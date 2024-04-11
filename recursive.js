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

  moveWords(originalArr, remainder, rowIndex, colIndex)
  {
    alert("2")
    let target1 = originalArr[rowIndex];
    let target2 = originalArr[rowIndex + 1];
    let lastSpaceIndex1 = target1.lastIndexOf("-");
    const [trim, topWord] = this.splitAtIndex(target1, lastSpaceIndex1 + 1);
    let combine = [...topWord, ...target2];
    const [row, remainder2] = this.splitAtIndex(combine, WIDTH);
    originalArr[rowIndex + 1] = row;
    let row2 = [...remainder, ...trim]
    originalArr[rowIndex] = row2;
    drawGrid(HEIGHT, WIDTH);
    let topWordLen = topWord.length;
    let indextoStartDisplayDashes = WIDTH - topWordLen;
    for (let i = indextoStartDisplayDashes; i <= WIDTH - 1; i++) {
      originalArr[rowIndex][i] = "-";
      drawGrid(HEIGHT, WIDTH);
      
      //return originalArr;
      return remainder2;

    }
  }



  //CHECK ALL THIS, ESPECIALLY ONE PAIR FUNCTION, ALSO, CHECK LAST ROW

  //4/8/24
  //all word pairs
  moveAllWordsAcrossBorder(originalArr, remainder, rowIndex, colIndex) {
    if (rowIndex >= HEIGHT-1) {
      return originalArr;
    }
    
    let remainder2 = moveWords(originalArr, remainder, rowIndex, colIndex)

    this.moveAllWordsAcrossBorder(
      originalArr,
      remainder2,
      rowIndex + 2,
      colIndex
    );
    return originalArr;
  }

  //4/8/24 - rowIndex is top row that moves down and to the left
  //checks for one pair, there
  moveWordAcrossBorder(originalArr, remainder, rowIndex, colIndex) {
    if (rowIndex >= HEIGHT-1) {
      return originalArr;
    }
    alert("1")
    // variable is a dud, no useage
    let dud = this.moveWords(originalArr, remainder, rowIndex, colIndex)
    drawGrid(HEIGHT, WIDTH)
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
  
  
  snapshot(original) {
    console.log("orig: 0", original);
    let newArray = original.map((oldRow) => {
      console.log("map: ", this.mapCounter);
      this.mapCounter = this.mapCounter + 1;
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
  
  pressedEnter(
    originalArr,
    rowIndex3,
    colIndex,
    remainder,
    wordToPass,
    IsFirstTime
  ) {
    
    if (IsFirstTime) {
    this.deleteRow(originalArr, (HEIGHT))
    originalArr.push (["-", "-", "-", "-", "-", "-" , "-" ],)
    originalArr.push (["", "", "", "", "", "" , "" ],)
    HEIGHT++
      alert("was here?!?!")
    }
    if(rowIndex3 == 5)
    {
      return originalArr
    }
    console.log("imp", typeof remainder);
    if (Object.keys(remainder).length === 0) {
      remainder = "";
    }
    let target1 = originalArr[rowIndex3];
    let target2 = originalArr[rowIndex3 + 1];
    let amtCharactersToPass = WIDTH - colIndex;
    let target3 = originalArr[rowIndex3 + 2];
    let indexOfWordToPass = colIndex + 1;
    let thisIsFullPhrase = [...wordToPass, ...target1];
    let [topRightWord, row1LastCharacters] = this.splitAtIndex(
      thisIsFullPhrase,
      colIndex
    );
    for (let i = amtCharactersToPass; i < WIDTH; i++) {}
    let combine = [...remainder, ...target2];
    let [a, lastCharacters] = this.splitAtIndex(combine, indexOfWordToPass - 1);
    if (IsFirstTime === true) {
      let secondRowNearlyDone = [...row1LastCharacters, ...combine];
      let [secondRowDone, remainder1] = this.splitAtIndex(
        secondRowNearlyDone,
        WIDTH
      );
      originalArr[rowIndex3 + 1] = secondRowDone;
    } else {
      let secondRowNearlyDone = [...wordToPass, ...combine];
      let [secondRowDone, remainder1] = this.splitAtIndex(
        secondRowNearlyDone,
        WIDTH
      );
      originalArr[rowIndex3 + 1] = secondRowDone;
    }
    //drawGrid(HEIGHT, WIDTH);
    
    if (IsFirstTime) {
      for (let i = WIDTH - amtCharactersToPass; i < WIDTH; i++) {
        originalArr[rowIndex3][i] = "X";
      }
      drawGrid(HEIGHT, WIDTH);
    }
    if(IsFirstTime)
    {
      drawGrid(HEIGHT, WIDTH);

      
      verticalCursorPosition =  (verticalCursorPosition + 10)
      horizontalCursorPosition = 0
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      );
    } 
    IsFirstTime = false
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
  deleteACharacter(remainder, rowIndex, columnIndex,  originalArr, IsFirstRun) {
   
   
  if(rowIndex >= HEIGHT - 1)
  {
    originalArr[HEIGHT-1][WIDTH-1] = "-"
    drawGrid(HEIGHT, WIDTH)
    horizontalCursorPosition = horizontalCursorPosition - 5
    if(horizontalCursorPosition < 0)
    {
      horizontalCursorPosition = horizontalCursorPosition + 5
    }
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
   if(IsFirstRun)
   {
   let line1 = originalArr[rowIndex+1];
   let line2 = originalArr[rowIndex+2]
   let cursorPosition = columnIndex
   let [left, right] = this.splitAtIndex(line1, cursorPosition+1) ;
   let len = left.length
   let [leftPhrase, characterAtIndex] = this.splitAtIndex(left, len-1) ;
   let sixDigitLine = [...leftPhrase, ...right] 
   let [CharacterOnNextLine, rest] = this.splitAtIndex(line2, 1)
   let combine2 = [  ...sixDigitLine, ...CharacterOnNextLine ]
   originalArr[rowIndex+1] = combine2
   drawGrid(HEIGHT, WIDTH)
   
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
    if (rowIndex <= 4)
    {
      letter = originalArr[rowIndex+3][0]
      console.log("row: ", rowIndex)
      console.log("letter: ", letter)
    }
    //let completeLineTwo = [ ...lineOneFirstCharacterForLineTwo,...LineTwosWordWithoutFirstLetter]
    let completeLineTwo = [...LineTwosWordWithoutFirstLetter, letter ]
    originalArr[rowIndex+1] = completeLineOne
    originalArr[rowIndex+2] = completeLineTwo
    drawGrid(HEIGHT, WIDTH)
    this.deleteACharacter( [], rowIndex+2, 0,  originalArr, false) 
  }  
}


  adjustForWordBreaks_TopToBottom(
    frontPart,
    remainder,
    originalArr,
    rowIndex,
    colIndex
  ) {
    alert("adjustforwordbreak");
    let totalWord = "";
    let iteration = 1;
    let consolePad = "  ".repeat(iteration);
    console.log(consolePad, "a word was broken in the line break");
    console.log(consolePad, "line to break up:");
    console.log(consolePad, frontPart);
    let lastSpaceIndex = frontPart.indexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    let [wordPart, trimmedLeft] = this.splitAtIndex(frontPart, lastSpaceIndex);
    console.log(consolePad, "trimmed line split at word break:", trimmedLeft);
    console.log(consolePad, "partial word:", wordPart);
    let target = originalArr[rowIndex - 1];
    lastSpaceIndex = target.lastIndexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    if (lastSpaceIndex === -1) {
      return originalArr;
    }
    let [trimmedLeft1, wordPart1] = this.splitAtIndex(
      target,
      lastSpaceIndex + 1
    );
    target = originalArr[rowIndex];
    lastSpaceIndex = target.lastIndexOf("-");
    if (lastSpaceIndex === -1) {
      return originalArr;
    }
    let frontPieceWord = originalArr[rowIndex];
    let [trimmedLeft2, frontWordPart1] = this.splitAtIndex(
      frontPieceWord,
      lastSpaceIndex
    );
    totalWord = [...frontWordPart1, ...wordPart];
    const combinedArr = [...wordPart1, ...wordPart];
    let [combinedArrWidth, finalRemainder] = this.splitAtIndex(
      combinedArr,
      this.maxCols
    );
    let value = rowIndex;
    let coverArray = {};
    if (wordPart.length + wordPart1.length > 7) {
      return originalArr;
      return originalArr;
    }
    originalArr[rowIndex] = combinedArrWidth;
    originalArr[rowIndex - 1] = trimmedLeft1;
    originalArr = this.fillNullWithDashOnRow(rowIndex - 1, originalArr);
    //LOOK AT THIS WHEN APPROPRIATE
    this.insertNewArr(false, false, originalArr, finalRemainder, rowIndex + 1, 0);
    this.fillNullWithDashOnRow(rowIndex, originalArr);
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
    console.log("adjust2: ", originalArr);
    return originalArr;
  }
  
  
  adjustForWordBreaks_BottomToTop(
    frontPart,
    remainder,
    originalArr,
    rowIndex,
    colIndex
  ) {
    let totalWord = "";
    let iteration = 1;
    let consolePad = "  ".repeat(iteration);
    alert("found test!");
    console.log(consolePad, "a word was broken in the line break");
    console.log(consolePad, "line to break up:");
    console.log(consolePad, frontPart);
    let lastSpaceIndex = frontPart.lastIndexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    if (lastSpaceIndex === -1) {
      return originalArr;
    }
    let [trimmedLeft, wordPart] = this.splitAtIndex(
      frontPart,
      lastSpaceIndex + 1
    );
    console.log(consolePad, "trimmed line split at word break:", trimmedLeft);
    console.log(consolePad, "partial word:", wordPart);
    let target = originalArr[rowIndex + 1];
    lastSpaceIndex = target.indexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    if (lastSpaceIndex === -1) {
      return originalArr;
    }
    let [wordPart1, trimmedLeft1] = this.splitAtIndex(
      target,
      lastSpaceIndex + 1
    );
    target = originalArr[rowIndex];
    lastSpaceIndex = target.lastIndexOf("-");
    let frontPieceWord = originalArr[rowIndex];
    let [trimmedLeft2, frontWordPart1] = this.splitAtIndex(
      frontPieceWord,
      lastSpaceIndex + 1
    );
    totalWord = [...frontWordPart1, ...wordPart];
    const combinedArr = [...wordPart1, ...wordPart];
    let [combinedArrWidth, finalRemainder] = this.splitAtIndex(
      combinedArr,
      this.maxCols
    );
    let value = rowIndex;
    if (wordPart.length + wordPart1.length > 7) {
      this.flagToManyDashes = true;
      return originalArr;
    }
    originalArr[rowIndex] = trimmedLeft2;
    //LOOK AT THIS WHEN APPROPRIATE
    this.insertNewArr(false, false, originalArr, wordPart, rowIndex + 1, 0);
    originalArr = this.fillNullWithDashOnRow(rowIndex, originalArr);
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
    console.log("adjust2: ", originalArr);
    return originalArr;
  }
  //Worked on, 4/5/24
  insertNewArr(HasBeenToRecursive, IsFromIndex, originalArr, insertedArr, rowIndex, colIndex) {
    //there has been a recursive call, so we don't want to call this, it is only called the original first time.
    //@if(HasBeenToRecursive)
    //@{
    //@  //return originalArr
    //@}
    //made it to bottom of array, so bail out
    if (rowIndex >= HEIGHT) {
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
    //alert("in b")
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
  
  
  createRow(originalArr, insertedArr, rowIndex, colIndex) {
    if (insertedArr.length <= WIDTH) {
      HEIGHT++;
      //delete final row (padding for iterated inserted array, elsewhere.)
      deleteRow(originalArr, rowIndex) 
      originalArr.push(insertedArr);
      //push for new final row again (padding for recursive calls, elsewhere)
      originalArr.push(["", "", "", "", "", "" , "" ],)
    //inserted array is greater than one row  
    } else {
      let [front, remainder] = this.splitAtIndex(insertedArr, WIDTH);
      //delete final row (padding for iterated inserted array, elsewhere.)
      deleteRow(originalArr, rowIndex) 
      originalArr.push(front);
      //push for new final row again (padding for recursive calls, elsewhere)
      originalArr.push(["", "", "", "", "", "" , "" ],)
      this.insertNewArr(
        false,
        //LOOK AT THIS WHEN APPROPRIATE
        false,
        originalArr,
        insertedArr,
        rowIndex + 1,
        colIndex
      );
      return originalArr
    }
    return originalArr
  }
  
  
  insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) {
    //if (isFromIndex === true) {
      //this.IsJustFromRecursive = false
    //}
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

  pullTextBackToTop(originalArr, rowIndex, colIndex) {
    //?
   
    for (let i = colIndex; i >= 0; i--) {
      if (originalArr[rowIndex][i] == "" || originalArr[rowIndex][i] == "-") {
      /* alert("in if");
       return originalArr;
      }*/
    }
    if (rowIndex >= 6) {
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
    if (amountOfLeftSpacesRow2 > amountOfRightSpacesRow1) {
      return originalArr;
    }
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
    horizontalCursorPosition = 5 * WIDTH-1;
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
}