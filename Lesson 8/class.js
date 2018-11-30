class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 3;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]



        ]
    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }


        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        this.multiply++
        if (empty && this.multiply > 2) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 1
            var gr = new Grass(newX, newY);
            grassArr.push(gr)
        }
    }
}









class xotaker {
    constructor(x, y, ) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];
    }

    getNewdirection() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];
    }

    chooseCell(character) {
        this.getNewdirection()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 3) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            var xt = new xotaker(newX, newY);
            xotakerArr.push(xt)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
        }
    }
    eat() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy+=2;
            
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1)
                }
            }
        }
    }
}


class vagr {
    constructor(x, y, ) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];
    }

    getNewdirection() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];
    }


    chooseCell(character) {
        this.getNewdirection()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }


        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 3) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            var vg = new vagr(newX, newY);
            vagrArr.push(vg)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }
    eat() {
        var food = random(this.chooseCell(4))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            for (var i in aryucArr) {
                if (aryucArr[i].x == newX && aryucArr[i].y == newY) {
                    aryucArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy+=2

        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in vagrArr) {
                if (vagrArr[i].x == this.x && vagrArr[i].y == this.y) {
                    vagrArr.splice(i, 1)
                }
            }
        }
    }
}


class aryuc {
    constructor(x, y, ) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];

    }

    getNewdirection() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];
    }


    chooseCell(character) {
        this.getNewdirection()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }


        }
        return found;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 3) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            var ayr = new aryuc(newX, newY);
            aryucArr.push(ayr)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }

    eat() {
        var food = random(this.chooseCell(2))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy++
        }
    }
    eat1() {
        var food = random(this.chooseCell(5))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            for (var i in hovazikArr) {
                if (hovazikArr[i].x == newX && hovazikArr[i].y == newY) {
                    hovazikArr.splice(i, 1)
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy++
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in aryucArr) {
                if (aryucArr[i].x == this.x && aryucArr[i].y == this.y) {
                    aryucArr.splice(i, 1)
                }
            }
        }
    }

}

class hovazik {
    constructor(x, y, ) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];
    }

    getNewdirection() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]];
    }

    chooseCell(character) {
        this.getNewdirection()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }


        }
        return found;
    }

    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 3) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            var hov = new hovazik(newX, newY);
            hovazikArr.push(hov)
        }
    }

    move() {
        var empty = random(this.chooseCell(0))
        this.energy--
        if (empty) {
            var newX = empty[0];
            var newY = empty[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;

        }
    }
    eat1() {
        var food = random(this.chooseCell(3))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            for (var i in vagrArr) {
                if (vagrArr[i].x == newX && vagrArr[i].y == newY) {
                    vagrArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy++
        }
    }
    eat2() {
        var food = random(this.chooseCell(1))
        if (food) {
            var newX = food[0];
            var newY = food[1];
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }

            this.x = newX;
            this.y = newY;
            this.energy++
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in hovazikArr) {
                if (hovazikArr[i].x == this.x && hovazikArr[i].y == this.y) {
                    hovazikArr.splice(i, 1)
                }
            }
        }
    }

}
