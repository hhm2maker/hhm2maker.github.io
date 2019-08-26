---
title: C#笔记
date: 2019-08-07 09:23:00
categories: [CSharp]

---

## 静态构造函数

静态构造函数不能显示调用，它会在类的任何实例被创建之前、类的任何静态成员被引用之前调用。
静态构造函数不能访问所在类的实例成员(但可以访问静态成员)，因此也不能使用this访问器。
``` 
Class Class1
{
	static Class1 ()
	{
		//...
	}
	//...
}```


## 对象创建可以省略参数

``` 
new Point(5,6);
//以下两种{}里面是在初始化实例里时做赋值，且仅能做赋值操作。
new Point(){X = 5,Y = 6};
new Point{X = 5,Y = 6};```
以上创建的对象并无区别，但要注意的是，第一种是通过带参构造函数赋值的；其余两种是通过直接对对象字段赋值的，即修饰符必须是public。
假设Point还有一个公共字段为Z，但是没有带参的构造函数
public Point(int X,int Y,int Z){//...};
那么就不可以用new Point(5,6,7);而是改用new Point(5,6){Z = 7};或是new Point{X = 5,Y = 6,Z = 7}; 后者的代码会更加的清晰。


## const和readonly

简单来说readonly可以修饰实例字段，而const仅能修饰静态字段。
基于以上原理，被readonly修饰的字段可以在之后赋值，当然同样是只能赋一次值。
``` 
Class Shape{
	readonly double PI = 3.1416; //已初始化
	readonly int    Number; //未初始化

	public Shape()
	{
		PI = 0;//错误
		Number = 1;//正确
	}
}```


## 索引器

对象可以包含索引器，索引器不能包括静态字段。
索引器可以返回指定格式的内容，具体如下：
```
public Class MyString{
	public string str1;
	public string str2;
	public string str3;
	
	public string this [int index]
	{
		set
		{
			switch(index){
				case 0: str1 = value;
					break;
				case 1: str2 = value;
					break;
				case 2: str3 = value;
					break;	
				default:
					throw new ArgumentOutOfRangeException("index");//超出范围抛异常
			}
		}
		get
		{
			switch(index){
				case 0: return str1;
					break;
				case 1: return str2;
					break;
				case 2: return str3;
					break;	
				default:
					throw new ArgumentOutOfRangeException("index");//超出范围抛异常
			}
		}
	}
}
//调用
MyString myString = new MyString;
myString[0] = "Hello";
string firstStirng = myString[0];```

索引器是可以重载的，如下：
```
class MyClass
{
	public string this [int index]
	{
		get{//...}
		set{//...}
	}
	
	public string this [int index,int index2]
	{
		get{//...}
		set{//...}
	}
	
	public int this [float index]
	{
		get{//...}
		set{//...}
	}
}```


## 访问器修饰符

* 仅当成员(属性/索引器) 既有get也有set访问器时，可以添加访问修饰符（private等）
* get/set访问器只能有一个有访问修饰符
* 访问器的访问修饰符必须比成员的访问级别有更严格的限制性（即成员是public的，访问器可以设置为private，反之则不行)
限制性层次：public - protected internal - private

此作用常用于构造函数调用时更改成员值，而外部只能获取值不能修改值。
```
public Person
{
	public string Name{get; private set;}
	public Person(string name){
		Name = name;
	}
}
//调用
Person p = new Person("Test");
Console.WriteLine(p.Name);
```


## 基类

### 屏蔽基类成员

```
class SomeClass
{
	public string MyStr;
}

class OtherClass : SomeClass
{
	new Public string MyStr;
}```

### 访问基类

可以通过 base.XXX 来访问
```
Console.WriteLine(base.MyStr);```

### 覆写方法

基类方法修饰符：virtual
派生类方法修饰符:override
```
class MyBaseClass
{
	virtual public void Print(){
		...
	}
}

class MyDerivedClass : MyBaseClass
{
	override public void Print(){
		...
	}
}```

### 构造函数初始化语句

```
public MyDerivedClass(int x,string s) : base(x,s){//...}
public MyDerivedClass(int x,string s) : this(x,s){//...}```
以上两种形式是语义等价的。
也可以设置自定义的值
```
public MyDerivedClass(int x) : base(x,"Hello World"){//...}```

### 成员的可访问性

<style>
table th:first-of-type {
	width: 100px;
}
</style>

修饰符 |  可访问性  
 - | -
