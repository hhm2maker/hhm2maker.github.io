# 单编辑方法

本文档将介绍如何自定义编辑方法。

> 该编辑方法仅供测试，正式版可能会进行调整。
>

> 适用人群：会编写Dynamic Link Library(即.dll)文件的人员。
>

新建一个文件夹。

# 一、配置安装文件

新建一个.xml后缀的文件。(推荐文件名：setup.xml)

打开(用编辑文本文件的软件打开即可，如记事本)。

拷贝下面的内容：

setup.xml



```
<?xml version="1.0" encoding="utf-8"?>

<Setup> 
  <Operations> 
    <Operation> 
      <Name></Name>  
      <Text></Text>  
      <View></View>  
      <Dll></Dll> 
    </Operation> 
  </Operations> 
</Setup>
```

然后对复制的内容进行修改：

Name：操作名称，保证其唯一性，且与之后的dll文件命名空间后半部分相同(后文有详细介绍)。

Text：语言为英文时显示的文本。

View：视图xml文件路径，不需要额外参数是可为空即(view=””)。

Dll：dll文件路径。

setup.xml



```
<?xml version="1.0" encoding="utf-8"?>

<Setup> 
  <Operations> 
    <Operation> 
      <Name>ChangeThePosition</Name>  
      <Text>改变位置</Text>  
      <View>ChangeThePosition</View>  
      <Dll>sample</Dll> 
    </Operation> 
  </Operations> 
</Setup>
```

此时，保存setup.xml文件，



**保存的编码为UTF-8**

打开Maker.exe ，侧栏-第三方，点击![img](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcLY_qIE_2mP9_ccRA2%2F-LcLoj3NMZow3kRvqGsE%2Fsetup.png?alt=media&token=a90707e0-a847-49a9-b59d-d4131b7378ab)(安装编辑插件) 下如下图：

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcLY_qIE_2mP9_ccRA2%2F-LcLy7FgAMEChY_8K_uI%2F%E6%97%A0%E6%A0%87%E9%A2%98CCC.png?alt=media&token=d5fdd515-92f8-4aef-b63a-5b391cd79d52)



点击安装

# 二、配置视图文件



如果你不需要得到额外的参数，那么可以跳过此步骤(如水平翻转)。

新建一个.xml后缀的文件。(必须与setup.xml文件内View对应)

如上面

setup.xml



```
 <View>ChangeThePosition</View>  
```

那么该文件名应为：ChangeThePosition.xml

拷贝下面的内容：

ChangeThePosition.xml



```
<?xml version="1.0" encoding="utf-8"?>

<Views> 
  <View type="textblock" text="参数1"> 
  <View type="textbox"/> 
  <View type="textblock" text="参数2："/> 
  <View type="textbox"/> 
</Views>
```

根据你的需求(即想要获取什么额外参数来配置该文件)。

| 名词 | 解释     | 备注                                                         |
| ---- | -------- | ------------------------------------------------------------ |
| type | 控件类型 | textblock用于显示少量文本内容，可用来展示提示。textbox用于获取文本内容，可用来获取额外参数。当type为textblock时，有以下属性：text：显示的提示文本。 |

那么，接下来就可以自行配置了。

ChangeThePosition.xml



```
<?xml version="1.0" encoding="utf-8"?>

<Views> 
  <View type="textblock" text="改变前数字："/> 
  <View type="textbox"/> 
  <View type="textblock" text="改变后数字："/> 
  <View type="textbox"/> 
</Views>
```

此时，保存ChangeThePosition.xml文件(保存的编码为UTF-8)，重新点击![img](https://firebasestorage.googleapis.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcLY_qIE_2mP9_ccRA2%2F-LcLoj3NMZow3kRvqGsE%2Fsetup.png?alt=media&token=a90707e0-a847-49a9-b59d-d4131b7378ab)(安装编辑插件)，拖动到合适的步骤上，如下图：

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcLY_qIE_2mP9_ccRA2%2F-LcM0Q0veFwW5cZT0v5V%2F%E6%97%A0%E6%A0%87%E9%A2%98DDD.png?alt=media&token=982b6cc6-a24c-462d-a46a-12b664ee446b)



# 三、编写dll文件

以下以Visual Studio 2017：

## ①文件-新建-项目-类库

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcOW2XozwBtOGEXuqbD%2F-LcOX1wv9ce78Wl_L6I0%2FQQ%E6%88%AA%E5%9B%BE20190414094803.png?alt=media&token=b6b5f655-18f7-470f-a769-75a257f8172f)





该名称不做限制(但推荐有标识性)

## ②修改项目名/类名

