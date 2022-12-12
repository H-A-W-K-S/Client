import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { Alert } from "react-native";

const GameScreen = ({ navigation }) => {
  let documentHTML = `
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0">
  <style>
  .box {
    position: absolute;
    background-color:blue;
    border-color:transparent;
    height: 10.625vmin;
    width: 10.625vmin;
    border-radius: 2.2vmin;
  }

  .winBox {
    position: absolute;
    background-color:#B1DE8C88;
    border-color:transparent;
    height: 96vmin;
    width: 96vmin;
    border-radius: 3vmin;
    top: calc((100vmax - 100vmin)/2);
    left: 2vmin;
  }

  .loseBox {
    position: absolute;
    background-color:#EF8B8288;
    border-color:transparent;
    height: 96vmin;
    width: 96vmin;
    border-radius: 3vmin;
    top: calc((100vmax - 100vmin)/2);
    left: 2vmin;
  }

  .refreshButton {
    position: absolute;
    background-color:#B1DE8C;
    border-color:transparent;
    height: 10.625vmin;
    width: 10.625vmin;
    border-radius: 2.2vmin;
    bottom: calc(((100vmax - 100vmin)/2.5));
    right: 4vmin;
  }
  .refreshIcon {
    position: absolute;
    width: 7vmin;
    bottom: calc(((100vmax - 100vmin)/2.5) + 1.8125vmin);
    right: 5.8125vmin;
  }

  .mergeButton {
    position: absolute;
    background-color:#00ff0000;
    height: 10.625vmin;
    width: 10.625vmin;
    cursor:pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .gameBackground {
    position: absolute;
    background-color:#ededed;
    border-color:transparent;
    height: 96vmin;
    width: 96vmin;
    border-radius: 3vmin;
    top: calc((100vmax - 100vmin)/2);
    left: 2vmin;
  }

  .scoreText {
    position:absolute;
    top: calc(((100vmax - 100vmin)/2.5));
    left: 2vmin;
    font-size: 7vmin;
    font-family: 'monospace';
    font-weight: 700;
    color:4f4f4f;
  }

  .l2square {
    position: absolute;
    background-color:#00000000;
    height: 22.25vmin;
    width: 22.25vmin;
    border-radius: 2.2vmin;
  }

  .l3square {
    position: absolute;
    background-color:#0000aa44;
    height: 45.5vmin;
    width: 45.5vmin;
    border-radius: 2.2vmin;
  }

  </style>
  <html>
  <div class=scoreText id="scoreDisplay">64</div>
  <div class=gameBackground></div>
  </html>
  <script>
// start colorpopulate

colors = ['r','g','b','o']
mainColor = colors[Math.floor(Math.random() * 4)];
//console.log(mainColor)


oldTiles = [];
let smallGrid = [['0','0','0','0','0','0','0','0'], 
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0'],]

let grid = [['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H'], 
        ['H','G','G','G','G','G','G','G','G','G','G','G','G','G','G','H'],
        ['H','G','F','F','F','F','F','F','F','F','F','F','F','F','G','H'],
        ['H','G','F','E','E','E','E','E','E','E','E','E','E','F','G','H'], 
        ['H','G','F','E','D','D','D','D','D','D','D','D','E','F','G','H'],
        ['H','G','F','E','D','C','C','C','C','C','C','D','E','F','G','H'],
        ['H','G','F','E','D','C','B','B','B','B','C','D','E','F','G','H'], 
        ['H','G','F','E','D','C','B','A','A','B','C','D','E','F','G','H'],
        ['H','G','F','E','D','C','B','A','A','B','C','D','E','F','G','H'],
        ['H','G','F','E','D','C','B','B','B','B','C','D','E','F','G','H'], 
        ['H','G','F','E','D','C','C','C','C','C','C','D','E','F','G','H'],
        ['H','G','F','E','D','D','D','D','D','D','D','D','E','F','G','H'],
        ['H','G','F','E','E','E','E','E','E','E','E','E','E','F','G','H'],
        ['H','G','F','F','F','F','F','F','F','F','F','F','F','F','G','H'], 
        ['H','G','G','G','G','G','G','G','G','G','G','G','G','G','G','H'],
        ['H','H','H','H','H','H','H','H','H','H','H','H','H','H','H','H']]

let leftX = Math.floor(Math.random() * 7); let leftY = Math.floor(Math.random() * 7)

for(let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){
        oldTiles.push([x+leftX,y+leftY])
    }
};

function contains(listOfLists, list){
    for (let i = 0; i < listOfLists.length; i++) {
        if (listOfLists[i][0] == list[0] && listOfLists[i][1] == list[1]){
            return true;
        }
    }
}
function del(list, item){
    for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
            list.splice(i, 1)
            i --;
        } 
    }
    return list

}

//console.log(typeof(oldTiles[0][0]))
 //colors the grid with the tuples from tiles
function colorgrid(tiles){ 
    for (let i = 0; i < tiles.length; i++){
        if (tiles[i].length == 2){
            let x1 = tiles[i][0]; let y1 = tiles[i][1]
            let x2 = x1 - leftX; let y2 = y1 - leftY; let y2copy = y1 - leftY

            let a = 7-y2copy; y2 = x2; x2 = a
            smallGrid[x2][y2] = grid[x1][y1].toLowerCase()
        }
    }
    return smallGrid;
} 

smallGrid = colorgrid(oldTiles)

let tiles = []
let lC=[[],[],[],[],[],[],[],[]] //lC = letterCoordinates

for (let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){
        tiles.push([y, 7-x,smallGrid[x][y]])
    }
};

letters = ['a','b','c','d','e','f','g','h']
for (let i = 0; i < tiles.length; i++){
    let ind = letters.indexOf(tiles[i][2])
    lC[ind].push(tiles[i])
};



function DetermineLetterRowsAndColumns(coordinates, row = true){
    let Vals = []; 
    for (let i = 0; i < coordinates.length; i++){
        let repeatsy = []; let repeatsx = []
        let yVals1 = []; let yVals2 = []
        let xVals1 = []; let xVals2 = []

        for (let j = 0; j < coordinates[i].length; j++) {
            yVals1.push(coordinates[i][j][1]);
            xVals1.push(coordinates[i][j][0]);
        }
        
        for (let i = 0; i < 8; i++){
            if (yVals1.filter(x => x == i).length > 1){
                if (!(i in repeatsy)) {
                    repeatsy.push(i)
                }
            }
            if (xVals1.filter(x => x == i).length > 1){
                if (!(i in repeatsy)) {
                    repeatsx.push(i)
                }
            }

        }
        for (let i = 0; i < yVals1.length; i++){
            for (let j = 0; j < yVals1.length; j++) {
                if (i != j) {
                    if (yVals1[i] == yVals1[j]){
                        if (xVals1[i] == xVals1[j] + 1 || xVals1[i] == xVals1[j] - 1) {
                            if (!(yVals2.includes(yVals1[i]))) {
                                yVals2.push(yVals1[i])
                            }
                        }
                    }
                }
            }
        }
        for (let i = 0; i < xVals1.length; i++){
            for (let j = 0; j < xVals1.length; j++) {
                if (i != j) {
                    if (xVals1[i] == xVals1[j]){
                        if (yVals1[i] == yVals1[j] + 1 || yVals1[i] == yVals1[j] - 1) {
                            if (!(xVals2.includes(xVals1[i]))) {
                                xVals2.push(xVals1[i])
                            }
                        }
                    }
                }
            }
        }
        if (row == false){
            Vals.push(xVals2)
        }
        if (row == true){
            Vals.push(yVals2)
        }
    } 
    return Vals
    
};

function ParseRowsAndColumns(coordinates){ 
    //xVals are x values where there are columns. yVals are y values where there are rows.
    let yVals = DetermineLetterRowsAndColumns(coordinates,true) //lC = letters coordinates
    let xVals = DetermineLetterRowsAndColumns(coordinates,false) //lC = letters coordinates
    let toColor = []
    for (let i = 0; i < 8; i++){ //go through all letters, a through h.
        let leftColumn = []; let rightColumn=[]; let columns = []
        let bottomRow = []; let topRow = []; let rows = []

        for (let j = 0; j < coordinates[i].length; j++) { //go through all pairs
            if (xVals[i].includes(coordinates[i][j][0])) { //coordinates are triples holding x,y,color
                columns.push(coordinates[i][j]) //if a triple includes an x column value, add it to columns
            }
        }
        for (let j = 0; j < coordinates[i].length; j++) { //go through all pairs
            if (yVals[i].includes(coordinates[i][j][1])) { //coordinates are triples holding x,y,color
                rows.push(coordinates[i][j]) //if a triple includes an x row value, add it to rows
            }
        }

        if (columns.length > 1) { //split columns into left and right columns
            let object = columns[0][0]; //reorder the triples
            for (let i = 0; i < columns.length; i++) {
                if (columns[i][0] == object) {
                    leftColumn.push(columns[i]);
                } else {
                    rightColumn.push(columns[i]);
                }
            }
        } else {
            let leftColumn = columns
        }

        if (rows.length > 1) { //split rows into top and bottom rows
            let object2 = rows[0][1]; //reorder the triples
            for (let i = 0; i < rows.length; i++) {
                if (rows[i][1] == object2) {
                    topRow.push(rows[i]);
                } else {
                    bottomRow.push(rows[i])
                }
            }
        } else {
            let topRow = rows
        }
    

        let t = 0; let b = 0; let l = 0; let r = 0
        if (topRow.length > 0) {
            t = topRow[Math.floor(Math.random() * topRow.length)] //top
        }
        if (bottomRow.length > 0) {
            b = bottomRow[Math.floor(Math.random() * bottomRow.length)] //bottom
        }

        if (leftColumn.length > 0) {
            if (leftColumn.includes(b)) { //dont select the same square for a row and a column
                del(leftColumn, b);
            }
            if (leftColumn.includes(t)) {
                del(leftColumn, t)
            }
            if (leftColumn.length > 0) {
                l = leftColumn[Math.floor(Math.random() * leftColumn.length)]
            }
        }
        if (rightColumn.length > 0) {
            if (rightColumn.includes(b)) { //dont select the same square for a row and a column
                del(rightColumn, b);
            }
            if (rightColumn.includes(t)) {
                del(rightColumn, t)
            }
            if (rightColumn.length > 0) {
                r = rightColumn[Math.floor(Math.random() * rightColumn.length)]
            }
        }
        if (t != 0){
            toColor.push(t);
        }
        if (b != 0){
            toColor.push(b);
        }
        if (l != 0){
            toColor.push(l);
        }
        if (r != 0){
            toColor.push(r);
        }
    }     
    return toColor
}

toBeColored = ParseRowsAndColumns(lC)
for (let i = 0; i < toBeColored.length; i++){
    toBeColored[i] = toBeColored[i].slice(0,2) //just keep coordinates
} 

let finalTiles = [];
for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
        if (contains(toBeColored, [x,y])) {
            finalTiles.push([x,y,mainColor])
        } else {
            finalTiles.push([x,y,colors[Math.floor(Math.random() * 4)]]) 
        }
    }
}


function finishGrid(tiles) {
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i].length > 2) {
            let x = tiles[i][0]; let y = tiles[i][1]; let copyy = tiles[i][1]
            let a = 7 - copyy; y = x; x = a //MAY NEED TO BE CHANGED TO COPYY
            smallGrid[x][y] = tiles[i][2]
        }
    }

}          
finishGrid(finalTiles)
// console.log(mainColor) //UNCOMMENT TO CREATE GRID
// for (let i = 0; i < smallGrid.length; i++) {
//     console.log(smallGrid[i]);
// } 
function getGrid(){
    return smallGrid
}


// end colorpopulate

  //window.ReactNativeWebView.postMessage('Data from WebView / Website');


// let cells = [ // code results generated by caleb's python program
// ['g', 'b', 'o', 'b', 'b', 'b', 'o', 'g'],
// ['o', 'b', 'o', 'b', 'b', 'g', 'r', 'b'],
// ['b', 'o', 'b', 'g', 'b', 'b', 'b', 'b'],
// ['b', 'b', 'b', 'o', 'b', 'o', 'b', 'b'],
// ['g', 'b', 'g', 'g', 'o', 'b', 'b', 'b'],
// ['r', 'b', 'b', 'g', 'b', 'b', 'o', 'g'],
// ['b', 'b', 'g', 'b', 'b', 'b', 'b', 'b'],
// ['o', 'b', 'g', 'o', 'b', 'o', 'o', 'o']
// ];

let cells = getGrid(); 
// alert(cells);
// alert(mainColor);

// let cells = [
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ];

let previousCells = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];



// //randomly fill cells
// for (let rx = 0; rx < 8; rx++){
//   for (let ry = 0; ry < 8; ry++){
//       cells[rx][ry] = randomColor();
//   }
// }


let scoreDisplay = document.getElementById("scoreDisplay");
let merges = 64;
//7x7 grid of l2squares (extra row/column added for edge case redundancy)
let l2squares = [
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false]
];

// create l2squares that already exist

for (let rx = 0; rx < 7; rx++){
  for (let ry = 0; ry < 7; ry++){
      if(cells[rx][ry] == "r" &&
         cells[rx][ry+1] == "r" &&
         cells[rx+1][ry+1] == "r" &&
         cells[rx+1][ry] == "r"
        ){
          l2squares[rx][ry] == true;
        }

        if(cells[rx][ry] == "g" &&
         cells[rx][ry+1] == "g" &&
         cells[rx+1][ry+1] == "g" &&
         cells[rx+1][ry] == "g"
        ){
          l2squares[rx][ry] == true;
        }

        if(cells[rx][ry] == "b" &&
         cells[rx][ry+1] == "b" &&
         cells[rx+1][ry+1] == "b" &&
         cells[rx+1][ry] == "b"
        ){
          l2squares[rx][ry] == true;
        }

        if(cells[rx][ry] == "o" &&
         cells[rx][ry+1] == "o" &&
         cells[rx+1][ry+1] == "o" &&
         cells[rx+1][ry] == "o"
        ){
          l2squares[rx][ry] == true;
        }
  }
}


let previousl2Squares = l2squares;

//5x5 grid of l3 squares
let l3squares = [
  [false, false, false, false, false],
  [false, false, false, false, false],
  [false, false, false, false, false], 
  [false, false, false, false, false],
  [false, false, false, false, false]
];

  // draw boxes
  for(let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){
      document.write("<div class=box id='cell" + x + "_" + y + "' style='left:" + (4+((x*11.625))) + "vmin; top: calc(((100vmax - 100vmin)/2) + " + (2+((y*11.625))) + "vmin);'></div>");
    }
  }

  // draw l2squares
  for(let x = 0; x < 7; x++){
      for(let y = 0; y < 7; y++){
        document.write("<div class=l2square id='l2square" + x + "_" + y + "' style='left:" + (4+((x*11.625))) + "vmin; top: calc(((100vmax - 100vmin)/2) + " + (2+((y*11.625))) + "vmin);'></div>");
      }
    }

  // draw l3squares
  for(let x = 0; x < 5; x++){
    for(let y = 0; y < 5; y++){
      document.write("<div class=l3square id='l3square" + x + "_" + y + "' style='left:" + (4+((x*11.625))) + "vmin; top: calc(((100vmax - 100vmin)/2) + " + (2+((y*11.625))) + "vmin);'></div>");
    }
  }

  // draw buttons
  for(let bx = 0; bx < 7; bx++){
    for(let by = 0; by < 7; by++){
      document.write("<div class=mergeButton id='mb" + bx + "_" + by + "' style='left:" + (4+(11.625/2)+((bx*11.625))) + "vmin; top: calc(((100vmax - 100vmin)/2) + " + (2+(11.625/2)+((by*11.625))) + "vmin);' onclick='handleClick(" + bx + "," + by + ")'></div>");
      }
  }


  updateCells();
  updatel2squares();
  updatel3squares();

  document.write("<div class='winLoseBoxGoesHere'></div>");

  // -- only called functions past this point -- //

    function handleClick(x,y){

      // if(handlel3Merge(x,y)){
      //   l3squares[x][y] == true;
      //   updatel3squares();
      //   return null;
      // } //

    //alert("Clicked " + x + ", " + y);
    var result = merge([
    cells[x][y],    cells[x+1][y],
    cells[x][y+1],  cells[x+1][y+1]
  ])
  if(l2squares[x][y]){ //split
      // copy here
      merges--;
      scoreDisplay.innerHTML = merges;
      l2squares[x][y] = false;
      updatel2squares();
  } else if(result != "none" && handlel2Merge(x,y)){
    // copy  goes here
      cells[x][y]     = result;
      cells[x+1][y]   = result;
      cells[x][y+1]   = result;
      cells[x+1][y+1] = result;
      // copy here
      l2squares[x][y] = true;
      updatel2squares();
      updateCells();
      merges--;
      scoreDisplay.innerHTML = merges;
  }
    }

    function undo(){
      //alert(previousCells);
      cells = previousCells;
      l2squares = previousl2Squares;
      updateCells();
      updatel2squares();
    }

    // checks if level-2 merge is possible (2x2 squares cannot overlap)
    function handlel2Merge(x,y){
      if(x > 0){
        // if not, check all besides commented out
          if(!l2squares[x][y] &&
            !l2squares[x][y-1] &&
            !l2squares[x][y] &&
            !l2squares[x][y+1] && 
            !l2squares[x-1][y-1] &&
            !l2squares[x-1][y] &&
            !l2squares[x-1][y+1] &&
            !l2squares[x+1][y-1] &&
            !l2squares[x+1][y] &&
            !l2squares[x+1][y+1]
            ){
              return true;
            }
      } else {
        //check all
        if(!l2squares[x][y] &&
          !l2squares[x][y-1] &&
          !l2squares[x][y] &&
          !l2squares[x][y+1] && 
          //!l2squares[x-1][y-1] &&
          //!l2squares[x-1][y] &&
          //!l2squares[x-1][y+1] &&
          !l2squares[x+1][y-1] &&
          !l2squares[x+1][y] &&
          !l2squares[x+1][y+1]
          ){
            return true;
          }
      }
      return false;
    }

    function updateCells(){
        for(let ux = 0; ux < 8; ux++){
          for(let uy = 0; uy < 8; uy++){
            let cellInQuestion = document.getElementById("cell" + ux + "_" + uy);
              cellInQuestion.style.backgroundColor = getColor(cells[ux][uy]);
          }
        }

        if(checkIfWon() == true){ // you won!
          let WLBox = document.getElementByID("winLoseBoxGoesHere");
          WLBox.innerHTML = "<div class=winBox></div>";
          window.ReactNativeWebView.postMessage(merges);
          // reactnative alert
        }
        if(merges < 0){ // you lost
          let WLBox = document.getElementByID("winLoseBoxGoesHere");
          WLBox.innerHTML = "<div class=loseBox></div>";
        }
    }

    function updatel2squares(){
      for(let ux = 0; ux < 7; ux++){
        for(let uy = 0; uy < 7; uy++){
          let squareInQuestion = document.getElementById("l2square" + ux + "_" + uy);
          if(l2squares[ux][uy]){
            squareInQuestion.style.backgroundColor = getColor(cells[ux][uy]);
          } else {
            squareInQuestion.style.backgroundColor = 'transparent';
          }
        }
      }
    }

    function updatel3squares(){
      for(let ux = 0; ux < 5; ux++){
        for(let uy = 0; uy < 5; uy++){
          let squareInQuestion = document.getElementById("l3square" + ux + "_" + uy);
          if(l3squares[ux][uy]){
            squareInQuestion.style.backgroundColor = getColor(cells[ux][uy]);
          } else {
            squareInQuestion.style.backgroundColor = 'transparent';
          }
        }
      }
    }

    function handlel3Merge(x,y){
      if(x == 0 || x == 7 || y == 0 || y == 7){
        return false;
      }
      if(
        l2squares[x][y] &&
        l2squares[x][y+2] &&
        l2squares[x+2][y] &&
        l2squares[x+2][y+2]
        ){
          return true;
        }
        return false;
    }

    function randomColor(){
      var r = Math.ceil(Math.random()*4); // change to 4 later
      switch(r){
          case 1:
              return "r";
          break;
          case 2:
              return "g";
          break;
          case 3:
              return "b";
          break;
          case 4:
              return "o";
          break;
  }
}
function getColor(l){
  switch(l){
      case "r":
          return "#EF8B82";
      break;
      case "g":
          return "#B1DE8C";
      break;
      case "b":
          return "#A8C6FD";
      break;
      case "o":
          return "#F8C676";
      break;
  }
}

function merge(arr){
  var rTally = 0;
  var gTally = 0;
  var bTally = 0;
  var oTally = 0;
  var i = 0;
  while(i < 4){
      switch(arr[i]){
          case "r":
              rTally++;
          break;
          case "g":
              gTally++;
          break;
          case "b":
              bTally++;
          break;
          case "o":
              oTally++;
          break;
      }
      i++;
  }
  if(rTally >= 3){
      return "r";
  }
  if(gTally >= 3){
      return "g";
  }
  if(bTally >= 3){
      return "b";
  }
  if(oTally >= 3){
      return "o";
  }
  return "none";
}

function checkIfWon(){

  for(let colorNum = 2; colorNum <= 4; colorNum++){
  let selectedColorTally = 0;
  let selectedColor = "";
  switch("" + colorNum){
    case "1":
      selectedColor = "r";
    break;
    case "2":
      selectedColor = "g";
    break;
    case "3":
      selectedColor = "b";
    break;
    case "4":
      selectedColor = "o";
    break;
  }

  for(let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){
      if(cells[x][y] == selectedColor){
        selectedColorTally++;
      }
    }
  }

  if(selectedColorTally == 64){
    return true;
    //alert("beans! " + selectedColor);
  } 
  }

  return false;
}



  </script>
  `;

  function onMessage(data) {
    Alert.alert(
      "Game Summary",
      "Win Status: True \nScore: " + (data.nativeEvent.data-1).toString() + "\nParticipant ID: 2 \n \nThe test is complete. Thank you for participating! We will use your feedback to improve our app in the future.",
      //"Score: " + data.nativeEvent.data-1,
      [
        {
          text: " ",
          //onPress: () => navigation.navigate(leaderboard)
        },
      ],
      { }
    );
  }



  return (
    <WebView
    mixedContentMode="compatibility"
    onMessage={onMessage}
    originWhitelist={['*']}
    source={{ html: documentHTML
    }}
  />
  )
}

export default GameScreen;
