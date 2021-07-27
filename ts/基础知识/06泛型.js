var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 泛型之Hello World
// 不适用泛型的话 这个函数可能是下面这样
function identity(arg) {
    return arg;
}
// 使用泛型
function identity1(arg) {
    return arg;
}
// 我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 不同于使用 any，它不会丢失信息，
// 像第一个例子那像保持准确性，传入数值类型并返回数值类型。
// 我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：
var output1 = identity1('myString');
// 这里我们明确的指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()。
// 第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
var output2 = identity1("myString");
// 使用泛型变量
// 现在假设我们想操作T类型的数组而不直接是T。由于我们操作的是数组，所以.length属性是应该存在的。 我们可以像
// 创建其它数组一样创建这个数组：
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// 我们还可以使用带有调用签名的对象字面量来定义泛型函数：
function identity2(arg) {
    return arg;
}
function identity3(arg) {
    return arg;
}
var myIndentity = identity3;
// 泛型约束
// 你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 
// 在 loggingIdentity例子中，我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，
// 所以就报错了。
function loggingIdentity2(arg) {
    // console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
function loggingIdentity3(arg) {
    console.log(arg.length);
    return arg;
}
// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
// loggingIdentity3(3);  // Error, number doesn't have a .length property
// 我们需要传入符合约束类型的值，必须包含必须的属性：
loggingIdentity3({ length: 10, value: 3 });
// 在泛型里使用类类型
// 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
