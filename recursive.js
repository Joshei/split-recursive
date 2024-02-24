


//after insert, check entire field for words that cross boundries, if found a crossover
//move that text to start at that border and than goto top and do 



class RecursiveClass{
  constructor() {

    this.maxCols = 7;
    this.counter = 0;
    this.initialRow = 0;
    this.initialColumn = 0;
    this.mapCounter = 0
    this.testcounter = 0
    this.flag = 0
    this.flagToManyDashes = false
    this.testCounter = 0;
    
   
  }

deleteRow(arr, rowIndex){

  arr.splice(rowIndex, 1)
  return arr;

}

fillMovedWordWithDash(rowIndex , arrayToChange, startingIndexRow)
{
   
for(let i = startingIndexRow; i< WIDTH; i++){
  
  if (arrayToChange[rowIndex ][i] !== '-')
  
  {
   
    arrayToChange[rowIndex ][i] = '-'
  }
}
}



fillRowWithDashes(rowIndex, arrayToChange){
  
  for(let i = 0 ; i < WIDTH ; i++){

    arrayToChange[rowIndex][i] = "-"
  }

  return arrayToChange

}

fillNullWithDashOnRow(RowIndex ,arrayToChange)
{
  
for(let i = 0 ; i < WIDTH ; i++){
  console.log("tl: ", arrayToChange[i])
  if (arrayToChange[RowIndex][i] === undefined)
  {
    //alert("here");
    arrayToChange[RowIndex][i] = '-'
  }
}
return arrayToChange
}



  
snapshot(original) 
{

  console.log("orig: 0" , original)
  //creates a deep copy to capture array's state at that moment
  let newArray = original.map((oldRow) => {
    console.log ("map: " , this.mapCounter);
    this.mapCounter = this.mapCounter + 1
    return [...oldRow];
  });
  console.log("or: ",newArray)
  return newArray;
}



splitAtIndex(arr, index) {
  
  console.log("index: ", index)
  console.log("arr: ", arr)
  const front = arr.slice(0, index);
  const back = arr.slice(index);
  return [front, back];
  }

 
  // 0 1 2 3 4 5
  // 1 2 3 4 5
 
