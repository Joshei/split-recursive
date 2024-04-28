
//NEEDS DOING: 4/27/24
//MoveWord  - implement a fucntion 

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
  createRowForPushWords(originalArr, insertedArr, rowIndex, colIndex)
  {
    alert("push")

    let target = originalArr[rowIndex]
    let lastSpaceIndex = target.indexOf("!");
    for (let i = lastSpaceIndex ; i < WIDTH; i++){
      originalArr[rowIndex][i] = "-"
    }


    //delete final row (padding for iterated inserted array, elsewhere.)
    this.deleteRow(originalArr, rowIndex+1) 
    //originalArr[rowIndex][0] = "A"
    //originalArr.push(['-','-','-','-','-','-','-' ], )
    //originalArr[rowIndex+1][0] = "B"
    //drawGrid(HEIGHT, WIDTH)
    //push for new final row again (padding for recursive calls, elsewhere)
    originalArr.push(['!','!','!','!','!','!','!' ], )

    
    //this.fillNullWithDashOnRow(rowIndex+1, originalArr)
    HEIGHT++ 
  
  drawGrid(HEIGHT, WIDTH)
    horizontalCursorPosition = 0;
    verticalCursorPosition = verticalCursorPosition + 10;
  drawCursor(
    horizontalCursorPosition + HOFFSET,
    verticalCursorPosition + VOFFSET
  );
  
  return originalArr

  }
  
 
 createRow(originalArr, insertedArr, rowIndex, colIndex) {
  //return originalArr
  //alert("create row")
  //if (insertedArr.length <= WIDTH) 
  {

    alert("create row called");
    
      //HEIGHT++;
        //delete final row (padding for iterated inserted array, elsewhere.)
      //delete final row (padding for iterated inserted array, elsewhere.)
      this.deleteRow(originalArr, rowIndex+1) 
      //originalArr[rowIndex][0] = "A"
      originalArr.push(['-','-','-','-','-','-','-' ], )
      //originalArr[rowIndex+1][0] = "B"
      drawGrid(HEIGHT, WIDTH)
      //push for new final row again (padding for recursive calls, elsewhere)
      originalArr.push(['!','!','!','!','!','!','!' ], )

      
      //this.fillNullWithDashOnRow(rowIndex+1, originalArr)
      HEIGHT++ 
    }
    drawGrid(HEIGHT, WIDTH)
      horizontalCursorPosition = 0;
      verticalCursorPosition = verticalCursorPosition + 10;
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    
    return originalArr
    //inserted array is greater than one row  
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
  //testing - works with delete pressed on same line as top row
  //looks good - 4/26/24
  //rewritten : 4/27/24, tested
  moveWords(originalArr, remainder, rowIndex, colIndex)
  {
    
    if(rowIndex > HEIGHT-2){
      //alert("move words")
      this.createRow(originalArr, [], rowIndex, colIndex)
      let target1 = originalArr[rowIndex];
      let target2 = originalArr[rowIndex + 1];
      let lastSpaceIndexRow1 = target1.lastIndexOf("-");
      //phrase, right of last dash
      const [left, rightWordRowOne] = this.splitAtIndex(target1, lastSpaceIndexRow1 + 1);
      let lengthOfRightWordRow1 = rightWordRowOne.length
      let aRowOfNulls = []
      for(let i = 0; i < WIDTH - lengthOfRightWordRow1; i++){
        aRowOfNulls[i] = "-"
      }
      let combined = [...rightWordRowOne, ...aRowOfNulls]
      originalArr[rowIndex+1] = combined
      for(let i = WIDTH - lengthOfRightWordRow1; i< WIDTH; i++){
        originalArr[rowIndex][i] = "-"
      }
      drawGrid(HEIGHT, WIDTH)
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET)
        return originalArr
    }
    let target1 = originalArr[rowIndex];
    let target2 = originalArr[rowIndex + 1];
    //get left phrase before last dash
    let lastSpaceIndexRow1 = target1.lastIndexOf("-");
    //phrase, right of last dash
    const [left, rightWordRowOne] = this.splitAtIndex(target1, lastSpaceIndexRow1 + 1);
    //how many dashes from left to right that are spaces to determine if word is pushed onto this row
    let dashCounter  = 0
    for(let i = 0 ; i < WIDTH; i++){
       if (originalArr[rowIndex + 1][i] == "-"){
          dashCounter++
       }
       else{
        break;
       }
      }
    let amountOfSpaces = dashCounter
    //word to move's length
    let lengthOfRightword = rightWordRowOne.length
    const [leftSpaces, rightWordRowTwo] = this.splitAtIndex(target2, lengthOfRightword);
    //does word fit in space
    if(lengthOfRightword <= amountOfSpaces ){
      //start row with word from above agfainst right border one row up
      let row2 = rightWordRowOne
      let combineRow2 = [...row2, ...rightWOrdRowTwo]
      originalArr[rowIndex+1] = combineRow2
      //check top of two rows to replace the use dvalues with dashes)
      for(let i =  WIDTH - lengthOfRightword ; i < WIDTH ; i++){
        originalArr[rowIndex][i] = "+"
      }
      drawGrid(HEIGHT, WIDTH)
      //check for if next row is one below (not two), if not, advance two rows, as is normal
      if(originalArr[rowIndex+1][WIDTH-1] != "-" && originalArr[rowIndex+1][WIDTH-1] != undefined)
        {
          this.moveWords(originalArr, remainder, rowIndex+1, colIndex) 
        }
      this.moveWords(originalArr, remainder, rowIndex+2, colIndex)
    }
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
        arrayToChange[RowIndex][i] = "X";
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
  //this function uses createrow, moveword use just createrow
  //tested : 4/16/24 =  changed - : 4/20/24
  pressedEnter(
    originalArr,
    rowIndex3,
    colIndex,
    remainder,
    wordToPass,
    IsFirstTime
  ) {
    this.fillNullWithDashOnRow(rowIndex3, originalArr)
    
    //only on intial call, not when being recursive.
    if (IsFirstTime) {
    alert("1")
    //this.createRow(originalArr, remainder, rowIndex3, colIndex) 
    //drawGrid(HEIGHT, WIDTH)
    //delete row of nulls to put back on last row below
    //@this.deleteRow(originalArr, (HEIGHT))
    //@originalArr.push (["-", "-", "-", "-", "-", "-" , "-" ],)
    //@originalArr.push (["", "", "", "", "", "" , "" ],)
    //@HEIGHT++
    //@alert("was here?!?!")
    if(rowIndex3 == HEIGHT - 1)
      {
        alert("2");
        
        //this.createRow(originalArr, remainder, rowIndex3+2)
        
        //@HEIGHT++
        //return originalArr
        
      }
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
    //@ let target3 = originalArr[rowIndex3 + 2];
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
        originalArr[rowIndex3][i] = "-";
      }
     //* drawGrid(HEIGHT, WIDTH);
    //*}
    //*if(IsFirstTime)
    //*{
      
    } 
    IsFirstTime = false
    if (rowIndex3 > HEIGHT-2) {
      alert("y")
      
      this.createRow(originalArr, remainder, rowIndex3+1, colIndex)
      let amountOfNulls = colIndex
      for(let i = WIDTH-amountOfNulls; i < WIDTH ; i++ )
      {
        originalArr[rowIndex3+1][i] = "-"
      }
      drawGrid(HEIGHT,WIDTH)
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      );
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
  //checked:  4/16/24
  deleteACharacter(remainder, rowIndex, columnIndex,  originalArr, IsFirstRun) {
  //on last row
  //@if(rowIndex > HEIGHT - 1)
  //@{
    //put a dash on last row, last column
  //@  originalArr[HEIGHT-1][WIDTH-1] = "A"
  //@  if(horizontalCursorPosition === 0) 
  //@  {
  //@  }else{
    //set cursor one position to left
    //@horizontalCursorPosition = horizontalCursorPosition - 5
  //@  }
    //@if(horizontalCursorPosition < 0)
    //@{
    //@  horizontalCursorPosition = horizontalCursorPosition + 5
    //@}
  //@  drawGrid(HEIGHT, WIDTH)
  //@  drawCursor(
  //@  horizontalCursorPosition + HOFFSET,
  //@  verticalCursorPosition + VOFFSET
  //@  )
  //@  return originalArr
  //@}
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
   if(originalArr[rowIndex][columnIndex] == "-")
   {
      return originalArr
   }
   let line1 = originalArr[rowIndex];
   let line2 = originalArr[rowIndex+1]
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
   if(rowIndex === HEIGHT-1)
   {
     combine2 = [  ...sixDigitLine, ["O"] ]
   }
   originalArr[rowIndex] = combine2
   drawGrid(HEIGHT, WIDTH)
   drawCursor(
    horizontalCursorPosition + HOFFSET,
    verticalCursorPosition + VOFFSET
   )
   //recursive call, will call the next section, this is only run on initial call
   //from index.html
   this.deleteACharacter( [], rowIndex+1, 0,  originalArr, false)
   return originalArr
  }else{
    let line1 = originalArr[rowIndex];
    let line2 = originalArr[rowIndex+1]
    //left most character of second line - put at end of line 1
    let [lineTwosLeftmostCharacterForLineOne, LineTwosWordWithoutFirstLetter] = this.splitAtIndex(line2, 1) ;
    //remove letter from start of first line
    let [lineOneFirstCharacterForLineTwo, lineOneWithoutFirstLetter] = this.splitAtIndex(line1, 1) ;
    //add second lines left most character to line ones most right position
    let completeLineOne = [ ...lineOneWithoutFirstLetter, ...lineTwosLeftmostCharacterForLineOne]
    if(rowIndex === HEIGHT-1)
    {
      completeLineOne = [ ...lineOneWithoutFirstLetter, ["O"]] 
    }
    
    //@let letter = ""
    //row index is 4 or less, otherwise calls first condition
    //in condition element is a maximum of 7
    //there is one more, before increasing height, and that is when the afore-mentioned
    //section is called and a dash is put in that last position because it is the last
    //before padding
    //@if (rowIndex < 4)
    //@{
    //@  letter = originalArr[rowIndex+2][0]
    //@  console.log("row: ", rowIndex)
    //@  console.log("letter: ", letter)
    //@}
    //let completeLineTwo = [ ...lineOneFirstCharacterForLineTwo,...LineTwosWordWithoutFirstLetter]
    //one line
    //let completeLineTwo = [...LineTwosWordWithoutFirstLetter, letter ]
    originalArr[rowIndex] = completeLineOne
    //originalArr[rowIndex+2] = completeLineTwo
    drawGrid(HEIGHT, WIDTH)
    drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
    )
    //recursive call
    this.deleteACharacter( [], rowIndex+1, 0,  originalArr, false)
    return originalArr 
  }  
}


    setXandYPositions() {
    alert("set");
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
  
  insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) {
    //@if (isFromIndex === true) {
    //@this.IsJustFromRecursive = false
    //@}
    let newArray2 = this.snapshot(originalArray);
    console.log("oa2: ", originalArray);
    //@return this.insertNewArr(false,isFromIndex,newArray2,insertedArray,rowIndex,colIndex);
    return this.initialInsert(rowIndex, colIndex, originalArray, insertedArray)
  }

 
  //tested : 4/13/24
  //checked: 4/17/24 - bottom half not looked at.
  //checked: 4/26/24 - looks good
  //4/27/24 - changed, look at again
  pullTextBackToTop(CallFromIndex, character, originalArr, rowIndex, colIndex) {
    //?
   
    if(rowIndex === 0 || rowIndex === undefined)
    {
      return originalArr;
    }
    if(rowIndex > HEIGHT - 1)
    {
      return originalArr;
    }
    //understand this bettee
    //if there is not complete characters from cursor to left border, than exit
    
    if(CallFromIndex){
    for (let i = colIndex - 1; i >= 0; i--) {
        if (originalArr[rowIndex][i] == "" || originalArr[rowIndex][i] == "-") {
        return originalArr;
        }
      }
    } 
    let rowOne = []
    let rowTwo = []
    
    
    
    rowOne = originalArr[rowIndex-1];
    rowTwo = originalArr[rowIndex];
    
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
        originalArr[rowIndex-1][i] == "" ||
        originalArr[rowIndex-1][i] == " " ||
        originalArr[rowIndex-1][i] == "-"
      ) {
        amountOfTopSpaces++;
      }
      else{
        break;
      }
    }
    //not enough room for pushing text up
    if (amountOfLeftCharactersRow2 > amountOfTopSpaces) {
      drawGrid(HEIGHT, WIDTH)
      return originalArr;
    }
   
    let topLineNextRow = [];
    let topLine = []
   
    topLine = originalArr[rowIndex-1];
    topLineNextRow = originalArr[rowIndex];
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
    originalArr[rowIndex - 1] = combine;
    //cover left side lower word with dashes - this phrase was raised to top right and now is dashed
    for (let i = 0; i < lengthOfSpaceForWord; i++) {
      originalArr[rowIndex][i] = "-";
    }
    //put cursor on last character on left hand side of top row
    if (CallFromIndex === true)
    {
      horizontalCursorPosition = (5 * WIDTH) -5;
      verticalCursorPosition = verticalCursorPosition - 10;
    }
    drawGrid(HEIGHT, WIDTH);
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    this.pullTextBackToTop(false, character, originalArr, rowIndex+1, colIndex)
    return originalArr;
    }
  

  /////////////////////////
  //insert that checks for dashes, if are, than is recursive, otherwise
  //isn't and will have a string less than width
  //debugged : 4/22/24
  initialInsert(IsFromIndex, rowIndex, colIndex, originalArr, leftOverChars)
  {
  let DashFlagSet = false
  if(rowIndex > HEIGHT - 1)
  {
     return originalArr
  }
  let targetRow = originalArr[rowIndex];
  let [front, back] = this.splitAtIndex(targetRow, colIndex);
  let lastIndex =  back.lastIndexOf("-");
  let [unused, leftWord] = this.splitAtIndex(back, lastIndex + 1);
 

  let combinedStringWithRemainder = [...front, ...leftOverChars, ...back];
  //splits string at the width, so will fit on one row, and rest is set to remainder.
  let [thisIsOneRowOrLess, leftOverRemainder] = this.splitAtIndex(combinedStringWithRemainder, WIDTH);
  if(originalArr[rowIndex][WIDTH-1] === "-")
   {
     DashFlagSet = true
   }
  originalArr[rowIndex] = thisIsOneRowOrLess; 
  //checks for a single character that is left over from total string
  if(leftOverRemainder[0] != "-" && leftOverRemainder[0] != "" && HEIGHT == verticalCursorPosition/10+1 && horizontalCursorPosition/5 != WIDTH-1)
   {
    this.createRow(originalArr, leftOverRemainder, rowIndex, colIndex)
    //get left word
    let lastIndex =  thisIsOneRowOrLess.indexOf("-");
    let [wordOnLeft, wordOnRight] = this.splitAtIndex(thisIsOneRowOrLess, lastIndex);
    let lengthOfLeftWord = wordOnLeft.length
    
    let amountOfTopSpaces = 0
    for (let i = (WIDTH - 1); i >= 0; i--) {
      if (
        originalArr[rowIndex][i] == "" ||
        originalArr[rowIndex][i] == " " ||
        originalArr[rowIndex][i] == "-"
      ) {
        amountOfTopSpaces++;
      }
      else{
        break;
      }
    }

    if(lengthOfLeftWord <= amountOfTopSpaces)
    {
      let targetOne = originalArr[rowIndex-1]
      let targetTwo = originalArr[rowIndex]

      let lastIndexRow2 =  targetTwo.indexOf("-");
      let lastIndexRow1 = targetOne.indexOf("-")
      let [rowTwoLeftWord, rowTwoWithoutLeftWord] = this.splitAtIndex(targetTwo, lastIndexRow2)
      let lengthOfRow2LeftWord = rowTwoLeftWord.length
      let [left, right] = this.splitAtIndex(targetOne, WIDTH - lastIndexRow2)

      let newRowOne = [...left, ...rowTwoLeftWord ]
      lengthOfRow2LeftWord = rowTwoLeftWord.length
      for(let i = 0 ; i < lengthOfRow2LeftWord ; i++)
      {
        rowTwoLeftWord[i] = "-"
      }
      originalArr[rowIndex-1] = newRowOne
      //originalArr[rowIndex] = [...rowTwoLeftWord, ...rowTwoWithoutLeftWord]
      //originalArr[rowIndex] = leftWord
      originalArr[rowIndex+1] = ["-", "-", "-", "-", "-", "-" , "-" ],
      originalArr[rowIndex+1] = leftOverRemainder
      let lengthOfRemainder = leftOverRemainder.length
      drawGrid(HEIGHT, WIDTH)
      
      for(let i = 0 ; i < lengthOfLeftWord ; i++)
      {
        originalArr[rowIndex][i] = "-" 
      }
      for(let i = lengthOfRemainder ; i < WIDTH ; i++)
      {
        originalArr[rowIndex+1][i] = "-"
      }
     
    }
    drawGrid(HEIGHT, WIDTH)
     
      //return originalArr
   }

   if (DashFlagSet == true)
   {
    return originalArr
   }
   
   //checks for an intial call from index
   if(IsFromIndex === true)
  {
  this.recursiveFunctionInsert(true, rowIndex+1 , colIndex, originalArr, leftOverRemainder)
  drawGrid(HEIGHT, WIDTH)
  drawCursor(
    horizontalCursorPosition + HOFFSET,
    verticalCursorPosition + VOFFSET
  );
  return originalArr
  }
  else{
    this.recursiveFunctionInsert(false, rowIndex+1 , colIndex, originalArr, leftOverRemainder)
  }
  drawGrid(HEIGHT, WIDTH)
  return originalArr
  }
  

  //686 and 625 amd 662
  //call function over and over again
  //delete row one's first character, and use next lines first character to put at row ones end
  recursiveFunctionInsert(ISOnFIrstCall, rowIndex, colIndex, originalArr, leftOverChars)
  { 
    if (this.GCreateRowFlag == true && (rowIndex === HEIGHT-1)  && (originalArr[rowIndex][WIDTH-1] !== "-") )
    //if there is a character in last position and a key press in the row, than create another row
    {
      this.GCreateRowFlag = false
      this.makeExtraRowForInsert(ISOnFIrstCall, rowIndex, colIndex, originalArr,  leftOverChars)
    }
    this.GCreateRowFlag = true
    //bails out of recursion
    if(rowIndex > HEIGHT - 1)
    {
      return originalArr
    }
    let targetRow = originalArr[rowIndex];
    let rowWithAdditionalCharacter = [...leftOverChars, ...targetRow]
    //splits string at the width, so will fit on one row, and rest is set to remainder.
    let [thisIsOneRowOrLess, leftOverRemainderChar] = this.splitAtIndex(rowWithAdditionalCharacter, WIDTH);
    originalArr[rowIndex] = thisIsOneRowOrLess; 
    {
      this.recursiveFunctionInsert(ISOnFIrstCall, rowIndex+1 , colIndex, originalArr, leftOverRemainderChar)
      drawGrid(HEIGHT, WIDTH)
      return originalArr
    }
 }

    //called from recursion, makes a new row 
    makeExtraRowForInsert(IsFirstCallFromIndex, rowIndex, colIndex, originalArr, leftOverChars){
    if(rowIndex > HEIGHT - 1)
    {
      //return
    }
    //only creates row, on initial insert, not those recursive calls
    if(IsFirstCallFromIndex){
    this.createRow(originalArr, [], rowIndex, colIndex) 
    }
    //negate creatrow call
    verticalCursorPosition = verticalCursorPosition - 10
    drawGrid(HEIGHT, WIDTH)
    drawCursor(
      horizontalCursorPosition + HOFFSET,
      verticalCursorPosition + VOFFSET
    );
    
    //check for insert on the new row
    this.recursiveFunctionInsert(false, rowIndex+1,colIndex, originalArr, [])
    return originalArr
    }
      
    DisplayGridAndCursor()
    {

      drawGrid(HEIGHT, WIDTH)
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET)
        return originalArr;

    }


   
  }




