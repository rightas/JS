// 公共，私有与受保护的修饰符
// 默认为 public
// 在上面的例子里，我们可以自由的访问程序里定义的成员。 如果你对其它语言中的类比较了解，
// 就会注意到我们在之前的代码里并没有使用 public来做修饰；例如，C#要求必须明确地使用 
// public指定成员是可见的。 在TypeScript里，成员都默认为 public。

// 你也可以明确的将一个成员标记成 public。 我们可以用下面的方式来重写上面的 Animal类：
// class Animal {
//   public name: string;
//   public constructor(theName: string) { this.name = theName; }
//   public move(distanceInMeters: number) {
//       console.log(`${this.name} moved ${distanceInMeters}m.`);
//   }
// }

// 理解 private
// 当成员被标记成 private时，它就不能在声明它的类的外部访问。比如：
// class Animal {
//   private name: string;
//   constructor(theName: string) { this.name = theName; }
// }

// new Animal("Cat").name; // 错误: 'name' 是私有的.

// TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，
// 如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。

// 然而，当我们比较带有 private或 protected成员的类型的时候，情况就不同了。 如果其中一个类型里
// 包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是
// 来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。

// 下面来看一个例子，更好地说明了这一点：

class Animal {
  private name:string;
  constructor(theName: string) {
    this.name = theName
  }
}

class Rhino extends Animal{
  constructor() {
    super('Rhino')
  }
}

class Employee{
  private name: string
  constructor(theName: string) {
    this.name = theName
  }
}

let animal = new Animal('Goat')
let rhino = new Rhino();
let employee = new Employee('Bob')
animal = rhino
// animal = employee // 错误: Animal 与 Employee 不兼容.

// 注意，我们不能在 Person类外使用 name，但是我们仍然可以通过 Employee类的实例方法访问，因为
//  Employee是由 Person派生而来的。

// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如，

class Person2 {
  protected name: string;
  protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee2 extends Person2 {
  private department: string;

  constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }

  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee2("Howard", "Sales");
// let john = new Person2("John"); // 错误: 'Person' 的构造函数是被保护的.

// 存取器
// TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

// 下面来看如何把一个简单的类改写成使用 get和 set。 首先，我们从一个没有使用存取器的例子开始。
class Employee3 {
  fullName: string;
}
let employee3= new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
  console.log(employee3.fullName);
}

// 我们可以随意的设置 fullName，这是非常方便的，但是这也可能会带来麻烦。

// 下面这个版本里，我们先检查用户密码是否正确，然后再允许其修改员工信息。 我们把对 fullName的直接访问改成
// 了可以检查密码的 set方法。 我们也加了一个 get方法，让上面的例子仍然可以工作

// 下面这个版本里，我们先检查用户密码是否正确，然后再允许其修改员工信息。 我们把对 fullName的直接访问改成了
// 可以检查密码的set方法。 我们也加了一个 get方法，让上面的例子仍然可以工作。

// let passcode = 'secret passcode'
// class Employee4{
//   private _fullName4: string;
//   get fullName4(): string {
//       return this._fullName4;
//   }
//   set fullName4(newName: string) {
//     if (passcode && passcode == "secret passcode") {
//         this._fullName4 = newName;
//     }
//     else {
//         console.log("Error: Unauthorized update of employee!");
//     }
//   }

// }
// let employee4 = new Employee4()
// employee4.fullName4 = 'Bob Smith'
// if (employee4.fullName4) {
//   alert(employee4.fullName4)
// } 

// 我们可以修改一下密码，来验证一下存取器是否是工作的。当密码不对时，会提示我们没有权限去修改员工。

// 对于存取器有下面几点需要注意的：

// 首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。 不支持降级到ECMAScript 3。 
// 其次，只带有 get不带有 set的存取器自动被推断为 readonly。 这在从代码生成 .d.ts文件时是有帮助的，
// 因为利用这个属性的用户会看到不允许够改变它的值。

// 静态属性


// 高级技巧