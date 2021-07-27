function printLabel(labelledobj) {
    console.log(labelledobj.label);
}
var myobj = { size: 10, label: 'Size 10  Object' };
printLabel(myobj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black' });
// 你可以通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变了。
var p1 = { x: 10, y: 20 };
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ['Bod', 'Fred'];
var myStr = myArray[0];
var myArray2 = ["Alice", "Bob"];
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {};
square.color = 'blue';
square.sideLength = 10;
function getCounter() {
    var counter = function (start) { };
    counter.interVal = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interVal = 5.0;
