class CursorMovementsClass {
    cursorRight() {
      if (horizontalCursorPosition >= (WIDTH -1 )*5) {
        //*alert("here")
        horizontalCursorPosition = (WIDTH -1 )*5
        return -1
      }
      horizontalCursorPosition = horizontalCursorPosition + 5
      drawGrid()
      drawCursor(
        horizontalCursorPosition + HOFFSET,
        verticalCursorPosition + VOFFSET
      )
    }
    cursorLeft() {
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