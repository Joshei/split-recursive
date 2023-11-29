//For easy movement, especially useful for testing
class CursorMovementsClass {
    cursorRight() {
      //35 width times 5 to accomodate size of font's width
      if (horizontalCursorPosition >= 170) {
        //alert(horizontalCursorPosition);
        horizontalCursorPosition = 170
        return -1
      }
      drawGrid(100, 100)
      horizontalCursorPosition = horizontalCursorPosition + 5
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    cursorLeft() {
      // console.log(horizontalCursorPosition);
      if (horizontalCursorPosition <= 0) {
        horizontalCursorPosition = 0
        return -1
      }
      drawGrid(100, 100)
      horizontalCursorPosition = horizontalCursorPosition - 5
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    cursorUp() {
      if (verticalCursorPosition <= 0) {
        verticalCursorPosition = 0
        return -1
      }
      drawGrid(100, 100)
      verticalCursorPosition = verticalCursorPosition - 10
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    cursorDown() {
      if (verticalCursorPosition/10  >= HEIGHT) {
        return -2
      }
      drawGrid(100, 100)
      verticalCursorPosition = verticalCursorPosition + 10
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    
  }