public  | 程序集内外都可以访问。 
private | 只能被它自己的类的成员访问；不能被其他的类访问，包括继承它的类。 
protected | 如同private访问级别，但它允许派生自该类的类访问该成员（即使程序集外部继承该类的类也能访问该成员）。 
internale | 成员对程序集内部的所有类可见，但对程序集外部的类不可见。 
protected internal | 成员对所有集成该类的类以及所有程序集内部的类可见。注意这是 protected 和 internal 的并集，不是交集。 
    
### 抽象成员

抽象成员必须是函数成员，即字段和常亮不能，但方法、属性、时间、索引是可以的。
```
abstract public void PrintStuff(string s);//分号替换实现

abstract public int MyProperty//属性是可以抽象的
{
	get;//分号替换实现
	set;//分号替换实现
}```

### 虚成员 和 抽象成员

 |虚成员 |  抽象成员  
- | - | -
关键字 | virtual | abstract 
实现体 | 有实现体 |没有实现体，被分号取代
在派生类中被覆写 | 能被覆写，使用override | 必须被覆写，使用override
成员的类型 | 方法、属性、事件、索引器 | 一样 

### 抽象类可以有普通方法

```
abstract class AbClass
{
	public void IdentifyBase()
	{//...}
}

class DerivedClass : AbClass
{
	//...
} 
//调用
DerivedClass dc = new DerivedClass();
dc.IdentifyBase();//可行```


## 密封类

* 密封类只能被用作独立的类，它不能被用作基类。
* 密封类使用sealed修饰符标注。
```
sealed class MyClass
{
	//...
}```


## 静态类

* 所有成员都是静态的
* 静态类常见的用途：创建一个包含一组数学方法和值的数学库
* 类本身必须标记为static
* 类的所有成员必须是静态的
* 类可以有一个静态构造函数，但不能有实例构造函数，不能创建该类的实例
* 静态类是隐式密封的，也就是说，不能继承静态类

## 扩展方法

扩展方法允许编写的方法和声明它的类之外的类关联
* 声明扩展方法的类必须声明为static
* 扩展方法本身必须声明为static
* 扩展方法必须包含关键字this作为它的第一个参数类型，并在后面跟着它所扩展的类的名称

```
sealed class MyData
{
	private double D1,D2,D3;
	public MyData(double d1,double d2,double d3)
	{D1 = d1;D2 = d2;D3 = d3;}
	
	public double Sum(){return D1 + D2 + D3;}
}

static class ExtendMyData
{
	//声明为静态的
	public static double Average(this MyData md)
	{
		return md.Sum() / 3;
	}
}
//调用
MyData md = new MyData(3,4,5);
Console.WriteLine(md.Sum());
Console.WriteLine(md.Average());```


## 命名约定

风格名称 | 描述 |  推荐使用 | 示例  
- | - | - | -
Pascal大小写 | 标识符中每个单词的首字母大写 | 用于类型名称和类中对外可见成员的名称。涉及的名称包括：类、方法、命名空间、属性和公共字段 | CardDeck、Dealershand 
Camel大小写 | 标识符中每个单词的首字母大写，第一个单词除外 | 用于局部变量的名称和方法声明的形参名称 | totalCycleCount、randomSeedParam
下划线加Camel大小写 | 以下划线开头的Camel大小的标识符 | 用于私有和受保护的字段 | _cycleCount、_selectedIndex


## 逻辑运算符

运算符 | 名称 |  描述
- | - | - 
& | 位与 | 仅当两个操作位都是1时结果位才是1
| | 位或 | 只要任意一个操作位为1时结果位就是1 
^ | 位异或 | 仅当一个而不是两个操作数为1时结果位为1
~ | 位非 | 操作数的每一位都取反。该操作得到操作数的二进制反码（也就是说，每个0都变成1，每个1都变成0。） 


## 移位运算符

运算符 | 名称 |  描述
- | - | - 
<< | 左移 | 将位组向左移动给定数目个位置。位从左边移除并丢失。右边打开的位位置用0填充
>> | 右移 | 将位组向右移动给定数目个位置。位从右边移除并丢失
 

## 条件运算符

单行格式：
```
intVar = x < y ? 5 : 10 ;```

易读格式：
```
intVar = x < y
		 ? 5
		 : 10 ;```

		 
##  用户定义的类型转换

```
//隐式
        必须                     目标类型           源数据
public static implicit operator TargetType (SourceType Identifier)
{
	//...
	return ObjectOfTargetType;
}

//显式 用explicit替换implicit

class LimitedInt
{
	//将LimitedInt转换为int
	public static implicit operator int (LimitedInt li)
	{
		return li.TheValue;
	}
	
	//将int转换为LimitedInt
	public static implicit operator LimitedInt (int x)
	{
		LimitedInt li = new LimitedInt();
		li.TheValue = x;
		return li;
	}
	
	private int _theVlaue = 0;
	public int TheValue{ //... }
}
//调用
LimitedInt li = 500;
int value = li;
//如果是 explicit(强制转换)
LimitedInt li = (LimitedInt)500;
int value = (int)li; ```


