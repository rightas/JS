// 函数类型
// 为函数定义类型
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
// 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出
// 返回值类型，因此我们通常省略它。
// 书写完整函数类型
// 现在我们已经为函数指定了类型，下面让我们写出函数的完整类型。
var myAdd1 = function (x, y) { return x + y; };
// 函数类型包含两部分：参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。 
// 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。 这个名字只是为了增加可读性。 
// 我们也可以这么写：
var myAdd2 = function (x, y) {
    return x + y;
};
// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
// 第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了。 如之前提到的，
// 返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
// 函数的类型只是由参数类型和返回值组成的。 函数中使用的捕获变量不会体现在类型里。 实际上，这些变量是函数
// 的隐藏状态并不是组成API的一部分。
// 可选参数和默认参数
// TypeScript里的每个函数参数都是必须的。 这不是指不能传递 null或undefined作为参数，而是说编译器检查用户
// 是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个
// 数必须与函数期望的参数个数一致。
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
// JavaScript里，每个参数都是可选的，可传可不传。 没传参的时候，它的值就是undefined。 在TypeScript里我们
// 可以在参数名旁使用 ?实现可选参数的功能。 比如，我们想让last name是可选的：
// function buildName2(firstName: string, lastName?: string) {
//   if (lastName)
//       return firstName + " " + lastName;
//   else
//       return firstName;
// }
// let result1 = buildName2("Bob");  // works correctly now
// let result2 = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName2("Bob", "Adams");  // ah, just right
// 设置默认值
// function buildName(firstName: string, lastName = "Smith") {
//   return firstName + " " + lastName;
// }
// this绑定
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClickGood = function (e) {
        // can't use this here because it's of type void!
        console.log('clicked!');
    };
    return Handler;
}());
var h = new Handler();
// 重载
// JavaScript本身是个动态语言。 JavaScript里函数根据传入不同的参数而返回不同类型的数据是很常见的。
// let suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x) :any {
//   if (typeof x == 'object') {
//     let pickedCard = Math.floor(Math.random() * x.length);
//     return pickedCard;
//   } else if (typeof x == "number") {
//     let pickedSuit = Math.floor(x / 13);
//     return { suit: suits[pickedSuit], card: x % 13 };
//   }
// }
// pickCard方法根据传入参数的不同会返回两种不同的类型。 如果传入的是代表纸牌的对象，函数作用是从中抓一张牌。 
// 如果用户想抓牌，我们告诉他抓到了什么牌。 但是这怎么在类型系统里表示呢。
// 方法是为同一个函数提供多个函数类型定义来进行函数重载。 编译器会根据这个列表去处理函数的调用。 
// 下面我们来重载 pickCard函数。
// 这样改变后，重载的pickCard函数在调用的时候会进行正确的类型检查。
// 为了让编译器能够选择正确的检查类型，它与JavaScript里的处理流程相似。 
// 它查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。 因此，在定义重载的时候，
// 一定要把最精确的定义放在最前面。
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
// 注意，function pickCard(x): any并不是重载列表的一部分，因此这里只有两个重载：
// 一个是接收对象另一个接收数字。 以其它参数调用 pickCard会产生错误。