找到右侧-解决方案资源管理器，修改项目名：图中选中的sample可以不用更改，

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcOW2XozwBtOGEXuqbD%2F-LcOXgGvbWh_4yCvShBA%2FQQ%E6%88%AA%E5%9B%BE20190414095001.png?alt=media&token=b5927e26-2e85-408c-8ced-0463b0bceea9)



而Class1则是需要修改为安装文件Name属性的值即ChangeThePosition。

setup.xml



```
<Name>ChangeThePosition</Name>
```

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcOW2XozwBtOGEXuqbD%2F-LcOYbE3p0zLgfK0XH64%2FQQ%E6%88%AA%E5%9B%BE20190414095417.png?alt=media&token=f0e499d9-1e0c-4aaa-b7c9-d583e8139e6d)



## ③右键引用-添加引用

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcOW2XozwBtOGEXuqbD%2F-LcO_p3FqqBf6uMCcoWD%2FQQ%E6%88%AA%E5%9B%BE20190414100237.png?alt=media&token=c0b80142-8496-466e-ab2f-2fd87fc17545)



在弹出的对话框中，选择-软件根目录Operation.dll文件

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcOW2XozwBtOGEXuqbD%2F-LcO_1KgjRnO3WN31iRr%2FQQ%E6%88%AA%E5%9B%BE20190414100037.png?alt=media&token=e872bada-4d80-41e2-a4d0-ce52d9fb9939)



## ④继承IGetOperationResult并实现IGetOperationResult接口中的方法



```
using Operation;
using System;
using System.Collections.Generic;

namespace sample
{
    public class ChangeThePosition : IGetOperationResult
    {
        public List<Light> GetOperationResult(List<Light> lightGroup, List<string> parameters)
        {
            throw new NotImplementedException();
        }
    }
}
```

## ⑤根据需求操作传入的lightGroup灯光数组并返回(此步骤可以参考最后的附件sample.rar，代码也拷贝至文档最后)。

## ⑥将生成模式改为Release并生成sample.dll。

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcOW2XozwBtOGEXuqbD%2F-LcOazGa79oYs8zNh5me%2FQQ%E6%88%AA%E5%9B%BE20190414100954.png?alt=media&token=d221615d-f14b-4ec9-b154-516749777492)



## ⑦将sample.dll拷贝至最初新建的文件夹下(无需拷贝Operation.dll)

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcOW2XozwBtOGEXuqbD%2F-LcObV-nXKsYqyWcozEi%2FQQ%E6%88%AA%E5%9B%BE20190414101205.png?alt=media&token=81ba827b-434d-48cf-a0b3-7501222a0a77)



## ⑧ 查看结果

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LcP6WvYCiA6euNhU4Kb%2F-LcP6aE5hhPyrHnEufAb%2Fddd.png?alt=media&token=0032f0fa-7df9-4835-89fb-cea5a76abcb9)



至此编辑方法就已扩展成功。

仍有疑问可进Q群586779832进行询问。

# 附录

## 示例压缩包



sample.rar

sample.rar - 216KB

## 附交换位置的dll代码：



```
using Operation;
using System;
using System.Collections.Generic;
namespace sample
{
    //必须要与清单文件name属性对应,且必须继承IGetOperationResult接口
    public class ChangeThePosition : IGetOperationResult
    {
        //实现IGetOperationResult接口中的方法
        public List<Light> GetOperationResult(List<Light> lightGroup, String parameter)
        {
            //lightGroup - 灯光对象数组
            //Light 有四个属性,分别为:Time - 时间,Action - 行为(144开,128关),Position - 位置,Color - 颜色
            //Light 有两个构造函数，分别为无参构造 new Light();
            //                          和四属性构造 new Light(int time,int action,int position,int color);
            //parameter - 传入的参数为参数1,参数2,参数N,如无需参数，则传入的参数为空字符串
            //根据逗号分割
            String[] parameters = parameter.Split(',');
            //以下根据自己的意图操作
            if (parameters.Length != 2) {
                // 判断参数个数是否正确 如果不正确返回空
                return null;
            }
            if (!int.TryParse(parameters[0], out int beforeNumber)) {
                //转换失败返回空
                return null;
            }
            if (!int.TryParse(parameters[1], out int afterNumber))
            {
                //转换失败返回空
                return null;
            }
            //遍历集合
            for (int k = 0; k < lightGroup.Count; k++)
            {
                //如果位置等于前数字
                if(lightGroup[k].Position == beforeNumber) {
                    //那么就改变位置
                    lightGroup[k].Position = afterNumber;
                }
            }
            //返回结果
            return lightGroup;
        }
    }
}
```