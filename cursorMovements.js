//For easy movement, especially useful for testing
class CursorMovementsClass {
    cursorRight() {
      //35 width times 5 to accomodate size of font's width
      if (horizontalCursorPosition >= 170) {
        alert("here")
        //alert(horizontalCursorPosition);
        horizontalCursorPosition = 170
        return -1
      }

      horizontalCursorPosition = horizontalCursorPosition + 5
     


      /*
      //MAKE THIS A FUNCTION CALL HERE.  ALSO PUT IN CUSTOMBOX INFRONT OF PRINT CHARACTER
      //horizontalCursorPosition = horizontalCursorPosition + 5
      if (horizontalCursorPosition/5 < (WIDTH )) {
        horizontalCursorPosition = horizontalCursorPosition + 5
      }else{
        
        horizontalCursorPosition = 0;
        verticalCursorPosition = verticalCursorPosition + 10
        //alert("here1");
      }
      */

      drawGrid()
      
      
      
      
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    cursorLeft() {
      // console.log(horizontalCursorPosition);
      if (horizontalCursorPosition <= 0) {
        horizontalCursorPosition = 0
        return -2
      }
      drawGrid()
      horizontalCursorPosition = horizontalCursorPosition - 5
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    cursorUp() {
     
      if (verticalCursorPosition <= 0) {
        verticalCursorPosition = 0
        return -3
      }
      drawGrid()
      verticalCursorPosition = verticalCursorPosition - 10
      
     
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    cursorDown() {
      if (verticalCursorPosition/10  >= HEIGHT - 1) {
      verticalCursorPosition = 60
        return -4
      }
      drawGrid()
      //horizontalCursorPosition = 0
      verticalCursorPosition = verticalCursorPosition + 10
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    
  }