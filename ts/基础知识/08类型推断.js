// 上下文类型
// TypeScript类型推论也可能按照相反的方向进行。 这被叫做“按上下文归类”。按上下文归类会发生在表
// 达式的类型与所处的位置相关时。比如：
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Error
};
// 这个例子会得到一个类型错误，TypeScript类型检查器使用Window.onmousedown函数的类型来推断
// 右边函数表达式的类型。 因此，就能推断出 mouseEvent参数的类型了。 如果函数表达式不是在上下文类型的位置，
//  mouseEvent参数的类型需要指定为any，这样也不会报错了。
// 如果上下文类型表达式包含了明确的类型信息，上下文的类型被忽略。 重写上面的例子：
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Now, no error is given
};
// 这个函数表达式有明确的参数类型注解，上下文类型被忽略。 这样的话就不报错了，因为这里不会使用到上下文类型。
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Now, no error is given
};
// 上下文归类会在很多情况下使用到。 通常包含函数的参数，赋值表达式的右边，类型断言，对象成员和数组字面量和返回值语句。
// 上下文类型也会做为最佳通用类型的候选类型。比如：
// 这个例子里，最佳通用类型有4个候选者：Animal，Rhino，Elephant和Snake。 当然， Animal会被做为最佳通用类型。
// function createZoo(): Animal[] {
//   return [new Rhino(), new Elephant(), new Snake()];
// }
