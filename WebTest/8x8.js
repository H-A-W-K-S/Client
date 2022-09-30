// Quick note...
// this code is godawful. a lot of it is from before i learned let > var
// a lot of this code is ported over from the 4x4 version so obviously it will not work.
// this code is quite sloppy, poorly-documented and really not for show 
var cells = [ // there is definitely a better way to do this
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],

];

// randomly fill cells
for (let rx = 0; rx < 8; rx++){
    for (let ry = 0; ry < 8; ry++){
        cells[rx][ry] = randomColor();
    }
}

// var cells = [
//     ["1", "2", "3", "4"],
//     ["5", "6", "7", "8"],
//     ["9", "10", "11", "12"],
//     ["13", "14", "15", "16"]
// ];

var l2squares = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];

drawgrid();



function drawgrid(){

var i = 0;
var j = 0;
var bcounter = 1;
var innersquare = "";
while(i < 8){
    while(j < 8){ 
        innersquare = innersquare + "<div class='cell' style='background:" + getColor(cells[i][j]) + "' id='" + i + "_" + j + "'>" + cells[i][j] + "</div>";
            
        j++;
    }
    j=0;
    i++;
}
var thegrid = document.getElementById("myGrid");
thegrid.innerHTML = innersquare;
findbuttons();
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

function findbuttons(){

var b1 = document.getElementById("b1");
b1.addEventListener("click", function(){
    var arr = [cells[0][0], cells[0][1], cells[1][0], cells[1][1]];
    var result = merge(arr);
    if(result != "none"){
        cells[0][0] = result;
        cells[0][1] = result;
        cells[1][0] = result;
        cells[1][1] = result;
        l2squares[0][0] = true;
        drawgrid();
    }
});

var b2 = document.getElementById("b2");
b2.addEventListener("click", function(){
    var arr = [cells[0][1], cells[1][1], cells[0][2], cells[1][2]];
    console.log(arr);
    var result = merge(arr);
    if(result != "none"){
        cells[0][1] = result;
        cells[1][1] = result;
        cells[0][2] = result;
        cells[1][2] = result;
        l2squares[0][1] = true;
        drawgrid();
    }
});

var b3 = document.getElementById("b3");
b3.addEventListener("click", function(){
    var arr = [cells[0][2], cells[1][2], cells[0][3], cells[1][3]];
    console.log(arr);
    var result = merge(arr);
    if(result != "none"){
        cells[0][2] = result;
        cells[1][2] = result;
        cells[0][3] = result;
        cells[1][3] = result;
        l2squares[0][2] = true;
        drawgrid();
    }
});

var b4 = document.getElementById("b4");
b4.addEventListener("click", function(){
    var arr = [cells[1][0], cells[2][0], cells[1][1], cells[2][1]];
    console.log(arr);
    var result = merge(arr);
    if(result != "none"){
        cells[1][0] = result;
        cells[2][0] = result;
        cells[1][1] = result;
        cells[2][1] = result;
        l2squares[1][0] = true;
        drawgrid();
    }
});

var b5 = document.getElementById("b5");
b5.addEventListener("click", function(){
    var arr = [cells[1][1], cells[2][1], cells[1][2], cells[2][2]];
    console.log(arr);
    var result = merge(arr);
    if(result != "none"){
        cells[1][1] = result;
        cells[2][1] = result;
        cells[1][2] = result;
        cells[2][2] = result;
        l2squares[1][1] = true;
        drawgrid();
    }
});

var b6 = document.getElementById("b6");
b6.addEventListener("click", function(){
    var arr = [cells[1][2], cells[2][2], cells[1][3], cells[2][3]];
    console.log(arr);
    var result = merge(arr);
    if(result != "none"){
        cells[1][2] = result;
        cells[2][2] = result;
        cells[1][3] = result;
        cells[2][3] = result;
        l2squares[1][2] = true;
        drawgrid();
    }
});

var b7 = document.getElementById("b7");
b7.addEventListener("click", function(){
    var arr = [cells[2][0], cells[3][0], cells[2][1], cells[3][1]];
    console.log(arr);
    var result = merge(arr);
    if(result != "none"){
        cells[2][0] = result;
        cells[3][0] = result;
        cells[2][1] = result;
        cells[3][1] = result;
        l2squares[2][0] = true;
        drawgrid();
    }
});

var b8 = document.getElementById("b8");
b8.addEventListener("click", function(){
    var arr = [cells[2][1], cells[3][1], cells[2][2], cells[3][2]];
    console.log(arr);
    var result = merge(arr);
    if(result != "none"){
        cells[2][1] = result;
        cells[3][1] = result;
        cells[2][2] = result;
        cells[3][2] = result;
        l2squares[2][1] = true;
        drawgrid();
    }
});

var b9 = document.getElementById("b9");
b9.addEventListener("click", function(){
    var arr = [cells[2][2], cells[3][2], cells[2][3], cells[3][3]];
    console.log(arr);
    var result = merge(arr);
    if(result != "none"){
        cells[2][2] = result;
        cells[3][2] = result;
        cells[2][3] = result;
        cells[3][3] = result;
        l2squares[2][2] = true;
        drawgrid();
    }
}); //end find

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
