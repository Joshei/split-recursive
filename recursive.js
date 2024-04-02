class RecursiveClass {
  constructor() {
    this.maxCols = 7;
    this.counter = 0;
    this.initialRow = 0;
    this.initialColumn = 0;
    this.mapCounter = 0;
    this.testcounter = 0;
    this.flag = 0;
    this.flagToManyDashes = false;
    this.testCounter = 0;
    this.BreakoutOfDelete = false;
    this.RanBefore = false;
    this.rem = [];
  }


  moveAllWordsAcrossBorder(originalArr, remainder, rowIndex, colIndex) {
    if (rowIndex >= 5) {
      return originalArr;
    }
    let target1 = originalArr[rowIndex];
    let target2 = originalArr[rowIndex + 1];
    let lastSpaceIndex1 = target1.lastIndexOf("-");
    const [trim, topWord] = this.splitAtIndex(target1, lastSpaceIndex1 + 1);
    let combine = [...topWord, ...remainder, ...target2];
    const [row, remainder2] = this.splitAtIndex(combine, WIDTH);
    originalArr[rowIndex + 1] = row;
    drawGrid(HEIGHT, WIDTH);
    let topWordLen = topWord.length;
    let indextoStartDisplayDashes = WIDTH - topWordLen;
    for (let i = indextoStartDisplayDashes; i <= WIDTH - 1; i++) {
      originalArr[rowIndex][i] = "-";
    }
    drawGrid(HEIGHT, WIDTH);
    this.moveAllWordsAcrossBorder(
      originalArr,
      remainder2,
      rowIndex + 1,
      colIndex
    );
    return originalArr;
  }
  
  
  insertCharacterToArray(array, col, row, character) {
    array[row].splice(col, 0, "W");
  }
  
  
  deleteKeyPressed(array, col, row) {
    const removed = array[row].splice(col, 1);
    return;
  }
  
  
  putElementIn2DimArray(arr, row, column) {
    arr.splice(1, 0, "W");
  }
  deleteRow(arr, rowIndex) {
    arr.splice(rowIndex, 1);
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
  
  
  recursiveDelete(originalArr, rowIndex, colIndex) {
    for (let i = colIndex; i >= 0; i--) {
      if (originalArr[rowIndex][i] == "" || originalArr[rowIndex][i] == "-") {
        alert("in if");
        return originalArr;
      }
    }
    if (rowIndex >= 6) {
      return originalArr;
    }
    let rowOne = originalArr[rowIndex];
    let rowTwo = originalArr[rowIndex + 1];
    let index1stRow = rowOne.lastIndexOf("-");
    let index2ndRow = rowTwo.indexOf("-");
    let amountOfRightSpacesRow1 = WIDTH - index1stRow + 1;
    let amountOfLeftSpacesRow2 = index2ndRow;
    if (amountOfLeftSpacesRow2 > amountOfRightSpacesRow1) {
      alert("doesn't fit:  row index", rowIndex);
      return originalArr;
    }
    let amountOfTopSpaces = 0;
    for (let i = WIDTH - amountOfLeftSpacesRow2; i < WIDTH; i++) {
      if (
        originalArr[rowIndex][i] == "" ||
        originalArr[rowIndex][i] == " " ||
        originalArr[rowIndex][i] == "-"
      ) {
        amountOfTopSpaces++;
      }
    }
    if (amountOfLeftSpacesRow2 > amountOfTopSpaces) {
      alert("here!!!");
      return originalArr;
    }
    alert("here!!!&&&");
    console.log({ rowIndex });
    let topLineNextRow = [];
    let topLine = originalArr[rowIndex - 1];
    topLineNextRow = originalArr[rowIndex];
    let lastSpaceIndex = topLine.lastIndexOf("-");
    let [lineBesideLeftMostCharacter, firstCharacter] = this.splitAtIndex(
      topLine,
      lastSpaceIndex
    );
    let lastSpaceIndex2 = topLineNextRow.indexOf("-");
    let [CharactersOfNextLine, lineBesideLeftMostCharacterNextRow] =
      this.splitAtIndex(topLineNextRow, lastSpaceIndex2);
    let completeTopRow = [];
    let lengthOfSpaceForWord = CharactersOfNextLine.length;
    let index = WIDTH - lengthOfSpaceForWord;
    let [left, b] = this.splitAtIndex(topLine, index);
    let combine = [...left, ...CharactersOfNextLine];
    originalArr[rowIndex - 1] = combine;
    for (let i = 0; i < lengthOfSpaceForWord; i++) {
      originalArr[rowIndex][i] = "-";
    }
    horizontalCursorPosition = 5 * 6;
    verticalCursorPosition = verticalCursorPosition - 10;
    drawGrid(HEIGHT, WIDTH);
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    return originalArr;
    drawGrid(HEIGHT, WIDTH);
    return originalArr;
  }
  
  
  pressedEnter3(
    originalArr,
    rowIndex3,
    colIndex,
    remainder,
    wordToPass,
    IsFirstTime
  ) {
    console.log("imp", typeof remainder);
    if (Object.keys(remainder).length === 0) {
      remainder = "";
    }
    if (rowIndex3 > HEIGHT - 2) {
      return originalArr;
    }
    let target1 = originalArr[rowIndex3];
    let target2 = originalArr[rowIndex3 + 1];
    let copyTarget1 = [...target1];
    let copyTarget2 = [...target2];
    let amtCharactersToPass = WIDTH - colIndex;
    let target3 = originalArr[rowIndex3 + 2];
    let holderForArray = [];
    let indexOfWordToPass = colIndex + 1;
    let thisIsFullPhrase = [...wordToPass, ...target1];
    let [topRightWord, row1LastCharacters] = this.splitAtIndex(
      thisIsFullPhrase,
      colIndex
    );
    let holderForArray1 = [];
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
    drawGrid(HEIGHT, WIDTH);
    if (IsFirstTime) {
      for (let i = WIDTH - amtCharactersToPass; i < WIDTH; i++) {
        originalArr[rowIndex3][i] = "-";
      }
      drawGrid(HEIGHT, WIDTH);
    }
    this.pressedEnter3(
      originalArr,
      rowIndex3 + 1,
      colIndex,
      remainder,
      lastCharacters,
      false
    );
    drawGrid(HEIGHT, WIDTH);
    return originalArr;
  }
  

  deleteACharacter(remainder, rowIndex2, originalArr, IsFirstRun) {
    if (rowIndex2 >= 5) {
      const removed = originalArr[rowIndex2 + 1].splice(1, 1);
      originalArr[HEIGHT - 1][WIDTH - 1] = "-";
      alert("in");
      return originalArr;
    }
    let lineToShift = originalArr[rowIndex2 + 1];
    let secondLine = originalArr[rowIndex2 + 2];
    let [left1, trim1] = this.splitAtIndex(lineToShift, 1);
    let target = originalArr[rowIndex2 + 1];
    let combined = [];
    if (IsFirstRun) {
      combined = [...remainder, ...trim1, ...secondLine];
    } else {
      combined = [...remainder, ...secondLine];
    }
    let [left2, trim] = this.splitAtIndex(combined, WIDTH);
    originalArr[rowIndex2 + 1] = left2;
    this.deleteACharacter(trim, rowIndex2 + 1, originalArr, false);
    drawGrid(WIDTH, HEIGHT);
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
    this.insertNewArr(false, originalArr, finalRemainder, rowIndex + 1, 0);
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
    this.insertNewArr(false, originalArr, wordPart, rowIndex + 1, 0);
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
  



  //let lastSpaceIndex = frontPart.lastIndexOf("-");
  
  insertNewArr(IsFromIndex, originalArr, insertedArr, rowIndex, colIndex) {
    if (rowIndex >= 6) {
      return originalArr;
    }
    let targetRow = originalArr[rowIndex];
    if (targetRow) {
      console.log("tr: ", targetRow);
      console.log("inserting array into an existing row of originalArr");
      let [front, back] = this.splitAtIndex(targetRow, colIndex);
      let combine = [];
      if (IsFromIndex) {
        combine = [...front, ...insertedArr, ...back];
      } else {
        combine = [ ...front, ...insertedArr, ...back];
      }
      let [row2, remainder1] = this.splitAtIndex(combine, WIDTH);
      
      
      if (
        originalArr[rowIndex][WIDTH - 1] == "-" ||
        originalArr[rowIndex][WIDTH - 1] == ""
      ) {
        //alert("horiz change");
        originalArr[rowIndex] = row2;
        if (IsFromIndex) {
          this.setXandYPositions();
        }
        drawGrid(HEIGHT, WIDTH);
        drawCursor(
          horizontalCursorPosition + HOFFSET,
          verticalCursorPosition + VOFFSET
        );
        remainder1 = [];
        return originalArr;
      }
      
      else {
        alert("section 2");
        originalArr[rowIndex] = row2;
        let length = remainder1.length;
        if (length > 0) {
          let target = originalArr[rowIndex + 1];

          
          let combine = [...remainder1, ...target];
          let [display, b] = this.splitAtIndex(combine, WIDTH);
          originalArr[rowIndex + 1] = display;
          this.fillNullWithDashOnRow(rowIndex + 1, originalArr);
          this.setXandYPositions();
          drawCursor(
            horizontalCursorPosition + HOFFSET,
            verticalCursorPosition + VOFFSET
          );
          drawGrid(HEIGHT, WIDTH);
          this.insertNewArr(false, originalArr, b, rowIndex + 2, colIndex);
          return originalArr;
        }
      }
    } else {
      alert("create row");
      this.createRow(originalArr, insertedArr, rowIndex, colIndex);
      HEIGHT++;
      drawGrid(HEIGHT, WIDTH);
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      );
      return originalArr;
    }
  }
  
  
  setXandYPositions() {
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
      originalArr.push(insertedArr);
    } else {
      let [front, remainder] = this.splitAtIndex(insertedArr, WIDTH);
      originalArr.push(front);
      HEIGHT++;
      this.insertNewArr(
        false,
        originalArr,
        insertedArr,
        rowIndex + 1,
        colIndex
      );
      return originalArr;
    }
  }
  
  
  insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) {
    if (isFromIndex === true) {
      this.initialRow = rowIndex;
      this.RanBefore = false;
    }
    let newArray2 = this.snapshot(originalArray);
    console.log("oa2: ", originalArray);
    return this.insertNewArr(
      isFromIndex,
      newArray2,
      insertedArray,
      rowIndex,
      colIndex
    );
  }
}
