class CursorMovementsClass {
    cursorRight() {
      if (horizontalCursorPosition >= 170) {
        //@alert("here")
        horizontalCursorPosition = 170
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
      if (verticalCursorPosition/10  >= HEIGHT - 1) {
      verticalCursorPosition = 60
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