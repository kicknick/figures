function sum(x, y) {
    return x + y;
}
;
function subtract(a, b) {
    return a - b;
}
;
var op;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getInfo = function () {
        return "id:" + this.id + " name:" + this.name;
    };
    return User;
}());
var Recatangle = /** @class */ (function () {
    function Recatangle() {
    }
    Recatangle.prototype.getSquare = function () {
        return this.x * this.y;
    };
    Recatangle.prototype.randomNumber = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    Recatangle.prototype.generatePointInside = function () {
        return [this.randomNumber(this.x, this.x + this.weight), this.randomNumber(this.y, this.y - this.height)];
    };
    return Recatangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.getSquare = function () {
        return Math.abs((this.x1 * (this.y2 - this.y3) + this.x2 * (this.y3 - this.y1) + this.x3 * (this.y1 - this.y2)) / 2);
    };
    Triangle.prototype.getRandomPointInside = function () {
        var r1 = Math.random();
        var r2 = Math.random();
        var X = (1 - Math.sqrt(r1)) * this.x1 + (Math.sqrt(r1) * (1 - r2)) * this.x2 + (Math.sqrt(r1) * r2) * this.x3;
        var Y = (1 - Math.sqrt(r1)) * this.y1 + (Math.sqrt(r1) * (1 - r2)) * this.y2 + (Math.sqrt(r1) * r2) * this.y3;
        return [X, Y];
    };
    return Triangle;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.getSquare = function () {
        return this.r * this.r * Math.PI;
    };
    return Circle;
}());
var rec = new Recatangle;
rec.x = 0;
rec.y = 0;
rec.weight = 10;
rec.height = 5;
var circle = new Circle;
circle.x = 0;
circle.y = 0;
circle.r = 1;
var triangle = new Triangle;
triangle.x1 = 0;
triangle.y1 = 0;
triangle.x2 = 0;
triangle.y2 = 5;
triangle.x3 = 10;
triangle.y3 = 0;
// console.log(triangle.getRandomPointInside())
// console.log(triangle.getSquare())
console.log(rec.generatePointInside());
// op = sum;
// console.log(op(2, 4));  // 6
// op = subtract;
// console.log(op(6, 4));  // 2
// tsc --version
// tsc --help
