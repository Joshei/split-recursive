//This is for later practice, first row returnd and subsequent rows push right

pressedEnter(//
    grid,
    rowIndex,
    colIndex,
    remainder,
    IsFirstTime
    ) {

      
      let topRow = []
      let thirdRow = []
    //if no remainder set it to null
    if (Object.keys(remainder).length === 0) {
      remainder = "";
    }

    

    if (true){
    //assign current row to be top row
    topRow = grid[rowIndex];   // 2 ... 1 ///
    //row after toprow
    this.bottomRowFromLastRound = this.bottomRow
    this.bottomRow = grid[rowIndex + 1];
   
    
    thirdRow = grid[rowIndex + 2]
    }else{
      topRow = grid[rowIndex+1];
      this.bottomRowFromLastRound = this.bottomRow
      this.bottomRow = grid[rowIndex + 2];
      drawGrid(HEIGHT, WIDTH)
   

    }
    //colindex is where cursor split the phrase into two halves
    let amtCharactersToPassToNextRow = WIDTH - colIndex;
    let [left, RightSideOfCursor] = this.splitAtIndex(
      topRow,
      colIndex
    );

    if (rowIndex >= 15)
    {
      //return(grid)
    }
    let [left1, rightSideOfCursorforBottomRow] = this.splitAtIndex(
      this.bottomRow,
      colIndex
    );

    drawGrid(HEIGHT, WIDTH)

    
    //set here for scope
    let secondRowDone = []
    let thirdRowLongRemainder = []
    
    //get right side of cursor of nextline

    //remainder is leftover from string when a widths worth of data is gotten//
    //let combine = [...remainder, ...RightSideOfCursor, ...bottomRow];
    
    
    //on initial call 
    if (IsFirstTime === true) {

      //remainder is leftover from string when a widths worth of data is gotten//
    let combine = [...remainder, ...RightSideOfCursor, ...this.bottomRow];


      //combine left hand side of top at cursor and the bottom with remainder from last call
      //let secondRowNearlyDone = [...RightSideOfCursor, ...bottomRow];
      //cuts it to the size of one row
      [secondRowDone, thirdRowLongRemainder] = this.splitAtIndex(combine,WIDTH);


      //assign row with characters 
      grid[rowIndex + 1] = secondRowDone;
      
      drawGrid(HEIGHT, WIDTH)
    } else 
    
    
    {
      //thirdRow = this.bottomRow
      grid[rowIndex + 2] = this.bottomRow;
   
    }
    //on initial call, cover with null on right side, because it is carried to next line
    if (IsFirstTime) {
      for (let i = WIDTH - amtCharactersToPassToNextRow; i < WIDTH; i++) {
        grid[rowIndex][i] = "-";
      }     
    } 

    
    
    drawGrid(HEIGHT, WIDTH)



    //no longer first time, done using value
    IsFirstTime = false
    //index is HEIGHT - 1, and is next value
    //is on last row with an enter, so create a new line
    if (rowIndex >= 13) {
      
    
      

      
      this.createRow(grid, rowIndex+1)
      //fill in nulls after displaying text moved there from above
      let amountOfNullsForNewBottomRow = colIndex
      grid[rowIndex+2] = thirdRowLongRemainder
      for(let i = colIndex; i < WIDTH ; i++ )
      {
        grid[rowIndex+2][i] = "O"
      }
     drawGrid(HEIGHT, WIDTH)
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
      thirdRowLongRemainder,
      false
    );

    drawGrid(HEIGHT , WIDTH)
    return grid;
  }