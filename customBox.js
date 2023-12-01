



 
    
// Controls key presses.
class CustomBoxClass {
    constructor() {
     
      //CursorMovements.drawCursor(25, 25)
      this.gInsert = false;
    }
    controlInput() {
    //alert("3");
    console.log("gkey2",gKey);
    if (gKey == 'Shift' || gKey == 'Control' || gKey == 'Tab' || gKey == 'Escape' || gKey == 'Backspace'){
      return;
    }
    if (gKey ==  'Insert') {
      gInsert = !gInsert
      if (gInsert) {
        insertOn.innerHTML = 'Insert On'
      } else {
        insertOn.innerHTML = 'Insert Off'
      }
      return;
    }
    if (gKey == 'Delete') {
    //  deleteIt();
    }
      else if (gKey == 'ArrowLeft') {
        CursorMovements.cursorLeft()
      } else if (gKey == 'ArrowRight') {
        CursorMovements.cursorRight()
      } else if (gKey == 'ArrowUp') {
        CursorMovements.cursorUp()
      } else if (gKey == 'ArrowDown') {
        CursorMovements.cursorDown()
      } else if (gKey == 'Enter') {
        //alert("1");
        //Return.Return()
      } else {
      
        //Prints a single character.  Arrow keys can move you arround.  Enter is not inserted yet.
        //in index1.html
        printCharacter()
        //
        //from  recursive.js 
        //Insert.InsertNewArr(nestedArray, "Z", 1, 1 )
        //testing this area
        alert("I am here:");
      
    }
      //displays x and y for testing
      xAndY.innerHTML =
        'X: ' +
        (horizontalCursorPosition/5) +
        '  &nbsp&nbsp&nbsp   Y: ' +
      (verticalCursorPosition/10 )

      return
    }
}
