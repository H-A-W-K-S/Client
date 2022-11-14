import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const GameScreen = () => {
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

  .controlBox {
    position: absolute;
    background-color:#ededed;
    border-color:transparent;
    height: 18vmin;
    width: 18vmin;
    border-radius: 2.2vmin;
    top: calc(((100vmax - 100vmin)/2) + 98vmin);
    left: 41vmin;
  }

  .undoButton {
    position: absolute;
    background-color:#B1DE8C;
    border-color:transparent;
    height: 7.5vmin;
    width: 7.5vmin;
    border-radius: 2.2vmin;
    top: calc(((100vmax - 100vmin)/2) + 107.5vmin);
    left: 42vmin;
  }

  .undoIcon {
    position: absolute;
    width: 5.5vmin;
    top: calc(((100vmax - 100vmin)/2) + 108.5vmin);
    left: 43vmin;
  }

  .restartButton {
    position: absolute;
    background-color:#EF8B82;
    border-color:transparent;
    height: 7.5vmin;
    width: 7.5vmin;
    border-radius: 2.2vmin;
    top: calc(((100vmax - 100vmin)/2) + 107.5vmin);
    left: 50.5vmin;
  }

  .restartIcon {
    position: absolute;
    width: 5.5vmin;
    top: calc(((100vmax - 100vmin)/2) + 108.5vmin);
    left: 51.5vmin;
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
    top: calc(((100vmax - 100vmin)/2) + 99vmin);
    left: 48.25vmin;
    font-size: 6vmin;
    font-family: 'monospace';
    font-weight: 700;
    color:4f4f4f;

  }

  </style>
  <html>
  <div class=gameBackground></div>
  <div class=controlBox></div>
    <div class=scoreText id="scoreDisplay">0</div>
    <div class=undoButton></div>
      <img class=undoIcon src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEeklEQVR4nO2cT4gcRRTGv0o2EIgYFD0ENHpQs5H4DyMLQdSDf1AUvAp6UAQ9COI1XhVBRAgexeDJgx5ERYLo4opJMIKI8SCaS2TNRdDdZBezsll/HnqQYdjp6uru6te9vh/MqWfe++p7NdVV3dUtOY7jOI7jOI7jOI7jOP8XgrWAtgD2S7pH0h2SbpC0V9IVknZKWpf0l6Q/JJ2R9Iukk5KOhxCWTQRvBYCDwJvAOeqxAXwFPA9cad2eQQAE4HHgRE3Tp7EKHAGus25jMsAMsL2DPHcCJ1s2fpI14FVgV+72NAa4CfgcuDT6fAHcniHPDuB1iiGjK34F7m67La0B3AasbCJ8BTjQYp69wKkOjR9nHXgZ6N9kBfi0RPgnLeU4APzWhdMRjgIzbbSpNShOWtO40EL8OeDPTuytxodkKELtvxZAaeAQmsSek/SZpN2JPz0t6ZikE5J+knQuhHBxFPNqSderWCfcK+lRSZcnxj8q6dkQQmnbOyHWXRrEnQOWE3rm38A7wK2JeXYCTwI/JP4TDtdtW6vkKEAN848BNzZsRwCeBn6vmHOdPsyO2i5AovlrwAu0ODsB9gDzFfOfxXqd0GYBKBZYVU+4K8CDmdq0HXi7oo5XcmhIEdtKAUjr+csUJ+ic7QrAuxW0rGF52aKNAvTN/DFdM1Qbjo50oWeayEYF6Kv5Y/r2ED8xr2J1FbVJAUgb8zs3f0znMxX0PWehrXYB6HnPn9C6DTgd0bhgJS65AEMyf0zzUxGdl4DUFXsrwpIKwECGnUkoVsyxTvNI3fjb2hQ7jZGZ8yru0cY4L+mhEMKpvKqqEUJYU3F9qYxDdeNnLwBpF9Z6Zf4YsXF+XycqxqkyBDHAMX8zRu0o43sLUTG2hPmSBFwV0b9oIaqKqYM3X/pvZVzGUt3YOc8BQx7zJ9mQ9E/J8R11A3cyC5rCUMyXpF0q92q1bmCrAgzJfEm6JnK89j1wiwIMzXxJmo0cP1s3cNcFGKL5khS7BXmmbuCuC7Bb0jcVZ0fTOA98BNzcoe6HI8drrwOybUvpgFVJh0IIP+ZMQrHVMmbwbAjh5zrxLWdBTblM0hsd5HkpcnyxrvnSsAsgSfeRcVc2MCvpicjXPmiSo0kBVpok7jsUW17eUnyR9V6TPE0KMN8kcUsshBA2MsV+UdL9ke8cDyF8lyl/OcA+bDfPXgBuydS2Byi2PMZ4LEf+FKHXAu9TTA27Yolip/L+TG2aoyhujK/p43MDQ4bqt003gIPWercUpN2/eM1a75YioecDfAvUvvzsTJDY8xeB2JVRpyqJPX+ZxIdAnBISe37vb5sOiho9381vCzffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEDffEIrt70tuvhGUv53dzc8JxQtUqzwg4ebngOLtJOtuviHAgptvCHAXcHET85fc/I4YFeHL0XC0BnxMw9fVOzUYnZSH/lC54ziO4ziO4ziO0wf+BU3iR1rKriw9AAAAAElFTkSuQmCC'/>
    <div class=restartButton></div>
      <img class=restartIcon src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACgUlEQVR4nO2czU4UQRhFb7sA34ywMGqizzQ8hu6NEk1AX0h8BDQxl8V0iQk9zXRP1fdTfU8yYUXV+U6GGjIDBQghhBBCCCGEEEKIJ5A8J3lF8m58XJE89/Y6lhT+JM9IfuVTvpN86e33HCn8ZyTjyU6Qwv8IyTiyE6TwXyDpLztBCv8VkqFip/Dn/tX5ZoVk4YaOr+Zp/Ln/tedUXGJXiFzYWcjeVRAljY8Rrj8upvi1dP8XLYY6kgsA1xaxSZ4B+ATgVaUl/y79hjWhP6z4nkNcAPjMhsfIuPY16kUGgI8V15qG9c65/2lyZmdyPTRAzfOuUPXMzuCYfpDIbt0MFNGpCpEGi+TShAgDRnAwwXNQz71d8BjYY88QWA5uuVdILAJY7JGCliFart2qx9BqYeDf+wxfAFxWXPZ2/Fp7zbfDMPyuuKYtjZ59Ncl3XByCcWP3E7nAeLH7i1xgnNj9Ri7QP3b/kQuOsbcTueAQe3uRC4axtxu5YBBbkQsNY4eJ7Pl3HcKShs/mcM9qNwwiK7Zh5O3Gdoi8vdiOkbcTO0DkQr+xGSdyob/YjBe50E9sxo1cMImtD2cf18z54Sz15wbtsQhhsUdoLANY7hUKj8E99nTFc2DPvU2JMGgEh6ZEGjCSS1UiDhbR6SQiDxTZrbtBMjg+N0Caf/vN5DolX+O+DjNxtomd6r4O0uhHkfWPkVT3dfwA8GYYhvvWGw3D8AfAOwDfKi2Z5r6OWwCvLSIXxtjv8fg26ymkuK9Dl1ctkI1/nVkv/itkQ0QupPJfIBsqciGV/xGy/pIzpPKfkY0jOUMqf+5fzXckf46PHaNddD1Ddn8hhBBCCCGEEEIISx4AgjuniZaK5fIAAAAASUVORK5CYII='/>
  </html>
  <script>

  window.ReactNativeWebView.postMessage('Data from WebView / Website');

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

let scoreDisplay = document.getElementById("scoreDisplay");
let merges = 0;

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
      merges++
      scoreDisplay.innerHTML = merges;
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

  function onMessage(data) {
    //alert(data.nativeEvent.data);
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
