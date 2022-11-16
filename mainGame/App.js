import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const HelloWorldApp = () => {
  let documentHTML = `
  <style>
  .box {
    position: absolute;
    background-color:blue;
    border-color:transparent;
    height: 10.625vmin;
    width: 10.625vmin;
    border-radius: 2.2vmin;
  }

  .mergeButton {
    position: absolute;
    background-color:#00ff0000;
    height: 10.625vmin;
    width: 10.625vmin;
    cursor:pointer;
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

  </style>
  <html>
  <div class=gameBackground></div>
  </html>
  <script>

let cells = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

// randomly fill cells
for (let rx = 0; rx < 8; rx++){
  for (let ry = 0; ry < 8; ry++){
      cells[rx][ry] = randomColor();
  }
}

//7x7 grid of l2squares
let l2squares = [
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false]
];

  // draw boxes
  for(let x = 0; x < 8; x++){
    for(let y = 0; y < 8; y++){
      document.write("<div class=box id='cell" + x + "_" + y + "' style='left:" + (4+((x*11.625))) + "vmin; top: calc(((100vmax - 100vmin)/2) + " + (2+((y*11.625))) + "vmin);'></div>");
    }
  }

  // draw buttons
  for(let bx = 0; bx < 7; bx++){
    for(let by = 0; by < 7; by++){
      document.write("<div class=mergeButton id='mb" + bx + "_" + by + "' style='left:" + (4+(11.625/2)+((bx*11.625))) + "vmin; top: calc(((100vmax - 100vmin)/2) + " + (2+(11.625/2)+((by*11.625))) + "vmin);' onclick='handleClick(" + bx + "," + by + ")'></div>");
      }
  }

  updateCells();


  // -- only called functions past this point -- //

    function handleClick(x,y){
        //alert("Clicked " + x + ", " + y);
        var result = merge([
      cells[x][y],    cells[x+1][y],
      cells[x][y+1],  cells[x+1][y+1]
  ])

  if(l2squares[x][y]){
      l2squares[x][y] = false;
      drawBoxes();
  } else if(result != "none"){
      cells[x][y]     = result;
      cells[x+1][y]   = result;
      cells[x][y+1]   = result;
      cells[x+1][y+1] = result;
      l2squares[x][y] = true;
      updateCells();
  }
    }

    function updateCells(){
        for(let ux = 0; ux < 8; ux++){
          for(let uy = 0; uy < 8; uy++){
            let cellInQuestion = document.getElementById("cell" + ux + "_" + uy);
              cellInQuestion.style.backgroundColor = getColor(cells[ux][uy]);
          }
        }
    }

    function randomColor(){
      var r = Math.ceil(Math.random()*4);
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

  </script>
  `;
  return (
    <WebView
      originWhitelist={['*']}
      source={{
        html: documentHTML
      }}
    />
  )
}

export default HelloWorldApp;