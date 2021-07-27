// 基本类型
let isDone: boolean = false
// 数字
let decDiteral: number = 10
let octalDiteral: number = 100
// 字符串
let names:string = "Gene"
let age:number = 37
let sentence:string = `hello, my name is ${names}`
// 数组
let list:number[] = [1,2,3] //第一种声明方式
let list2:Array<number> = [1,2,3] //泛型声明

// 元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同,
// 比如 你可以定义一对值分别为string 和 number 类型的元组
let x: [string,number];
x = ['Hello', 10]
console.log(x[0])

// 枚举
// enum类型时对javasc标准数据类型的一个补充，像C#等其他语言一样,使用枚举类型
// 可以位一组数值赋予友好的名字 默认情况下 从0开始为元素编号

// enum Color {red = 1, Green, Blue}
// let c:Color = Color.Green

// 枚举类型提供一个便利是你可以由枚举的值得到它的名字,例如:我们知道数值为2,但是
// 不确定它映射到Color里的那个名字 我们可以查找相应的名字
enum Color2 {red = 3, Pink, Purple}
let coloeNumber: string = Color2[4]
console.log(coloeNumber)
// any 有时候 我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型. 这些值
// 可能来自于动态的内容 比如来自用户输入或第三方代码库 这种情况下 我们不希望类型
// 检查器对这些值进行检查而是直接让它们通过编译阶段的检查 那么我们可以使用any类型
// 来标记这些变量
let notSure:any = 4;
notSure = 'maybe a string instead'
notSure = false
// 在对现有代码进行改写的时候 any类型是十分有用的 它允许你在编译时可选择地包含或移除类型检查
// 你可能认为Object 有相似的作用 就像它在其它语言中那样 但是Object类型的变量只是允许你给它赋
// 任意值 但是却不能在它上面调用任意的方法 即使它真的有这些方法
let notSure1:any = 4
notSure1.toFixed() // 可以正常调用

let prettySure:Object = 4;
//prettySure.toFixed() // b报错
// 当你知道一部分数据的类型时 anY类型也是有用的 比如 你有一个数组 它包含了不同类型的数据
let list3:any[] = [1, true, 'free']
list3[1] = 100

// void
// 某种程度上来说 void类型像是与any类型相反 他表示没有任何类型 当一个函数没有返回值时
// 你通常会见到其返回值类型是void
function warnUser() : void {
  console.log('This is my warning message')
}
// 声明一个void类型的变量没有什么大用 因为你只能为它赋予undefin 和 null
let unusable:void = undefined

// Nerber:
// nerber类型标识的是那些永不存在的值的类型 例如 never 类型是那些总是会抛出异常或根本就不会
// 有返回值的函数表达式或箭头函数表达式的返回值类型 变量也可能是never类型 当它们被永不为真的类型保护所约束时

// never类型是任意类型的子类型 也可以赋值给任何类型 然而 没有类型是never 的子类型或可以赋值给never类型 然而
// 没有类型是never的子类型或可以赋值给never类型(除了never本身之外) 即使any也不可以赋值给never

// 下面是一些返回never类型的函数:
// 返回never的函数必须存在无法达到的终点
// function error(message: string) :nerver {
//   throw new Error(message)
// }

// Object 
// Object表示非原始类型 也就是除 number string Boolean symbol null undefined
// 使用object类型 就可以更好地表示像Object.create 这样的API 例如:
declare function create(o: object | null) :void;
create({prop: 0})
create(null)
// create(42) //报错

// 类型断言
// 有时候你会遇到这样的情况 你会比typeScript更了解某个值的详细信息 通常这会发送在你清楚地知道
// 一个实体具有它现有类型更确切的类型

// 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，
// 但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，
// 已经进行了必须的检查。

// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue:any = 'this is a string'
let strLength:number = (<string> someValue).length
// 另一个为as 语法
let someValue2:any = 'this ia a strring2'
let strLength2:number = (someValue2 as string).length 
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；
// 然而，当你在TypeScript里使用JSX时， 只有 as语法断言是被允许的。