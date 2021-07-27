// 泛型之Hello World
// 不适用泛型的话 这个函数可能是下面这样
function identity(arg: number) : number {
  return arg
}
// 使用泛型
function identity1<T>(arg: T) :T {
  return arg
}
// 我们把这个版本的identity函数叫做泛型，因为它可以适用于多个类型。 不同于使用 any，它不会丢失信息，
// 像第一个例子那像保持准确性，传入数值类型并返回数值类型。

// 我们定义了泛型函数后，可以用两种方法使用。 第一种是，传入所有的参数，包含类型参数：
let output1 = identity1<string>('myString')

// 这里我们明确的指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()。
// 第二种方法更普遍。利用了类型推论 -- 即编译器会根据传入的参数自动地帮助我们确定T的类型：
let output2 = identity1("myString");


// 使用泛型变量
// 现在假设我们想操作T类型的数组而不直接是T。由于我们操作的是数组，所以.length属性是应该存在的。 我们可以像
// 创建其它数组一样创建这个数组：

function loggingIdentity<T>(arg: T[]) :T[] {
  console.log(arg.length)
  return arg
}

// 我们还可以使用带有调用签名的对象字面量来定义泛型函数：
function identity2<T>(arg: T):T {
  return arg
}

// 这引导我们去写第一个泛型接口了。 我们把上面例子里的对象字面量拿出来做为一个接口：
interface GenericIdentityFn{
  <T>(arg: T) :T
}
function identity3<T>(arg: T) :T {
  return arg
}

let myIndentity:GenericIdentityFn = identity3

// 泛型约束
// 你应该会记得之前的一个例子，我们有时候想操作某类型的一组值，并且我们知道这组值具有什么样的属性。 
// 在 loggingIdentity例子中，我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性，
// 所以就报错了。
function loggingIdentity2<T>(arg: T): T {
  // console.log(arg.length);  // Error: T doesn't have .length
  return arg;
}

// 相比于操作any所有类型，我们想要限制函数去处理任意带有.length属性的所有类型。 只要传入的类型有这个属性，
// 我们就允许，就是说至少包含这一属性。 为此，我们需要列出对于T的约束要求。
// 为此，我们定义一个接口来描述约束条件。 创建一个包含 .length属性的接口，使用这个接口和extends关键字来实
// 现约束：
interface lengthwise{
  length: number
}
function loggingIdentity3<T extends lengthwise>(arg: T) :T {
  console.log(arg.length)
  return arg
}

// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
// loggingIdentity3(3);  // Error, number doesn't have a .length property
// 我们需要传入符合约束类型的值，必须包含必须的属性：
loggingIdentity3({length: 10, value: 3});

// 在泛型里使用类类型
// 一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string;
}

class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: BeeKeeper;
}

class Lion extends Animal {
  keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;  // typechecks!
createInstance(Bee).keeper.hasMask;   // typechecks!