  insertLetterEveryRow(originalArr)
  {


    console.log("origArray1: ", originalArr);


   

    //originalArr.pop();
    //function shiftRight(){
      //originalArr.forEach(function(v){
      //  v.pop();
      //  v.unshift(null);
      //}//)


      console.log("origArray2a: ", originalArr);


    //}

    
    let tempHolderStartsAtOne = [["A"],]

    let i = 0
    let j = 0

    //i is y
    swappedOrigArray = JSON.parse(JSON.stringify(originalArr))
    for(let j = 0; j < 6; j++){
 
      for(let i = 0 ; i < 6; i++){
        swappedOrigArray[i][j] = "-"
    }
  }


    for(let j = 0; j < 6; j++){
 
  for(let i = 0 ; i < 6; i++)
 // for(let j = 0; j < 5; j++)
   {

    
      //tempHolderStartsAtOne[i][j] = originalArr[i+1][j]

      //let value1 = originalArr[j+1][i]
      //swappedOrigArray[j][i] = value1

      let value1 = originalArr[i][j+1]
      swappedOrigArray[i][j] = value1
 
    }
  
    
  
  }

  console.log("swapped: ", swappedOrigArray)

  originalArr = JSON.parse(JSON.stringify(swappedOrigArray))
  //originalArr = snappedOrigArray
  //console.log("tempholder: ", tempHolderStartsAtOne);
  //originalArr = tempHolder

  console.log("origArray2: ", originalArr);

  return originalArr;

    /////////
}

passInHere( bool, originalArr, key,  x, y)
{
  
  originalArr = Recursive.insertClean(bool, originalArr, "Z", y, x )
  
 


  return originalArr

}




adjustForWordBreakesPullFromBottom(){

  frontPart,
  remainder,
  originalArr,
  rowIndex,
  colIndex


  if (frontPart.at(-1) == "-" && remainder[0] == "-") {

    return originalArr

}
// letter on top right and lower left boundaries

// get length of word on left bottom border


//get length of word part that is on lower left boundary

//index of start from top
let firstSpaceIndexTop = frontPart[rowIndex].lastIndexOf("-")

let otherFirstSpaceTop = frontPart[rowIndex].lastIndexOf(" ")
if (firstSpaceIndex <= otherFirstSpace){
  let wordIndexOfRightEndWord = firstSpaceIndex
}
else{
  wordIndexOfRightEndWord = otherFirstSpace


}

//get index dash or space of word part that is on lower left boundary

let firstSpaceIndexLeftBottom = frontPart[rowIndex+1].indexOf("-")
let otherFirstSpaceIndexLeftBottom = frontPart[rowIndex+1].indexOf(" ")

if(firstSpaceIndexLeftBottom <= otherFirstSpaceIndexLeftBottom)
{
  let wordIndexOfLeftEndWord  = firstSpaceIndexLeftBottom
  
}
else{
  wordIndexOfLeftEndWord = otherFirstSpaceIndexLeftBottom
}


//cursor is in word, so check for a pull
if(rowIndex <= wordIndexOfLeftEndWord){
  let boolIsInBottomWord = true;
}
else (boolIsInBottomWord = false)

/////working with top again
let lengthOfTopSpace =  WIDTH - wordIndexOfRightEndWord - 1
let lengthOfBottomWord = WIDTH - wordIndexOfLeftEndWord - 1 

//insert word into top
if (lengthOfTopSpace >= lengthOfBottomWord)
{

  
  let target = originalArr[rowIndex]
  let traget1 = originalArr[rowIndex+ 1]
  let [trimmedLeftTopRight, wordPartTopRight] = this.splitAtIndex(target, wordIndexOfRightEndWord);
  let[ wordPartBottomLeft, trimmedLeftBottomLeft] = this.splitAtIndex(target1, wordIndexOfLeftEndWord)
  
  //put word into slot above on top and right side
  let combinedArrForTop = [...trimmedLeftTopRight, ...wordPartBottomLeft]

  //remove word from bottom left row
  let reducedArrForBottom = [...trimmedLeftBottomLeft]

  
  originalArr[rowIndex] = combinedArrForTop

  originalArr = this.insertNewArr(originalArr, reducedArrForBottom, rowIndex + 1,0)


}

}



  










///////////

adjustForWordBreaks_doneTopToBottom(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  colIndex
  //iteration
) {
  

  //return originalArr
  //alert("adjustforwordbreak");
  let totalWord = ""
  let iteration = 1
  //let finalRemainder = ""
  let consolePad = "  ".repeat(iteration); // console padding for more legible output
  //.at(-1) lets us access last letter in trimmedLine
  //if (false){//frontPart.at(-1) == "-" || remainder[0] == "-") {
    //if line ends *without* breaking word (front ends with space, or remainder starts with one)

      //}
      //else
       
    
    // a word has been broken
    console.log(consolePad, "a word was broken in the line break");
    //find last index of space in frontPart
    console.log(consolePad, "line to break up:");
    console.log(consolePad, frontPart);
    let lastSpaceIndex = frontPart.indexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    //split frontPart at space index
    
    
    let [wordPart, trimmedLeft] = this.splitAtIndex(frontPart, lastSpaceIndex);
    console.log(consolePad, "trimmed line split at word break:", trimmedLeft);
    console.log(consolePad, "partial word:", wordPart);
    //replace original row with the word-excluded part of the line

    
    
    let target = originalArr[rowIndex - 1]
    lastSpaceIndex = target.lastIndexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    //split frontPart at space index
    let [trimmedLeft1, wordPart1] = this.splitAtIndex(target, lastSpaceIndex + 1);

   
    

    target = originalArr[rowIndex]
    lastSpaceIndex = target.lastIndexOf("-");
    //console.log(consolePad, "space index", lastSpaceIndex);
    let frontPieceWord = originalArr[rowIndex] 
    let [trimmedLeft2, frontWordPart1] = this.splitAtIndex(frontPieceWord, lastSpaceIndex);


    totalWord = [...frontWordPart1, ...wordPart]
    //use orignal text
    const combinedArr = [...wordPart1, ...wordPart];

    //let combinedArrWidth = {}
     let [combinedArrWidth, finalRemainder] = this.splitAtIndex(combinedArr, this.maxCols);

    

    let value = rowIndex;
    
    
    

    //covers original text
    let coverArray = {}
    if(wordPart.length  + wordPart1.length > 7 )
    {
      this.flagToManyDashes = true
      console.log("1z: ", wordPart)
      console.log("2z: ", wordPart1)
      //cover wih dashes

      alert("row : ", rowIndex);


      originalArr[rowIndex] = wordPart1//"XX-----";
      

     
      originalArr = this.fillRowWithDashes(rowIndex-1, originalArr)
      
      //put wordpart here, row after 7 characters
      this.insertNewArr(originalArr, wordPart, rowIndex + 1,0)
      
      return originalArr
    }

   
   
  
  
  originalArr[rowIndex] = combinedArrWidth;
  originalArr[rowIndex-1] = trimmedLeft1 
  
originalArr = this.fillNullWithDashOnRow(rowIndex - 1 , originalArr)

  
  this.insertNewArr(originalArr, finalRemainder, rowIndex + 1,0)
   
  
    this.fillNullWithDashOnRow(rowIndex, originalArr)
    
    
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
    console.log("adjust2: ", originalArr)
    return originalArr;
  //}
}



//this is working on bottom-up
adjustForWordBreaksBottomToTop(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  colIndex){
  
    let totalWord = ""
  let iteration = 1
  //let finalRemainder = ""
  let consolePad = "  ".repeat(iteration);

    alert("found test!");
    // a word has been broken
    console.log(consolePad, "a word was broken in the line break");
    //find last index of space in frontPart
    console.log(consolePad, "line to break up:");
    console.log(consolePad, frontPart);
    let lastSpaceIndex = frontPart.lastIndexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    //split frontPart at space index
    
    if (lastSpaceIndex === -1)
    {
      lastSpaceIndex = WIDTH
    }
    let [trimmedLeft, wordPart] = this.splitAtIndex(frontPart, lastSpaceIndex + 1);
    console.log(consolePad, "trimmed line split at word break:", trimmedLeft);
    console.log(consolePad, "partial word:", wordPart);
    //replace original row with the word-excluded part of the line

    
    
    let target = originalArr[rowIndex + 1]
    lastSpaceIndex = target.indexOf("-");
    console.log(consolePad, "space index", lastSpaceIndex);
    //split frontPart at space index
    let [wordPart1, trimmedLeft1] = this.splitAtIndex(target, lastSpaceIndex );

    target = originalArr[rowIndex]
    lastSpaceIndex = target.lastIndexOf("-");
   
    let frontPieceWord = originalArr[rowIndex] 
    let [trimmedLeft2, frontWordPart1] = this.splitAtIndex(frontPieceWord, lastSpaceIndex + 1);


    totalWord = [...frontWordPart1, ...wordPart]
    
    const combinedArr = [...wordPart1, ...wordPart];

   
     let [combinedArrWidth, finalRemainder] = this.splitAtIndex(combinedArr, this.maxCols);

    

    let value = rowIndex;
    
    if(wordPart.length  + wordPart1.length > 7 )
    {
      this.flagToManyDashes = true
      console.log("1z: ", wordPart)
      console.log("2z: ", wordPart1)
      //cover wih dashes

      alert("row : ", rowIndex);


      //originalArr[rowIndex + 1] = wordPart
     
      originalArr = this.fillRowWithDashes(rowIndex+1, originalArr)
      
      //put wordpart here, row after 7 characters
      this.insertNewArr(originalArr, wordPart1, rowIndex + 2,0)
      
      
      return originalArr
    }

  
  
    originalArr[rowIndex] = trimmedLeft2;



   //originalArr = this.fillRowWithDashes(rowIndex, originalArr)
  this.insertNewArr(originalArr, wordPart, rowIndex+1,0)
  originalArr = this.fillNullWithDashOnRow(rowIndex , originalArr)
 

  
  //this.insertNewArr(originalArr, finalRemainder, rowIndex - 1,0)
   
  
    //this.fillNullWithDashOnRow(rowIndex, originalArr)
    
    
    console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log(
      consolePad,
      "array after inserting remainder with repaired word"
    );
    console.log(consolePad, this.snapshot(originalArr));
    console.log("adjust2: ", originalArr)
    return originalArr;
  }

 
  /////////


