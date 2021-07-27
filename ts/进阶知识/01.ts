// 1: 类型别名: 类型别名用来给一个类型起个新名字
// 简单例子
type name = string
type nameResolver = ()=> string;
type NameOrResolver = name | nameResolver
function getName(n: NameOrResolver) : name {
  if (typeof n === 'string'){
    return n
  } else {
    return n()
  }
}

// 2: 字符串字面量类型 是用来约束取值 只能是某几个字符串中的一个
type EventNames = 'click' | 'scroll' | 'mousemove'
function hanleEvent(ele: Element, event: EventNames) {

}
hanleEvent(document.getElementById('hello'), 'scroll')
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
class Animal2{
  name: string;
  constructor(name: string) {
    this.name = name
  }
  sayHi(): string {
    return `My name is ${this.name}`;
  }
}
let a2: Animal2 = new Animal2('jack')
console.log(a2.sayHi())