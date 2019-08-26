---
title: C#规范
date: 2019-08-05 09:23:00
categories: [CSharp]

---

## T? 和 TryParse 

* 鼠标放入确定按钮时判断两个文本框是否正确（即统一处理时）​```
if(int.TryParse(tb1.Text, out num1) && int.TryParse(tb2.Text, out num2)) 
{
	//...
}​```
* 按钮按下时，鼠标焦点要跳转到数据错误的文本框时（即分开处理时）[错误]```
if(int.TryParse(tb1.Text, out num1)) 
{
	//文本框1出现问题时
	//...
	if(int.TryParse(tb2.Text, out num2)) 
	{
		//文本框2出现问题时 
		//...
	}
} ​```
这样的代码是不宜读的，因为这两个条件应该是平级的。
* 按钮按下时，鼠标焦点要跳转到数据错误的文本框时（即分开处理时）[正确]```
//公共方法
static int? TryParse(String text) 
{
	//int num;
	if(int.TryParse(text,out num) 
	{
		return num;
	} else 
	{
		return null;
	}
}
//调用
int? num1 = TryParse(tb1.Text);
if(num1 != null) 
{
	//文本框1出现问题时
	//...
}
int? num2 = TryParse(tb2.Text);
if(num2 != null) 
{
	//文本框2出现问题时
	//...
}```
这样的代码还有一个好处，变量的作用域扩大了。


## 空合并操作符

``` 
int? a = 5;
int b = 10;
int c = a ?? b;
//当a不等于空是c = a，反之c = b; ```
这样会使代码的易读性变差，所以请勿大量连续使用（或配合注释使用）


# 忽略委托参数

```
button.Click += delegate{Console.WriteLine("Click");};```









