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
      originalArr.push(["-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-","-", "-", "-", "-", "-", "-" , "-" ]),
    
      //originalArr[rowIndex+1][0] = "B"
      drawGrid(HEIGHT, WIDTH)
      //push for new final row again (padding for recursive calls, elsewhere)
      originalArr.push(["!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!", "!", "!", "!", "!", "!" , "!", "!","!", "!", "!", "!", "!" , "!" ]),
    

      
      //@this.fillNullWithDashOnRow(rowIndex+1, originalArr)
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
  pushWords(IsFromIndex, originalArr, remainder, rowIndex, colIndex)
  {

    //drawGrid(HEIGHT, WIDTH)
    //alert("has entered PushWords")

    if(rowIndex > HEIGHT-1){
      return originalArr
    }

    let nextRemainder = []
    let combined1 = []
    
    if(rowIndex > HEIGHT-2){
      
      //alert("move words")
      this.createRow(originalArr, [], rowIndex, colIndex)
      let target1 = originalArr[rowIndex];
      let target2 = originalArr[rowIndex + 1];
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


      originalArr[rowIndex+1] = combined1a
      for(let i = WIDTH - lengthOfRightWordRow1; i< WIDTH; i++){
        originalArr[rowIndex][i] = "-"
      }
      //drawGrid(HEIGHT, WIDTH)
      //drawCursor(
      //  horizontalCursorPosition + HOFFSET,
      //  verticalCursorPosition + VOFFSET)
      //  return originalArr
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
    let lengthOfRightWord = rightWordRowOne.length

    //add the first and only character jus on first call
    if(IsFromIndex){
      //lengthOfRightWord++
    }
    const [leftSpaces, rightWordRowTwo] = this.splitAtIndex(target2, lengthOfRightWord);

    let index = WIDTH - lengthOfRightWord
    if(lengthOfRightWord === 0){
      return originalArr
    }

    //if(colIndex  !== index && IsFromIndex)
    //{
    //   return originalArr
    //}
    if(lengthOfRightWord == WIDTH)
    {
      return originalArr
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
      originalArr[rowIndex+1] = combined1
      let lengthOfRow2 = row2.length
      horizontalCursorPosition = 0//horizontalCursorPosition + lengthOfRow2 * 5
      verticalCursorPosition = verticalCursorPosition + 10

      //check top of two rows to replace the use dvalues with dashes)
      for(let i =  lengthOfRightWord ; i < WIDTH ; i++){
        originalArr[rowIndex][i] = "-"
      }
      //drawGrid(HEIGHT, WIDTH)
      horizontalCursorPosition = horizontalCursorPosition + lengthOfRightWord * 5
      //check for if next row is one below (not two), if not, advance two rows, as is normal
      if(originalArr[rowIndex+1][WIDTH-1] != "-" && originalArr[rowIndex+1][WIDTH-1] != undefined)
        {
          this.pushWords(false,originalArr, nextRemainder, rowIndex+1, 0) 
          return originalArr
        }
      this.pushWords(false, originalArr, nextRemainder, rowIndex+2, 0)
      return originalArr
    }
    //alert("out")
    return originalArr
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
  //this function uses createrow,  pushWords use just createrow
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


  //calls deleteACharacter so that there is only one cursor and grid used
  deleteACharacterKickStart(remainder, rowIndex, columnIndex,  originalArr, IsFirstRun){

    let array = []
    array = this.deleteACharacter(remainder, rowIndex, columnIndex,  originalArr, IsFirstRun)
    this.DisplayGridAndCursor()
    return array
  }

  

  //  4/7/24:  This is looking very good, reworked!
  //debugged : 4/11/24
  //checked:  4/16/24
  deleteACharacter(remainder, rowIndex, columnIndex,  originalArr, IsFirstRun) {
  //bails out of recursion
   if(rowIndex > HEIGHT - 1)
   {
      return originalArr
   }
   if(IsFirstRun)
   {
   
   //two rows, upper and lower
   let topRow = originalArr[rowIndex];
   let bottomRow = originalArr[rowIndex+1]
   let cursorPosition = columnIndex
   //break up line1 at the cursor position into to parts, divided by one space beyond cursor
   let [left, right] = this.splitAtIndex(topRow, cursorPosition+1) ;
   //get length of characters
   let len = left.length
   //get phrase one less than cursor on top rpw
   let [leftPhraseTopRow, notUsed] = this.splitAtIndex(left, len) ;

   //check for cursor within the leftword
    if((originalArr[rowIndex][columnIndex+2] != "-") &&  (originalArr[rowIndex][columnIndex+2] != "") && (originalArr[rowIndex][columnIndex] != "-") &&(originalArr[rowIndex][columnIndex] != "" )){
        originalArr[rowIndex][columnIndex] = "-"
       //@drawGrid(HEIGHT, WIDTH)
       horizontalCursorPosition = horizontalCursorPosition - 5
      return originalArr
    }
   
    //consider removing this
    let leftPhraseLength = leftPhraseTopRow.length
    let index = leftPhraseLength - 1
   
    //get line without the last character for top row
   let oneCharacterLessThanRow = [...leftPhraseTopRow, ...right] 

   //let [wordToKeep, wordToRid] = this.splitAtIndex(leftPhraseTopRow, index) 

   //consider removing this
   for (let i = index; i < index+1; i++)
   {
      originalArr[rowIndex][i] = "Y"
   }

   //get next lines first character 
   let [CharacterOnRow2, notUsed2] = this.splitAtIndex(line2, 1)
   //makes a line of code that is exactly one width
   let combine2 = [  ...oneCharacterLessThanRow, ...CharacterOnRow2 ]
   
   //@if(rowIndex === HEIGHT-1)
   //@{
   //@  combine2 = [  ...sixDigitLine, ["O"] ]
   //@}
   
   //recursive call
   this.deleteACharacter( [], rowIndex+1, 0,  originalArr, false)
  //@drawGrid(HEIGHT, WIDTH)
  return originalArr
  }else{
    //two rows for use
    let upperRow = originalArr[rowIndex];
    let lowerRow = originalArr[rowIndex+1]
    //left most character of second line - put at end of line 1
    let [lineTwosLeftmostCharacterForLineOne, LineTwosWordWithoutFirstLetter] = this.splitAtIndex(lowerRow, 1) ;
    //remove letter from start of first line
    let [lineOneFirstCharacterForLineTwo, lineOneWithoutFirstLetter] = this.splitAtIndex(upperROw, 1) ;
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
   
    //@drawGrid(HEIGHT, WIDTH)
    //@drawCursor(
    //@    horizontalCursorPosition + HOFFSET,
    //@    verticalCursorPosition + VOFFSET
    //@)
    //@drawGrid(HEIGHT, WIDTH)
    //recursive call
    this.deleteACharacter( [], rowIndex+1, 0,  originalArr, false)
    return originalArr 
  }  
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
   
    //drawGrid(HEIGHT, WIDTH)
    //alert("entered Pull")
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
      //drawGrid(HEIGHT, WIDTH)
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
    //drawGrid(HEIGHT, WIDTH);
    //drawCursor(
    //  horizontalCursorPosition + HOFFSET,
    //  verticalCursorPosition + VOFFSET
    //);
    this.pullTextBackToTop(false, character, originalArr, rowIndex+1, colIndex)
    return originalArr;
    }
  
  recursiveFunctionInsert(ISOnFIrstCall, rowIndex, colIndex, originalArr, leftOverChars)
  { 
    //drawGrid(HEIGHT, WIDTH)
    //bails out of recursion
    if(rowIndex > HEIGHT - 2)
    {
      return originalArr
    }
    //creates row if row is last row and there is not an empty character at end of row
    if (this.GCreateRowFlag == true && (rowIndex === HEIGHT-1)  && (originalArr[rowIndex][WIDTH-1] !== "-") )
    //if there is a character in last position and a key press in the row, than create another row
    {
      this.GCreateRowFlag = false
      this.makeExtraRowForInsert(ISOnFIrstCall, rowIndex, colIndex, originalArr,  leftOverChars)
    }
    this.GCreateRowFlag = true
    //there are two rows, top and lower
    let topRow = originalArr[rowIndex-1];
    let lowerRow = originalArr[rowIndex]
    let topRowWithAdditionalCharacter = [...topRow, ...leftOverChars]
    let lastindex =  topRowWithAdditionalCharacter.lastIndexOf("-");
    let [theRest, letter] = this.splitAtIndex(topRowWithAdditionalCharacter, lastindex + 1 )
    let combine = [...letter, ...lowerRow] 
    //splits string at the width, so will fit on one row, and rest is set to remainder.
    let [thisIsOneRowOrLessOfTopRow, leftOverRemainderCharTop] = this.splitAtIndex(combine, WIDTH);
    originalArr[rowIndex] = thisIsOneRowOrLessOfTopRow;
    let firstIndex =  thisIsOneRowOrLessOfTopRow.indexOf("-");
    this.recursiveFunctionInsert2(thisIsOneRowOrLessTop, rowIndex+1, originalArr,  leftOverRemainderCharTop)
  }

  //this is main recursion for insert text
  recursiveFunctionInsert2(thisIsOneRowOrLessTop, rowIndex, originalArr,  leftOverChars)
  {
    ///bails out
    if(rowIndex > HEIGHT - 1)
    {
      return originalArr
    }
    //two rows, upper and lower
    let upperRow = originalArr[rowIndex-1]
    let lowerRow = originalArr[rowIndex]
    let combinedLowerRow = [...leftOverChars, ...lowerRow]
    //one rows worth
    let [width, right] = this.splitAtIndex(combinedLowerRow, WIDTH)
    originalArr[rowIndex] =  width
    //@this.DisplayGridAndCursor()
    //@drawGrid(HEIGHT, WIDTH)
    //main recursive call
    this.recursiveFunctionInsert2(thisIsOneRowOrLessTop, rowIndex + 1, originalArr,  right)
  }

  //called from recursion, makes a new row 
  makeExtraRowForInsert(IsFirstCallFromIndex, rowIndex, colIndex, originalArr, leftOverChars)
  {
    alert("make extra")
    
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
        //@return originalArr;

    }

    DisplayGridAndCursor2()
    {
      if (horizontalCursorPosition >= (WIDTH-1)*5){// (WIDTH -1 )*5) {
        //*alert("here")
        horizontalCursorPosition = 0
        verticalCursorPosition = verticalCursorPosition + 10
      }else{
        horizontalCursorPosition = horizontalCursorPosition + 5
      }


    }




  initialInsert(IsFromIndex, rowIndex, colIndex, originalArr, leftOverChars)
  {
    let DashFlagSet = false
  if(rowIndex > HEIGHT - 1)
  {
     return originalArr
  }
  let targetRow = originalArr[rowIndex];
  //divide at insert index
  let [front, back] = this.splitAtIndex(targetRow, colIndex + 1);
  let lastIndex =  back.lastIndexOf("-");
  let [unused, leftWord] = this.splitAtIndex(back, lastIndex + 1);
  let combinedStringWithRemainder = [...front,  ...leftOverChars, ...back];
  //splits string at the width, so will fit on one row, and rest is set to remainder.
  let [thisIsOneRowOrLess, leftOverRemainder] = this.splitAtIndex(combinedStringWithRemainder, WIDTH);
  //checks for a character at end of row
  if(originalArr[rowIndex][WIDTH-1] === "-")
   {
     DashFlagSet = true
   }
  originalArr[rowIndex] = thisIsOneRowOrLess; 
  //checks for a single character that is left over from total string
  if(leftOverRemainder[0] != "-" && leftOverRemainder[0] != "" && HEIGHT == verticalCursorPosition/10+1 && horizontalCursorPosition/5 != WIDTH-1)
  {
    alert("in create")
    this.createRow(originalArr, leftOverRemainder, rowIndex, colIndex)
    originalArr[rowIndex+1] = leftOverRemainder
    this.fillNullWithDashOnRow(rowIndex+1, originalArr)
    drawGrid()

    
    //get left word
    let lastIndex =  thisIsOneRowOrLess.indexOf("-");
    let [wordOnLeft, wordOnRight] = this.splitAtIndex(thisIsOneRowOrLess, lastIndex);
    let lengthOfLeftWord = wordOnLeft.length
    
    //calculate remaining space for word
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

    //word does fit into top - remove all this
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
        rowTwoLeftWord[i] = "C"
      }
      originalArr[rowIndex-1] = newRowOne
      originalArr[rowIndex+1] = ["-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-", "-", "-", "-", "-", "-", "-" , "-","-", "-", "-", "-", "-", "-" , "-" ],
      originalArr[rowIndex+1] = leftOverRemainder
    }
  }

  //checks to see if all lines are moved, depends on last character or row
  if(leftOverRemainder[0] == "-" || leftOverRemainder[0] == ""){

    return originalArr
  } 
  //situates cursor and grid  
   this.setXandYPositions();

   //checks for an intial call from index
   if(IsFromIndex === true)
   {
    this.recursiveFunctionInsert(true, rowIndex+1 , colIndex, originalArr, leftOverRemainder)
   }
  else{
    this.recursiveFunctionInsert(false, rowIndex+1 , colIndex, originalArr, leftOverRemainder)
  }
  
  return originalArr
  }
  
   
  }




