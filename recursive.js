

console.log("insert [x,y]");
  

  

  
    
  

  class RecursiveClass{

  constructor(){
  
   const maxCols = 10;
   //let nestedArray1 = [
    //["a", "b", "c", "d"],
    //["e", "f", "g", "h"],
      
  //];
  let newArr = [] 
}
  
/*
testArrayOperationsOnThisArray(){
    let insertedArr1 = ["x", "y"]
    //split the original row at that index into "front" & "back" pieces
    const [frontPiece, backPiece] = splitAtIndex(insertedArr, 2);
    //make a combined array with insertedarr sandwiched in there
    const combinedArr = [...frontPiece, ...insertedArr, ...backPiece];
    console.log({combinedArr})

  }
*/

  splitAtIndex(arr, index) {
    const front = arr.slice(0, index);
    const back = arr.slice(index);
    return [front, back];
  }
  
  
  
  //remakes all of the nestedarray, of course one needs to put copy data to this array
  insertNewArr(originalArr, insertedArr, rowIndex, colIndex) {
    //nestedArray[verticalCursorPosition / 10][horizontalCursorPosition/5] = gKey
    //alert("ina");
    let targetRow = originalArr[rowIndex];
    //assuming there's a row here already
    if (targetRow) {
      //split the original row at that index into "front" & "back" pieces
      const [frontPiece, backPiece] = this.splitAtIndex(targetRow, colIndex);
      //make a combined array with insertedarr sandwiched in there
      const combinedArr = [...frontPiece, ...insertedArr, ...backPiece];
  
      if (combinedArr.length <= this.maxCols) {
        //the new array fits on one line
        //overwrite insertedArr[rowIndex] with combined array
        originalArr[rowIndex] = combinedArr;
      } else {
        //split the combinedArr to have length of maxCols
        const [trimmedLine, remainder] = this.splitAtIndex(combinedArr, this.maxCols);
  
        //the front half of that becomes originalArray[rowIndex]
        originalArr[rowIndex] = trimmedLine;
  
        //if there's anything left over, push it into position 0 of the next row
        if (remainder.length > 0) {
          originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);
        }
      }
      
    } else {
      ////if we're adding onto the end of newArray, just push the inserted arr as a new row
      if (insertedArr.length <= this.maxCols) {
        originalArr.push(insertedArr);
      } else {
        //if insertedArr is longer than max columns, we have to break it up
        const [nextLine, remainder] = this.splitAtIndex(insertedArr, this.maxCols);
        originalArr.push(nextLine);
        originalArr = this.insertNewArr(originalArr, remainder, originalArr.length, 0);
      }
    }
    return originalArr;
  }
  



  //insert into a clean duplicate bc it's nicer
    insertClean(originalArray, insertedArray, rowIndex, colIndex) {
    const newArray = originalArray.map((oldRow) => {
      return [...oldRow];
    });
    return (insertNewArr(originalArray, insertedArray, rowIndex, colIndex));
  
  }

  


}

//const testArr = insertClean("aa", "aa", 0, 5);
  

  console.log("insert [x,y]");
  //let lengthInsertedArray = 2
  //let columnsLeftonRow = MAXCOLUMNS - 2
  //if(columnsLeftonRow + lengthInsertedArray <= MAXCOLUMNS){
  //inserted arary fits on row

  
 
  

  /*
  console.log(newArr);
  console.log("insert [x,y,z]");
  const testArr = insertClean(
    nestedArray,
    ["x", "y", "z", "l", "m", "n", "o", "p", "q"],
    0,
    2
  );
  console.log(testArr);

  
  //testArrayOperationsOnThisArray()
  */


