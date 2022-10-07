
let cells = [
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

//5x5 grid of l3squares
let l3squares = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
];

//one l4 square (game is done)
let l4square = false;

let thegrid = document.getElementById("myGrid");
let innersquare = "";

drawgrid();
drawButtons();


function drawgrid(){
    innersquare = "";
    for(let a = 0; a < 8; a++){
        for(let b = 0; b < 8; b++){ 
            innersquare += "<div class='cell' style='background:" + getColor(cells[a][b]) + "' id='" + a + "_" + b + "'>" + cells[a][b] + "</div>";
        }
    }
    thegrid.innerHTML = innersquare;
}


function drawButtons(){
    for(let bx = 0; bx < 7; bx++){
        for(let by = 0; by < 7; by++){
            document.write("<button class='btn' onclick='buttonClick(" + bx + ", " + by + ")' id='b" + bx + "_" + by + "' style='top: " + (((12)*(by))+7.5) + "vmin;left:" + (((12)*(bx))+7.5) + "vmin;'></button>");
        }
    }
}

function drawBoxes(){
    let innerMain = "";
    for(let lx = 0; lx < 7; lx++){
        for(let ly = 0; ly < 7; ly++){
            if(l2squares[ly][lx]){
                innerMain += ("<div class='box' style='background-color:" + getColor(cells[ly][lx]) + "; top: " + (((12)*(ly))+1.32) + "vmin;left:" + (((12)*(lx))+1.32) + "vmin;'></div>");
            }
        }
    }
    let boxes = document.getElementById("boxes");
    boxes.innerHTML = (innerMain);

}

function buttonClick (y, x){
    //alert(x + "_" + y);
    var result = merge([
        cells[x][y],    cells[x+1][y],
        cells[x][y+1],  cells[x+1][y+1]
    ])

    if(result != "none"){
        cells[x][y]     = result;
        cells[x+1][y]   = result;
        cells[x][y+1]   = result;
        cells[x+1][y+1] = result;
        l2squares[x][y] = true;
        drawgrid();
        drawBoxes();
    }
}

// function noL2Conflicts (x,y){
//     try{
//         return  !l2squares[y][x+1]      &&
//                 !l2squares[y+1][x]      &&
//                 !l2squares[y+1][x+1]    &&
//                 !l2squares[y][x-1]      && 
//                 !l2squares[y-1][x]      &&
//                 !l2squares[y-1][x-1]
//     } catch {

//     }
// }


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
