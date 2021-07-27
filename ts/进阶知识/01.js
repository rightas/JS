function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function hanleEvent(ele, event) {
}
hanleEvent(document.getElementById('hello'), 'scroll');
// hanleEvent(document.getElementById('world'), 'dbclick') //报错 不能为'dbclick'
// 类
// class Animal {
//   private name;
//   public constructor(name) {
//     this.name= name
//   }
//   sayFn() : void {
//     return this.name
//   }
// }
// let a = new Animal('jack')
// console.log(a.sayFn())

// 类的类型
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal2;
}());
var a2 = new Animal2('jack');
console.log(a2.sayHi());


// 类与接口