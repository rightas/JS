// LabelledValue接口就好比一个名字,用来描述上面例子里的要求。它代表了有一个label属性且类型为
// string的对象 需要注意的是 我们在这里并不能像在其它语言里一样 说传给printLabel的对象实现了这个
// 接口 我们只会关注值的外形 只要传入的对象满足上面提到的必要条件 那么它就是被允许的
// 还有一点值得提到的是 类型检查器不会去检查属性的顺序 只要相应的属性存在并且属性也是对的就可以
interface LabelledValue{
  label: string
}
function printLabel(labelledobj: LabelledValue) {
  console.log(labelledobj.label)
}
let myobj = {size: 10, label: 'Size 10  Object'}
printLabel(myobj)

// 可选属性
// 接口里的属性不全都是必需的 有些只是在某些条件下存在 或者根本不存在 可选属性在应用"option bags""模式
// 时很常用 既给函数传入的参数对象只有部分属性赋值了
interface SquareConfig{
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare
}
let mySquare = createSquare({color: 'black'})

// 只读属性
// 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:
interface Point {
  readonly x: number;
  readonly y: number;
}
// 你可以通过赋值一个对象字面量来构造一个Point。 赋值后， x和y再也不能被改变了。
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，
// 因此可以确保数组创建后再也不能被修改：

// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!

// 函数类型
// 接口能够描述JavaScript中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，
// 接口也可以描述函数类型。

// 为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 它就像是一个只有参数列表
// 和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}

// 可索引的类型
// 与使用接口描述函数类型差不多 我们也可以描述那些能够 通过索引得到的类型比如a[10]或
// ageMap['denlel'] 可索引类型具有一个索引签名 它描述了对象索引的类型 还有相应的索引返回值类型
//  例子
interface StringArray {
  [index: number]: string;
}
let myArray:StringArray;
myArray = ['Bod', 'Fred']
let myStr:string = myArray[0]

// 你可以将索引签名设置为只读，这样就防止了给索引赋值：
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory"; // error!

// 类类型
// 实现接口
// 与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约。
// 你也可以在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样：

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface {
  currentTime: Date;
  setTime(d: Date) {
      this.currentTime = d;
  }
  constructor(h: number, m: number) { }
}


// 继承接口
// 和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，
// 可以更灵活地将接口分割到可重用的模块里。
interface Shape{
  color: string;
}

interface Square extends Shape{
  sideLength: number;
}
let square = <Square>{}
square.color = 'blue'
square.sideLength = 10

// 混合类型
// 先前我们提过，接口能够描述JavaScript里丰富的类型。 因为JavaScript其动态灵活的特点，
// 有时你会希望一个对象可以同时具有上面提到的多种类型。

// 一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter{
  (start: number): string;
  interVal: number;
  reset(): void;
}

function getCounter(): Counter{
  let counter = <Counter>function (start: number) {};
  counter.interVal = 123;
  counter.reset = function() {}
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interVal = 5.0




