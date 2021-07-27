var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// 作用域规则
// 对于熟悉其他语言的人来说 var声明有些奇怪的作用域规则 看下面的例子
function f(shouldInitialize) {
    if (shouldInitialize) {
        var a = 10;
    }
    return a;
}
f(true); // return '10'
f(false); // return 'undefined
// 有些读者可以要多看几遍这个例子 变量x是定义在 if语句里面 但是 我们却可以在语句的外面访问它 这只
// 因为var 声明可以在包含它的函数 模块 命名空间或全局作用域内部任何位置被访问(我们后面会详细介绍)
// 包含它的代码块对此没有任何影响 有些人乘此为"var作用域或函数作用域" 函数参数也使用函数作用域
// 例如是用setTimeout 在 for循环中打印相对应的i值
// 第一种
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 100 * i_1);
};
// 第二种使用let
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
// 块作用域
// 当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含
// 它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。
// 拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写。 虽然这些变量始终“存在”于它们的作用域里，
// 但在直到声明它的代码之前的区域都属于 暂时性死区。 它只是用来说明我们不能在 let语句之前访问它们，
// 幸运的是TypeScript可以告诉我们这些信息。
// const 声明 const 声明是声明变量的另一种方式。
// 它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，
// 它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。
// let input2 = [1, 2];
// function f([first, second]: [number, number]) {
//   console.log(first, second)
// }
// f(input2)
var o1 = {
    a1: "foo",
    b1: 12,
    c1: "bar"
};
var a1 = o1.a1, b1 = o1.b1;
// 默认值
// 默认值可以让你在属性为undedined时使用缺省值
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
// 现在，即使 b 为 undefined ， keepWholeObject 函数的变量 wholeObject 的属性 a 和 b 都会有值。 
// 展开
// 展开操作符正与解构相反。 它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象。 例如
var first = [1, 2];
var second = [3, 4];
var bothPlus = __spreadArray(__spreadArray(__spreadArray([0], first), second), [5]);
// 这会令bothPlus的值为[0, 1, 2, 3, 4, 5]。 展开操作创建了 first和second的一份浅拷贝。 
// 它们不会被展开操作所改变。
// 对象展开还有其它一些意想不到的限制。 首先，它仅包含对象 自身的可枚举属性。 
// 大体上是说当你展开一个对象实例时，你会丢失其方法：
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () {
    };
    return C;
}());
var c = new C();
var clone = __assign({}, c);
clone.p; // ok
// clone.m(); // error!
// 其次，TypeScript编译器不允许展开泛型函数上的类型参数。 这个特性会在TypeScript的未来版本中考虑实现。
