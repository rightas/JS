// 枚举
// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 
// TypeScript支持数字的和基于字符串的枚举。
// 数字枚举
// 首先我们看看数据枚举 如果你是用过其它编程语言应该会很熟悉
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// 如上，我们定义了一个数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长。 换句话说，
//  Direction.Up的值为 1， Down为 2， Left为 3， Right为 4。
// 字符串枚举
// 字符串枚举的概念很简单，但是有细微的 运行时的差别。 在一个字符串枚举里，每个成员都必须用字符串字面量
// ，或另外一个字符串枚举成员进行初始化。
// 由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。 换句话说，如果你正在调试并且必须要读一个数字
// 枚举的运行时的值，这个值通常是很难读的 - 它并不能表达有用的信息（尽管 反向映射会有所帮助），字符串枚举允许
// 你提供一个运行时有意义的并且可读的值，独立于枚举成员的名字。
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "UP";
    Direction1["Down"] = "DOWN";
    Direction1["Left"] = "LEFT";
    Direction1["Right"] = "RIGHT";
})(Direction1 || (Direction1 = {}));
// 异构枚举
// 从技术的角度来说，枚举可以混合字符串和数字成员，但是似乎你并不会这么做：
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
