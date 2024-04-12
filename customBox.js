class CustomBoxClass {
    constructor() {
      //@this.heightValue = 0
      //@this.gInsert = false;
    }
    controlInput() {
    console.log("gkey2",gKey);
    if (gKey == 'Shift' || gKey == 'Control' || gKey == 'Tab' || gKey == 'Escape' || gKey == 'Backspace'){
      return;
    }
    
    //@if (gKey ==  'Insert') {
    //@  gInsert = !gInsert
    //@  if (gInsert) {
    //@    insertOn.innerHTML = 'Insert On'
    //@  } else {
    //@    insertOn.innerHTML = 'Insert Off'
    //@  }
    //@  return;
    //@}
    
    
    if (gKey == 'Delete') {
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
    } else {
      printCharacter()   
    }
      
    xAndY.innerHTML =
        'X: ' +
        (horizontalCursorPosition/5) +
        '  &nbsp&nbsp&nbsp   Y: ' +
      (verticalCursorPosition/10 )
      return
    }
}
