class CursorMovementsClass {
    cursorRight() {
      if (horizontalCursorPosition >= (WIDTH-1)*5){// (WIDTH -1 )*5) {
        //*alert("here")
        horizontalCursorPosition = 0
        verticalCursorPosition = verticalCursorPosition + 10
      }else{
        horizontalCursorPosition = horizontalCursorPosition + 5
      }
      
      drawGrid()
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    cursorLeft() {
      if (horizontalCursorPosition <= 0) {
        horizontalCursorPosition = (WIDTH-1)*5
        verticalCursorPosition = verticalCursorPosition - 10
        
      }
      else{
        horizontalCursorPosition = horizontalCursorPosition - 5
      }
      drawGrid()
      
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
      if (verticalCursorPosition  >= (HEIGHT-1)*10) {
      verticalCursorPosition = (HEIGHT-1)*10
        return -4
      }
      drawGrid()
      verticalCursorPosition = verticalCursorPosition + 10
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
  }