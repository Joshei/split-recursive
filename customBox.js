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
      //const timer = setTimeout(printCharacter, 1)
      //const timer2 = setTimeout(this.delay, 1)
      //printCharacter()   
    }
    
    }

      
    

 
  }

 