  // combined on next row, delete former/8
insertNewArr(originalArr, insertedArr, rowIndex, colIndex)
{
  

  //alert("insert: ", rowIndex);

let nextLine = ""
let remainder = ""
console.log("this should be X: ", insertedArr)
//if(insertedArr.indexOf("X") !== -1 )
const val = "X"


 //global counter can only ever contain the largest iteration number - take heed, this iteration isn't thorough
 //locally declared counter is scoped to *this* iteration of the function
  this.counter++;
  let innerCounter = this.counter; 
  let consolePad = "  ".repeat(innerCounter);
  console.log(consolePad, "-------------");
  console.log(consolePad, "ITERATION ", this.insertCleancounter);
  console.log(consolePad, "***!!!start of insertNewArr function!!!***");
  console.log(consolePad, "--( originalArr");
  console.log(consolePad, this.snapshot(originalArr));
  console.log(consolePad, "insertedArr");
  console.log(consolePad, insertedArr);
  console.log(consolePad, "row9:", rowIndex, "col", colIndex, ")--");
  let targetRow = originalArr[rowIndex];

  //ale
  
  
  //alert("worked")
  
 

  
  if (targetRow) {
    console.log("tr: ", targetRow)
    //assuming there's a row here already
    console.log(
      consolePad,
      "inserting array into an existing row of originalArr"
    );
   
    console.log("tar: ", targetRow)
    console.log("ci9: ", colIndex);
    
    console.log("insertedArray: ", insertedArr);

    if(insertedArr == "-"){

      return originalArr
    }

     //split the original row at that index into "front" & "back" pieces
    const [frontPiece, backPiece] = this.splitAtIndex(targetRow, colIndex);
    
    //combined with the inserted value which is a single valued array
    let combinedArr = [...frontPiece, ...insertedArr, ...backPiece];

    

    // a - - - - -
    console.log(consolePad, "frontPiece", frontPiece);
    console.log(consolePad, "backpiece", backPiece);
   
    console.log("ca9: ", combinedArr);
    console.log("1x:", originalArr[0][5])
    console.log("ri1: ", rowIndex)
    console.log("ir1: ", this.initialRow)
    console.log("z: ", originalArr)
    
    
    

    console.log("ca: ", combinedArr)
    console.log("cols: ", this.maxCols)
    console.log(consolePad, "combined array:");
    console.log(consolePad, combinedArr);

    //alert("z")
    //does combined array have less characters than this maxCols, //the new array fits on one line
    if (combinedArr.length <= this.maxCols) {
      
      console.log(consolePad, "new array fits on one line");
      //overwrite insertedArr[rowIndex] with combined array
      originalArr[rowIndex] = combinedArr;
      console.log("ca2: ", combinedArr)
      //console.log(consolePad, "after row insertion:", this.snapshot(originalArr));
      alert("1");


    //does not fit in the row 
    } else {


      //alert("y")
      //alert("here33");
      //new array too long to fit on one line
      console.log(consolePad, "need to split lines");
      //split the combinedArr to have length of maxCols


      //THESE ARE THE VALUES, ASSUMING THESE ARE ALL INDUCED HERE, THEY WILL BE USED CORRECTLY
      const [trimmedLine, remainder] = this.splitAtIndex(combinedArr, this.maxCols );
      console.log(consolePad, "trimmedLine4 ", trimmedLine);

      //Used to pass as the next first value
      console.log(consolePad, "remainder4 ", remainder);
      //remainder[0] = ''

      //is this: originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);  :  a over b causes b to move left once ; without:  correct
      //without:  right and than left right disappears.  with:  works, to next line 
      

      //if(originalArr[rowIndex][6] != "-" )

      if(originalArr[rowIndex][6] != "-" && remainder[0] == "-") {

        console.log("remx: ", remainder)
      //originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);
      //return originalArr
      }
      



        console.log("no word broken on trimmed line")
          
         originalArr[rowIndex] = trimmedLine;
        console.log("replace original array row with trimmed line")

         console.log(originalArr)
         //if there's anything left over, push it into position 0 of the next row
         if (remainder.length > 0) {
          //alert("w");
           console.log("trimmed line had remainder afterwards")
           console.log("origianalArr1: ", originalArr)
           console.log("remainder1: ", remainder);
           //put on next line
          
          
           if(originalArr[rowIndex][6]  != "-"){
           //originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);
           //return originalArr
           }

           


           console.log("array after inserting remainder:", originalArr);
           console.log("origianalArr2: ", originalArr)
         }
         //alert("a")
         /////////////
         //////////////////////////////////////////////////////////////////
         //BOTH BORDER CASES SUPPORTED (DIFFERENT ORDER), CALLS ADJUSRFORWORDBREAKS CORRECTLY
         //NEWEST PROBLEM, WHEN THERE IS A LETTER ON ROW ZERO COLUMN 6, IT DISAPPEARS WHEN THERE IS AN INSERT LIKE ON ROW 0 COL 3
         //THIS WAS JUST SOLVED, TRIED ONE TIME AND WORKED. THIS IS WHERE I LEFT OFF (LINE 413:  originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);)


         //////////////////////////////////////////////////////////////////
         //if  ( originalArr[rowIndex ][6] !== "-")
         {
          
          //this.insertNewArr(originalArr, insertedArr, rowIndex, colIndex)
          //return originalArr
          
          //alert("d");
            //originalArr[rowIndex+1][0] = "Z"
            console.log("12: " , originalArr)
         }


         //////////
      if(rowIndex < 1 )
      {
        rowIndex = 1
        return originalArr
      }

      if(rowIndex > 5)
      {
       
        rowIndex = 5;
        return originalArr
      }
      

     

      

      


       ////////////
         
         // ASSUMPTION:  THIS FUNCTION TAKES IN THE INPUT VALUES AND ASSUMING THEY ARE CORRECT, SHOULD OUTPUT THE NEWLY INSERTED ARRAY
         // ALSO CHECKS THAT AS ELSE SAYS, DOES NOT FIT IN THE ROW:  (does not fit in the row ) IS COMMENTED    
         //
         //  Inputs:
     
          // this is where word is broken across row
          //  trimmedLine is the line on the left that doesn't include insert array and remainder array  
          //  remainder - is the array after the inserted value 
          //  originalarr - is the entire array before the insert
          //  rowIndex - the value pertaining to the position vertical as index
          //  colIndex - the position pertaining to the horizontal value as index

          if (rowIndex+1 == 1){
            //rowIndex= 1
          }
      //alert("b")                                                                                          -1, is second afrgment
         
      //top to bottom
      if  (originalArr[rowIndex][6] !== "-" && originalArr[rowIndex +1 ][0] !== "-" ){

          originalArr = this.adjustForWordBreaksTopToBottom(
        
            trimmedLine,
            remainder,
            originalArr,
            rowIndex,
            colIndex,
          
          );

          return originalArr

         } 
         
         
         //bottom to top
          (originalArr[rowIndex ][0] !== "-" && originalArr[rowIndex - 1 ][6] !== "-"  ) {
        
         
         
            console.log("here1: ", rowIndex )

        

        

        
        originalArr = this.adjustForWordBreaksBottomToTop(
        
        trimmedLine,
        remainder,
        originalArr,
        rowIndex,
        colIndex,
      
      );
         

      }

     
      

      
        return originalArr
      
      
      }  // ...did not fit in row 



      //////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////

    } else{  // this is the end of if target row - there was a row in originalArr,
             // there was no original row at that position 


    //alert("wondering")
    
    //return originalArr
    
      //instead, adding a whole new row to the end of originalArr
    //console.log(
    //  consolePad,
    //  "adding inserted array to end of new array by creating a new line"
    //);
    




     //if we're adding onto the end of newArray, just push the inserted arr as a new row
     //the size of the row must not be more with inserted letter added
     //new row fits on one line
    
    //is no row,so just make row equal to the added array (one character) 
    //ALWAYS SO, insertedArr IS ALWAYS ONE CHARACTER, SO WOULD ALWAYS BE SO

    /*
     if (insertedArr.length <= this.maxCols) {
    //??????????????  

      console.log(consolePad, "new inserted row is within width constraints");
     //there is no row so just push on to the end of the original array
      originalArr.push(insertedArr);//???????????
      console.log(consolePad, "original array with new inserted line appended");
      console.log(consolePad, this.snapshot(originalArr));
    } else {//new row is too long to fit on one line
*/


      //THIS CAN'T HAPPEN WITH THIS PROGRAM BECUASE INSERTEDARR IS ALWAYS ON CHARACTER LENGT 
      
      /*
      //insert array is bigger than maximum amount of columne
      console.log(consolePad, "inserted array is too long, break into lines");

      //split inserted line at max col width
      [nextLine, remainder] = this.splitAtIndex(insertedArr, this.maxCols );
      console.log(consolePad, "line to add immediately:");
      console.log(consolePad, nextLine);
      console.log(
        consolePad,
        "line to process and then add to the next row after this one"
      );
      console.log(consolePad, remainder);
      //can't make the final recursive call until word adjustments have been made
      */
      
      
      
      
      
      //alert("adjust2")
      //  check to see if the word was to long, if so this will handle it - takes in these values
      //  *nextLine - is the array before the value is inserted
      //  *remainder - is the array after the inserted value 
      //  *originalarr - is the entire array before the insert
      //  -rowIndex - the value pertaining to the position vertical as index
      //  -colIndex - the position pertaining to the horizontal value as index
        
      

      /*
      originalArr = this.adjustForWordBreaks(
        
        nextLine,
        remainder,
        originalArr,
        rowIndex,
        colIndex,
       
      );
      
    return originalArr
    }
*/

    // This is the end of no row 




  //if(this.testcounter === 1){
  //originalArr[0][0] = "z"
  //}
  //this.testcounter++

  //alert("put here");
  console.log(consolePad, "**!!END OF ITERATION ", innerCounter, "!!**");
  console.log(consolePad, this.snapshot(originalArr));
  console.log(consolePad, "-------------");

  return originalArr;   //function ends here
}
}

  
//insert into a clean duplicate bc it's nicer
insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) 
{
  
  if(isFromIndex === true){
  this.initialRow = rowIndex
  //this.initialColumn = colIndex
  }

  
  let newArray2 = this.snapshot(originalArray);
  console.log("oa2: ", originalArray)
  return this.insertNewArr(newArray2, insertedArray, rowIndex, colIndex);
}





}


//testArray()
//{
//console.log({testArr});

/*
testArr = this.insertClean(
  true,
  this.nestedArray,
  ["x", "y", "z", "-", "l", "m", "n", "-", "p", "q"],
  0,
  6


}

*/
/* TEST SECTION
//console.log({testArr});
//testArr = this.insertClean(
//  this.nestedArray,
//  ["x" ],
//  0,
//  6
//);

//console.log("insert [x,y,z,'-',l,m,n,o,p] at [0][2]");
//console.log({testArr});
*/
