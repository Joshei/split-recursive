



class RecursiveClass{
  constructor() {

    this.maxCols = 7;
    this.counter = 0;
    this.initialRow = 0;
    this.initialColumn = 0;
    this.mapCounter = 0
    this.testcounter = 0
    this.flag = 0
   
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


seperateOnRightBoundry(originalArr, rowIndex, colIndex)
{
  
  this.flag++

  if(this.flag >= 2){
    //return originalArr
  }
 
  alert("seperate function")
  console.log("oa4: ",originalArr)
  console.log("ci: ", colIndex)
 
  let targetRow = originalArr[rowIndex];
  console.log("-targetRow: ", targetRow)
  console.log("-in here")
  //no backpiece   a a - - - - -
  let [notUsed, rightSide] = this.splitAtIndex(targetRow, 0);

  console.log("ni: ", notUsed)
  console.log("rs: ", rightSide)
  //console.log("frontpiece1: ", frontPiece)
  //console.log("backPiece1:", backPieceNotUsed)
  
  //    -b---AA
  
  let lastSpaceIndex = rightSide.lastIndexOf("-") ;

  lastSpaceIndex =lastSpaceIndex + 1
  if(lastSpaceIndex > 6){
  lastSpaceIndex = 6
  }

  let [notneededWord2, wordFragmentFromRowRight] = this.splitAtIndex(rightSide, lastSpaceIndex);


  

  
  ///////////////////////////  LET'S TRY INSERTING COMBINEDARRAY  INTO INSERT FUNCTION




//now get following row with left word
//  a a - - - - 
targetRow = originalArr[rowIndex+1];
let [notused, leftSide] = this.splitAtIndex(targetRow, 0);

console.log("1z: ", rowIndex)
console.log("2z: ", colIndex)


let firstSpaceIndex = leftSide.indexOf("-") ;
let [   wordFragmentFromRowLeft , wordLeftOnRow2] = this.splitAtIndex(leftSide, firstSpaceIndex);
///////////////////////

let forceDash = {}
forceDash = ["Q"]

//let length = wordFragmentFromRowLeft.length +  wordFragmentFromRowRight;

//if (length > WIDTH - )



//if lrngth of w3 makes 3 arrays bigger than width do not include wordleftonrow2

let letters = wordFragmentFromRowLeft.length + wordFragmentFromRowRight.length

let leftover = wordLeftOnRow2.length

let combinedFullWord = ""
let newArray = {}

/*
console.log("letters: ", letters)
console.log("leftover: ", leftover)
console.log("wordleft: ", wordLeftOnRow2);


let counterOfDashes = 0;


console.log("counter: ", counterOfDashes)

counterOfDashes = 3;//counterOfDashes;
console.log("counterdashes: ", counterOfDashes)

let newArray = {}
for(let i = 0; i < WIDTH ; i++)
{
  //newArray[i] = "-"
}

// a a a
newArray = wordFragmentFromRowLeft.slice(-3)
console.log("na11: ", newArray[5])

for(let i = 0; i < WIDTH ; i++){

  console.log("newArray: ", newArray[i])
   if (newArray[i] === undefined)
   {
    newArray[i] = "-"
     }
}
console.log("isit: ", newArray)

for(let i = 0; i < WIDTH ;i++)
{
originalArr[rowIndex][i] = "-"

}
alert("here again?");

console.log("1q: ", rowIndex)
console.log("2q: ", colIndex)

//newArray[6] = "Z"
*/

console.log("mewarrayt: ", newArray);

//combinedFullWord = [...wordFragmentFromRowRight, ...wordFragmentFromRowLeft , ...newArray]
combinedFullWord = [...wordFragmentFromRowRight, ...wordFragmentFromRowLeft]

console.log("wl: ", wordFragmentFromRowLeft)
console.log("w2: ", wordFragmentFromRowRight)
console.log("w3: ", wordLeftOnRow2)
console.log("w4: ", combinedFullWord)



////////////change this to width - 1 

let [trimmedLeft, remainder] =  this.splitAtIndex(combinedFullWord, combinedFullWord.length );
for(let i = 0; i< WIDTH ; i++){
  
  originalArr[rowIndex][i] = "-"
  
  //temporary set for inserts over another row (At most two, obviously)
  originalArr[rowIndex-1][i] = "-"
}

console.log("trimmed: ", trimmedLeft)
originalArr[rowIndex + 1] = trimmedLeft


//trimmedLeft = [[  "q", "w", "+", "+", "+", "+", "+", "a"],]
//remainder = [["1", "1","1","1","1" ],]
//originalArr.splice(3,0, combinedFullWord)
//console.log("splice: ", originalArr)



///////////////////


//try inserting trimmedleft



///////////////////

console.log("trimmed: ", trimmedLeft)
console.log("reminader: ", remainder)
//trimmedLeft[5] = "Z" 

let lengthOfTrim = trimmedLeft.length
/*
for(let i = lengthOfTrim; i< WIDTH ; i++){
  
  //originalArr[rowIndex][i] = "Z"
  originalArr[rowIndex][i] = "A"
}
*/
for(let i = lengthOfTrim; i< WIDTH ; i++){
  
  //originalArr[rowIndex][i] = "Z"
  originalArr[rowIndex+1][i] = "B"
}



//originalArr = this.insertClean(false, originalArr, trimmedLeft, rowIndex + 1, 0);

//console.log(consolePad, "!! Return to iteration", iteration, "!!");
//console.log(consolePad,  "array after inserting remainder with repaired word");

/*
console.log(this.snapshot(originalArr));
console.log("ina: ", originalArr)
*/


/*
let amtOfDashes = wordFragmentFromRowRight.length


let firstPosition = (firstPosition * WIDTH  - 1) - amtOfDashes 

for (let i = firstPosition; i < firstPosition + amtOfDashes; i ++)
{

}
  //////
*/
  return originalArr
  
 

}

  





  
adjustForWordBreaks(
  frontPart,
  remainder,
  originalArr,
  rowIndex,
  colIndex
  //iteration
) {

  //if(remainder == "-")
  {
    alert("got remainder to here")
    console.log("1frontPart: ", frontPart)
    console.log("1remainder: ", remainder)
    console.log("1originalArr: ", originalArr)
    console.log("1rowindex: ", rowIndex)
    console.log("1colIndex ", colIndex)

    //originalArr.push(frontPart)

  }

  if(rowIndex > 6)
  {

    rowIndex = 6
    //return
  }

// console.log("rowindex: ", rowIndex)
//
//  if(originalArr[rowIndex+1][0] === "-")
//  {
//    return(originalArr)
//  }

  //originalArr[rowIndex] = frontPart;

  alert("is here");
  console.log("sorb: ", originalArr)
  originalArr = this.seperateOnRightBoundry(originalArr, rowIndex, colIndex)
  console.log("sorb: ", originalArr)
  
 //console.log("originalArr3: ", originalArr)

 ///if(originalArr[0][0] === "-" && originalArr[1][6] === "-"){

  //alert("well")

 //}

 console.log("originalArr2: ", originalArr)

  
  return(originalArr)

  console.log("frontPart1: ", frontPart)
  console.log("remainder1: ", remainder)
  
  let iteration = 9
  let consolePad = "  ".repeat(iteration); // console padding for more legible output
  //.at(-1) lets us access last letter in trimmedLine
  if (frontPart.at(-1) == "-" || remainder[0] == "-") {
    //if line ends *without* breaking word (front ends with space, or remainder starts with one)
    //alert("3")
    console.log(consolePad, "no word broken on trimmed line");
    //the front half of that becomes originalArray[rowIndex]
    originalArr[rowIndex] = frontPart;
    console.log("frontPart: ", frontPart)
    console.log("remainder: ", remainder)
    console.log(consolePad, "replace original array row with trimmed line");
    
    //originalArr[rowIndex] = frontPart
    //originalArr[rowIndex+1] = remainder
    console.log(consolePad, this.snapshot(originalArr));
    //if there's anything left over, push it into position 0 of the next row
    if (remainder.length > 0) {
      console.log(consolePad, "trimmed line had remainder afterwards");
      console.log(consolePad, remainder);
      console.log(
        consolePad,
        "!! Recursive call from level ",
        iteration,
        " to level",
        iteration + 1,
        " !!"
      );


      //insertClean(isFromIndex, originalArray, insertedArray, rowIndex, colIndex) 
        
      let trythisinsertedArray ="X"
      console.log("1!: ", originalArr)
      console.log("2!: ",remainder)
      console.log("3!:", rowIndex)
      //make the recursive call to add the remainder to the next line
      originalArr = this.insertClean(false,originalArr, remainder, rowIndex + 1, 0);
      console.log(consolePad, "!! Return to iteration", iteration, "!!");
      console.log(consolePad, "array after inserting remainder:");
      //console.log(consolePad, this.snapshot(originalArr));
      //console.log("What about this?: ", originalArr)
      return originalArr;
    }

  }else{       //above is breaking word
   
    alert("not created yet")
    //originalArr = this.insertClean(false, originalArr, remainder, rowIndex + 1, 0);
    //console.log(consolePad, "!! Return to iteration", iteration, "!!");
    console.log("array after inserting remainder with repaired word");
    console.log(this.snapshot(originalArr));
    

    originalArr = this.seperateOnRightBoundry(originalArr, rowIndex, colIndex)

    
    return originalArr;
  }

}     //this is the addjustforwordbreaks

  /////////

insertNewArr(originalArr, insertedArr, rowIndex, colIndex)
{

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
    
    
    
//    if(originalArr[6][rowIndex] !== "-"){
//
//      alert("well2");
//      return originalArr
//    }
    //if this is not from inital key press, than check for a dash (change to nulll value ) on the value of last column 
    if(  rowIndex != this.initialRow && originalArr[6][this.initialRow] === "-"){

     //does not do an insert because it is on first row, therefore is just displaye one space to right
     
     
    }
    else
    {
      //there isn't a null character on most right position so inserts on the next line
      combinedArr = [...frontPiece, ...insertedArr, ...backPiece];
      

    }
    console.log("ca: ", combinedArr)
    console.log("cols: ", this.maxCols)
    console.log(consolePad, "combined array:");
    console.log(consolePad, combinedArr);

    //alert("z")
    //does combined array have less characters than this maxCols, //the new array fits on one line
    if (combinedArr.length < this.maxCols) {
      
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

      if(originalArr[rowIndex][6] != "-" && remainder != "-") {
      originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);
      }
      

    

      if(remainder == '-')
      {
        //remainder[0] = "9"
      }
     
      // row    column
      //console.log("**1: ", originalArr[0][0])
      //console.log("**2: ",originalArr[1][6])
      //console.log("**3: ", originalArr[rowIndex][0])
      //console.log("**4: ", originalArr[rowIndex][6])




      console.log("3: ", rowIndex)   // 2
      //console.log("4: ", rowIndex+1)  //3
      //console.log("5: ", this.initialRow)
      //console.log("6: ", this.initialRow+1)
      //if line ends *without* breaking word .at -1 lets us access last letter in trimmedLine
      //if(trimmedLine.at(-1) == '-' || remainder[0]=='-' ){
      
      //if(this.initialRow < 4)
      //{
      //  this.initialRow = 4
      //}
      
      
      
      
      
      


      //if(remainder !=  "-")
      //{

        ////////


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
           originalArr = this.insertNewArr(originalArr, remainder, rowIndex + 1, 0);
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
         if  ( originalArr[rowIndex ][6] !== "-")
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
      //alert("b")                                                                                          -1, is second afrgment
         if  ((originalArr[rowIndex][6] !== "-" && originalArr[rowIndex +1 ][0] !== "-" )  || (originalArr[rowIndex ][0] !== "-" && originalArr[rowIndex - 1 ][6] !== "-" )){
        
         console.log("here1: ", originalArr[rowIndex ][6])

        alert("call sep");

        
        originalArr = this.adjustForWordBreaks(
        
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

  
  let newArray = this.snapshot(originalArray);
  console.log("oa2: ", originalArray)
  return this.insertNewArr(newArray, insertedArray, rowIndex, colIndex);
}



fillNullWithDash(arrayToChange)
{
  
for(let i = 0; i<WIDTH-1 ; i++){
  console.log("tl: ", arrayToChange[i])
  if (arrayToChange[i] === undefined)
  {
    //alert("here");
    arrayToChange[i] = '-'
  }
}
}


}

/* TEST SECTION */
//console.log({testArr});
//testArr = this.insertClean(
//  this.nestedArray,
//  ["x" ],
//  0,
//  6
//);

//console.log("insert [x,y,z,'-',l,m,n,o,p] at [0][2]");
//console.log({testArr});