## 运算符重载

```
class LimitedInt Return
{
		必须的		 类型	  关键字   运算符              操作数
	-------------   ------    ------  	---            --------------
	public static LimitedInt operator    +        (LimitedInt x, double y)
	{
		LimitedInt li = new LimitedInt();
		li.TheValue = x.TheValue + (int)y;
		return li;
	}
	
	public static LimitedInt - (LimitedInt x)
	{
		//在这个奇怪的类中，取一个值的负数等于0
		LimitedInt li = new LimitedInt();
		li.TheValue = 0;
		return li;
	}
} ```


## using语句

```
using( ResourceType Identifier = Expression) Statement
        ----------------------------------     ----
		            分配资源                  使用资源
					
using( TextWriter tw = File.CreateText("Lincoln.txt"))
{
	tw.WriteLine("写入XX语句");
}

//可以嵌套使用

//场景1
using( ResourceType Id1 = Expr1 , Id2 = Expr2 , ...) EmbeddedStatement
          
using( TextWriter tw1 = File.CreateText("Lincoln.txt"),
				  tw2 = File.CreateText("Franklin.txt"))
{
	tw1.WriteLine("写入XX语句到文件1");
	tw2.WriteLine("写入XX语句到文件2");
}

//场景2
using( TextWriter tw = File.CreateText("Lincoln.txt"))
{
	tw.WriteLine("写入XX语句");
	
	using( TextWriter tw2 = File.CreateText("Franklin.txt"))
	{
		tw2.WriteLine("写入XX语句");
	}
}


//另一种形式的using - 不推荐
using( Expression) EmbeddedStatement
		------
		 资源

TextWriter tw = File.CreateText("Lincoln.txt");
using( tw )
{
	tw.WriteLine("写入XX语句");	 
}
tw.WriteLine("...");//运行时会报错，因为已经释放了

综上，它也会对资源释放，释放后会导致不一致的状态。因此它提供了较少的保护，所以不推荐使用 ```
       

## 枚举

在默认情况情况下，编译器把第一个成员赋值为0，并对每一个后续成员赋的值比前一个成员多一。

```
enum FaceCards
{
	Jack            = 11, // 11 显式设置
	Queen,                // 12 比之前的大1
	King,                 // 13 比之前的大1
	Num             = 4,  // 4  显式设置.
	Num2,                 // 5  比之前的大1
	Num3            = Num // 14 以上定义了Num
} ```


## 数组

### Clone浅复制

对于值类型数组和引用类型数组，都只复制元素，不会复制元素引用的对象。


## 委托

### 匿名函数

#### params参数

如果委托声明的参数列表包含了params参数，那么匿名方法的参数列表将忽略params关键字
```
delegate void SomeDel(int x,params int[] y);

SomeDel mDel = delegate(int x int[] y){
	//...
}; ```


## 事件
   
	   关键字    委托类型     事件名
       -----     -------     --------
public event  EventHandler CountedADozen;


## 接口

### 显式接口成员实现

```
class MyClass : IIfc1,IIfc2
{
	void IIfc1.PrintOut(string s)
	{
		//...
	}
	
	void IIfc2.PrintOut(string s)
	{
		//...
	}
} ```


### 访问显式接口成员实现

```
class MyClass : IIfc1
{
	void IIfc1.PrintOut(string s)
	{
		console.WriteLine("IIfc1");
	}
	
	public void Method1()
	{
		PrintOut("...");               //编译错误
		this.PrintOut("...");          //编译错误
		
		((IIfc1)this).PrintOut("..."); //转换为接口引用 编译成功
	}
} ```


## 转换

溢出检测上下文

checked(表达式)
unchecked(表达式)

```
ushort sh = 2000;
byte sb;

sb = unchecked((byte)sh); //大多数重要的位丢失了
Console.WriteLine(sb); //结果为 208

sb = checked((byte)sh); //大多数重要的位丢失了
Console.WriteLine(sb); //抛出错误 System.OverflowException... 


//或者如下代码：
byte sb;
ushort sh = 2000;

unchecked
{
	sb = (byte)sh;
	Console.WriteLine(sb); 
	
	checked
	{
		sb = (byte)sh;
		Console.WriteLine(sb); 
	}
} ```


## as is 注意点

只能用于引用转换和装箱转换，不能用于用户自定义转换或到值类型的转换。








