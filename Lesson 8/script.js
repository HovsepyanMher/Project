var side = 12;
var grassArr = [];
var xotakerArr = [];
var vagrArr = [];
var aryucArr = [];
var hovazikArr = [];

var m = 30
var n = 30
var matrix = []
var side = 20
function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
for (var y = 0; y < m; y++) {
    matrix[y] = []
    for (var x = 0; x < n; x++) {
        matrix[y].push(getRandInt(1, 5))
    }
}


function setup() {


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1)      {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var vgr = new vagr(x, y)
                vagrArr.push(vgr)
            }
            else if (matrix[y][x] == 4) {
                var ayr = new aryuc(x, y)
                aryucArr.push(ayr)
            }
            else if (matrix[y][x] == 5) {
                var hov = new hovazik(x, y)
                hovazikArr.push(hov)


            }

        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green")
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("black");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            else {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side)
        }
    }


   
    for (var i in grassArr) {
        grassArr[i].mult()
    }

 
    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }

    
   for (var i in vagrArr) {
        vagrArr[i].eat()
        vagrArr[i].move()
        vagrArr[i].mult()
        vagrArr[i].die()
    } 
    for (var i in aryucArr) {
        aryucArr[i].eat()
        aryucArr[i].eat1()
        aryucArr[i].move()
        aryucArr[i].mult()
        aryucArr[i].die()
    }
    for (var i in hovazikArr) {
        hovazikArr[i].eat1()
        hovazikArr[i].eat2()
        hovazikArr[i].move()
        hovazikArr[i].mult()
        hovazikArr[i].die()
    }


}

