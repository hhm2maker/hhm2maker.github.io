# 创建博客界面

```xml
<?xml version="1.0" encoding="utf-8"?>

<Blog> 
  <Author></Author>  
  <HeadPortrait></HeadPortrait>  
  <Contact></Contact>  
  <Introduce></Introduce>  
  <ShortcutName></ShortcutName>
  <Dll url="" name=""/>
  <Buttons> 
    <Button hint="" text="" details=""> 
      <Parameters> 
        <Parameter></Parameter> 
      </Parameters> 
    </Button> 
  </Buttons> 
</Blog>
```

**主结构：**

| 参数         | 解释                       |
| ------------ | -------------------------- |
| Author       | 作者                       |
| HeadPortrait | 头像                       |
| Contact      | 联系方式（QQ/邮箱/网站等） |
| Introduce    | 介绍                       |
| ShortcutName | 快捷方式推荐名称           |
| Dll          | DLL相关参数                |
| Buttons      | 内含多个按钮               |
| Button       | 按钮                       |

**Dll参数：**

| 参数 | 解释                                     |
| ---- | ---------------------------------------- |
| url  | 在线下载需要的DLL文件的zip压缩包所在路径 |
| name | DLL文件的名称                            |

**Button内：**

| 参数       | 解释                            |
| ---------- | ------------------------------- |
| hint       | 提示（显示在左边）              |
| text       | 按钮文本                        |
| details    | 详细描述（如更新内容之类的）    |
| Parameters | 附带参数列表（会传入DLL文件中） |
| Parameter  | 参数                            |

## 填入数据后：
```xml
<?xml version="1.0" encoding="utf-8"?>

<Blog> 
  <Author>hhm</Author>  
  <HeadPortrait>https://www.hhm2maker.com/Maker/hhm.jpg</HeadPortrait>  
  <Contact>https://www.hhm2maker.com</Contact>  
  <Introduce>安装在线第三方编辑方法示例</Introduce>  
  <ShortcutName>Maker-Edit</ShortcutName>  
  <Dll url="https://www.hhm2maker.com/Maker/Online installation editing method.zip" name="OnlineInstallationEditingMethod.dll"/>  
  <Buttons> 
    <Button hint="改变位置" text="下载并安装" details="将指定的位置替换成新的位置"> 
      <Parameters> 
        <Parameter>ChangeThePosition</Parameter>  
        <Parameter>改变位置</Parameter>  
        <Parameter>https://www.hhm2maker.com/Maker/ChangeThePosition.xml</Parameter>  
        <Parameter>https://www.hhm2maker.com/Maker/sample.dll</Parameter> 
      </Parameters> 
    </Button>  
    <Button hint="测试用" text="下载并安装" details="仅测试用"> 
      <Parameters> 
        <Parameter>ChangeThePosition</Parameter>  
        <Parameter>改变位置</Parameter>  
        <Parameter>https://www.hhm2maker.com/Maker/ChangeThePosition.xml</Parameter>  
        <Parameter>https://www.hhm2maker.com/Maker/sample.dll</Parameter> 
      </Parameters> 
    </Button> 
  </Buttons> 
</Blog>
```

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LeRte0CeFPcqJjoAHhG%2F-LeRvhixZSyWHaa8W_xJ%2Fblog.png?alt=media&token=d93d7c68-4dd0-4637-ad40-b90c04ca9a62)

![img](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LU-oxMWYc64m9DG-B71%2F-LeRte0CeFPcqJjoAHhG%2F-LeRvx7NLGzvz8ixtZHk%2Fget.png?alt=media&token=5d4d6e4f-6030-4aae-8da7-7ce1b2d16b82)